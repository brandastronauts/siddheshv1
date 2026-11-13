/**
 * Move page images into the Payload Media library (the standard Payload way: upload once, reference everywhere).
 *
 * Today every block image is a URL string (`image.src`) pointing at a repo file (/src/assets/…, /images/…, /papers/…).
 * This script:
 *   1. collects every image URL used by page-overrides (and shared-sections),
 *   2. resolves each to the real file in the repo (src/assets or public/), de-duplicated by content hash,
 *   3. uploads each unique file ONCE to the Media collection (alt text taken from the block),
 *   4. sets `image.asset` on every block that used it. `image.src` is kept as a fallback, so rendering never breaks.
 *
 * DRY RUN (default, read-only):  npx tsx scripts/migrate-media.ts --db=blueblocks_payload
 * APPLY:                          npx tsx scripts/migrate-media.ts --db=blueblocks_payload --apply --confirm-backup --backup-dir=…
 * APPLY refuses to run unless BLOB_READ_WRITE_TOKEN is set (durable storage). Uploading to local disk would create
 * Media records whose files do not exist on Vercel. Use --allow-local-disk only for a throwaway local test.
 * Idempotent: images already in Media (same content hash) are reused; blocks that already have an asset are skipped.
 */
import * as fs from 'fs'
import * as path from 'path'
import { createHash } from 'crypto'

for (const file of ['.env.local', '.env']) {
  const fp = path.resolve(process.cwd(), file)
  if (!fs.existsSync(fp)) continue
  for (const line of fs.readFileSync(fp, 'utf8').split(/\r?\n/)) {
    const t = line.trim(); if (!t || t.startsWith('#') || !t.includes('=')) continue
    const k = t.slice(0, t.indexOf('=')).trim(); const v = t.slice(t.indexOf('=') + 1).trim().replace(/^["']|["']$/g, '')
    if (!process.env[k]) process.env[k] = v
  }
}
const arg = (n: string) => process.argv.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3)
const flag = (n: string) => process.argv.includes(`--${n}`)
const DB = arg('db'), APPLY = flag('apply'), BACKUP_DIR = arg('backup-dir') || 'audit/rollback'
const COLLECTIONS = ['page-overrides', 'shared-sections']
const MIME: Record<string, string> = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml' }

/** Resolve a site image URL to a file in the repo (tries .jpg/.webp/.png alternates like the frontend resolver). */
function resolveFile(src: string): string | null {
  const clean = src.split('?')[0].split('#')[0]
  if (/^https?:\/\//.test(clean)) return null
  const rel = clean.startsWith('/src/') ? clean.slice(1) : path.join('public', clean)
  const base = rel.replace(/\.(jpe?g|png|webp)$/i, '')
  for (const candidate of [rel, `${base}.webp`, `${base}.jpg`, `${base}.jpeg`, `${base}.png`]) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate
  }
  // last resort: same file name anywhere under public/ or src/assets/
  const name = path.basename(base)
  for (const root of ['public', 'src/assets']) {
    const hit = walk(root).find((f) => path.basename(f).replace(/\.(jpe?g|png|webp)$/i, '') === name)
    if (hit) return hit
  }
  return null
}
const walkCache = new Map<string, string[]>()
function walk(dir: string): string[] {
  if (walkCache.has(dir)) return walkCache.get(dir)!
  const out: string[] = []
  for (const e of fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : []) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...walk(p)); else if (MIME[path.extname(e.name).toLowerCase()]) out.push(p)
  }
  walkCache.set(dir, out)
  return out
}

type ImageRef = { collection: string; docId: string; pathname: string; jsonPath: string; src: string; alt: string }
function collectRefs(collection: string, doc: any, out: ImageRef[]) {
  const visit = (node: any, p: string) => {
    if (Array.isArray(node)) return node.forEach((x, i) => visit(x, `${p}[${i}]`))
    if (!node || typeof node !== 'object') return
    // an image group: has src (string) and no asset yet
    if (typeof node.src === 'string' && node.src && !node.asset && MIME[path.extname(node.src.split('?')[0]).toLowerCase()]) {
      out.push({ collection, docId: String(doc._id), pathname: doc.pathname || doc.title, jsonPath: p, src: node.src, alt: node.alt || '' })
    }
    for (const [k, v] of Object.entries(node)) if (k !== '_id') visit(v, p ? `${p}.${k}` : k)
  }
  visit(doc.sections, 'sections')
}

function setAt(root: any, p: string, key: string, value: any) {
  const parts = p.split(/\.|\[(\d+)\]/).filter((x) => x !== undefined && x !== '')
  let cur = root
  for (const part of parts) cur = cur[/^\d+$/.test(part) ? Number(part) : part]
  cur[key] = value
}

const altFromFile = (f: string) => path.basename(f).replace(/\.[a-z]+$/i, '').replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

async function main() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL missing')
  if (DB) { const u = new URL(process.env.DATABASE_URL); u.pathname = `/${DB}`; process.env.DATABASE_URL = u.toString() }
  if (APPLY && !flag('confirm-backup')) { console.error('--apply requires --confirm-backup'); process.exit(2) }
  if (APPLY && !process.env.BLOB_READ_WRITE_TOKEN && !flag('allow-local-disk')) {
    console.error('Refusing to upload: BLOB_READ_WRITE_TOKEN is not set. Without durable storage the files would only exist on this machine, not on Vercel.')
    process.exit(2)
  }

  const { MongoClient } = await import('mongodb')
  const client = new MongoClient(process.env.DATABASE_URL); await client.connect()
  const refs: ImageRef[] = []
  for (const col of COLLECTIONS) for (const d of await client.db().collection(col).find({}).toArray()) collectRefs(col, d, refs)
  await client.close()

  const files = new Map<string, { file: string; hash: string; size: number; alts: Set<string>; refs: ImageRef[] }>()
  const unresolved = new Map<string, number>()
  for (const r of refs) {
    const file = resolveFile(r.src)
    if (!file) { unresolved.set(r.src, (unresolved.get(r.src) || 0) + 1); continue }
    const buf = fs.readFileSync(file)
    const hash = createHash('sha256').update(buf).digest('hex')
    const e = files.get(hash) || { file, hash, size: buf.length, alts: new Set<string>(), refs: [] }
    if (r.alt) e.alts.add(r.alt)
    e.refs.push(r)
    files.set(hash, e)
  }
  const totalBytes = [...files.values()].reduce((a, f) => a + f.size, 0)
  console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} | image references: ${refs.length} | unique files to upload: ${files.size} (${(totalBytes / 1048576).toFixed(1)} MB) | unresolved: ${unresolved.size}`)
  for (const [src, n] of unresolved) console.log(`  unresolved (left as URL): ${src} (${n} uses)`)
  fs.mkdirSync('audit/media', { recursive: true })
  fs.writeFileSync('audit/media/media-plan.json', JSON.stringify([...files.values()].map((f) => ({ file: f.file, bytes: f.size, alt: [...f.alts][0] || altFromFile(f.file), uses: f.refs.length, pages: [...new Set(f.refs.map((r) => r.pathname))] })), null, 1))
  console.log('Plan: audit/media/media-plan.json')
  if (!APPLY) return

  const [{ getPayload }, { default: config }] = await Promise.all([import('payload'), import('../payload.config.js')])
  const payload = await getPayload({ config })
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')

  // 1. upload (reuse existing Media with the same content hash stored in `sourceHash`)
  const mediaIdByHash = new Map<string, string>()
  for (const f of files.values()) {
    const existing = await payload.find({ collection: 'media', where: { sourceHash: { equals: f.hash } }, limit: 1, depth: 0 })
    if (existing.docs[0]) { mediaIdByHash.set(f.hash, String(existing.docs[0].id)); continue }
    const data = fs.readFileSync(f.file)
    const created = await payload.create({
      collection: 'media',
      data: { alt: [...f.alts][0] || altFromFile(f.file), sourceHash: f.hash, sourcePath: f.file } as any,
      file: { data, mimetype: MIME[path.extname(f.file).toLowerCase()], name: path.basename(f.file), size: data.length },
    })
    mediaIdByHash.set(f.hash, String(created.id))
    console.log(`  uploaded ${f.file} -> media ${created.id}`)
  }

  // 2. point blocks at the Media record (src kept as fallback)
  const byDoc = new Map<string, { collection: string; refs: { ref: ImageRef; mediaId: string }[] }>()
  for (const f of files.values()) for (const r of f.refs) {
    const k = `${r.collection}:${r.docId}`
    const e = byDoc.get(k) || { collection: r.collection, refs: [] }
    e.refs.push({ ref: r, mediaId: mediaIdByHash.get(f.hash)! })
    byDoc.set(k, e)
  }
  for (const [key, e] of byDoc) {
    const id = key.split(':')[1]
    const doc: any = await payload.findByID({ collection: e.collection as any, id, depth: 0 })
    const latest: any = await payload.findByID({ collection: e.collection as any, id, depth: 0, draft: true })
    if (latest?._status === 'draft' && latest.updatedAt !== doc.updatedAt) { console.log(`  skip ${doc.pathname || doc.title} (pending draft)`); continue }
    fs.writeFileSync(path.join(BACKUP_DIR, `${stamp}__media__${String(doc.pathname || doc.title).replace(/[^a-z0-9]+/gi, '_')}.json`), JSON.stringify(doc, null, 1))
    const sections = JSON.parse(JSON.stringify(doc.sections))
    const root = { sections }
    for (const { ref, mediaId } of e.refs) setAt(root, ref.jsonPath, 'asset', mediaId)
    await payload.update({ collection: e.collection as any, id, data: { sections, _status: 'published' } as any, draft: false })
    console.log(`  linked ${e.refs.length} image(s) on ${doc.pathname || doc.title}`)
  }
  process.exit(0)
}
main().catch((e) => { console.error('[migrate-media] failed:', e.message); process.exit(1) })

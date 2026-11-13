/**
 * Find sections that are copied identically onto several pages and (optionally) turn each into ONE
 * Shared Section referenced by those pages — "edit once, update everywhere".
 *
 * DRY RUN (default, read-only): reads siteContent.js + the CMS public read API and reports candidates.
 *   npx tsx scripts/extract-shared-sections.ts
 *   npx tsx scripts/extract-shared-sections.ts --min-pages=3 --report=audit/shared
 *
 * APPLY (writes to MongoDB — only after a backup and explicit approval):
 *   npx tsx scripts/extract-shared-sections.ts --apply --confirm-backup --backup-dir=audit/rollback
 *   For every candidate it creates a published Shared Section, then on each page replaces the copied block
 *   with a `sharedSection` reference. A page is changed ONLY if its CMS block still equals the source copy
 *   (i.e. no editor changed it); pages with edits, unpublished drafts or empty CMS records are skipped.
 *   The previous page document is saved to --backup-dir before every write. Rendered output is identical.
 */

import * as fs from 'fs'
import * as path from 'path'
import { createHash } from 'crypto'
import { createRequire } from 'module'
import { toBlock } from './lib/content-to-blocks'

const arg = (n: string) => process.argv.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3)
const flag = (n: string) => process.argv.includes(`--${n}`)
const MIN_PAGES = Number(arg('min-pages') || 2)
const FROM = (arg('from') || 'https://research-cms.vercel.app').replace(/\/$/, '')
const REPORT_DIR = arg('report') || 'audit/shared'
const BACKUP_DIR = arg('backup-dir') || 'audit/rollback'
const APPLY = flag('apply')

function norm(v: any): any {
  if (Array.isArray(v)) return v.map(norm)
  if (v && typeof v === 'object') {
    const o: any = {}
    for (const [k, x] of Object.entries(v)) {
      if (['id', '_id', 'createdAt', 'updatedAt'].includes(k)) continue
      const n = norm(x)
      if (n === undefined || n === null || n === '' || n === false || (Array.isArray(n) && !n.length) || (typeof n === 'object' && !Array.isArray(n) && !Object.keys(n).length)) continue
      o[k] = n
    }
    return o
  }
  return v
}
const hash = (v: any) => createHash('sha1').update(JSON.stringify(norm(v))).digest('hex').slice(0, 12)

const CATEGORY: Record<string, string> = { accordion: 'faq', faqGroups: 'faq', relatedCards: 'related-links', textBlock: 'citation-notice', highlightBox: 'citation-notice', form: 'contact' }

async function main() {
  if (APPLY && !flag('confirm-backup')) { console.error('Refusing to write: --apply requires --confirm-backup.'); process.exit(2) }
  const req = createRequire(path.join(process.cwd(), 'x.js'))
  const site = (req(path.join(process.cwd(), 'src/content/siteContent.js')).default ?? req(path.join(process.cwd(), 'src/content/siteContent.js'))) as any

  // group identical source sections
  const groups = new Map<string, { block: any; uses: { pathname: string; index: number }[] }>()
  for (const [pathname, page] of Object.entries<any>(site.pages)) {
    ;(page.sections || []).forEach((section: any, index: number) => {
      const block = toBlock(section)
      if (!block || block.blockType === 'hero' || block.blockType === 'publishedPaper') return
      const key = hash(block)
      const g = groups.get(key) || { block, uses: [] }
      g.uses.push({ pathname, index })
      groups.set(key, g)
    })
  }
  const candidates = [...groups.entries()].filter(([, g]) => new Set(g.uses.map((u) => u.pathname)).size >= MIN_PAGES)
    .sort((a, b) => b[1].uses.length - a[1].uses.length)

  // CMS state per page (read-only public API)
  const res = await fetch(`${FROM}/api/page-overrides?limit=1000&depth=0`)
  const docs = new Map<string, any>(((await res.json()) as any).docs.map((d: any) => [d.pathname, d]))

  const rows = candidates.map(([key, g]) => {
    const label = g.block.header || String(g.block.body || g.block.text || '').replace(/\s+/g, ' ').slice(0, 48) || g.block.blockType
    const title = `${label}${label.length >= 48 ? '…' : ''} (${g.uses.length} pages)`
    const uses = g.uses.map((u) => {
      const doc = docs.get(u.pathname)
      const cmsBlock = doc?.sections?.[u.index]
      const state = !doc ? 'no-cms-record' : !(doc.sections || []).length ? 'cms-empty (static fallback)' : cmsBlock && hash(cmsBlock) === key ? 'replaceable' : 'edited-or-moved (skip)'
      return { ...u, state, docId: doc?.id }
    })
    return { key, title, blockType: g.block.blockType, category: CATEGORY[g.block.blockType] || 'other', pages: uses.length, replaceable: uses.filter((u) => u.state === 'replaceable').length, uses, block: g.block }
  })

  fs.mkdirSync(REPORT_DIR, { recursive: true })
  fs.writeFileSync(path.join(REPORT_DIR, 'shared-section-candidates.json'), JSON.stringify(rows.map(({ block, ...r }) => r), null, 1))
  console.log(`Mode: ${APPLY ? 'APPLY (writes!)' : 'DRY RUN (read-only)'} | candidates (identical on >= ${MIN_PAGES} pages): ${rows.length}`)
  for (const r of rows) console.log(`  ${String(r.pages).padStart(3)} pages  ${r.blockType.padEnd(14)} replaceable now: ${String(r.replaceable).padStart(2)}  "${r.title}"`)
  console.log(`Report: ${REPORT_DIR}/shared-section-candidates.json`)
  if (!APPLY) return

  const [{ getPayload }, { default: config }] = await Promise.all([import('payload'), import('../payload.config.js')])
  const payload = await getPayload({ config })
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  for (const r of rows.filter((x) => x.replaceable >= MIN_PAGES)) {
    const shared = await payload.create({ collection: 'shared-sections', data: { title: r.title, category: r.category as any, sections: [r.block], _status: 'published' } as any })
    for (const u of r.uses.filter((x) => x.state === 'replaceable')) {
      const page = (await payload.find({ collection: 'page-overrides', where: { pathname: { equals: u.pathname } }, limit: 1, depth: 0 })).docs[0] as any
      const latest = (await payload.find({ collection: 'page-overrides', where: { pathname: { equals: u.pathname } }, limit: 1, depth: 0, draft: true })).docs[0] as any
      if (!page || latest?._status === 'draft' || hash(page.sections?.[u.index]) !== r.key) { console.log(`  skip ${u.pathname} (changed since dry run or pending draft)`); continue }
      fs.writeFileSync(path.join(BACKUP_DIR, `${stamp}__${u.pathname.replace(/\//g, '_') || '_home'}.json`), JSON.stringify(page, null, 1))
      const sections = [...page.sections]
      sections[u.index] = { blockType: 'sharedSection', section: shared.id }
      await payload.update({ collection: 'page-overrides', id: page.id, data: { sections, _status: 'published' } as any, draft: false })
      console.log(`  linked ${u.pathname} -> shared section ${shared.id}`)
    }
  }
  process.exit(0)
}

main().catch((e) => { console.error('[extract-shared-sections] failed:', e.message); process.exit(1) })

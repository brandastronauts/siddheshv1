/**
 * Remove leftover CMS test markers (e.g. "Navigation-from CMS", "Read Technical Brief-cms") from a Payload global.
 * Only the marker suffix is removed; every other value is untouched.
 *
 *   npx tsx scripts/clean-test-markers.ts --db=blueblocks_payload --global=footer-settings            (dry run)
 *   npx tsx scripts/clean-test-markers.ts --db=blueblocks_payload --global=footer-settings --apply --confirm-backup
 */
import * as fs from 'fs'
import * as path from 'path'

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
const DB = arg('db'), GLOBAL = arg('global') || 'footer-settings', APPLY = process.argv.includes('--apply')
const MARKER = /\s*(?:-|\/)\s*from\s*cms$|\s*-\s*cms$|\s*\/cms$/i

function clean(v: any, p: string, out: { path: string; from: string; to: string }[]): any {
  if (typeof v === 'string') { const to = v.replace(MARKER, ''); if (to !== v) out.push({ path: p, from: v, to }); return to }
  if (Array.isArray(v)) return v.map((x, i) => clean(x, `${p}[${i}]`, out))
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, clean(x, p ? `${p}.${k}` : k, out)]))
  return v
}

async function main() {
  if (APPLY && !process.argv.includes('--confirm-backup')) { console.error('--apply requires --confirm-backup'); process.exit(2) }
  if (DB && process.env.DATABASE_URL) { const u = new URL(process.env.DATABASE_URL); u.pathname = `/${DB}`; process.env.DATABASE_URL = u.toString() }
  const [{ getPayload }, { default: config }] = await Promise.all([import('payload'), import('../payload.config.js')])
  const payload = await getPayload({ config })
  const doc: any = await payload.findGlobal({ slug: GLOBAL as any, depth: 0 })
  const changes: { path: string; from: string; to: string }[] = []
  const { id, createdAt, updatedAt, globalType, ...data } = doc
  const cleaned = clean(data, '', changes)
  console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} — ${GLOBAL} in ${DB || 'configured DB'}: ${changes.length} marker(s)`)
  changes.forEach((c) => console.log(`  ${c.path}: ${JSON.stringify(c.from)} -> ${JSON.stringify(c.to)}`))
  if (APPLY && changes.length) { await payload.updateGlobal({ slug: GLOBAL as any, data: cleaned }); console.log('updated') }
  process.exit(0)
}
main().catch((e) => { console.error('[clean-test-markers] failed:', e.message); process.exit(1) })

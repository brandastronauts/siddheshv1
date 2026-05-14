import * as fs from 'fs'
import * as path from 'path'
function loadEnv(f: string) {
  const fp = path.resolve(process.cwd(), f)
  if (!fs.existsSync(fp)) return
  for (const line of fs.readFileSync(fp, 'utf8').split(/\r?\n/)) {
    const t = line.trim(); if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('='); if (eq === -1) continue
    const key = t.slice(0, eq).trim()
    let val = t.slice(eq + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1)
    if (!process.env[key]) process.env[key] = val
  }
}
loadEnv('.env.local')
async function main() {
  const { getPayload } = await import('payload')
  const { default: config } = await import('../payload.config.js')
  const payload = await getPayload({ config })
  const r = await payload.find({ collection: 'page-overrides', limit: 10, depth: 0, pagination: false })
  console.log('Total docs:', r.totalDocs)
  r.docs.forEach((d: any) => console.log((d._status || 'unknown').padEnd(10), d.pathname))
  process.exit(0)
}
main().catch((e: any) => { console.error(e.message); process.exit(1) })

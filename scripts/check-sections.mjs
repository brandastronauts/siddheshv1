/**
 * Dumps the section types and key fields for a given pathname.
 * Usage: node scripts/check-sections.mjs /publications/resilience-workshop
 */
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pathname = process.argv[2] || '/publications/resilience-workshop'

function loadEnv(f) {
  const fp = path.resolve(__dirname, '..', f)
  if (!fs.existsSync(fp)) return
  for (const line of fs.readFileSync(fp, 'utf8').split(/\r?\n/)) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    const key = t.slice(0, eq).trim()
    let val = t.slice(eq + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1)
    if (!process.env[key]) process.env[key] = val
  }
}
loadEnv('.env.local')
loadEnv('.env')

const { getPayload } = await import('payload')
const { default: config } = await import('../payload.config.js')
const payload = await getPayload({ config })

const result = await payload.find({
  collection: 'page-overrides',
  where: { pathname: { equals: pathname } },
  limit: 1,
  depth: 2,
  pagination: false,
  draft: true,
})

const doc = result.docs[0]
if (!doc) {
  console.log('NOT FOUND:', pathname)
  process.exit(1)
}

console.log(`pathname : ${doc.pathname}`)
console.log(`status   : ${doc._status}`)
console.log(`sections : ${Array.isArray(doc.sections) ? doc.sections.length : 0}\n`)

if (Array.isArray(doc.sections)) {
  doc.sections.forEach((s, i) => {
    const type = s.blockType || s.type || 'unknown'
    const label = s.header || s.heading || s.headline || s.title || s.sectionName || s.name || ''
    console.log(`  [${i + 1}] ${type.padEnd(22)} ${label}`)
  })
}

process.exit(0)

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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
  limit: 200,
  depth: 0,
  pagination: false,
  draft: true,
})

console.log(`Total docs: ${result.totalDocs}\n`)

let withSections = 0
let noSections = 0
let drafts = 0
let published = 0

for (const doc of result.docs) {
  const status = doc._status || 'unknown'
  const sectionCount = Array.isArray(doc.sections) ? doc.sections.length : 0
  if (status !== 'published') drafts++
  else published++
  if (sectionCount > 0) withSections++
  else noSections++
  const flag = sectionCount === 0 ? '  [EMPTY]' : ''
  console.log(`${status.padEnd(10)} ${String(sectionCount).padStart(3)} sections  ${doc.pathname}${flag}`)
}

console.log(`\nSummary: ${published} published, ${drafts} draft`)
console.log(`Content:  ${withSections} with sections, ${noSections} empty`)
process.exit(0)

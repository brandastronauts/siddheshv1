/**
 * Extracts all links, DOI hrefs, CTA hrefs, and ticker text from every CMS page.
 * Run: npx tsx scripts/audit-links.mjs
 */
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
  depth: 3,
  pagination: false,
  draft: true,
})

function extractLinks(obj, links = []) {
  if (!obj || typeof obj !== 'object') return links
  if (Array.isArray(obj)) { obj.forEach(item => extractLinks(item, links)); return links }
  for (const [key, val] of Object.entries(obj)) {
    if ((key === 'href' || key === 'path') && typeof val === 'string' && val) {
      const label = obj.label || obj.title || obj.name || key
      links.push({ label: String(label), href: val })
    }
    if (typeof val === 'object') extractLinks(val, links)
  }
  return links
}

function extractTicker(sections) {
  const ticker = sections.find(s => s.blockType === 'ticker')
  return ticker?.text || (ticker?.items || []).map(i => i.text).join(' /// ') || null
}

for (const doc of result.docs) {
  const sections = Array.isArray(doc.sections) ? doc.sections : []
  const links = extractLinks(sections)
  const doiLinks = links.filter(l => l.href.includes('doi.org') || l.href.includes('zenodo.org'))
  const ticker = extractTicker(sections)

  const hasDoi = doiLinks.length > 0
  const hasSection = sections.length > 0

  if (!hasSection) {
    console.log(`\n⚠️  ${doc.pathname} — NO SECTIONS`)
    continue
  }

  console.log(`\n✓ ${doc.pathname} (${sections.length} sections)`)

  if (ticker) {
    console.log(`  TICKER: ${ticker.slice(0, 120)}`)
  }

  if (doiLinks.length > 0) {
    console.log(`  DOI/ZENODO LINKS:`)
    doiLinks.forEach(l => console.log(`    [${l.label}] → ${l.href}`))
  }

  // Show all other external links
  const extLinks = links.filter(l => l.href.startsWith('http') && !l.href.includes('doi.org') && !l.href.includes('zenodo.org'))
  if (extLinks.length > 0) {
    console.log(`  EXTERNAL LINKS:`)
    extLinks.forEach(l => console.log(`    [${l.label}] → ${l.href}`))
  }
}

process.exit(0)

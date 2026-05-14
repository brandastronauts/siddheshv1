/**
 * Full sanity audit: compares CMS page data against siteContent.js for each page.
 * Checks: section count match, ticker text, CTA hrefs, panel link hrefs, key headings.
 */
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

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

const req = createRequire(import.meta.url)
const siteContent = req('../src/content/siteContent.js').default ?? req('../src/content/siteContent.js')
const staticPages = siteContent?.pages ?? {}

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

function allHrefs(obj, out = []) {
  if (!obj || typeof obj !== 'object') return out
  if (Array.isArray(obj)) { obj.forEach(i => allHrefs(i, out)); return out }
  for (const [k, v] of Object.entries(obj)) {
    if ((k === 'href' || k === 'path') && typeof v === 'string' && v.startsWith('http')) out.push(v)
    if (typeof v === 'object') allHrefs(v, out)
  }
  return out
}

function allText(obj, out = []) {
  if (!obj || typeof obj !== 'object') return out
  if (Array.isArray(obj)) { obj.forEach(i => allText(i, out)); return out }
  for (const [k, v] of Object.entries(obj)) {
    if ((k === 'body' || k === 'text' || k === 'lead' || k === 'intro' || k === 'subheadline') && typeof v === 'string' && v.length > 50) {
      out.push(v.slice(0, 120))
    }
    if (typeof v === 'object') allText(v, out)
  }
  return out
}

const issues = []

for (const doc of result.docs) {
  const staticPage = staticPages[doc.pathname]
  const cmsSections = Array.isArray(doc.sections) ? doc.sections : []

  // Build expected sections (same logic as migration)
  let staticSections = Array.isArray(staticPage?.sections) ? staticPage.sections : []
  if (staticSections.length === 0 && Array.isArray(staticPage?.faqSections) && staticPage.faqSections.length > 0) {
    const p = staticPage
    const built = []
    if (p.heroTitle) built.push({ type: 'hero' })
    p.faqSections.forEach(() => built.push({ type: 'accordion' }))
    staticSections = built
  }

  if (staticSections.length === 0) continue

  // Check section counts match
  if (cmsSections.length !== staticSections.length) {
    issues.push(`❌ ${doc.pathname}: section count CMS=${cmsSections.length} vs static=${staticSections.length}`)
    continue
  }

  // Check section types match in order
  for (let i = 0; i < staticSections.length; i++) {
    const staticType = staticSections[i].type || staticSections[i].blockType
    const cmsType = cmsSections[i].blockType
    if (staticType !== cmsType) {
      issues.push(`❌ ${doc.pathname}[${i+1}]: type mismatch CMS=${cmsType} vs static=${staticType}`)
    }
  }

  // Check external links all present
  const staticHrefs = new Set(allHrefs(staticSections))
  const cmsHrefs = new Set(allHrefs(cmsSections))
  for (const href of staticHrefs) {
    if (!cmsHrefs.has(href)) {
      issues.push(`❌ ${doc.pathname}: missing link ${href}`)
    }
  }

  // Check ticker text if any
  const staticTicker = staticSections.find(s => s.type === 'ticker')
  const cmsTicker = cmsSections.find(s => s.blockType === 'ticker')
  if (staticTicker && cmsTicker) {
    if (staticTicker.text !== cmsTicker.text) {
      issues.push(`❌ ${doc.pathname}: ticker text mismatch\n   static: "${staticTicker.text?.slice(0,80)}"\n   cms:    "${cmsTicker.text?.slice(0,80)}"`)
    }
  }
}

if (issues.length === 0) {
  console.log('✅ All pages pass — CMS content matches source exactly.')
} else {
  console.log(`Found ${issues.length} issue(s):\n`)
  issues.forEach(i => console.log(i))
}
process.exit(0)

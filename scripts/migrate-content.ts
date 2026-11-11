/**
 * Migrates all siteContent.js page sections into Payload CMS blocks.
 * Reads every page from siteContent.js and writes the sections into the
 * corresponding page-overrides document so editors can manage them in the admin.
 *
 * Run with: npx tsx scripts/migrate-content.ts
 *
 * Safe to re-run — existing CMS sections are replaced only if the page
 * currently has 0 sections (i.e. it was never manually edited in the admin).
 * Pass --force to overwrite all pages regardless.
 * Pass --only=/publications,/faq to limit the run to those paths (and their children).
 */

import * as fs from 'fs'
import * as path from 'path'
import { createRequire } from 'module'

function loadEnv(filename: string) {
  const fp = path.resolve(process.cwd(), filename)
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

const FORCE = process.argv.includes('--force')

// Optional scope: --only=/publications,/faq  (exact path or any child path). Without it every page is processed.
// Use with --force to re-sync just those pages from siteContent without touching other pages' CMS edits.
const ONLY = (process.argv.find((a) => a.startsWith('--only='))?.slice('--only='.length) || '')
  .split(',').map((v) => v.trim()).filter(Boolean)
const inScope = (pathname: string) =>
  ONLY.length === 0 || ONLY.some((p) => pathname === p || pathname.startsWith(p.endsWith('/') ? p : `${p}/`))

import { toBlock } from './lib/content-to-blocks'

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const { getPayload } = await import('payload')
  const { default: config } = await import('../payload.config.js')
  const req = createRequire(import.meta.url)
  const siteContent = req('../src/content/siteContent.js').default ?? req('../src/content/siteContent.js')
  const pages: Record<string, any> = siteContent?.pages ?? {}

  console.log('[migrate-content] Initialising Payload...')
  const payload = await getPayload({ config })

  let updated = 0
  let skipped = 0
  let noData = 0

  for (const [pathname, pageData] of Object.entries(pages)) {
    if (!inScope(pathname)) continue
    let staticSections: any[] = Array.isArray(pageData?.sections) ? pageData.sections : []

    // Special case: FAQ page stores content in faqSections instead of sections
    if (staticSections.length === 0 && Array.isArray((pageData as any).faqSections) && (pageData as any).faqSections.length > 0) {
      const p = pageData as any
      staticSections = [{ type: 'faqGroups', heroTitle: p.heroTitle, heroSubtitle: p.heroSubtitle, groups: p.faqSections }]
    }

    if (staticSections.length === 0) { noData++; continue }

    // Find the CMS document
    const result = await payload.find({
      collection: 'page-overrides',
      where: { pathname: { equals: pathname } },
      limit: 1,
      pagination: false,
    })

    const doc = result.docs[0]
    if (!doc) {
      console.log(`  ?  not found  ${pathname}`)
      continue
    }

    const existingSections: any[] = Array.isArray(doc.sections) ? doc.sections : []
    if (!FORCE && existingSections.length > 0) {
      console.log(`  =  skip       ${pathname.padEnd(55)} (${existingSections.length} sections already)`)
      skipped++
      continue
    }

    const blocks = staticSections.map(toBlock).filter(Boolean)
    if (blocks.length !== staticSections.length) {
      const dropped = staticSections.filter((sec: any) => !toBlock(sec)).map((sec: any) => sec?.type)
      console.log(`  !  skipped    ${pathname.padEnd(55)} (unmapped section types: ${dropped.join(', ')}) — CMS sections would replace static ones`)
      skipped++
      continue
    }
    if (blocks.length === 0) { noData++; continue }

    await payload.update({
      collection: 'page-overrides',
      id: doc.id,
      data: {
        sections: blocks,
        pageTitle: doc.pageTitle || pageData.title || undefined,
        _status: 'published',
      },
      draft: false,
    })

    console.log(`  ✓  migrated   ${pathname.padEnd(55)} (${blocks.length} blocks)`)
    updated++
  }

  console.log(`\n[migrate-content] Done. Migrated ${updated}, skipped ${skipped}, no-data ${noData}.`)
  console.log('[migrate-content] Open http://localhost:3001/admin/collections/page-overrides')
  process.exit(0)
}

main().catch((err) => {
  console.error('[migrate-content] Failed:', err.message, err.stack)
  process.exit(1)
})

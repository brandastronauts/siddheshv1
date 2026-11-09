/**
 * Seeds all website pages into Payload CMS using Payload's own local API.
 * This correctly handles the versioning/drafts system on the PageOverrides collection.
 *
 * Run with: npx tsx scripts/seed-pages.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { createRequire } from 'module'

function loadEnv(filename: string) {
  const filePath = path.resolve(process.cwd(), filename)
  if (!fs.existsSync(filePath)) return
  for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
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

// ─── All website pages ────────────────────────────────────────────────────────
// Derived from siteContent so the CMS page list can never drift from the site
// (the previous hand-maintained list missed the published papers, datasets and newer pages).
type SeedPage = { internalName: string; pathname: string; pageTitle: string }

function buildPages(): SeedPage[] {
  const req = createRequire(import.meta.url)
  const siteContent = req('../src/content/siteContent.js').default ?? req('../src/content/siteContent.js')
  const pages: Record<string, any> = siteContent?.pages ?? {}

  const groupLabel = (pathname: string) => {
    const seg = pathname.split('/').filter(Boolean)
    if (seg.length < 2) return ''
    const root = seg[0] === 'governance' && seg[1] === 'team' ? 'Gov Team' : seg[0].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    return root
  }

  return Object.entries(pages).map(([pathname, page]) => {
    const title: string = page?.title || (pathname === '/' ? 'Home' : pathname.split('/').pop()!.replace(/-/g, ' '))
    const group = groupLabel(pathname)
    return { internalName: group ? `${group} — ${title}` : title, pathname, pageTitle: title }
  })
}

const PAGES = buildPages()

async function main() {
  const { getPayload } = await import('payload')
  const { default: config } = await import('../payload.config.js')

  console.log('[seed-pages] Initialising Payload...')
  const payload = await getPayload({ config })

  let created = 0
  let skipped = 0

  for (const page of PAGES) {
    // Check if already exists (Payload-created document with this pathname)
    const existing = await payload.find({
      collection: 'page-overrides',
      where: { pathname: { equals: page.pathname } },
      limit: 1,
      pagination: false,
    })

    if (existing.docs.length > 0) {
      // If doc was created by Payload (has version entries) skip it,
      // otherwise delete the raw-inserted doc and recreate via Payload
      const versions = await payload.findVersions({
        collection: 'page-overrides',
        where: { parent: { equals: existing.docs[0].id } },
        limit: 1,
        pagination: false,
      })
      if (versions.docs.length > 0) {
        console.log(`  =  exists   ${page.pathname.padEnd(52)} ${page.internalName}`)
        skipped++
        continue
      }
      // Raw-inserted document — delete it so we can recreate properly
      await payload.delete({ collection: 'page-overrides', id: existing.docs[0].id })
      console.log(`  ~  replaced ${page.pathname.padEnd(52)} ${page.internalName}`)
    }

    await payload.create({
      collection: 'page-overrides',
      data: {
        internalName: page.internalName,
        pathname:     page.pathname,
        pageTitle:    page.pageTitle,
        sections:     [],
        _status:      'published',
      },
    })

    console.log(`  +  created  ${page.pathname.padEnd(52)} ${page.internalName}`)
    created++
  }

  console.log(`\n[seed-pages] Done. Created ${created}, skipped ${skipped}.`)
  console.log('[seed-pages] Open http://localhost:3001/admin/collections/page-overrides')
  process.exit(0)
}

main().catch((err) => {
  console.error('[seed-pages] Failed:', err.message)
  process.exit(1)
})

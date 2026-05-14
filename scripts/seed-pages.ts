/**
 * Seeds all website pages into Payload CMS using Payload's own local API.
 * This correctly handles the versioning/drafts system on the PageOverrides collection.
 *
 * Run with: npx tsx scripts/seed-pages.ts
 */

import * as fs from 'fs'
import * as path from 'path'

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
const PAGES = [
  // Core pages
  { internalName: 'Home',                                pathname: '/',                                                    pageTitle: 'Home' },
  { internalName: 'The Institute',                       pathname: '/the-institute',                                       pageTitle: 'The Institute' },
  { internalName: 'Methodology',                         pathname: '/methodology',                                         pageTitle: 'Methodology' },
  { internalName: 'Innovation',                          pathname: '/methodology/innovation',                              pageTitle: 'Innovation' },
  { internalName: 'Limitations',                         pathname: '/methodology/limitations',                             pageTitle: 'Limitations' },
  { internalName: 'Tools for Researchers',               pathname: '/methodology/tools',                                   pageTitle: 'Tools for Researchers' },
  { internalName: 'Publications',                        pathname: '/publications',                                        pageTitle: 'Publications' },
  { internalName: 'Open Data Access',                    pathname: '/publications/data',                                   pageTitle: 'Open Data Access' },
  { internalName: 'Glossary',                            pathname: '/publications/glossary',                               pageTitle: 'Glossary' },
  { internalName: 'Citation Standards',                  pathname: '/publications/citation-standards',                     pageTitle: 'Citation Standards' },
  { internalName: 'Governance',                          pathname: '/governance',                                          pageTitle: 'Governance' },
  { internalName: 'Ethics & Privacy',                    pathname: '/governance/ethics',                                   pageTitle: 'Ethics & Privacy' },
  { internalName: 'Research Standards',                  pathname: '/governance/standards',                                pageTitle: 'Research Standards' },
  { internalName: 'Regulatory Compliance',               pathname: '/governance/compliance',                               pageTitle: 'Regulatory Compliance' },
  { internalName: 'Our Standards',                       pathname: '/governance/our-standards',                            pageTitle: 'Our Standards' },
  { internalName: 'Collaborate',                         pathname: '/collaborate',                                         pageTitle: 'Collaborate' },
  { internalName: 'Newsroom',                            pathname: '/newsroom',                                            pageTitle: 'Newsroom' },
  { internalName: 'Contact',                             pathname: '/contact',                                             pageTitle: 'Contact' },
  { internalName: 'FAQ',                                 pathname: '/faq',                                                 pageTitle: 'FAQ' },
  { internalName: 'Team',                                pathname: '/team',                                                pageTitle: 'Team' },
  { internalName: 'Books',                               pathname: '/books',                                               pageTitle: 'Books' },
  { internalName: 'Downloads',                           pathname: '/downloads',                                           pageTitle: 'Downloads' },
  { internalName: 'Patents',                             pathname: '/patents',                                             pageTitle: 'Patents' },
  { internalName: 'Privacy Policy',                      pathname: '/privacy',                                             pageTitle: 'Privacy Policy' },
  { internalName: 'Terms of Use',                        pathname: '/terms',                                               pageTitle: 'Terms of Use' },
  { internalName: 'Sitemap',                             pathname: '/sitemap-html',                                        pageTitle: 'Sitemap' },
  { internalName: 'Staff Access',                        pathname: '/staff-access',                                        pageTitle: 'Staff Access' },
  // Books
  { internalName: 'Book — Lining the Nest',              pathname: '/books/lining-the-nest',                               pageTitle: 'Lining the Nest' },
  // Publications
  { internalName: 'Publication — Flipside Case Study',   pathname: '/publications/flipside-case-study',                    pageTitle: 'Flipside Case Study' },
  { internalName: 'Publication — In-Space Authorization',pathname: '/publications/in-space-authorization-letter',          pageTitle: 'In-Space Authorization Letter' },
  { internalName: 'Publication — Iran War Case Study',   pathname: '/publications/iran-war-case-study',                    pageTitle: 'Iran War Case Study' },
  { internalName: 'Publication — Resilience Workshop',   pathname: '/publications/resilience-workshop',                    pageTitle: 'Resilience Workshop' },
  { internalName: 'Publication — Saparya IMF',           pathname: '/publications/saparya-imf-case-study',                 pageTitle: 'Saparya IMF Case Study' },
  { internalName: 'Publication — Structured Debate',     pathname: '/publications/structured-debate-side-switch',          pageTitle: 'Structured Debate Side-Switch' },
  // Patents
  { internalName: 'Patent — Automated Security UAV',     pathname: '/patents/automated-security-uav',                      pageTitle: 'Automated Security UAV' },
  { internalName: 'Patent — Autonomous Health Monitor',  pathname: '/patents/autonomous-health-monitoring-system',         pageTitle: 'Autonomous Health Monitoring System' },
  { internalName: 'Patent — Autonomous Medical Assist',  pathname: '/patents/autonomous-medical-assistance-system',        pageTitle: 'Autonomous Medical Assistance System' },
  { internalName: 'Patent — Borehole Rescue System',     pathname: '/patents/borehole-rescue-system',                      pageTitle: 'Borehole Rescue System' },
  { internalName: 'Patent — Contactless Delivery',       pathname: '/patents/contactless-delivery-system',                 pageTitle: 'Contactless Delivery System' },
  // Team
  { internalName: 'Team — Adolescent Research Cohort',   pathname: '/team/adolescent-research-cohort',                     pageTitle: 'Adolescent Research Cohort' },
  { internalName: 'Team — Munira Hussain',               pathname: '/team/munira-hussain',                                 pageTitle: 'Munira Hussain' },
  { internalName: 'Team — Pavan Goyal',                  pathname: '/team/pavan-goyal',                                    pageTitle: 'Pavan Goyal' },
  // Governance team
  { internalName: 'Gov Team — Dr Shobha Ediga',          pathname: '/governance/team/dr-shobha-ediga',                     pageTitle: 'Dr Shobha Ediga' },
  { internalName: 'Gov Team — Dr Sreemoyee Chakraborty', pathname: '/governance/team/dr-sreemoyee-chakraborty',            pageTitle: 'Dr Sreemoyee Chakraborty' },
  { internalName: 'Gov Team — Sandhya Rao M',            pathname: '/governance/team/sandhya-rao-m',                       pageTitle: 'Sandhya Rao M' },
  { internalName: 'Gov Team — Sreedhar Reddy Boddu',     pathname: '/governance/team/sreedhar-reddy-boddu',                pageTitle: 'Sreedhar Reddy Boddu' },
  { internalName: 'Gov Team — Sruthi Matta',             pathname: '/governance/team/sruthi-matta',                        pageTitle: 'Sruthi Matta' },
  { internalName: 'Gov Team — Vinay Shyam Donakanti',    pathname: '/governance/team/vinay-shyam-donakanti',               pageTitle: 'Vinay Shyam Donakanti' },
  // Newsroom
  { internalName: 'News Coverage — Nobel Peace Center',  pathname: '/newsroom/coverage/nobel-peace-center',                pageTitle: 'Nobel Peace Center' },
  { internalName: 'News Dispatch — AMI Congress 2026',   pathname: '/newsroom/dispatch/ami-congress-2026-press-release',   pageTitle: 'AMI Congress 2026 — Press Release' },
  { internalName: 'News Dispatch — Iran Crisis Study',   pathname: '/newsroom/dispatch/iran-crisis-study-press-release',   pageTitle: 'Iran Crisis Study — Press Release' },
  { internalName: 'News Dispatch — ISRO Payload Auth',   pathname: '/newsroom/dispatch/isro-payload-authorization',        pageTitle: 'ISRO Payload Authorization' },
  { internalName: 'News Update — IIT Hyderabad',         pathname: '/newsroom/updates/iit-hyderabad-advisory',             pageTitle: 'IIT Hyderabad Advisory' },
  { internalName: 'News Update — Utility Patent 4421',   pathname: '/newsroom/updates/utility-patent-4421',                pageTitle: 'Utility Patent 4421' },
  { internalName: 'News Update — Visiting Scholars',     pathname: '/newsroom/updates/visiting-scholars-2026',             pageTitle: 'Visiting Scholars 2026' },
  // Other
  { internalName: 'Presentation — Marrakesh',            pathname: '/presentations/marrakesh-human-capital',               pageTitle: 'Marrakesh Human Capital' },
  { internalName: 'Proceedings — Oslo 2026',             pathname: '/proceedings/oslo-2026',                               pageTitle: 'Oslo 2026' },
  { internalName: 'Technical Brief — SBB-1',             pathname: '/technical-briefs/sbb-1',                              pageTitle: 'SBB-1' },
]

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

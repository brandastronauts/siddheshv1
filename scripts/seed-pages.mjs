/**
 * Seed stub Page documents for every static route in the website.
 *
 * Creates one document in the `page-overrides` collection per route, so all
 * pages appear in the Payload admin under "Website Content → Pages".
 *
 * Each stub has an empty `sections` array. The frontend's merge logic
 * (src/lib/cms/pageContent.ts) detects empty sections and falls back to
 * the static design in siteContent.js — so seeding does NOT change what
 * visitors see. Editors then add/override sections per page in the admin.
 *
 * Idempotent: existing docs are left untouched (matched by `pathname`).
 *
 * Usage:
 *   npm run db:seed
 */

import { MongoClient } from 'mongodb'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

// ---------------------------------------------------------------------------
// Load environment from .env.local then .env (without overwriting real env)
// ---------------------------------------------------------------------------
function loadEnvFile(filename) {
  const filePath = path.join(projectRoot, filename)
  if (!fs.existsSync(filePath)) return
  const content = fs.readFileSync(filePath, 'utf8')
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const eq = line.indexOf('=')
    if (eq === -1) continue
    const key = line.slice(0, eq).trim()
    let value = line.slice(eq + 1).trim()
    // strip optional surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (process.env[key] === undefined) process.env[key] = value
  }
}

loadEnvFile('.env.local')
loadEnvFile('.env')

const uri = process.env.DATABASE_URL
const dbName = process.env.MONGODB_DB || 'blueblocks_payload'

if (!uri) {
  console.error('[seed] DATABASE_URL is not set. Add it to .env.local')
  process.exit(1)
}

// ---------------------------------------------------------------------------
// All static routes that should be editable in the CMS
// ---------------------------------------------------------------------------
const PAGES = [
  { internalName: 'Home',                  pathname: '/',                              pageTitle: 'Home' },
  { internalName: 'The Institute',         pathname: '/the-institute',                 pageTitle: 'The Institute' },
  { internalName: 'Methodology',           pathname: '/methodology',                   pageTitle: 'Methodology' },
  { internalName: 'Innovation',            pathname: '/methodology/innovation',        pageTitle: 'Innovation' },
  { internalName: 'Limitations',           pathname: '/methodology/limitations',       pageTitle: 'Limitations' },
  { internalName: 'Tools for Researchers', pathname: '/methodology/tools',             pageTitle: 'Tools for Researchers' },
  { internalName: 'Publications',          pathname: '/publications',                  pageTitle: 'Publications' },
  { internalName: 'Open Data Access',      pathname: '/publications/data',             pageTitle: 'Open Data Access' },
  { internalName: 'Glossary',              pathname: '/publications/glossary',         pageTitle: 'Glossary' },
  { internalName: 'Citation Standards',    pathname: '/publications/citation-standards', pageTitle: 'Citation Standards' },
  { internalName: 'Governance',            pathname: '/governance',                    pageTitle: 'Governance' },
  { internalName: 'Ethics & Privacy',      pathname: '/governance/ethics',             pageTitle: 'Ethics & Privacy' },
  { internalName: 'Research Standards',    pathname: '/governance/standards',          pageTitle: 'Research Standards' },
  { internalName: 'Regulatory Compliance', pathname: '/governance/compliance',         pageTitle: 'Regulatory Compliance' },
  { internalName: 'Our Standards',         pathname: '/governance/our-standards',      pageTitle: 'Our Standards' },
  { internalName: 'Collaborate',           pathname: '/collaborate',                   pageTitle: 'Collaborate' },
  { internalName: 'Newsroom',              pathname: '/newsroom',                      pageTitle: 'Newsroom' },
  { internalName: 'Contact',               pathname: '/contact',                       pageTitle: 'Contact' },
  { internalName: 'FAQ',                   pathname: '/faq',                           pageTitle: 'FAQ' },
  { internalName: 'Team',                  pathname: '/team',                          pageTitle: 'Team' },
  { internalName: 'Books',                 pathname: '/books',                         pageTitle: 'Books' },
  { internalName: 'Downloads',             pathname: '/downloads',                     pageTitle: 'Downloads' },
  { internalName: 'Patents',               pathname: '/patents',                       pageTitle: 'Patents' },
  { internalName: 'Privacy Policy',        pathname: '/privacy',                       pageTitle: 'Privacy Policy' },
  { internalName: 'Terms of Use',          pathname: '/terms',                         pageTitle: 'Terms of Use' },
  { internalName: 'Sitemap',               pathname: '/sitemap-html',                  pageTitle: 'Sitemap' },
  { internalName: 'Staff Access',          pathname: '/staff-access',                  pageTitle: 'Staff Access' },

  // ─── Detail pages (one document per /collection/[slug] route) ──────────
  // Books
  { internalName: 'Book — Lining the Nest',                pathname: '/books/lining-the-nest',                                 pageTitle: 'Lining the Nest' },

  // Publications (detail items only — list pages above are separate)
  { internalName: 'Publication — Flipside Case Study',     pathname: '/publications/flipside-case-study',                      pageTitle: 'Flipside Case Study' },
  { internalName: 'Publication — In-Space Authorization',  pathname: '/publications/in-space-authorization-letter',            pageTitle: 'In-Space Authorization Letter' },
  { internalName: 'Publication — Iran War Case Study',     pathname: '/publications/iran-war-case-study',                      pageTitle: 'Iran War Case Study' },
  { internalName: 'Publication — Saparya IMF Case Study',  pathname: '/publications/saparya-imf-case-study',                   pageTitle: 'Saparya IMF Case Study' },

  // Patents
  { internalName: 'Patent — Automated Security UAV',       pathname: '/patents/automated-security-uav',                        pageTitle: 'Automated Security UAV' },
  { internalName: 'Patent — Autonomous Health Monitoring', pathname: '/patents/autonomous-health-monitoring-system',           pageTitle: 'Autonomous Health Monitoring System' },
  { internalName: 'Patent — Autonomous Medical Assistance',pathname: '/patents/autonomous-medical-assistance-system',          pageTitle: 'Autonomous Medical Assistance System' },
  { internalName: 'Patent — Borehole Rescue System',       pathname: '/patents/borehole-rescue-system',                        pageTitle: 'Borehole Rescue System' },
  { internalName: 'Patent — Contactless Delivery System',  pathname: '/patents/contactless-delivery-system',                   pageTitle: 'Contactless Delivery System' },

  // Team profiles (general)
  { internalName: 'Team — Adolescent Research Cohort',     pathname: '/team/adolescent-research-cohort',                       pageTitle: 'Adolescent Research Cohort' },
  { internalName: 'Team — Munira Hussain',                 pathname: '/team/munira-hussain',                                   pageTitle: 'Munira Hussain' },
  { internalName: 'Team — Pavan Goyal',                    pathname: '/team/pavan-goyal',                                      pageTitle: 'Pavan Goyal' },

  // Governance team profiles
  { internalName: 'Gov Team — Dr Shobha Ediga',            pathname: '/governance/team/dr-shobha-ediga',                       pageTitle: 'Dr Shobha Ediga' },
  { internalName: 'Gov Team — Dr Sreemoyee Chakraborty',   pathname: '/governance/team/dr-sreemoyee-chakraborty',              pageTitle: 'Dr Sreemoyee Chakraborty' },
  { internalName: 'Gov Team — Sandhya Rao M',              pathname: '/governance/team/sandhya-rao-m',                         pageTitle: 'Sandhya Rao M' },
  { internalName: 'Gov Team — Sreedhar Reddy Boddu',       pathname: '/governance/team/sreedhar-reddy-boddu',                  pageTitle: 'Sreedhar Reddy Boddu' },
  { internalName: 'Gov Team — Sruthi Matta',               pathname: '/governance/team/sruthi-matta',                          pageTitle: 'Sruthi Matta' },
  { internalName: 'Gov Team — Vinay Shyam Donakanti',      pathname: '/governance/team/vinay-shyam-donakanti',                 pageTitle: 'Vinay Shyam Donakanti' },

  // Newsroom — coverage
  { internalName: 'News Coverage — Nobel Peace Center',    pathname: '/newsroom/coverage/nobel-peace-center',                  pageTitle: 'Nobel Peace Center' },

  // Newsroom — dispatch
  { internalName: 'News Dispatch — Iran Crisis Study',     pathname: '/newsroom/dispatch/iran-crisis-study-press-release',     pageTitle: 'Iran Crisis Study — Press Release' },
  { internalName: 'News Dispatch — ISRO Payload Auth',     pathname: '/newsroom/dispatch/isro-payload-authorization',          pageTitle: 'ISRO Payload Authorization' },

  // Newsroom — updates
  { internalName: 'News Update — IIT Hyderabad Advisory',  pathname: '/newsroom/updates/iit-hyderabad-advisory',               pageTitle: 'IIT Hyderabad Advisory' },
  { internalName: 'News Update — Utility Patent 4421',     pathname: '/newsroom/updates/utility-patent-4421',                  pageTitle: 'Utility Patent 4421' },
  { internalName: 'News Update — Visiting Scholars 2026',  pathname: '/newsroom/updates/visiting-scholars-2026',                pageTitle: 'Visiting Scholars 2026' },

  // Presentations
  { internalName: 'Presentation — Marrakesh Human Capital',pathname: '/presentations/marrakesh-human-capital',                 pageTitle: 'Marrakesh Human Capital' },

  // Proceedings
  { internalName: 'Proceedings — Oslo 2026',               pathname: '/proceedings/oslo-2026',                                 pageTitle: 'Oslo 2026' },

  // Technical Briefs
  { internalName: 'Technical Brief — SBB-1',               pathname: '/technical-briefs/sbb-1',                                pageTitle: 'SBB-1' },
]

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 })

try {
  console.log(`[seed] Connecting to ${dbName} ...`)
  await client.connect()
  const db = client.db(dbName)
  const coll = db.collection('page-overrides')

  let created = 0
  let skipped = 0

  for (const page of PAGES) {
    const existing = await coll.findOne({ pathname: page.pathname })
    if (existing) {
      console.log(`  =  exists   ${page.pathname.padEnd(38)} (${page.internalName})`)
      skipped++
      continue
    }

    const now = new Date()
    await coll.insertOne({
      internalName: page.internalName,
      pathname: page.pathname,
      pageTitle: page.pageTitle,
      sections: [],
      _status: 'published',
      createdAt: now,
      updatedAt: now,
    })
    console.log(`  +  created  ${page.pathname.padEnd(38)} (${page.internalName})`)
    created++
  }

  console.log(`\n[seed] Done. Created ${created}, skipped ${skipped}.`)
  console.log(`[seed] Open http://local.research.cms.com:3001/admin → Website Content → Pages`)
} catch (err) {
  console.error('[seed] Failed:', err.message)
  process.exit(1)
} finally {
  await client.close()
}

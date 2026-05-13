/**
 * Seed the CMS globals (site-settings, footer-settings) with values that
 * mirror the static fallbacks in siteCore.js / navigation.ts.
 *
 * Idempotent: if a global document already has the field set, it is left alone.
 * Pass --force to overwrite every field regardless of existing values.
 *
 * Usage:
 *   npm run db:seed:globals           # safe — only fills empty fields
 *   npm run db:seed:globals -- --force # overwrites every field
 */

import { MongoClient } from 'mongodb'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const force = process.argv.includes('--force')

// ---------------------------------------------------------------------------
// Environment
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
  console.error('[seed:globals] DATABASE_URL is not set.')
  process.exit(1)
}

// ---------------------------------------------------------------------------
// Data (mirrors siteCore.js + navigation.ts static values)
// ---------------------------------------------------------------------------

const SITE_SETTINGS = {
  // Payload stores globals in a collection named after the slug
  _collection: 'site-settings',

  siteName: 'Blue Blocks Micro Research Institute',
  headerTagline: 'Micro Research Institute',
  ethicsTagline:
    "Compiling the world's first longitudinal dataset on human innovation capacity from birth to age 18. 17 years completed; Year 18 ongoing.",
  researchEmail: 'research@blueblocks.in',
  pressEmail: 'press@blueblocks.in',
  socials: {
    linkedin: 'https://www.linkedin.com/company/blue-blocks-micro-research-institute/',
    twitter: 'https://x.com/BlueBlocks_BB',
    email: 'research@blueblocks.in',
  },
  // Primary navigation tree (mirrors siteCore.js nav array)
  navigation: [
    { label: 'Home', path: '/', icon: 'home', external: false, children: [] },
    { label: 'The Institute', path: '/the-institute', icon: 'institute', external: false, children: [] },
    {
      label: 'Methodology', path: '/methodology', icon: 'methodology', external: false,
      children: [
        { label: 'Innovation', path: '/methodology/innovation', icon: 'lightbulb', external: false },
        { label: 'Limitations', path: '/methodology/limitations', icon: 'alert', external: false },
        { label: 'Tools for Researchers', path: '/methodology/tools', icon: 'download', external: false },
      ],
    },
    {
      label: 'Publications', path: '/publications', icon: 'publication', external: false,
      children: [
        { label: 'Open Data Access', path: '/publications/data', icon: 'database', external: false },
        { label: 'Glossary', path: '/publications/glossary', icon: 'bookOpen', external: false },
      ],
    },
    {
      label: 'Governance', path: '/governance', icon: 'governance', external: false,
      children: [
        { label: 'Ethics & Privacy', path: '/governance/ethics', icon: 'lock', external: false },
        { label: 'Research Standards', path: '/governance/standards', icon: 'clipboardList', external: false },
        { label: 'Regulatory Compliance', path: '/governance/compliance', icon: 'scale', external: false },
        { label: 'Our Standards', path: '/governance/our-standards', icon: 'badgeCheck', external: false },
        { label: 'Team', path: '/team', icon: 'team', external: false },
      ],
    },
    { label: 'Collaborate', path: '/collaborate', icon: 'collaborate', external: false, children: [] },
    { label: 'Newsroom', path: '/newsroom', icon: 'newsroom', external: false, children: [] },
    { label: 'Contact', path: '/contact', icon: 'contact', external: false, children: [] },
  ],
}

const FOOTER_SETTINGS = {
  _collection: 'footer-settings',

  socialLinks: [
    { platform: 'facebook', url: 'https://www.facebook.com/blueblocksmontessorischool', label: 'Blue Blocks on Facebook' },
    { platform: 'instagram', url: 'https://www.instagram.com/blueblocksmontessorischool/', label: 'Blue Blocks on Instagram' },
    { platform: 'youtube', url: 'https://www.youtube.com/channel/UCnJ6uX3B-uwAg63PgTK0LhQ', label: 'Blue Blocks on YouTube' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/school/blue-blocks-school', label: 'Blue Blocks on LinkedIn' },
    { platform: 'whatsapp', url: 'https://wa.link/vohpxj', label: 'Blue Blocks on WhatsApp' },
  ],
  governanceLinks: [
    { label: 'Ethics & Privacy', path: '/governance/ethics', external: false },
    { label: 'Research Standards', path: '/governance/standards', external: false },
    { label: 'Regulatory Compliance', path: '/governance/compliance', external: false },
    { label: 'Our Standards', path: '/governance/our-standards', external: false },
  ],
  utilityLinks: [
    { label: 'Open Science Statement', path: '/publications', external: false },
    { label: 'Data Access', path: '/collaborate', external: false },
    { label: 'Research Ethics', path: '/governance', external: false },
  ],
  schoolLink: 'https://www.blueblocks.in/',
  schoolLinkLabel: 'Blue Blocks Montessori School',
}

const SEO_DEFAULTS = {
  _collection: 'seo-defaults',

  siteName: 'Blue Blocks Micro Research Institute',
  baseUrl: 'https://research.blueblocks.in',
  defaultTitle: 'Blue Blocks Micro Research Institute',
  defaultDescription:
    'A longitudinal research institute studying innovation, Montessori development, and human potential through continuous observation from birth to adulthood.',
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Payload v3 stores globals in a MongoDB collection whose name is the slug.
 * Each global has exactly one document — Payload uses { globalType: slug } as
 * the query predicate internally, but we can upsert by slug directly.
 */
async function seedGlobal(db, data) {
  const { _collection, ...fields } = data
  const coll = db.collection(_collection)

  const existing = await coll.findOne({})

  if (!existing) {
    const now = new Date()
    await coll.insertOne({ ...fields, globalType: _collection, createdAt: now, updatedAt: now })
    console.log(`  +  created  ${_collection}`)
    return
  }

  if (!force) {
    console.log(`  =  exists   ${_collection}  (use --force to overwrite)`)
    return
  }

  await coll.updateOne({}, { $set: { ...fields, updatedAt: new Date() } })
  console.log(`  ~  updated  ${_collection}  (--force)`)
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 })

try {
  console.log(`[seed:globals] Connecting to ${dbName} ...`)
  await client.connect()
  const db = client.db(dbName)

  await seedGlobal(db, SITE_SETTINGS)
  await seedGlobal(db, FOOTER_SETTINGS)
  await seedGlobal(db, SEO_DEFAULTS)

  console.log('\n[seed:globals] Done.')
  console.log('[seed:globals] Open http://localhost:3001/admin → Site Configuration')
} catch (err) {
  console.error('[seed:globals] Failed:', err.message)
  process.exit(1)
} finally {
  await client.close()
}

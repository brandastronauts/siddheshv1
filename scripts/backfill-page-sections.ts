/**
 * Backfill the derived `section` field for existing Payload page-overrides records.
 *
 * Defaults to a read-only dry run. Apply mode updates only documents whose section
 * field is missing/blank; existing non-empty values are never overwritten.
 * A full EJSON backup outside the repository is required before any write.
 *
 *   npx tsx scripts/backfill-page-sections.ts --db=blueblocks_payload
 *   npx tsx scripts/backfill-page-sections.ts --db=blueblocks_payload --apply --confirm-backup \
 *     --backup-dir=../siddheshv1-db-backups/page-sections-YYYYMMDD-HHMMSS
 */

import * as fs from 'fs'
import * as path from 'path'
import { BSON, MongoClient } from 'mongodb'
import { sectionOf } from '../src/lib/cms/pageSection.js'

for (const filename of ['.env.local', '.env']) {
  const filePath = path.resolve(process.cwd(), filename)
  if (!fs.existsSync(filePath)) continue
  for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const text = line.trim()
    if (!text || text.startsWith('#') || !text.includes('=')) continue
    const equals = text.indexOf('=')
    const key = text.slice(0, equals).trim()
    const value = text.slice(equals + 1).trim().replace(/^['"]|['"]$/g, '')
    if (!process.env[key]) process.env[key] = value
  }
}

const arg = (name: string) => process.argv.find((entry) => entry.startsWith(`--${name}=`))?.slice(name.length + 3)
const flag = (name: string) => process.argv.includes(`--${name}`)
const databaseName = arg('db')
const apply = flag('apply')
const backupDir = arg('backup-dir')

function databaseURLWithName(url: string, name: string) {
  const parsed = new URL(url)
  parsed.pathname = `/${name}`
  return parsed.toString()
}

async function main() {
  if (!databaseName) throw new Error('Pass --db=<database name>.')
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required (loaded from .env.local or .env).')
  if (apply && !flag('confirm-backup')) throw new Error('--apply requires --confirm-backup.')
  if (apply && !backupDir) throw new Error('--apply requires --backup-dir outside the repository.')

  const absoluteBackupDir = backupDir ? path.resolve(process.cwd(), backupDir) : undefined
  const repositoryPath = `${path.resolve(process.cwd())}${path.sep}`
  if (apply && absoluteBackupDir?.startsWith(repositoryPath)) {
    throw new Error('The backup directory must be outside the repository.')
  }
  if (apply && absoluteBackupDir && fs.existsSync(absoluteBackupDir)) {
    throw new Error(`Refusing to reuse existing backup directory: ${absoluteBackupDir}`)
  }

  const client = new MongoClient(databaseURLWithName(process.env.DATABASE_URL, databaseName))
  await client.connect()
  try {
    const collection = client.db().collection('page-overrides')
    const docs = await collection.find({}, { projection: { pathname: 1, section: 1 } }).toArray()
    if (docs.length === 0) throw new Error(`No page-overrides documents found in database ${databaseName}.`)

    const updates = docs.flatMap((doc: any) => {
      if (typeof doc.pathname !== 'string') return []
      const expected = sectionOf(doc.pathname)
      if (doc.section === expected) return []
      if (doc.section === undefined || doc.section === null || doc.section === '') {
        return [{ id: doc._id, pathname: doc.pathname, section: expected }]
      }
      return []
    })
    const conflicts = docs.filter((doc: any) => {
      if (typeof doc.pathname !== 'string') return false
      return doc.section !== undefined && doc.section !== null && doc.section !== '' && doc.section !== sectionOf(doc.pathname)
    })

    console.log(`Mode: ${apply ? 'APPLY' : 'DRY RUN'} | database ${databaseName} | pages ${docs.length}`)
    console.log(`Missing/blank section labels: ${updates.length}`)
    console.log(`Already correct: ${docs.length - updates.length - conflicts.length}`)
    console.log(`Non-empty differing labels kept untouched: ${conflicts.length}`)
    if (!apply) return

    const fullDocs = await collection.find({}).toArray()
    await fs.promises.mkdir(absoluteBackupDir!, { recursive: true })
    const backupFile = path.join(absoluteBackupDir!, 'page-overrides.ejson')
    fs.writeFileSync(backupFile, BSON.EJSON.stringify(fullDocs, null, 2), { flag: 'wx' })
    console.log(`Backup created: ${backupFile}`)

    let updated = 0
    let raced = 0
    for (const entry of updates) {
      const result = await collection.updateOne(
        {
          _id: entry.id,
          pathname: entry.pathname,
          $or: [{ section: { $exists: false } }, { section: null }, { section: '' }],
        },
        { $set: { section: entry.section } },
      )
      if (result.modifiedCount === 1) updated += 1
      else raced += 1
    }
    console.log(`Updated ${updated} section labels; skipped ${raced} records changed since the scan.`)
  } finally {
    await client.close()
  }
}

main().catch((error) => {
  console.error(`[backfill-page-sections] ${error.message}`)
  process.exitCode = 1
})

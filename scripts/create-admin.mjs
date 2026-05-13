/**
 * Creates a Payload admin user directly in MongoDB using the same
 * pbkdf2 hashing that Payload itself uses — so login works normally.
 *
 * Usage:
 *   node scripts/create-admin.mjs
 */

import { MongoClient } from 'mongodb'
import crypto from 'crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

function loadEnvFile(filename) {
  const filePath = path.join(projectRoot, filename)
  if (!fs.existsSync(filePath)) return
  for (const rawLine of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
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

const uri    = process.env.DATABASE_URL
const dbName = process.env.MONGODB_DB || 'blueblocks_payload'

if (!uri) {
  console.error('[create-admin] DATABASE_URL is not set in .env.local')
  process.exit(1)
}

// ─── Credentials (change if you want different ones) ─────────────────────────
const ADMIN_EMAIL    = 'admin@blueblocks.in'
const ADMIN_PASSWORD = 'Admin@123'
const ADMIN_NAME     = 'Site Admin'
// ─────────────────────────────────────────────────────────────────────────────

// Exactly matches Payload's generatePasswordSaltHash:
//   crypto.pbkdf2(password, salt, 25000, 512, 'sha256')
async function hashPassword(password) {
  const saltBuffer = await new Promise((res, rej) =>
    crypto.randomBytes(32, (err, buf) => (err ? rej(err) : res(buf)))
  )
  const salt = saltBuffer.toString('hex')
  const hashRaw = await new Promise((res, rej) =>
    crypto.pbkdf2(password, salt, 25000, 512, 'sha256', (err, buf) => (err ? rej(err) : res(buf)))
  )
  const hash = hashRaw.toString('hex')
  return { hash, salt }
}

const client = new MongoClient(uri, { serverSelectionTimeoutMS: 15000 })

try {
  console.log('[create-admin] Connecting to database...')
  await client.connect()
  const db    = client.db(dbName)
  const users = db.collection('users')

  const existing = await users.findOne({ email: ADMIN_EMAIL })
  if (existing) {
    console.log(`\n[create-admin] User "${ADMIN_EMAIL}" already exists — deleting and recreating...`)
    await users.deleteOne({ email: ADMIN_EMAIL })
  }

  const { hash, salt } = await hashPassword(ADMIN_PASSWORD)
  const now = new Date()

  await users.insertOne({
    email:      ADMIN_EMAIL,
    name:       ADMIN_NAME,
    role:       'admin',
    hash,
    salt,
    _verified:  true,
    loginAttempts: 0,
    createdAt:  now,
    updatedAt:  now,
  })

  console.log('\n✅ Admin user created!')
  console.log(`   Email   : ${ADMIN_EMAIL}`)
  console.log(`   Password: ${ADMIN_PASSWORD}`)
  console.log(`\n   Open    : http://localhost:3001/admin`)
} catch (err) {
  console.error('[create-admin] Failed:', err.message)
  process.exit(1)
} finally {
  await client.close()
}

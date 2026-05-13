/**
 * Creates an admin user using Payload's own local API (correct password hashing).
 * Run with: npx tsx scripts/create-admin.ts
 */
import * as fs from 'fs'
import * as path from 'path'

// Load .env.local into process.env before anything else
function loadEnv(filename: string) {
  const filePath = path.resolve(process.cwd(), filename)
  if (!fs.existsSync(filePath)) return
  for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let val = trimmed.slice(eq + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1)
    if (!process.env[key]) process.env[key] = val
  }
}
loadEnv('.env.local')
loadEnv('.env')

const ADMIN_EMAIL    = 'admin@blueblocks.in'
const ADMIN_PASSWORD = 'Admin@123'
const ADMIN_NAME     = 'Site Admin'

async function main() {
  // Dynamic import after env is loaded
  const { getPayload } = await import('payload')
  const { default: config } = await import('../payload.config.js')

  console.log('[create-admin] Initialising Payload...')
  const payload = await getPayload({ config })

  // Delete existing user if present
  const existing = await payload.find({
    collection: 'users',
    where: { email: { equals: ADMIN_EMAIL } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    await payload.delete({ collection: 'users', id: existing.docs[0].id })
    console.log('[create-admin] Removed existing user, recreating...')
  }

  await payload.create({
    collection: 'users',
    data: {
      email:    ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      name:     ADMIN_NAME,
      role:     'admin',
    },
  })

  console.log('\n✅ Admin user created!')
  console.log(`   Email   : ${ADMIN_EMAIL}`)
  console.log(`   Password: ${ADMIN_PASSWORD}`)
  console.log(`   Open    : http://localhost:3001/admin`)
  process.exit(0)
}

main().catch((err) => {
  console.error('[create-admin] Failed:', err.message)
  process.exit(1)
})

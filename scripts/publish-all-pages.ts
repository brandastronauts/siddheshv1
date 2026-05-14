/**
 * Publishes every page-override document that is currently in draft state.
 * Safe to re-run — already-published pages are skipped.
 *
 * Run with: npx tsx scripts/publish-all-pages.ts
 */

import * as fs from 'fs'
import * as path from 'path'

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

async function main() {
  const { getPayload } = await import('payload')
  const { default: config } = await import('../payload.config.js')

  console.log('[publish-pages] Initialising Payload...')
  const payload = await getPayload({ config })

  // Fetch all docs (drafts included)
  const result = await payload.find({
    collection: 'page-overrides',
    limit: 1000,
    depth: 0,
    pagination: false,
    draft: true,
  })

  console.log(`[publish-pages] Found ${result.totalDocs} pages total.\n`)

  let published = 0
  let skipped = 0

  for (const doc of result.docs) {
    const d = doc as any
    if (d._status === 'published') {
      console.log(`  =  already published  ${d.pathname}`)
      skipped++
      continue
    }

    await payload.update({
      collection: 'page-overrides',
      id: d.id,
      data: { _status: 'published' },
      draft: false,
    })

    console.log(`  ✓  published          ${d.pathname}`)
    published++
  }

  console.log(`\n[publish-pages] Done. Published ${published}, skipped ${skipped}.`)
  process.exit(0)
}

main().catch((err) => {
  console.error('[publish-pages] Failed:', err.message)
  process.exit(1)
})

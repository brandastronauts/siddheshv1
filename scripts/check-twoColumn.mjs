import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pathname = process.argv[2] || '/publications/resilience-workshop'

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

const { getPayload } = await import('payload')
const { default: config } = await import('../payload.config.js')
const payload = await getPayload({ config })

const result = await payload.find({
  collection: 'page-overrides',
  where: { pathname: { equals: pathname } },
  limit: 1,
  depth: 2,
  pagination: false,
  draft: true,
})

const doc = result.docs[0]
const sections = (doc?.sections || []).filter(s => s.blockType === 'twoColumn')

console.log(`twoColumn sections for ${pathname}:\n`)
sections.forEach((s, i) => {
  const leftSections = s.left?.sections || []
  const rightPanels = s.right?.panels || []
  console.log(`[${i+1}] left.sections: ${leftSections.length}, right.panels: ${rightPanels.length}`)
  leftSections.forEach(ls => console.log(`    left section: "${ls.title}" body len=${ls.body?.length || 0}`))
  rightPanels.forEach(rp => console.log(`    right panel: "${rp.title}" links=${rp.links?.length || 0}`))
})

process.exit(0)

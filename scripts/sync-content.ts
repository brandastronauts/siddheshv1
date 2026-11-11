/**
 * Source → Payload content synchronisation (dry-run first, idempotent, three-way).
 *
 * Question it answers: "the authoritative source (siteContent.js on `main`) changed since the CMS
 * was last seeded — what can be applied to Payload WITHOUT overwriting editors' work?"
 *
 * It compares, per page and per field (leaf level):
 *   BASELINE  – the source the CMS was originally seeded from (a git ref, e.g. the old main tip)
 *   SOURCE    – the current source (working tree siteContent.js)
 *   CMS       – the Payload `page-overrides` record
 *
 *   SOURCE == CMS                         → in sync, nothing to do
 *   CMS == BASELINE, SOURCE changed       → SOURCE_UPDATE  (editor never touched it → safe to apply)
 *   SOURCE == BASELINE, CMS changed       → CMS_EDIT       (editor change → keep, never overwritten)
 *   value only present in CMS             → CMS_ONLY       (schema default / editor addition → keep)
 *   all three differ                      → CONFLICT       (skipped, reported for human review)
 *   field missing in CMS but in an allow-listed schema-added field set → BACKFILL (additive, safe)
 *   page record has 0 sections            → EMPTY          (renders static fallback; populating overwrites nothing)
 *   no page record                        → MISSING_DOC
 *
 * DEFAULT = DRY RUN (read only). Reads the CMS through its public read API, so no credentials are needed.
 *
 *   npx tsx scripts/sync-content.ts --baseline=4e90979
 *   npx tsx scripts/sync-content.ts --baseline=4e90979 --only=/publications --report=audit/sync
 *
 * APPLY (writes to MongoDB — never run automatically):
 *   npx tsx scripts/sync-content.ts --baseline=4e90979 --apply --confirm-backup --backup-dir=audit/rollback
 *   needs DATABASE_URL + PAYLOAD_SECRET (e.g. in .env.local). Only SOURCE_UPDATE / BACKFILL / EMPTY /
 *   MISSING_DOC changes are written; CMS_EDIT and CONFLICT are never touched. Pages with an unpublished
 *   draft are skipped. The previous document is saved to --backup-dir before every write.
 */

import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import { execFileSync } from 'child_process'
import { createRequire } from 'module'
import { toBlock } from './lib/content-to-blocks'

// ─── CLI ─────────────────────────────────────────────────────────────────────
const arg = (name: string) => process.argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3)
const flag = (name: string) => process.argv.includes(`--${name}`)

const BASELINE = arg('baseline') || process.env.SYNC_BASELINE_REF
const FROM = (arg('from') || 'https://research-cms.vercel.app').replace(/\/$/, '')
const ONLY = (arg('only') || '').split(',').map((v) => v.trim()).filter(Boolean)
const REPORT_DIR = arg('report') || 'audit/sync'
const APPLY = flag('apply')
const BACKUP_DIR = arg('backup-dir') || 'audit/rollback'

/** Fields that were added to the Payload schema after the first migration; a missing value is a backfill, not an edit. */
const BACKFILL_FIELDS = new Set(['authors', 'doi', 'verbatim', 'loadMore', 'preserveContent', 'batchSize', 'label'])

const inScope = (p: string) => ONLY.length === 0 || ONLY.some((o) => p === o || p.startsWith(o.endsWith('/') ? o : `${o}/`))

// ─── Source loading ──────────────────────────────────────────────────────────
async function loadSite(dir: string) {
  const req = createRequire(path.join(dir, 'x.js'))
  const mod = req(path.join(dir, 'src/content/siteContent.js'))
  return (mod.default ?? mod) as any
}

/** Extract src/content (+ asset descriptors it imports) at a git ref into a temp dir and load it. */
async function loadBaseline(ref: string) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'bb-baseline-'))
  const tar = execFileSync('git', ['archive', ref, '--', 'src/content', ':(glob)src/assets/**/*.asset.json'], { maxBuffer: 256 * 1024 * 1024 })
  execFileSync('tar', ['-x', '-C', tmp], { input: tar })
  return loadSite(tmp)
}

function sectionsForPage(pageData: any): any[] {
  let sections: any[] = Array.isArray(pageData?.sections) ? pageData.sections : []
  if (sections.length === 0 && Array.isArray(pageData?.faqSections) && pageData.faqSections.length > 0) {
    sections = [{ type: 'faqGroups', heroTitle: pageData.heroTitle, heroSubtitle: pageData.heroSubtitle, groups: pageData.faqSections }]
  }
  return sections
}
const blocksFor = (pageData: any) => sectionsForPage(pageData).map(toBlock).filter(Boolean)

// ─── Normalisation & diff ────────────────────────────────────────────────────
/**
 * Strip ids and "empty" values so Payload defaults / undefined / false don't create noise.
 * Also drops values the Payload schema cannot hold or defaults itself (so they never look like edits):
 *   - image.variant        (no CMS field; the renderer supplies the default)
 *   - secondaryAction that only carries the schema default { disabled: true }
 */
function norm(v: any, key = ''): any {
  if (Array.isArray(v)) return v.map((x) => norm(x, key))
  if (v && typeof v === 'object') {
    const out: Record<string, any> = {}
    for (const [k, val] of Object.entries(v)) {
      if (k === 'id' || k === '_id' || k === 'createdAt' || k === 'updatedAt') continue
      if (k === 'variant' && key === 'image') continue
      const n = norm(val, k)
      if (n === undefined || n === null || n === '' || n === false) continue
      if (Array.isArray(n) && n.length === 0) continue
      if (typeof n === 'object' && !Array.isArray(n) && Object.keys(n).length === 0) continue
      if (k === 'secondaryAction' && typeof n === 'object' && !n.label) continue
      out[k] = n
    }
    return out
  }
  if (typeof v === 'string') return v.replace(/\r\n/g, '\n')
  return v
}
const eq = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b)
const isObj = (v: any) => v && typeof v === 'object' && !Array.isArray(v)

type Change = { kind: 'SOURCE_UPDATE' | 'BACKFILL' | 'CMS_EDIT' | 'CMS_ONLY' | 'CONFLICT'; path: string; base?: any; source?: any; cms?: any }

function diff3(b: any, s: any, c: any, p: string, out: Change[]) {
  if (eq(s, c)) return
  const key = p.split('.').pop() || ''

  // Drill down to leaf level first so a missing optional field is never mistaken for an edit of its whole parent.
  if (isObj(s) && isObj(c)) {
    for (const k of new Set([...Object.keys(s), ...Object.keys(c)])) diff3(isObj(b) ? b[k] : undefined, s[k], c[k], `${p}.${k}`, out)
    return
  }
  if (Array.isArray(s) && Array.isArray(c) && s.length === c.length) {
    s.forEach((_, i) => diff3(Array.isArray(b) ? b[i] : undefined, s[i], c[i], `${p}[${i}]`, out))
    return
  }

  // Leaf (or structurally different array)
  if (c === undefined && s !== undefined && BACKFILL_FIELDS.has(key.replace(/\[\d+\]$/, '')) && (b === undefined || eq(b, s))) { out.push({ kind: 'BACKFILL', path: p, source: s }); return }
  if (s === undefined && b === undefined) { out.push({ kind: 'CMS_ONLY', path: p, cms: c }); return }   // value exists only in CMS (schema default or editor addition) — kept
  if (eq(b, s)) { out.push({ kind: 'CMS_EDIT', path: p, base: b, cms: c }); return }
  if (eq(b, c)) { out.push({ kind: 'SOURCE_UPDATE', path: p, base: b, source: s }); return }
  out.push({ kind: 'CONFLICT', path: p, base: b, source: s, cms: c })
}

// ─── CMS access ──────────────────────────────────────────────────────────────
async function fetchCmsDocs(): Promise<Map<string, any>> {
  const res = await fetch(`${FROM}/api/page-overrides?limit=1000&depth=0`)
  if (!res.ok) throw new Error(`CMS read API returned ${res.status}`)
  const json: any = await res.json()
  return new Map((json.docs || []).map((d: any) => [d.pathname, d]))
}

function setAtPath(root: any, p: string, value: any) {
  const parts = p.replace(/^sections/, 'sections').split(/\.|\[(\d+)\]/).filter((x) => x !== undefined && x !== '')
  let cur = root
  for (let i = 0; i < parts.length - 1; i++) {
    const k = /^\d+$/.test(parts[i]) ? Number(parts[i]) : parts[i]
    if (cur[k] === undefined) cur[k] = /^\d+$/.test(parts[i + 1]) ? [] : {}
    cur = cur[k]
  }
  const last = parts[parts.length - 1]
  cur[/^\d+$/.test(last) ? Number(last) : last] = value
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  if (!BASELINE) {
    console.error('Missing --baseline=<git ref>. Use the commit of `main` the CMS content was seeded from (e.g. --baseline=4e90979).')
    process.exit(2)
  }
  if (APPLY && !flag('confirm-backup')) {
    console.error('Refusing to write: --apply requires --confirm-backup (confirms a database backup exists).')
    process.exit(2)
  }

  const source = await loadSite(process.cwd())
  const baseline = await loadBaseline(BASELINE)
  const docs = await fetchCmsDocs()

  const rows: any[] = []
  const pending: { pathname: string; doc: any; changes: Change[]; blocks?: any[] }[] = []
  const allChanges: { pathname: string; changes: Change[] }[] = []
  const counts: Record<string, number> = {}
  const bump = (k: string) => (counts[k] = (counts[k] || 0) + 1)

  for (const pathname of Object.keys(source.pages).sort()) {
    if (!inScope(pathname)) continue
    const srcBlocks = norm(blocksFor(source.pages[pathname]))
    const baseBlocks = norm(blocksFor(baseline.pages?.[pathname]))
    const doc = docs.get(pathname)

    let status: string, detail = '', changes: Change[] = []
    if (!doc) status = 'MISSING_DOC'
    else if (!(doc.sections || []).length) status = srcBlocks.length ? 'EMPTY' : 'EMPTY_NO_SOURCE_SECTIONS'
    else {
      const cmsBlocks = norm(doc.sections)
      if (eq(srcBlocks, cmsBlocks)) status = 'IN_SYNC'
      else {
        diff3(baseBlocks, srcBlocks, cmsBlocks, 'sections', changes)
        const kinds = new Set(changes.map((c) => c.kind))
        status = kinds.has('CONFLICT') ? 'CONFLICT' : kinds.has('SOURCE_UPDATE') ? 'SOURCE_UPDATE' : kinds.has('BACKFILL') ? 'BACKFILL' : kinds.has('CMS_EDIT') ? 'CMS_EDIT_KEPT' : 'IN_SYNC_CMS_ADDITIONS'
        detail = ['SOURCE_UPDATE', 'BACKFILL', 'CMS_EDIT', 'CMS_ONLY', 'CONFLICT'].map((k) => `${k}:${changes.filter((c) => c.kind === k).length}`).join(' ')
      }
    }
    bump(status)
    if (changes.length) allChanges.push({ pathname, changes })
    rows.push({ pathname, docId: doc?.id || '', status, detail, conflicts: changes.filter((c) => c.kind === 'CONFLICT').map((c) => c.path).join(' | ') })
    if (['MISSING_DOC', 'EMPTY', 'SOURCE_UPDATE', 'BACKFILL', 'CONFLICT'].includes(status)) pending.push({ pathname, doc, changes, blocks: blocksFor(source.pages[pathname]) })
  }

  // ── report
  fs.mkdirSync(REPORT_DIR, { recursive: true })
  const header = 'pathname,payload_id,status,detail,conflict_paths'
  const esc = (v: any) => `"${String(v ?? '').replace(/"/g, '""')}"`
  fs.writeFileSync(path.join(REPORT_DIR, 'sync-plan.csv'), [header, ...rows.map((r) => [r.pathname, r.docId, r.status, r.detail, r.conflicts].map(esc).join(','))].join('\n'))
  const detailJson = allChanges.map((p) => ({ pathname: p.pathname, changes: p.changes.map((c) => ({ ...c, base: trunc(c.base), source: trunc(c.source), cms: trunc(c.cms) })) }))
  fs.writeFileSync(path.join(REPORT_DIR, 'sync-plan-detail.json'), JSON.stringify(detailJson, null, 1))

  console.log(`\nMode: ${APPLY ? 'APPLY (writes!)' : 'DRY RUN (read-only)'} | baseline ${BASELINE} | CMS ${FROM} | pages ${rows.length}`)
  console.log('Summary:', JSON.stringify(counts))
  for (const r of rows.filter((r) => r.status !== 'IN_SYNC')) console.log(`  ${r.status.padEnd(26)} ${r.pathname.padEnd(70)} ${r.detail}`)
  console.log(`\nReport written to ${REPORT_DIR}/sync-plan.csv and sync-plan-detail.json`)
  if (!APPLY) return

  // ── apply (explicitly requested only)
  const [{ getPayload }, { default: config }] = await Promise.all([import('payload'), import('../payload.config.js')])
  const payload = await getPayload({ config })
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  let applied = 0, skipped = 0
  for (const p of pending) {
    if (p.changes.some((c) => c.kind === 'CONFLICT')) { console.log(`  skip (conflict)       ${p.pathname}`); skipped++; continue }
    const existing = (await payload.find({ collection: 'page-overrides', where: { pathname: { equals: p.pathname } }, limit: 1, depth: 0 })).docs[0] as any
    if (existing) {
      const latest = (await payload.find({ collection: 'page-overrides', where: { pathname: { equals: p.pathname } }, limit: 1, depth: 0, draft: true })).docs[0] as any
      if (latest && latest._status === 'draft') { console.log(`  skip (pending draft) ${p.pathname}`); skipped++; continue }
      fs.writeFileSync(path.join(BACKUP_DIR, `${stamp}__${p.pathname.replace(/\//g, '_') || '_home'}.json`), JSON.stringify(existing, null, 1))
    }
    let sections: any[]
    if (!existing || !(existing.sections || []).length) sections = p.blocks || []
    else {
      sections = JSON.parse(JSON.stringify(existing.sections))
      const root = { sections }
      for (const c of p.changes.filter((c) => c.kind === 'SOURCE_UPDATE' || c.kind === 'BACKFILL')) setAtPath(root, c.path, c.source)
    }
    if (existing) await payload.update({ collection: 'page-overrides', id: existing.id, data: { sections, _status: 'published' }, draft: false })
    else await payload.create({ collection: 'page-overrides', data: { internalName: source.pages[p.pathname]?.title || p.pathname, pathname: p.pathname, pageTitle: source.pages[p.pathname]?.title, sections, _status: 'published' } })
    console.log(`  applied               ${p.pathname}`)
    applied++
  }
  console.log(`\nApplied ${applied}, skipped ${skipped}. Backups: ${BACKUP_DIR}`)
  process.exit(0)
}

function trunc(v: any) { const s = JSON.stringify(v); return s && s.length > 300 ? s.slice(0, 300) + '…' : v }

main().catch((e) => { console.error('[sync-content] failed:', e.message); process.exit(1) })

/**
 * Migrates all siteContent.js page sections into Payload CMS blocks.
 * Reads every page from siteContent.js and writes the sections into the
 * corresponding page-overrides document so editors can manage them in the admin.
 *
 * Run with: npx tsx scripts/migrate-content.ts
 *
 * Safe to re-run — existing CMS sections are replaced only if the page
 * currently has 0 sections (i.e. it was never manually edited in the admin).
 * Pass --force to overwrite all pages regardless.
 */

import * as fs from 'fs'
import * as path from 'path'
import { createRequire } from 'module'

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

const FORCE = process.argv.includes('--force')

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Convert a plain string[] to Payload's [{text}] array format */
function toTextArr(items: any): { text: string }[] {
  if (!Array.isArray(items)) return []
  return items.map((v) => ({ text: typeof v === 'string' ? v : (v?.text ?? String(v)) })).filter((v) => v.text)
}

/** Convert a CTA {label, href, path, external, ...} — kept as-is */
function toCta(cta: any) {
  if (!cta) return undefined
  const href = cta.href || cta.path
  if (!cta.label && !href) return undefined
  return { label: cta.label, href, external: Boolean(cta.external), disabled: Boolean(cta.disabled), download: Boolean(cta.download) }
}

/** Convert an image group {src, alt, variant, privacyBlur, caption} — kept as-is */
function toImage(img: any) {
  if (!img) return undefined
  // Keep src as a string path; Payload's resolveMediaURL handles it
  return { src: img.src || '', alt: img.alt || '', variant: img.variant, privacyBlur: Boolean(img.privacyBlur), caption: img.caption }
}

// ─── Reverse-map a siteContent section → Payload block ────────────────────────
function toBlock(section: any): any {
  if (!section?.type) return null
  const { type, id, ...rest } = section
  const base = { blockType: type, id: id ?? undefined }

  switch (type) {
    case 'hero':
      return { ...base, variant: rest.variant, headline: rest.headline, subheadline: rest.subheadline,
        breadcrumb: (rest.breadcrumb || []).map((b: any) => ({ label: b.label, path: b.path })),
        primaryCta: toCta(rest.primaryCta), secondaryCta: toCta(rest.secondaryCta), image: toImage(rest.image) }

    case 'ticker':
      return { ...base, text: rest.text, items: toTextArr(rest.items) }

    case 'grid3':
      return { ...base, header: rest.header, intro: rest.intro,
        items: (rest.items || []).map((i: any) => ({ title: i.title, icon: i.icon, body: i.body, cta: toCta(i.cta) })) }

    case 'cards':
      return { ...base, header: rest.header, intro: rest.intro, variant: rest.variant,
        cards: (rest.cards || []).map((c: any) => ({
          tag: c.tag, headline: c.headline, meta: c.meta, body: c.body, icon: c.icon,
          image: toImage(c.image), action: toCta(c.action || c.cta),
          secondaryAction: c.secondaryAction?.label ? { label: c.secondaryAction.label, disabled: Boolean(c.secondaryAction.disabled) } : undefined,
        })) }

    case 'list':
      return { ...base, sectionName: rest.sectionName, header: rest.header, intro: rest.intro,
        items: (rest.items || []).map((i: any) => ({ title: i.title, meta: i.meta, description: i.description, statusLine: i.statusLine })),
        cta: toCta(rest.cta) }

    case 'libraryCards':
      return { ...base, sectionName: rest.sectionName, header: rest.header, intro: rest.intro,
        cards: (rest.cards || []).map((c: any) => ({ status: c.status, title: c.title, body: c.body })),
        cta: toCta(rest.cta) }

    case 'accordion':
      return { ...base, header: rest.header, intro: rest.intro,
        items: (rest.items || []).map((i: any) => ({ q: i.q || i.question, a: i.a || i.answer })),
        footerCta: toCta(rest.footerCta) }

    case 'statsBar':
      return { ...base, header: rest.header,
        stats: (rest.stats || []).map((s: any) => ({ value: s.value, label: s.label })) }

    case 'highlightBox':
      return { ...base, heading: rest.heading, title: rest.title, body: rest.body,
        bullets: toTextArr(rest.bullets), cta: toCta(rest.cta) }

    case 'timeline':
      return { ...base, header: rest.header,
        items: (rest.items || []).map((i: any) => ({ year: i.year, title: i.title, body: i.body })) }

    case 'comparisonTable':
      return { ...base, heading: rest.heading, header: rest.header, intro: rest.intro,
        headers: toTextArr(rest.headers), columns: toTextArr(rest.columns),
        rows: (rest.rows || []).map((r: any) => {
          if (Array.isArray(r)) return { label: r[0] || '', values: r.slice(1).map((v: any) => ({ text: String(v) })) }
          return { label: r.label || '', values: toTextArr(r.values) }
        }) }

    case 'bento':
      return { ...base, header: rest.header,
        items: (rest.items || []).map((i: any) => ({ size: i.size, tag: i.tag, headline: i.headline, body: i.body, image: toImage(i.image) })) }

    case 'logoStrip':
      return { ...base, header: rest.header, intro: rest.intro,
        logos: (rest.logos || []).map((l: any) => ({ name: l.name, src: l.src, alt: l.alt, role: l.role, collaboration: l.collaboration })) }

    case 'buttonCards':
      return { ...base, header: rest.header, footerNote: rest.footerNote,
        cards: (rest.cards || []).map((c: any) => ({
          title: c.title || c.headline, icon: c.icon, description: c.description || c.body,
          image: typeof c.image === 'string' ? c.image : c.image?.src,
          button: toCta(c.button || c.cta),
        })) }

    case 'downloadList':
      return { ...base, header: rest.header, intro: rest.intro,
        items: (rest.items || []).map((i: any) => ({ title: i.title, description: i.description, format: i.format, href: i.href, size: i.size })) }

    case 'textBlock':
      return { ...base, sectionName: rest.sectionName, header: rest.header, body: rest.body, variant: rest.variant, cta: toCta(rest.cta) }

    case 'form':
      return { ...base, header: rest.header, intro: rest.intro, description: rest.description,
        fields: (rest.fields || []).map((f: any) => ({ name: f.name, label: f.label, type: f.type, placeholder: f.placeholder, required: Boolean(f.required), options: toTextArr(f.options) })),
        submitLabel: rest.submitLabel,
        submit: rest.submit ? { to: rest.submit.to, subject: rest.submit.subject, successMessage: rest.submit.successMessage } : undefined,
        contactNote: toCta(rest.contactNote) }

    case 'featuredStories':
      return { ...base, header: rest.header, layout: rest.layout,
        main: rest.main ? { tag: rest.main.tag, headline: rest.main.headline, excerpt: rest.main.excerpt, image: toImage(rest.main.image), cta: toCta(rest.main.cta) } : undefined,
        side: (rest.side || []).map((s: any) => ({ tag: s.tag, headline: s.headline, excerpt: s.excerpt, image: toImage(s.image), cta: toCta(s.cta) })) }

    case 'pricing':
      return { ...base, header: rest.header,
        columns: (rest.columns || []).map((c: any) => ({ title: c.title, sub: c.sub, body: c.body, badge: c.badge, cta: toCta(c.cta) })) }

    case 'galleryGrid':
      return { ...base, sectionName: rest.sectionName, header: rest.header, intro: rest.intro, body: rest.body, cta: toCta(rest.cta),
        items: (rest.items || []).map((i: any) => ({ tag: i.tag, title: i.title, caption: i.caption, image: toImage(i.image) })) }

    case 'sitemap':
      return { ...base }

    case 'metaStrip':
      return { ...base,
        items: (rest.items || []).map((i: any) => ({ label: i.label, value: i.value, href: i.href, external: Boolean(i.external) })) }

    case 'twoColumn':
      return { ...base, header: rest.header, intro: rest.intro, variant: rest.variant, compact: Boolean(rest.compact), footer: rest.footer, cta: toCta(rest.cta),
        left: rest.left ? { heading: rest.left.heading, icon: rest.left.icon, lead: rest.left.lead, items: (rest.left.items || []).map((i: any) => ({ label: i.label, text: i.text })) } : undefined,
        right: rest.right ? { heading: rest.right.heading, icon: rest.right.icon, lead: rest.right.lead, items: (rest.right.items || []).map((i: any) => ({ label: i.label, text: i.text })) } : undefined }

    case 'relatedCards':
      return { ...base, header: rest.header,
        cards: (rest.cards || []).map((c: any) => ({
          title: c.title, description: c.description || c.body, icon: c.icon,
          href: c.href || c.action?.href || '',
        })) }

    case 'patentGrid':
      return { ...base, header: rest.header, intro: rest.intro, filterNote: rest.filterNote,
        patents: (rest.patents || []).map((p: any) => ({ title: p.title, status: p.status, applicationNo: p.applicationNo, inventors: p.inventors, description: p.description, href: p.href, category: p.category, filingDate: p.filingDate, ageGroup: p.ageGroup })) }

    case 'profile':
      return { ...base, name: rest.name, role: rest.role, email: rest.email, image: toImage(rest.image), bio: rest.bio,
        socials: (rest.socials || []).map((s: any) => ({ type: s.type, label: s.label, href: s.href })) }

    case 'glossaryAccordion':
      return { ...base, header: rest.header,
        items: (rest.items || []).map((i: any) => ({ term: i.term, definition: i.definition })) }

    case 'numberedCards':
      return { ...base, header: rest.header,
        items: (rest.items || []).map((i: any) => ({ number: String(i.number), title: i.title, body: i.body })) }

    case 'tierCards':
      return { ...base, header: rest.header,
        tiers: (rest.tiers || []).map((t: any) => ({ label: t.label, title: t.title, subtitle: t.subtitle, body: t.body, bullets: toTextArr(t.bullets), note: t.note, cta: toCta(t.cta) })) }

    case 'toolCards':
      return { ...base, header: rest.header,
        tools: (rest.tools || []).map((t: any) => ({ title: t.title, subtitle: t.subtitle, body: t.body, details: toTextArr(t.details), downloads: (t.downloads || []).map((d: any) => ({ label: d.label, href: d.href })) })) }

    case 'checklist':
      return { ...base, header: rest.header, intro: rest.intro, body: rest.body, items: toTextArr(rest.items) }

    case 'tableBlock':
      return { ...base, header: rest.header, intro: rest.intro, headers: toTextArr(rest.headers),
        rows: (rest.rows || []).map((r: any) => ({ cells: Array.isArray(r) ? toTextArr(r) : toTextArr(r?.cells) })) }

    case 'anchorBlock':
      return { ...base, header: rest.header, body: rest.body }

    case 'timelineSteps':
      return { ...base, header: rest.header,
        steps: (rest.steps || []).map((s: any) => ({ title: s.title, body: s.body, bullets: toTextArr(s.bullets) })) }

    case 'pillars':
      return { ...base, header: rest.header,
        items: (rest.items || []).map((i: any) => ({ title: i.title, icon: i.icon, body: i.body })) }

    case 'frameworkPapers':
      return { ...base, header: rest.header,
        papers: (rest.papers || []).map((p: any) => ({ title: p.title, doi: p.doi, link: p.link, body: p.body })) }

    case 'dossierHeader':
      return { ...base, title: rest.title, subtitle: rest.subtitle, classification: rest.classification,
        dataPanel: (rest.dataPanel || []).map((i: any) => ({ label: i.label, value: i.value })) }

    case 'dossierSection':
      return { ...base, number: rest.number, label: rest.label, header: rest.header, body: rest.body, variant: rest.variant }

    case 'dossierQuoteStrip':
      return { ...base, quote: rest.quote }

    case 'dossierSpecTable':
      return { ...base, number: rest.number, label: rest.label, header: rest.header,
        rows: (rest.rows || []).map((r: any) => ({ label: r.label, value: r.value })) }

    case 'dossierTimeline':
      return { ...base, number: rest.number, label: rest.label,
        events: (rest.events || []).map((e: any) => ({ date: e.date, description: e.description })) }

    case 'dossierNotice':
      return { ...base, label: rest.label, body: rest.body }

    case 'dossierPrinciples':
      return { ...base, number: rest.number, label: rest.label, header: rest.header, intro: rest.intro,
        principles: (rest.principles || []).map((p: any) => ({ number: p.number, title: p.title, body: p.body })),
        conclusion: rest.conclusion }

    case 'dossierGallery':
      return { ...base, number: rest.number, label: rest.label,
        images: (rest.images || []).map((i: any) => ({ src: i.src, alt: i.alt, caption: i.caption })) }

    case 'dossierArchiveNotice':
      return { ...base, body: rest.body }

    case 'dossierRelated':
      return { ...base, header: rest.header,
        cards: (rest.cards || []).map((c: any) => ({ title: c.title, description: c.description, icon: c.icon, href: c.href })) }

    default:
      return null
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const { getPayload } = await import('payload')
  const { default: config } = await import('../payload.config.js')
  const req = createRequire(import.meta.url)
  const siteContent = req('../src/content/siteContent.js').default ?? req('../src/content/siteContent.js')
  const pages: Record<string, any> = siteContent?.pages ?? {}

  console.log('[migrate-content] Initialising Payload...')
  const payload = await getPayload({ config })

  let updated = 0
  let skipped = 0
  let noData = 0

  for (const [pathname, pageData] of Object.entries(pages)) {
    const staticSections: any[] = Array.isArray(pageData?.sections) ? pageData.sections : []
    if (staticSections.length === 0) { noData++; continue }

    // Find the CMS document
    const result = await payload.find({
      collection: 'page-overrides',
      where: { pathname: { equals: pathname } },
      limit: 1,
      pagination: false,
    })

    const doc = result.docs[0]
    if (!doc) {
      console.log(`  ?  not found  ${pathname}`)
      continue
    }

    const existingSections: any[] = Array.isArray(doc.sections) ? doc.sections : []
    if (!FORCE && existingSections.length > 0) {
      console.log(`  =  skip       ${pathname.padEnd(55)} (${existingSections.length} sections already)`)
      skipped++
      continue
    }

    const blocks = staticSections.map(toBlock).filter(Boolean)
    if (blocks.length === 0) { noData++; continue }

    await payload.update({
      collection: 'page-overrides',
      id: doc.id,
      data: {
        sections: blocks,
        pageTitle: doc.pageTitle || pageData.title || undefined,
      },
    })

    console.log(`  ✓  migrated   ${pathname.padEnd(55)} (${blocks.length} blocks)`)
    updated++
  }

  console.log(`\n[migrate-content] Done. Migrated ${updated}, skipped ${skipped}, no-data ${noData}.`)
  console.log('[migrate-content] Open http://localhost:3001/admin/collections/page-overrides')
  process.exit(0)
}

main().catch((err) => {
  console.error('[migrate-content] Failed:', err.message, err.stack)
  process.exit(1)
})

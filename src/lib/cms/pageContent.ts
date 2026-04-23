import { cache } from 'react'
import siteContent from '@/content/siteContent'

const isCMSEnabled = Boolean(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)

export const getPageContent = cache(async (pathname: string) => {
  const staticPage = (siteContent as any).pages?.[pathname] ?? null

  if (!isCMSEnabled) return staticPage

  try {
    const [{ getPayload }, { default: config }] = await Promise.all([
      import('payload'),
      import('@payload-config'),
    ])

    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'page-overrides',
      where: { pathname: { equals: pathname } },
      depth: 2,
      limit: 1,
      draft: false,
    })

    const doc = result?.docs?.[0]
    if (!doc) return staticPage

    const mapped = mapPageDoc(doc, pathname)
    if (!staticPage) return mapped

    return mergePage(staticPage, mapped)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[cms] Falling back to static content for "${pathname}".`, error)
    }
    return staticPage
  }
})

function mergePage(staticPage: any, cmsPage: any) {
  const merged = deepMerge(staticPage, cmsPage)
  if (!cmsPage?.sections?.length && staticPage?.sections) merged.sections = staticPage.sections
  return merged
}

function deepMerge(base: any, override: any): any {
  if (!override) return base
  if (!base) return override
  if (Array.isArray(base) || Array.isArray(override)) return override
  if (typeof base !== 'object' || typeof override !== 'object') return override

  const out: Record<string, any> = { ...base }
  for (const key of Object.keys(override)) {
    out[key] = key in base ? deepMerge(base[key], override[key]) : override[key]
  }
  return out
}

function mapPageDoc(doc: any, pathname: string) {
  const sections = Array.isArray(doc.sections) ? doc.sections.map(mapSectionBlock).filter(Boolean) : []

  return {
    title: doc.pageTitle || undefined,
    metaDescription: doc.metaDescription || undefined,
    seo: mapSeo(doc.seo, pathname, doc.pageTitle),
    schemas: mapSchemas(doc.schemas),
    sections,
    stickyCta: mapCTA(doc.stickyCta),
  }
}

function mapSeo(seo: any, pathname: string, fallbackTitle?: string) {
  if (!seo && !fallbackTitle) return undefined

  const ogImageURL = resolveMediaURL(seo?.ogImage) || normalizeURL(seo?.ogImageUrl)
  const twitterImageURL = resolveMediaURL(seo?.twitterImage) || normalizeURL(seo?.twitterImageUrl)

  return {
    title: seo?.title || fallbackTitle || undefined,
    description: seo?.description || undefined,
    canonical: seo?.canonical || undefined,
    keywords: seo?.keywords || undefined,
    robots: seo?.robots || undefined,
    openGraph: {
      type: seo?.ogType || 'website',
      url: seo?.canonical || pathname,
      title: seo?.ogTitle || seo?.title || fallbackTitle || undefined,
      description: seo?.ogDescription || seo?.description || undefined,
      image: ogImageURL
        ? {
            url: ogImageURL,
            alt: seo?.ogImageAlt || '',
            width: 1200,
            height: 630,
          }
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || seo?.title || fallbackTitle || undefined,
      description: seo?.twitterDescription || seo?.description || undefined,
      image: twitterImageURL || ogImageURL || undefined,
    },
  }
}

function mapSchemas(schemas: any) {
  if (!Array.isArray(schemas)) return undefined
  const nodes = schemas
    .map((entry) => entry?.schema)
    .filter((schema) => schema && typeof schema === 'object')
  return nodes.length ? nodes : undefined
}

function mapSectionBlock(block: any) {
  switch (block.blockType) {
    case 'hero':
      return {
        type: 'hero',
        id: block.id,
        variant: block.variant,
        headline: block.headline,
        subheadline: block.subheadline,
        breadcrumb: (block.breadcrumb || []).map((item: any) => ({
          label: item.label,
          path: item.path,
        })),
        primaryCta: mapCTA(block.primaryCta),
        secondaryCta: mapCTA(block.secondaryCta),
        image: mapImageGroup(block.image, 'hero'),
      }

    case 'ticker':
      return {
        type: 'ticker',
        id: block.id,
        text: block.text,
        items: mapTextArray(block.items),
      }

    case 'grid3':
      return {
        type: 'grid3',
        id: block.id,
        header: block.header,
        intro: block.intro,
        items: (block.items || []).map((item: any) => ({
          title: item.title,
          icon: item.icon,
          body: item.body,
          cta: mapCTA(item.cta),
        })),
      }

    case 'cards':
      return {
        type: 'cards',
        id: block.id,
        header: block.header,
        intro: block.intro,
        variant: block.variant,
        cards: (block.cards || []).map((card: any) => {
          const action = mapCTA(card.action || card.cta)
          return {
            tag: card.tag,
            headline: card.headline,
            meta: card.meta,
            body: card.body,
            icon: card.icon,
            image: mapImageGroup(card.image, 'card'),
            action,
            cta: action,
            secondaryAction: card.secondaryAction?.label
              ? { label: card.secondaryAction.label, disabled: Boolean(card.secondaryAction.disabled) }
              : undefined,
          }
        }),
      }

    case 'list':
      return {
        type: 'list',
        id: block.id,
        sectionName: block.sectionName,
        header: block.header,
        intro: block.intro,
        items: (block.items || []).map((item: any) => ({
          title: item.title,
          meta: item.meta,
          description: item.description,
          statusLine: item.statusLine,
        })),
        cta: mapCTA(block.cta),
      }

    case 'libraryCards':
      return {
        type: 'libraryCards',
        id: block.id,
        sectionName: block.sectionName,
        header: block.header,
        intro: block.intro,
        cards: (block.cards || []).map((card: any) => ({
          status: card.status,
          title: card.title,
          body: card.body,
        })),
        cta: mapCTA(block.cta),
      }

    case 'accordion':
      return {
        type: 'accordion',
        id: block.id,
        header: block.header,
        intro: block.intro,
        items: (block.items || []).map((item: any) => ({
          q: item.q || item.question,
          a: item.a || item.answer,
        })),
        footerCta: mapCTA(block.footerCta),
      }

    case 'statsBar':
      return {
        type: 'statsBar',
        id: block.id,
        header: block.header,
        stats: (block.stats || []).map((stat: any) => ({
          value: stat.value,
          label: stat.label,
        })),
      }

    case 'highlightBox':
      return {
        type: 'highlightBox',
        id: block.id,
        heading: block.heading,
        title: block.title,
        body: block.body,
        bullets: mapTextArray(block.bullets),
        cta: mapCTA(block.cta),
      }

    case 'timeline':
      return {
        type: 'timeline',
        id: block.id,
        header: block.header,
        items: (block.items || []).map((item: any) => ({
          year: item.year,
          title: item.title,
          body: item.body,
        })),
      }

    case 'comparisonTable':
      return {
        type: 'comparisonTable',
        id: block.id,
        heading: block.heading,
        header: block.header,
        intro: block.intro,
        headers: mapTextArray(block.headers),
        columns: mapTextArray(block.columns),
        rows: (block.rows || []).map((row: any) => ({
          label: row.label,
          values: mapTextArray(row.values),
        })),
      }

    case 'bento':
      return {
        type: 'bento',
        id: block.id,
        header: block.header,
        items: (block.items || []).map((item: any) => ({
          size: item.size,
          tag: item.tag,
          headline: item.headline,
          body: item.body,
          image: mapImageGroup(item.image, 'card'),
        })),
      }

    case 'logoStrip':
      return {
        type: 'logoStrip',
        id: block.id,
        header: block.header,
        intro: block.intro,
        logos: (block.logos || []).map((logo: any) => ({
          name: logo.name,
          src: resolveMediaURL(logo.asset) || normalizeURL(logo.src),
          alt: logo.alt,
          role: logo.role,
          collaboration: logo.collaboration,
        })),
      }

    case 'buttonCards':
      return {
        type: 'buttonCards',
        id: block.id,
        header: block.header,
        footerNote: block.footerNote,
        cards: (block.cards || []).map((card: any) => ({
          title: card.title,
          icon: card.icon,
          description: card.description,
          image: card.image,
          button: mapCTA(card.button),
        })),
      }

    case 'downloadList':
      return {
        type: 'downloadList',
        id: block.id,
        header: block.header,
        intro: block.intro,
        items: (block.items || []).map((item: any) => ({
          title: item.title,
          description: item.description,
          format: item.format,
          href: item.href,
          size: item.size,
        })),
      }

    case 'textBlock':
      return {
        type: 'textBlock',
        id: block.id,
        sectionName: block.sectionName,
        header: block.header,
        body: block.body,
        variant: block.variant,
        cta: mapCTA(block.cta),
      }

    case 'form':
      return {
        type: 'form',
        id: block.id,
        header: block.header,
        intro: block.intro,
        description: block.description,
        fields: (block.fields || []).map((field: any) => ({
          name: field.name,
          label: field.label,
          type: field.type,
          placeholder: field.placeholder,
          required: Boolean(field.required),
          options: mapTextArray(field.options),
        })),
        submitLabel: block.submitLabel,
        submit: block.submit
          ? {
              to: block.submit.to,
              subject: block.submit.subject,
              successMessage: block.submit.successMessage,
            }
          : undefined,
        contactNote: mapCTA(block.contactNote),
      }

    case 'featuredStories':
      return {
        type: 'featuredStories',
        id: block.id,
        header: block.header,
        layout: block.layout,
        main: block.main
          ? {
              tag: block.main.tag,
              headline: block.main.headline,
              excerpt: block.main.excerpt,
              image: mapImageGroup(block.main.image, 'card'),
              cta: mapCTA(block.main.cta),
            }
          : undefined,
        side: (block.side || []).map((story: any) => ({
          tag: story.tag,
          headline: story.headline,
          excerpt: story.excerpt,
          image: mapImageGroup(story.image, 'card'),
          cta: mapCTA(story.cta),
        })),
      }

    case 'pricing':
      return {
        type: 'pricing',
        id: block.id,
        header: block.header,
        columns: (block.columns || []).map((column: any) => ({
          title: column.title,
          sub: column.sub,
          body: column.body,
          badge: column.badge,
          cta: mapCTA(column.cta),
        })),
      }

    case 'galleryGrid':
      return {
        type: 'galleryGrid',
        id: block.id,
        sectionName: block.sectionName,
        header: block.header,
        intro: block.intro,
        body: block.body,
        cta: mapCTA(block.cta),
        items: (block.items || []).map((item: any) => ({
          tag: item.tag,
          title: item.title,
          caption: item.caption,
          image: mapImageGroup(item.image, 'card'),
        })),
      }

    case 'sitemap':
      return { type: 'sitemap', id: block.id }

    case 'metaStrip':
      return {
        type: 'metaStrip',
        id: block.id,
        items: (block.items || []).map((item: any) => ({
          label: item.label,
          value: item.value,
          href: item.href,
          external: Boolean(item.external),
        })),
      }

    case 'twoColumn':
      return {
        type: 'twoColumn',
        id: block.id,
        header: block.header,
        intro: block.intro,
        variant: block.variant,
        compact: Boolean(block.compact),
        left: mapSideColumn(block.left),
        right: mapSideColumn(block.right),
        footer: block.footer,
        cta: mapCTA(block.cta),
      }

    case 'relatedCards':
      return {
        type: 'relatedCards',
        id: block.id,
        header: block.header,
        cards: (block.cards || []).map((card: any) => ({
          title: card.title,
          description: card.description,
          icon: card.icon,
          href: card.href,
        })),
      }

    case 'patentGrid':
      return {
        type: 'patentGrid',
        header: block.header,
        intro: block.intro,
        filterNote: block.filterNote,
        patents: (block.patents || []).map((patent: any) => ({
          title: patent.title,
          status: patent.status,
          applicationNo: patent.applicationNo,
          inventors: patent.inventors,
          description: patent.description,
          href: patent.href,
          category: patent.category,
          filingDate: patent.filingDate,
          ageGroup: patent.ageGroup,
        })),
      }

    case 'profile':
      return {
        type: 'profile',
        id: block.id,
        name: block.name,
        role: block.role,
        email: block.email,
        image: mapImageGroup(block.image, 'avatar'),
        bio: block.bio,
        socials: (block.socials || []).map((social: any) => ({
          type: social.type,
          label: social.label,
          href: social.href,
        })),
      }

    case 'glossaryAccordion':
      return {
        type: 'glossaryAccordion',
        header: block.header,
        items: (block.items || []).map((item: any) => ({
          term: item.term,
          definition: item.definition,
        })),
      }

    case 'numberedCards':
      return {
        type: 'numberedCards',
        id: block.id,
        header: block.header,
        items: (block.items || []).map((item: any) => ({
          number: item.number,
          title: item.title,
          body: item.body,
        })),
      }

    case 'tierCards':
      return {
        type: 'tierCards',
        header: block.header,
        tiers: (block.tiers || []).map((tier: any) => ({
          label: tier.label,
          title: tier.title,
          subtitle: tier.subtitle,
          body: tier.body,
          bullets: mapTextArray(tier.bullets),
          note: tier.note,
          cta: mapCTA(tier.cta),
        })),
      }

    case 'toolCards':
      return {
        type: 'toolCards',
        header: block.header,
        tools: (block.tools || []).map((tool: any) => ({
          title: tool.title,
          subtitle: tool.subtitle,
          body: tool.body,
          details: mapTextArray(tool.details),
          downloads: (tool.downloads || []).map((download: any) => ({
            label: download.label,
            href: download.href,
          })),
        })),
      }

    case 'checklist':
      return {
        type: 'checklist',
        header: block.header,
        intro: block.intro,
        body: block.body,
        items: mapTextArray(block.items),
      }

    case 'tableBlock':
      return {
        type: 'tableBlock',
        id: block.id,
        header: block.header,
        intro: block.intro,
        headers: mapTextArray(block.headers),
        rows: (block.rows || []).map((row: any) => {
          if (Array.isArray(row)) return row
          return mapTextArray(row?.cells)
        }),
      }

    case 'anchorBlock':
      return {
        type: 'anchorBlock',
        id: block.id,
        header: block.header,
        body: block.body,
      }

    case 'timelineSteps':
      return {
        type: 'timelineSteps',
        header: block.header,
        steps: (block.steps || []).map((step: any) => ({
          title: step.title,
          body: step.body,
          bullets: mapTextArray(step.bullets),
        })),
      }

    case 'pillars':
      return {
        type: 'pillars',
        header: block.header,
        items: (block.items || []).map((item: any) => ({
          title: item.title,
          icon: item.icon,
          body: item.body,
        })),
      }

    case 'frameworkPapers':
      return {
        type: 'frameworkPapers',
        id: block.id,
        header: block.header,
        papers: (block.papers || []).map((paper: any) => ({
          title: paper.title,
          doi: paper.doi,
          link: paper.link,
          body: paper.body,
        })),
      }

    case 'dossierHeader':
      return {
        type: 'dossierHeader',
        id: block.id,
        title: block.title,
        subtitle: block.subtitle,
        classification: block.classification,
        dataPanel: (block.dataPanel || []).map((item: any) => ({
          label: item.label,
          value: item.value,
        })),
      }

    case 'dossierSection':
      return {
        type: 'dossierSection',
        id: block.id,
        number: block.number,
        label: block.label,
        header: block.header,
        body: block.body,
        variant: block.variant,
      }

    case 'dossierQuoteStrip':
      return {
        type: 'dossierQuoteStrip',
        id: block.id,
        quote: block.quote,
      }

    case 'dossierSpecTable':
      return {
        type: 'dossierSpecTable',
        id: block.id,
        number: block.number,
        label: block.label,
        header: block.header,
        rows: (block.rows || []).map((row: any) => ({
          label: row.label,
          value: row.value,
        })),
      }

    case 'dossierTimeline':
      return {
        type: 'dossierTimeline',
        id: block.id,
        number: block.number,
        label: block.label,
        events: (block.events || []).map((event: any) => ({
          date: event.date,
          description: event.description,
        })),
      }

    case 'dossierNotice':
      return {
        type: 'dossierNotice',
        id: block.id,
        label: block.label,
        body: block.body,
      }

    case 'dossierPrinciples':
      return {
        type: 'dossierPrinciples',
        id: block.id,
        number: block.number,
        label: block.label,
        header: block.header,
        intro: block.intro,
        principles: (block.principles || []).map((principle: any) => ({
          number: principle.number,
          title: principle.title,
          body: principle.body,
        })),
        conclusion: block.conclusion,
      }

    case 'dossierGallery':
      return {
        type: 'dossierGallery',
        id: block.id,
        number: block.number,
        label: block.label,
        images: (block.images || []).map((image: any) => ({
          src: resolveMediaURL(image.asset) || normalizeURL(image.src),
          alt: image.alt,
          caption: image.caption,
        })),
      }

    case 'dossierArchiveNotice':
      return {
        type: 'dossierArchiveNotice',
        id: block.id,
        body: block.body,
      }

    case 'dossierRelated':
      return {
        type: 'dossierRelated',
        id: block.id,
        header: block.header,
        cards: (block.cards || []).map((card: any) => ({
          title: card.title,
          description: card.description,
          icon: card.icon,
          href: card.href,
        })),
      }

    default:
      return null
  }
}

function mapCTA(cta: any) {
  if (!cta) return undefined
  const href = cta.href || cta.path
  if (!cta.label && !href) return undefined

  return {
    label: cta.label,
    href,
    path: href,
    external: Boolean(cta.external),
    disabled: Boolean(cta.disabled),
    download: Boolean(cta.download),
    type: cta.type,
  }
}

function mapImageGroup(image: any, defaultVariant = 'card') {
  if (!image) return undefined
  const src = resolveMediaURL(image.asset) || normalizeURL(image.src)
  if (!src) return undefined

  return {
    src,
    alt: image.alt || '',
    variant: image.variant || defaultVariant,
    privacyBlur: Boolean(image.privacyBlur),
    caption: image.caption,
  }
}

function mapSideColumn(column: any) {
  if (!column) return undefined
  return {
    heading: column.heading,
    icon: column.icon,
    lead: column.lead,
    items: (column.items || []).map((item: any) => ({
      label: item.label,
      text: item.text,
    })),
  }
}

function mapTextArray(items: any): string[] {
  if (!Array.isArray(items)) return []
  return items
    .map((item) => {
      if (typeof item === 'string') return item
      if (item && typeof item === 'object') return item.text
      return undefined
    })
    .filter(Boolean)
}

function normalizeURL(value: any) {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  if (!trimmed) return undefined
  return trimmed
}

function resolveMediaURL(asset: any) {
  if (!asset) return undefined

  if (typeof asset === 'string') {
    const value = asset.trim()
    if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/')) {
      return value
    }
    return undefined
  }

  if (asset.url) return asset.url
  if (asset.filename) return `/api/media/file/${asset.filename}`
  return undefined
}

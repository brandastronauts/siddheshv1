/**
 * Server-side fetchers for header navigation, brand data, and footer settings.
 * All functions fall back to static siteCore.js data when the CMS is unavailable.
 * These must only be called from Server Components or server actions.
 */

import { cache } from 'react'
import { nav as staticNav, brand as staticBrand } from '@/content/siteCore'

const isCMSEnabled = Boolean(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface NavGrandchild {
  label: string
  path: string
  icon?: string
  external?: boolean
}

export interface NavChild {
  label: string
  path: string
  icon?: string
  external?: boolean
  grandchildren?: NavGrandchild[]
}

export interface NavItem {
  label: string
  path: string
  icon?: string
  external?: boolean
  children?: NavChild[]
}

export interface BrandData {
  siteName: string
  headerTagline: string
  ethicsTagline: string
  logoUrl?: string
  contact: {
    research: string
    press: string
  }
  socials?: {
    linkedin: string
    twitter: string
    email: string
  }
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}

export interface FooterLink {
  label: string
  path: string
  external?: boolean
}

export interface FooterIconLink extends FooterLink {
  icon?: string
}

/** A footer column link that references a header nav path; label is inherited unless overridden. */
export interface FooterColumnLink {
  path: string
  labelOverride?: string
  external?: boolean
}

export interface FooterColumnHeadings {
  navigation: string
  more: string
  governance: string
  registries: string
}

export interface FooterNewsletterCopy {
  heading: string
  description: string
  emailPlaceholder: string
  consentText: string
  buttonLabel: string
  submittingLabel: string
  successMessage: string
  helperText: string
}

export interface FooterData {
  socialLinks: SocialLink[]
  navigationLinks: FooterColumnLink[]
  moreLinks: FooterColumnLink[]
  governanceLinks: FooterLink[]
  utilityLinks: FooterLink[]
  registriesLinks: FooterIconLink[]
  legalLinks: FooterIconLink[]
  columnHeadings: FooterColumnHeadings
  newsletter: FooterNewsletterCopy
  schoolLink: string
  schoolLinkLabel: string
  copyrightText?: string
}

export interface AnnouncementBarData {
  enabled: boolean
  type: 'info' | 'success' | 'warning' | 'urgent'
  message: string
  linkLabel?: string
  linkUrl?: string
  dismissible: boolean
}

/** Per-page link visibility: pathname → lists of header/footer paths to hide. */
export type PageVisibilityMap = Record<string, { hideHeader: string[]; hideFooter: string[] }>

// ---------------------------------------------------------------------------
// Static fallbacks (mirrors what Footer.jsx has hardcoded today)
// ---------------------------------------------------------------------------

const staticFooterData: FooterData = {
  socialLinks: [
    { platform: 'facebook', url: 'https://www.facebook.com/blueblocksmontessorischool', label: 'Blue Blocks on Facebook' },
    { platform: 'instagram', url: 'https://www.instagram.com/blueblocksmontessorischool/', label: 'Blue Blocks on Instagram' },
    { platform: 'youtube', url: 'https://www.youtube.com/channel/UCnJ6uX3B-uwAg63PgTK0LhQ', label: 'Blue Blocks on YouTube' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/school/blue-blocks-school', label: 'Blue Blocks on LinkedIn' },
    { platform: 'whatsapp', url: 'https://wa.link/vohpxj', label: 'Blue Blocks on WhatsApp' },
  ],
  // Empty by default — Footer derives these columns from the header nav until edited in CMS.
  navigationLinks: [],
  moreLinks: [],
  governanceLinks: [
    { label: 'Ethics & Privacy', path: '/governance/ethics' },
    { label: 'Research Standards', path: '/governance/standards' },
    { label: 'Regulatory Compliance', path: '/governance/compliance' },
    { label: 'Our Standards', path: '/governance/our-standards' },
  ],
  utilityLinks: [
    { label: 'Open Science Statement', path: '/publications' },
    { label: 'Data Access', path: '/collaborate' },
    { label: 'Research Ethics', path: '/governance' },
  ],
  registriesLinks: [
    { label: 'Publications', path: '/publications', icon: 'publication' },
    { label: 'Patents', path: '/patents', icon: 'lightbulb' },
    { label: 'Books', path: '/books', icon: 'bookOpen' },
    { label: 'Team', path: '/team', icon: 'team' },
    { label: 'Downloads', path: '/downloads', icon: 'download' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', path: '/privacy', icon: 'lock' },
    { label: 'Terms of Use', path: '/terms', icon: 'scroll' },
    { label: 'Sitemap', path: '/sitemap-html', icon: 'mapPin' },
  ],
  columnHeadings: {
    navigation: 'Navigation',
    more: 'More',
    governance: 'Governance',
    registries: 'Registries & Archives',
  },
  newsletter: {
    heading: 'Subscribe to our Newsletter',
    description: 'Monthly digest, DOI releases, and protocol updates. Announced 30 days in advance.',
    emailPlaceholder: 'you@institution.edu',
    consentText: 'I agree to receive institutional updates from Blue Blocks Micro Research Institute.',
    buttonLabel: 'Subscribe',
    submittingLabel: 'Submitting…',
    successMessage: 'Thank you. Your submission has been received successfully.',
    helperText: 'No spam. Unsubscribe anytime.',
  },
  schoolLink: 'https://www.blueblocks.in/',
  schoolLinkLabel: 'Blue Blocks Montessori School',
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function getPayloadInstance() {
  const [{ getPayload }, { default: config }] = await Promise.all([
    import('payload'),
    import('@payload-config'),
  ])
  return getPayload({ config })
}

function warn(msg: string) {
  if (process.env.NODE_ENV === 'development') console.warn(`[navigation] ${msg}`)
}

// ---------------------------------------------------------------------------
// Fetchers (all cached per-request via React cache)
// ---------------------------------------------------------------------------

/** Returns header navigation from CMS global, falling back to siteCore.js. */
export const getHeaderNav = cache(async (): Promise<NavItem[]> => {
  if (!isCMSEnabled) return staticNav as NavItem[]

  try {
    const payload = await getPayloadInstance()
    const doc = await payload.findGlobal({ slug: 'site-settings', depth: 1 })

    if (!Array.isArray(doc?.navigation) || doc.navigation.length === 0) {
      return staticNav as NavItem[]
    }

    return doc.navigation.map((item: any): NavItem => ({
      label: item.label,
      path: item.path,
      icon: item.icon || undefined,
      external: item.external || false,
      children: Array.isArray(item.children) && item.children.length > 0
        ? item.children.map((child: any): NavChild => ({
            label: child.label,
            path: child.path,
            icon: child.icon || undefined,
            external: child.external || false,
            grandchildren: Array.isArray(child.grandchildren) && child.grandchildren.length > 0
              ? child.grandchildren.map((g: any): NavGrandchild => ({
                  label: g.label,
                  path: g.path,
                  icon: g.icon || undefined,
                  external: g.external || false,
                }))
              : undefined,
          }))
        : undefined,
    }))
  } catch {
    warn('getHeaderNav: CMS unavailable, using static nav')
    return staticNav as NavItem[]
  }
})

/**
 * Returns a map of pathname → header/footer paths to hide on that page.
 * Pages with no hidden links are omitted to keep the payload small.
 */
export const getPageVisibility = cache(async (): Promise<PageVisibilityMap> => {
  if (!isCMSEnabled) return {}

  try {
    const payload = await getPayloadInstance()
    const res = await payload.find({
      collection: 'page-overrides',
      depth: 0,
      limit: 1000,
      pagination: false,
    })

    const map: PageVisibilityMap = {}
    for (const doc of res?.docs || []) {
      const hideHeader = Array.isArray((doc as any).hideHeaderPaths)
        ? (doc as any).hideHeaderPaths.filter((p: any): p is string => typeof p === 'string' && p.trim() !== '')
        : []
      const hideFooter = Array.isArray((doc as any).hideFooterPaths)
        ? (doc as any).hideFooterPaths.filter((p: any): p is string => typeof p === 'string' && p.trim() !== '')
        : []
      if ((doc as any).pathname && (hideHeader.length > 0 || hideFooter.length > 0)) {
        map[(doc as any).pathname] = { hideHeader, hideFooter }
      }
    }
    return map
  } catch {
    warn('getPageVisibility: CMS unavailable, no per-page link hiding')
    return {}
  }
})

/** Returns brand/contact data from CMS global, falling back to siteCore.js. */
export const getBrandData = cache(async (): Promise<BrandData> => {
  if (!isCMSEnabled) return staticBrand as BrandData

  try {
    const payload = await getPayloadInstance()
    const doc = await payload.findGlobal({ slug: 'site-settings', depth: 1 })

    const logoUrl =
      doc?.logo && typeof doc.logo === 'object' && typeof doc.logo.url === 'string'
        ? doc.logo.url
        : undefined

    return {
      siteName: doc?.siteName || staticBrand.siteName,
      headerTagline: doc?.headerTagline || staticBrand.headerTagline,
      ethicsTagline: doc?.ethicsTagline || staticBrand.ethicsTagline,
      logoUrl,
      contact: {
        research: doc?.researchEmail || staticBrand.contact.research,
        press: doc?.pressEmail || staticBrand.contact.press,
      },
      socials: {
        linkedin: doc?.socials?.linkedin || staticBrand.socials.linkedin,
        twitter: doc?.socials?.twitter || staticBrand.socials.twitter,
        email: doc?.socials?.email || staticBrand.socials.email,
      },
    }
  } catch {
    warn('getBrandData: CMS unavailable, using static brand')
    return staticBrand as BrandData
  }
})

/** Returns announcement bar config from CMS global. Returns disabled state if CMS is unavailable. */
export const getAnnouncementBar = cache(async (): Promise<AnnouncementBarData> => {
  const disabled: AnnouncementBarData = { enabled: false, type: 'info', message: '', dismissible: true }
  if (!isCMSEnabled) return disabled

  try {
    const payload = await getPayloadInstance()
    const doc = await payload.findGlobal({ slug: 'announcement-bar', depth: 0 })
    if (!doc || !doc.enabled) return disabled
    return {
      enabled: true,
      type: (doc.type as AnnouncementBarData['type']) || 'info',
      message: doc.message || '',
      linkLabel: doc.linkLabel || undefined,
      linkUrl: doc.linkUrl || undefined,
      dismissible: doc.dismissible !== false,
    }
  } catch {
    warn('getAnnouncementBar: CMS unavailable')
    return disabled
  }
})

/** Returns footer-specific settings from CMS global, falling back to hardcoded defaults. */
export const getFooterData = cache(async (): Promise<FooterData> => {
  if (!isCMSEnabled) return staticFooterData

  try {
    const payload = await getPayloadInstance()
    const doc = await payload.findGlobal({ slug: 'footer-settings', depth: 0 })

    if (!doc) return staticFooterData

    return {
      socialLinks: Array.isArray(doc.socialLinks) && doc.socialLinks.length > 0
        ? doc.socialLinks.map((s: any) => ({ platform: s.platform, url: s.url, label: s.label }))
        : staticFooterData.socialLinks,
      navigationLinks: Array.isArray(doc.navigationLinks)
        ? doc.navigationLinks.map((l: any) => ({ path: l.path, labelOverride: l.labelOverride || undefined, external: l.external || false }))
        : staticFooterData.navigationLinks,
      moreLinks: Array.isArray(doc.moreLinks)
        ? doc.moreLinks.map((l: any) => ({ path: l.path, labelOverride: l.labelOverride || undefined, external: l.external || false }))
        : staticFooterData.moreLinks,
      governanceLinks: Array.isArray(doc.governanceLinks) && doc.governanceLinks.length > 0
        ? doc.governanceLinks.map((l: any) => ({ label: l.label, path: l.path, external: l.external || false }))
        : staticFooterData.governanceLinks,
      utilityLinks: Array.isArray(doc.utilityLinks) && doc.utilityLinks.length > 0
        ? doc.utilityLinks.map((l: any) => ({ label: l.label, path: l.path, external: l.external || false }))
        : staticFooterData.utilityLinks,
      registriesLinks: Array.isArray(doc.registriesLinks) && doc.registriesLinks.length > 0
        ? doc.registriesLinks.map((l: any) => ({ label: l.label, path: l.path, icon: l.icon || undefined, external: l.external || false }))
        : staticFooterData.registriesLinks,
      legalLinks: Array.isArray(doc.legalLinks) && doc.legalLinks.length > 0
        ? doc.legalLinks.map((l: any) => ({ label: l.label, path: l.path, icon: l.icon || undefined, external: l.external || false }))
        : staticFooterData.legalLinks,
      columnHeadings: {
        navigation: doc.columnHeadings?.navigation || staticFooterData.columnHeadings.navigation,
        more: doc.columnHeadings?.more || staticFooterData.columnHeadings.more,
        governance: doc.columnHeadings?.governance || staticFooterData.columnHeadings.governance,
        registries: doc.columnHeadings?.registries || staticFooterData.columnHeadings.registries,
      },
      newsletter: {
        heading: doc.newsletter?.heading || staticFooterData.newsletter.heading,
        description: doc.newsletter?.description || staticFooterData.newsletter.description,
        emailPlaceholder: doc.newsletter?.emailPlaceholder || staticFooterData.newsletter.emailPlaceholder,
        consentText: doc.newsletter?.consentText || staticFooterData.newsletter.consentText,
        buttonLabel: doc.newsletter?.buttonLabel || staticFooterData.newsletter.buttonLabel,
        submittingLabel: doc.newsletter?.submittingLabel || staticFooterData.newsletter.submittingLabel,
        successMessage: doc.newsletter?.successMessage || staticFooterData.newsletter.successMessage,
        helperText: doc.newsletter?.helperText || staticFooterData.newsletter.helperText,
      },
      schoolLink: doc.schoolLink || staticFooterData.schoolLink,
      schoolLinkLabel: doc.schoolLinkLabel || staticFooterData.schoolLinkLabel,
      copyrightText: doc.copyrightText || undefined,
    }
  } catch {
    warn('getFooterData: CMS unavailable, using static footer data')
    return staticFooterData
  }
})

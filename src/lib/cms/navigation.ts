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

export interface NavChild {
  label: string
  path: string
  icon?: string
  external?: boolean
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

export interface FooterData {
  socialLinks: SocialLink[]
  governanceLinks: FooterLink[]
  utilityLinks: FooterLink[]
  schoolLink: string
  schoolLinkLabel: string
  copyrightText?: string
}

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
          }))
        : undefined,
    }))
  } catch {
    warn('getHeaderNav: CMS unavailable, using static nav')
    return staticNav as NavItem[]
  }
})

/** Returns brand/contact data from CMS global, falling back to siteCore.js. */
export const getBrandData = cache(async (): Promise<BrandData> => {
  if (!isCMSEnabled) return staticBrand as BrandData

  try {
    const payload = await getPayloadInstance()
    const doc = await payload.findGlobal({ slug: 'site-settings', depth: 0 })

    return {
      siteName: doc?.siteName || staticBrand.siteName,
      headerTagline: doc?.headerTagline || staticBrand.headerTagline,
      ethicsTagline: doc?.ethicsTagline || staticBrand.ethicsTagline,
      contact: {
        research: doc?.researchEmail || staticBrand.contact.research,
        press: doc?.pressEmail || staticBrand.contact.press,
      },
      socials: doc?.socials || staticBrand.socials,
    }
  } catch {
    warn('getBrandData: CMS unavailable, using static brand')
    return staticBrand as BrandData
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
      governanceLinks: Array.isArray(doc.governanceLinks) && doc.governanceLinks.length > 0
        ? doc.governanceLinks.map((l: any) => ({ label: l.label, path: l.path, external: l.external || false }))
        : staticFooterData.governanceLinks,
      utilityLinks: Array.isArray(doc.utilityLinks) && doc.utilityLinks.length > 0
        ? doc.utilityLinks.map((l: any) => ({ label: l.label, path: l.path, external: l.external || false }))
        : staticFooterData.utilityLinks,
      schoolLink: doc.schoolLink || staticFooterData.schoolLink,
      schoolLinkLabel: doc.schoolLinkLabel || staticFooterData.schoolLinkLabel,
      copyrightText: doc.copyrightText || undefined,
    }
  } catch {
    warn('getFooterData: CMS unavailable, using static footer data')
    return staticFooterData
  }
})

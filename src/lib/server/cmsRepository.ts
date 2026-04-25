/**
 * CMS data-access layer.
 *
 * All page, settings, and navigation reads go through this file.
 * Callers never import Payload or MongoDB directly — they call these functions.
 * Each function falls back to static content when the CMS is unavailable.
 */

import { cache } from 'react'
import { getPageContent } from '@/lib/cms/pageContent'
import { brand as staticBrand, nav as staticNav } from '@/content/siteCore'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string
  path: string
  icon?: string
  children?: NavItem[]
}

export interface BrandSettings {
  siteName: string
  headerTagline: string
  ethicsTagline: string
  contact: {
    research: string
    press: string
  }
}

export interface SiteSettings {
  brand: BrandSettings
  nav: NavItem[]
}

// ---------------------------------------------------------------------------
// Page content
// ---------------------------------------------------------------------------

/**
 * Returns the fully merged page content for a given URL pathname.
 * CMS overrides take priority; falls back to static siteContent.js.
 * Cached per-request by React cache().
 */
export const getPage = cache(async (pathname: string) => {
  return getPageContent(pathname)
})

/**
 * Returns a list of all statically-known page pathnames.
 * Useful for sitemap generation or pre-rendering checks.
 */
export async function getPageSlugs(): Promise<string[]> {
  const { default: siteContent } = await import('@/content/siteContent')
  const pages = (siteContent as any).pages ?? {}
  return Object.keys(pages)
}

// ---------------------------------------------------------------------------
// Site settings
// ---------------------------------------------------------------------------

const isCMSEnabled = Boolean(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)

/**
 * Returns site-wide settings (brand + navigation).
 * Queries the Payload SiteSettings global when CMS is enabled,
 * otherwise returns values from siteCore.js.
 */
export const getSettings = cache(async (): Promise<SiteSettings> => {
  if (!isCMSEnabled) {
    return buildStaticSettings()
  }

  try {
    const [{ getPayload }, { default: config }] = await Promise.all([
      import('payload'),
      import('@payload-config'),
    ])

    const payload = await getPayload({ config })
    const doc = await payload.findGlobal({ slug: 'site-settings', depth: 1 })

    if (!doc) return buildStaticSettings()

    const brand: BrandSettings = {
      siteName: doc.siteName || staticBrand.siteName,
      headerTagline: doc.headerTagline || staticBrand.headerTagline,
      ethicsTagline: doc.ethicsTagline || staticBrand.ethicsTagline,
      contact: {
        research: doc.researchEmail || staticBrand.contact.research,
        press: doc.pressEmail || staticBrand.contact.press,
      },
    }

    const nav: NavItem[] = Array.isArray(doc.navigation) && doc.navigation.length > 0
      ? doc.navigation.map((item: any) => ({ label: item.label, path: item.path }))
      : (staticNav as NavItem[])

    return { brand, nav }
  } catch {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[cmsRepository] getSettings: falling back to static data')
    }
    return buildStaticSettings()
  }
})

/**
 * Convenience wrapper — returns only the navigation array.
 */
export async function getNavigation(): Promise<NavItem[]> {
  const { nav } = await getSettings()
  return nav
}

/**
 * Convenience wrapper — returns only brand/contact settings.
 */
export async function getBrandSettings(): Promise<BrandSettings> {
  const { brand } = await getSettings()
  return brand
}

// ---------------------------------------------------------------------------
// Media helpers (Payload Media collection)
// ---------------------------------------------------------------------------

/**
 * Returns a list of media items from the Payload Media collection.
 * Falls back to an empty array when CMS is unavailable.
 */
export async function getMediaItems(limit = 50) {
  if (!isCMSEnabled) return []

  try {
    const [{ getPayload }, { default: config }] = await Promise.all([
      import('payload'),
      import('@payload-config'),
    ])

    const payload = await getPayload({ config })
    const result = await payload.find({ collection: 'media', limit, depth: 0 })
    return result.docs ?? []
  } catch {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[cmsRepository] getMediaItems: CMS unavailable')
    }
    return []
  }
}

// ---------------------------------------------------------------------------
// Private helpers
// ---------------------------------------------------------------------------

function buildStaticSettings(): SiteSettings {
  return {
    brand: {
      siteName: staticBrand.siteName,
      headerTagline: staticBrand.headerTagline,
      ethicsTagline: staticBrand.ethicsTagline,
      contact: {
        research: staticBrand.contact.research,
        press: staticBrand.contact.press,
      },
    },
    nav: staticNav as NavItem[],
  }
}

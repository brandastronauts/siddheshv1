import type { MetadataRoute } from 'next'
import { sitemapData } from '@/lib/sitemapData'

const BASE_URL = 'https://research.blueblocks.in'
const isCMSEnabled = Boolean(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)

/** All static URLs from sitemapData.js, deduplicated. */
function getStaticUrls(): string[] {
  const seen = new Set<string>()
  for (const group of Object.values(sitemapData)) {
    for (const entry of group as { url: string }[]) {
      if (entry.url && !seen.has(entry.url)) seen.add(entry.url)
    }
  }
  return Array.from(seen)
}

/** Extra pathnames from CMS page-overrides not already in the static set. */
async function getCmsUrls(staticSet: Set<string>): Promise<string[]> {
  if (!isCMSEnabled) return []
  try {
    const [{ getPayload }, { default: config }] = await Promise.all([
      import('payload'),
      import('@payload-config'),
    ])
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'page-overrides',
      limit: 2000,
      depth: 0,
      pagination: false,
    } as Parameters<typeof payload.find>[0])

    return result.docs
      .map((doc: any) => doc.pathname as string)
      .filter((p): p is string => typeof p === 'string' && !staticSet.has(p))
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls = getStaticUrls()
  const staticSet = new Set(staticUrls)
  const cmsUrls = await getCmsUrls(staticSet)

  const allUrls = [...staticUrls, ...cmsUrls]

  return allUrls.map((pathname) => ({
    url: `${BASE_URL}${pathname}`,
    lastModified: new Date(),
    changeFrequency: pathname === '/' ? 'weekly' : 'monthly',
    priority: pathname === '/' ? 1.0 : 0.7,
  }))
}

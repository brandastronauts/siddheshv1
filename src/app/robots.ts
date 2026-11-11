import type { MetadataRoute } from 'next'

const BASE_URL = 'https://research.blueblocks.in'
const isCMSEnabled = Boolean(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)

export default async function robots(): Promise<MetadataRoute.Robots> {
  let robotsString = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

  if (isCMSEnabled) {
    try {
      const [{ getPayload }, { default: config }] = await Promise.all([
        import('payload'),
        import('@payload-config'),
      ])
      const payload = await getPayload({ config })
      const doc = await payload.findGlobal({ slug: 'seo-defaults', depth: 0 })
      if (doc?.robots) robotsString = doc.robots as string
    } catch {
      // CMS unavailable — use default
    }
  }

  const isIndexed = !robotsString.includes('noindex')

  return {
    rules: [
      {
        userAgent: '*',
        allow: isIndexed ? '/' : undefined,
        disallow: isIndexed ? ['/admin', '/api'] : '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}

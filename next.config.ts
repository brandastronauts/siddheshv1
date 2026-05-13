import type { NextConfig } from 'next'
import { MongoClient } from 'mongodb'

// Fetch CMS-managed redirects from MongoDB at build time.
// Falls back to an empty list if the DB is unreachable (e.g. CI without DB).
async function fetchCmsRedirects(): Promise<Array<{ source: string; destination: string; permanent: boolean }>> {
  const uri = process.env.DATABASE_URL
  if (!uri) return []

  let client: MongoClient | null = null
  try {
    client = new MongoClient(uri, { serverSelectionTimeoutMS: 3000, connectTimeoutMS: 3000 })
    await client.connect()

    const dbName = uri.split('/').pop()?.split('?')[0] || 'blueblocks_payload'
    const db = client.db(dbName)
    const docs = await db.collection('redirects').find({}, { projection: { from: 1, to: 1, statusCode: 1 } }).toArray()

    return docs
      .filter((d) => typeof d.from === 'string' && d.from.startsWith('/') && typeof d.to === 'string')
      .map((d) => ({
        source: d.from as string,
        destination: d.to as string,
        permanent: d.statusCode === '301' || d.statusCode === '308',
      }))
  } catch {
    // Silently skip — build succeeds without CMS redirects
    return []
  } finally {
    await client?.close()
  }
}

const config: NextConfig = {
  allowedDevOrigins: ['local.research.cms.com'],
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack(config, { dev }) {
    if (dev) {
      config.cache = { type: 'memory' }
    }
    return config
  },
  images: {
    formats: ['image/webp'],
  },
  async redirects() {
    const staticRedirects = [
      { source: '/publications-open-science', destination: '/publications', permanent: true },
      { source: '/sitemap', destination: '/sitemap-html', permanent: false },
    ]

    const cmsRedirects = await fetchCmsRedirects()

    // Static redirects take priority; skip CMS entries that conflict.
    const staticSources = new Set(staticRedirects.map((r) => r.source))
    const merged = [
      ...staticRedirects,
      ...cmsRedirects.filter((r) => !staticSources.has(r.source)),
    ]

    return merged
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet, noimageindex' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/downloads/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800',
          },
        ],
      },
    ]
  },
}

export default config

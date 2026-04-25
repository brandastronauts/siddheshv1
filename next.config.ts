import type { NextConfig } from 'next'

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
    return [
      {
        source: '/publications-open-science',
        destination: '/publications',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/sitemap-html',
        permanent: false,
      },
    ]
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

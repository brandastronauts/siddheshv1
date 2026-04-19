import type { Metadata } from 'next'

const BASE_URL = 'https://research.blueblocks.in'
const SITE_NAME = 'Blue Blocks Micro Research Institute'
const DEFAULT_OG_IMAGE = '/images/og-home.jpg'
const DEFAULT_DESCRIPTION =
  'A longitudinal research institute studying innovation, Montessori development, and human potential through continuous observation from birth to adulthood.'

export function buildPageMetadata(page: any, pathname: string): Metadata {
  if (!page) return {}

  const rawTitle: string = page?.seo?.title || page?.title || ''
  const title = rawTitle
    .replace(` | ${SITE_NAME}`, '')
    .replace(' | Blue Blocks Micro Research Institute', '')
    .trim()

  const description: string =
    page?.seo?.openGraph?.description ||
    page?.seo?.description ||
    page?.metaDescription ||
    DEFAULT_DESCRIPTION

  const ogImageRaw = page?.seo?.openGraph?.image
  const ogImage: string =
    typeof ogImageRaw === 'string' ? ogImageRaw : ogImageRaw?.url || DEFAULT_OG_IMAGE

  const canonical: string = page?.seo?.canonical || `${BASE_URL}${pathname}`

  const rawOgType = page?.seo?.openGraph?.type
  const ogType: 'website' | 'article' =
    rawOgType === 'article' ? 'article' : 'website'

  return {
    title: title || undefined,
    description,
    keywords: page?.seo?.keywords,
    alternates: { canonical },
    openGraph: {
      title: title || SITE_NAME,
      description,
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: page?.seo?.twitter?.title || title || SITE_NAME,
      description: page?.seo?.twitter?.description || description,
      images: [page?.seo?.twitter?.image || ogImage],
    },
  }
}

import SectionRenderer from '@/components/SectionRenderer'
import StickyDetailBar from '@/components/common/StickyDetailBar'
import StandardPageTemplate from '@/components/StandardPageTemplate'
import ProfilePageClient from '@/components/ProfilePageClient'
import { notFound } from 'next/navigation'
import { getPageContent } from '@/lib/cms/pageContent'

const DETAIL_PATTERNS = [
  /^\/publications\/.+/,
  /^\/patents\/.+/,
  /^\/books\/.+/,
  /^\/technical-briefs\/.+/,
  /^\/presentations\/.+/,
  /^\/proceedings\/.+/,
]

const PROFILE_PATTERNS = [
  /^\/governance\/team\/.+/,
  /^\/team\/(pavan-kumar-yekabote|munira-hussain)$/,
]

interface Props {
  pathname: string
  /** Use StandardPageTemplate instead of SectionRenderer */
  template?: boolean
  badge?: string
}

export default async function GenericPageContent({ pathname, template = false, badge }: Props) {
  const page = await getPageContent(pathname)
  const schemaNodes = Array.isArray(page?.schemas)
    ? page.schemas.filter((node: any) => node && typeof node === 'object')
    : []

  const isDetailPage = DETAIL_PATTERNS.some((p) => p.test(pathname))
  const isProfilePage = PROFILE_PATTERNS.some((p) => p.test(pathname))
  const stickyCta = page?.stickyCta

  // A missing page must be a real HTTP 404 (not a 200 with a "not found" message) so crawlers drop the URL.
  if (!page) notFound()

  if (template && badge) {
    return <StandardPageTemplate page={page} badge={badge} />
  }

  if (isProfilePage) {
    return <ProfilePageClient sections={page.sections} />
  }

  return (
    <>
      {schemaNodes.map((node: any, index: number) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(node) }}
        />
      ))}
      <SectionRenderer sections={page.sections} />
      {isDetailPage && stickyCta && (
        <StickyDetailBar
          label={stickyCta.label}
          href={stickyCta.href}
          type={stickyCta.type || 'download'}
        />
      )}
    </>
  )
}

function serializeJsonLd(node: Record<string, unknown>) {
  return JSON.stringify(node).replace(/</g, '\\u003c')
}

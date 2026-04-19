import siteContent from '@/content/siteContent'
import SectionRenderer from '@/components/SectionRenderer'
import StickyDetailBar from '@/components/common/StickyDetailBar'
import StandardPageTemplate from '@/components/StandardPageTemplate'
import ProfilePageClient from '@/components/ProfilePageClient'

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

export default function GenericPageContent({ pathname, template = false, badge }: Props) {
  const page = (siteContent as any).pages?.[pathname]

  const isDetailPage = DETAIL_PATTERNS.some((p) => p.test(pathname))
  const isProfilePage = PROFILE_PATTERNS.some((p) => p.test(pathname))
  const stickyCta = page?.stickyCta

  if (!page) {
    return (
      <div className="container-grid py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground">The requested page does not exist.</p>
      </div>
    )
  }

  if (template && badge) {
    return <StandardPageTemplate page={page} badge={badge} />
  }

  if (isProfilePage) {
    return <ProfilePageClient sections={page.sections} />
  }

  return (
    <>
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

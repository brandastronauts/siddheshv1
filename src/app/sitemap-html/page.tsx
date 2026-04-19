import type { Metadata } from 'next'
import siteContent from '@/content/siteContent'
import { buildPageMetadata } from '@/lib/metadata'
import GenericPageContent from '@/components/GenericPageContent'

const PATH = '/sitemap'

export function generateMetadata(): Metadata {
  return buildPageMetadata((siteContent as any).pages[PATH], PATH)
}

export default function Page() {
  return <GenericPageContent pathname={PATH} />
}

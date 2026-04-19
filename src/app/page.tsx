import type { Metadata } from 'next'
import siteContent from '@/content/siteContent'
import { buildPageMetadata } from '@/lib/metadata'
import GenericPageContent from '@/components/GenericPageContent'

export function generateMetadata(): Metadata {
  return buildPageMetadata((siteContent as any).pages['/'], '/')
}

export default function Home() {
  return <GenericPageContent pathname="/" />
}

import type { Metadata } from 'next'
import { getPageMetadata } from '@/lib/metadata'
import GenericPageContent from '@/components/GenericPageContent'
import siteContent from '@/content/siteContent'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  const pages = (siteContent as any).pages ?? {}
  const prefix = '/technical-briefs/'
  return Object.keys(pages)
    .filter(k => k.startsWith(prefix) && !k.slice(prefix.length).includes('/'))
    .map(k => ({ slug: k.slice(prefix.length) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pathname = `/technical-briefs/${slug}`
  return getPageMetadata(pathname)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <GenericPageContent pathname={`/technical-briefs/${slug}`} />
}

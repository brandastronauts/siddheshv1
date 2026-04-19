import type { Metadata } from 'next'
import siteContent from '@/content/siteContent'
import { buildPageMetadata } from '@/lib/metadata'
import GenericPageContent from '@/components/GenericPageContent'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pathname = `/newsroom/dispatch/${slug}`
  return buildPageMetadata((siteContent as any).pages[pathname], pathname)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <GenericPageContent pathname={`/newsroom/dispatch/${slug}`} />
}

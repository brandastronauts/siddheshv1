import type { Metadata } from 'next'
import { getPageMetadata } from '@/lib/metadata'
import GenericPageContent from '@/components/GenericPageContent'
import { getStaticSlugsForPrefix } from '@/lib/cms/staticParams'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = true

export async function generateStaticParams() {
  return getStaticSlugsForPrefix('/proceedings')
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return getPageMetadata(`/proceedings/${slug}`)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <GenericPageContent pathname={`/proceedings/${slug}`} />
}

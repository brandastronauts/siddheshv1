import type { Metadata } from 'next'
import { getPageMetadata } from '@/lib/metadata'
import GenericPageContent from '@/components/GenericPageContent'
import { getStaticSlugsForPrefix } from '@/lib/cms/staticParams'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = true

export async function generateStaticParams() {
  return getStaticSlugsForPrefix('/newsroom/coverage')
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return getPageMetadata(`/newsroom/coverage/${slug}`)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <GenericPageContent pathname={`/newsroom/coverage/${slug}`} />
}

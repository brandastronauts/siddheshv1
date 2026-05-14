import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPageContent } from '@/lib/cms/pageContent'
import { getPageMetadata } from '@/lib/metadata'
import GenericPageContent from '@/components/GenericPageContent'

type Props = { params: Promise<{ slug: string[] }> }

export const dynamicParams = true

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pathname = `/${slug.join('/')}`
  return getPageMetadata(pathname)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const pathname = `/${slug.join('/')}`

  const page = await getPageContent(pathname)
  if (!page) notFound()

  return <GenericPageContent pathname={pathname} />
}

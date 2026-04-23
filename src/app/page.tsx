import type { Metadata } from 'next'
import { getPageMetadata } from '@/lib/metadata'
import GenericPageContent from '@/components/GenericPageContent'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('/')
}

export default function Home() {
  return <GenericPageContent pathname="/" />
}


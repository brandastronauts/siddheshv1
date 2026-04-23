import type { Metadata } from 'next'
import { getPageMetadata } from '@/lib/metadata'
import GenericPageContent from '@/components/GenericPageContent'

const PATH = '/methodology/tools'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(PATH)
}

export default function Page() {
  return <GenericPageContent pathname={PATH} />
}


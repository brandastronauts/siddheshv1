import type { Metadata } from 'next'
import { getPageMetadata } from '@/lib/metadata'
import CitationStandardsContent from '@/components/CitationStandardsContent'
import { getPageContent } from '@/lib/cms/pageContent'

const PATH = '/publications/citation-standards'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(PATH)
}

export default async function Page() {
  const page = await getPageContent(PATH)
  const schemaNodes = Array.isArray(page?.schemas)
    ? page.schemas.filter((node: unknown) => node && typeof node === 'object')
    : []

  return (
    <>
      {schemaNodes.map((node: unknown, index: number) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node).replace(/</g, '\\u003c') }}
        />
      ))}
      <CitationStandardsContent />
    </>
  )
}


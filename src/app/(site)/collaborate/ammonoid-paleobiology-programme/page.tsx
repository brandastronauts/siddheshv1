import type { Metadata } from 'next'
import AmmonoidProgrammePage from '@/components/campaign/AmmonoidProgrammePage'

export const metadata: Metadata = {
  title: 'Ammonoid Paleobiology Research Programme',
  description: 'Programme information and application status for the Ammonoid Paleobiology Research Programme.',
}

export default function Page() {
  return <AmmonoidProgrammePage />
}

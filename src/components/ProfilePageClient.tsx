'use client'

import dynamic from 'next/dynamic'

const ProfilePageWrapper = dynamic(() => import('./profile/ProfilePageWrapper'), {
  loading: () => <div className="min-h-screen" />,
})

interface Props {
  sections: unknown[]
}

export default function ProfilePageClient({ sections }: Props) {
  return <ProfilePageWrapper sections={sections} />
}

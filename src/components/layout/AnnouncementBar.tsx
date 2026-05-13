'use client'

import { useState } from 'react'
import type { AnnouncementBarData } from '@/lib/cms/navigation'

const COLOR_MAP: Record<AnnouncementBarData['type'], string> = {
  info:    'bg-blue-600 text-white',
  success: 'bg-emerald-600 text-white',
  warning: 'bg-amber-500 text-white',
  urgent:  'bg-red-600 text-white',
}

export default function AnnouncementBar({ data }: { data: AnnouncementBarData }) {
  const [dismissed, setDismissed] = useState(false)

  if (!data.enabled || !data.message || dismissed) return null

  const colorClass = COLOR_MAP[data.type] ?? COLOR_MAP.info

  return (
    <div className={`relative w-full py-2 px-4 text-sm text-center ${colorClass}`} role="banner">
      <span>{data.message}</span>
      {data.linkLabel && data.linkUrl && (
        <a
          href={data.linkUrl}
          className="ml-2 underline underline-offset-2 font-semibold opacity-90 hover:opacity-100"
        >
          {data.linkLabel}
        </a>
      )}
      {data.dismissible && (
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-80 hover:opacity-100"
        >
          ✕
        </button>
      )}
    </div>
  )
}

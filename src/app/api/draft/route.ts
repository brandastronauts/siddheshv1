import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { safeEqual, safeInternalPath } from '@/lib/security'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const configured = process.env.PREVIEW_SECRET || process.env.PAYLOAD_SECRET

  if (!safeEqual(url.searchParams.get('secret'), configured)) {
    return new Response('Invalid preview secret', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(safeInternalPath(url.searchParams.get('path')))
}

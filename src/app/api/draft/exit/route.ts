import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { safeInternalPath } from '@/lib/security'

export async function GET(request: Request) {
  const draft = await draftMode()
  draft.disable()

  // Same-site paths only: "//evil.com" and absolute URLs fall back to "/" (previously an open redirect).
  redirect(safeInternalPath(new URL(request.url).searchParams.get('path')))
}

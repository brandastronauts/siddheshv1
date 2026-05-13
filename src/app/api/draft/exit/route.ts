import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const draft = await draftMode()
  draft.disable()

  const url = new URL(request.url)
  const pathname = url.searchParams.get('path') || '/'
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`

  redirect(safePath)
}

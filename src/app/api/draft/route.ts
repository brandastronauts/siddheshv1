import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

function isAllowed(secret: string | null) {
  const configured = process.env.PREVIEW_SECRET || process.env.PAYLOAD_SECRET
  return Boolean(configured && secret && secret === configured)
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const secret = url.searchParams.get('secret')
  const pathname = url.searchParams.get('path') || '/'

  if (!isAllowed(secret)) {
    return new Response('Invalid preview secret', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(pathname.startsWith('/') ? pathname : `/${pathname}`)
}

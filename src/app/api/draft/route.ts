import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { safeEqual, safeInternalPath } from '@/lib/security'
import { isReviewer } from '@/payload/access/isAdmin.js'

/**
 * Enables Next.js draft mode, then redirects to the page.
 * Allowed when EITHER the request carries a logged-in Payload session with reviewer+ role
 * (used by the admin "Preview" / Live Preview buttons — no secret exposed to the browser),
 * OR a valid PREVIEW_SECRET is supplied (for external tools).
 */
async function hasEditorSession(request: Request) {
  if (!(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)) return false
  try {
    const [{ getPayload }, { default: config }] = await Promise.all([import('payload'), import('@payload-config')])
    const payload = await getPayload({ config })
    const { user } = await payload.auth({ headers: request.headers })
    return Boolean(user && isReviewer({ req: { user } }))
  } catch {
    return false
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const configured = process.env.PREVIEW_SECRET || process.env.PAYLOAD_SECRET
  const allowed = safeEqual(url.searchParams.get('secret'), configured) || (await hasEditorSession(request))

  if (!allowed) return new Response('Preview requires an editor login or a valid preview secret', { status: 401 })

  const draft = await draftMode()
  draft.enable()

  redirect(safeInternalPath(url.searchParams.get('path')))
}

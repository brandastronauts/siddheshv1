import siteContent from '@/content/siteContent'
import { isAdmin } from '../../../../payload/access/isAdmin.js'

export const dynamic = 'force-dynamic'

/**
 * Admin-only diagnostics: for every page in the source content, is the live site rendering Payload
 * data, or silently falling back to static siteContent? Requires a logged-in admin session.
 * Returns counts and paths only — no secrets, no document bodies.
 */
export async function GET(request: Request) {
  const configured = Boolean(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)
  if (!configured) return Response.json({ ok: false, error: 'CMS is not configured in this environment' }, { status: 503 })

  const [{ getPayload }, { default: config }] = await Promise.all([import('payload'), import('@payload-config')])
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: request.headers })
  if (!user || !isAdmin({ req: { user } })) return Response.json({ ok: false, error: 'Forbidden' }, { status: 403 })

  const result = await payload.find({ collection: 'page-overrides', limit: 2000, depth: 0, pagination: false, draft: false })
  const docs = new Map<string, any>(result.docs.map((d: any) => [d.pathname, d]))
  const staticPaths = Object.keys((siteContent as any).pages ?? {})

  const pages = staticPaths.map((pathname) => {
    const doc = docs.get(pathname)
    const sections = Array.isArray(doc?.sections) ? doc.sections.length : 0
    const source = !doc ? 'static-only (no CMS record)' : sections === 0 ? 'static-fallback (CMS record has 0 sections)' : 'cms'
    return { pathname, source, cmsId: doc?.id ?? null, status: doc?._status ?? null, sections, updatedAt: doc?.updatedAt ?? null }
  })
  const summary = pages.reduce<Record<string, number>>((a, p) => ((a[p.source] = (a[p.source] || 0) + 1), a), {})

  return Response.json({
    ok: true,
    checkedAt: new Date().toISOString(),
    summary,
    cmsOnlyRecords: [...docs.keys()].filter((p) => !staticPaths.includes(p)),
    pages,
  })
}

import { revalidatePath, revalidateTag } from 'next/cache'
import { isRevalidatablePath, safeEqual } from '@/lib/security'

const MAX_BODY_BYTES = 8 * 1024
const MAX_PATHS = 50
const MAX_TAGS = 20

/**
 * Prefer a dedicated REVALIDATION_SECRET. Falling back to PAYLOAD_SECRET keeps existing callers working
 * but reuses the master secret — set REVALIDATION_SECRET in Vercel and the fallback is no longer used.
 */
function configuredSecret() {
  return process.env.REVALIDATION_SECRET || process.env.PAYLOAD_SECRET
}

export async function POST(request: Request) {
  if (!safeEqual(request.headers.get('x-revalidation-secret'), configuredSecret())) {
    return Response.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const declared = Number(request.headers.get('content-length') || 0)
  if (declared > MAX_BODY_BYTES) return Response.json({ ok: false, error: 'Payload too large' }, { status: 413 })

  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) return Response.json({ ok: false, error: 'Payload too large' }, { status: 413 })
  let body: any = {}
  try { body = raw ? JSON.parse(raw) : {} } catch { return Response.json({ ok: false, error: 'Invalid JSON' }, { status: 400 }) }

  const paths: unknown[] = Array.isArray(body.paths) ? body.paths : []
  const tags: unknown[] = Array.isArray(body.tags) ? body.tags : []
  if (paths.length > MAX_PATHS || tags.length > MAX_TAGS) {
    return Response.json({ ok: false, error: 'Too many paths or tags' }, { status: 400 })
  }

  const revalidated: string[] = []
  const rejected: unknown[] = []
  for (const p of paths) {
    if (isRevalidatablePath(p)) { revalidatePath(p); revalidated.push(p) } else rejected.push(p)
  }
  const revalidatedTags: string[] = []
  for (const t of tags) {
    if (typeof t === 'string' && /^[A-Za-z0-9:_-]{1,64}$/.test(t)) { revalidateTag(t); revalidatedTags.push(t) } else rejected.push(t)
  }

  return Response.json({ ok: true, paths: revalidated, tags: revalidatedTags, rejected }, { status: rejected.length ? 207 : 200 })
}

import { NextResponse } from 'next/server'
import { rateLimit } from '@/lib/security'

const MAX_BODY_BYTES = 20 * 1024
const MAX_FIELDS = 40
const MAX_VALUE_LENGTH = 5000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isCMSEnabled = Boolean(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)

export async function POST(request: Request) {
  // Best-effort abuse controls (per server instance; add an edge/WAF limit for strict guarantees).
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (!rateLimit(`form:${ip}`, 8, 60_000)) {
    return NextResponse.json({ ok: false, error: 'Too many submissions. Please try again shortly.' }, { status: 429 })
  }
  if (Number(request.headers.get('content-length') || 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: 'Submission too large' }, { status: 413 })
  }

  let body: unknown
  try {
    const raw = await request.text()
    if (raw.length > MAX_BODY_BYTES) return NextResponse.json({ ok: false, error: 'Submission too large' }, { status: 413 })
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 })
  }

  const { formName, email, name, payload: formPayload, sourcePath } = body as Record<string, unknown>

  if (!formName || typeof formName !== 'string') {
    return NextResponse.json({ ok: false, error: 'formName is required' }, { status: 400 })
  }
  if (!formPayload || typeof formPayload !== 'object') {
    return NextResponse.json({ ok: false, error: 'payload is required and must be an object' }, { status: 400 })
  }

  // Server-side validation (the browser checks are not a security boundary).
  const fields = formPayload as Record<string, unknown>
  if (fields['website_url_hp']) return NextResponse.json({ ok: true, saved: false }) // honeypot tripped: pretend success
  if (formName.length > 120 || Object.keys(fields).length > MAX_FIELDS) {
    return NextResponse.json({ ok: false, error: 'Invalid submission' }, { status: 400 })
  }
  if (email !== undefined && email !== '' && (typeof email !== 'string' || email.length > 254 || !EMAIL_RE.test(email))) {
    return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400 })
  }
  const cleaned: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(fields)) {
    if (key.length > 80) continue
    cleaned[key] = typeof value === 'string' ? value.slice(0, MAX_VALUE_LENGTH) : typeof value === 'number' || typeof value === 'boolean' ? value : undefined
  }

  if (!isCMSEnabled) {
    return NextResponse.json({ ok: true, saved: false, reason: 'CMS not configured' })
  }

  try {
    const [{ getPayload }, { default: config }] = await Promise.all([
      import('payload'),
      import('@payload-config'),
    ])
    const payloadInstance = await getPayload({ config })

    await payloadInstance.create({
      collection: 'form-submissions',
      data: {
        formName,
        email: typeof email === 'string' && email ? email : undefined,
        name: typeof name === 'string' && name ? name : undefined,
        payload: cleaned,
        sourcePath: typeof sourcePath === 'string' && sourcePath ? sourcePath : undefined,
      },
    })

    return NextResponse.json({ ok: true, saved: true })
  } catch (error) {
    console.error('[form-submit] Failed to save to CMS:', (error as Error)?.message || error)
    // Don't surface internal errors to client
    return NextResponse.json({ ok: false, error: 'Failed to save submission' }, { status: 500 })
  }
}

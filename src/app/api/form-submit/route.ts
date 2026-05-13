import { NextResponse } from 'next/server'

const isCMSEnabled = Boolean(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
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
        payload: formPayload as Record<string, unknown>,
        sourcePath: typeof sourcePath === 'string' && sourcePath ? sourcePath : undefined,
      },
    })

    return NextResponse.json({ ok: true, saved: true })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[form-submit] Failed to save to CMS:', error)
    }
    // Don't surface internal errors to client
    return NextResponse.json({ ok: false, error: 'Failed to save submission' }, { status: 500 })
  }
}

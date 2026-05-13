import { revalidatePath, revalidateTag } from 'next/cache'

function isAllowed(secret: string | null) {
  const configured = process.env.REVALIDATION_SECRET || process.env.PAYLOAD_SECRET
  return Boolean(configured && secret && secret === configured)
}

export async function POST(request: Request) {
  const secret = request.headers.get('x-revalidation-secret')

  if (!isAllowed(secret)) {
    return Response.json({ ok: false, error: 'Invalid revalidation secret' }, { status: 401 })
  }

  const body = await request.json().catch(() => ({}))
  const paths = Array.isArray(body.paths) ? body.paths : []
  const tags = Array.isArray(body.tags) ? body.tags : []

  for (const path of paths) {
    if (typeof path === 'string' && path.startsWith('/')) revalidatePath(path)
  }

  for (const tag of tags) {
    if (typeof tag === 'string' && tag) revalidateTag(tag)
  }

  return Response.json({ ok: true, paths, tags })
}

import { timingSafeEqual } from 'crypto'

/** Constant-time string comparison (avoids leaking secret prefixes through response timing). */
export function safeEqual(a: string | null | undefined, b: string | null | undefined): boolean {
  if (typeof a !== 'string' || typeof b !== 'string' || !a || !b) return false
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) {
    // Still do a comparison so timing does not reveal the length mismatch cheaply.
    timingSafeEqual(ab, ab)
    return false
  }
  return timingSafeEqual(ab, bb)
}

/**
 * Accept only a same-site absolute path ("/publications?x=1"). Rejects protocol-relative ("//evil.com"),
 * backslash tricks ("/\evil.com"), schemes, control characters and over-long values; falls back to "/".
 */
export function safeInternalPath(input: string | null | undefined, fallback = '/'): string {
  if (typeof input !== 'string') return fallback
  const value = input.trim()
  if (!value.startsWith('/') || value.startsWith('//') || value.includes('\\')) return fallback
  if (value.length > 300 || /[\u0000-\u001f\u007f]/.test(value)) return fallback
  try {
    const url = new URL(value, 'http://placeholder.invalid')
    if (url.host !== 'placeholder.invalid') return fallback
  } catch {
    return fallback
  }
  return value
}

/** A path that is safe to hand to revalidatePath(): letters, digits and - _ . ~ / only. */
export function isRevalidatablePath(input: unknown): input is string {
  return typeof input === 'string' && input.length <= 200 && /^\/[A-Za-z0-9\-._~/]*$/.test(input) && !input.includes('//')
}

/** Best-effort in-memory sliding-window rate limit (per server instance; add an edge/WAF limit for strict guarantees). */
const buckets = new Map<string, number[]>()
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const recent = (buckets.get(key) || []).filter((t) => now - t < windowMs)
  if (recent.length >= limit) {
    buckets.set(key, recent)
    return false
  }
  recent.push(now)
  buckets.set(key, recent)
  if (buckets.size > 5000) for (const k of buckets.keys()) { buckets.delete(k); if (buckets.size < 2500) break }
  return true
}

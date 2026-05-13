/**
 * CMS-aware helper for Next.js generateStaticParams().
 *
 * For each dynamic route, call getStaticSlugsForPrefix('/prefix') instead of
 * directly reading siteContent.js.  It always starts with the static slug list
 * so the build never regresses when the CMS is unavailable.  When Payload is
 * reachable it merges any additional pathnames from the `page-overrides`
 * collection, so editor-created pages are also pre-rendered at build time.
 *
 * Slugs not present in either source are still served on-demand thanks to
 * Next.js's default dynamicParams = true behaviour.
 */

import siteContent from '@/content/siteContent'

const isCMSEnabled = Boolean(process.env.PAYLOAD_SECRET && process.env.DATABASE_URL)

/**
 * Returns `{ slug }` entries for generateStaticParams under a given prefix.
 *
 * @param prefix - e.g. '/publications' or '/newsroom/dispatch'
 */
export async function getStaticSlugsForPrefix(
  prefix: string
): Promise<Array<{ slug: string }>> {
  const normalizedPrefix = prefix.endsWith('/') ? prefix : `${prefix}/`

  // 1. Static slugs — always present, never fails
  const slugSet = new Set<string>()
  const pages = (siteContent as any).pages ?? {}
  for (const key of Object.keys(pages)) {
    if (!key.startsWith(normalizedPrefix)) continue
    const rest = key.slice(normalizedPrefix.length)
    if (!rest || rest.includes('/')) continue
    slugSet.add(rest)
  }

  // 2. CMS slugs — merged in when Payload is reachable
  if (isCMSEnabled) {
    try {
      const [{ getPayload }, { default: config }] = await Promise.all([
        import('payload'),
        import('@payload-config'),
      ])
      const payload = await getPayload({ config })

      // Fetch all page-overrides; filter client-side to avoid adapter-specific
      // regex syntax in the where clause.
      const result = await payload.find({
        collection: 'page-overrides',
        limit: 1000,
        depth: 0,
        pagination: false,
      } as Parameters<typeof payload.find>[0])

      for (const doc of result.docs) {
        const pathname = (doc as any).pathname
        if (typeof pathname !== 'string') continue
        if (!pathname.startsWith(normalizedPrefix)) continue
        const rest = pathname.slice(normalizedPrefix.length)
        if (!rest || rest.includes('/')) continue
        slugSet.add(rest)
      }
    } catch {
      // CMS unavailable — static slugs are sufficient for the build
    }
  }

  return Array.from(slugSet).map((slug) => ({ slug }))
}

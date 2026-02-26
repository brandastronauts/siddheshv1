import siteContent from '../content/siteContent';

/**
 * Safe accessor for siteContent.pages.
 * Returns the page object or null (never crashes).
 * In dev mode, logs a warning when a route key is missing.
 */
export function getPage(routeKey) {
  const page = siteContent.pages?.[routeKey] ?? null;
  if (!page && import.meta.env.DEV) {
    console.warn(`[siteContent] Missing route: ${routeKey}`);
  }
  return page;
}

export default getPage;

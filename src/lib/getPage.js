import siteContent from '../content/siteContent';

/**
 * Safe accessor for siteContent.pages.
 * Returns the page object or null (never crashes).
 */
export function getPage(routeKey) {
  const page = siteContent.pages?.[routeKey] ?? null;
  if (!page && process.env.NODE_ENV === 'development') {
    console.warn(`[siteContent] Missing route: ${routeKey}`);
  }
  return page;
}

export default getPage;

/**
 * validateContentLinks.js
 * Dev-only utility that scans siteContent.js for broken internal links
 * and missing download assets. Runs on app init in development mode.
 */

const DOWNLOAD_FILES = new Set([
  'acds-patent.pdf', 'acds.pdf', 'ahms-patent.pdf', 'amas-patent.pdf',
  'blue-blocks-mri-media-kit.pdf', 'borehole-rescue-patent.pdf',
  'in-space-authorization-letter.pdf', 'saparya-conference-booklet.pdf',
  'saparya-presentation-slides.pdf', 'security-uav-patent.pdf',
]);

/**
 * Collect all internal hrefs from a section tree recursively.
 */
const collectLinks = (obj, links = []) => {
  if (!obj || typeof obj !== 'object') return links;

  if (Array.isArray(obj)) {
    obj.forEach(item => collectLinks(item, links));
    return links;
  }

  // Check common href fields
  ['href', 'path', 'url'].forEach(key => {
    const val = obj[key];
    if (typeof val === 'string' && val.startsWith('/') && !val.startsWith('//')) {
      links.push(val);
    }
  });

  // Recurse into nested objects
  Object.values(obj).forEach(val => {
    if (val && typeof val === 'object') {
      collectLinks(val, links);
    }
  });

  return links;
};

/**
 * Run validation against known routes and download files.
 * @param {object} siteContent - The full siteContent export
 * @param {string[]} appRoutes - Array of route patterns from App.tsx
 */
export const validateContentLinks = (siteContent, appRoutes = []) => {
  if (import.meta.env.PROD) return; // Only run in dev

  const pages = siteContent?.pages || {};
  const knownPaths = new Set(Object.keys(pages));

  // Build route matchers from app routes (convert :slug patterns to regex)
  const routeMatchers = appRoutes.map(r => {
    const pattern = r.replace(/:[^/]+/g, '[^/]+').replace(/\*/g, '.*');
    return new RegExp(`^${pattern}$`);
  });

  const isValidRoute = (href) => {
    // Strip hash/query
    const path = href.split('#')[0].split('?')[0];
    if (!path || path === '/') return true;
    if (knownPaths.has(path)) return true;
    return routeMatchers.some(re => re.test(path));
  };

  const isValidDownload = (href) => {
    if (!href.startsWith('/downloads/')) return true; // Not a download link
    const filename = href.split('/').pop();
    return DOWNLOAD_FILES.has(filename);
  };

  const broken = [];
  const missingDownloads = [];

  Object.entries(pages).forEach(([pagePath, pageData]) => {
    const links = collectLinks(pageData.sections || []);
    // Also collect from nav, breadcrumbs, seo
    collectLinks(pageData.seo, links);

    links.forEach(href => {
      if (href.startsWith('/downloads/') && !isValidDownload(href)) {
        missingDownloads.push({ page: pagePath, href });
      } else if (!href.startsWith('/downloads/') && !href.startsWith('#') && !isValidRoute(href)) {
        broken.push({ page: pagePath, href });
      }
    });
  });

  if (broken.length > 0) {
    console.warn(
      `🔗 [Link Validator] ${broken.length} broken internal link(s):\n` +
      broken.map(b => `  ${b.page} → ${b.href}`).join('\n')
    );
  }

  if (missingDownloads.length > 0) {
    console.warn(
      `📥 [Link Validator] ${missingDownloads.length} missing download file(s):\n` +
      missingDownloads.map(d => `  ${d.page} → ${d.href}`).join('\n')
    );
  }

  if (broken.length === 0 && missingDownloads.length === 0) {
    console.info('✅ [Link Validator] All internal links and downloads verified.');
  }
};

export default validateContentLinks;

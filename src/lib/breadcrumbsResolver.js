/**
 * breadcrumbsResolver.js
 * Single source of truth for human-readable breadcrumb labels.
 * Used by both the React <Breadcrumbs/> component (runtime) and the
 * staticHtmlRenderer (build-time prerender) so the same trail appears
 * in initial HTML and after hydration.
 *
 * Universal Fix: labels resolve from sitemapData first, then from the
 * page's own title, then finally from a title-cased slug fallback.
 */

import { sitemapData } from './sitemapData.js';

// Flatten sitemapData once into a path → name lookup.
const PATH_LABELS = (() => {
  const map = {};
  Object.values(sitemapData || {}).forEach((group) => {
    if (!Array.isArray(group)) return;
    group.forEach((entry) => {
      if (entry?.url && entry?.name) map[entry.url] = entry.name;
    });
  });
  // Friendly labels for intermediate segments not present as their own pages.
  Object.assign(map, {
    '/newsroom/dispatch': 'Dispatches',
    '/newsroom/coverage': 'Coverage',
    '/newsroom/updates': 'Updates',
    '/governance/team': 'Team',
    '/proceedings': 'Proceedings',
    '/presentations': 'Presentations',
    '/technical-briefs': 'Technical Briefs',
  });
  return map;
})();

function titleCaseSlug(slug) {
  return String(slug)
    .split('-')
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(' ');
}

export function labelForPath(path, fallback) {
  if (PATH_LABELS[path]) return PATH_LABELS[path];
  if (fallback) return fallback;
  const last = path.split('/').filter(Boolean).pop() || '';
  return titleCaseSlug(last);
}

/**
 * Build a breadcrumb trail (excluding Home) for a given route.
 * Each entry: { name, path, current }
 *
 * @param {string} pathname - normalized route, e.g. "/patents/borehole-rescue-system"
 * @param {string} [pageTitle] - title of the current page for the leaf label
 */
export function buildBreadcrumbTrail(pathname, pageTitle) {
  if (!pathname || pathname === '/') return [];
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length) return [];

  const trail = [];
  for (let i = 0; i < segments.length; i++) {
    const path = '/' + segments.slice(0, i + 1).join('/');
    const isLeaf = i === segments.length - 1;
    const name = isLeaf
      ? labelForPath(path, pageTitle)
      : labelForPath(path);
    trail.push({ name, path, current: isLeaf });
  }
  return trail;
}

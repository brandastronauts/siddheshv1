/**
 * Content Query Helpers — CMS-readiness utilities.
 *
 * These functions provide WordPress-CPT-compatible querying
 * over the siteContent.pages data structure without modifying
 * any rendering logic.
 *
 * Usage:
 *   import { getPagesByCPT, filterByTax, sortByDateDesc } from '@/lib/contentHelpers';
 *   const patents = getPagesByCPT('patent');
 *   const aerospace = filterByTax(patents, 'researchDomains', 'Aerospace');
 */

import siteContent from '../content/siteContent';

/**
 * Re-export the safe page getter for convenience.
 * Returns the page object or null (never crashes).
 */
export { default as getPage } from './getPage';

/**
 * Returns all pages as an array of { route, ...pageData }.
 */
export function getAllPages() {
  if (!siteContent.pages) return [];
  return Object.entries(siteContent.pages).map(([route, data]) => ({
    route,
    ...data,
  }));
}

/**
 * Returns all pages matching a given _cpt value.
 * @param {string} cpt - e.g. 'patent', 'publication', 'news-item', 'team-member'
 * @returns {Array<{ route: string, ...pageData }>}
 */
export function getPagesByCPT(cpt) {
  return getAllPages().filter((page) => page._cpt === cpt);
}

/**
 * Filters an array of pages by a taxonomy-like field value.
 * Supports both array fields (e.g. researchDomains: ['Aerospace']) and
 * string fields (e.g. newsType: 'dispatch').
 *
 * @param {Array} pages - Array of page objects (from getAllPages or getPagesByCPT)
 * @param {string} key - The field path to check (dot notation for nested: 'fields.newsType')
 * @param {string} value - The value to match
 * @returns {Array}
 */
export function filterByTax(pages, key, value) {
  return pages.filter((page) => {
    const fieldValue = getNestedValue(page, key);
    if (Array.isArray(fieldValue)) {
      return fieldValue.includes(value);
    }
    return fieldValue === value;
  });
}

/**
 * Sorts pages by a date field in descending order (newest first).
 * Looks for the date in fields.publishedDate by default.
 *
 * @param {Array} pages - Array of page objects
 * @param {string} [dateKey='fields.publishedDate'] - Dot-notation path to date field
 * @returns {Array} Sorted copy (does not mutate input)
 */
export function sortByDateDesc(pages, dateKey = 'fields.publishedDate') {
  return [...pages].sort((a, b) => {
    const dateA = getNestedValue(a, dateKey) || '';
    const dateB = getNestedValue(b, dateKey) || '';
    return dateB.localeCompare(dateA);
  });
}

/**
 * Returns pages grouped by _cpt, useful for archive/index generation.
 * @returns {Object<string, Array>}
 */
export function getPagesByType() {
  const all = getAllPages();
  const grouped = {};
  all.forEach((page) => {
    const cpt = page._cpt || 'page';
    if (!grouped[cpt]) grouped[cpt] = [];
    grouped[cpt].push(page);
  });
  return grouped;
}

// ─── Internal helpers ───────────────────────────────────────────

/**
 * Safely resolve dot-notation path on an object.
 * e.g. getNestedValue(obj, 'fields.newsType') → obj.fields.newsType
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export default {
  getAllPages,
  getPagesByCPT,
  filterByTax,
  sortByDateDesc,
  getPagesByType,
};

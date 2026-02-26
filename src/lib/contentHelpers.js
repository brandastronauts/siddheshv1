/**
 * Content Query Helpers — CMS-readiness utilities.
 *
 * These functions provide WordPress-CPT-compatible querying
 * over the siteContent.pages data structure without modifying
 * any rendering logic.
 *
 * Usage:
 *   import { getPagesByCPT, filterByTax, sortByDateDesc, paginateResults } from '@/lib/contentHelpers';
 *   const patents = getPagesByCPT('patent');
 *   const aerospace = filterByTax(patents, 'researchDomains', 'Aerospace');
 *   const page1 = paginateResults(patents, 1, 10);
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
 * Checks both top-level page properties and nested `fields` object.
 *
 * @param {Array} pages - Array of page objects (from getAllPages or getPagesByCPT)
 * @param {string} key - The field path to check (dot notation for nested: 'fields.newsType')
 * @param {string} value - The value to match
 * @returns {Array}
 */
export function filterByTax(pages, key, value) {
  return pages.filter((page) => {
    // Check direct path first
    let fieldValue = getNestedValue(page, key);
    // Fallback: check inside fields object
    if (fieldValue === undefined && page.fields) {
      fieldValue = getNestedValue(page.fields, key);
    }
    if (Array.isArray(fieldValue)) {
      return fieldValue.includes(value);
    }
    return fieldValue === value;
  });
}

/**
 * Sorts pages by a date field in descending order (newest first).
 * Checks both `fields.publishedDate` and top-level `publishedDate`.
 *
 * @param {Array} pages - Array of page objects
 * @param {string} [dateKey='publishedDate'] - Field name to sort by
 * @returns {Array} Sorted copy (does not mutate input)
 */
export function sortByDateDesc(pages, dateKey = 'publishedDate') {
  return [...pages].sort((a, b) => {
    const dateA = getNestedValue(a, `fields.${dateKey}`) || getNestedValue(a, dateKey) || '';
    const dateB = getNestedValue(b, `fields.${dateKey}`) || getNestedValue(b, dateKey) || '';
    return dateB.localeCompare(dateA);
  });
}

/**
 * Paginate an array of pages.
 * Returns { items, page, perPage, totalPages, totalItems, hasNext, hasPrev }.
 *
 * @param {Array} pages - Array of page objects
 * @param {number} [page=1] - Current page number (1-indexed)
 * @param {number} [perPage=10] - Items per page
 * @returns {{ items: Array, page: number, perPage: number, totalPages: number, totalItems: number, hasNext: boolean, hasPrev: boolean }}
 */
export function paginateResults(pages, page = 1, perPage = 10) {
  const totalItems = pages.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * perPage;
  const items = pages.slice(start, start + perPage);

  return {
    items,
    page: safePage,
    perPage,
    totalPages,
    totalItems,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
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

/**
 * Returns all unique values for a given taxonomy/field key across pages.
 * Useful for building filter UIs or generating taxonomy archives.
 *
 * @param {string} key - Field path (e.g. 'researchDomains', 'fields.category')
 * @param {string} [cpt] - Optional CPT filter
 * @returns {string[]} Sorted unique values
 */
export function getTaxonomyTerms(key, cpt) {
  const pages = cpt ? getPagesByCPT(cpt) : getAllPages();
  const terms = new Set();
  pages.forEach((page) => {
    let val = getNestedValue(page, key);
    if (val === undefined && page.fields) {
      val = getNestedValue(page.fields, key);
    }
    if (Array.isArray(val)) {
      val.forEach((v) => terms.add(v));
    } else if (typeof val === 'string' && val) {
      terms.add(val);
    }
  });
  return [...terms].sort();
}

/**
 * Returns archive-ready metadata for a CPT.
 * Combines sorting, optional taxonomy filtering, and pagination.
 *
 * @param {object} opts - { cpt, taxonomy, term, page, perPage, sortBy }
 * @returns {{ items, page, perPage, totalPages, totalItems, hasNext, hasPrev }}
 */
export function getArchive({
  cpt,
  taxonomy,
  term,
  page = 1,
  perPage = 10,
  sortBy = 'publishedDate',
} = {}) {
  let pages = cpt ? getPagesByCPT(cpt) : getAllPages();
  if (taxonomy && term) {
    pages = filterByTax(pages, taxonomy, term);
  }
  pages = sortByDateDesc(pages, sortBy);
  return paginateResults(pages, page, perPage);
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
  paginateResults,
  getPagesByType,
  getTaxonomyTerms,
  getArchive,
};

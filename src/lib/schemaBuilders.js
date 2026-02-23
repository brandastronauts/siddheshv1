/**
 * schemaBuilders.js
 * Centralized JSON-LD schema builder helpers for Blue Blocks Micro Research Institute.
 * Each function returns a plain object ready for JSON.stringify() injection via PageShell.
 *
 * Follows schema.org vocabulary — ready for WordPress CMS field mapping.
 */

const SITE_URL = 'https://bb-researchv2.vercel.app';
const ORG_NAME = 'Blue Blocks Micro Research Institute';
const ORG_ALT_NAME = 'BBMRI';
const ORG_URL = SITE_URL;

// ─── Global Schemas (injected on every page via PageShell) ───────────────────

/**
 * Build the set of global schemas that appear on every page.
 * @param {object} opts  { pageName, pagePath, breadcrumbs }
 *   breadcrumbs: [{ name, path }] — intermediate crumbs (Home is auto-prepended)
 * @returns {Array} Array of schema objects
 */
export const buildGlobalSchemas = ({ pageName = '', pagePath = '/', breadcrumbs = [] } = {}) => {
  const schemas = [];

  // 1. Organization
  schemas.push({
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ResearchOrganization', 'EducationalOrganization'],
    '@id': `${SITE_URL}/#organization`,
    name: ORG_NAME,
    alternateName: ORG_ALT_NAME,
    url: ORG_URL,
    logo: `${SITE_URL}/logo.png`,
    email: 'research@blueblocks.in',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'research@blueblocks.in',
      contactType: 'research inquiries',
    },
    sameAs: [],
  });

  // 2. WebSite (no SearchAction — no /search route exists)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: ORG_NAME,
    url: ORG_URL,
  });

  // 3. WebPage
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${pagePath}#webpage`,
    url: `${SITE_URL}${pagePath}`,
    name: pageName,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  });

  // 4. BreadcrumbList
  const crumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
  ];
  breadcrumbs.forEach((c, i) => {
    crumbItems.push({
      '@type': 'ListItem',
      position: i + 2,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    });
  });
  // Add current page as final breadcrumb if not Home and not already in breadcrumbs
  if (pagePath !== '/' && !breadcrumbs.some(c => c.path === pagePath)) {
    crumbItems.push({
      '@type': 'ListItem',
      position: crumbItems.length + 1,
      name: pageName,
      item: `${SITE_URL}${pagePath}`,
    });
  }
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbItems,
  });

  return schemas;
};

/**
 * Build breadcrumbs array from a URL path.
 * e.g. "/publications/some-slug" → [{ name: "Publications", path: "/publications" }]
 * The current page is added separately by buildGlobalSchemas.
 */
export const buildBreadcrumbsFromPath = (pathname) => {
  if (!pathname || pathname === '/') return [];
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length <= 1) return [];
  // Return intermediate segments (not the last one — that's the current page)
  const crumbs = [];
  for (let i = 0; i < segments.length - 1; i++) {
    const path = '/' + segments.slice(0, i + 1).join('/');
    const name = segments[i]
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    crumbs.push({ name, path });
  }
  return crumbs;
};

// ─── Per-page Schema Helpers ─────────────────────────────────────────────────

/**
 * Standard WebPage schema for any route.
 * @param {object} p  { name, description, path }
 */
export const buildWebPageSchema = ({ name, description, path = '/' }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url: `${SITE_URL}${path}`,
  isPartOf: { '@type': 'WebSite', url: SITE_URL },
});

/**
 * BreadcrumbList schema.
 * @param {Array} crumbs  [{ name, path }] in order from Home onwards
 */
export const buildBreadcrumbSchema = (crumbs = []) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ...crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  ],
});

// ─── Content-type Schema Builders ────────────────────────────────────────────

/**
 * ScholarlyArticle — for /publications/* detail pages.
 */
export const buildScholarlyArticleSchema = ({
  title = '',
  abstract = '',
  datePublished = '',
  authors = [],
  url = '',
  keywords = [],
  pdfUrl = '',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: title,
    description: abstract,
    datePublished,
    keywords: keywords.join(', '),
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    author: authors.map(name => ({
      '@type': 'Person',
      name,
      affiliation: { '@type': 'Organization', name: ORG_NAME },
    })),
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: ORG_URL,
    },
    isPartOf: { '@type': 'WebSite', url: SITE_URL },
  };

  if (pdfUrl) {
    schema.encoding = {
      '@type': 'MediaObject',
      contentUrl: pdfUrl.startsWith('http') ? pdfUrl : `${SITE_URL}${pdfUrl}`,
      encodingFormat: 'application/pdf',
    };
  }

  return schema;
};

/**
 * CreativeWork — for /patents/* detail pages.
 */
export const buildCreativeWorkSchema = ({
  title = '',
  abstract = '',
  datePublished = '',
  inventors = [],
  applicationNo = '',
  url = '',
  pdfUrl = '',
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: title,
  description: abstract,
  dateCreated: datePublished,
  identifier: applicationNo,
  url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  creator: inventors.map(name => ({
    '@type': 'Person',
    name,
    affiliation: { '@type': 'Organization', name: ORG_NAME },
  })),
  publisher: {
    '@type': 'Organization',
    name: ORG_NAME,
    url: ORG_URL,
  },
  ...(pdfUrl && {
    encoding: {
      '@type': 'MediaObject',
      contentUrl: pdfUrl.startsWith('http') ? pdfUrl : `${SITE_URL}${pdfUrl}`,
      encodingFormat: 'application/pdf',
    },
  }),
});

/**
 * Book — for /books/* detail pages.
 */
export const buildBookSchema = ({
  title = '',
  description = '',
  datePublished = '',
  authors = [],
  isbn = '',
  url = '',
  coverUrl = '',
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: title,
  description,
  datePublished,
  isbn,
  url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  author: authors.map(name => ({
    '@type': 'Person',
    name,
    affiliation: { '@type': 'Organization', name: ORG_NAME },
  })),
  publisher: {
    '@type': 'Organization',
    name: ORG_NAME,
    url: ORG_URL,
  },
  ...(coverUrl && {
    image: coverUrl.startsWith('http') ? coverUrl : `${SITE_URL}${coverUrl}`,
  }),
});

/**
 * Person — for researcher / team profiles.
 */
export const buildPersonSchema = ({
  name = '',
  jobTitle = '',
  description = '',
  url = '',
  imageUrl = '',
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  jobTitle,
  description,
  url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  affiliation: { '@type': 'Organization', name: ORG_NAME, url: ORG_URL },
  ...(imageUrl && { image: imageUrl.startsWith('http') ? imageUrl : `${SITE_URL}${imageUrl}` }),
});

/**
 * NewsArticle — for /newsroom/* detail pages.
 */
export const buildNewsArticleSchema = ({
  title = '',
  description = '',
  datePublished = '',
  authors = [],
  url = '',
  imageUrl = '',
}) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: title,
  description,
  datePublished,
  url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  author: authors.map(name => ({
    '@type': 'Person',
    name,
    affiliation: { '@type': 'Organization', name: ORG_NAME },
  })),
  publisher: {
    '@type': 'Organization',
    name: ORG_NAME,
    url: ORG_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
    },
  },
  ...(imageUrl && {
    image: {
      '@type': 'ImageObject',
      url: imageUrl.startsWith('http') ? imageUrl : `${SITE_URL}${imageUrl}`,
    },
  }),
});

/**
 * AboutPage + Organization + ItemList (board) — for /governance page.
 */
export const buildGovernanceSchemas = ({
  description = '',
  boardMembers = [],
}) => [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Governance & Ethics — Blue Blocks Micro Research Institute',
    description,
    url: `${SITE_URL}/governance`,
    isPartOf: { '@type': 'WebSite', url: SITE_URL },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Board of Governance',
    itemListElement: boardMembers.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Person',
        name: m.name,
        jobTitle: m.jobTitle,
        affiliation: { '@type': 'Organization', name: ORG_NAME },
      },
    })),
  },
];

// Export SITE_URL for use in siteContent.js
export { SITE_URL, ORG_NAME };

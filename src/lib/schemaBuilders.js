/**
 * schemaBuilders.js
 * Centralized JSON-LD schema builder helpers for Blue Blocks Micro Research Institute.
 * Each function returns a plain object ready for JSON.stringify() injection via PageShell.
 *
 * Follows schema.org vocabulary — ready for WordPress CMS field mapping.
 */

const SITE_URL = 'https://siddheshv1.lovable.app';
const ORG_NAME = 'Blue Blocks Micro Research Institute';
const ORG_URL = SITE_URL;

// ─── Global Schemas ──────────────────────────────────────────────────────────

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ResearchOrganization', 'EducationalOrganization'],
  name: ORG_NAME,
  url: ORG_URL,
  logo: `${SITE_URL}/logo.png`,
  email: 'research@blueblocks.in',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'research@blueblocks.in',
    contactType: 'research inquiries',
  },
  sameAs: [], // Placeholder: add social / profile URLs here
});

export const buildWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: ORG_NAME,
  url: ORG_URL,
  // SearchAction omitted — no search UI currently
});

// ─── Per-page Schemas ─────────────────────────────────────────────────────────

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
 * @param {object} pub  { title, abstract, datePublished, authors, url, keywords, pdfUrl }
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
 * @param {object} pat  { title, abstract, datePublished, inventors, applicationNo, url, pdfUrl }
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
 * @param {object} b  { title, description, datePublished, authors, isbn, url, coverUrl }
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
 * @param {object} r  { name, jobTitle, description, url, imageUrl }
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
 * @param {object} n  { title, description, datePublished, authors, url, imageUrl }
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
 * @param {object} g  { description, boardMembers: [{ name, jobTitle }] }
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

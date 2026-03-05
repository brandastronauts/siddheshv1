/**
 * schemaBuilders.js
 * Centralized JSON-LD schema builder helpers for Blue Blocks Micro Research Institute.
 * Each function returns a plain object ready for @graph injection via Helmet.
 *
 * Follows schema.org vocabulary. All schemas omit @context — the wrapping
 * @graph object in SEO.jsx adds it once.
 */

const SITE_URL = 'https://research.blueblocks.in';
const ORG_NAME = 'Blue Blocks Micro Research Institute';
const ORG_ALT_NAME = 'Blue Blocks Research';
const ORG_URL = SITE_URL;

// ─── ORCID registry for known researchers ────────────────────────────────────
const ORCID_MAP = {
  'Sandhya Rao M': 'https://orcid.org/0009-0003-7368-2604',
  'Sandhya Rao': 'https://orcid.org/0009-0003-7368-2604',
  'Munira Hussain': 'https://orcid.org/0009-0003-5904-6206',
  'Sruthi Matta': 'https://orcid.org/0009-0008-2791-1273',
  'Pavan Goyal': 'https://orcid.org/0009-0009-8840',
};

// ─── Affiliation node (reused across builders) ───────────────────────────────
const AFFILIATION_NODE = {
  '@type': 'ResearchOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: ORG_NAME,
  url: ORG_URL,
};

// ─── Global: ResearchOrganization ────────────────────────────────────────────
export const buildOrganizationSchema = () => ({
  '@type': 'ResearchOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: ORG_NAME,
  alternateName: ORG_ALT_NAME,
  url: ORG_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'A longitudinal research institute studying human innovation capacity through Montessori observation protocols from birth to adulthood.',
  email: 'research@blueblocks.in',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'research@blueblocks.in',
    contactType: 'research inquiries',
  },
  parentOrganization: {
    '@type': 'Organization',
    '@id': 'https://www.blueblocks.in/#organization',
    name: 'Blue Blocks Montessori School',
    url: 'https://www.blueblocks.in',
  },
  sameAs: [
    'https://www.linkedin.com/school/blue-blocks-school',
    'https://www.facebook.com/blueblocksmontessorischool',
    'https://www.instagram.com/blueblocksmontessorischool/',
    'https://www.youtube.com/channel/UCnJ6uX3B-uwAg63PgTK0LhQ',
    'https://zenodo.org/communities/blueblocksmicroresearchinstitute',
  ],
});

// ─── Global: WebSite ─────────────────────────────────────────────────────────
export const buildWebSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: ORG_NAME,
  url: ORG_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
});

// ─── Global schemas array (for every page) ───────────────────────────────────
export const buildGlobalGraphNodes = () => [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
];

// ─── WebPage ─────────────────────────────────────────────────────────────────
export const buildWebPageSchema = ({ name, description, path = '/' }) => ({
  '@type': 'WebPage',
  '@id': `${SITE_URL}${path}#webpage`,
  url: `${SITE_URL}${path}`,
  name,
  description,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
});

// ─── BreadcrumbList ──────────────────────────────────────────────────────────
export const buildBreadcrumbSchema = (crumbs = []) => ({
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

/**
 * Build breadcrumbs array from a URL path.
 */
export const buildBreadcrumbsFromPath = (pathname) => {
  if (!pathname || pathname === '/') return [];
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length <= 1) return [];
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

/**
 * Convenience: builds global + page-level schemas in a single @graph-ready array.
 */
export const buildGlobalSchemas = ({ pageName = '', pagePath = '/', breadcrumbs = [] } = {}) => {
  const nodes = [
    ...buildGlobalGraphNodes(),
    buildWebPageSchema({ name: pageName, path: pagePath }),
  ];

  // Breadcrumb
  const crumbItems = [...breadcrumbs];
  if (pagePath !== '/' && !breadcrumbs.some(c => c.path === pagePath)) {
    crumbItems.push({ name: pageName, path: pagePath });
  }
  if (crumbItems.length > 0) {
    nodes.push(buildBreadcrumbSchema(crumbItems));
  }

  return nodes;
};

// ─── Content-type Schema Builders ────────────────────────────────────────────

/**
 * Person — for researcher / team profiles.
 * Auto-injects ORCID sameAs when the name matches a known researcher.
 */
export const buildPersonSchema = ({
  name = '',
  jobTitle = '',
  description = '',
  url = '',
  imageUrl = '',
  orcid = '',
  sameAs = [],
}) => {
  // Resolve ORCID from map if not explicitly provided
  const resolvedOrcid = orcid || ORCID_MAP[name] || '';
  const allSameAs = [...sameAs];
  if (resolvedOrcid && !allSameAs.includes(resolvedOrcid)) {
    allSameAs.push(resolvedOrcid);
  }

  return {
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    affiliation: AFFILIATION_NODE,
    ...(imageUrl && { image: imageUrl.startsWith('http') ? imageUrl : `${SITE_URL}${imageUrl}` }),
    ...(allSameAs.length > 0 && { sameAs: allSameAs }),
  };
};

/**
 * ScholarlyArticle — for /publications/* detail pages.
 */
export const buildScholarlyArticleSchema = ({
  title = '',
  abstract = '',
  datePublished = '',
  dateModified = '',
  authors = [],
  url = '',
  keywords = [],
  pdfUrl = '',
}) => {
  const schema = {
    '@type': 'ScholarlyArticle',
    headline: title,
    description: abstract,
    datePublished,
    ...(dateModified && { dateModified }),
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    author: authors.map(name => {
      const person = {
        '@type': 'Person',
        name,
        affiliation: AFFILIATION_NODE,
      };
      const orcidUrl = ORCID_MAP[name];
      if (orcidUrl) person.sameAs = orcidUrl;
      return person;
    }),
    publisher: AFFILIATION_NODE,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };

  if (keywords.length > 0) {
    schema.keywords = keywords.join(', ');
  }

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
 * Patent — for /patents/* detail pages (schema.org Patent type).
 */
export const buildPatentSchema = ({
  name = '',
  description = '',
  datePublished = '',
  inventors = [],
  applicationNo = '',
  url = '',
  pdfUrl = '',
}) => {
  const schema = {
    '@type': 'Patent',   // schema.org pending type — widely recognized by Google
    name,
    description,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    ...(applicationNo && { identifier: applicationNo }),
    ...(datePublished && { datePublished }),
    inventor: inventors.map(inv => ({
      '@type': 'Person',
      name: inv,
      affiliation: AFFILIATION_NODE,
    })),
    assignee: AFFILIATION_NODE,
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
 * CreativeWork — legacy alias for patents (kept for backward compat).
 */
export const buildCreativeWorkSchema = ({
  title = '',
  abstract = '',
  datePublished = '',
  inventors = [],
  applicationNo = '',
  url = '',
  pdfUrl = '',
}) => buildPatentSchema({
  name: title,
  description: abstract,
  datePublished,
  inventors,
  applicationNo,
  url,
  pdfUrl,
});

/**
 * Dataset — for Zenodo/data record pages.
 */
export const buildDatasetSchema = ({
  name = '',
  description = '',
  datePublished = '',
  creators = [],
  url = '',
  zenodoUrl = '',
  keywords = [],
  license = '',
}) => ({
  '@type': 'Dataset',
  name,
  description,
  datePublished,
  url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  creator: creators.map(c => ({
    '@type': 'Person',
    name: c,
    affiliation: AFFILIATION_NODE,
  })),
  publisher: AFFILIATION_NODE,
  ...(zenodoUrl && { sameAs: zenodoUrl }),
  ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
  ...(license && { license }),
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
  '@type': 'Book',
  name: title,
  description,
  datePublished,
  isbn,
  url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  author: authors.map(name => ({
    '@type': 'Person',
    name,
    affiliation: AFFILIATION_NODE,
  })),
  publisher: AFFILIATION_NODE,
  ...(coverUrl && {
    image: coverUrl.startsWith('http') ? coverUrl : `${SITE_URL}${coverUrl}`,
  }),
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
  '@type': 'NewsArticle',
  headline: title,
  description,
  datePublished,
  url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  author: authors.map(name => ({
    '@type': 'Person',
    name,
    affiliation: AFFILIATION_NODE,
  })),
  publisher: {
    ...AFFILIATION_NODE,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  ...(imageUrl && {
    image: { '@type': 'ImageObject', url: imageUrl.startsWith('http') ? imageUrl : `${SITE_URL}${imageUrl}` },
  }),
});

/**
 * AboutPage + ItemList (board) — for /governance page.
 */
export const buildGovernanceSchemas = ({
  description = '',
  boardMembers = [],
}) => [
  {
    '@type': 'AboutPage',
    name: 'Governance & Ethics — Blue Blocks Micro Research Institute',
    description,
    url: `${SITE_URL}/governance`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  },
  {
    '@type': 'ItemList',
    name: 'Board of Governance',
    itemListElement: boardMembers.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Person',
        name: m.name,
        jobTitle: m.jobTitle,
        affiliation: AFFILIATION_NODE,
      },
    })),
  },
];

// Export constants for use elsewhere
export { SITE_URL, ORG_NAME };

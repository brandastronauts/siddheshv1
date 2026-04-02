/**
 * schemaBuilders.js
 * Centralized JSON-LD schema builder helpers for Blue Blocks Micro Research Institute.
 * Each function returns a plain object ready for @graph injection.
 *
 * Follows schema.org vocabulary. All schemas omit @context — the wrapping
 * @graph object in JsonLd.jsx adds it once.
 */

const SITE_URL = 'https://research.blueblocks.in';
const ORG_NAME = 'Blue Blocks Micro Research Institute';
const ORG_ALT_NAME = 'Blue Blocks Research';
const ORG_URL = SITE_URL;
const PARENT_ORG_ID = 'https://www.blueblocks.in/#organization';

// ─── Permanent @id URIs (must match seoSchemaConfig.js) ─────────────────────
const PERMANENT_IDS = {
  INSTITUTE:    `${SITE_URL}/#microresearch`,
  WEBSITE:      `${SITE_URL}/#website`,
  PARENT_ORG:   PARENT_ORG_ID,
};

// ─── ORCID registry for known researchers ────────────────────────────────────
const ORCID_MAP = {
  'Sandhya Rao M': 'https://orcid.org/0009-0003-7368-2604',
  'Sandhya Rao': 'https://orcid.org/0009-0003-7368-2604',
  'Munira Hussain': 'https://orcid.org/0009-0003-5904-6206',
  'Sruthi Matta': 'https://orcid.org/0009-0008-2791-1273',
  'Pavan Goyal': 'https://orcid.org/0009-0009-8840',
  'Sreemoyee Chakraborty': 'https://orcid.org/0000-0001-5180-156X',
  'Poulomi Bose': 'https://orcid.org/0009-0007-6156-2161',
  'Kriti Khare': 'https://orcid.org/0009-0004-3106-8873',
};

// ─── Affiliation node (reused across builders) ───────────────────────────────
const AFFILIATION_NODE = {
  '@type': 'ResearchOrganization',
  '@id': PERMANENT_IDS.INSTITUTE,
  name: ORG_NAME,
  url: ORG_URL,
};

// ─── Global: ResearchOrganization ────────────────────────────────────────────
export const buildOrganizationSchema = () => ({
  '@type': 'ResearchOrganization',
  '@id': PERMANENT_IDS.INSTITUTE,
  name: ORG_NAME,
  alternateName: ORG_ALT_NAME,
  url: ORG_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/blueblocks-logo.svg`,
  },
  description:
    'A longitudinal research institute studying human innovation capacity through Montessori observation protocols from birth to adulthood.',
  email: 'research@blueblocks.in',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'research@blueblocks.in',
    contactType: 'research inquiries',
  },
  parentOrganization: {
    '@type': 'EducationalOrganization',
    '@id': PERMANENT_IDS.PARENT_ORG,
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
  '@id': PERMANENT_IDS.WEBSITE,
  name: ORG_NAME,
  url: ORG_URL,
  publisher: { '@id': PERMANENT_IDS.INSTITUTE },
});

// ─── SiteNavigationElement ───────────────────────────────────────────────────
export const buildSiteNavigationSchema = (navItems = []) => {
  // Flatten nav into top-level items
  const flatItems = [];
  navItems.forEach(item => {
    if (item.path) flatItems.push({ name: item.label, url: `${SITE_URL}${item.path}` });
  });
  const schema = {
    '@type': 'SiteNavigationElement',
    '@id': `${SITE_URL}/#navigation`,
    name: 'Main Navigation',
    hasPart: flatItems.map(i => ({
      '@type': 'WebPage',
      name: i.name,
      url: i.url,
    })),
  };
};

// ─── Global schemas array (for every page) ───────────────────────────────────
export const buildGlobalGraphNodes = (navItems = []) => {
  const nodes = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
  ];
  if (navItems.length > 0) {
    nodes.push(buildSiteNavigationSchema(navItems));
  }
  return nodes;
};

// ─── WebPage ─────────────────────────────────────────────────────────────────
export const buildWebPageSchema = ({ name, description, path = '/', ogImage }) => {
  const schema = {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
    about: { '@id': PERMANENT_IDS.INSTITUTE },
  };
  if (ogImage) {
    schema.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`,
    };
  }
  return schema;
};

// ─── CollectionPage ──────────────────────────────────────────────────────────
export const buildCollectionPageSchema = ({ name, description, path, items = [] }) => ({
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}${path}#collection`,
  url: `${SITE_URL}${path}`,
  name,
  description,
   isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.slice(0, 10).map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name || item.title,
      url: item.url ? (item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`) : undefined,
    })),
  },
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

// ─── FAQPage ─────────────────────────────────────────────────────────────────
export const buildFaqPageSchema = (faqs = []) => {
  if (!faqs || faqs.length < 2) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(faq.answer || faq.a || ''),
      },
    })),
  };
};

/** Strip HTML tags from a string */
function stripHtml(str) {
  return str.replace(/<[^>]*>/g, '').trim();
}

/**
 * Extract FAQ items from page sections (accordion/faq sections).
 */
export const extractFaqsFromSections = (sections = []) => {
  const faqs = [];
  sections.forEach(section => {
    if (section.type === 'accordion' || section.type === 'glossary-accordion') {
      (section.items || []).forEach(item => {
        if (item.question || item.title || item.heading) {
          faqs.push({
            question: item.question || item.title || item.heading,
            answer: item.answer || item.body || item.content || item.text || '',
          });
        }
      });
    }
    // FAQ-style sections with mainEntity
    if (section.faqs) {
      section.faqs.forEach(faq => {
        faqs.push({
          question: faq.question || faq.q,
          answer: faq.answer || faq.a || '',
        });
      });
    }
  });
  return faqs;
};

/**
 * Convenience: builds global + page-level schemas in a single @graph-ready array.
 */
export const buildGlobalSchemas = ({ pageName = '', pagePath = '/', breadcrumbs = [], navItems = [] } = {}) => {
  const nodes = [
    ...buildGlobalGraphNodes(navItems),
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
  const resolvedOrcid = orcid || ORCID_MAP[name] || '';
  const allSameAs = [...sameAs];
  if (resolvedOrcid && !allSameAs.includes(resolvedOrcid)) {
    allSameAs.push(resolvedOrcid);
  }

  return {
    '@type': 'Person',
    name,
    ...(jobTitle && { jobTitle }),
    ...(description && { description }),
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
  doi = '',
  zenodoUrl = '',
}) => {
  const schema = {
    '@type': 'ScholarlyArticle',
    headline: title,
    ...(abstract && { description: abstract }),
    ...(datePublished && { datePublished }),
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
    isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
  };

  if (keywords.length > 0) {
    schema.keywords = keywords.join(', ');
  }

  if (doi) {
    schema.identifier = {
      '@type': 'PropertyValue',
      propertyID: 'DOI',
      value: doi,
    };
  }

  if (zenodoUrl) {
    schema.sameAs = zenodoUrl;
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
 * Article — for insight/news detail pages.
 */
export const buildArticleSchema = ({
  title = '',
  description = '',
  datePublished = '',
  dateModified = '',
  authors = [],
  url = '',
  imageUrl = '',
}) => ({
  '@type': 'Article',
  headline: title,
  ...(description && { description }),
  ...(datePublished && { datePublished }),
  ...(dateModified && { dateModified }),
  url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  author: authors.length > 0
    ? authors.map(name => ({ '@type': 'Person', name, affiliation: AFFILIATION_NODE }))
    : AFFILIATION_NODE,
  publisher: {
    ...AFFILIATION_NODE,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  ...(imageUrl && {
    image: { '@type': 'ImageObject', url: imageUrl.startsWith('http') ? imageUrl : `${SITE_URL}${imageUrl}` },
  }),
});

/**
 * Patent — for /patents/* detail pages.
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
    '@type': 'Patent',
    name,
    ...(description && { description }),
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
 * CreativeWork — for innovation detail or legacy patent pages.
 */
export const buildCreativeWorkSchema = ({
  title = '',
  description = '',
  datePublished = '',
  creators = [],
  url = '',
}) => ({
  '@type': 'CreativeWork',
  name: title,
  ...(description && { description }),
  ...(datePublished && { datePublished }),
  url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  creator: creators.length > 0
    ? creators.map(c => ({ '@type': 'Person', name: c, affiliation: AFFILIATION_NODE }))
    : AFFILIATION_NODE,
  publisher: AFFILIATION_NODE,
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
  ...(description && { description }),
  ...(datePublished && { datePublished }),
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
  ...(description && { description }),
  ...(datePublished && { datePublished }),
  ...(isbn && { isbn }),
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
  ...(description && { description }),
  ...(datePublished && { datePublished }),
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
    isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
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
export { SITE_URL, ORG_NAME, ORCID_MAP };

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from '../SEO';
import seoSchemaConfig, { OG_SITE_NAME, SITE_URL, PERMANENT_IDS } from '../../lib/seoSchemaConfig';
import { brand } from '../../content/siteCore';

// Global schemas injected once per page (WebSite + Organization)
const GLOBAL_GRAPH_NODES = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': PERMANENT_IDS.WEBSITE,
    url: SITE_URL,
    name: 'Blue Blocks Micro Research Institute',
    publisher: { '@id': PERMANENT_IDS.INSTITUTE },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ResearchOrganization',
    '@id': PERMANENT_IDS.INSTITUTE,
    name: 'Blue Blocks Micro Research Institute',
    url: SITE_URL,
    parentOrganization: { '@id': PERMANENT_IDS.PARENT_ORG },
  },
];

const PageShell = ({ children }) => {
  const location = useLocation();
  const seoConfig = seoSchemaConfig[location.pathname];
  const [page, setPage] = useState(null);

  useEffect(() => {
    import('../../content/siteContent').then((mod) => {
      setPage(mod.default.pages[location.pathname] || null);
    });
  }, [location.pathname]);

  // ── Build SEO props from either seoSchemaConfig or page content ──

  const buildSeoProps = () => {
    // --- Source 1: seoSchemaConfig (highest priority) ---
    if (seoConfig) {
      const { meta, openGraph, twitter, jsonLd } = seoConfig;
      return {
        title: meta.title?.replace(` | ${brand.siteName}`, '').replace(` | Blue Blocks Micro Research Institute`, ''),
        description: meta.description,
        canonicalUrl: meta.canonical,
        ogImage: openGraph?.image || twitter?.image,
        ogType: openGraph?.type || 'website',
        jsonLd: jsonLd ? [jsonLd] : GLOBAL_GRAPH_NODES,
      };
    }

    // --- Source 2: page content from siteContent ---
    if (page) {
      const heroFallback = extractHeroFallback(page.sections);
      const pageTitle = page.seo?.title || page.title || heroFallback.title || '';
      const description =
        page.seo?.openGraph?.description ||
        page.seo?.description ||
        page.metaDescription ||
        page.meta?.description ||
        heroFallback.description;
      const og = page.seo?.openGraph || {};

      // Build JSON-LD
      const schemas = page.schemas?.length
        ? page.schemas
        : buildAutoSchemas(pageTitle, description, location.pathname);

      return {
        title: pageTitle.replace(` | ${brand.siteName}`, ''),
        description,
        canonicalUrl: page.seo?.canonical,
        ogImage: og.image?.url || og.image,
        ogType: og.type || 'website',
        jsonLd: [...GLOBAL_GRAPH_NODES, ...schemas],
      };
    }

    // --- Fallback ---
    return {};
  };

  const seoProps = buildSeoProps();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO {...seoProps} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

// ── Helpers ──

function extractHeroFallback(sections) {
  if (!sections || !Array.isArray(sections)) return {};
  const hero = sections.find((s) => s.type === 'hero');
  if (!hero) return {};
  return {
    title: hero.headline || hero.title || '',
    description: hero.subtitle || hero.intro || '',
  };
}

function buildAutoSchemas(title, description, pathname) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: `${SITE_URL}${pathname}`,
      isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
      about: { '@id': PERMANENT_IDS.INSTITUTE },
    },
  ];

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }];
    segments.forEach((seg, i) => {
      const path = '/' + segments.slice(0, i + 1).join('/');
      const name = seg
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      crumbs.push({ '@type': 'ListItem', position: i + 2, name, item: `${SITE_URL}${path}` });
    });
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs,
    });
  }

  return schemas;
}

export default PageShell;

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from '../SEO';
import seoSchemaConfig, { SITE_URL, PERMANENT_IDS } from '../../lib/seoSchemaConfig';
import {
  buildGlobalGraphNodes,
  buildWebPageSchema,
  buildBreadcrumbsFromPath,
  buildBreadcrumbSchema,
} from '../../lib/schemaBuilders';
import { brand } from '../../content/siteCore';

const PageShell = ({ children }) => {
  const location = useLocation();
  const seoConfig = seoSchemaConfig[location.pathname];
  const [page, setPage] = useState(null);

  useEffect(() => {
    import('../../content/siteContent').then((mod) => {
      setPage(mod.default.pages[location.pathname] || null);
    });
  }, [location.pathname]);

  // ── Build SEO props ──

  const buildSeoProps = () => {
    const globalNodes = buildGlobalGraphNodes();

    // --- Source 1: seoSchemaConfig (highest priority) ---
    if (seoConfig) {
      const { meta, openGraph, twitter, jsonLd } = seoConfig;
      // seoSchemaConfig already has complete graphs with full org/website nodes;
      // use those directly to avoid duplicates with the simpler globalNodes
      const pageNodes = jsonLd?.['@graph'] || (jsonLd ? [jsonLd] : []);
      return {
        title: meta.title
          ?.replace(` | ${brand.siteName}`, '')
          .replace(` | Blue Blocks Micro Research Institute`, ''),
        description: meta.description,
        canonicalUrl: meta.canonical,
        ogImage: openGraph?.image || twitter?.image,
        ogType: openGraph?.type || 'website',
        jsonLd: pageNodes,
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

      // Build page-level schemas
      const pageSchemaNodes = page.schemas?.length
        ? page.schemas
        : [
            buildWebPageSchema({ name: pageTitle, description, path: location.pathname }),
            buildBreadcrumbSchema([
              ...buildBreadcrumbsFromPath(location.pathname),
              ...(location.pathname !== '/'
                ? [{ name: pageTitle, path: location.pathname }]
                : []),
            ]),
          ];

      return {
        title: pageTitle.replace(` | ${brand.siteName}`, ''),
        description,
        canonicalUrl: page.seo?.canonical,
        ogImage: og.image?.url || og.image,
        ogType: og.type || 'website',
        jsonLd: [...globalNodes, ...pageSchemaNodes],
      };
    }

    // --- Fallback: just global schemas ---
    return { jsonLd: globalNodes };
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

export default PageShell;

import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from '../SEO';
import seoSchemaConfig from '../../lib/seoSchemaConfig';
import {
  buildGlobalGraphNodes,
  buildWebPageSchema,
  buildBreadcrumbsFromPath,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  extractFaqsFromSections,
} from '../../lib/schemaBuilders';
import { brand, nav } from '../../content/siteCore';

const BASE_URL = 'https://research.blueblocks.in';
const LEGACY_URL_RE = /https:\/\/siddheshv1\.lovable\.app/g;
const SCRIPT_ID = 'bb-jsonld-graph';

function buildJsonLdPayload(nodes) {
  if (!nodes || nodes.length === 0) return null;
  const cleaned = nodes
    .filter(n => n != null && typeof n === 'object')
    .map(node => {
      const { '@context': _ctx, ...rest } = node;
      return rest;
    });
  if (cleaned.length === 0) return null;
  const raw = JSON.stringify(
    { '@context': 'https://schema.org', '@graph': cleaned },
    (key, value) => (value === undefined || value === null || value === '') ? undefined : value
  );
  return raw.replace(LEGACY_URL_RE, BASE_URL);
}

function injectJsonLd(payload) {
  let el = document.getElementById(SCRIPT_ID);
  if (!payload) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = SCRIPT_ID;
    el.setAttribute('type', 'application/ld+json');
    document.head.appendChild(el);
  }
  el.textContent = payload;
}

const PageShell = ({ children }) => {
  const location = useLocation();
  const normalizedPath = location.pathname !== '/' && location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
  const seoConfig = seoSchemaConfig[normalizedPath];
  const [page, setPage] = useState(null);

  useEffect(() => {
    import('../../content/siteContent').then((mod) => {
      setPage(mod.default.pages[normalizedPath] || null);
    });
  }, [normalizedPath]);

  const buildSeoProps = () => {
    const globalNodes = buildGlobalGraphNodes(nav);

    if (seoConfig) {
      const { meta, openGraph, twitter, jsonLd } = seoConfig;
      const pageNodes = jsonLd?.['@graph'] || (jsonLd ? [jsonLd] : []);
      return {
        title: meta.title
          ?.replace(` | ${brand.siteName}`, '')
          .replace(` | Blue Blocks Micro Research Institute`, ''),
        description: meta.description,
        canonicalUrl: meta.canonical,
        ogImage: openGraph?.image || twitter?.image,
        ogType: openGraph?.type || 'website',
        jsonLdNodes: pageNodes,
      };
    }

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

      const pageSchemaNodes = page.schemas?.length
        ? page.schemas
        : [
            buildWebPageSchema({ name: pageTitle, description, path: normalizedPath }),
            buildBreadcrumbSchema([
              ...buildBreadcrumbsFromPath(normalizedPath),
              ...(normalizedPath !== '/'
                ? [{ name: pageTitle, path: normalizedPath }]
                : []),
            ]),
          ];

      const allNodes = [...globalNodes, ...pageSchemaNodes];
      if (page.sections) {
        const faqs = extractFaqsFromSections(page.sections);
        const faqSchema = buildFaqPageSchema(faqs);
        if (faqSchema && !allNodes.some(n => n?.['@type'] === 'FAQPage')) {
          allNodes.push(faqSchema);
        }
      }

      return {
        title: pageTitle.replace(` | ${brand.siteName}`, ''),
        description,
        canonicalUrl: page.seo?.canonical,
        ogImage: og.image?.url || og.image,
        ogType: og.type || 'website',
        keywords: page.seo?.keywords,
        twitter: page.seo?.twitter,
        article: og.article,
        citation: page.seo?.citation,
        jsonLdNodes: allNodes,
      };
    }

    return { jsonLdNodes: globalNodes };
  };

  const seoProps = buildSeoProps();
  const { jsonLdNodes, ...metaProps } = seoProps;

  // Inject JSON-LD into document.head via DOM API
  // React cannot reliably render <script> tags via JSX
  useEffect(() => {
    const payload = buildJsonLdPayload(jsonLdNodes);
    injectJsonLd(payload);
  }, [jsonLdNodes]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const el = document.getElementById(SCRIPT_ID);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO {...metaProps} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

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

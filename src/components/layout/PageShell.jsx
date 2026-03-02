import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import seoSchemaConfig, { OG_SITE_NAME, SITE_URL, PERMANENT_IDS } from '../../lib/seoSchemaConfig';
import { brand } from '../../content/siteCore';

// Global schemas injected once per page (WebSite + Organization)
const GLOBAL_GRAPH_NODES = [
  {
    '@type': 'WebSite',
    '@id': PERMANENT_IDS.WEBSITE,
    url: SITE_URL,
    name: 'Blue Blocks Micro Research Institute',
    publisher: { '@id': PERMANENT_IDS.INSTITUTE },
  },
  {
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

  // Lazy-load siteContent only for SEO (not blocking paint)
  useEffect(() => {
    import('../../content/siteContent').then((mod) => {
      setPage(mod.default.pages[location.pathname] || null);
    });
  }, [location.pathname]);

  useEffect(() => {
    // ── Helpers ───────────────────────────────────────────────────────────
    const setMeta = (selector, content, createAttrs = {}) => {
      let el = document.querySelector(selector);
      if (content) {
        if (!el) {
          el = document.createElement('meta');
          Object.entries(createAttrs).forEach(([k, v]) => el.setAttribute(k, v));
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      } else if (el) {
        el.remove();
      }
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (href) {
        if (!el) {
          el = document.createElement('link');
          el.setAttribute('rel', rel);
          document.head.appendChild(el);
        }
        el.setAttribute('href', href);
      } else if (el) {
        el.remove();
      }
    };

    // ── Helper: extract fallback title/description from hero section ──
    const extractHeroFallback = (sections) => {
      if (!sections || !Array.isArray(sections)) return {};
      const hero = sections.find(s => s.type === 'hero');
      if (!hero) return {};
      return {
        title: hero.headline || hero.title || '',
        description: hero.subtitle || hero.intro || '',
      };
    };

    // ── If seoSchemaConfig has an entry, use it as single source of truth ──
    if (seoConfig) {
      const { meta, openGraph, twitter, jsonLd } = seoConfig;
      if (meta.title) document.title = meta.title;
      setMeta('meta[name="description"]', meta.description, { name: 'description' });
      setMeta('meta[name="keywords"]', meta.keywords, { name: 'keywords' });
      setMeta('meta[name="robots"]', meta.robots || 'index, follow', { name: 'robots' });
      setLink('canonical', meta.canonical);

      if (openGraph) {
        setMeta('meta[property="og:type"]', openGraph.type, { property: 'og:type' });
        setMeta('meta[property="og:title"]', openGraph.title, { property: 'og:title' });
        setMeta('meta[property="og:description"]', openGraph.description, { property: 'og:description' });
        setMeta('meta[property="og:url"]', openGraph.url, { property: 'og:url' });
        setMeta('meta[property="og:site_name"]', openGraph.site_name || OG_SITE_NAME, { property: 'og:site_name' });
        setMeta('meta[property="og:image"]', openGraph.image, { property: 'og:image' });
        setMeta('meta[property="og:locale"]', openGraph.locale || 'en_IN', { property: 'og:locale' });
      }

      if (twitter) {
        setMeta('meta[name="twitter:card"]', twitter.card || 'summary_large_image', { name: 'twitter:card' });
        setMeta('meta[name="twitter:title"]', twitter.title, { name: 'twitter:title' });
        setMeta('meta[name="twitter:description"]', twitter.description, { name: 'twitter:description' });
        setMeta('meta[name="twitter:image"]', twitter.image, { name: 'twitter:image' });
      }

      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
      if (jsonLd) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'page');
        script.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      }
    } else if (page) {
      // ── Derive fallbacks from hero when seo fields are missing ──
      const heroFallback = extractHeroFallback(page.sections);

      const pageTitle = page.seo?.title || page.title || heroFallback.title;
      if (pageTitle) {
        document.title = pageTitle.includes('|') ? pageTitle : `${pageTitle} | ${brand.siteName}`;
      }

      const description = page.seo?.openGraph?.description || page.seo?.description || page.metaDescription || page.meta?.description || heroFallback.description;
      setMeta('meta[name="description"]', description, { name: 'description' });

      // Robots — default to index, follow
      setMeta('meta[name="robots"]', page.seo?.robots || 'index, follow', { name: 'robots' });

      // Canonical — always resolve to production URL
      const canonical = page.seo?.canonical || `${SITE_URL}${location.pathname}`;
      setLink('canonical', canonical);

      // OpenGraph — auto-generate if missing
      const og = page.seo?.openGraph || {};
      setMeta('meta[property="og:type"]', og.type || 'website', { property: 'og:type' });
      setMeta('meta[property="og:url"]', og.url || `${SITE_URL}${location.pathname}`, { property: 'og:url' });
      setMeta('meta[property="og:title"]', og.title || pageTitle, { property: 'og:title' });
      setMeta('meta[property="og:description"]', og.description || description, { property: 'og:description' });
      setMeta('meta[property="og:site_name"]', OG_SITE_NAME, { property: 'og:site_name' });
      if (og.image) {
        setMeta('meta[property="og:image"]', og.image?.url || og.image, { property: 'og:image' });
      }
      setMeta('meta[property="og:locale"]', og.locale || 'en_IN', { property: 'og:locale' });

      // Twitter — auto-generate if missing
      const tw = page.seo?.twitter || {};
      setMeta('meta[name="twitter:card"]', tw.card || 'summary_large_image', { name: 'twitter:card' });
      setMeta('meta[name="twitter:title"]', tw.title || og.title || pageTitle, { name: 'twitter:title' });
      setMeta('meta[name="twitter:description"]', tw.description || og.description || description, { name: 'twitter:description' });
      if (tw.image) {
        setMeta('meta[name="twitter:image"]', tw.image, { name: 'twitter:image' });
      }

      // JSON-LD schemas
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());

      // Inject global WebSite + Organization schemas
      const globalScript = document.createElement('script');
      globalScript.type = 'application/ld+json';
      globalScript.setAttribute('data-schema', 'global');
      globalScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': GLOBAL_GRAPH_NODES,
      });
      document.head.appendChild(globalScript);

      // Auto-generate WebPage + BreadcrumbList if page.schemas is empty
      if (page.schemas?.length) {
        page.schemas.forEach((schema, i) => {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.setAttribute('data-schema', 'page');
          script.setAttribute('data-schema-index', i.toString());
          script.textContent = JSON.stringify(schema);
          document.head.appendChild(script);
        });
      } else {
        // Auto-generate WebPage schema
        const autoSchemas = [
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: pageTitle,
            description,
            url: `${SITE_URL}${location.pathname}`,
            isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
            about: { '@id': PERMANENT_IDS.INSTITUTE },
          },
        ];

        // Auto-generate BreadcrumbList from URL segments
        const segments = location.pathname.split('/').filter(Boolean);
        if (segments.length > 0) {
          const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }];
          segments.forEach((seg, i) => {
            const path = '/' + segments.slice(0, i + 1).join('/');
            const name = seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            crumbs.push({ '@type': 'ListItem', position: i + 2, name, item: `${SITE_URL}${path}` });
          });
          autoSchemas.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs,
          });
        }

        autoSchemas.forEach((schema, i) => {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.setAttribute('data-schema', 'page');
          script.setAttribute('data-schema-index', i.toString());
          script.textContent = JSON.stringify(schema);
          document.head.appendChild(script);
        });
      }
    }

    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    };
  }, [location.pathname, seoConfig, page]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageShell;

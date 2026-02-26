import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import seoSchemaConfig, { OG_SITE_NAME } from '../../lib/seoSchemaConfig';
import siteContent from '../../content/siteContent';

const PageShell = ({ children }) => {
  const location = useLocation();
  const seoConfig = seoSchemaConfig[location.pathname];
  const page = siteContent.pages[location.pathname];

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

    // ── If seoSchemaConfig has an entry, use it as single source of truth ──
    if (seoConfig) {
      const { meta, openGraph, twitter, jsonLd } = seoConfig;

      // Title
      if (meta.title) document.title = meta.title;

      // Meta tags
      setMeta('meta[name="description"]', meta.description, { name: 'description' });
      setMeta('meta[name="keywords"]', meta.keywords, { name: 'keywords' });
      setMeta('meta[name="robots"]', meta.robots, { name: 'robots' });

      // Canonical
      setLink('canonical', meta.canonical);

      // OpenGraph
      if (openGraph) {
        setMeta('meta[property="og:type"]', openGraph.type, { property: 'og:type' });
        setMeta('meta[property="og:title"]', openGraph.title, { property: 'og:title' });
        setMeta('meta[property="og:description"]', openGraph.description, { property: 'og:description' });
        setMeta('meta[property="og:url"]', openGraph.url, { property: 'og:url' });
        setMeta('meta[property="og:site_name"]', openGraph.site_name || OG_SITE_NAME, { property: 'og:site_name' });
        setMeta('meta[property="og:image"]', openGraph.image, { property: 'og:image' });
        setMeta('meta[property="og:locale"]', openGraph.locale, { property: 'og:locale' });
      }

      // Twitter
      if (twitter) {
        setMeta('meta[name="twitter:card"]', twitter.card, { name: 'twitter:card' });
        setMeta('meta[name="twitter:title"]', twitter.title, { name: 'twitter:title' });
        setMeta('meta[name="twitter:description"]', twitter.description, { name: 'twitter:description' });
        setMeta('meta[name="twitter:image"]', twitter.image, { name: 'twitter:image' });
      }

      // JSON-LD — remove old, inject new
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
      if (jsonLd) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'page');
        script.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      }
    } else if (page) {
      // ── Fallback: use siteContent page SEO (for pages not in client doc) ──
      if (page.seo?.title) {
        document.title = page.seo.title;
      } else if (page.title) {
        document.title = `${page.title} | ${siteContent.brand.siteName}`;
      }

      const description = page.seo?.openGraph?.description || page.metaDescription || page.meta?.description;
      setMeta('meta[name="description"]', description, { name: 'description' });

      if (page.seo?.robots && !page.seo.robots.includes('noindex')) {
        setMeta('meta[name="robots"]', page.seo.robots, { name: 'robots' });
      } else {
        const existing = document.querySelector('meta[name="robots"]');
        if (existing) existing.remove();
      }

      if (page.seo?.canonical) setLink('canonical', page.seo.canonical);

      if (page.seo?.openGraph) {
        const og = page.seo.openGraph;
        setMeta('meta[property="og:type"]', og.type, { property: 'og:type' });
        setMeta('meta[property="og:url"]', og.url, { property: 'og:url' });
        setMeta('meta[property="og:title"]', og.title, { property: 'og:title' });
        setMeta('meta[property="og:description"]', og.description, { property: 'og:description' });
        setMeta('meta[property="og:site_name"]', OG_SITE_NAME, { property: 'og:site_name' });
        if (og.image) {
          setMeta('meta[property="og:image"]', og.image.url || og.image, { property: 'og:image' });
        }
      }

      if (page.seo?.twitter) {
        const tw = page.seo.twitter;
        setMeta('meta[name="twitter:card"]', tw.card, { name: 'twitter:card' });
        setMeta('meta[name="twitter:title"]', tw.title, { name: 'twitter:title' });
        setMeta('meta[name="twitter:description"]', tw.description, { name: 'twitter:description' });
        setMeta('meta[name="twitter:image"]', tw.image, { name: 'twitter:image' });
      }

      // Fallback JSON-LD from siteContent schemas
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
      if (page.schemas?.length) {
        page.schemas.forEach((schema, i) => {
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

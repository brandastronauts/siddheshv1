import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import siteContent from '../../content/siteContent';

const PageShell = ({ children }) => {
  const location = useLocation();
  const page = siteContent.pages[location.pathname];

  useEffect(() => {
    if (!page) return;

    // Update document title
    if (page.seo?.title) {
      document.title = page.seo.title;
    } else if (page.title) {
      document.title = `${page.title} | ${siteContent.brand.siteName}`;
    }

    // Helper to set or remove meta tag
    const setMeta = (selector, content, createAttrs = {}) => {
      let element = document.querySelector(selector);
      if (content) {
        if (!element) {
          element = document.createElement('meta');
          Object.entries(createAttrs).forEach(([key, value]) => {
            element.setAttribute(key, value);
          });
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
      } else if (element) {
        element.remove();
      }
    };

    // Helper to set or remove link tag
    const setLink = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (href) {
        if (!element) {
          element = document.createElement('link');
          element.setAttribute('rel', rel);
          document.head.appendChild(element);
        }
        element.setAttribute('href', href);
      } else if (element) {
        element.remove();
      }
    };

    // Set meta description
    const description = page.seo?.openGraph?.description || page.metaDescription || page.meta?.description;
    setMeta('meta[name="description"]', description, { name: 'description' });

    // Set robots
    if (page.seo?.robots) {
      setMeta('meta[name="robots"]', page.seo.robots, { name: 'robots' });
    }

    // Set canonical
    if (page.seo?.canonical) {
      setLink('canonical', page.seo.canonical);
    }

    // OpenGraph tags
    if (page.seo?.openGraph) {
      const og = page.seo.openGraph;
      setMeta('meta[property="og:type"]', og.type, { property: 'og:type' });
      setMeta('meta[property="og:url"]', og.url, { property: 'og:url' });
      setMeta('meta[property="og:title"]', og.title, { property: 'og:title' });
      setMeta('meta[property="og:description"]', og.description, { property: 'og:description' });
      if (og.image) {
        setMeta('meta[property="og:image"]', og.image.url, { property: 'og:image' });
        setMeta('meta[property="og:image:width"]', og.image.width?.toString(), { property: 'og:image:width' });
        setMeta('meta[property="og:image:height"]', og.image.height?.toString(), { property: 'og:image:height' });
        setMeta('meta[property="og:image:alt"]', og.image.alt, { property: 'og:image:alt' });
      }
    }

    // Twitter tags
    if (page.seo?.twitter) {
      const tw = page.seo.twitter;
      setMeta('meta[name="twitter:card"]', tw.card, { name: 'twitter:card' });
      setMeta('meta[name="twitter:title"]', tw.title, { name: 'twitter:title' });
      setMeta('meta[name="twitter:description"]', tw.description, { name: 'twitter:description' });
      setMeta('meta[name="twitter:image"]', tw.image, { name: 'twitter:image' });
    }

    // Remove old schema scripts
    document.querySelectorAll('script[data-schema="page"]').forEach(el => el.remove());

    // Inject JSON-LD schemas
    if (page.schemas && Array.isArray(page.schemas)) {
      page.schemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'page');
        script.setAttribute('data-schema-index', index.toString());
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    // Cleanup on unmount
    return () => {
      document.querySelectorAll('script[data-schema="page"]').forEach(el => el.remove());
    };
  }, [location.pathname, page]);

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

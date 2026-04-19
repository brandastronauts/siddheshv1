import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageShell from '../components/layout/PageShell';
import seoSchemaConfig from '../lib/seoSchemaConfig';
import {
  buildGlobalGraphNodes,
  buildWebPageSchema,
  buildBreadcrumbsFromPath,
  buildBreadcrumbSchema,
  extractFaqsFromSections,
  buildFaqPageSchema,
} from '../lib/schemaBuilders';
import { nav } from '../content/siteCore';

/**
 * Debug page: shows the computed JSON-LD for any route.
 * Navigate to /debug/schema?route=/methodology to inspect that route's schema.
 */
const SchemaDebugPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const targetRoute = params.get('route') || '/';
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    const seoConfig = seoSchemaConfig[targetRoute];
    if (seoConfig?.jsonLd) {
      const nodes = seoConfig.jsonLd['@graph'] || [seoConfig.jsonLd];
      setSchema({ '@context': 'https://schema.org', '@graph': nodes });
      return;
    }

    // Try siteContent
    import('../content/siteContent').then((mod) => {
      const page = mod.default.pages[targetRoute];
      if (page) {
        const globalNodes = buildGlobalGraphNodes(nav);
        const pageSchemas = page.schemas?.length
          ? page.schemas
          : [
              buildWebPageSchema({ name: page.title || '', path: targetRoute }),
              buildBreadcrumbSchema(buildBreadcrumbsFromPath(targetRoute)),
            ];
        const allNodes = [...globalNodes, ...pageSchemas];
        if (page.sections) {
          const faqs = extractFaqsFromSections(page.sections);
          const faqSchema = buildFaqPageSchema(faqs);
          if (faqSchema && !allNodes.some(n => n?.['@type'] === 'FAQPage')) {
            allNodes.push(faqSchema);
          }
        }
        // Strip @context from individual nodes
        const cleaned = allNodes.map(n => {
          if (!n || typeof n !== 'object') return n;
          const { '@context': _, ...rest } = n;
          return rest;
        });
        setSchema({ '@context': 'https://schema.org', '@graph': cleaned });
      } else {
        setSchema({ error: `No page data found for route: ${targetRoute}` });
      }
    });
  }, [targetRoute]);

  const routes = Object.keys(seoSchemaConfig);

  return (
    <PageShell>
      <div className="container-grid py-12">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Schema Debug</h1>
        <p className="text-muted-foreground mb-6">
          Inspect computed JSON-LD for any route. Paste the output into{' '}
          <a
            href="https://validator.schema.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary"
          >
            validator.schema.org
          </a>
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-foreground">
            Route (via ?route= param):
          </label>
          <div className="flex flex-wrap gap-2">
            {routes.map(r => (
              <a
                key={r}
                href={`/debug/schema?route=${encodeURIComponent(r)}`}
                className={`px-3 py-1 rounded text-sm border ${
                  r === targetRoute
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                }`}
              >
                {r}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-muted rounded-lg p-4 overflow-auto max-h-[70vh]">
          <pre className="text-xs text-foreground whitespace-pre-wrap font-mono">
            {schema ? JSON.stringify(schema, null, 2) : 'Loading...'}
          </pre>
        </div>
      </div>
    </PageShell>
  );
};

export default SchemaDebugPage;

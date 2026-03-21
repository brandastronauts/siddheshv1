import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

/**
 * Escape a string for safe embedding in an HTML attribute.
 */
function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Build-time plugin: generates per-route HTML files with static JSON-LD
 * so that "View Source" on each route shows the correct schema.
 *
 * Reads the seoSchemaConfig and, for every route except "/", creates
 * a copy of dist/index.html with route-specific meta tags + JSON-LD injected.
 */
function prerenderSchemasPlugin() {
  return {
    name: 'prerender-schemas',
    enforce: 'post' as const,
    apply: 'build' as const,
    async closeBundle() {
      const fs = await import('fs/promises');
      const pathMod = await import('path');
      const { pathToFileURL } = await import('url');

      const distDir = pathMod.resolve('dist');
      const SITE_URL = 'https://research.blueblocks.in';

      // Only proceed if dist/index.html exists (build output)
      try {
        await fs.access(pathMod.join(distDir, 'index.html'));
      } catch {
        return;
      }

      const baseHtml = await fs.readFile(pathMod.join(distDir, 'index.html'), 'utf-8');

      // Dynamically import the schema config (ESM)
      const configPath = pathMod.resolve('src', 'lib', 'seoSchemaConfig.js');
      let config: Record<string, any> = {};
      try {
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
      } catch (err) {
        console.warn('⚠ prerender-schemas: Could not import seoSchemaConfig, skipping schema routes.', err);
      }

      // Dynamically import siteContent to get ALL routes
      const contentPath = pathMod.resolve('src', 'content', 'siteContent.js');
      let siteContent: any = null;
      try {
        const contentMod = await import(pathToFileURL(contentPath).href);
        siteContent = contentMod.default;
      } catch (err) {
        console.warn('⚠ prerender-schemas: Could not import siteContent, skipping content routes.', err);
      }

      // Load static HTML renderer for content injection into View Source
      const rendererPath = pathMod.resolve('src', 'lib', 'staticHtmlRenderer.js');
      let renderPageToStaticHtml = (_page: any): string => '';
      try {
        const rendererMod = await import(pathToFileURL(rendererPath).href);
        renderPageToStaticHtml = rendererMod.renderPageToStaticHtml;
      } catch (err) {
        console.warn('⚠ prerender-schemas: Could not import staticHtmlRenderer, skipping content injection.', err);
      }

      // Map app routes to canonical output paths where they differ
      const OUTPUT_PATH_MAP: Record<string, string> = {
        '/the-institute': '/institute',
        '/methodology/innovation': '/innovation',
      };

      const processedRoutes = new Set<string>();
      let count = 0;

      // Helper to write HTML for a route
      async function writeRoute(route: string, html: string, pageData?: any) {
        // Inject static page content into <div id="root"> for SEO crawlability
        if (pageData?.sections) {
          const staticContent = renderPageToStaticHtml(pageData);
          if (staticContent) {
            html = html.replace(
              '<div id="root"></div>',
              `<div id="root">${staticContent}</div>`
            );
          }
        }

        const outputRoute = OUTPUT_PATH_MAP[route] || route;
        const cleanRoute = outputRoute.replace(/^\//, '');
        if (cleanRoute) {
          const dir = pathMod.join(distDir, cleanRoute);
          await fs.mkdir(dir, { recursive: true });
          await fs.writeFile(pathMod.join(dir, 'index.html'), html, 'utf-8');
          count++;
        }

        // Also write to app route path if different from canonical
        if (OUTPUT_PATH_MAP[route]) {
          const appCleanRoute = route.replace(/^\//, '');
          const appDir = pathMod.join(distDir, appCleanRoute);
          await fs.mkdir(appDir, { recursive: true });
          await fs.writeFile(pathMod.join(appDir, 'index.html'), html, 'utf-8');
          count++;
        }
      }

      // ── Phase 1: Process routes with full seoSchemaConfig (rich meta + JSON-LD) ──
      for (const [route, pageConfig] of Object.entries(config)) {
        if (route === '/') continue;
        processedRoutes.add(route);

        const { meta, openGraph, twitter, jsonLd } = pageConfig as any;
        let html = baseHtml;

        // Replace <title>
        if (meta?.title) {
          html = html.replace(/<title>.*?<\/title>/, `<title>${escHtml(meta.title)}</title>`);
        }

        // Replace meta description
        if (meta?.description) {
          html = html.replace(
            /<meta name="description" content="[^"]*" \/>/,
            `<meta name="description" content="${escHtml(meta.description)}" />`
          );
        }

        // Replace meta keywords
        if (meta?.keywords) {
          if (html.includes('name="keywords"')) {
            html = html.replace(
              /<meta name="keywords" content="[^"]*" \/>/,
              `<meta name="keywords" content="${escHtml(meta.keywords)}" />`
            );
          } else {
            html = html.replace(
              '</head>',
              `    <meta name="keywords" content="${escHtml(meta.keywords)}" />\n  </head>`
            );
          }
        }

        // Replace canonical — ALWAYS self-referencing
        const canonical = meta?.canonical || `${SITE_URL}${route}`;
        html = html.replace(
          /<link rel="canonical" href="[^"]*" \/>/,
          `<link rel="canonical" href="${canonical}" />`
        );

        // Replace OG url to match canonical
        html = html.replace(
          /(<meta property="og:url" content=")[^"]*(")/,
          `$1${canonical}$2`
        );

        // Replace OpenGraph tags
        if (openGraph) {
          const ogMap: Record<string, string | undefined> = {
            'og:type': openGraph.type,
            'og:title': openGraph.title,
            'og:description': openGraph.description,
            'og:image': openGraph.image,
          };
          for (const [prop, val] of Object.entries(ogMap)) {
            if (val) {
              const re = new RegExp(`(<meta property="${prop}" content=")[^"]*(")`);
              html = html.replace(re, `$1${escHtml(val)}$2`);
            }
          }
        }

        // Replace Twitter tags
        if (twitter) {
          const twMap: Record<string, string | undefined> = {
            'twitter:title': twitter.title,
            'twitter:description': twitter.description,
            'twitter:image': twitter.image,
          };
          for (const [prop, val] of Object.entries(twMap)) {
            if (val) {
              const re = new RegExp(`(<meta name="${prop}" content=")[^"]*(")`);
              html = html.replace(re, `$1${escHtml(val)}$2`);
            }
          }
        }

        // Replace JSON-LD block
        if (jsonLd) {
          html = html.replace(
            /\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
            ''
          );
          const jsonStr = JSON.stringify(
            jsonLd,
            (_k, v) => (v === undefined || v === null || v === '') ? undefined : v
          );
          html = html.replace(
            '</head>',
            `\n    <script type="application/ld+json">${jsonStr}</script>\n  </head>`
          );
        }

        await writeRoute(route, html, siteContent?.pages?.[route]);
      }

      // ── Phase 2: Process ALL remaining siteContent routes (canonical + basic meta) ──
      if (siteContent?.pages) {
        const LEGACY_RE = /https:\/\/siddheshv1\.lovable\.app/g;

        for (const [route, pageData] of Object.entries(siteContent.pages) as [string, any][]) {
          if (route === '/' || processedRoutes.has(route)) continue;

          let html = baseHtml;

          // Build self-referencing canonical
          const canonical = `${SITE_URL}${route}`;

          // Replace canonical
          html = html.replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${canonical}" />`
          );

          // Replace OG url
          html = html.replace(
            /(<meta property="og:url" content=")[^"]*(")/,
            `$1${canonical}$2`
          );

          // Replace title
          const pageTitle = (pageData.seo?.title || pageData.title || '')
            .replace(LEGACY_RE, SITE_URL);
          if (pageTitle) {
            html = html.replace(/<title>.*?<\/title>/, `<title>${escHtml(pageTitle)}</title>`);
          }

          // Replace meta description
          const desc = (pageData.seo?.description || pageData.metaDescription || '')
            .replace(LEGACY_RE, SITE_URL);
          if (desc) {
            html = html.replace(
              /<meta name="description" content="[^"]*" \/>/,
              `<meta name="description" content="${escHtml(desc)}" />`
            );
          }

          // Replace OG title and description
          const ogTitle = pageData.seo?.openGraph?.title || pageTitle;
          const ogDesc = pageData.seo?.openGraph?.description || desc;
          if (ogTitle) {
            html = html.replace(
              /(<meta property="og:title" content=")[^"]*(")/,
              `$1${escHtml(ogTitle)}$2`
            );
          }
          if (ogDesc) {
            html = html.replace(
              /(<meta property="og:description" content=")[^"]*(")/,
              `$1${escHtml(ogDesc)}$2`
            );
          }

          // Replace twitter tags
          if (ogTitle) {
            html = html.replace(
              /(<meta name="twitter:title" content=")[^"]*(")/,
              `$1${escHtml(ogTitle)}$2`
            );
          }
          if (ogDesc) {
            html = html.replace(
              /(<meta name="twitter:description" content=")[^"]*(")/,
              `$1${escHtml(ogDesc)}$2`
            );
          }

          // Replace OG image if available
          const ogImage = pageData.seo?.openGraph?.image?.url || pageData.seo?.openGraph?.image;
          if (ogImage && typeof ogImage === 'string') {
            const cleanImage = ogImage.replace(LEGACY_RE, SITE_URL);
            html = html.replace(
              /(<meta property="og:image" content=")[^"]*(")/,
              `$1${escHtml(cleanImage)}$2`
            );
          }

          // Replace keywords
          const keywords = pageData.seo?.keywords;
          if (keywords) {
            if (html.includes('name="keywords"')) {
              html = html.replace(
                /<meta name="keywords" content="[^"]*" \/>/,
                `<meta name="keywords" content="${escHtml(keywords)}" />`
              );
            } else {
              html = html.replace(
                '</head>',
                `    <meta name="keywords" content="${escHtml(keywords)}" />\n  </head>`
              );
            }
          }

          await writeRoute(route, html, pageData);
        }
      }

      if (count > 0) {
        console.log(`\n  ✓ prerender-schemas: Generated ${count} static HTML files with correct canonicals\n`);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      png: { quality: 70 },
      jpeg: { quality: 65 },
      jpg: { quality: 65 },
      webp: { quality: 30, effort: 6 },
    }),
    prerenderSchemasPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-ui': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-navigation-menu', '@radix-ui/react-popover', '@radix-ui/react-tabs', '@radix-ui/react-tooltip'],
          'content': ['./src/content/siteContent.js'],
        },
      },
    },
  },
}));

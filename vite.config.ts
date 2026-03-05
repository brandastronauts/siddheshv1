import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
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

      // Only proceed if dist/index.html exists (build output)
      try {
        await fs.access(pathMod.join(distDir, 'index.html'));
      } catch {
        return;
      }

      const baseHtml = await fs.readFile(pathMod.join(distDir, 'index.html'), 'utf-8');

      // Dynamically import the schema config (ESM, "type":"module" in package.json)
      const configPath = pathMod.resolve('src', 'lib', 'seoSchemaConfig.js');
      let config: Record<string, any>;
      try {
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
      } catch (err) {
        console.warn('⚠ prerender-schemas: Could not import seoSchemaConfig, skipping.', err);
        return;
      }

      let count = 0;
      for (const [route, pageConfig] of Object.entries(config)) {
        if (route === '/') continue; // Home page is already in index.html

        const { meta, openGraph, twitter, jsonLd } = pageConfig as any;
        let html = baseHtml;

        // ── Replace <title> ──
        if (meta?.title) {
          html = html.replace(/<title>.*?<\/title>/, `<title>${escHtml(meta.title)}</title>`);
        }

        // ── Replace meta description ──
        if (meta?.description) {
          html = html.replace(
            /<meta name="description" content="[^"]*" \/>/,
            `<meta name="description" content="${escHtml(meta.description)}" />`
          );
        }

        // ── Replace meta keywords ──
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

        // ── Replace canonical ──
        if (meta?.canonical) {
          html = html.replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${meta.canonical}" />`
          );
        }

        // ── Replace OpenGraph tags ──
        if (openGraph) {
          const ogMap: Record<string, string | undefined> = {
            'og:type': openGraph.type,
            'og:title': openGraph.title,
            'og:description': openGraph.description,
            'og:url': openGraph.url,
            'og:image': openGraph.image,
          };
          for (const [prop, val] of Object.entries(ogMap)) {
            if (val) {
              const re = new RegExp(`(<meta property="${prop}" content=")[^"]*(")`);
              html = html.replace(re, `$1${escHtml(val)}$2`);
            }
          }
        }

        // ── Replace Twitter tags ──
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

        // ── Replace JSON-LD block ──
        if (jsonLd) {
          // Remove existing JSON-LD blocks from base HTML
          html = html.replace(
            /\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
            ''
          );
          // Inject route-specific JSON-LD
          const jsonStr = JSON.stringify(
            jsonLd,
            (_k, v) => (v === undefined || v === null || v === '') ? undefined : v
          );
          html = html.replace(
            '</head>',
            `\n    <script type="application/ld+json">${jsonStr}</script>\n  </head>`
          );
        }

        // Write to dist/<route>/index.html
        const cleanRoute = route.replace(/^\//, '');
        const dir = pathMod.join(distDir, cleanRoute);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(pathMod.join(dir, 'index.html'), html, 'utf-8');
        count++;
      }

      if (count > 0) {
        console.log(`\n  ✓ prerender-schemas: Generated ${count} static HTML files with JSON-LD\n`);
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

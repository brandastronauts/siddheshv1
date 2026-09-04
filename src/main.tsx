import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Dev-only: validate all internal links in siteContent
if (import.meta.env.DEV) {
  Promise.all([
    import('./content/siteContent'),
    import('./lib/validateContentLinks'),
  ]).then(([contentMod, validatorMod]) => {
    const appRoutes = [
      '/', '/the-institute', '/methodology', '/publications', '/governance',
      '/methodology/innovation', '/methodology/limitations', '/methodology/tools',
      '/governance/ethics', '/governance/standards', '/governance/compliance',
      '/governance/our-standards', '/governance/team/:slug',
      '/collaborate', '/newsroom', '/contact', '/privacy', '/terms',
      '/technical-briefs/:slug', '/presentations/:slug', '/proceedings/:slug',
      '/downloads', '/downloads/:slug', '/staff-access',
      '/newsroom/dispatch/:slug', '/newsroom/coverage/:slug', '/newsroom/updates/:slug',
      '/sitemap', '/sitemap-html',
      '/publications/citation-standards', '/publications/glossary',
      '/publications/data', '/publications/:slug',
      '/patents', '/patents/:slug', '/books', '/books/:slug',
      '/team', '/team/:slug', '/faq', '/collaborate/ammonoid-paleobiology-programme',
    ];
    validatorMod.validateContentLinks(contentMod.default, appRoutes);
  });
}

const root = document.getElementById("root")!;

createRoot(root).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Reveal after React has mounted (prevents static-HTML flash)
requestAnimationFrame(() => {
  root.style.visibility = "visible";
});

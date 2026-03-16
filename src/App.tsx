import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import HomePage from "./pages/HomePage";
import ScrollToTopOnRouteChange from "./components/ui/ScrollToTopOnRouteChange";

/** Strip trailing slashes (except root "/") so /foo/ → /foo */
const TrailingSlashRedirect = () => {
  const { pathname, search, hash } = useLocation();
  if (pathname !== '/' && pathname.endsWith('/')) {
    return <Navigate to={pathname.slice(0, -1) + search + hash} replace />;
  }
  return null;
};

// Lazy-loaded routes (all except homepage)
const TheInstitutePage = lazy(() => import("./pages/TheInstitutePage"));
const MethodologyPage = lazy(() => import("./pages/MethodologyPage"));
const PublicationsPage = lazy(() => import("./pages/PublicationsPage"));
const GovernancePage = lazy(() => import("./pages/GovernancePage"));
const InnovationPage = lazy(() => import("./pages/InnovationPage"));
const EthicsPage = lazy(() => import("./pages/EthicsPage"));
const ResearchStandardsPage = lazy(() => import("./pages/ResearchStandardsPage"));
const CompliancePage = lazy(() => import("./pages/CompliancePage"));
const OurStandardsPage = lazy(() => import("./pages/OurStandardsPage"));
const CollaboratePage = lazy(() => import("./pages/CollaboratePage"));
const NewsroomPage = lazy(() => import("./pages/NewsroomPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const GenericPage = lazy(() => import("./pages/GenericPage"));
const CitationStandardsPage = lazy(() => import("./pages/CitationStandardsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const SchemaDebugPage = lazy(() => import("./pages/SchemaDebugPage"));
const SchoolHomePreview = lazy(() => import("./pages/SchoolHomePreview"));

const queryClient = new QueryClient();

const LazyFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary-navy border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LazyMotion features={domAnimation}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnRouteChange />
          <Suspense fallback={<LazyFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/the-institute" element={<TheInstitutePage />} />
              <Route path="/methodology" element={<MethodologyPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/governance" element={<GovernancePage />} />
              <Route path="/methodology/innovation" element={<InnovationPage />} />
              <Route path="/governance/ethics" element={<EthicsPage />} />
              <Route path="/governance/standards" element={<ResearchStandardsPage />} />
              <Route path="/governance/compliance" element={<CompliancePage />} />
              <Route path="/governance/our-standards" element={<OurStandardsPage />} />
              <Route path="/collaborate" element={<CollaboratePage />} />
              <Route path="/newsroom" element={<NewsroomPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<LegalPage />} />
              <Route path="/terms" element={<LegalPage />} />
              
              <Route path="/technical-briefs/:slug" element={<GenericPage />} />
              <Route path="/presentations/:slug" element={<GenericPage />} />
              <Route path="/proceedings/:slug" element={<GenericPage />} />
              <Route path="/downloads" element={<GenericPage />} />
              <Route path="/downloads/:slug" element={<GenericPage />} />
              <Route path="/staff-access" element={<GenericPage />} />
              <Route path="/newsroom/dispatch/:slug" element={<GenericPage />} />
              <Route path="/newsroom/coverage/:slug" element={<GenericPage />} />
              <Route path="/newsroom/updates/:slug" element={<GenericPage />} />
              <Route path="/sitemap" element={<GenericPage />} />
              <Route path="/sitemap-html" element={<GenericPage />} />
              
              <Route path="/publications/citation-standards" element={<CitationStandardsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/publications/glossary" element={<GenericPage />} />
              <Route path="/methodology/limitations" element={<GenericPage />} />
              <Route path="/methodology/tools" element={<GenericPage />} />
              <Route path="/publications/data" element={<GenericPage />} />
              <Route path="/publications/:slug" element={<GenericPage />} />
              
              <Route path="/patents" element={<GenericPage />} />
              <Route path="/patents/:slug" element={<GenericPage />} />
              
              <Route path="/books" element={<GenericPage />} />
              <Route path="/books/:slug" element={<GenericPage />} />
              
              <Route path="/team" element={<GenericPage />} />
              <Route path="/team/:slug" element={<GenericPage />} />
              <Route path="/governance/team/:slug" element={<GenericPage />} />
              <Route path="/debug/schema" element={<SchemaDebugPage />} />
              <Route path="/__preview/school-home" element={<SchoolHomePreview />} />
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LazyMotion>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

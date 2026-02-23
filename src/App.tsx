import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TheInstitutePage from "./pages/TheInstitutePage";
import MethodologyPage from "./pages/MethodologyPage";
import PublicationsPage from "./pages/PublicationsPage";
import GovernancePage from "./pages/GovernancePage";
import CollaboratePage from "./pages/CollaboratePage";
import NewsroomPage from "./pages/NewsroomPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import LegalPage from "./pages/LegalPage";
import GenericPage from "./pages/GenericPage";
import ScrollToTopOnRouteChange from "./components/ui/ScrollToTopOnRouteChange";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/the-institute" element={<TheInstitutePage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/collaborate" element={<CollaboratePage />} />
          <Route path="/newsroom" element={<NewsroomPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage />} />
          
          {/* New pages */}
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
          
          {/* Publications detail pages */}
          <Route path="/publications/:slug" element={<GenericPage />} />
          
          {/* Patents pages */}
          <Route path="/patents" element={<GenericPage />} />
          <Route path="/patents/:slug" element={<GenericPage />} />
          
          {/* Books pages */}
          <Route path="/books" element={<GenericPage />} />
          <Route path="/books/:slug" element={<GenericPage />} />
          
          {/* Team pages */}
          <Route path="/team" element={<GenericPage />} />
          <Route path="/team/:slug" element={<GenericPage />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

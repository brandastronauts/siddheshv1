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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/the-institute" element={<TheInstitutePage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/publications-open-science" element={<PublicationsPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/collaborate" element={<CollaboratePage />} />
          <Route path="/newsroom" element={<NewsroomPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

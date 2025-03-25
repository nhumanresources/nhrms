
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ExecutiveSearch from "./pages/services/ExecutiveSearch";
import HRAdvisory from "./pages/services/HRAdvisory";
import KnowledgeManagement from "./pages/services/KnowledgeManagement";
import GoToMarket from "./pages/services/GoToMarket";
import BOTHRTeams from "./pages/services/BOTHRTeams";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          
          {/* Service routes */}
          <Route path="/services/executive-search" element={<ExecutiveSearch />} />
          <Route path="/services/hr-advisory" element={<HRAdvisory />} />
          <Route path="/services/knowledge-management" element={<KnowledgeManagement />} />
          <Route path="/services/go-to-market" element={<GoToMarket />} />
          <Route path="/services/bot-hr-teams" element={<BOTHRTeams />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
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
import HRTech from "./pages/services/HRTech";
import LearningServices from "./pages/LearningServices";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import LeadershipDevelopment from "./pages/research/LeadershipDevelopment";
import FinancialHRAnalytics from "./pages/case-studies/FinancialHRAnalytics";

const App = () => {
  // Create a new QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
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
          <Route path="/services/hr-tech" element={<HRTech />} />
          <Route path="/learning-solutions" element={<LearningServices />} />
          
          {/* Legal pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          
          {/* Research detail pages */}
          <Route path="/research/leadership-development-impact" element={<LeadershipDevelopment />} />
          
          {/* Case study detail pages */}
          <Route path="/case-studies/financial-hr-analytics" element={<FinancialHRAnalytics />} />
          
          {/* Special routes for the deployed preview site */}
          <Route path="/hr360-solution-hub" element={<Navigate to="/" replace />} />
          <Route path="/hr360-solution-hub/*" element={<Index />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

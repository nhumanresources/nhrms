
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { applySecurityMeasures } from "./utils/securityUtils";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Research from "./pages/Research";
import ResearchOpportunities from "./pages/ResearchOpportunities";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Culture from "./pages/Culture";
import DefaultServicePage from "./pages/services/DefaultServicePage";
import ExecutiveSearch from "./pages/services/ExecutiveSearch";
import HRAdvisory from "./pages/services/HRAdvisory";
import GoToMarket from "./pages/services/GoToMarket";
import BOTHRTeams from "./pages/services/BOTHRTeams";
import HRTech from "./pages/services/HRTech";
import TalentAcquisition from "./pages/services/TalentAcquisition";
import LearningServices from "./pages/LearningServices";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import LeadershipDevelopment from "./pages/research/LeadershipDevelopment";
import HRTechLandscape from "./pages/research/HRTechLandscape";
import FinancialHRAnalytics from "./pages/case-studies/FinancialHRAnalytics";
import HRTechPlatformLaunch from "./pages/case-studies/HRTechPlatformLaunch";
import Internships from "./pages/careers/Internships";
import BangaloreInternship from "./pages/careers/internships/BangaloreInternship";
import EmployeeExperienceROI from "./pages/research/EmployeeExperienceROI";
import FutureWorkAICollaboration from "./pages/research/FutureWorkAICollaboration";
import TalentAcquisitionBenchmark from "./pages/research/TalentAcquisitionBenchmark";
import EmployeeEngagementDigital from "./pages/research/EmployeeEngagementDigital";
import GenerativeAIHR from "./pages/research/GenerativeAIHR";
import PsychologicalSafety from "./pages/research/PsychologicalSafety";
import WorkforcePlanning from "./pages/research/WorkforcePlanning";
import InternshipPrograms from "./pages/services/InternshipPrograms";
import TotalRewards from "./pages/services/TotalRewards";
import OrganizationStrategy from "./pages/services/OrganizationStrategy";
import CareerDevelopment from "./pages/services/CareerDevelopment";
import Certifications from "./pages/services/Certifications";
import LeadershipDevelopmentService from "./pages/services/LeadershipDevelopmentService";
import Mail from "./pages/Mail";
import Sitemap from "./components/Sitemap";
import NHRMSAcquiresCareeredge from "./pages/press-releases/NHRMSAcquiresCareeredge";
import HRTechSolutions from "./pages/services/HRTechSolutions";
import Partners from "./pages/Partners";
import PressReleases from "./pages/PressReleases";
import TimelessContribution from "./pages/press-releases/TimelessContribution";
import HRRoadmap from "./pages/HRRoadmap";
import LMSLogin from "./pages/LMSLogin";
import LabourCodes from "./pages/LabourCodes";
import EmployerAdvisory from "./pages/EmployerAdvisory";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  
  useEffect(() => {
    applySecurityMeasures();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Sitemap />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogArticle />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research-associate-job" element={<ResearchOpportunities />} />
          <Route path="/research-opportunities" element={<ResearchOpportunities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mail" element={<Mail />} />
          
          {/* LMS Login Route */}
          <Route path="/lms-login" element={<LMSLogin />} />
          
          {/* HR Roadmap Route */}
          <Route path="/hr-roadmap" element={<HRRoadmap />} />
          
          {/* Press Releases Routes */}
          <Route path="/press-releases" element={<PressReleases />} />
          <Route path="/press-releases/nhrms-acquires-careeredge" element={<NHRMSAcquiresCareeredge />} />
          <Route path="/press-releases/timeless-contribution" element={<TimelessContribution />} />
          
          <Route path="/mail.nhrms.com" element={<Navigate to="/mail" replace />} />
          
          <Route path="/careers" element={<Navigate to="https://jobs.nhrms.com/jobs/Careers" replace />} />
          
          <Route path="/services/executive-search" element={<ExecutiveSearch />} />
          <Route path="/services/hr-advisory" element={<HRAdvisory />} />
          <Route path="/services/go-to-market" element={<GoToMarket />} />
          <Route path="/services/bot-hr-teams" element={<BOTHRTeams />} />
          <Route path="/services/hr-tech" element={<HRTech />} />
          <Route path="/services/talent-acquisition" element={<TalentAcquisition />} />
          <Route path="/services/hr-tech-solutions" element={<HRTechSolutions />} />
          <Route path="/learning-solutions" element={<LearningServices />} />
          <Route path="/labour-codes" element={<LabourCodes />} />
          <Route path="/employer-advisory-labour-codes" element={<EmployerAdvisory />} />
          
          <Route path="/services/internship-programs" element={<InternshipPrograms />} />
          <Route path="/services/total-rewards" element={<TotalRewards />} />
          <Route path="/services/organization-strategy" element={<OrganizationStrategy />} />
          <Route path="/services/career-development" element={<CareerDevelopment />} />
          <Route path="/services/certifications" element={<Certifications />} />
          <Route path="/services/leadership-&-professional-development" element={<LeadershipDevelopmentService />} />
          
          <Route path="/services/:serviceName" element={<DefaultServicePage />} />
          
          <Route path="/careers/internships" element={<Internships />} />
          <Route path="/careers/internships/bangalore" element={<BangaloreInternship />} />
          
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          
          <Route path="/research/leadership-development-impact" element={<LeadershipDevelopment />} />
          <Route path="/research/hr-tech-landscape-2025" element={<HRTechLandscape />} />
          <Route path="/research/employee-experience-roi" element={<EmployeeExperienceROI />} />
          <Route path="/research/future-work-ai-collaboration" element={<FutureWorkAICollaboration />} />
          <Route path="/research/talent-acquisition-benchmark-2024" element={<TalentAcquisitionBenchmark />} />
          <Route path="/research/employee-engagement-digital-2024" element={<EmployeeEngagementDigital />} />
          <Route path="/research/generative-ai-hr" element={<GenerativeAIHR />} />
          <Route path="/research/psychological-safety-virtual" element={<PsychologicalSafety />} />
          <Route path="/research/workforce-planning-automation" element={<WorkforcePlanning />} />
          
          <Route path="/case-studies/financial-hr-analytics" element={<FinancialHRAnalytics />} />
          <Route path="/case-studies/hr-tech-platform-launch" element={<HRTechPlatformLaunch />} />
          
          <Route path="/hr360-solution-hub" element={<Navigate to="/" replace />} />
          <Route path="/hr360-solution-hub/*" element={<Index />} />
          
          <Route path="/partners" element={<Partners />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

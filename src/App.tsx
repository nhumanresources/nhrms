import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { applySecurityMeasures } from "./utils/securityUtils";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
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
import PerformanceManagement from "./pages/services/PerformanceManagement";
import WorkStudyManpower from "./pages/services/WorkStudyManpower";
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
import LabourCodesReadiness from "./pages/LabourCodesReadiness";
import EmployerAdvisory from "./pages/EmployerAdvisory";
import ComplianceServices from "./pages/services/ComplianceServices";
import ComplianceCalendar from "./pages/ComplianceCalendarNew";
import RSS from "./pages/RSS";
import WCRM from "./pages/WCRM";
import HRTechnologyCategory from "./pages/services/categories/HRTechnologyCategory";
import StrategicAdvisoryCategory from "./pages/services/categories/StrategicAdvisoryCategory";
import TalentSolutionsCategory from "./pages/services/categories/TalentSolutionsCategory";
import ComplianceOperationsCategory from "./pages/services/categories/ComplianceOperationsCategory";
import LearningEnablementCategory from "./pages/services/categories/LearningEnablementCategory";
import AcademyHome from "./pages/academy/AcademyHome";
import CourseCatalog from "./pages/academy/CourseCatalog";
import CoursePage from "./pages/academy/CoursePage";
import LearningPaths from "./pages/academy/LearningPaths";
import Resources from "./pages/academy/Resources";
import AcademyApplySummer2026 from "./pages/AcademyApplySummer2026";
import FreeHRComplianceAudit from "./pages/FreeHRComplianceAudit";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  
  useEffect(() => {
    applySecurityMeasures();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Sitemap />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Navigate to="/auth" replace />} />
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
            
            {/* WCRM Internal Tool */}
            <Route path="/wcrm" element={<WCRM />} />
            
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
            <Route path="/labour-codes/readiness" element={<LabourCodesReadiness />} />
            <Route path="/compliance-calendar" element={<ComplianceCalendar />} />
            <Route path="/employer-advisory-labour-codes" element={<EmployerAdvisory />} />
            <Route path="/services/compliance" element={<ComplianceServices />} />
            
            {/* Service Category Landing Pages */}
            <Route path="/services/hr-technology" element={<HRTechnologyCategory />} />
            <Route path="/services/strategic-advisory" element={<StrategicAdvisoryCategory />} />
            <Route path="/services/talent-solutions" element={<TalentSolutionsCategory />} />
            <Route path="/services/compliance-operations" element={<ComplianceOperationsCategory />} />
            <Route path="/services/learning-enablement" element={<LearningEnablementCategory />} />
            
            <Route path="/services/internship-programs" element={<InternshipPrograms />} />
            <Route path="/services/total-rewards" element={<TotalRewards />} />
            <Route path="/services/organization-strategy" element={<OrganizationStrategy />} />
            <Route path="/services/career-development" element={<CareerDevelopment />} />
            <Route path="/services/certifications" element={<Certifications />} />
            <Route path="/services/leadership-&-professional-development" element={<LeadershipDevelopmentService />} />
            <Route path="/services/performance-management" element={<PerformanceManagement />} />
            <Route path="/services/work-study-manpower" element={<WorkStudyManpower />} />
            
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
            
            {/* RSS Feed */}
            <Route path="/rss" element={<RSS />} />
            
            {/* nHRMS Academy Routes */}
            <Route path="/academy" element={<AcademyHome />} />
            <Route path="/academy/courses" element={<CourseCatalog />} />
            <Route path="/academy/courses/:courseId" element={<CoursePage />} />
            <Route path="/academy/learning-paths" element={<LearningPaths />} />
            <Route path="/academy/resources" element={<Resources />} />
            <Route path="/academy/apply-summer-2026" element={<AcademyApplySummer2026 />} />
            <Route path="/free-hr-compliance-audit" element={<FreeHRComplianceAudit />} />
            <Route path="/free-hr-compliance-audit-india" element={<Navigate to="/free-hr-compliance-audit" replace />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;

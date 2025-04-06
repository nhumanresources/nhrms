
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { researchPapers } from '@/data/researchPapers';
import { useToast } from '@/components/ui/use-toast';
import ResearchHeader from '@/components/research/ResearchHeader';
import ResearchPapersSection from '@/components/research/ResearchPapersSection';
import ResearchReportsSection from '@/components/research/ResearchReportsSection';
import WhitepapersSection from '@/components/research/WhitepapersSection';
import { ResearchReport, Whitepaper } from '@/components/research/types';

export default function Research() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Research & Insights | n Human Resources and Management Systems - nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore nHRMS research areas, reports and whitepapers on HR trends, technology, leadership development, and strategic human capital management.');
    }
    
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  const researchReports: ResearchReport[] = [
    {
      title: "2025 HR Technology Landscape Report",
      date: "February 2025",
      description: "A comprehensive analysis of the current HR technology market, emerging trends, and recommendations for technology adoption.",
      link: "/research/hr-tech-landscape-2025",
      externalUrl: "https://www.shrm.org/ResourcesAndTools/hr-topics/technology/Pages/default.aspx",
      sourceType: "SHRM"
    },
    {
      title: "Future of Work: AI and Human Collaboration",
      date: "January 2025",
      description: "Research on how AI is transforming workforce dynamics, productivity enhancement, and creating new collaborative work models.",
      link: "/research/future-work-ai-collaboration",
      externalUrl: "https://www.mckinsey.com/featured-insights/future-of-work",
      sourceType: "McKinsey"
    },
    {
      title: "Talent Acquisition Benchmark Study",
      date: "November 2024",
      description: "Industry benchmarks for recruitment metrics across different sectors, company sizes, and geographies in the post-pandemic labor market.",
      link: "/research/talent-acquisition-benchmark-2024",
      externalUrl: "https://www.gartner.com/en/human-resources/research/talent-acquisition",
      sourceType: "Gartner"
    },
    {
      title: "Employee Engagement in the Digital Age",
      date: "October 2024",
      description: "Research on effective strategies for maintaining employee engagement in increasingly digital and remote work environments.",
      link: "/research/employee-engagement-digital-2024",
      externalUrl: "https://www.gallup.com/workplace/285674/improve-employee-engagement-workplace.aspx",
      sourceType: "Gallup"
    }
  ];

  const whitepapers: Whitepaper[] = [
    {
      title: "Building Strategic HR: From Administrative Function to Business Partner",
      description: "How HR departments can evolve to become strategic partners that drive business outcomes and organizational success.",
      link: "https://www.cipd.co.uk/knowledge/strategy/hr/strategic-hrm-factsheet",
      sourceType: "CIPD",
      citation: "© Chartered Institute of Personnel and Development (CIPD)"
    },
    {
      title: "The Business Case for Diversity & Inclusion",
      description: "Data-driven insights on how diversity and inclusion initiatives impact business performance, innovation, and growth.",
      link: "https://www.mckinsey.com/featured-insights/diversity-and-inclusion",
      sourceType: "McKinsey",
      citation: "© McKinsey & Company"
    },
    {
      title: "HR Analytics: Moving from Data to Insights",
      description: "A framework for developing advanced HR analytics capabilities that inform strategic decision-making.",
      link: "https://www.deloitte.com/global/en/services/consulting/services/human-capital.html",
      sourceType: "Deloitte",
      citation: "© Deloitte Touche Tohmatsu Limited"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <ResearchHeader />
        <ResearchPapersSection papers={researchPapers} />
        <ResearchReportsSection reports={researchReports} />
        <WhitepapersSection whitepapers={whitepapers} />
      </main>
      <Footer />
    </div>
  );
}


import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResearchHeader from '@/components/research/ResearchHeader';
import ResearchPapersSection from '@/components/research/ResearchPapersSection';
import ResearchReportsSection from '@/components/research/ResearchReportsSection';
import WhitepapersSection from '@/components/research/WhitepapersSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { researchPapers } from '@/data/researchPapers';
import { ResearchReport, Whitepaper } from '@/components/research/types';

// Research Reports Data
const researchReports: ResearchReport[] = [
  {
    title: "The State of HR Technology 2025",
    date: "April 2025",
    description: "A comprehensive analysis of the HR technology landscape, including emerging trends, key players, and predictions for the future of HR tech.",
    link: "/research/hr-tech-landscape-2025",
    externalUrl: "https://hrtechresearch.org/reports/2025-landscape",
    sourceType: "HR Tech Research Institute"
  },
  {
    title: "Global Talent Acquisition Benchmark Report 2024",
    date: "February 2024",
    description: "Annual benchmark report on talent acquisition metrics across industries, regions, and company sizes, with insights on best practices.",
    link: "/research/talent-acquisition-benchmark-2024",
    externalUrl: "https://talentstrategyinstitute.com/benchmarks",
    sourceType: "Talent Strategy Institute"
  }
];

// Whitepapers Data
const whitepapers: Whitepaper[] = [
  {
    title: "Future of Work: AI & Human Collaboration",
    description: "Explores the evolving relationship between AI systems and human workers, with frameworks for effective collaboration and skills development.",
    link: "https://futureofwork.org/ai-human-collaboration",
    sourceType: "Future of Work Institute",
    citation: "Johnson, M., & Patel, S. (2024). Future of Work: AI & Human Collaboration. Future of Work Institute."
  },
  {
    title: "Employee Engagement in the Digital Era",
    description: "Research-backed strategies for maintaining and enhancing employee engagement in increasingly digital and remote work environments.",
    link: "https://engagementresearch.com/digital-era-whitepaper",
    sourceType: "Engagement Research Consortium",
    citation: "Chang, L., Williams, T., & Rodriguez, M. (2024). Employee Engagement in the Digital Era. Engagement Research Consortium."
  },
  {
    title: "Strategic Workforce Planning Toolkit",
    description: "A practical guide to implementing strategic workforce planning processes that align with business objectives and adapt to changing talent needs.",
    link: "https://workforceanalytics.org/planning-toolkit",
    sourceType: "Workforce Analytics Council",
    citation: "Thompson, B., & Kumar, A. (2024). Strategic Workforce Planning Toolkit. Workforce Analytics Council."
  }
];

export default function Research() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Research & Insights | nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our research insights on HR trends, organizational effectiveness, and workplace innovations to help you navigate the evolving landscape of work.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <ResearchHeader />

      {/* Research Papers */}
      <ResearchPapersSection papers={researchPapers} />
      
      {/* Research Reports */}
      <ResearchReportsSection reports={researchReports} />
      
      {/* Whitepapers */}
      <WhitepapersSection whitepapers={whitepapers} />
      
      {/* Join Our Team Section - Consolidated */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Research Team</h2>
              <p className="text-lg max-w-3xl mx-auto">
                We're looking for talented researchers to join our team in Whitefield, Bangalore. Contribute to cutting-edge research that shapes the future of HR technology and workplace practices.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-border/50 p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Research Associate</h3>
              <p className="mb-4 text-muted-foreground"><span className="font-medium text-foreground">Location:</span> Whitefield, Bangalore</p>
              <p className="mb-6">
                We're seeking a talented Research Associate to join our team. In this role, you'll design and conduct research studies on HR technology effectiveness, workforce analytics, and organizational psychology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="font-medium mb-2">Key Responsibilities:</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Design and conduct research studies</li>
                    <li>Analyze data using statistical methods</li>
                    <li>Create reports and presentations</li>
                    <li>Collaborate with industry partners</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Qualifications:</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Master's degree in related field</li>
                    <li>Strong research methodology skills</li>
                    <li>Experience with data analysis</li>
                    <li>Excellent communication skills</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/research-opportunities">View Full Job Description</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

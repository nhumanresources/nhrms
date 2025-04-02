
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { researchPapers } from '@/data/researchPapers';
import { useToast } from '@/components/ui/use-toast';

export default function Research() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Research & Insights | n Human Resources and Management Systems - nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore nHRMS research papers, reports and whitepapers on HR trends, technology, leadership development, and strategic human capital management.');
    }
    
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  const researchReports = [
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

  const whitepapers = [
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
        <section className="py-16 md:py-24 bg-pattern">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Insights</h1>
              <p className="text-xl text-muted-foreground">
                Our latest research, whitepapers, and thought leadership on the evolving HR landscape.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-wave-pattern">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10">Latest Research Papers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {researchPapers.map((paper) => (
                <Card key={paper.id} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">{paper.category}</span>
                      <span className="text-sm text-muted-foreground">{paper.year}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{paper.title}</CardTitle>
                    <CardDescription className="text-sm">
                      By {paper.authors}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{paper.abstract}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full justify-center group" asChild>
                      <Link to={paper.link}>
                        Read Paper <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10">Research Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchReports.map((report, index) => (
                <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md bg-white">
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">{report.date}</div>
                    <CardTitle>{report.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {report.description}
                    </CardDescription>
                    <div className="mt-3 text-sm flex items-center text-muted-foreground">
                      <span className="font-medium">Source:</span>
                      <a href={report.externalUrl} target="_blank" rel="noopener noreferrer" className="ml-1 flex items-center hover:text-primary">
                        {report.sourceType} <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full group" asChild>
                      <Link to={report.link}>
                        Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-pattern">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10">Whitepapers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whitepapers.map((paper, index) => (
                <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md bg-white">
                  <CardHeader>
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary mb-4">
                      <FileText className="h-6 w-6" />
                    </div>
                    <CardTitle className="line-clamp-2">{paper.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base line-clamp-3 mb-2">
                      {paper.description}
                    </CardDescription>
                    <div className="text-sm flex items-center text-muted-foreground">
                      <span className="font-medium">Source:</span>
                      <a href={paper.link} target="_blank" rel="noopener noreferrer" className="ml-1 flex items-center hover:text-primary">
                        {paper.sourceType} <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      {paper.citation}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full group" asChild>
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

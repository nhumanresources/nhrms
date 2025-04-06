
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResearchHeader from '@/components/research/ResearchHeader';
import ResearchPapersSection from '@/components/research/ResearchPapersSection';
import ResearchReportsSection from '@/components/research/ResearchReportsSection';
import WhitepapersSection from '@/components/research/WhitepapersSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BriefcaseBusiness, Building, PartyPopper } from 'lucide-react';

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
      <ResearchPapersSection />
      
      {/* Research Reports */}
      <ResearchReportsSection />
      
      {/* Whitepapers */}
      <WhitepapersSection />
      
      {/* Join Our Team Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Join Our Research Team</h2>
                <p className="text-lg mb-6">
                  We're looking for talented researchers to join our team in Whitefield, Bangalore. Contribute to cutting-edge research that shapes the future of HR technology and workplace practices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-2 mr-4">
                      <BriefcaseBusiness className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Meaningful Work</h3>
                      <p className="text-muted-foreground">Conduct research that directly impacts how organizations operate</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-2 mr-4">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Modern Workspace</h3>
                      <p className="text-muted-foreground">Work in our collaborative office in Whitefield, Bangalore</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-2 mr-4">
                      <PartyPopper className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Growth Opportunities</h3>
                      <p className="text-muted-foreground">Develop your expertise with mentorship from industry leaders</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/research-associate-job">View Research Associate Job</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-border/50 p-8">
                <h3 className="text-2xl font-bold mb-4">Research Associate</h3>
                <p className="mb-4 text-muted-foreground"><span className="font-medium text-foreground">Location:</span> Whitefield, Bangalore</p>
                <p className="mb-6">
                  We're seeking a talented Research Associate to join our team. In this role, you'll design and conduct research studies on HR technology effectiveness, workforce analytics, and organizational psychology.
                </p>
                <div className="space-y-2 mb-8">
                  <p className="font-medium">Qualifications:</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Master's degree in related field</li>
                    <li>Strong research methodology skills</li>
                    <li>Experience with data analysis</li>
                    <li>Excellent communication skills</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link to="/research-associate-job">View Full Job Description</Link>
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

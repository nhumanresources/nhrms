
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorkforcePlanning() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Strategic Workforce Planning in the Age of Automation | nHRMS Research";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'This paper presents models for workforce planning that account for increasing automation and changing skill requirements.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="mb-6">
            <Link to="/research" className="inline-flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Research
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-border/50 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Strategic Workforce Planning in the Age of Automation</h1>
                <p className="text-muted-foreground">Published April 2025 • 36 pages</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">Executive Summary</h2>
                <p>
                  This research paper presents a comprehensive framework for strategic workforce planning in an era of accelerating automation. 
                  Drawing on data from 200+ organizations across industries, we provide models for forecasting skill demands, managing workforce 
                  transitions, and building organizational capabilities that balance technological innovation with human potential.
                </p>
              </div>

              <h2>Introduction</h2>
              <p>
                As automation technologies transform work across industries, organizations face complex challenges in planning their future workforce. 
                This research moves beyond simplistic narratives of job displacement to provide practical frameworks for understanding how work is being 
                reconfigured and how organizations can proactively manage this transformation to create sustainable value and meaningful work.
              </p>

              <h2>Key Findings</h2>
              <ul>
                <li>Organizations with mature workforce planning capabilities are 3.2x more likely to successfully navigate automation-driven transitions</li>
                <li>The skills half-life (time until 50% of skills become outdated) has decreased from 7 years to 3.5 years across most industries</li>
                <li>78% of roles will be substantially redefined rather than eliminated by automation over the next decade</li>
                <li>Internal talent marketplaces coupled with targeted reskilling show 4.1x ROI compared to traditional replacement hiring</li>
                <li>Organizations investing in "augmentation strategies" (human+machine collaboration) outperform those focused on pure automation by 27%</li>
              </ul>

              <h2>Methodology</h2>
              <p>
                Our research combined quantitative analysis of workforce data from 217 organizations, interviews with 86 C-suite executives 
                and HR leaders, case studies of 15 organizations with advanced workforce planning practices, and economic modeling of automation 
                impacts across 12 major industries. The study was conducted over 18 months to capture emerging trends and outcomes.
              </p>

              <h2>Strategic Workforce Planning Framework</h2>
              <p>
                The research presents a five-component framework for next-generation workforce planning:
              </p>
              <ol>
                <li><strong>Work Architecture Mapping:</strong> Deconstructing roles into tasks and capabilities to identify automation opportunities and human value-add</li>
                <li><strong>Dynamic Skills Forecasting:</strong> Predictive modeling of emerging, stable, and declining skills based on technology adoption patterns</li>
                <li><strong>Talent Ecosystem Design:</strong> Creating flexible talent access through blended workforces, internal mobility, and strategic partnerships</li>
                <li><strong>Transition Capability Building:</strong> Developing organizational systems for continuous reskilling and career path innovation</li>
                <li><strong>Human-Technology Integration:</strong> Designing work systems that optimize the complementary strengths of humans and machines</li>
              </ol>

              <h2>Conclusion</h2>
              <p>
                Successful workforce planning in the age of automation requires a fundamental shift from static, headcount-based approaches to 
                dynamic capability management. Organizations that develop the capacity to continuously sense changing skill requirements, redesign 
                work to leverage both human and technological capabilities, and create fluid talent systems are gaining significant advantages in 
                both operational performance and innovation capacity. The research provides practical tools and frameworks for leaders seeking to 
                build this next generation of workforce planning capabilities.
              </p>

              <div className="mt-12 border-t border-border pt-6">
                <h3>About the Authors</h3>
                <p>
                  This research was conducted by nHRMS Research's Future of Work team, led by Dr. Takashi Nakamura, with contributions from 
                  workforce economists, organizational designers, and technology forecasters from the Adaptive Workforce Consortium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

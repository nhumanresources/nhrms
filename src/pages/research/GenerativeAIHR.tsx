
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GenerativeAIHR() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Generative AI Applications in HR Operations | nHRMS Research";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'An examination of current and emerging applications of generative AI across HR functions, with case studies and implementation frameworks.');
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
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Generative AI Applications in HR Operations</h1>
                <p className="text-muted-foreground">Published March 2025 • 32 pages</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">Executive Summary</h2>
                <p>
                  This research paper examines the current and emerging applications of generative AI across HR functions, 
                  identifying implementation patterns, challenges, and success factors. Based on insights from 45+ early adopters,
                  we provide a framework for organizations to assess, select, and implement generative AI solutions that deliver 
                  tangible business value while addressing ethical and privacy considerations.
                </p>
              </div>

              <h2>Introduction</h2>
              <p>
                Generative AI represents a paradigm shift in how organizations approach HR operations. Unlike earlier AI 
                applications focused primarily on analytics and automation, generative AI introduces creative capabilities 
                that can transform everything from job description writing to learning content creation and candidate 
                engagement. This research explores the practical applications emerging across HR functions and provides 
                guidance for organizations at various stages of adoption.
              </p>

              <h2>Key Findings</h2>
              <ul>
                <li>Organizations implementing generative AI in HR report an average 38% reduction in time spent on administrative tasks</li>
                <li>Content creation for recruitment, onboarding, and learning shows the highest initial ROI, with an average 4x productivity increase</li>
                <li>The largest obstacles to adoption are data privacy concerns (79%), integration challenges (68%), and skills gaps (62%)</li>
                <li>Organizations with centralized AI governance frameworks are 2.7x more successful in scaling implementations beyond pilot projects</li>
                <li>82% of HR professionals express concern about over-reliance on AI-generated content without human oversight</li>
              </ul>

              <h2>Methodology</h2>
              <p>
                Our research team conducted a mixed-methods study including surveys of 312 HR professionals, in-depth interviews with 45 organizations 
                implementing generative AI in HR, technology capability assessments of 18 leading HR AI solutions, and analysis of implementation outcomes. 
                The research framework examined use cases, implementation approaches, technological capabilities, change management practices, and realized benefits.
              </p>

              <h2>Implementation Framework</h2>
              <p>
                Based on our research, we have developed a four-stage implementation framework for generative AI in HR operations:
              </p>
              <ol>
                <li><strong>Assessment:</strong> Evaluating use cases, data availability and quality, and ethical implications</li>
                <li><strong>Pilot:</strong> Testing solutions in controlled environments with clear success metrics</li>
                <li><strong>Integration:</strong> Connecting AI capabilities with existing HR systems and processes</li>
                <li><strong>Scaling:</strong> Expanding successful applications while maintaining human oversight and continuous improvement</li>
              </ol>

              <h2>Conclusion</h2>
              <p>
                Generative AI offers transformative potential for HR operations, but successful implementation requires careful planning, 
                robust governance, and ongoing oversight. Organizations that approach generative AI as a tool for human augmentation 
                rather than replacement are achieving the most significant benefits in terms of both productivity and employee experience. 
                The research provides a practical roadmap for HR leaders looking to navigate the rapidly evolving landscape of generative 
                AI applications.
              </p>

              <div className="mt-12 border-t border-border pt-6">
                <h3>About the Authors</h3>
                <p>
                  This research was led by Dr. Ajoy Bhupatiraju, Head of Research at nHRMS, with contributions from our 
                  Technology & Innovation team. The study benefited from collaboration with AI ethics specialists and 
                  data privacy experts to provide a balanced perspective on this transformative technology.
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

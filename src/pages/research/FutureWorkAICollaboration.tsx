
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FutureWorkAICollaboration() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Future of Work: AI and Human Collaboration | nHRMS Research";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Research on how AI is transforming workforce dynamics, productivity enhancement, and creating new collaborative work models.');
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
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Future of Work: AI and Human Collaboration</h1>
                <p className="text-muted-foreground">Published January 2025 • 34 pages</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">Executive Summary</h2>
                <p>
                  This research explores how artificial intelligence is reshaping workforce dynamics and creating new models of human-machine collaboration. Based on data from 2,000+ knowledge workers and 300+ organizations, we identify emerging patterns of AI integration in the workplace and provide a framework for organizations to maximize productivity while addressing key challenges in implementation and workforce adaptation.
                </p>
              </div>

              <h2>Introduction</h2>
              <p>
                Artificial intelligence has moved beyond theoretical discussions to become a practical, daily component of work across industries. This research examines the current state of AI integration in the workplace, focusing specifically on collaborative models where humans and AI systems work together to achieve outcomes neither could accomplish independently.
              </p>

              <h2>Key Findings</h2>
              <ul>
                <li>Organizations with mature AI-human collaboration models report 35% higher productivity across knowledge work functions</li>
                <li>88% of employees using AI tools regularly report increased job satisfaction when proper training and clear guidelines are provided</li>
                <li>Middle management roles are evolving most rapidly, with 67% reporting significant changes in daily responsibilities due to AI adoption</li>
                <li>HR departments with AI-enhanced capabilities are 2.5x more effective at identifying skills gaps and delivering targeted development</li>
                <li>Organizations report an average 18-month timeline from initial AI implementation to measurable productivity gains</li>
              </ul>

              <h2>Methodology</h2>
              <p>
                Our research combined quantitative surveys of 2,147 knowledge workers across multiple industries, in-depth interviews with 328 executives and managers responsible for AI implementation, and analysis of productivity and performance data from participating organizations. The study was conducted over 18 months to capture evolving patterns of adoption and impact.
              </p>

              <h2>Emerging Models of Human-AI Collaboration</h2>
              <p>
                The research identifies four distinct models of human-AI collaboration emerging in organizations:
              </p>
              <ol>
                <li><strong>AI as Advisor:</strong> AI systems provide recommendations and insights while humans retain decision-making authority</li>
                <li><strong>AI as Accelerator:</strong> AI handles routine tasks while humans focus on complex problem-solving and creative work</li>
                <li><strong>AI as Augmentor:</strong> AI and humans work interactively on tasks, with humans guiding AI and refining outputs</li>
                <li><strong>AI as Autonomous Partner:</strong> AI systems operate independently on defined workstreams with human oversight</li>
              </ol>

              <h2>Conclusion</h2>
              <p>
                The future workplace will be defined not by AI replacing humans, but by new collaborative models that maximize the strengths of both. Organizations that proactively develop strategies for effective human-AI collaboration while addressing workforce concerns about skill relevance and job security will gain significant competitive advantages in productivity, innovation, and talent attraction.
              </p>

              <div className="mt-12 border-t border-border pt-6">
                <h3>About the Authors</h3>
                <p>
                  This research was conducted by nHRMS Research in partnership with the Center for Digital Workforce Transformation. Lead researchers included Dr. Michael Ramirez, Chief Innovation Officer at nHRMS, and a team of organizational psychologists and data scientists specializing in workplace technology adoption.
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

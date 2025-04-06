
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PsychologicalSafety() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Psychological Safety and Team Performance in Virtual Environments | nHRMS Research";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Research exploring how psychological safety is established and maintained in remote and hybrid work settings.');
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
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Psychological Safety and Team Performance in Virtual Environments</h1>
                <p className="text-muted-foreground">Published January 2024 • 28 pages</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">Executive Summary</h2>
                <p>
                  This study explores how psychological safety is established, maintained, and measured in remote and hybrid work environments. 
                  Drawing on data from 180+ teams across diverse industries, we identify the practices and leadership behaviors that foster 
                  psychological safety in virtual settings and their correlation with team performance, innovation, and well-being.
                </p>
              </div>

              <h2>Introduction</h2>
              <p>
                Psychological safety—the belief that one can speak up without risk of punishment or humiliation—has long been recognized 
                as a critical factor in team performance. However, the shift to remote and hybrid work has fundamentally altered how team 
                members interact and perceive interpersonal risk. This research investigates how psychological safety manifests in virtual 
                environments and identifies evidence-based strategies for leaders to foster psychological safety when teams are not physically collocated.
              </p>

              <h2>Key Findings</h2>
              <ul>
                <li>Virtual and hybrid teams with high psychological safety outperform their low psychological safety counterparts by an average of 37% on key performance metrics</li>
                <li>Communication patterns differ significantly between high and low psychological safety remote teams, with high-safety teams showing more evenly distributed participation</li>
                <li>The absence of non-verbal cues in virtual environments creates unique challenges for psychological safety, requiring explicit attention to interaction norms</li>
                <li>Leadership vulnerability and structured inclusion practices show the strongest correlation with psychological safety in remote settings</li>
                <li>Teams that establish clear communication norms specifically adapted for virtual work report 42% higher psychological safety scores</li>
              </ul>

              <h2>Methodology</h2>
              <p>
                The research combined surveys of 1,840 team members across 183 teams, analysis of digital communication patterns, 
                virtual meeting observations, interviews with team leaders, and performance data. Teams were categorized by work arrangement 
                (fully co-located, hybrid, or fully distributed) and industry to identify both universal patterns and context-specific factors.
              </p>

              <h2>Building Blocks of Virtual Psychological Safety</h2>
              <p>
                Our research identified six key dimensions of psychological safety in virtual environments:
              </p>
              <ol>
                <li><strong>Communication Equity:</strong> Ensuring all team members have equal opportunity and comfort in contributing</li>
                <li><strong>Collaborative Vulnerability:</strong> Leaders modeling openness about uncertainties and mistakes</li>
                <li><strong>Conflict Resolution Protocols:</strong> Explicit processes for addressing disagreements constructively</li>
                <li><strong>Digital Inclusion:</strong> Practices that ensure all members feel valued regardless of location or work arrangement</li>
                <li><strong>Feedback Accessibility:</strong> Multiple channels for giving and receiving constructive feedback</li>
                <li><strong>Growth Orientation:</strong> Framing mistakes and challenges as learning opportunities</li>
              </ol>

              <h2>Conclusion</h2>
              <p>
                Creating psychological safety in virtual environments requires intentional leadership practices that address the unique 
                challenges of remote collaboration. While the fundamental principles of psychological safety remain constant, the mechanisms 
                for establishing trust, encouraging vulnerability, and managing conflict must be adapted for environments where non-verbal cues 
                are limited and interactions are mediated by technology. Organizations that invest in developing these specialized leadership 
                capabilities are seeing significant returns in team performance, innovation, and resilience.
              </p>

              <div className="mt-12 border-t border-border pt-6">
                <h3>About the Authors</h3>
                <p>
                  This research was conducted by nHRMS Research's Employee Experience team under the guidance of Usha Sai. 
                  The study was enriched by insights from our organizational psychologists specializing in team dynamics 
                  and virtual collaboration methodologies.
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

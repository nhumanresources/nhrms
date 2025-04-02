
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmployeeEngagementDigital() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Employee Engagement in the Digital Age | nHRMS Research";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Research on effective strategies for maintaining employee engagement in increasingly digital and remote work environments.');
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
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Employee Engagement in the Digital Age</h1>
                <p className="text-muted-foreground">Published October 2024 • 38 pages</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">Executive Summary</h2>
                <p>
                  This research examines how employee engagement strategies must evolve to meet the needs of today's increasingly digital and remote workforce. Through analysis of engagement data from 30,000+ employees across diverse industries and work environments, the study identifies the changing drivers of engagement and provides actionable strategies for HR leaders navigating hybrid and remote work models.
                </p>
              </div>

              <h2>Introduction</h2>
              <p>
                As organizations continue to embrace hybrid and remote work arrangements, traditional approaches to employee engagement face new challenges and opportunities. This research explores how the fundamental drivers of engagement have shifted in digital work environments and identifies strategies that effectively foster connection, purpose, and performance across varied work arrangements.
              </p>

              <h2>Key Findings</h2>
              <ul>
                <li>The primary drivers of engagement have shifted significantly, with "meaningful connection to colleagues" and "clarity of purpose" now ranking as the top factors, surpassing traditional drivers like career advancement</li>
                <li>Remote and hybrid workers report 23% higher engagement when organizations implement structured digital connection practices</li>
                <li>Employees experiencing "digital exhaustion" show a 47% decrease in engagement metrics</li>
                <li>Organizations with clearly defined work norms for hybrid environments report 31% higher engagement than those with ambiguous expectations</li>
                <li>Mid-level managers have the most significant impact on engagement in digital environments, yet 72% report feeling unprepared to lead remote teams</li>
              </ul>

              <h2>Methodology</h2>
              <p>
                The research analyzed engagement survey data from 32,467 employees across 127 organizations operating in varied work models (fully in-person, hybrid, and fully remote). The quantitative data was supplemented with qualitative insights from focus groups and interviews with HR leaders and employees at different organizational levels.
              </p>

              <h2>The Evolution of Engagement Drivers</h2>
              <p>
                Our research identifies significant shifts in the relative importance of various engagement drivers since 2019:
              </p>

              <h3>Rising in Importance</h3>
              <ul>
                <li>Meaningful connection to colleagues (+42%)</li>
                <li>Clarity of purpose and impact (+35%)</li>
                <li>Trust and autonomy (+29%)</li>
                <li>Workplace flexibility (+27%)</li>
                <li>Digital wellbeing support (+23%)</li>
              </ul>

              <h3>Declining in Relative Importance</h3>
              <ul>
                <li>Physical workplace amenities (-38%)</li>
                <li>In-person social events (-31%)</li>
                <li>Formal recognition programs (-19%)</li>
                <li>Traditional career ladder progression (-17%)</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Employee engagement in digital work environments requires a fundamental rethinking of connection, communication, and culture-building approaches. Organizations that proactively adapt their engagement strategies to address the changing needs of their workforce will see significant benefits in retention, performance, and organizational resilience. The research provides a framework for HR leaders to assess their current engagement strategies and implement targeted improvements aligned with the evolving drivers of workforce engagement.
              </p>

              <div className="mt-12 border-t border-border pt-6">
                <h3>About the Authors</h3>
                <p>
                  This research was conducted by nHRMS Research's Employee Experience team, led by Dr. Rebecca Liu, in collaboration with the Digital Workplace Institute. Contributing researchers included organizational psychologists, digital workplace strategists, and HR analytics specialists with expertise in remote work dynamics.
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

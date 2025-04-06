
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TalentAcquisitionBenchmark() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Talent Acquisition Benchmark Study | nHRMS Research";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Industry benchmarks for recruitment metrics across different sectors, company sizes, and geographies in the post-pandemic labor market.');
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
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Talent Acquisition Benchmark Study</h1>
                <p className="text-muted-foreground">Published November 2024 • 42 pages</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" /> Download PDF
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">Executive Summary</h2>
                <p>
                  This comprehensive benchmark study provides talent acquisition leaders with current, actionable metrics across industries, company sizes, and geographies. Drawing on data from over 850 organizations, the report establishes updated benchmarks for key recruitment metrics and identifies emerging best practices in the post-pandemic talent landscape.
                </p>
              </div>

              <h2>Introduction</h2>
              <p>
                As organizations navigate the complex post-pandemic labor market, talent acquisition functions face unprecedented challenges in attracting and retaining top talent. This benchmark study provides talent acquisition leaders with current, reliable data to assess their performance and identify opportunities for optimization.
              </p>

              <h2>Key Metrics & Findings</h2>
              
              <h3>Time-to-Fill</h3>
              <p>
                The global average time-to-fill across all positions has increased to 43 days, up from 36 days in 2019. However, organizations implementing AI-powered screening and assessment tools have reduced their time-to-fill by an average of 29%, achieving a competitive advantage in high-demand talent markets.
              </p>

              <table className="min-w-full divide-y divide-border mt-4 mb-6">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-muted-foreground">Industry</th>
                    <th className="px-4 py-2 text-center font-medium text-muted-foreground">Entry Level (days)</th>
                    <th className="px-4 py-2 text-center font-medium text-muted-foreground">Mid-Level (days)</th>
                    <th className="px-4 py-2 text-center font-medium text-muted-foreground">Senior Level (days)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2">Technology</td>
                    <td className="px-4 py-2 text-center">28</td>
                    <td className="px-4 py-2 text-center">42</td>
                    <td className="px-4 py-2 text-center">68</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Healthcare</td>
                    <td className="px-4 py-2 text-center">38</td>
                    <td className="px-4 py-2 text-center">56</td>
                    <td className="px-4 py-2 text-center">79</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Financial Services</td>
                    <td className="px-4 py-2 text-center">25</td>
                    <td className="px-4 py-2 text-center">47</td>
                    <td className="px-4 py-2 text-center">72</td>
                  </tr>
                </tbody>
              </table>

              <h3>Cost-per-Hire</h3>
              <p>
                Average cost-per-hire has increased by 18% since 2019, reaching $4,683 globally. Organizations investing in employer branding report up to 27% lower cost-per-hire compared to those without dedicated employer brand initiatives.
              </p>

              <h3>Quality of Hire</h3>
              <p>
                Organizations measuring quality of hire through multiple metrics (performance ratings, hiring manager satisfaction, and tenure) report significantly higher satisfaction with recruitment outcomes. The research identifies a correlation between structured interview processes and improved quality of hire metrics.
              </p>

              <h2>Methodology</h2>
              <p>
                Data was collected from 857 organizations across North America, Europe, and Asia-Pacific through a combination of surveys and structured interviews with talent acquisition leaders. The research team validated self-reported metrics through comparative analysis and follow-up verification with a subset of participants.
              </p>

              <h2>Conclusion</h2>
              <p>
                The talent acquisition landscape continues to evolve rapidly, with significant variations across industries, regions, and organizational sizes. Leading organizations are gaining competitive advantages through strategic investments in technology, employer branding, and candidate experience. This benchmark study provides talent acquisition leaders with the data-driven insights needed to optimize their recruitment functions and deliver superior outcomes.
              </p>

              <div className="mt-12 border-t border-border pt-6">
                <h3>About the Authors</h3>
                <p>
                  This research was conducted by nHRMS Research's Talent Acquisition Practice under the leadership of Sai Varma. 
                  The study leveraged our extensive network of recruitment specialists and talent analytics experts to provide 
                  comprehensive benchmarks for HR leaders.
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

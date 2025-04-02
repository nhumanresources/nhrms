
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmployeeExperienceROI() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Employee Experience ROI | nHRMS Research";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Research study on the ROI of employee experience investments and strategies for maximizing returns.');
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
                <h1 className="text-3xl md:text-4xl font-bold mb-2">The ROI of Employee Experience</h1>
                <p className="text-muted-foreground">Published October 2024 • 26 pages</p>
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
                  This research paper quantifies the return on investment from employee experience initiatives, finding that organizations that invest strategically in employee experience realize a 3x return through increased productivity, lower turnover, and higher customer satisfaction. Based on data from 450+ companies across multiple industries, we provide a framework for calculating and maximizing EX ROI.
                </p>
              </div>

              <h2>Introduction</h2>
              <p>
                As organizations compete for talent in increasingly dynamic markets, employee experience (EX) has emerged as a critical differentiator. However, many executives struggle to quantify the business impact of EX investments. This research bridges that gap by analyzing comprehensive data from organizations of varying sizes across multiple industries to establish clear correlations between EX initiatives and business outcomes.
              </p>

              <h2>Key Findings</h2>
              <ul>
                <li>Organizations with top-quartile employee experience show 21% higher profitability compared to bottom-quartile counterparts</li>
                <li>EX leaders experience 40% lower turnover rates, resulting in significant cost savings in recruitment and training</li>
                <li>Employee engagement and customer satisfaction scores show a correlation coefficient of 0.67, demonstrating the link between employee and customer experience</li>
                <li>Strategic EX investments yield positive ROI within 14-18 months for most organizations</li>
                <li>Small and medium enterprises can achieve comparable or higher ROI than large enterprises through targeted interventions</li>
              </ul>

              <h2>Methodology</h2>
              <p>
                Our research team collected data from 453 organizations ranging from 50 to 10,000+ employees across technology, healthcare, financial services, manufacturing, and retail sectors. We conducted longitudinal analysis over three years, combining quantitative surveys, financial performance data, and qualitative interviews with HR leaders and C-suite executives.
              </p>

              <h2>Calculating Employee Experience ROI</h2>
              <p>
                The research presents a comprehensive framework for calculating EX ROI, accounting for both tangible and intangible factors. The model includes direct cost savings from reduced turnover and absenteeism, productivity gains, and revenue impacts through improved customer experience.
              </p>

              <h2>Conclusion</h2>
              <p>
                Employee experience investments deliver measurable business value when strategically planned and executed. Organizations that approach EX as a business imperative rather than an HR initiative are realizing significant competitive advantages. The report provides practical guidance for executives seeking to build the business case for EX investments and optimize returns through targeted initiatives.
              </p>

              <div className="mt-12 border-t border-border pt-6">
                <h3>About the Authors</h3>
                <p>
                  This research was conducted by nHRMS Research in collaboration with the Institute for Workplace Innovation. The research team was led by Dr. Sarah Chen, Principal Researcher at nHRMS, with contributions from workplace strategy experts and economists specializing in organizational performance.
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

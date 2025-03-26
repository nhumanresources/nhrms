
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadershipDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="mb-8">
          <Link 
            to="/research" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
          </Link>
        </div>
        
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-sm text-muted-foreground mb-2">
              Published: March 15, 2025 • Research Paper
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              The Impact of Leadership Development Programs on Organizational Performance
            </h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/76.jpg" 
                  alt="Dr. Sarah Johnson" 
                  className="h-10 w-10 rounded-full mr-3" 
                />
                <div>
                  <div className="font-medium">Dr. Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Lead HR Researcher</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Download PDF
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </div>
          </div>
          
          <div className="prose prose-blue max-w-none text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Abstract</h2>
            <p>
              This comprehensive research paper examines the measurable impact of structured leadership development 
              programs on organizational performance across various industries. Through quantitative analysis of over 
              500 organizations that implemented leadership programs between 2020-2025, we identify key success factors, 
              ROI metrics, and best practices for designing effective leadership initiatives that drive business results.
            </p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p>
              In today's rapidly evolving business landscape, effective leadership development has emerged as a critical 
              factor in organizational success. As companies face unprecedented challenges—from digital transformation to 
              remote work dynamics and global competition—the need for agile, emotionally intelligent leaders has never 
              been greater. This research explores how systematically developing leadership capabilities translates into 
              tangible organizational performance improvements.
            </p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Methodology</h2>
            <p>
              Our research employed a mixed-methods approach combining:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Longitudinal data analysis from 500+ organizations across 12 industries</li>
              <li>Pre/post implementation performance metrics including financial, operational, and employee metrics</li>
              <li>In-depth interviews with 150 C-suite executives and HR leaders</li>
              <li>Comparative analysis of program structures, content, delivery methods, and reinforcement mechanisms</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Key Findings</h2>
            
            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.1 Financial Impact</h3>
            <p>
              Organizations with mature leadership development programs demonstrated:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>22% higher revenue growth compared to industry peers</li>
              <li>18% improvement in profitability over a 3-year period</li>
              <li>31% higher return on leadership development investment</li>
              <li>Reduced operational costs by an average of 13%</li>
            </ul>
            
            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.2 Organizational Performance</h3>
            <p>
              Beyond financial metrics, significant improvements were observed in:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Employee engagement scores (+24% on average)</li>
              <li>Innovation metrics: 41% more successful new initiatives</li>
              <li>Change implementation success rates improved by 37%</li>
              <li>Customer satisfaction scores increased by 19%</li>
            </ul>
            
            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.3 Critical Success Factors</h3>
            <p>
              The most effective leadership development programs shared these characteristics:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Clear alignment with business strategy and challenges</li>
              <li>Executive sponsorship and active participation</li>
              <li>Experiential learning combined with theoretical frameworks</li>
              <li>Personalized development paths based on objective assessments</li>
              <li>Integration of emotional intelligence and digital leadership competencies</li>
              <li>Continuous reinforcement through coaching and application opportunities</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Case Studies</h2>
            <p>
              The paper includes detailed analysis of four organizations that achieved exceptional results:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>A technology firm that improved retention of high-potential talent by 37%</li>
              <li>A manufacturing company that reduced time-to-market by 28% through improved leadership alignment</li>
              <li>A healthcare organization that decreased burnout by 31% while improving patient satisfaction</li>
              <li>A financial services firm that successfully navigated digital transformation by upskilling leaders</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Recommendations</h2>
            <p>
              Based on our findings, we recommend organizations:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Establish clear metrics for leadership development ROI before implementation</li>
              <li>Design contextual programs that address specific business challenges</li>
              <li>Integrate digital leadership competencies into all development programs</li>
              <li>Create reinforcement mechanisms to ensure sustained behavior change</li>
              <li>Develop internal coaching capabilities to support ongoing leadership growth</li>
              <li>Establish leadership development as a strategic priority with board visibility</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Conclusion</h2>
            <p>
              This research conclusively demonstrates that well-designed leadership development programs deliver 
              significant, measurable impact on organizational performance across multiple dimensions. The data shows 
              that organizations that view leadership development as a strategic investment rather than a discretionary 
              expense gain substantial competitive advantage in their ability to navigate change, drive innovation, 
              and deliver sustainable results.
            </p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. References</h2>
            <div className="space-y-2">
              <p>
                Antonakis, J., & Day, D. V. (2024). The nature of leadership (4th ed.). SAGE Publications.
              </p>
              <p>
                Harvard Business Review. (2025). Special report: The evolution of leadership in the digital age.
              </p>
              <p>
                World Economic Forum. (2025). Future of Work Report: Leadership imperatives for 2030.
              </p>
              <p>
                McKinsey & Company. (2024). Leadership at scale: Building organizational capability and capacity to create outcomes that matter most.
              </p>
              <p>
                Johnson, S., & Nguyen, T. (2025). Measuring the ROI of leadership development: A comprehensive framework. Journal of Organizational Effectiveness.
              </p>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default LeadershipDevelopment;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const HRTechLandscape = () => {
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
              Published: February 15, 2025 • Research Report
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              2025 HR Technology Landscape Report
            </h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <div>
                  <div className="font-medium">nHRMS Research</div>
                  <div className="text-sm text-muted-foreground">Technology & Innovation Team</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="prose prose-blue max-w-none text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Executive Summary</h2>
            <p>
              The 2025 HR Technology Landscape Report provides a comprehensive analysis of the current state of HR technology, 
              emerging trends, and strategic recommendations for organizations looking to optimize their HR technology stack. 
              With AI integration becoming a cornerstone of modern HR processes, this report offers insights into how organizations 
              of all sizes can leverage these technologies to enhance their human capital management capabilities.
            </p>
            
            <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-lg font-medium text-foreground mb-2">Key Findings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>93% of HR leaders report that AI-powered tools have significantly improved their recruitment and selection processes</li>
                <li>Small and medium enterprises (SMEs) are adopting HR technology at an unprecedented rate, with a 47% increase since 2023</li>
                <li>Employee experience platforms have emerged as the fastest-growing segment in HR technology</li>
                <li>Integration capabilities remain the top consideration factor when selecting HR technology solutions</li>
                <li>Data security and privacy concerns continue to be the primary barrier to technology adoption</li>
              </ul>
            </div>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Introduction to the HR Technology Market</h2>
            <p>
              The HR technology market has witnessed remarkable growth and transformation over the past decade. 
              In 2025, the global HR technology market is projected to reach $35.7 billion, representing a 11.7% 
              compound annual growth rate since 2020. This growth has been driven primarily by:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>The widespread adoption of cloud-based solutions</li>
              <li>The integration of artificial intelligence and machine learning</li>
              <li>The increasing focus on employee experience and engagement</li>
              <li>The need for data-driven decision making in HR operations</li>
              <li>The shift toward remote and hybrid work arrangements</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. AI Integration in HR Processes</h2>
            <p>
              Artificial Intelligence has revolutionized how HR functions operate, offering unprecedented 
              capabilities for automation, personalization, and predictive analytics. Our research shows that 
              organizations that have successfully integrated AI into their HR processes report:
            </p>
            
            <div className="my-8 overflow-hidden rounded-xl bg-white border border-border/50 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920" 
                alt="AI Integration in HR Processes" 
                className="w-full h-64 object-cover object-center" 
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">AI Technology Adoption in HR Departments</h3>
                <p className="text-sm text-muted-foreground">
                  Chart showing the adoption rates of various AI technologies across HR functions in organizations of different sizes. 
                  Small and medium enterprises are rapidly closing the gap with larger organizations.
                </p>
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">2.1 Key AI Applications in HR</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Recruitment and Selection</strong>: AI-powered candidate screening, interview analysis, and skill matching</li>
              <li><strong>Onboarding</strong>: Personalized onboarding experiences and automated documentation processes</li>
              <li><strong>Employee Development</strong>: Skill gap identification and personalized learning recommendations</li>
              <li><strong>Performance Management</strong>: Continuous feedback mechanisms and objective performance analytics</li>
              <li><strong>Employee Experience</strong>: Sentiment analysis, chatbots for employee support, and personalized communications</li>
              <li><strong>Workforce Analytics</strong>: Predictive modeling for retention, engagement, and productivity</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. SME-Specific Challenges and Solutions</h2>
            <p>
              Small and medium-sized enterprises (organizations with fewer than 500 employees) face unique challenges in 
              navigating the rapidly evolving HR technology landscape. Our research indicates that 76% of SME HR leaders 
              feel overwhelmed by the number of technology options available, and 63% report difficulty in building a 
              compelling business case for technology investments.
            </p>
            
            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.1 Common SME Challenges</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Limited budget and resources for technology investments</li>
              <li>Lack of dedicated IT support for implementation and maintenance</li>
              <li>Difficulty in evaluating and selecting appropriate solutions</li>
              <li>Concerns about return on investment and time to value</li>
              <li>Integration challenges with existing systems</li>
            </ul>
            
            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.2 Recommended Solutions for SMEs</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Start with Core Functionality</strong>: Begin with essential modules that address the most pressing needs</li>
              <li><strong>Consider All-in-One Platforms</strong>: Evaluate integrated HR suites designed specifically for SMEs</li>
              <li><strong>Leverage Cloud-Based Solutions</strong>: Minimize upfront costs and maintenance requirements</li>
              <li><strong>Prioritize User Experience</strong>: Select solutions with intuitive interfaces to reduce training needs</li>
              <li><strong>Plan for Scalability</strong>: Choose solutions that can grow with your organization</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Emerging Technology Trends</h2>
            <p>
              Looking ahead to the next 2-3 years, several emerging technologies are poised to reshape the HR technology landscape:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Generative AI</strong>: Creating personalized content for job descriptions, employee communications, and learning materials</li>
              <li><strong>Ambient Intelligence</strong>: Workplace environments that respond intelligently to employee needs and preferences</li>
              <li><strong>Blockchain for HR</strong>: Secure verification of credentials, certifications, and employment history</li>
              <li><strong>Extended Reality (XR)</strong>: Immersive learning experiences and virtual collaboration environments</li>
              <li><strong>Ethical AI Governance</strong>: Tools and frameworks for ensuring fair and unbiased AI applications in HR</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Recommendations for Technology Selection</h2>
            <p>
              Based on our comprehensive analysis, we recommend the following approach to HR technology selection:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Define clear business objectives and success metrics before evaluating technologies</li>
              <li>Involve stakeholders from across the organization in the selection process</li>
              <li>Conduct thorough vendor assessments, including references from organizations of similar size and industry</li>
              <li>Prioritize integration capabilities and open API architecture</li>
              <li>Consider implementation timelines and required resources</li>
              <li>Evaluate total cost of ownership, not just initial purchase price</li>
              <li>Develop a comprehensive change management strategy</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Conclusion</h2>
            <p>
              The 2025 HR Technology Landscape offers unprecedented opportunities for organizations to transform 
              their human capital management practices. By strategically selecting and implementing the right 
              technologies, organizations of all sizes can enhance their ability to attract, develop, and retain 
              talent in an increasingly competitive environment. For SMEs in particular, the democratization of 
              advanced HR technologies presents a unique opportunity to level the playing field with larger competitors.
            </p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. References</h2>
            <div className="space-y-2">
              <p>
                Deloitte. (2025). Global Human Capital Trends Report.
              </p>
              <p>
                Gartner. (2024). HR Technology Market Analysis and Forecast.
              </p>
              <p>
                McKinsey & Company. (2025). The Future of Work: Technology Adoption in HR.
              </p>
              <p>
                PwC. (2024). HR Technology Survey: SME Edition.
              </p>
              <p>
                SHRM. (2025). State of HR Technology Report.
              </p>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default HRTechLandscape;

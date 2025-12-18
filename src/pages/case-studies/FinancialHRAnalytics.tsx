
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialShareButtons from "@/components/SocialShareButtons";
import { ArrowLeft, Building, Users, TrendingUp, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinancialHRAnalytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="mb-8">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
          </Link>
        </div>
        
        <article className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="mr-3 bg-blue-100 p-3 rounded-full">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-sm font-medium text-blue-600">
                Financial Services • Analytics Implementation
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming HR Decision-Making with Advanced Analytics at Global Bank
            </h1>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Client</div>
                  <div className="font-medium">Fortune 100 Global Bank</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                  <div className="font-medium">January - September 2025</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Services</div>
                  <div className="font-medium">HR Analytics, Technology Implementation, Change Management</div>
                </div>
              </div>
            </div>
            
            <SocialShareButtons 
              title="Transforming HR Decision-Making with Advanced Analytics at Global Bank" 
              className="mt-6"
            />
          </div>
          
          <div className="prose prose-blue max-w-none text-muted-foreground mb-10">
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Challenge</h2>
            <p>
              A global financial institution with over 75,000 employees across 40 countries struggled with siloed HR data 
              systems and inconsistent reporting practices. The HR leadership team faced several critical challenges:
            </p>
            
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Inability to generate real-time workforce insights to support strategic decisions</li>
              <li>Fragmented data systems resulting in manual data consolidation and reporting errors</li>
              <li>Lack of predictive capabilities for talent planning and retention strategies</li>
              <li>Limited ability to quantify the ROI of HR initiatives and talent investments</li>
              <li>Compliance risks due to inconsistent global reporting standards</li>
            </ul>
            
            <p>
              The CHRO needed to transform the HR function from a primarily administrative department into a 
              strategic partner capable of delivering data-driven insights to business leaders.
            </p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Solution</h2>
            <p>
              nHRMS developed and implemented a comprehensive HR analytics transformation program with four key components:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <PieChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Integrated Data Architecture</h3>
                </div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Designed a centralized HR data lake architecture</li>
                  <li>Established automated ETL processes from 12 source systems</li>
                  <li>Implemented data quality monitoring and governance frameworks</li>
                  <li>Created standardized global data definitions and metrics</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Advanced Analytics Capabilities</h3>
                </div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Developed predictive models for attrition and performance</li>
                  <li>Created machine learning algorithms for talent matching</li>
                  <li>Built scenario planning tools for workforce optimization</li>
                  <li>Implemented real-time executive dashboards with KPIs</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">HR Analytics Team Development</h3>
                </div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Established a dedicated HR Analytics Center of Excellence</li>
                  <li>Created skill development pathways for HR business partners</li>
                  <li>Designed a comprehensive data literacy curriculum</li>
                  <li>Implemented analytics mentoring program with business leaders</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Building className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Strategic Integration</h3>
                </div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Aligned analytics strategy with business objectives</li>
                  <li>Integrated people analytics into executive decision processes</li>
                  <li>Developed ROI measurement frameworks for HR programs</li>
                  <li>Created self-service analytics tools for managers</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Implementation Approach</h2>
            <p>
              The transformation was delivered through a carefully sequenced 9-month implementation plan:
            </p>
            
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>
                <strong>Discovery & Assessment (Month 1-2):</strong> Conducted comprehensive analysis of existing 
                systems, data quality, reporting capabilities, and stakeholder needs
              </li>
              <li>
                <strong>Data Foundation (Month 2-4):</strong> Established data governance, integration architecture, 
                and data quality frameworks
              </li>
              <li>
                <strong>Technology Implementation (Month 3-6):</strong> Deployed analytics platform, dashboards, and 
                predictive modeling capabilities
              </li>
              <li>
                <strong>Capability Building (Month 4-7):</strong> Delivered training programs, established analytics COE, 
                and developed self-service capabilities
              </li>
              <li>
                <strong>Business Integration (Month 6-9):</strong> Embedded analytics insights into business processes 
                and decision frameworks
              </li>
            </ol>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Results</h2>
            <p>
              The HR Analytics transformation delivered significant quantitative and qualitative results:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Financial Impact</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>$14.2M annual savings from improved workforce planning</li>
                  <li>32% reduction in high-performer attrition ($9.3M savings)</li>
                  <li>41% improvement in talent acquisition efficiency</li>
                  <li>22% reduction in HR administrative costs</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Operational Improvements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>89% reduction in reporting time (from weeks to hours)</li>
                  <li>67% improvement in data accuracy and consistency</li>
                  <li>Predictive models with 83% accuracy for attrition risk</li>
                  <li>72% of managers actively using self-service analytics</li>
                </ul>
              </div>
            </div>
            
            <p>
              Beyond these metrics, the bank achieved significant strategic benefits:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>HR is now positioned as a strategic advisor with data-driven insights</li>
              <li>Executive decisions about talent are informed by predictive analytics</li>
              <li>Regulatory compliance reporting time reduced by 65%</li>
              <li>Enhanced ability to measure and optimize employee experience</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Client Testimonial</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
              <p className="italic">
                "The analytics transformation delivered by nHRMS has fundamentally changed how we make decisions about 
                our people. We've moved from intuition-based to evidence-based talent strategies, and the results have 
                been remarkable. Our executive team now has the insights they need to optimize our global workforce, 
                and we're seeing the impact in both financial performance and employee engagement."
              </p>
              <div className="mt-4 font-medium">
                — Chief Human Resources Officer, Global Financial Institution
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Looking Forward</h2>
            <p>
              Building on this successful implementation, the bank is now expanding its people analytics capabilities to include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Advanced organizational network analysis</li>
              <li>AI-driven skills mapping and career pathing</li>
              <li>Integrated workforce and financial planning</li>
              <li>Real-time culture and sentiment analysis</li>
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="text-sm text-muted-foreground mb-1">Services Provided</div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    HR Analytics
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Data Integration
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Predictive Modeling
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Capability Building
                  </span>
                </div>
              </div>
              <div>
                <Button asChild>
                  <Link to="/contact">
                    Request a Similar Solution
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default FinancialHRAnalytics;

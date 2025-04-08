
import { PenTool, Database, BrainCog, ArrowRight } from 'lucide-react';

export default function ResponsibilitiesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Responsibilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-4">
              <PenTool className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Research Design & Execution</h3>
                <p>Design and implement research methodologies, including surveys, interviews, and data analysis to address key questions in HR and organizational effectiveness.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-4">
              <Database className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                <p>Analyze quantitative and qualitative data using statistical methods and tools to extract meaningful insights and patterns related to workforce trends.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-4">
              <BrainCog className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Literature Review</h3>
                <p>Stay current with academic research and industry practices in HR, organizational psychology, and related fields to inform research initiatives.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-4">
              <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Reporting & Communication</h3>
                <p>Prepare research reports, white papers, and presentations to communicate findings to internal teams and clients in clear, actionable formats.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

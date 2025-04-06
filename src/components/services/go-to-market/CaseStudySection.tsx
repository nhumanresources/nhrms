
import { Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CaseStudySection() {
  return (
    <section className="py-20 bg-future-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto" data-animation="fade-in">
          <div className="bg-white rounded-xl p-10 shadow-xl relative overflow-hidden border border-future-200/30">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-future-100 to-neural-100 rounded-full -mt-40 -mr-40 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Case Study: HR Tech Platform Launch</h2>
                  <div className="flex items-center">
                    <Rocket className="h-5 w-5 text-future-700 mr-2" />
                    <span className="text-muted-foreground">SaaS Performance Management Platform</span>
                  </div>
                </div>
                <span className="text-sm font-medium bg-future-600/10 text-future-700 px-4 py-2 rounded-full mt-3 md:mt-0">Go-to-Market Success</span>
              </div>
              <p className="text-muted-foreground mb-8 text-lg">
                We developed and executed a comprehensive go-to-market strategy for a SaaS-based performance management platform, resulting in 150+ enterprise clients acquired within 18 months, 85% user adoption rates, and a 3x increase in average deal size through value-based pricing and packaging.
              </p>
              <Button variant="outline" className="group relative overflow-hidden border-future-600/30" asChild>
                <Link to="/case-studies/financial-hr-analytics" className="inline-flex items-center">
                  View Full Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-future-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

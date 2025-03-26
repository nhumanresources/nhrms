
import { Check, Users, Award, BarChart } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose nHRMS</h2>
          <p className="text-muted-foreground text-lg">
            What sets us apart as your strategic HR management partner
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Team</h3>
            <p className="text-muted-foreground mb-4">
              Our consultants bring decades of experience across industries and HR disciplines, ensuring practical, effective solutions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Former HR executives and specialists</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Industry-specific expertise</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Continuous professional development</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-background p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Methodology</h3>
            <p className="text-muted-foreground mb-4">
              Our structured approach combines best practices with tailored solutions for your unique organizational needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Data-driven approach</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Customized frameworks</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Continuous improvement model</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-background p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Measurable Results</h3>
            <p className="text-muted-foreground mb-4">
              We focus on delivering quantifiable outcomes that directly impact your business performance.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Clear success metrics</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">ROI-focused solutions</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Regular performance reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

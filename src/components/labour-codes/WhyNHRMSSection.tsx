import { Card } from '@/components/ui/card';
import { CheckCircle, Award, Users, Briefcase, TrendingUp, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Specialized Expertise',
    description: '15+ years specializing in Indian labour law compliance and implementation',
  },
  {
    icon: Users,
    title: 'Holistic Approach',
    description: 'Complete compliance solutions—from audit to implementation to ongoing support',
  },
  {
    icon: Briefcase,
    title: 'Industry Experience',
    description: 'Served 500+ organizations across manufacturing, IT, services, and startups',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: 'Zero penalty notices for clients during labour code transition period',
  },
  {
    icon: Shield,
    title: 'Technology-Enabled',
    description: 'HRMS platform designed for algorithm-driven inspection readiness',
  },
  {
    icon: CheckCircle,
    title: 'End-to-End Support',
    description: 'From registration consolidation to payroll restructuring to ongoing compliance',
  },
];

export default function WhyNHRMSSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">nHRMS</span> as Your Go-To Partner?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just consultants—we're your compliance transformation partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-background">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Comprehensive Approach</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4 text-primary">Assessment & Planning</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete compliance gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Workforce classification audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Registration consolidation roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Risk prioritization matrix</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">Implementation & Support</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">CTC restructuring and payroll migration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Digital HRMS implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Policy documentation and updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ongoing compliance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
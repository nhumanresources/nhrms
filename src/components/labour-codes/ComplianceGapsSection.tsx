import { AlertCircle, Users, FileText, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';

const gaps = [
  {
    icon: AlertCircle,
    title: 'Wage Structure Misclassification',
    description: 'The 50% wage definition rule changes how PF, gratuity, and overtime are calculated. Most pre-2020 CTC structures are non-compliant—even if total amount is correct.',
    color: 'text-red-500',
  },
  {
    icon: Users,
    title: 'Workforce Misclassification',
    description: 'Calling someone a "consultant" doesn\'t make them one. Fixed-term employees now get gratuity after 1 year. Gig workers need social security. Misclassification = liability.',
    color: 'text-orange-500',
  },
  {
    icon: FileText,
    title: 'Registration Chaos',
    description: 'You should have 1 registration. Most organizations have 6-8 active registrations—including for locations that no longer exist. Consolidation reveals years of compliance debt.',
    color: 'text-amber-500',
  },
  {
    icon: Database,
    title: 'Digital Unreadiness',
    description: 'Inspections are now algorithm-driven and web-based. If your HR runs on spreadsheets and WhatsApp, you\'re not inspection-ready. Manual records won\'t pass scrutiny.',
    color: 'text-purple-500',
  },
];

export default function ComplianceGapsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Hidden Compliance Gaps <span className="text-destructive">Most Organizations Miss</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't minor oversights—they're significant liabilities that surface during inspections
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {gaps.map((gap, index) => {
            const Icon = gap.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-destructive"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-background ${gap.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{gap.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{gap.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
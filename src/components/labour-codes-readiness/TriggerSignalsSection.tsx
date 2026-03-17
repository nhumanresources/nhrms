import { TrendingUp, MapPin, Users, ShieldAlert, Wallet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const triggers = [
  {
    icon: TrendingUp,
    title: 'Recently Raised Funding or Restructuring',
    description: 'Investor scrutiny on compliance gaps intensifies post-funding. Restructuring without code-aligned policies creates immediate legal exposure.',
  },
  {
    icon: MapPin,
    title: 'Multi-State Operations',
    description: 'State-level variation in Labour Code implementation means a one-size-fits-all policy will fail. Each state has different notification timelines and rules.',
  },
  {
    icon: Users,
    title: 'Heavy Use of Contractors, Fixed-Term, or Gig Workers',
    description: 'The new Codes redefine worker classification. Misclassification exposes you to retrospective PF, ESIC, and gratuity liabilities.',
  },
  {
    icon: ShieldAlert,
    title: 'No Dedicated HR Compliance Function',
    description: "Without a specialised compliance team, you're relying on general HR to interpret complex legal and financial changes — a risky proposition.",
  },
  {
    icon: Wallet,
    title: 'Payroll-Heavy Cost Structure',
    description: 'The redefinition of "wages" directly impacts your PF, gratuity, and bonus calculations. Wage restructuring has significant P&L implications.',
  },
];

export default function TriggerSignalsSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Does This Sound Like You?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If any of these apply to your organization, the new Labour Codes represent a material risk you can't afford to ignore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {triggers.map((trigger) => (
            <Card
              key={trigger.title}
              className="border-border/50 hover:border-secondary/40 transition-colors duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <trigger.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{trigger.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{trigger.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

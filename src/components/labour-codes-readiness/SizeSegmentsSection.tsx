import { TrendingUp, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const segments = [
  {
    icon: TrendingUp,
    range: '75 – 150 Employees',
    label: 'Growing Fast, Starting to Formalise',
    description:
      'You're scaling quickly and beginning to formalise HR policies. The new Labour Codes will fundamentally change how you structure wages, contracts, and social security — getting it right now prevents costly corrections later.',
    risks: [
      'Ad-hoc contracts that don't meet new standing order requirements',
      'Wage structures that create unexpected PF and gratuity liabilities',
      'No compliance calendar or statutory tracking in place',
    ],
  },
  {
    icon: Building2,
    range: '250 – 500 Employees',
    label: 'Complex Enough, No Dedicated Team',
    description:
      'Your workforce is complex enough to have real exposure — multiple worker categories, multi-state operations, significant payroll costs — but you likely don't have a dedicated compliance team to manage the transition.',
    risks: [
      'Mixed workforce (permanent, contract, fixed-term, gig) requiring reclassification',
      'Multi-state operations with varying implementation timelines',
      'Payroll costs large enough that wage restructuring has material P&L impact',
    ],
  },
];

export default function SizeSegmentsSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Who We Serve Best
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            SMEs with 50–500 employees — with particular sweet spots at these two segments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {segments.map((seg) => (
            <Card key={seg.range} className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                  <seg.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-secondary mb-1">{seg.range}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{seg.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{seg.description}</p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Key Risks</div>
                  {seg.risks.map((risk, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                      {risk}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

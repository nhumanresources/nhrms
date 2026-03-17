import { Check, X, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const comparisons = [
  {
    name: 'Pure HR Consultancy',
    highlight: false,
    strengths: ['HR policy design', 'Workforce planning', 'Training delivery'],
    weaknesses: ['Legal compliance gaps', 'No financial modelling', 'Weak on actuarial impact'],
  },
  {
    name: 'Law Firm',
    highlight: false,
    strengths: ['Legal compliance', 'Contract drafting', 'Dispute resolution'],
    weaknesses: ['No HR implementation', 'No benefits restructuring', 'No payroll redesign'],
  },
  {
    name: 'nHRMS',
    highlight: true,
    strengths: [
      'Deep legal expertise across all 4 Codes',
      'CTC restructuring & actuarial valuations',
      'Full HR implementation & training',
      'Compliance calendar & tracking',
      'Digital HR transition advisory',
      'Cost impact modelling',
    ],
    weaknesses: [],
  },
];

export default function DifferentiatorSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Legal + Finance + HR — Under One Roof
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Most firms offering Labour Code advisory are either pure-play HR consultancies or law firms.
            nHRMS sits at the intersection — which is precisely what this transition demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {comparisons.map((item) => (
            <Card
              key={item.name}
              className={
                item.highlight
                  ? 'border-2 border-primary shadow-xl relative ring-2 ring-primary/20'
                  : 'border-border/50'
              }
            >
              {item.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Star size={12} /> Recommended
                  </span>
                </div>
              )}
              <CardHeader className="pb-3">
                <CardTitle className={`text-center text-lg ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {item.strengths.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{s}</span>
                  </div>
                ))}
                {item.weaknesses.map((w) => (
                  <div key={w} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{w}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

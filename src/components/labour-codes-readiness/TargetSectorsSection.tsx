import { Factory, ShoppingBag, Utensils, Truck, HardHat, Monitor, HeartPulse } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const sectors = [
  {
    icon: Factory,
    name: 'Manufacturing',
    risk: 'Wage restructuring and standing order compliance under OSH&WC Code',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & Distribution',
    risk: 'Contract labour reclassification and multi-state PF/ESIC exposure',
  },
  {
    icon: Utensils,
    name: 'Hospitality',
    risk: 'Fixed-term worker regulations and gratuity recalculation on service charges',
  },
  {
    icon: Truck,
    name: 'Logistics',
    risk: 'Gig/platform worker classification and social security contributions',
  },
  {
    icon: HardHat,
    name: 'Construction',
    risk: 'Migrant worker welfare, safety compliance, and BOCW cess transition',
  },
  {
    icon: Monitor,
    name: 'IT Services',
    risk: 'Contractor and gig worker misclassification driving retrospective liabilities',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    risk: 'Support staff wage definition changes and overtime compliance',
  },
];

export default function TargetSectorsSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sectors with Highest Urgency
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These industries face the most immediate compliance risk under the new Labour Codes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {sectors.map((sector) => (
            <Card key={sector.name} className="border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <sector.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{sector.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{sector.risk}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

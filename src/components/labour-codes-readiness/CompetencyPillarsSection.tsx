import { Scale, Calculator, Briefcase } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const pillars = [
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal Competencies',
    items: [
      'Deep working knowledge of all four Labour Codes: Code on Wages 2019, Industrial Relations Code 2020, Code on Social Security 2020, and OSH&WC Code 2020',
      'Understanding of state-level notifications and variation in implementation',
      'Fixed-term employment contracting and gig/platform worker classification',
      'Gratuity, PF, ESIC, and bonus applicability under the new definitions',
      'Drafting of standing orders, employment contracts, and service rules compliant with the new framework',
      'Dispute resolution and grievance mechanism design under the IR Code',
    ],
  },
  {
    id: 'financial',
    icon: Calculator,
    title: 'Financial & Actuarial Competencies',
    items: [
      'Wage structure analysis — CTC restructuring to optimise the definition of "wages" (direct PF/gratuity/bonus cost implications)',
      'Actuarial valuation of gratuity and leave liabilities under AS 15 / Ind AS 19',
      'Cost impact modelling of compliance scenarios',
      'Social security contribution mapping — employer cost projections under revised PF and ESIC bases',
      'Bonus and ex-gratia liability assessment',
    ],
  },
  {
    id: 'hr',
    icon: Briefcase,
    title: 'HR & Implementation Competencies',
    items: [
      'Workforce classification and headcount mapping (permanent, fixed-term, contract, gig, migrant)',
      'HR policy drafting aligned with new statutory requirements',
      'Payroll process redesign and documentation standards',
      'Training delivery — board level, HR team level, and employee level',
      'Compliance calendar development and statutory tracker management',
      'Digital HR transition advisory (HRMS alignment with new compliance requirements)',
    ],
  },
];

export default function CompetencyPillarsSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What We Bring to the Table
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Organised across three pillars — the capabilities your organisation needs to navigate this transition with confidence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="legal" className="space-y-4">
            {pillars.map((pillar) => (
              <AccordionItem
                key={pillar.id}
                value={pillar.id}
                className="border border-border/50 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <pillar.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">{pillar.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pb-2">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

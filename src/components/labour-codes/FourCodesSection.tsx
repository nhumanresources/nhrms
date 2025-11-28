import { Card } from '@/components/ui/card';
import { DollarSign, Users, Shield, HeartPulse } from 'lucide-react';

const codes = [
  {
    icon: DollarSign,
    title: 'Code on Wages, 2019',
    description: 'Consolidates 4 laws on wages. Introduces universal minimum wage, standardizes wage definitions, and mandates timely payment across all sectors.',
    laws: ['Payment of Wages Act, 1936', 'Minimum Wages Act, 1948', 'Payment of Bonus Act, 1965', 'Equal Remuneration Act, 1976'],
    keyChanges: [
      '50% of total compensation must be basic wages',
      'Universal floor wage across India',
      'Salary payment by 7th of every month',
      'Single wage definition for all statutory calculations',
    ],
  },
  {
    icon: Users,
    title: 'Industrial Relations Code, 2020',
    description: 'Consolidates 3 laws on industrial relations. Simplifies compliance for hiring, retrenchment, and dispute resolution.',
    laws: ['Trade Unions Act, 1926', 'Industrial Employment Act, 1946', 'Industrial Disputes Act, 1947'],
    keyChanges: [
      'Standing orders mandatory for 300+ workers (was 100)',
      'Retrenchment approval for 300+ workers (was 100)',
      'Fixed-term employment with equal benefits',
      'Single registration for trade unions',
    ],
  },
  {
    icon: Shield,
    title: 'Social Security Code, 2020',
    description: 'Consolidates 9 laws on social security. Extends coverage to gig and platform workers.',
    laws: ['EPF Act, 1952', 'ESI Act, 1948', 'Gratuity Act, 1972', 'Maternity Benefit Act, 1961', 'Employees Compensation Act, 1923', 'Building Workers Act, 1996', 'Cine Workers Act, 1981', 'Unorganized Workers Act, 2008', 'Cess Act, 1996'],
    keyChanges: [
      'Gratuity after 1 year (was 5 years)',
      'Social security for gig and platform workers',
      'Universal Account Number for portability',
      'EPF coverage expanded to all establishments',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Occupational Safety, Health & Working Conditions Code, 2020',
    description: 'Consolidates 13 laws on safety and working conditions. Strengthens safety norms and introduces annual health checkups.',
    laws: ['Factories Act, 1948', 'Mines Act, 1952', 'Dock Workers Act, 1986', 'Contract Labour Act, 1970', 'Plantation Act, 1951', 'Motor Transport Workers Act, 1961', 'Sales Promotion Employees Act, 1976', 'Building Workers Act, 1996', 'Beedi Workers Act, 1966', 'Cine Workers Act, 1981', 'Inter-State Migrant Workers Act, 1979', 'Working Journalists Act, 1955', 'Shops and Establishments Acts'],
    keyChanges: [
      'Annual health examinations mandatory',
      'Unified license for all locations',
      'Applies to establishments with 20+ workers (was 10-20)',
      'Enhanced safety standards for hazardous industries',
    ],
  },
];

export default function FourCodesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Understanding the <span className="text-primary">Four Labour Codes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            29 central labour laws have been rationalized and amalgamated into 4 comprehensive codes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {codes.map((code, index) => {
            const Icon = code.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{code.title}</h3>
                    <p className="text-muted-foreground">{code.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">Laws Consolidated ({code.laws.length})</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {code.laws.map((law, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{law}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">Key Changes</h4>
                  <ul className="space-y-2">
                    {code.keyChanges.map((change, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1 font-bold">→</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
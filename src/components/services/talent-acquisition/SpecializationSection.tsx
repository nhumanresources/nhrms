
import { Card, CardContent } from '@/components/ui/card';

export default function SpecializationSection() {
  const industries = [
    { name: 'Sales', description: 'Business development, account management, sales leadership' },
    { name: 'Marketing', description: 'Brand management, digital marketing, market research' },
    { name: 'Human Resources', description: 'HR leadership, talent management, compensation specialists' },
    { name: 'Finance', description: 'Financial analysis, accounting, financial planning' },
    { name: 'Technology', description: 'Software development, IT infrastructure, data science' }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Functional Areas We Specialize In</h2>
          <p className="text-muted-foreground">
            Our recruiters bring deep expertise across key business functions to build high-performing teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="border border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">{industry.name}</h3>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Executive
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Mid-level
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Specialized
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useMemo } from 'react';
import { 
  FileText, CheckSquare, Calculator, BookOpen, Image, Video, 
  Download, Lock, ArrowRight 
} from 'lucide-react';
import SEO from '@/components/SEO';
import AcademyNavbar from '@/components/academy/AcademyNavbar';
import AcademyFooter from '@/components/academy/AcademyFooter';
import NewsletterSignup from '@/components/academy/NewsletterSignup';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { 
  resources, 
  Resource, 
  resourceTypeLabels, 
  getFreeResources,
  getPremiumResources 
} from '@/data/academy/resources';
import { topicLabels, topicColors } from '@/data/academy/courses';

const typeIcons: Record<Resource['type'], typeof FileText> = {
  template: FileText,
  checklist: CheckSquare,
  calculator: Calculator,
  whitepaper: BookOpen,
  infographic: Image,
  webinar: Video,
};

const resourceTypes: Resource['type'][] = [
  'template',
  'checklist',
  'calculator',
  'whitepaper',
  'infographic',
  'webinar',
];

export default function Resources() {
  const [selectedType, setSelectedType] = useState<Resource['type'] | 'all'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredResources = useMemo(() => {
    if (selectedType === 'all') return resources;
    return resources.filter((resource) => resource.type === selectedType);
  }, [selectedType]);

  const freeResources = getFreeResources();
  const premiumResources = getPremiumResources();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Free HR Resources | nHRMS Academy"
        description="Download free HR templates, checklists, calculators, and whitepapers. Practical resources to help you build better HR systems."
        keywords="HR templates, HR checklists, payroll calculator, HR policy templates, compliance checklist"
        canonicalUrl="https://academy.nhrms.com/resources"
      />

      <AcademyNavbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Free Resources
              </h1>
              <p className="text-lg text-muted-foreground">
                Download practical templates, checklists, calculators, and guides 
                to help you build better HR systems. Most resources are completely free.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{resources.length}+</div>
                  <div className="text-sm text-muted-foreground">Resources</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Download className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{freeResources.length}</div>
                  <div className="text-sm text-muted-foreground">Free Downloads</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Types */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Type Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedType('all')}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  selectedType === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                )}
              >
                All Resources
              </button>
              {resourceTypes.map((type) => {
                const Icon = typeIcons[type];
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={cn(
                      'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                      selectedType === type
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {resourceTypeLabels[type]}s
                  </button>
                );
              })}
            </div>

            {/* Results */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => {
                const Icon = typeIcons[resource.type];

                return (
                  <Card
                    key={resource.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="outline"
                              className={cn('text-xs', topicColors[resource.topic])}
                            >
                              {topicLabels[resource.topic]}
                            </Badge>
                            {resource.premium && (
                              <Badge variant="secondary" className="text-xs">
                                <Lock className="h-3 w-3 mr-1" />
                                Premium
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {resource.description}
                          </p>
                          <Button
                            size="sm"
                            variant={resource.premium ? 'outline' : 'default'}
                            className="w-full"
                          >
                            {resource.premium ? (
                              <>
                                <Lock className="h-3 w-3 mr-2" />
                                Get Access
                              </>
                            ) : (
                              <>
                                <Download className="h-3 w-3 mr-2" />
                                Download Free
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="py-16 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Custom Resources?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team can create customized templates, policies, and training materials 
                tailored to your organization's specific needs.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">
                  Talk to Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSignup />
      </main>

      <AcademyFooter />
    </div>
  );
}

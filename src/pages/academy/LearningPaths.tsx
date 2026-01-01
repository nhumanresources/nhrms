import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Target, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import AcademyNavbar from '@/components/academy/AcademyNavbar';
import AcademyFooter from '@/components/academy/AcademyFooter';
import LearningPathCard from '@/components/academy/LearningPathCard';
import NewsletterSignup from '@/components/academy/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { learningPaths, LearningPath } from '@/data/academy/learningPaths';

const levelColors: Record<LearningPath['level'], string> = {
  beginner: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
  intermediate: 'bg-amber-500/10 text-amber-600 border-amber-200',
  advanced: 'bg-rose-500/10 text-rose-600 border-rose-200',
};

const levelLabels: Record<LearningPath['level'], string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export default function LearningPaths() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Learning Paths | nHRMS Academy"
        description="Follow curated learning journeys designed to take you from beginner to expert in HR systems. Structured paths for founders, HR managers, and compliance officers."
        keywords="HR learning path, HR certification, HR training program, HR career development"
        canonicalUrl="https://academy.nhrms.com/learning-paths"
      />

      <AcademyNavbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Learning Paths
              </h1>
              <p className="text-lg text-muted-foreground">
                Curated learning journeys designed to take you from beginner to expert. 
                Follow a structured path and master HR systems step by step.
              </p>
            </div>
          </div>
        </section>

        {/* Path Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {learningPaths.map((path) => (
                <LearningPathCard key={path.id} path={path} />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Path Sections */}
        {learningPaths.map((path, pathIndex) => (
          <section
            key={path.id}
            id={path.id}
            className={cn(
              'py-16 scroll-mt-24',
              pathIndex % 2 === 0 ? 'bg-muted/30' : 'bg-background'
            )}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Path Info */}
                <div>
                  <div className="sticky top-24">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge
                        variant="outline"
                        className={cn('text-xs font-medium', levelColors[path.level])}
                      >
                        {levelLabels[path.level]}
                      </Badge>
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {path.title}
                    </h2>

                    <p className="text-muted-foreground mb-6">
                      {path.description}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{path.moduleCount} modules</span>
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="bg-background rounded-xl p-5 border border-border/50 mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-foreground">What You'll Achieve</span>
                      </div>
                      <ul className="space-y-3">
                        {path.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Who This Path Is For</h4>
                      <ul className="space-y-2">
                        {path.targetAudience.map((audience, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span>{audience}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild>
                      <Link to={`/academy/courses/${path.modules[0]?.courseId}`}>
                        Start This Path
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Modules */}
                <div className="lg:col-span-2">
                  <h3 className="font-semibold text-foreground mb-6">
                    Path Curriculum ({path.moduleCount} modules)
                  </h3>

                  <div className="space-y-4">
                    {path.modules.map((module, index) => (
                      <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <span className="text-sm font-semibold text-primary">
                                {module.order}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-foreground">
                                  {module.title}
                                </h4>
                                <span className="text-xs text-muted-foreground">
                                  {module.duration}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {module.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Newsletter */}
        <NewsletterSignup />
      </main>

      <AcademyFooter />
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight, Target, BarChart2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LearningPath } from '@/data/academy/learningPaths';

interface LearningPathCardProps {
  path: LearningPath;
  variant?: 'default' | 'featured';
}

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

export default function LearningPathCard({ path, variant = 'default' }: LearningPathCardProps) {
  if (variant === 'featured') {
    return (
      <Card className="group relative overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300">
        {/* Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className={cn('text-xs font-medium', levelColors[path.level])}>
                  {levelLabels[path.level]}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {path.moduleCount} modules
                </span>
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {path.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {path.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{path.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  <span>{path.moduleCount} modules</span>
                </div>
              </div>

              <Button asChild>
                <Link to={`/academy/learning-paths#${path.id}`}>
                  Start This Path
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right Content - Outcomes */}
            <div className="md:w-72 shrink-0">
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">What You'll Learn</span>
                </div>
                <ul className="space-y-2">
                  {path.outcomes.slice(0, 3).map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Link to={`/academy/learning-paths#${path.id}`}>
      <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
        {/* Progress Bar Placeholder */}
        <div className="h-1 bg-muted">
          <div className="h-full w-0 bg-gradient-to-r from-primary to-secondary transition-all" />
        </div>

        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className={cn('text-xs font-medium', levelColors[path.level])}>
              {levelLabels[path.level]}
            </Badge>
          </div>

          <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
            {path.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {path.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{path.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-3.5 w-3.5" />
                <span>{path.moduleCount}</span>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

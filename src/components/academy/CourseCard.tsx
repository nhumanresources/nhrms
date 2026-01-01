import { Link } from 'react-router-dom';
import { Clock, BarChart2, ArrowRight, FileText, Video, Radio, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Course, topicLabels, topicColors, levelLabels, formatLabels } from '@/data/academy/courses';

interface CourseCardProps {
  course: Course;
  variant?: 'default' | 'compact';
}

const formatIcons: Record<Course['format'], typeof FileText> = {
  video: Video,
  article: FileText,
  webinar: Radio,
  guide: BookOpen,
};

export default function CourseCard({ course, variant = 'default' }: CourseCardProps) {
  const FormatIcon = formatIcons[course.format];

  if (variant === 'compact') {
    return (
      <Link to={`/academy/courses/${course.id}`}>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden h-full">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FormatIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>{levelLabels[course.level]}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/academy/courses/${course.id}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden h-full">
        {/* Header with Topic Badge */}
        <div className="p-4 pb-0">
          <div className="flex items-center justify-between mb-3">
            <Badge
              variant="outline"
              className={cn('text-xs font-medium', topicColors[course.topic])}
            >
              {topicLabels[course.topic]}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <FormatIcon className="h-3.5 w-3.5" />
              <span>{formatLabels[course.format]}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-4 pt-0">
          {/* Title */}
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 min-h-[2.5rem]">
            {course.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <BarChart2 className="h-4 w-4" />
                <span>{levelLabels[course.level]}</span>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

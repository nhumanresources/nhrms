import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Layers, Pencil, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LMSCourse } from '@/types/lms';

const difficultyColors = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-amber-100 text-amber-700',
  advanced: 'bg-red-100 text-red-700',
};

const statusColors = {
  draft: 'bg-gray-100 text-gray-600',
  published: 'bg-blue-100 text-blue-700',
  archived: 'bg-orange-100 text-orange-700',
};

interface Props {
  course: LMSCourse;
  variant?: 'author' | 'student';
  progress?: number;
  onDelete?: (id: string) => void;
}

export default function LMSCourseCard({ course, variant = 'student', progress, onDelete }: Props) {
  const lessonCount = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow group">
      <div className="h-36 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
        <BookOpen className="h-12 w-12 text-primary/40" />
        <div className="absolute top-3 right-3 flex gap-1.5">
          <Badge className={cn('text-xs', difficultyColors[course.difficulty])}>
            {course.difficulty}
          </Badge>
          {variant === 'author' && (
            <Badge className={cn('text-xs', statusColors[course.status])}>
              {course.status}
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{course.description}</p>

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Layers className="h-3.5 w-3.5" />
            {course.modules.length} modules
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {lessonCount} lessons
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {course.estimatedDuration}
          </span>
        </div>

        {typeof progress === 'number' && (
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">Progress</span>
              <span className="font-medium text-primary">{progress}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="flex gap-2">
          {variant === 'author' ? (
            <>
              <Button asChild size="sm" className="flex-1">
                <Link to={`/lms/builder/${course.id}`}>
                  <Pencil className="h-3.5 w-3.5 mr-1" />
                  Edit
                </Link>
              </Button>
              {onDelete && (
                <Button size="sm" variant="outline" onClick={() => onDelete(course.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              )}
            </>
          ) : (
            <Button asChild size="sm" className="w-full">
              <Link to={`/lms/course/${course.id}`}>
                {typeof progress === 'number' && progress > 0 ? 'Continue Learning' : 'Start Course'}
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

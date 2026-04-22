import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLMS } from '@/contexts/LMSContext';
import LMSLayout from '@/components/lms/LMSLayout';
import LMSCourseCard from '@/components/lms/LMSCourseCard';

const categories = [
  'All', 'Recruiting & Talent', 'HR Management', 'Payroll & Compensation',
  'Compliance', 'HR Technology', 'Leadership', 'Employee Experience',
  'Learning & Development', 'Organizational Design', 'General',
];

export default function BrowseCourses() {
  const { user } = useAuth();
  const { getPublishedCourses, getEnrollment } = useLMS();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('all');

  const published = getPublishedCourses();
  const filtered = published.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase())
      || c.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || c.category === category;
    const matchDifficulty = difficulty === 'all' || c.difficulty === difficulty;
    return matchSearch && matchCategory && matchDifficulty;
  });

  return (
    <LMSLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Browse Courses</h2>
          <p className="text-sm text-gray-500 mt-0.5">{published.length} courses available</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="pl-9"
            />
          </div>
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Badge
              key={cat}
              variant={category === cat ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 mb-1">No courses found</p>
            <p className="text-sm text-gray-400">
              {published.length === 0
                ? 'No published courses yet. Create one in the Course Builder!'
                : 'Try adjusting your search or filters.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(course => {
              const enrollment = getEnrollment(course.id, user?.id || '');
              return (
                <LMSCourseCard
                  key={course.id}
                  course={course}
                  variant="student"
                  progress={enrollment?.progress}
                />
              );
            })}
          </div>
        )}
      </div>
    </LMSLayout>
  );
}

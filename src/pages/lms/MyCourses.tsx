import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Search } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLMS } from '@/contexts/LMSContext';
import { useToast } from '@/components/ui/use-toast';
import LMSLayout from '@/components/lms/LMSLayout';
import LMSCourseCard from '@/components/lms/LMSCourseCard';

export default function MyCourses() {
  const { user } = useAuth();
  const { getMyCourses, deleteCourse } = useLMS();
  const { toast } = useToast();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const myCourses = getMyCourses(user?.id || '');
  const filtered = myCourses.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const handleDelete = (courseId: string) => {
    deleteCourse(courseId);
    toast({ title: 'Course Deleted', description: 'The course has been removed.' });
  };

  return (
    <LMSLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
            <p className="text-sm text-gray-500 mt-0.5">{myCourses.length} courses created</p>
          </div>
          <Button asChild>
            <Link to="/lms/builder">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Course
            </Link>
          </Button>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="draft">Drafts</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 mb-4">
              {search || statusFilter !== 'all' ? 'No courses match your filters.' : 'No courses yet. Create your first!'}
            </p>
            {!search && statusFilter === 'all' && (
              <Button asChild>
                <Link to="/lms/builder">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Course
                </Link>
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(course => (
              <LMSCourseCard
                key={course.id}
                course={course}
                variant="author"
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </LMSLayout>
  );
}

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen, PlusCircle, GraduationCap, BarChart3,
  Clock, TrendingUp, Bot, ArrowRight,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLMS } from '@/contexts/LMSContext';
import LMSLayout from '@/components/lms/LMSLayout';
import LMSCourseCard from '@/components/lms/LMSCourseCard';

export default function LMSDashboard() {
  const { user } = useAuth();
  const { courses, enrollments, getMyCourses } = useLMS();

  const myCourses = getMyCourses(user?.id || '');
  const myEnrollments = enrollments.filter(e => e.userId === user?.id);
  const publishedCount = myCourses.filter(c => c.status === 'published').length;
  const draftCount = myCourses.filter(c => c.status === 'draft').length;
  const avgProgress = myEnrollments.length > 0
    ? Math.round(myEnrollments.reduce((sum, e) => sum + e.progress, 0) / myEnrollments.length)
    : 0;

  const recentEnrollments = myEnrollments
    .sort((a, b) => b.enrolledAt.localeCompare(a.enrolledAt))
    .slice(0, 3);

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-primary/10 via-violet-500/10 to-primary/5 rounded-xl p-6 border border-primary/10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Welcome to nHRMS LMS
              </h2>
              <p className="text-gray-600 mb-4">
                Build courses with Claude AI, manage content, and track learner progress.
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <Link to="/lms/builder">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create Course
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/lms/browse">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Browse Courses
                  </Link>
                </Button>
              </div>
            </div>
            <Bot className="h-16 w-16 text-primary/20 hidden md:block" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={<BookOpen className="h-5 w-5 text-blue-500" />} label="My Courses" value={String(myCourses.length)} />
          <StatCard icon={<TrendingUp className="h-5 w-5 text-green-500" />} label="Published" value={String(publishedCount)} />
          <StatCard icon={<Clock className="h-5 w-5 text-amber-500" />} label="Drafts" value={String(draftCount)} />
          <StatCard icon={<BarChart3 className="h-5 w-5 text-violet-500" />} label="Avg Progress" value={`${avgProgress}%`} />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My authored courses */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">My Created Courses</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/lms/courses">
                    View All <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </Button>
              </div>
              <CardDescription>Courses you've built</CardDescription>
            </CardHeader>
            <CardContent>
              {myCourses.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 mb-3">No courses yet</p>
                  <Button size="sm" asChild>
                    <Link to="/lms/builder">
                      <PlusCircle className="h-3.5 w-3.5 mr-1" />
                      Create Your First Course
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {myCourses.slice(0, 4).map(course => (
                    <Link
                      key={course.id}
                      to={`/lms/builder/${course.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{course.title}</p>
                        <p className="text-xs text-gray-400">
                          {course.modules.length} modules &middot; {course.status}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Learning progress */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">My Learning</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/lms/browse">
                    Browse <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </Button>
              </div>
              <CardDescription>Courses you're taking</CardDescription>
            </CardHeader>
            <CardContent>
              {recentEnrollments.length === 0 ? (
                <div className="text-center py-8">
                  <GraduationCap className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 mb-3">Not enrolled in any courses</p>
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/lms/browse">Browse Courses</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentEnrollments.map(enrollment => {
                    const course = courses.find(c => c.id === enrollment.courseId);
                    if (!course) return null;
                    return (
                      <Link
                        key={enrollment.courseId}
                        to={`/lms/course/${enrollment.courseId}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{course.title}</p>
                          <Progress value={enrollment.progress} className="h-1.5 mt-1.5" />
                        </div>
                        <span className="text-xs font-medium text-primary">{enrollment.progress}%</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick start with Claude */}
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Build Courses with Claude</h3>
                <p className="text-sm text-gray-500">
                  Use AI to generate course outlines, write lesson content, create quizzes, and improve your educational materials.
                </p>
              </div>
              <Button asChild>
                <Link to="/lms/builder">
                  Get Started <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LMSLayout>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-xs text-gray-500">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

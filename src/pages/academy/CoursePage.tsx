import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Clock, BarChart2, ArrowLeft, ArrowRight, CheckCircle, 
  Users, BookOpen, Video, FileText, Radio 
} from 'lucide-react';
import SEO from '@/components/SEO';
import AcademyNavbar from '@/components/academy/AcademyNavbar';
import AcademyFooter from '@/components/academy/AcademyFooter';
import CourseCard from '@/components/academy/CourseCard';
import NewsletterSignup from '@/components/academy/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { 
  getCourseById, 
  getRelatedCourses, 
  topicLabels, 
  topicColors, 
  levelLabels,
  formatLabels,
  Course 
} from '@/data/academy/courses';

const formatIcons: Record<Course['format'], typeof Video> = {
  video: Video,
  article: FileText,
  webinar: Radio,
  guide: BookOpen,
};

export default function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = getCourseById(courseId || '');
  const relatedCourses = getRelatedCourses(courseId || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <AcademyNavbar />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The course you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/academy/courses">Browse All Courses</Link>
            </Button>
          </div>
        </main>
        <AcademyFooter />
      </div>
    );
  }

  const FormatIcon = formatIcons[course.format];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "nHRMS Academy"
    },
    "educationalLevel": levelLabels[course.level],
    "timeRequired": course.duration
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={`${course.title} | nHRMS Academy`}
        description={course.description}
        keywords={`${topicLabels[course.topic]}, HR course, ${course.title}`}
        canonicalUrl={`https://academy.nhrms.com/courses/${course.id}`}
        structuredData={structuredData}
      />

      <AcademyNavbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className={cn('text-xs font-medium', topicColors[course.topic])}
                  >
                    {topicLabels[course.topic]}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <FormatIcon className="h-4 w-4" />
                    <span>{formatLabels[course.format]}</span>
                  </div>
                </div>

                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {course.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {course.longDescription}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4" />
                    <span>{levelLabels[course.level]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.modules.length} modules</span>
                  </div>
                </div>
              </div>

              {/* Sidebar CTA */}
              <div>
                <Card className="sticky top-24 border-border/50 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-foreground">Free</span>
                      <p className="text-sm text-muted-foreground">No payment required</p>
                    </div>

                    <Button className="w-full mb-4" size="lg">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Access all course materials instantly
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Learning Objectives */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    What You'll Learn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.learningObjectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Modules */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Course Content
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {course.modules.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-4 text-left">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary shrink-0">
                              {index + 1}
                            </span>
                            <div>
                              <span className="font-medium text-foreground">
                                {module.title}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {module.duration}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-12">
                          <p className="text-muted-foreground">{module.description}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Target Audience */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Who This Course Is For
                  </h2>
                  <div className="space-y-3">
                    {course.targetAudience.map((audience, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{audience}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Instructor */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Instructor</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{course.instructor}</p>
                        <p className="text-sm text-muted-foreground">nHRMS</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <NewsletterSignup variant="card" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <section className="py-12 bg-muted/30 border-t border-border/50">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                Related Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedCourses.map((relatedCourse) => (
                  <CourseCard key={relatedCourse.id} course={relatedCourse} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <AcademyFooter />
    </div>
  );
}

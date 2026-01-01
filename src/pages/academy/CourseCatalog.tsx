import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '@/components/SEO';
import AcademyNavbar from '@/components/academy/AcademyNavbar';
import AcademyFooter from '@/components/academy/AcademyFooter';
import CourseCard from '@/components/academy/CourseCard';
import TopicFilter from '@/components/academy/TopicFilter';
import NewsletterSignup from '@/components/academy/NewsletterSignup';
import { courses, Course } from '@/data/academy/courses';

export default function CourseCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTopic = (searchParams.get('topic') as Course['topic'] | 'all') || 'all';
  
  const [selectedTopic, setSelectedTopic] = useState<Course['topic'] | 'all'>(initialTopic);
  const [selectedLevel, setSelectedLevel] = useState<Course['level'] | 'all'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const topicParam = searchParams.get('topic') as Course['topic'] | null;
    if (topicParam) {
      setSelectedTopic(topicParam);
    }
  }, [searchParams]);

  const handleTopicChange = (topic: Course['topic'] | 'all') => {
    setSelectedTopic(topic);
    if (topic === 'all') {
      searchParams.delete('topic');
    } else {
      searchParams.set('topic', topic);
    }
    setSearchParams(searchParams);
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesTopic = selectedTopic === 'all' || course.topic === selectedTopic;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      return matchesTopic && matchesLevel;
    });
  }, [selectedTopic, selectedLevel]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Course Catalog | nHRMS Academy"
        description="Browse our comprehensive catalog of free HR courses covering recruiting, HR management, payroll, compliance, and HR technology."
        keywords="HR courses, free HR training, recruiting course, payroll training, compliance course, HR technology training"
        canonicalUrl="https://academy.nhrms.com/courses"
      />

      <AcademyNavbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Course Catalog
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore {courses.length}+ free courses designed to help you master 
                HR systems. Filter by topic and level to find what you need.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Courses */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="mb-8">
              <TopicFilter
                selectedTopic={selectedTopic}
                onTopicChange={handleTopicChange}
                selectedLevel={selectedLevel}
                onLevelChange={setSelectedLevel}
              />
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  No courses found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedTopic('all');
                    setSelectedLevel('all');
                    searchParams.delete('topic');
                    setSearchParams(searchParams);
                  }}
                  className="text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <div className="container mx-auto px-4 py-12">
          <NewsletterSignup variant="card" />
        </div>
      </main>

      <AcademyFooter />
    </div>
  );
}

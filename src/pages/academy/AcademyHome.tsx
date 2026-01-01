import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import AcademyNavbar from '@/components/academy/AcademyNavbar';
import AcademyHero from '@/components/academy/AcademyHero';
import AcademyFooter from '@/components/academy/AcademyFooter';
import TopicGrid from '@/components/academy/TopicGrid';
import CourseCard from '@/components/academy/CourseCard';
import LearningPathCard from '@/components/academy/LearningPathCard';
import NewsletterSignup from '@/components/academy/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { getFeaturedCourses } from '@/data/academy/courses';
import { getFeaturedPaths } from '@/data/academy/learningPaths';

export default function AcademyHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredCourses = getFeaturedCourses();
  const featuredPaths = getFeaturedPaths();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "nHRMS Academy",
    "description": "Free educational resources for founders, HR leaders, and business owners on Recruiting, HR Management, Payroll, Compliance, and HR-Tech.",
    "url": "https://academy.nhrms.com",
    "provider": {
      "@type": "Organization",
      "name": "nHRMS"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="nHRMS Academy | Free HR Education for Leaders"
        description="Master HR systems with free educational resources. Learn recruiting, HR management, payroll, compliance, and HR technology from 16+ years of expertise."
        keywords="HR education, HR training, recruiting course, payroll training, compliance training, HR technology, HRMS, free HR courses"
        canonicalUrl="https://academy.nhrms.com"
        structuredData={structuredData}
      />

      <AcademyNavbar />

      <main className="flex-1">
        <AcademyHero />

        {/* Topic Grid */}
        <TopicGrid />

        {/* Featured Learning Paths */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Learning Paths
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Curated learning journeys designed to take you from beginner to expert 
                  in specific areas of HR.
                </p>
              </div>
              <Button variant="ghost" asChild className="mt-4 md:mt-0">
                <Link to="/academy/learning-paths">
                  View All Paths
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {featuredPaths.slice(0, 2).map((path) => (
                <LearningPathCard key={path.id} path={path} variant="featured" />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Featured Courses
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Start with our most popular courses, covering essential HR topics 
                  for every level.
                </p>
              </div>
              <Button variant="ghost" asChild className="mt-4 md:mt-0">
                <Link to="/academy/courses">
                  View All Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Philosophy
              </h2>
              <blockquote className="text-xl md:text-2xl text-muted-foreground italic mb-8 leading-relaxed">
                "The hardest thing to do is to educate. When the customer is educated, 
                customer acquisition isn't an issue."
              </blockquote>
              <p className="text-muted-foreground mb-8">
                At nHRMS Academy, we believe in leading with education. Our mission is to 
                share our 16+ years of HR expertise freely, helping organizations build 
                better people systems. When you succeed, we succeed.
              </p>
              <Button asChild>
                <Link to="/who-we-are">
                  Learn About nHRMS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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

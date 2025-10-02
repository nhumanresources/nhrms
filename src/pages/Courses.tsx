import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CoursesHero from '@/components/courses/CoursesHero';
import CoursesBenefits from '@/components/courses/CoursesBenefits';
import CourseCard from '@/components/courses/CourseCard';
import CourseInquiryForm from '@/components/courses/CourseInquiryForm';

export default function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Job-Guaranteed Courses | HR & Recruitment Training | nHRMS";
  const pageDescription = "Launch your HR career with our job-guaranteed hybrid courses. Ready for HR as a Career and Ready Recruiter programs offer practical training, real-time projects, and 100% placement support.";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Job-Guaranteed HR Courses",
    "provider": {
      "@type": "Organization",
      "name": "nHRMS"
    },
    "description": pageDescription,
    "educationalCredentialAwarded": "Certificate",
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "Ready for HR as a Career",
        "courseMode": "Blended"
      },
      {
        "@type": "CourseInstance",
        "name": "Ready Recruiter",
        "courseMode": "Blended"
      }
    ]
  };

  const courses = [
    {
      title: "Ready for HR as a Career",
      description: "Comprehensive program designed for graduates and career changers who want to enter the HR profession with confidence and competence.",
      duration: "12-16 weeks",
      highlights: [
        "End-to-end HR fundamentals: Recruitment, HRIS, Compliance, Compensation",
        "Live projects with real companies to build your portfolio",
        "Case studies from diverse industries (Tech, Finance, Healthcare)",
        "In-person workshops for networking and hands-on practice",
        "Dedicated placement support with 100% job guarantee",
        "Industry-recognized certification upon completion"
      ]
    },
    {
      title: "Ready Recruiter",
      description: "Specialized training program for aspiring recruiters and talent acquisition professionals looking to master the art and science of recruitment.",
      duration: "8-10 weeks",
      highlights: [
        "Advanced sourcing strategies and Boolean search techniques",
        "Interview techniques, assessment methods, and candidate evaluation",
        "Applicant Tracking Systems (ATS) and recruitment technology",
        "Salary negotiation and offer management strategies",
        "Employer branding and candidate experience optimization",
        "Real recruitment projects with active job openings"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="job guaranteed courses, HR training, recruitment courses, career development, hybrid learning, practical HR training, placement guarantee"
        canonicalUrl="https://nhrms.com/courses"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow">
        <CoursesHero />
        <CoursesBenefits />
        
        <section id="courses" className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Job-Guaranteed Courses</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the program that aligns with your career goals. Both courses include practical training, case studies, and real-time hands-on projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </section>

        <CourseInquiryForm />
      </main>
      <Footer />
    </div>
  );
}

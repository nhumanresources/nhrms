import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CoursesHighlightSection() {
  const courses = [
    {
      title: "HR as a Career",
      description: "Master HR fundamentals and launch your career in human resources",
      highlights: ["6 Months Duration", "Practical Training", "Industry Certification"]
    },
    {
      title: "Ready Recruiter",
      description: "Become a skilled recruiter with hands-on experience and job placement",
      highlights: ["4 Months Duration", "Real-time Projects", "100% Placement Support"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-amber-50/50 via-background to-yellow-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-amber-500/20 text-amber-700 text-sm font-semibold mb-6">
            <GraduationCap className="h-5 w-5 mr-2" />
            <span>100% Job Guarantee</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Launch Your HR Career
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Industry-leading hybrid courses with guaranteed job placement. Gain practical skills, work on real projects, and secure your future in HR.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="card-modern bg-white/80 backdrop-blur-sm p-8 hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {course.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {course.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {course.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Button size="lg" asChild className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/courses" className="gap-2">
              Explore All Courses <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

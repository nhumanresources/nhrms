import { Briefcase, BookOpen, Code, Video, Award, Users } from 'lucide-react';

const benefits = [
  {
    icon: Briefcase,
    title: 'Practical Training',
    description: 'Learn through real-world scenarios and applications that mirror actual workplace challenges, ensuring you\'re job-ready from day one.'
  },
  {
    icon: BookOpen,
    title: 'Industry Case Studies',
    description: 'Deep dive into real company case studies to understand how theory translates into practice across different industries and scenarios.'
  },
  {
    icon: Code,
    title: 'Real-Time Hands-On Projects',
    description: 'Work on live projects that build your portfolio and give you tangible experience to showcase to potential employers.'
  },
  {
    icon: Video,
    title: 'Hybrid Learning Model',
    description: 'Enjoy the flexibility of online learning combined with valuable in-person workshops and networking opportunities.'
  },
  {
    icon: Award,
    title: '100% Job Guarantee',
    description: 'Complete commitment to your career success with dedicated placement support and our industry-backed job guarantee.'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn directly from industry professionals with years of experience who provide personalized guidance and insights.'
  }
];

export default function CoursesBenefits() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Courses?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our job-guaranteed programs are designed to provide comprehensive training that bridges the gap between education and employment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { slideInLeft, slideInRight } from '@/lib/animations';

export default function KnowledgeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const recentUpdates = [
    {
      title: "New Amendments to Labor Code",
      date: "June 12, 2023",
      category: "Labor Law"
    },
    {
      title: "Remote Work Regulations Updated",
      date: "May 28, 2023",
      category: "Workplace Policy"
    },
    {
      title: "Employee Benefits Guidelines",
      date: "April 15, 2023",
      category: "Compliance"
    }
  ];

  return (
    <div className="py-20 bg-secondary/50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div {...slideInLeft(300)}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Knowledge Center
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on Labor Laws
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Our knowledge management system provides real-time updates on labor laws, ensuring your organization remains compliant and informed.
            </p>
            <div className="space-y-6 mb-8">
              {recentUpdates.map((update, index) => (
                <div key={index} className="flex items-start space-x-3 opacity-0 animate-fade-in" style={{ animationDelay: `${300 + (index * 100)}ms`, animationFillMode: 'forwards' }}>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">{update.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {update.date} • <span className="text-primary">{update.category}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild>
              <Link to="/knowledge">
                Explore Knowledge Hub <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative" {...slideInRight(500)}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transform rotate-1 scale-105 opacity-70"></div>
            <div className="glass-panel rounded-2xl p-8 relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="rounded-full bg-primary/10 p-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6">Knowledge Management System</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Real-time labor law updates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Compliance monitoring tools</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Expert interpretation of changes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Customized alerts for your industry</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/knowledge/demo">
                    Request a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

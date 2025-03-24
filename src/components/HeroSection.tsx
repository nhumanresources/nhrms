
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { slideInBottom, slideInLeft, slideInRight } from '@/lib/animations';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-gradient-to-b from-background to-secondary/20" ref={heroRef}>
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div {...slideInLeft(200)}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              360° HR Management
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight tracking-tight text-balance mb-4">
              Transforming HR <br /> for the Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
              Comprehensive HR management solutions designed to optimize your organization's most valuable asset—your people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative" {...slideInRight(400)}>
            <div className="glass-panel rounded-2xl p-8 shadow-2xl w-full aspect-square max-w-lg mx-auto md:ml-auto">
              <div className="relative h-full w-full flex flex-col justify-center">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/5 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary/10 rounded-full"></div>
                
                <h3 className="text-2xl font-bold mb-4">HR Solutions</h3>
                
                <div className="space-y-4">
                  {[
                    { title: "Talent Acquisition", delay: 200 },
                    { title: "Executive Search", delay: 400 },
                    { title: "HR Advisory", delay: 600 },
                    { title: "Knowledge Management", delay: 800 }
                  ].map((item, index) => (
                    <div key={index} className="card-hover" {...slideInBottom(item.delay)}>
                      <div className="glass-panel rounded-lg p-4 flex items-center gap-3">
                        <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                          <span className="block w-6 h-6 bg-primary/20 rounded-full"></span>
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

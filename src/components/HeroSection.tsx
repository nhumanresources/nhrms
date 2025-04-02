
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                <span>Strategic HR Solutions for Modern Organizations</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                Transform Your HR Function for Excellence
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Partner with nHRMS to optimize your human capital strategy, enhance organizational performance, and achieve sustainable business success in today's competitive landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 shadow-lg" asChild>
                  <Link to="/services" className="gap-2">
                    Discover Our Solutions <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2" asChild>
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Trusted by Fortune 500 Companies</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>20+ Years Industry Experience</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Global Presence in US & India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Executive team meeting" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-1/2 rounded-lg overflow-hidden shadow-lg border-4 border-white hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                alt="Modern corporate building" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

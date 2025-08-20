
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const bgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2393c5fd' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div 
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url("${bgPattern}")` }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Trusted by 500+ Growing Companies
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
            Strategic HR &{' '}
            <span className="text-blue-600 relative">
              Talent Solutions
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: '800ms' }}></div>
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
            Expert talent acquisition and comprehensive HR management solutions to scale your organization effectively.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" asChild>
              <Link to="/services" className="flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl transition-all duration-300" asChild>
              <Link to="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Companies Served</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Successful Placements</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
    </section>
  );
}

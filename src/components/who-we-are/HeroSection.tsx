import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
          alt="Diverse team collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-white/10 rounded-full hidden lg:block" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <a href="https://rytadvisory.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white/20 text-white/90 hover:bg-white/30 text-xs px-3 py-1 rounded-full mb-3 transition-colors">
              An RYT Group Firm
            </a>
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About nHRMS
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming HR for the 
              <span className="text-secondary"> Future of Work</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              <strong>n</strong>urturing <strong>H</strong>uman <strong>R</strong>esources & <strong>M</strong>anagement <strong>S</strong>ystems (nHRMS) delivers 
              <span className="text-secondary font-semibold"> People. Systems. Success.</span> — strategic HR solutions that transform organizations through expert people management, systematic processes, and measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8"
                asChild
              >
                <Link to="/services" className="flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 bg-transparent"
                asChild
              >
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">16+</div>
              <p className="text-white/80">Years of Excellence</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">423</div>
              <p className="text-white/80">Clients Across 14 Countries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <p className="text-white/80">Leaders Placed</p>
            </div>
            <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-6 border border-secondary/30">
              <div className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-2">3</div>
              <p className="text-white/80">Global Offices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

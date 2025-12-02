import { MapPin, Briefcase, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070"
          alt="Research and innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Career Opportunity
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Research Associate
          </h1>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center text-white/90">
              <MapPin className="h-5 w-5 mr-2 text-secondary" />
              <span>Whitefield, Bangalore</span>
            </div>
            <div className="flex items-center text-white/90">
              <Briefcase className="h-5 w-5 mr-2 text-secondary" />
              <span>Full-time</span>
            </div>
            <div className="flex items-center text-white/90">
              <Clock className="h-5 w-5 mr-2 text-secondary" />
              <span>Immediate Joining</span>
            </div>
          </div>

          <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
            Join our dynamic research team and contribute to cutting-edge HR technology and organizational psychology research. 
            Shape the future of work with innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

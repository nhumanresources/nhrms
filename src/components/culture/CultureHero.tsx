
import { Lightbulb, Users, Heart } from 'lucide-react';

export default function CultureHero() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Our Culture at nHRMS
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We build our culture around the two experiences that matter most: 
            <span className="font-semibold text-foreground"> Customer Experience</span> and 
            <span className="font-semibold text-foreground"> Employee Experience</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              <span>Continuous Innovation</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Collaborative Growth</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
              <Heart className="h-5 w-5 text-blue-600" />
              <span>Meaningful Impact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
    </section>
  );
}

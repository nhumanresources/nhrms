
import { MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Associate</h1>
          <div className="flex items-center justify-center mb-4 text-muted-foreground">
            <MapPin className="h-5 w-5 mr-2" />
            <p className="text-lg">Whitefield, Bangalore</p>
          </div>
          <p className="text-xl text-muted-foreground">
            Join our team to drive innovation in HR technology and organizational psychology research.
          </p>
        </div>
      </div>
    </section>
  );
}

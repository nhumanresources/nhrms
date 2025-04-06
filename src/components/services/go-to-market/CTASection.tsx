
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-future-700/90 to-neural-600/90 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center" data-animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Launch Your HR-Tech Solution</h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how our go-to-market expertise can help your HR-Tech product achieve rapid adoption and sustainable growth.
          </p>
          <Button size="lg" className="bg-white text-future-700 hover:bg-white/90 shadow-lg" asChild>
            <Link to="/contact" className="inline-flex items-center">
              Schedule a Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

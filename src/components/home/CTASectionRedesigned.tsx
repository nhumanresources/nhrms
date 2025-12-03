import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASectionRedesigned() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
          alt="Modern office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Ready to Transform Your HR?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Your 
            <span className="text-secondary"> Success Story</span> Together
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join 423 organizations across 14 countries that trust nHRMS for their HR transformation. 
            Schedule a consultation and discover how we can elevate your people strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 text-lg"
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 text-lg bg-transparent"
              asChild
            >
              <a href="tel:+13144854747" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +1-314-485-4747
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <a href="mailto:info@nhrms.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              info@nhrms.com
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
            <span>US • India (Hyderabad & Bangalore)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

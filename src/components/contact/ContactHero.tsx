import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
          alt="Modern office space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start a 
              <span className="text-secondary"> Conversation</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Have questions about our services? Looking to transform your HR function? 
              We're here to help. Reach out and let's discuss how we can partner for your success.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid gap-4">
            <a 
              href="tel:+13144854747" 
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Call Us</p>
                <p className="text-white font-semibold text-lg">+1-314-485-4747</p>
              </div>
            </a>
            
            <a 
              href="mailto:info@nhrms.com" 
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Email Us</p>
                <p className="text-white font-semibold text-lg">info@nhrms.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Our Offices</p>
                <p className="text-white font-semibold">US • Hyderabad • Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

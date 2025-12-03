
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  const bgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url("${bgPattern}")` }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your HR Strategy?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join 423 organizations across 14 countries who partner with nHRMS for strategic HR consultation and talent solutions. 
            Let's discuss your unique challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link to="/contact" className="flex items-center">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl transition-all duration-300" asChild>
              <Link to="/contact" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">423</div>
              <div className="text-blue-100">Clients Across 14 Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Years of Expertise</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">Custom</div>
              <div className="text-blue-100">Tailored Solutions</div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-100 mb-4">Ready for strategic HR guidance? Let's connect.</p>
            <div className="flex items-center justify-center space-x-4">
              <a 
                href="tel:+13144854747" 
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                +1-314-485-4747
              </a>
              <span className="text-white/40">|</span>
              <a 
                href="https://t.me/nhrms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                Telegram
              </a>
              <span className="text-white/40">|</span>
              <a 
                href="mailto:info@nhrms.com" 
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
    </section>
  );
}

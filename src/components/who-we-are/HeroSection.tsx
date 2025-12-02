
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="py-24 md:py-32 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Transforming HR for the Future of Work</h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '100ms' }}>
            <strong>n</strong>urturing <strong>H</strong>uman <strong>R</strong>esources & <strong>M</strong>anagement <strong>S</strong>ystems (nHRMS) delivers People. Systems. Success. - strategic HR solutions that transform organizations through expert people management, systematic processes, and measurable results.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Our Services
            </Link>
            <Link to="/contact" className="bg-white hover:bg-gray-100 text-primary border border-primary/20 px-6 py-3 rounded-md font-medium transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

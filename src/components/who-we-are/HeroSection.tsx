
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="py-24 md:py-32 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Who are we</h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            n Human Resources and Management Systems (nHRMS) is a leading HR management consulting firm dedicated to helping organizations optimize their human capital and achieve business success through strategic HR solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

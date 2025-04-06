
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who are we</h1>
          <p className="text-xl text-muted-foreground">
            n Human Resources and Management Systems (nHRMS) is a leading HR management consulting firm dedicated to helping organizations optimize their human capital and achieve business success through strategic HR solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

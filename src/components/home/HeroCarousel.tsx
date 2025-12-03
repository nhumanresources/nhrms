import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Visual letter breakdown component for nHRMS
const NHRMSBreakdown = () => (
  <div className="flex flex-wrap gap-3 md:gap-4 mt-6 mb-8">
    {[
      { letter: 'n', word: 'Nurturing' },
      { letter: 'H', word: 'Human' },
      { letter: 'R', word: 'Resources' },
      { letter: 'M', word: 'Management' },
      { letter: 'S', word: 'Systems' },
    ].map((item, index) => (
      <div 
        key={item.letter}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 border border-white/20"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <span className="text-secondary font-heading text-2xl md:text-3xl font-bold">{item.letter}</span>
        <span className="text-white text-sm md:text-base font-medium">{item.word}</span>
      </div>
    ))}
  </div>
);

interface HeroSlide {
  image: string;
  headline: React.ReactNode;
  subheadline: string;
  description?: string;
  hasBreakdown?: boolean;
  cta: { text: string; link: string };
}

const heroSlides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    headline: (
      <>
        Nurturing Human Resources
        <br />
        <span className="text-secondary">&</span> Management Systems
      </>
    ),
    subheadline: "What nHRMS Stands For",
    hasBreakdown: true,
    cta: { text: "Discover Our Story", link: "/who-we-are" }
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    headline: "People. Systems. Success.",
    subheadline: "Your Strategic HR Partner",
    description: "Transform your organization with expert HR consulting that delivers measurable results and sustainable growth.",
    cta: { text: "Partner With Us", link: "/services" }
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070",
    headline: "Build Winning Teams",
    subheadline: "Talent Acquisition Excellence",
    description: "Access top-tier talent through our proven recruitment strategies. 16+ years of placing leaders across industries.",
    cta: { text: "Find Talent", link: "/services/talent-acquisition" }
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    headline: (
      <>
        HR Technology
        <br />
        <span className="text-secondary">That Works</span>
      </>
    ),
    subheadline: "Digital Transformation",
    description: "Implement cutting-edge HR systems that streamline operations and empower your workforce.",
    cta: { text: "Explore Solutions", link: "/services/hr-tech" }
  },
  {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070",
    headline: "Fractional HR Solutions",
    subheadline: "Flexible. Scalable. Expert.",
    description: "Get enterprise-level HR expertise without the overhead. Build, operate, and transfer with confidence.",
    cta: { text: "Learn More", link: "/services/bot-hr-teams" }
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Images with Enhanced Overlay */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Enhanced gradient overlay - stronger on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
          {/* Additional top-to-bottom gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-secondary font-semibold text-sm md:text-base uppercase tracking-wider mb-4 animate-fade-in">
              {slide.subheadline}
            </p>
            <h1 
              key={`headline-${currentSlide}`}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.15] animate-fade-in drop-shadow-lg"
            >
              {slide.headline}
            </h1>
            
            {/* Visual letter breakdown for first slide */}
            {slide.hasBreakdown ? (
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <NHRMSBreakdown />
                <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                  We nurture organizations through people-first HR solutions.
                </p>
              </div>
            ) : slide.description && (
              <p 
                key={`desc-${currentSlide}`}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in"
                style={{ animationDelay: '100ms' }}
              >
                {slide.description}
              </p>
            )}
            
            <div 
              className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 text-lg" 
                asChild
              >
                <Link to={slide.cta.link} className="flex items-center">
                  {slide.cta.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 text-lg bg-transparent" 
                asChild
              >
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-secondary' 
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            <div className="py-4 md:py-6 text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white">423</div>
              <div className="text-sm text-white/80">Clients Across 14 Countries</div>
            </div>
            <div className="py-4 md:py-6 text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white">16+</div>
              <div className="text-sm text-white/80">Years Across Domains</div>
            </div>
            <div className="py-4 md:py-6 text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white">1000+</div>
              <div className="text-sm text-white/80">Leaders Placed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

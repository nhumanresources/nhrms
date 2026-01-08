import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientOrb } from '@/components/ui/decorative-elements';

// Visual letter breakdown component for nHRMS
const NHRMSBreakdown = ({ isVisible }: { isVisible: boolean }) => (
  <div className="flex flex-wrap gap-3 md:gap-4 mt-6 mb-8 relative z-20">
    {[
      { letter: 'n', word: 'Nurturing', delay: 0 },
      { letter: 'H', word: 'Human', delay: 100 },
      { letter: 'R', word: 'Resources', delay: 200 },
      { letter: 'M', word: 'Management', delay: 300 },
      { letter: 'S', word: 'Systems', delay: 400 },
    ].map((item, index) => (
      <div 
        key={item.letter}
        className={`flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-3 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg ${
          isVisible ? 'animate-carousel-in opacity-100' : 'opacity-0'
        }`}
        style={{ 
          animationDelay: `${300 + item.delay}ms`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          animationFillMode: 'both'
        }}
      >
        <span className="text-secondary font-heading text-2xl md:text-3xl font-bold" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{item.letter}</span>
        <span className="text-white text-sm md:text-base font-semibold" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{item.word}</span>
      </div>
    ))}
  </div>
);

interface HeroSlide {
  image: string;
  imagePosition?: string;
  headline: React.ReactNode;
  subheadline: string;
  description?: string;
  hasBreakdown?: boolean;
  cta: { text: string; link: string };
  badge?: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069",
    imagePosition: "center right",
    headline: (
      <>
        nurturing Human Resources
        <br />
        <span className="text-gradient-warm">&</span> Management Systems
      </>
    ),
    subheadline: "What nHRMS Stands For",
    hasBreakdown: true,
    cta: { text: "Discover Our Story", link: "/who-we-are" },
    badge: "16+ Years of Excellence"
  },
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    imagePosition: "center",
    headline: (
      <>
        Implementation of
        <br />
        <span className="text-gradient-warm">New Labour Codes</span>
      </>
    ),
    subheadline: "India's Labour Law Reform",
    description: "Navigate India's transformative labour code consolidation with expert guidance. From 29 laws to 4 comprehensive codes – ensure your organization is compliant.",
    cta: { text: "Get Compliant", link: "/labour-codes" },
    badge: "Compliance Expert"
  },
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2051",
    imagePosition: "center",
    headline: "People. Systems. Success.",
    subheadline: "Your Strategic HR Partner",
    description: "Transform your organization with expert HR consulting that delivers measurable results and sustainable growth.",
    cta: { text: "Partner With Us", link: "/services" },
    badge: "Strategic Partner"
  },
  {
    image: "https://images.unsplash.com/photo-600880292089-90a7e086ee0c?q=80&w=2070",
    imagePosition: "top center",
    headline: "Build Winning Teams",
    subheadline: "Talent Acquisition Excellence",
    description: "Access top-tier talent through our proven recruitment strategies. 16+ years of placing leaders across industries.",
    cta: { text: "Find Talent", link: "/services/talent-acquisition" },
    badge: "1000+ Leaders Placed"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    imagePosition: "center",
    headline: (
      <>
        HR-Tech
        <br />
        <span className="text-gradient-warm">That Works</span>
      </>
    ),
    subheadline: "Digital Transformation",
    description: "Smart HR systems. Seamless operations. Empowered teams.",
    cta: { text: "Explore Solutions", link: "/services/hr-tech" },
    badge: "50+ Implementations"
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
    imagePosition: "center",
    headline: "Fractional HR Solutions",
    subheadline: "Flexible. Scalable. Expert.",
    description: "Get enterprise-level HR expertise without the overhead. Build, operate, and transfer with confidence.",
    cta: { text: "Learn More", link: "/services/bot-hr-teams" },
    badge: "Enterprise Quality"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedSlide, setDisplayedSlide] = useState(0);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const transitionToSlide = useCallback((newIndex: number) => {
    if (isTransitioning || newIndex === currentSlide) return;
    
    setIsTransitioning(true);
    
    // After exit animation, update the displayed slide
    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayedSlide(newIndex);
      setCurrentSlide(newIndex);
      
      // Reset transitioning after entry animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 400);
  }, [isTransitioning, currentSlide]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % heroSlides.length;
    transitionToSlide(newIndex);
  }, [currentSlide, transitionToSlide]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    transitionToSlide(newIndex);
  }, [currentSlide, transitionToSlide]);

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    transitionToSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const slide = heroSlides[displayedSlide];
  const contentVisible = !isTransitioning && displayedSlide === currentSlide;

  return (
    <section className="relative h-[92vh] min-h-[650px] max-h-[950px] overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
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
            className={`w-full h-full object-cover ${
              index === currentSlide ? 'animate-ken-burns' : ''
            }`}
            style={{ 
              objectPosition: s.imagePosition || 'center',
              transformOrigin: index % 2 === 0 ? 'center left' : 'center right'
            }}
          />
          {/* Premium multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-accent/10" />
        </div>
      ))}

      {/* Decorative floating orbs */}
      <GradientOrb className="top-20 right-10 animate-float opacity-30" size="lg" />
      <GradientOrb className="bottom-40 left-20 animate-float-reverse opacity-20" size="md" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-diagonal-pattern" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          {/* Content backdrop for better readability */}
          <div className="max-w-3xl relative pt-8 md:pt-12">
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent rounded-3xl backdrop-blur-sm -z-10" />
            
            {/* Premium Badge */}
            {slide.badge && (
              <div 
                className={`mt-4 md:mt-8 mb-6 relative z-30 ${
                  contentVisible ? 'animate-carousel-in' : 'opacity-0'
                }`}
                style={{ animationDelay: '0ms', animationFillMode: 'both' }}
              >
                <span 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--accent)) 100%)',
                    color: 'hsl(var(--primary))',
                    boxShadow: '0 4px 25px rgba(0,0,0,0.4), 0 0 30px hsl(var(--secondary) / 0.4)'
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  {slide.badge}
                </span>
              </div>
            )}

            <p 
              className={`text-secondary font-bold text-sm md:text-base uppercase tracking-widest mb-4 ${
                contentVisible ? 'animate-carousel-in' : 'opacity-0'
              }`}
              style={{ 
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                animationDelay: '100ms',
                animationFillMode: 'both'
              }}
            >
              {slide.subheadline}
            </p>
            <h1 
              key={`headline-${displayedSlide}`}
              className={`font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] ${
                contentVisible ? 'animate-carousel-in' : 'opacity-0'
              }`}
              style={{ 
                textShadow: '0 4px 20px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
                animationDelay: '200ms',
                animationFillMode: 'both'
              }}
            >
              {slide.headline}
            </h1>
            
            {/* Visual letter breakdown for first slide */}
            {slide.hasBreakdown ? (
              <div>
                <NHRMSBreakdown isVisible={contentVisible} />
                <p 
                  className={`text-xl md:text-2xl text-white max-w-2xl leading-relaxed font-medium ${
                    contentVisible ? 'animate-carousel-in' : 'opacity-0'
                  }`}
                  style={{ 
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    animationDelay: '700ms',
                    animationFillMode: 'both'
                  }}
                >
                  We nurture organizations through people-first HR solutions.
                </p>
              </div>
            ) : slide.description && (
              <p 
                key={`desc-${displayedSlide}`}
                className={`text-lg md:text-xl text-white mb-8 max-w-2xl leading-relaxed font-medium ${
                  contentVisible ? 'animate-carousel-in' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: '300ms', 
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  animationFillMode: 'both'
                }}
              >
                {slide.description}
              </p>
            )}
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 mt-10 ${
                contentVisible ? 'animate-carousel-in' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: slide.hasBreakdown ? '800ms' : '400ms',
                animationFillMode: 'both'
              }}
            >
              <Button 
                size="lg" 
                className="btn-primary-premium text-lg px-8 py-6" 
                asChild
              >
                <Link to={slide.cta.link} className="flex items-center gap-2">
                  {slide.cta.text}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg bg-white/10 backdrop-blur-sm rounded-xl transition-all duration-300" 
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

      {/* Navigation Arrows - Enhanced */}
      <button
        onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
        className="absolute left-4 md:left-8 bottom-20 md:bottom-24 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:scale-110"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
        className="absolute right-4 md:right-8 bottom-20 md:bottom-24 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:scale-110"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators - Enhanced with pulse animation */}
      <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-10 bg-gradient-to-r from-secondary to-accent shadow-lg animate-indicator-pulse' 
                : 'w-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats Bar - Premium Design */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/15">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 divide-x divide-white/15">
            <div className="py-5 md:py-7 text-center group">
              <div className="font-heading text-3xl md:text-4xl font-bold text-white group-hover:text-secondary transition-colors duration-300">423</div>
              <div className="text-sm text-white/80 mt-1">Clients Across 14 Countries</div>
            </div>
            <div className="py-5 md:py-7 text-center group">
              <div className="font-heading text-3xl md:text-4xl font-bold text-white group-hover:text-secondary transition-colors duration-300">16+</div>
              <div className="text-sm text-white/80 mt-1">Years Across Domains</div>
            </div>
            <div className="py-5 md:py-7 text-center group">
              <div className="font-heading text-3xl md:text-4xl font-bold text-white group-hover:text-secondary transition-colors duration-300">1000+</div>
              <div className="text-sm text-white/80 mt-1">Leaders Placed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

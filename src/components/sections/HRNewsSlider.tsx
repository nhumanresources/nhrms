
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  snippet: string;
  image: string;
}

const hrNews: NewsItem[] = [
  {
    id: 1,
    title: "Remote Work Policy Updates for 2024",
    date: "June 15, 2024",
    category: "Policy",
    snippet: "New guidelines for flexible work arrangements that balance employee preferences with business needs.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI Integration in HR Processes",
    date: "June 10, 2024",
    category: "Technology",
    snippet: "How artificial intelligence is transforming hiring, onboarding, and employee development processes.",
    image: "https://images.unsplash.com/photo-1677442135133-4da243bbacc5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Employee Mental Health Initiatives",
    date: "June 5, 2024",
    category: "Wellbeing",
    snippet: "Innovative approaches to supporting employee mental health and preventing burnout.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "DEI Best Practices: 2024 Edition",
    date: "May 28, 2024",
    category: "DEI",
    snippet: "Updated strategies for creating more diverse, equitable and inclusive workplaces.",
    image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Compliance Update: New Labor Laws",
    date: "May 20, 2024",
    category: "Legal",
    snippet: "Summary of recent changes to labor laws and regulations affecting employers.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function HRNewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = hrNews.length - 1;
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(3);
  
  const updateVisibleItems = () => {
    if (window.innerWidth < 768) {
      setVisibleItems(1);
    } else if (window.innerWidth < 1024) {
      setVisibleItems(2);
    } else {
      setVisibleItems(3);
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const nextSlide = () => {
    if (currentIndex < maxIndex - (visibleItems - 1)) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(maxIndex - (visibleItems - 1)); // Loop to end
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.scrollWidth / hrNews.length * currentIndex;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, visibleItems]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest HR Insights</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Stay updated with the latest news, trends, and developments in the HR world
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-background shadow-md"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-background shadow-md"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* News Items Slider */}
          <div 
            ref={containerRef}
            className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {hrNews.map((item, index) => (
              <div 
                key={item.id} 
                className={cn(
                  "px-4 transition-all duration-300 snap-start",
                  "min-w-full md:min-w-[50%] lg:min-w-[33.333%]"
                )}
              >
                <Card className="h-full border border-border/50 overflow-hidden hover:shadow-md transition-all duration-300 bg-card">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.snippet}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2 md:hidden">
            {Array.from({ length: hrNews.length - (visibleItems - 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-muted"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { hrNews } from '@/data/newsItems';
import NewsCard from '@/components/news/NewsCard';
import NewsNavigation from '@/components/news/NewsNavigation';

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
    <section className="py-0 bg-background mt-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 mt-0">
          <h2 className="text-3xl font-bold mb-3">Latest HR Insights</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Stay updated with the latest news, trends, and developments in the HR world
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Controls */}
          <NewsNavigation 
            currentIndex={currentIndex}
            totalItems={hrNews.length}
            visibleItems={visibleItems}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
          
          {/* News Items Slider */}
          <div 
            ref={containerRef}
            className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {hrNews.map((item) => (
              <div 
                key={item.id} 
                className={cn(
                  "px-4 transition-all duration-300 snap-start",
                  "min-w-full md:min-w-[50%] lg:min-w-[33.333%]"
                )}
              >
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

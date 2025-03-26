
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsNavigationProps {
  currentIndex: number;
  totalItems: number;
  visibleItems: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function NewsNavigation({ 
  currentIndex, 
  totalItems, 
  visibleItems, 
  onPrev, 
  onNext 
}: NewsNavigationProps) {
  return (
    <>
      {/* Desktop Navigation Buttons */}
      <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-10 w-10 rounded-full bg-background shadow-md"
          onClick={onPrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-10 w-10 rounded-full bg-background shadow-md"
          onClick={onNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Mobile Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2 md:hidden">
        {Array.from({ length: totalItems - (visibleItems - 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {/* Using the parent's setCurrentIndex function directly */}}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentIndex ? "bg-primary" : "bg-muted"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

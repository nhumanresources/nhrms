
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { ResearchPaper } from '@/data/researchPapers';

interface ResearchPapersSliderProps {
  papers: ResearchPaper[];
}

export default function ResearchPapersSlider({ papers }: ResearchPapersSliderProps) {
  return (
    <div className="relative px-4 md:px-10">
      <Carousel className="w-full">
        <CarouselContent>
          {papers.map((paper) => (
            <CarouselItem key={paper.id} className="md:basis-1/2 lg:basis-1/3 p-2">
              <Card className="h-full border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="bg-primary/5 text-primary">
                      {paper.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{paper.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{paper.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">By {paper.authors}</p>
                  <p className="text-xs text-muted-foreground mb-4">{paper.journal}</p>
                  <p className="text-muted-foreground line-clamp-3">{paper.abstract}</p>
                </CardContent>
                <CardFooter className="pt-0 px-5 pb-5">
                  <Button variant="link" asChild className="p-0">
                    <Link to={paper.link}>Read Full Paper</Link>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-0 bg-background border border-border" />
          <CarouselNext className="right-0 bg-background border border-border" />
        </div>
      </Carousel>
      
      {/* Mobile navigation buttons */}
      <div className="flex justify-center mt-6 space-x-2 md:hidden">
        <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

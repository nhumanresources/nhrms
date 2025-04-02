
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResearchPaper } from '@/data/researchPapers';

interface ResearchPapersSectionProps {
  papers: ResearchPaper[];
}

export default function ResearchPapersSection({ papers }: ResearchPapersSectionProps) {
  return (
    <section className="py-16 bg-wave-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10">Latest Research Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {papers.map((paper) => (
            <Card key={paper.id} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">{paper.category}</span>
                  <span className="text-sm text-muted-foreground">{paper.year}</span>
                </div>
                <CardTitle className="line-clamp-2">{paper.title}</CardTitle>
                <CardDescription className="text-sm">
                  By {paper.authors}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{paper.abstract}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full justify-center group" asChild>
                  <Link to={paper.link}>
                    Read Paper <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

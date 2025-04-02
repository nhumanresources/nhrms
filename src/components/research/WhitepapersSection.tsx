
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, FileText } from 'lucide-react';

interface Whitepaper {
  title: string;
  description: string;
  link: string;
  sourceType: string;
  citation: string;
}

interface WhitepapersSectionProps {
  whitepapers: Whitepaper[];
}

export default function WhitepapersSection({ whitepapers }: WhitepapersSectionProps) {
  return (
    <section className="py-16 bg-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10">Whitepapers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whitepapers.map((paper, index) => (
            <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md bg-white">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle className="line-clamp-2">{paper.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base line-clamp-3 mb-2">
                  {paper.description}
                </CardDescription>
                <div className="text-sm flex items-center text-muted-foreground">
                  <span className="font-medium">Source:</span>
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="ml-1 flex items-center hover:text-primary">
                    {paper.sourceType} <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  {paper.citation}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full group" asChild>
                  <a href={paper.link} target="_blank" rel="noopener noreferrer">
                    Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

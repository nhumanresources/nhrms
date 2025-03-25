
import { useState, useEffect } from 'react';
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
import { cn } from '@/lib/utils';

// Trending topics data
const trendingTopics = [
  {
    id: 1,
    title: "AI in Talent Acquisition",
    description: "How artificial intelligence is transforming recruitment processes and improving candidate experience.",
    category: "Technology",
    date: "June 15, 2024",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=2342&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The Future of Remote Work",
    description: "Post-pandemic trends shaping distributed workforce management and organizational culture.",
    category: "Workplace",
    date: "May 23, 2024",
    image: "https://images.unsplash.com/photo-1584677626646-7c8f83690304?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Employee Wellbeing Strategies",
    description: "Holistic approaches to mental health and work-life balance in the modern workplace.",
    category: "Wellbeing",
    date: "April 10, 2024",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2232&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Diversity, Equity & Inclusion",
    description: "Implementing effective DEI initiatives that drive organizational performance and innovation.",
    category: "DEI",
    date: "March 27, 2024",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Skills-Based Talent Management",
    description: "Moving beyond traditional roles to focus on capabilities, competencies and potential.",
    category: "Talent",
    date: "February 18, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
  }
];

// Research papers data
const researchPapers = [
  {
    id: 1,
    title: "The Impact of Leadership Development on Organizational Performance",
    authors: "Johnson, L., & Smith, A.",
    journal: "Journal of Leadership Studies",
    year: "2025",
    abstract: "This study examines the correlation between structured leadership development programs and key performance indicators across industries.",
    category: "Leadership",
    link: "/research/leadership-development-impact"
  },
  {
    id: 2,
    title: "Quantifying the ROI of Employee Experience Initiatives",
    authors: "Chen, M., Williams, K., & Patel, S.",
    journal: "Human Resource Management Review",
    year: "2024",
    abstract: "A comprehensive analysis of employee experience programs and their measurable impact on retention, productivity, and financial outcomes.",
    category: "Employee Experience",
    link: "/research/employee-experience-roi"
  },
  {
    id: 3,
    title: "Psychological Safety and Team Performance in Virtual Environments",
    authors: "Rodriguez, J., & Kim, H.",
    journal: "Organizational Behavior Journal",
    year: "2024",
    abstract: "Research exploring how psychological safety is established and maintained in remote and hybrid work settings.",
    category: "Team Dynamics",
    link: "/research/psychological-safety-virtual"
  },
  {
    id: 4,
    title: "Generative AI Applications in HR Operations",
    authors: "Gupta, R., Thompson, E., & Okafor, N.",
    journal: "Technology in HR Quarterly",
    year: "2025",
    abstract: "An examination of current and emerging applications of generative AI across the HR function, with case studies and implementation frameworks.",
    category: "HR Technology",
    link: "/research/generative-ai-hr"
  },
  {
    id: 5,
    title: "Strategic Workforce Planning in the Age of Automation",
    authors: "Nakamura, T., & Anderson, P.",
    journal: "Future of Work Studies",
    year: "2025",
    abstract: "This paper presents models for workforce planning that account for increasing automation and changing skill requirements.",
    category: "Workforce Planning",
    link: "/research/workforce-planning-automation"
  }
];

export default function TrendsResearchSlider() {
  const [activeTab, setActiveTab] = useState<'trends' | 'research'>('trends');

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Stay ahead with the latest trends and research in HR management and organizational development
          </p>
          
          {/* Tab navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant={activeTab === 'trends' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('trends')}
              className="rounded-full px-6"
            >
              Trending Topics
            </Button>
            <Button 
              variant={activeTab === 'research' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('research')}
              className="rounded-full px-6"
            >
              Research Papers
            </Button>
          </div>
        </div>
        
        {/* Trending Topics Slider */}
        <div className={cn("relative px-4 md:px-10", activeTab === 'trends' ? 'block' : 'hidden')}>
          <Carousel className="w-full">
            <CarouselContent>
              {trendingTopics.map((topic) => (
                <CarouselItem key={topic.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full border-border/50 overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={topic.image} 
                        alt={topic.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="bg-primary/5 text-primary">
                          {topic.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{topic.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{topic.title}</h3>
                      <p className="text-muted-foreground line-clamp-3">{topic.description}</p>
                    </CardContent>
                    <CardFooter className="pt-0 px-5 pb-5">
                      <Button variant="link" asChild className="p-0">
                        <Link to="/blog">Read More</Link>
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
        
        {/* Research Papers Slider */}
        <div className={cn("relative px-4 md:px-10", activeTab === 'research' ? 'block' : 'hidden')}>
          <Carousel className="w-full">
            <CarouselContent>
              {researchPapers.map((paper) => (
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
        
        {/* View all button */}
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to={activeTab === 'trends' ? "/blog" : "/research"}>
              View All {activeTab === 'trends' ? 'Articles' : 'Research Papers'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

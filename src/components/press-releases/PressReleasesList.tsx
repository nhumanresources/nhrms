
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, ArrowRight } from 'lucide-react';

export default function PressReleasesList() {
  const pressReleases = [
    {
      id: "timeless-contribution",
      title: "Timeless Contribution to the Discipline of Organisational Behaviour",
      date: "May 2, 2025",
      source: "BusinessManager.in",
      snippet: "Exploring the lasting impact of organizational behavior principles on modern workplace dynamics and HR practices.",
      externalUrl: "https://www.businessmanager.in/timeless-contribution-to-the-discipline-of-organisational-behaviour/",
      isExternal: true,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
    },
    {
      id: "nhrms-acquires-careeredge",
      title: "nHRMS Acquires CareerEdge: Expanding HR Technology Solutions",
      date: "April 15, 2025",
      source: "nHRMS Press Room",
      snippet: "Strategic acquisition to enhance AI-powered career development tools for enterprises and job seekers.",
      externalUrl: "",
      isExternal: false,
      path: "/press-releases/nhrms-acquires-careeredge",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3"
    },
    {
      id: "hr-tech-implementation",
      title: "Successful HR Tech Implementation Case Study",
      date: "March 28, 2025",
      source: "HR Technology Today",
      snippet: "How nHRMS helped a Fortune 500 client streamline their HR processes with cutting-edge technology solutions.",
      externalUrl: "",
      isExternal: false,
      path: "/case-studies/hr-tech-platform-launch",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "press releases", "media coverage", "articles"];

  const filteredReleases = selectedCategory === "all" 
    ? pressReleases 
    : pressReleases.filter(release => {
        if (selectedCategory === "press releases" && !release.isExternal) return true;
        if (selectedCategory === "media coverage" && release.isExternal) return true;
        if (selectedCategory === "articles") return true; // For now, showing all in articles category
        return false;
      });

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="capitalize"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredReleases.map((release) => (
          <Card key={release.id} className="h-full border border-border/50 overflow-hidden hover:shadow-md transition-all duration-300 bg-card">
            <div className="aspect-video overflow-hidden">
              <img 
                src={release.image} 
                alt={release.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                }}
              />
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {release.source}
                </span>
                <span className="text-xs text-muted-foreground">
                  {release.date}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{release.title}</h3>
              <p className="text-muted-foreground mb-4">{release.snippet}</p>
              
              {release.isExternal ? (
                <a 
                  href={release.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  Read More <ExternalLink size={16} className="ml-1" />
                </a>
              ) : (
                <Link 
                  to={release.path || "/"} 
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <a 
          href="https://lovable.dev/projects/efa1dfca-e2c7-4cb5-8d71-ef763dc1918e" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
        >
          <FileText size={18} className="mr-2" /> View More Articles on Our Lovable Platform
        </a>
      </div>
    </div>
  );
}


import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResearchReport {
  title: string;
  date: string;
  description: string;
  link: string;
  externalUrl: string;
  sourceType: string;
}

interface ResearchReportsSectionProps {
  reports: ResearchReport[];
}

export default function ResearchReportsSection({ reports }: ResearchReportsSectionProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10">Research Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md bg-white">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{report.date}</div>
                <CardTitle>{report.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {report.description}
                </CardDescription>
                <div className="mt-3 text-sm flex items-center text-muted-foreground">
                  <span className="font-medium">Source:</span>
                  <a href={report.externalUrl} target="_blank" rel="noopener noreferrer" className="ml-1 flex items-center hover:text-primary">
                    {report.sourceType} <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full group" asChild>
                  <Link to={report.link}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

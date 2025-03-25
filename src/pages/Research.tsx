
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Research() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const researchReports = [
    {
      title: "2023 HR Technology Landscape Report",
      date: "July 2023",
      description: "A comprehensive analysis of the current HR technology market, emerging trends, and recommendations for technology adoption.",
      link: "#"
    },
    {
      title: "Future of Work: Post-Pandemic Workforce Trends",
      date: "May 2023",
      description: "Research on how the pandemic has permanently changed workforce dynamics, remote work, and employee expectations.",
      link: "#"
    },
    {
      title: "Talent Acquisition Benchmark Study",
      date: "March 2023",
      description: "Industry benchmarks for recruitment metrics across different sectors, company sizes, and geographies.",
      link: "#"
    },
    {
      title: "Employee Engagement in the Digital Age",
      date: "January 2023",
      description: "Research on effective strategies for maintaining employee engagement in increasingly digital and remote work environments.",
      link: "#"
    }
  ];

  const whitepapers = [
    {
      title: "Building Strategic HR: From Administrative Function to Business Partner",
      description: "How HR departments can evolve to become strategic partners that drive business outcomes and organizational success.",
      link: "#"
    },
    {
      title: "The Business Case for Diversity & Inclusion",
      description: "Data-driven insights on how diversity and inclusion initiatives impact business performance, innovation, and growth.",
      link: "#"
    },
    {
      title: "HR Analytics: Moving from Data to Insights",
      description: "A framework for developing advanced HR analytics capabilities that inform strategic decision-making.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Insights</h1>
              <p className="text-xl text-muted-foreground">
                Our latest research, whitepapers, and thought leadership on the evolving HR landscape.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10">Research Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchReports.map((report, index) => (
                <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">{report.date}</div>
                    <CardTitle>{report.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {report.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="group">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                    <Button variant="ghost" size="sm" className="group" asChild>
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

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10">Whitepapers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whitepapers.map((paper, index) => (
                <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md bg-background">
                  <CardHeader>
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary mb-4">
                      <FileText className="h-6 w-6" />
                    </div>
                    <CardTitle className="line-clamp-2">{paper.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base line-clamp-3">
                      {paper.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="mt-2 group" asChild>
                      <Link to={paper.link}>
                        Read whitepaper <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

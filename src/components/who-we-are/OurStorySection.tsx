
import { Calendar, Globe, BookOpen, Briefcase } from 'lucide-react';

export default function OurStorySection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Founded in 2009</h3>
                <p className="text-muted-foreground">
                  nHRMS was founded by a team of experienced HR executives with a vision to transform how organizations approach human capital management. Starting with a focus on executive search, we quickly expanded our services to address the full spectrum of HR challenges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Global Expansion</h3>
                <p className="text-muted-foreground">
                  By 2015, we had established a presence in key markets across North America, Europe, and Asia, allowing us to serve multinational clients with consistent quality and local expertise.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Innovation & Thought Leadership</h3>
                <p className="text-muted-foreground">
                  Throughout our journey, we've maintained a commitment to innovation and thought leadership, regularly publishing research and developing proprietary methodologies to address emerging HR challenges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Today</h3>
                <p className="text-muted-foreground">
                  Today, nHRMS stands as a trusted partner to hundreds of organizations worldwide, from fast-growing startups to Fortune 500 companies, helping them build and maintain world-class HR functions that drive business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

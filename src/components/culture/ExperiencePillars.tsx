
import { Card, CardContent } from '@/components/ui/card';

export default function ExperiencePillars() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Experience Pillars</h2>
          <p className="text-lg text-muted-foreground">
            At nHRMS, we believe that exceptional customer experiences begin with extraordinary employee experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Customer Experience Pillar */}
          <Card className="border border-border/50 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">Customer Experience</h3>
              <p className="mb-6 text-muted-foreground">
                We are committed to understanding and exceeding our customers' expectations at every touchpoint.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Deep understanding of client needs and industry challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Tailored solutions that deliver tangible business outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>Continuous feedback loops to improve and innovate</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Employee Experience Pillar */}
          <Card className="border border-border/50 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-2 bg-gradient-to-r from-blue-700 to-blue-900"></div>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">Employee Experience</h3>
              <p className="mb-6 text-muted-foreground">
                We foster an environment where our team members can thrive, grow, and make meaningful contributions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Continuous learning and professional development opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Collaborative work environment that values diverse perspectives</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>Recognition for innovation and excellence in service delivery</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

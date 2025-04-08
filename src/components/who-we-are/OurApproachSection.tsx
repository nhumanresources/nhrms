
import { Lightbulb, TrendingUp, Users, Zap } from 'lucide-react';

export default function OurApproachSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg text-muted-foreground">
            At nHRMS, we combine deep industry expertise with innovative thinking to deliver transformative HR solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">People-First Innovation</h3>
            <p className="text-muted-foreground">
              We place people at the center of our solutions, combining human insight with cutting-edge technology.
            </p>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">Data-Driven Decisions</h3>
            <p className="text-muted-foreground">
              Our recommendations are backed by robust analytics and industry benchmarks for measurable outcomes.
            </p>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">Collaborative Partnership</h3>
            <p className="text-muted-foreground">
              We work as an extension of your team, ensuring solutions align with your organization's unique culture and goals.
            </p>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">Agile Implementation</h3>
            <p className="text-muted-foreground">
              Our flexible methodology adapts to changing business needs, delivering value at every stage of engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

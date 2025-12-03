import { CheckCircle, Award, Users, Globe, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "16+ Years of Excellence",
    description: "Deep industry expertise serving clients across diverse sectors and geographies."
  },
  {
    icon: Users,
    title: "People-First Approach",
    description: "We believe in building lasting relationships, not just filling positions."
  },
  {
    icon: Globe,
    title: "Global Reach, Local Expertise",
    description: "Offices in US and India with understanding of regional nuances."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "423 clients across 14 countries and 1000+ successful leadership placements."
  },
  {
    icon: Shield,
    title: "End-to-End Solutions",
    description: "From recruitment to technology, we cover the complete HR spectrum."
  },
  {
    icon: CheckCircle,
    title: "Measurable Results",
    description: "Data-driven approach ensuring tangible outcomes for your business."
  }
];

export default function WhyChooseUsRedesigned() {
  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Why nHRMS
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Strategic Partner in
              <span className="text-primary"> HR Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At nHRMS, we don't just provide HR services – we become an extension of your team. 
              Our consultants bring deep industry knowledge, innovative solutions, and a commitment 
              to your success that sets us apart.
            </p>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600" 
                  alt="Executive professional" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden h-48 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600" 
                  alt="Business leader" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

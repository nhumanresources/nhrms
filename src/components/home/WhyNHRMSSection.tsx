
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, IndianRupee, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyNHRMSSection() {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Personalized Approach",
      description: "Tailored HR strategies designed specifically for your organization's unique needs and culture.",
      highlight: "Custom solutions for every client"
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Expert Consultants",
      description: "20+ years of HR expertise with deep understanding of organizational dynamics and talent management.",
      highlight: "Founded by HR Practitioners"
    },
    {
      icon: <IndianRupee className="h-10 w-10 text-primary" />,
      title: "Strategic Partnership",
      description: "Long-term relationships focused on sustainable growth and continuous improvement of your HR capabilities.",
      highlight: "Your trusted HR partner"
    }
  ];

  const features = [
    "Strategic HR consultation",
    "Talent acquisition & executive search", 
    "HR process optimization",
    "Dedicated consultant relationship",
    "24/7 support via Telegram",
    "Custom HR transformation projects"
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-modern relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Why Partner With nHRMS?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
            We're your boutique HR consultancy focused on delivering personalized, strategic solutions that drive meaningful organizational transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Benefits Cards */}
          <div className="space-y-8 animate-slide-in-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-modern card-glow group hover:scale-105 p-8 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-balance leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {benefit.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Features List */}
          <div className="card-modern card-glow p-10 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Expertise
            </h3>
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="xl" variant="modern" className="shadow-glow group" asChild>
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Let's discuss your HR challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

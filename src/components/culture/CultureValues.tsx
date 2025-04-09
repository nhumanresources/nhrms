
import { Award, Heart, Lightbulb, BarChart3, Users, Target } from 'lucide-react';

export default function CultureValues() {
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
      title: "Innovation",
      description: "We challenge conventions and explore new approaches to deliver exceptional solutions."
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "Excellence",
      description: "We pursue the highest standards in our work and continuously strive to exceed expectations."
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "Empathy",
      description: "We seek to understand the needs and perspectives of our clients and team members."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      title: "Impact",
      description: "We focus on creating meaningful outcomes that drive business success and individual growth."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Collaboration",
      description: "We leverage collective expertise to solve complex challenges and innovate together."
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Accountability",
      description: "We take ownership of our work and deliver on our commitments with integrity."
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Cultural Values</h2>
          <p className="text-lg text-muted-foreground">
            These core values guide how we work together and serve our clients, shaping our approach to both customer and employee experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

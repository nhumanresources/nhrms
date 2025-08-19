
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import TrustpilotWidget from '@/components/ui/trustpilot-widget';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "Founder & CEO",
      company: "TechStart India",
      content: "nHRMS reduced our HR costs by 40% while improving compliance. Their team understands the Indian startup ecosystem perfectly.",
      rating: 5,
      result: "40% cost reduction"
    },
    {
      name: "Priya Sharma",
      title: "HR Director", 
      company: "GrowthCorp Solutions",
      content: "The payroll automation and compliance management has been a game-changer. We've processed over 5,000 payslips without any issues.",
      rating: 5,
      result: "100% compliance rate"
    },
    {
      name: "Amit Patel",
      title: "Operations Head",
      company: "Digital Dynamics",
      content: "From hiring to performance management, nHRMS has streamlined our entire people process. Highly recommended for growing companies.",
      rating: 5,
      result: "3x faster hiring"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what founders and HR leaders say about partnering with nHRMS.
          </p>
          <TrustpilotWidget variant="header" className="max-w-2xl mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl rounded-2xl relative overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-16 w-16 text-blue-600" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Result Badge */}
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {testimonial.result}
                </div>
                
                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

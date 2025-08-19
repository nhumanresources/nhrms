
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, IndianRupee, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyNHRMSSection() {
  const benefits = [
    {
      icon: <IndianRupee className="h-8 w-8 text-green-600" />,
      title: "Transparent Pricing",
      description: "Flexible pricing models that grow with your business. No hidden costs, no surprises.",
      highlight: "Affordable plans for all business sizes"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Scalable Solutions", 
      description: "From 10 to 10,000 employees. Our systems grow with your business needs.",
      highlight: "Supports unlimited growth"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Expert Team",
      description: "20+ years of HR expertise with deep understanding of Indian business landscape.",
      highlight: "Founded by HR Practitioners"
    }
  ];

  const features = [
    "Free HRMS setup and training",
    "10,000 payslip processing capability", 
    "Complete statutory compliance",
    "Dedicated account manager",
    "24/7 support via WhatsApp & Telegram",
    "Custom HR project support"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose nHRMS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another HR vendor. We're your strategic partner in building a people-first organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-white bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {benefit.description}
                      </p>
                      <div className="text-sm font-medium text-blue-600">
                        {benefit.highlight}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Features List */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What's Included
            </h3>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link to="/contact">
                  Start Your Free Trial
                </Link>
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                No setup fees • No long-term contracts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

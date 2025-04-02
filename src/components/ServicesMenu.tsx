
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ServicesMenu() {
  const serviceCategories = [
    {
      id: "capabilities",
      title: "Capabilities",
      items: [
        "Organization Strategy",
        "Total Rewards",
        "Assessment & Succession",
        "Talent Acquisition",
        "Leadership & Professional Development"
      ]
    },
    {
      id: "solutions",
      title: "Featured Solutions",
      items: [
        "Diversity, Equity & Inclusion",
        "ESG & Sustainability",
        "Sales Effectiveness",
        "Workforce Transformation",
        "Cost Optimization",
        "Career Transition & Outplacement",
        "Customer Experience",
        "Talent Management",
        "Training & Certification"
      ]
    },
    {
      id: "products",
      title: "Products",
      items: [
        "Talent Suite Overview",
        "nHRMS Architect",
        "nHRMS Assess",
        "nHRMS Coach",
        "nHRMS Learn",
        "nHRMS Listen",
        "nHRMS Pay",
        "nHRMS Sell",
        "Talent Suite Resources"
      ]
    },
    {
      id: "academia",
      title: "Academia",
      items: [
        "Learning Solutions",
        "Internship Programs",
        "Career Development",
        "Certifications",
        "Research Opportunities",
        "Industry-Academia Partnership"
      ]
    },
    {
      id: "industries",
      title: "Industries",
      items: [
        "Consumer Markets",
        "Financial Services",
        "Healthcare",
        "Life Sciences",
        "Industrial",
        "Technology",
        "Government & Public Services"
      ]
    },
    {
      id: "functions",
      title: "Functions",
      items: [
        "Board & CEO Services",
        "Accounting",
        "Corporate Affairs",
        "Cybersecurity",
        "Digital & Technology",
        "Finance",
        "Human Resources",
        "Legal",
        "Marketing",
        "Risk Management",
        "Sales",
        "Supply Chain",
        "Sustainability"
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Tabs defaultValue="capabilities" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-8">
            {serviceCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-lg px-6">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {category.items.map((item, index) => (
                      <Link 
                        key={index} 
                        to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="p-4 rounded-lg hover:bg-primary/10 transition-colors border border-border/50"
                      >
                        <h3 className="font-medium text-lg mb-2 text-primary">{item}</h3>
                        <p className="text-sm text-muted-foreground">
                          Expert solutions and consulting for {item.toLowerCase()} challenges.
                        </p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

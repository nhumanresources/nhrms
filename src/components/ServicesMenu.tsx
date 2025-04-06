
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ServicesMenu() {
  const serviceCategories = [
    {
      id: "capabilities",
      title: "Capabilities",
      items: [
        {
          name: "Organization Strategy",
          link: "/services/organization-strategy"
        },
        {
          name: "Total Rewards",
          link: "/services/total-rewards"
        },
        {
          name: "Assessment & Succession",
          link: "/services/hr-advisory"
        },
        {
          name: "Talent Acquisition",
          link: "/services/talent-acquisition"
        },
        {
          name: "Leadership & Professional Development",
          link: "/services/leadership-&-professional-development"
        }
      ]
    },
    {
      id: "solutions",
      title: "Featured Solutions",
      items: [
        {
          name: "Diversity, Equity & Inclusion",
          link: "/services/hr-advisory"
        },
        {
          name: "ESG & Sustainability",
          link: "/services/hr-advisory"
        },
        {
          name: "Sales Effectiveness",
          link: "/services/go-to-market"
        },
        {
          name: "Workforce Transformation",
          link: "/services/hr-advisory"
        },
        {
          name: "Cost Optimization",
          link: "/services/hr-advisory"
        },
        {
          name: "Career Transition & Outplacement",
          link: "/services/hr-advisory"
        },
        {
          name: "Customer Experience",
          link: "/services/go-to-market"
        },
        {
          name: "Talent Management",
          link: "/services/talent-acquisition"
        },
        {
          name: "Training & Certification",
          link: "/services/certifications"
        }
      ]
    },
    {
      id: "products",
      title: "Products",
      items: [
        {
          name: "Talent Suite Overview",
          link: "/services/hr-tech"
        },
        {
          name: "nHRMS Architect",
          link: "/services/hr-tech"
        },
        {
          name: "nHRMS Assess",
          link: "/services/hr-tech"
        },
        {
          name: "nHRMS Coach",
          link: "/services/hr-tech"
        },
        {
          name: "nHRMS Learn",
          link: "/services/hr-tech"
        },
        {
          name: "nHRMS Listen",
          link: "/services/hr-tech"
        },
        {
          name: "nHRMS Pay",
          link: "/services/hr-tech"
        },
        {
          name: "nHRMS Sell",
          link: "/services/hr-tech"
        },
        {
          name: "Talent Suite Resources",
          link: "/services/hr-tech"
        }
      ]
    },
    {
      id: "academia",
      title: "Academia",
      items: [
        {
          name: "Learning Solutions",
          link: "/learning-solutions"
        },
        {
          name: "Internship Programs",
          link: "/services/internship-programs"
        },
        {
          name: "Career Development",
          link: "/services/career-development"
        },
        {
          name: "Certifications",
          link: "/services/certifications"
        },
        {
          name: "Research Opportunities",
          link: "/research"
        },
        {
          name: "Industry-Academia Partnership",
          link: "/learning-solutions"
        }
      ]
    },
    {
      id: "industries",
      title: "Industries",
      items: [
        {
          name: "Consumer Markets",
          link: "/services"
        },
        {
          name: "Financial Services",
          link: "/services"
        },
        {
          name: "Healthcare",
          link: "/services"
        },
        {
          name: "Life Sciences",
          link: "/services"
        },
        {
          name: "Industrial",
          link: "/services"
        },
        {
          name: "Technology",
          link: "/services"
        },
        {
          name: "Government & Public Services",
          link: "/services"
        }
      ]
    },
    {
      id: "functions",
      title: "Functions",
      items: [
        {
          name: "Board & CEO Services",
          link: "/services/executive-search"
        },
        {
          name: "Accounting",
          link: "/services"
        },
        {
          name: "Corporate Affairs",
          link: "/services"
        },
        {
          name: "Cybersecurity",
          link: "/services"
        },
        {
          name: "Digital & Technology",
          link: "/services"
        },
        {
          name: "Finance",
          link: "/services"
        },
        {
          name: "Human Resources",
          link: "/services/hr-advisory"
        },
        {
          name: "Legal",
          link: "/services"
        },
        {
          name: "Marketing",
          link: "/services"
        },
        {
          name: "Risk Management",
          link: "/services"
        },
        {
          name: "Sales",
          link: "/services"
        },
        {
          name: "Supply Chain",
          link: "/services"
        },
        {
          name: "Sustainability",
          link: "/services"
        }
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
                        to={item.link}
                        className="p-4 rounded-lg hover:bg-primary/10 transition-colors border border-border/50"
                      >
                        <h3 className="font-medium text-lg mb-2 text-primary">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Expert solutions and consulting for {item.name.toLowerCase()} challenges.
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

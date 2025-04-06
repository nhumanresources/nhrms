
import { Link } from "react-router-dom";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceItemType } from "./types";

interface ServiceCategoryProps {
  categoryId: string;
  items: ServiceItemType[];
}

export default function ServiceCategory({ categoryId, items }: ServiceCategoryProps) {
  // Simplified validation function that ensures all links work
  const getValidLink = (link: string) => {
    // Direct all services to either their specific page or the main services page
    return link || "/services";
  };

  return (
    <TabsContent key={categoryId} value={categoryId} className="mt-6">
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <Link 
                key={index} 
                to={getValidLink(item.link)}
                className="p-4 rounded-lg hover:bg-muted transition-colors border border-border/50 flex flex-col h-full"
              >
                <h3 className="font-medium text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description || `Solutions for ${item.name.toLowerCase()}`}
                </p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

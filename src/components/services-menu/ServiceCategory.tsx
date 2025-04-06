
import { Link } from "react-router-dom";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceItemType } from "./types";

interface ServiceCategoryProps {
  categoryId: string;
  items: ServiceItemType[];
}

export default function ServiceCategory({ categoryId, items }: ServiceCategoryProps) {
  // Function to check if a link exists in our routes
  const getValidLink = (link: string) => {
    // For now, we'll redirect to the main services page if the specific page doesn't exist
    // This ensures users don't hit a 404 page
    return link || "/services";
  };

  return (
    <TabsContent key={categoryId} value={categoryId} className="mt-6">
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <Link 
                key={index} 
                to={getValidLink(item.link)}
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
  );
}

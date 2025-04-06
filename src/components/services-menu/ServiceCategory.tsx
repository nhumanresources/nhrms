
import { Link } from "react-router-dom";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceItemProps {
  name: string;
  link: string;
}

interface ServiceCategoryProps {
  categoryId: string;
  items: ServiceItemProps[];
}

export default function ServiceCategory({ categoryId, items }: ServiceCategoryProps) {
  return (
    <TabsContent key={categoryId} value={categoryId} className="mt-6">
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
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
  );
}

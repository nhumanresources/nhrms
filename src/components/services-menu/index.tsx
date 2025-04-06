
import { Tabs } from "@/components/ui/tabs";
import ServiceCategory from "./ServiceCategory";
import ServiceCategoryTabs from "./ServiceCategoryTabs";
import { serviceCategories } from "./serviceCategories";

export default function ServicesMenu() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Tabs defaultValue="capabilities" className="w-full">
          <ServiceCategoryTabs categories={serviceCategories} />
          
          {serviceCategories.map((category) => (
            <ServiceCategory 
              key={category.id}
              categoryId={category.id}
              items={category.items}
            />
          ))}
        </Tabs>
      </div>
    </section>
  );
}

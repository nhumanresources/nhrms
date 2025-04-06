
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCategoryType } from "./types";

interface ServiceCategoryTabsProps {
  categories: ServiceCategoryType[];
}

export default function ServiceCategoryTabs({ categories }: ServiceCategoryTabsProps) {
  return (
    <TabsList className="w-full flex flex-wrap justify-center mb-8">
      {categories.map((category) => (
        <TabsTrigger 
          key={category.id} 
          value={category.id} 
          className="text-lg px-6"
        >
          {category.title}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}

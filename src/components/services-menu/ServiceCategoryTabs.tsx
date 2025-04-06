
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCategoryType } from "./types";

interface ServiceCategoryTabsProps {
  categories: ServiceCategoryType[];
}

export default function ServiceCategoryTabs({ categories }: ServiceCategoryTabsProps) {
  return (
    <TabsList className="flex flex-wrap justify-center mb-6 bg-transparent gap-2">
      {categories.map((category) => (
        <TabsTrigger 
          key={category.id} 
          value={category.id} 
          className="text-lg px-6 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md"
        >
          {category.title}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}

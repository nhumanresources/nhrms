
export interface ServiceItemType {
  name: string;
  link: string;
  description?: string;
}

export interface ServiceCategoryType {
  id: string;
  title: string;
  items: ServiceItemType[];
}

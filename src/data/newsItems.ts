
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  snippet: string;
  image: string;
}

export const hrNews: NewsItem[] = [
  {
    id: 1,
    title: "SMEs Facing Talent Acquisition Challenges",
    date: "June 15, 2024",
    category: "Talent",
    snippet: "Organizations with less than 500 employees struggle to navigate the rapidly changing talent landscape amid increasing competition.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI Integration in HR Processes",
    date: "June 10, 2024",
    category: "Technology",
    snippet: "How artificial intelligence is transforming hiring, onboarding, and employee development processes for smaller organizations.",
    image: "https://images.unsplash.com/photo-1677442135133-4da243bbacc5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Employee Mental Health Initiatives for SMEs",
    date: "June 5, 2024",
    category: "Wellbeing",
    snippet: "Cost-effective approaches to supporting employee mental health in small and medium enterprises.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "DEI Best Practices for Growing Companies",
    date: "May 28, 2024",
    category: "DEI",
    snippet: "Implementing diversity, equity and inclusion strategies with limited resources in SMEs under 500 employees.",
    image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Compliance Challenges for Small Businesses",
    date: "May 20, 2024",
    category: "Legal",
    snippet: "How SMEs can navigate complex labor laws and HR regulations without dedicated legal departments.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop"
  }
];

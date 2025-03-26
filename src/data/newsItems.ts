
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
    title: "Remote Work Policy Updates for 2024",
    date: "June 15, 2024",
    category: "Policy",
    snippet: "New guidelines for flexible work arrangements that balance employee preferences with business needs.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI Integration in HR Processes",
    date: "June 10, 2024",
    category: "Technology",
    snippet: "How artificial intelligence is transforming hiring, onboarding, and employee development processes.",
    image: "https://images.unsplash.com/photo-1677442135133-4da243bbacc5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Employee Mental Health Initiatives",
    date: "June 5, 2024",
    category: "Wellbeing",
    snippet: "Innovative approaches to supporting employee mental health and preventing burnout.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "DEI Best Practices: 2024 Edition",
    date: "May 28, 2024",
    category: "DEI",
    snippet: "Updated strategies for creating more diverse, equitable and inclusive workplaces.",
    image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Compliance Update: New Labor Laws",
    date: "May 20, 2024",
    category: "Legal",
    snippet: "Summary of recent changes to labor laws and regulations affecting employers.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop"
  }
];

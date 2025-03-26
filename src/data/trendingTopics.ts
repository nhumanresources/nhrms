
export interface TrendingTopic {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

// Trending topics data
export const trendingTopics: TrendingTopic[] = [
  {
    id: 1,
    title: "AI in Talent Acquisition",
    description: "How artificial intelligence is transforming recruitment processes and improving candidate experience.",
    category: "Technology",
    date: "June 15, 2024",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=2342&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The Future of Remote Work",
    description: "Post-pandemic trends shaping distributed workforce management and organizational culture.",
    category: "Workplace",
    date: "May 23, 2024",
    image: "https://images.unsplash.com/photo-1584677626646-7c8f83690304?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Employee Wellbeing Strategies",
    description: "Holistic approaches to mental health and work-life balance in the modern workplace.",
    category: "Wellbeing",
    date: "April 10, 2024",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2232&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Diversity, Equity & Inclusion",
    description: "Implementing effective DEI initiatives that drive organizational performance and innovation.",
    category: "DEI",
    date: "March 27, 2024",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Skills-Based Talent Management",
    description: "Moving beyond traditional roles to focus on capabilities, competencies and potential.",
    category: "Talent",
    date: "February 18, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
  }
];

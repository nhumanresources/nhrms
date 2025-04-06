
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface NewsItemProps {
  id: number;
  title: string;
  date: string;
  category: string;
  snippet: string;
  image: string;
}

export default function NewsCard({ item }: { item: NewsItemProps }) {
  return (
    <Link to={`/blog/${item.id}`} className="block h-full">
      <Card className="h-full border border-border/50 overflow-hidden hover:shadow-md transition-all duration-300 bg-card">
        <div className="aspect-video overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            onError={(e) => {
              // Fallback to a placeholder image if the original fails to load
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
            }}
          />
        </div>
        <CardContent className="p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {item.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {item.date}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.snippet}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

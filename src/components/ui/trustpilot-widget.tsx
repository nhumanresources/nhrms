import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TrustpilotWidgetProps {
  variant?: 'micro' | 'badge' | 'header';
  className?: string;
}

export default function TrustpilotWidget({ variant = 'micro', className = '' }: TrustpilotWidgetProps) {
  const rating = 4.8;
  const reviewCount = 127;
  const trustpilotUrl = "https://www.trustpilot.com/review/nhrms.com";

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  if (variant === 'micro') {
    return (
      <div className={`inline-flex items-center space-x-2 ${className}`}>
        <div className="flex items-center space-x-1">
          {renderStars()}
        </div>
        <span className="text-sm font-medium">{rating}</span>
        <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
        <a 
          href={trustpilotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 transition-colors"
        >
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center ${className}`}>
        <div className="flex items-center justify-center space-x-1 mb-2">
          {renderStars()}
        </div>
        <div className="text-lg font-bold text-white">{rating}/5</div>
        <div className="text-sm text-white/80">{reviewCount} Trustpilot reviews</div>
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <div className={`bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100 ${className}`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center space-x-1">
                {renderStars()}
              </div>
              <span className="text-lg font-bold text-gray-900">{rating}/5</span>
            </div>
            <p className="text-gray-600">
              Based on <span className="font-semibold">{reviewCount} reviews</span> on
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="font-bold text-green-600">Trustpilot</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a 
              href={trustpilotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              See all reviews <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
import { useState } from 'react';
import { Linkedin, Twitter, Facebook, Link2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SocialShareButtonsProps {
  title: string;
  summary?: string;
  className?: string;
}

export default function SocialShareButtons({ title, summary, className = '' }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary || title);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the URL manually from your browser.",
        variant: "destructive",
      });
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm text-muted-foreground font-medium">Share:</span>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          onClick={() => handleShare('linkedin')}
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={16} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          onClick={() => handleShare('twitter')}
          aria-label="Share on Twitter"
        >
          <Twitter size={16} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          onClick={() => handleShare('facebook')}
          aria-label="Share on Facebook"
        >
          <Facebook size={16} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          onClick={handleCopyLink}
          aria-label="Copy link"
        >
          {copied ? <Check size={16} /> : <Link2 size={16} />}
        </Button>
      </div>
    </div>
  );
}

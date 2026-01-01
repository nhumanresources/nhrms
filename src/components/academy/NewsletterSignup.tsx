import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface NewsletterSignupProps {
  variant?: 'default' | 'minimal' | 'card';
}

export default function NewsletterSignup({ variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setEmail('');
    toast.success('Welcome to nHRMS Academy! Check your inbox for confirmation.');
    setIsSubmitting(false);
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
        <CheckCircle className="h-5 w-5 text-emerald-600" />
        <span className="text-sm text-emerald-700 dark:text-emerald-400">
          You're subscribed! Check your inbox for weekly HR insights.
        </span>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    );
  }

  if (variant === 'card') {
    return (
      <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground">Weekly HR Insights</h3>
            <p className="text-sm text-muted-foreground">Join 5,000+ HR professionals</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background"
            disabled={isSubmitting}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground mt-3 text-center">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    );
  }

  // Default variant - full width banner
  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="newsletter-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#newsletter-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Mail className="h-4 w-4 text-secondary" />
            <span className="text-sm text-white/90">Weekly HR Insights</span>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Ahead of HR Trends
          </h2>

          <p className="text-white/80 mb-8">
            Join 5,000+ HR professionals receiving our weekly insights on recruiting, 
            compliance, HR tech, and more. No spam, just valuable content.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
            </Button>
          </form>

          <p className="text-xs text-white/60 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

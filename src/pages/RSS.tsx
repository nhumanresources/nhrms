import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rss, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const RSS = () => {
  const rssUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/rss-feed`;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="RSS Feed | nHRMS - HR Insights & Research"
        description="Subscribe to nHRMS RSS feed to get the latest HR research, insights, case studies, and industry news delivered directly to your feed reader."
        keywords="RSS feed, HR news, HR research, nHRMS updates, HR insights"
        canonicalUrl="https://nhrms.com/rss"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary/10 p-4 rounded-full">
              <Rss className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">RSS Feed</h1>
              <p className="text-muted-foreground">Stay updated with our latest content</p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Subscribe to nHRMS RSS Feed</CardTitle>
              <CardDescription>
                Get the latest HR research, insights, case studies, and industry news delivered directly to your favorite RSS reader.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">RSS Feed URL:</p>
                <code className="text-xs bg-background p-2 rounded block break-all">
                  {rssUrl}
                </code>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href={rssUrl} target="_blank" rel="noopener noreferrer">
                    <Rss className="mr-2 h-4 w-4" />
                    Open RSS Feed
                  </a>
                </Button>
                <Button variant="outline" onClick={() => navigator.clipboard.writeText(rssUrl)}>
                  Copy Feed URL
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What's Included in Our Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">Research</span>
                  <span className="text-muted-foreground">Latest research papers and whitepapers on HR trends and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">Blog</span>
                  <span className="text-muted-foreground">Insights and articles on HR technology, leadership, and workplace culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">Case Studies</span>
                  <span className="text-muted-foreground">Real-world success stories and implementation guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">Press</span>
                  <span className="text-muted-foreground">Company announcements and press releases</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              New to RSS? Learn how to use RSS feeds with popular readers:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://feedly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center text-sm"
              >
                Feedly <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a 
                href="https://inoreader.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center text-sm"
              >
                Inoreader <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a 
                href="https://newsblur.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center text-sm"
              >
                NewsBlur <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RSS;

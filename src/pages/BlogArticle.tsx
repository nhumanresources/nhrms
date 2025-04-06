
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { hrNews } from '@/data/newsItems';

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(hrNews.find(item => item.id === Number(id)));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the article based on the ID
    const currentArticle = hrNews.find(item => item.id === Number(id));
    setArticle(currentArticle);
    
    // Set page title
    if (currentArticle) {
      document.title = `${currentArticle.title} | nHRMS Blog`;
    } else {
      document.title = "Article Not Found | nHRMS Blog";
    }
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-28">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
              <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
              <Button asChild>
                <Link to="/blog">Return to Blog</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder image if the original fails to load
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                }}
              />
            </div>
            
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {article.date}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
              
              <div className="prose max-w-none">
                <p className="text-lg mb-6">{article.snippet}</p>
                
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h2>Key Insights</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <h3>Industry Implications</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                
                <blockquote>
                  "Strategic HR management is crucial for organizations looking to thrive in today's competitive landscape. Businesses that invest in their talent acquisition processes see higher retention rates and better business outcomes."
                </blockquote>
                
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
                
                <h3>Moving Forward</h3>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

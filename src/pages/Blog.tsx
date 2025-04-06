
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { hrNews } from '@/data/newsItems';
import NewsCard from '@/components/news/NewsCard';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog | nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stay updated with the latest trends and insights in human resources management and strategic workforce planning.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">HR Insights Blog</h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with trends and insights in human resources management
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hrNews.map(article => (
              <div key={article.id}>
                <NewsCard item={article} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LearningServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Redirect to the new page name
    window.location.href = "/learning-solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <BookOpen size={48} className="mx-auto text-primary mb-6" />
          <h1 className="text-3xl font-bold mb-4">Redirecting to Learning Solutions</h1>
          <p className="text-muted-foreground mb-8">Please wait while we redirect you to our Learning Solutions page...</p>
          <Button asChild>
            <Link to="/learning-solutions">Go to Learning Solutions</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

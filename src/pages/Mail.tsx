
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

export default function MailRedirect() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mail Service | nHRMS";
    
    // Redirect after a short delay to allow the user to see the page
    const timer = setTimeout(() => {
      window.location.href = 'https://mail.google.com/a/nhrms.com';
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
          <div className="bg-primary/5 max-w-2xl mx-auto p-8 rounded-xl">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">nHRMS Mail Service</h1>
            <p className="text-lg text-muted-foreground mb-8">
              You are being redirected to the nHRMS email portal powered by Google Workspace.
              If you are not redirected automatically, please click the button below.
            </p>
            <Button size="lg" onClick={() => window.location.href = 'https://mail.google.com/a/nhrms.com'}>
              Go to Mail <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginTabs from '@/components/LoginTabs';

export default function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Login - nHRMS";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to access your account</p>
            </div>
            
            <LoginTabs />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

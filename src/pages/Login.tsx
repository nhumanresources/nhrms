
import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/animations';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [animating, setAnimating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if register parameter is in the URL
    const params = new URLSearchParams(location.search);
    setIsRegister(params.get('register') === 'true');
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [location]);

  const toggleForm = (register: boolean) => {
    if (isRegister === register) return;
    
    setAnimating(true);
    setTimeout(() => {
      setIsRegister(register);
      setAnimating(false);
      
      // Update URL without full page reload
      const newSearch = register ? '?register=true' : '';
      navigate({ pathname: '/login', search: newSearch }, { replace: true });
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-blue-50 to-white">
      {/* Left side - Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-50 to-white p-10 items-center justify-center">
        <div className="max-w-md mx-auto text-center" {...fadeIn(300)}>
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="relative">
              <svg 
                viewBox="0 0 100 100" 
                className="w-32 h-32 mx-auto mb-6 text-primary" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M50,20 L50,80 M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">nHRMS Portal</h2>
          <p className="text-muted-foreground mb-6">
            Access our comprehensive HR management platform to transform your organization's human resource operations.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center max-w-xs mx-auto">
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <div className="font-bold text-xl text-primary">360°</div>
              <div className="text-sm text-muted-foreground mt-1">HR Solutions</div>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <div className="font-bold text-xl text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Compliance</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="w-full md:w-1/2 bg-gradient-to-tr from-white to-blue-50 flex flex-col">
        <div className="p-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="flex-grow flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-md space-y-8 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            {/* Tab navigation */}
            <div className="flex border-b">
              <button
                type="button"
                className={cn(
                  "pb-2 px-4 text-sm font-medium transition-colors",
                  !isRegister ? "border-b-2 border-primary text-foreground" : "text-muted-foreground"
                )}
                onClick={() => toggleForm(false)}
              >
                Sign in
              </button>
              <button
                type="button"
                className={cn(
                  "pb-2 px-4 text-sm font-medium transition-colors",
                  isRegister ? "border-b-2 border-primary text-foreground" : "text-muted-foreground"
                )}
                onClick={() => toggleForm(true)}
              >
                Register
              </button>
            </div>
            
            {/* Form */}
            <div className={cn("transition-opacity duration-300", animating ? "opacity-0" : "opacity-100")}>
              {isRegister ? <RegisterForm /> : <LoginForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

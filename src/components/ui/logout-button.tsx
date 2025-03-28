
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { setLoggedOut, isLoggedIn } from '@/utils/loginHelper';
import { LogOut, LogIn } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export function LogoutButton() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check login status whenever component mounts or updates
    setLoggedIn(isLoggedIn());
    
    // Set up a listener for storage events to sync login state across tabs
    const handleStorageChange = () => {
      setLoggedIn(isLoggedIn());
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    setLoggedOut();
    setLoggedIn(false);
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  if (loggedIn) {
    return (
      <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2">
        <LogOut className="h-4 w-4" />
        <span>Logout</span>
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleLogin} className="flex items-center gap-2">
      <LogIn className="h-4 w-4" />
      <span>Login</span>
    </Button>
  );
}

import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, LogIn } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

export function LogoutButton() {
  const { user, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    await signOut();
    
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out",
    });
    
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  if (isLoading) {
    return null;
  }

  if (user) {
    return (
      <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2">
        <LogOut className="h-4 w-4" />
        <span>Sign Out</span>
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleLogin} className="flex items-center gap-2">
      <LogIn className="h-4 w-4" />
      <span>Sign In</span>
    </Button>
  );
}


import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLogoProps {
  isScrolled?: boolean;
}

export const NavLogo = ({ isScrolled = false }: NavLogoProps) => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2" 
      aria-label="n Human Resources & Management Systems Home"
    >
      <div className={cn(
        "font-bold text-sm md:text-lg transition-all hover:opacity-80",
        isScrolled ? "text-primary" : "text-white"
      )}>
        nHRMS
      </div>
    </Link>
  );
};

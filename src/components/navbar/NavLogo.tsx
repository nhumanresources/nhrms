
import { Link } from 'react-router-dom';

export const NavLogo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2" 
      aria-label="nHRMS Home"
    >
      <div className="font-bold text-lg md:text-xl text-primary transition-all hover:opacity-80">
        nHRMS
      </div>
    </Link>
  );
};

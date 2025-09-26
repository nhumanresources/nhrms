
import { Link } from 'react-router-dom';

export const NavLogo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2" 
      aria-label="n Human Resources and Management Systems - nHRMS Home"
    >
      <div className="font-bold text-lg md:text-xl text-primary transition-all hover:opacity-80">
        <span className="hidden lg:inline">n Human Resources and Management Systems - </span>
        <span className="text-primary">[ nHRMS ]</span>
      </div>
    </Link>
  );
};

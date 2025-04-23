
import { Link } from 'react-router-dom';

export const NavLogo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <div className="font-bold text-lg md:text-xl bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-transparent bg-clip-text transition-all hover:opacity-80">
      n Human Resources and Management Systems
    </div>
  </Link>
);

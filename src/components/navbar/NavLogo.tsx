
import { Link } from 'react-router-dom';

export const NavLogo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <div className="font-bold text-lg md:text-xl bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text">
      nHRMS
    </div>
  </Link>
);

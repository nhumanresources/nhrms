
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const NavLogo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2" 
      aria-label="nHRMS Home"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onFocus={() => setIsExpanded(true)}
      onBlur={() => setIsExpanded(false)}
    >
      <div className="font-bold text-lg md:text-xl text-primary transition-all hover:opacity-80 overflow-hidden">
        <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'w-auto opacity-100' : 'w-16 opacity-100'}`}>
          <span className="inline-block">n</span>
          <span className={`inline-block transition-all duration-500 ${isExpanded ? 'max-w-none opacity-100' : 'max-w-0 opacity-0 overflow-hidden'}`}>
            {' Human Resources & Management Systems'}
          </span>
          <span className={`inline-block ${isExpanded ? 'hidden' : ''}`}>HRMS</span>
        </div>
      </div>
    </Link>
  );
};


import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const NavItems = ({ isActive }: { isActive: (path: string) => boolean }) => (
  <>
    <Link 
      to="/who-we-are" 
      className={cn(
        "animated-link text-sm font-medium", 
        isActive('/who-we-are') ? "text-primary font-semibold" : "text-muted-foreground"
      )}
    >
      Who are we
    </Link>
    <Link 
      to="/culture" 
      className={cn(
        "animated-link text-sm font-medium", 
        isActive('/culture') ? "text-primary font-semibold" : "text-muted-foreground"
      )}
    >
      Our Culture
    </Link>
    <div className="relative group">
      <button 
        className={cn(
          "flex items-center animated-link text-sm font-medium",
          isActive('/services') ? "text-primary font-semibold" : "text-muted-foreground"
        )} 
        aria-haspopup="true" 
        aria-expanded="false"
      >
        Our Focus <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50" role="menu">
        <div className="glass-panel rounded-lg p-3 shadow-xl">
          <div className="mb-2 px-4 py-1 text-xs font-semibold text-muted-foreground">Build</div>
          <Link to="/services/executive-search" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            Executive Search
          </Link>
          <Link to="/services/talent-acquisition" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            Build Teams - Talent Acquisition
          </Link>
          
          <div className="mt-2 mb-1 px-4 py-1 text-xs font-semibold text-muted-foreground">Operate</div>
          <Link to="/services/bot-hr-teams" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            HR Teams (On-Prem, Remote)
          </Link>
          
          <div className="mt-2 mb-1 px-4 py-1 text-xs font-semibold text-muted-foreground">Growth</div>
          <Link to="/services/go-to-market" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            Go to Market Strategy & Execution
          </Link>
          <Link to="/learning-solutions" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            Learning Solutions
          </Link>
          <Link to="/services/hr-tech" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            HR Technology
          </Link>
          
          <div className="mt-2 mb-1 px-4 py-1 text-xs font-semibold text-muted-foreground">Advisory</div>
          <Link to="/services/hr-advisory" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            HR Advisory
          </Link>
        </div>
      </div>
    </div>
    <Link 
      to="/case-studies" 
      className={cn(
        "animated-link text-sm font-medium", 
        isActive('/case-studies') ? "text-primary font-semibold" : "text-muted-foreground"
      )}
    >
      Case Studies
    </Link>
    <Link 
      to="/research" 
      className={cn(
        "animated-link text-sm font-medium", 
        isActive('/research') ? "text-primary font-semibold" : "text-muted-foreground"
      )}
    >
      Research
    </Link>
    <Link 
      to="/contact" 
      className={cn(
        "animated-link text-sm font-medium", 
        isActive('/contact') ? "text-primary font-semibold" : "text-muted-foreground"
      )}
    >
      Contact Us
    </Link>
  </>
);

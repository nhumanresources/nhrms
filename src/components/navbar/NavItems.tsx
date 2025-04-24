import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const NavItems = ({ isActive }: { isActive: (path: string) => boolean }) => (
  <>
    <Link 
      to="/who-we-are" 
      className={cn(
        "relative px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary", 
        isActive('/who-we-are') 
          ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
          : "text-muted-foreground"
      )}
    >
      Who are we
    </Link>
    
    <Link 
      to="/partners" 
      className={cn(
        "relative px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary", 
        isActive('/partners') 
          ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
          : "text-muted-foreground"
      )}
    >
      Partners
    </Link>
    
    <div className="relative group">
      <button 
        className={cn(
          "relative flex items-center px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary",
          isActive('/services') 
            ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
            : "text-muted-foreground"
        )} 
        aria-haspopup="true" 
        aria-expanded="false"
      >
        Our Focus <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50" role="menu">
        <div className="bg-white/95 backdrop-blur-lg rounded-lg p-3 shadow-xl border border-border/30">
          <div className="mb-2 px-4 py-1 text-xs font-semibold text-primary/70">Build</div>
          <Link to="/services/executive-search" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Executive Search
          </Link>
          <Link to="/services/talent-acquisition" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Build Teams - Talent Acquisition
          </Link>
          
          <div className="mt-2 mb-1 px-4 py-1 text-xs font-semibold text-primary/70">Operate</div>
          <Link to="/services/bot-hr-teams" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            HR Teams (On-Prem, Remote)
          </Link>
          
          <div className="mt-2 mb-1 px-4 py-1 text-xs font-semibold text-primary/70">Growth</div>
          <Link to="/services/go-to-market" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Go to Market Strategy & Execution
          </Link>
          <Link to="/learning-solutions" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Learning Solutions
          </Link>
          <Link to="/services/hr-tech" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            HR Technology
          </Link>
          <Link to="/services/hr-tech-solutions" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            HR Tech Solutions & Implementation
          </Link>
          
          <div className="mt-2 mb-1 px-4 py-1 text-xs font-semibold text-primary/70">Advisory</div>
          <Link to="/services/hr-advisory" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            HR Advisory
          </Link>
        </div>
      </div>
    </div>
    
    <Link 
      to="/case-studies" 
      className={cn(
        "relative px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary", 
        isActive('/case-studies') 
          ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
          : "text-muted-foreground"
      )}
    >
      Case Studies
    </Link>
    
    <Link 
      to="/research" 
      className={cn(
        "relative px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary", 
        isActive('/research') 
          ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
          : "text-muted-foreground"
      )}
    >
      Research
    </Link>
    
    <a 
      href="https://careeredge.nhrms.com" 
      className="px-2 py-1 text-sm font-semibold text-primary hover:text-primary/80 ml-2 bg-primary/10 rounded-full flex items-center transition-all hover:bg-primary/20"
      title="Career Edge – Your assistant to Job Seekers"
    >
      Career Edge <span className="sr-only">(assistant to Job Seekers)</span>
    </a>
  </>
);

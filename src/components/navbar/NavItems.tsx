
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const NavItems = ({ isActive }: { isActive: (path: string) => boolean }) => (
  <>
    <div className="relative group">
      <button 
        className={cn(
          "relative flex items-center px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary",
          isActive('/who-we-are') || isActive('/partners') || isActive('/culture') || isActive('/press-releases')
            ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
            : "text-muted-foreground"
        )} 
        aria-haspopup="true" 
        aria-expanded="false"
      >
        Company <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50" role="menu">
        <div className="bg-white/95 backdrop-blur-lg rounded-lg p-3 shadow-xl border border-border/30">
          <Link to="/who-we-are" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Who Are We
          </Link>
          <Link to="/culture" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Our Culture
          </Link>
          <Link to="/partners" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Partners
          </Link>
          <Link to="/press-releases" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Press Releases
          </Link>
          <Link to="/lms-login" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            LMS Login
          </Link>
        </div>
      </div>
    </div>
    
    <Link 
      to="/services" 
      className={cn(
        "relative px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary", 
        isActive('/services') 
          ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
          : "text-muted-foreground"
      )}
    >
      Our Focus
    </Link>
    
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
    
    <Link 
      to="/hr-roadmap" 
      className={cn(
        "relative px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary", 
        isActive('/hr-roadmap') 
          ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
          : "text-muted-foreground"
      )}
    >
      HR Roadmap
    </Link>
    
    <a 
      href="https://careeredge.nhrms.com" 
      className="px-2 py-1 text-sm font-semibold text-primary hover:text-primary/80 ml-2 bg-primary/10 rounded-full flex items-center transition-all hover:bg-primary/20"
      title="Career Edge – Your assistant to Job Seekers"
      target="_blank"
      rel="noopener noreferrer"
    >
      Career Edge <span className="sr-only">(assistant to Job Seekers)</span>
    </a>
  </>
);

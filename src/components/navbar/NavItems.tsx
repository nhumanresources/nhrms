
import { Link } from 'react-router-dom';
import { ChevronDown, GraduationCap, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemsProps {
  isActive: (path: string) => boolean;
  isScrolled: boolean;
}

export const NavItems = ({ isActive, isScrolled }: NavItemsProps) => {
  const getTextClass = (isActiveItem: boolean) => {
    if (isActiveItem) {
      return "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full";
    }
    return isScrolled ? "text-foreground" : "text-white";
  };

  const getHoverClass = () => {
    return isScrolled ? "hover:text-primary" : "hover:text-white/80";
  };

  return (
    <>
      <div className="relative group">
        <button 
          className={cn(
            "relative flex items-center px-2 py-1 text-sm font-medium transition-colors duration-200",
            getHoverClass(),
            getTextClass(isActive('/who-we-are') || isActive('/partners') || isActive('/culture') || isActive('/press-releases'))
          )} 
          aria-haspopup="true" 
          aria-expanded="false"
        >
          Company <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-[100]" role="menu">
          <div className="bg-white rounded-lg p-3 shadow-xl border border-border/30">
            <Link to="/who-we-are" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Who Are We
            </Link>
            <Link to="/culture" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Our Culture
            </Link>
            <Link to="/partners" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Partners
            </Link>
            <Link to="/press-releases" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Press Releases
            </Link>
          </div>
        </div>
      </div>
      
      <div className="relative group">
        <button 
          className={cn(
            "relative flex items-center px-2 py-1 text-sm font-medium transition-colors duration-200",
            getHoverClass(),
            getTextClass(isActive('/services') || isActive('/labour-codes'))
          )}
          aria-haspopup="true" 
          aria-expanded="false"
        >
          Our Focus <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-[100]" role="menu">
          <div className="bg-white rounded-lg p-3 shadow-xl border border-border/30 max-h-[70vh] overflow-y-auto">
            <Link to="/services" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors font-medium" role="menuitem">
              All Services
            </Link>
            <div className="my-2 border-t border-border/30" />
            <div className="px-4 py-1 text-xs font-semibold text-primary/70 uppercase tracking-wide">Talent Solutions</div>
            <Link to="/services/executive-search" className="block px-4 py-3 bg-primary/5 border border-primary/20 rounded-md transition-colors hover:bg-primary/10" role="menuitem">
              <span className="text-sm font-semibold text-foreground">Executive Search</span>
              <span className="block text-[11px] text-muted-foreground mt-0.5">NPA Worldwide Partner</span>
            </Link>
            <Link to="/services/talent-acquisition" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Talent Acquisition
            </Link>
            <Link to="/services/performance-management" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Performance Management
            </Link>
            <div className="my-2 border-t border-border/30" />
            <div className="px-4 py-1 text-xs font-semibold text-primary/70 uppercase tracking-wide">Strategic Advisory</div>
            <Link to="/services/hr-advisory" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              HR Advisory
            </Link>
            <Link to="/services/organization-strategy" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Organization Strategy
            </Link>
            <div className="my-2 border-t border-border/30" />
            <div className="px-4 py-1 text-xs font-semibold text-primary/70 uppercase tracking-wide">HR Technology</div>
            <Link to="/services/hr-tech" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              HR Tech Solutions
            </Link>
            <Link to="/services/go-to-market" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Go-to-Market for Tech Products
            </Link>
            <div className="my-2 border-t border-border/30" />
            <div className="px-4 py-1 text-xs font-semibold text-primary/70 uppercase tracking-wide">Compliance & Operations</div>
            <Link to="/labour-codes" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Labour Codes
            </Link>
            <Link to="/labour-codes/readiness" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Labour Code Readiness
            </Link>
            <Link to="/services/work-study-manpower" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Work Study & Manpower Productivity
            </Link>
          </div>
        </div>
      </div>
      
      <div className="relative group">
        <button 
          className={cn(
            "relative flex items-center px-2 py-1 text-sm font-medium transition-colors duration-200",
            getHoverClass(),
            getTextClass(isActive('/research') || isActive('/case-studies') || isActive('/research-opportunities'))
          )}
          aria-haspopup="true" 
          aria-expanded="false"
        >
          Research <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-[100]" role="menu">
          <div className="bg-white rounded-lg p-3 shadow-xl border border-border/30">
            <Link to="/research" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Research Papers
            </Link>
            <Link to="/case-studies" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Case Studies
            </Link>
            <Link to="/research-opportunities" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Research Opportunities
            </Link>
          </div>
        </div>
      </div>
      
      {/* Combined Learning & Careers dropdown */}
      <div className="relative group">
        <button 
          className={cn(
            "relative flex items-center px-2 py-1 text-sm font-medium transition-colors duration-200",
            getHoverClass(),
            getTextClass(isActive('/hr-roadmap') || isActive('/learning-solutions') || isActive('/lms') || isActive('/careers') || isActive('/blog'))
          )}
          aria-haspopup="true" 
          aria-expanded="false"
        >
          Learning & Careers <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-[100]" role="menu">
          <div className="bg-white rounded-lg p-3 shadow-xl border border-border/30">
            {/* Learning Section */}
            <div className="px-4 py-1 text-xs font-semibold text-primary/70 uppercase tracking-wide">Learning</div>
            <Link to="/hr-roadmap" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              HR Roadmap
            </Link>
            <Link to="/learning-solutions" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Learning Solutions
            </Link>
            <Link to="/lms" className="flex items-center gap-1.5 px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              <Bot size={14} className="text-primary" />
              LMS (Course Builder)
            </Link>

            {/* Separator */}
            <div className="my-2 border-t border-border/30" />
            
            {/* Careers Section */}
            <div className="px-4 py-1 text-xs font-semibold text-primary/70 uppercase tracking-wide">Careers</div>
            <Link to="/careers/internships" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Internship Opportunities
            </Link>
            <a href="https://jobs.nhrms.com/jobs/Careers" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Job Opportunities
            </a>
            
            {/* Separator */}
            <div className="my-2 border-t border-border/30" />
            
            {/* Blog */}
            <Link to="/blog" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
              Blog
            </Link>
          </div>
        </div>
      </div>
      
      {/* Academy - Featured Navigation Item */}
      <Link 
        to="/academy"
        className={cn(
          "relative px-3 py-1.5 text-sm font-semibold rounded-full flex items-center gap-1.5 transition-all duration-200",
          isScrolled 
            ? "text-white bg-primary hover:bg-primary/90" 
            : "text-primary bg-white hover:bg-white/90",
          isActive('/academy') && "ring-2 ring-offset-2 ring-primary/50"
        )}
      >
        <GraduationCap size={16} />
        Academy
      </Link>
      
      <a 
        href="https://careeredge.nhrms.com" 
        className={cn(
          "px-2 py-1 text-sm font-semibold rounded-full flex items-center transition-all",
          isScrolled 
            ? "text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20" 
            : "text-white hover:text-white/80 bg-white/10 hover:bg-white/20"
        )}
        title="Career Edge – Your assistant to Job Seekers"
        target="_blank"
        rel="noopener noreferrer"
      >
        Career Edge <span className="sr-only">(assistant to Job Seekers)</span>
      </a>
    </>
  );
};

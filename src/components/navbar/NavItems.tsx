
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
      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-[100]" role="menu">
        <div className="bg-white rounded-lg p-3 shadow-xl border border-border/30">
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
    
    <div className="relative group">
      <button 
        className={cn(
          "relative flex items-center px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary",
          isActive('/research') || isActive('/case-studies') || isActive('/research-opportunities')
            ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
            : "text-muted-foreground"
        )}
        aria-haspopup="true" 
        aria-expanded="false"
      >
        Research <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-[100]" role="menu">
        <div className="bg-white rounded-lg p-3 shadow-xl border border-border/30">
          <Link to="/research" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Research Papers
          </Link>
          <Link to="/case-studies" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Case Studies
          </Link>
          <Link to="/research-opportunities" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Research Opportunities
          </Link>
        </div>
      </div>
    </div>
    
    {/* Combined Learning & Careers dropdown */}
    <div className="relative group">
      <button 
        className={cn(
          "relative flex items-center px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary",
          isActive('/hr-roadmap') || isActive('/learning-solutions') || isActive('/careers') || isActive('/blog')
            ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-primary after:rounded-full" 
            : "text-muted-foreground"
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
          <Link to="/hr-roadmap" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            HR Roadmap
          </Link>
          <Link to="/learning-solutions" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Learning Solutions
          </Link>
          
          {/* Separator */}
          <div className="my-2 border-t border-border/30" />
          
          {/* Careers Section */}
          <div className="px-4 py-1 text-xs font-semibold text-primary/70 uppercase tracking-wide">Careers</div>
          <Link to="/careers/internships" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Internship Opportunities
          </Link>
          <a href="https://jobs.nhrms.com/jobs/Careers" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Job Opportunities
          </a>
          
          {/* Separator */}
          <div className="my-2 border-t border-border/30" />
          
          {/* Blog */}
          <Link to="/blog" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors" role="menuitem">
            Blog
          </Link>
        </div>
      </div>
    </div>
    
    <a 
      href="https://careeredge.nhrms.com" 
      className="px-2 py-1 text-sm font-semibold text-primary hover:text-primary/80 bg-primary/10 rounded-full flex items-center transition-all hover:bg-primary/20"
      title="Career Edge – Your assistant to Job Seekers"
      target="_blank"
      rel="noopener noreferrer"
    >
      Career Edge <span className="sr-only">(assistant to Job Seekers)</span>
    </a>
  </>
);

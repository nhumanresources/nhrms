
import { Link } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';

export const MobileNavItems = () => (
  <>
    <div className="px-3 py-2">
      <details className="group">
        <summary className="flex items-center text-sm font-medium cursor-pointer">
          Company <ChevronDown size={16} className="ml-1 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-2 ml-2 space-y-1 border-l-2 border-primary/20 pl-2">
          <Link to="/who-we-are" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Who Are We
          </Link>
          <Link to="/culture" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Our Culture
          </Link>
          <Link to="/partners" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Partners
          </Link>
          <Link to="/press-releases" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Press Releases
          </Link>
        </div>
      </details>
    </div>
    
    <div className="px-3 py-2">
      <details className="group">
        <summary className="flex items-center text-sm font-medium cursor-pointer">
          Our Focus <ChevronDown size={16} className="ml-1 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-2 ml-2 space-y-1 border-l-2 border-primary/20 pl-2">
          <div className="px-2 py-1 text-xs font-semibold text-primary/70">Build</div>
          <Link to="/services/executive-search" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Executive Search
          </Link>
          <Link to="/services/talent-acquisition" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Build Teams - Talent Acquisition
          </Link>
          
          <div className="mt-2 px-2 py-1 text-xs font-semibold text-primary/70">Operate</div>
          <Link to="/services/bot-hr-teams" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Fractional HR Solutions (BOT)
          </Link>
          
          <div className="mt-2 px-2 py-1 text-xs font-semibold text-primary/70">Growth</div>
          <Link to="/services/go-to-market" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Go to Market Strategy & Execution
          </Link>
          <Link to="/learning-solutions" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Learning Solutions
          </Link>
          <Link to="/services/hr-tech" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            HR Technology
          </Link>
          <Link to="/services/hr-tech-solutions" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            HR Tech Solutions & Implementation
          </Link>
          
          <div className="mt-2 px-2 py-1 text-xs font-semibold text-primary/70">Advisory</div>
          <Link to="/services/hr-advisory" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            HR Advisory
          </Link>
        </div>
      </details>
    </div>

    <div className="px-3 py-2">
      <details className="group">
        <summary className="flex items-center text-sm font-medium cursor-pointer">
          Research <ChevronDown size={16} className="ml-1 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-2 ml-2 space-y-1 border-l-2 border-primary/20 pl-2">
          <Link to="/research" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Research Papers
          </Link>
          <Link to="/case-studies" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Case Studies
          </Link>
          <Link to="/research-opportunities" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Research Opportunities
          </Link>
        </div>
      </details>
    </div>
    
    {/* Combined Learning & Careers dropdown */}
    <div className="px-3 py-2">
      <details className="group">
        <summary className="flex items-center text-sm font-medium cursor-pointer">
          Learning & Careers <ChevronDown size={16} className="ml-1 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-2 ml-2 space-y-1 border-l-2 border-primary/20 pl-2">
          {/* Learning Section */}
          <div className="px-2 py-1 text-xs font-semibold text-primary/70">Learning</div>
          <Link to="/hr-roadmap" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            HR Roadmap
          </Link>
          <Link to="/learning-solutions" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Learning Solutions
          </Link>
          
          {/* Careers Section */}
          <div className="mt-2 px-2 py-1 text-xs font-semibold text-primary/70">Careers</div>
          <Link to="/careers/internships" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Internship Opportunities
          </Link>
          <a href="https://jobs.nhrms.com/jobs/Careers" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Job Opportunities
          </a>
          
          {/* Blog */}
          <div className="mt-2 px-2 py-1 text-xs font-semibold text-primary/70">Blog</div>
          <Link to="/blog" className="block px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
            Blog
          </Link>
        </div>
      </details>
    </div>

    {/* Career Edge mobile nav – Job Seekers Assistant link */}
    <a 
      href="https://careeredge.nhrms.com"
      className="mx-3 px-3 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-md transition-colors mt-1"
      title="Career Edge – Your assistant to Job Seekers"
      target="_blank" 
      rel="noopener noreferrer"
    >
      Career Edge <span className="sr-only">(assistant to Job Seekers)</span>
    </a>
    
    <div className="border-t border-border/50 mt-3 pt-2">
      <a href="tel:+13144854747" className="flex items-center px-3 py-2 text-sm hover:bg-white rounded-md transition-colors">
        <Phone size={16} className="mr-2 text-primary" /> +1-314-485-4747
      </a>
    </div>
  </>
);

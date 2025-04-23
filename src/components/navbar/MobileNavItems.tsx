
import { Link } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';

export const MobileNavItems = () => (
  <>
    <Link to="/who-we-are" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
      Who are we
    </Link>
    <Link to="/culture" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
      Our Culture
    </Link>
    <div className="px-3 py-2">
      <details className="group">
        <summary className="flex items-center text-sm font-medium cursor-pointer">
          Our Focus <ChevronDown size={16} className="ml-1 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-2 ml-4 space-y-1">
          <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">Build</div>
          <Link to="/services/executive-search" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Executive Search
          </Link>
          <Link to="/services/talent-acquisition" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Build Teams - Talent Acquisition
          </Link>
          
          <div className="mt-2 px-2 py-1 text-xs font-semibold text-muted-foreground">Operate</div>
          <Link to="/services/bot-hr-teams" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            HR Teams (On-Prem, Remote)
          </Link>
          
          <div className="mt-2 px-2 py-1 text-xs font-semibold text-muted-foreground">Growth</div>
          <Link to="/services/go-to-market" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Go to Market Strategy & Execution
          </Link>
          <Link to="/learning-solutions" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Learning Solutions
          </Link>
          <Link to="/services/hr-tech" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            HR Technology
          </Link>
          
          <div className="mt-2 px-2 py-1 text-xs font-semibold text-muted-foreground">Advisory</div>
          <Link to="/services/hr-advisory" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            HR Advisory
          </Link>
        </div>
      </details>
    </div>
    <Link to="/case-studies" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
      Case Studies
    </Link>
    <Link to="/research" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
      Research
    </Link>
    {/* Career Edge mobile nav – Job Seekers Assistant link */}
    <a 
      href="https://careeredge.nhrms.com"
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-2 text-sm font-medium text-primary hover:underline rounded"
      title="Career Edge – Your assistant to Job Seekers"
    >
      Career Edge <span className="sr-only">(assistant to Job Seekers)</span>
    </a>
    <div className="border-t border-border/50 mt-2 pt-2">
      <a href="tel:+13143018402" className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 rounded">
        <Phone size={16} className="mr-2" /> +1 (314) 301-8402
      </a>
    </div>
  </>
);


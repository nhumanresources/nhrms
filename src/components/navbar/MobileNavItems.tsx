
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
          <Link to="/services/executive-search" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Executive Search
          </Link>
          <Link to="/services/hr-advisory" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            HR Advisory
          </Link>
          <Link to="/services/go-to-market" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Go to Market Strategy & Execution
          </Link>
          <Link to="/services/bot-hr-teams" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Build Operate and Transfer - HR Teams
          </Link>
          <Link to="/services/hr-tech" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            HR Technology
          </Link>
          <Link to="/services/talent-acquisition" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Talent Acquisition - Build Teams
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
    <Link to="/contact" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
      Contact Us
    </Link>
    <div className="border-t border-border/50 mt-2 pt-2">
      <a href="tel:+13143018402" className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 rounded">
        <Phone size={16} className="mr-2" /> +1 (314) 301-8402
      </a>
    </div>
  </>
);

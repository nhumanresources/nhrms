
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-border/30'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-lg md:text-xl bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text">
              n Human Resources and Management Systems
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItems isActive={isActive} />
            <div className="ml-2">
              <Button size="sm" variant="outline" className="hidden lg:inline-flex" asChild>
                <a href="tel:+13143018402" className="gap-2">
                  <Phone size={16} /> +1 (314) 301-8402
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              className="text-gray-700 p-2" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden bg-white absolute left-0 right-0 px-4 pt-2 pb-4 shadow-lg transition-all duration-300 ease-in-out border-b border-border',
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        )}
      >
        <div className="flex flex-col space-y-3">
          <MobileNavItems />
        </div>
      </div>
    </nav>
  );
}

const NavItems = ({ isActive }: { isActive: (path: string) => boolean }) => (
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
      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50" role="menu">
        <div className="glass-panel rounded-lg p-3 shadow-xl">
          <Link to="/services/executive-search" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            Executive Search
          </Link>
          <Link to="/services/hr-advisory" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            HR Advisory
          </Link>
          <Link to="/services/go-to-market" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            Go to Market Strategy & Execution
          </Link>
          <Link to="/services/bot-hr-teams" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            Build Operate and Transfer - HR Teams
          </Link>
          <Link to="/services/hr-tech" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            HR Technology
          </Link>
          <Link to="/services/talent-acquisition" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem">
            Talent Acquisition - Build Teams
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

const MobileNavItems = () => (
  <>
    <Link to="/who-we-are" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
      Who are we
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

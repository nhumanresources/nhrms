
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold">nHRMS</span>
            <span className="text-primary text-xl font-light">.com</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItems />
            <div className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/login?register=true">Register</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden bg-white absolute left-0 right-0 px-4 pt-2 pb-4 shadow-lg transition-all duration-300 ease-in-out',
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        )}
      >
        <div className="flex flex-col space-y-3">
          <MobileNavItems />
          <div className="pt-3 border-t flex flex-col space-y-2">
            <Button variant="outline" asChild className="w-full">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="w-full">
              <Link to="/login?register=true">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavItems = () => (
  <>
    <Link to="/" className="animated-link text-sm font-medium">
      Home
    </Link>
    <div className="relative group">
      <button className="flex items-center animated-link text-sm font-medium">
        Services <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
        <div className="glass-panel rounded-lg p-3 shadow-xl">
          <Link to="/services/talent-acquisition" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
            Talent Acquisition
          </Link>
          <Link to="/services/executive-search" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
            Executive Search
          </Link>
          <Link to="/services/hr-advisory" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
            HR Advisory
          </Link>
          <Link to="/services/knowledge-management" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
            Knowledge Management
          </Link>
        </div>
      </div>
    </div>
    <Link to="/about" className="animated-link text-sm font-medium">
      About
    </Link>
    <Link to="/contact" className="animated-link text-sm font-medium">
      Contact
    </Link>
  </>
);

const MobileNavItems = () => (
  <>
    <Link to="/" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
      Home
    </Link>
    <div className="px-3 py-2">
      <details className="group">
        <summary className="flex items-center text-sm font-medium cursor-pointer">
          Services <ChevronDown size={16} className="ml-1 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-2 ml-4 space-y-1">
          <Link to="/services/talent-acquisition" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Talent Acquisition
          </Link>
          <Link to="/services/executive-search" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Executive Search
          </Link>
          <Link to="/services/hr-advisory" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            HR Advisory
          </Link>
          <Link to="/services/knowledge-management" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
            Knowledge Management
          </Link>
        </div>
      </details>
    </div>
    <Link to="/about" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
      About
    </Link>
    <Link to="/contact" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
      Contact
    </Link>
  </>
);


import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavItems } from './navbar/NavItems';
import { MobileMenu } from './navbar/MobileMenu';
import { NavLogo } from './navbar/NavLogo';
import { PhoneButton } from './navbar/PhoneButton';
import { useScrollEffect } from './navbar/useScrollEffect';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect();
  const location = useLocation();

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-2 shadow-md border-b border-border/20'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLogo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItems isActive={isActive} isScrolled={isScrolled} />
            <div className={cn("ml-4 pl-4 border-l", isScrolled ? "border-muted" : "border-white/30")}>
              <PhoneButton isScrolled={isScrolled} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              )} 
              onClick={toggleMobileMenu} 
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
}

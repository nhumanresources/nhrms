import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AcademyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Courses', href: '/academy/courses' },
    { label: 'Learning Paths', href: '/academy/learning-paths' },
    { label: 'Resources', href: '/academy/resources' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/academy" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <GraduationCap 
                className={cn(
                  'h-6 w-6 md:h-7 md:w-7 transition-colors',
                  isScrolled ? 'text-primary' : 'text-white'
                )} 
              />
              <div className="flex flex-col">
                <span
                  className={cn(
                    'font-heading font-bold text-lg md:text-xl transition-colors',
                    isScrolled ? 'text-primary' : 'text-white'
                  )}
                >
                  nHRMS Academy
                </span>
                <span
                  className={cn(
                    'text-[10px] tracking-wider uppercase -mt-1 transition-colors',
                    isScrolled ? 'text-muted-foreground' : 'text-white/70'
                  )}
                >
                  Learn. Grow. Lead.
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors relative',
                  isActive(link.href)
                    ? isScrolled
                      ? 'text-primary'
                      : 'text-white'
                    : isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white/80 hover:text-white',
                  isActive(link.href) &&
                    'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-current'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/"
              className={cn(
                'text-sm font-medium transition-colors',
                isScrolled
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-white/70 hover:text-white'
              )}
            >
              Back to nHRMS
            </Link>
            <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/academy/courses">Start Learning</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn('h-6 w-6', isScrolled ? 'text-foreground' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', isScrolled ? 'text-foreground' : 'text-white')} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                    isActive(link.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border mt-2 pt-4 px-4 flex flex-col gap-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground"
                >
                  Back to nHRMS
                </Link>
                <Button className="w-full" asChild>
                  <Link to="/academy/courses">Start Learning</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

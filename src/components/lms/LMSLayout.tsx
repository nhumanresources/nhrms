import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard, BookOpen, PlusCircle, GraduationCap,
  Settings, LogOut, Menu, X, Loader2, Bot,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/lms' },
  { icon: BookOpen, label: 'My Courses', path: '/lms/courses' },
  { icon: PlusCircle, label: 'Course Builder', path: '/lms/builder' },
  { icon: GraduationCap, label: 'Browse Courses', path: '/lms/browse' },
  { icon: Settings, label: 'Settings', path: '/lms/settings' },
];

export default function LMSLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isLoading, signOut } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) navigate('/lms-login');
  }, [user, isLoading, navigate]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => setSidebarOpen(window.innerWidth >= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return null;

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const isActive = (path: string) => {
    if (path === '/lms') return location.pathname === '/lms';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 md:relative",
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:w-0 md:border-0"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <Link to="/lms" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-semibold">nHRMS</span>
                <span className="text-xs text-muted-foreground ml-1">LMS</span>
              </div>
            </Link>
          </div>

          <nav className="flex-1 py-4 px-3 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map(({ icon: Icon, label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive(path)
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-3 border-t border-gray-200">
            <div className="flex items-center gap-3 px-3 py-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
                {user.email?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 w-full transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => { window.innerWidth < 768 ? setMobileOpen(!mobileOpen) : setSidebarOpen(!sidebarOpen); }}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <h1 className="text-lg font-semibold text-gray-900">
                {navItems.find(n => isActive(n.path))?.label || 'LMS'}
              </h1>
            </div>
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Back to nHRMS
            </Link>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

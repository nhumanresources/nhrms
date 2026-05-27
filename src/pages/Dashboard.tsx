import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Bell,
  Calendar,
  FileText,
  Home,
  Settings,
  Users,
  UserPlus,
  LogOut,
  BarChart,
  Menu,
  X,
  Loader2,
  Linkedin,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { fadeIn, slideInLeft } from '@/lib/animations';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isLoading, signOut } = useAuth();

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out",
    });
    navigate('/');
  };

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Don't render dashboard if not authenticated
  if (!user) {
    return null;
  }

  // Extract the current page from the pathname
  const currentPath = location.pathname.split('/')[2] || '';
  
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-border/50 transform transition-transform duration-300 ease-in-out md:relative",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:w-20"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-border/50 flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center space-x-2">
              {isSidebarOpen ? (
                <>
                  <span className="text-xl font-semibold">nHRMS</span>
                  <span className="text-primary text-xl font-light">.com</span>
                </>
              ) : (
                <span className="text-xl font-semibold">n</span>
              )}
            </Link>
            <button
              className="text-muted-foreground hover:text-foreground md:block hidden"
              onClick={toggleSidebar}
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="flex-1 py-6 px-4 overflow-y-auto">
            <ul className="space-y-2">
              <SidebarItem icon={<Home size={20} />} text="Dashboard" active href="/dashboard" expanded={isSidebarOpen} />
              <SidebarItem icon={<Users size={20} />} text="Candidates" href="/dashboard/candidates" expanded={isSidebarOpen} />
              <SidebarItem icon={<UserPlus size={20} />} text="Recruitment" href="/dashboard/recruitment" expanded={isSidebarOpen} />
              <SidebarItem icon={<Calendar size={20} />} text="Calendar" href="/dashboard/calendar" expanded={isSidebarOpen} />
              <SidebarItem icon={<FileText size={20} />} text="Knowledge" href="/dashboard/knowledge" expanded={isSidebarOpen} />
              <SidebarItem icon={<BarChart size={20} />} text="Reports" href="/dashboard/reports" expanded={isSidebarOpen} />
              <SidebarItem icon={<Linkedin size={20} />} text="LinkedIn Recruiter" href="/dashboard/linkedin-recruiter" expanded={isSidebarOpen} />
              <SidebarItem icon={<Settings size={20} />} text="Settings" href="/dashboard/settings" expanded={isSidebarOpen} />
            </ul>
          </div>

          <div className="p-4 border-t border-border/50">
            <button
              onClick={handleLogout}
              className="flex items-center px-2 py-2 rounded-md transition-colors text-muted-foreground hover:bg-primary/5 hover:text-foreground w-full"
            >
              <LogOut size={20} />
              {isSidebarOpen && <span className="ml-3">Sign Out</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-border/50 sticky top-0 z-30">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button
                className="text-muted-foreground hover:text-foreground mr-4 md:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-3">
              <button className="text-muted-foreground hover:text-foreground relative p-1 rounded-full hover:bg-gray-100">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                {user.email?.charAt(0).toUpperCase() || 'U'}
              </div>
            </div>
          </div>

          {/* Mobile navigation (visible on mobile when open) */}
          <div
            className={cn(
              "md:hidden bg-white absolute left-0 right-0 border-b border-border/50 transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            )}
          >
            <ul className="p-4 space-y-2">
              <MobileNavItem icon={<Home size={20} />} text="Dashboard" active href="/dashboard" />
              <MobileNavItem icon={<Users size={20} />} text="Candidates" href="/dashboard/candidates" />
              <MobileNavItem icon={<UserPlus size={20} />} text="Recruitment" href="/dashboard/recruitment" />
              <MobileNavItem icon={<Calendar size={20} />} text="Calendar" href="/dashboard/calendar" />
              <MobileNavItem icon={<FileText size={20} />} text="Knowledge" href="/dashboard/knowledge" />
              <MobileNavItem icon={<BarChart size={20} />} text="Reports" href="/dashboard/reports" />
              <MobileNavItem icon={<Linkedin size={20} />} text="LinkedIn Recruiter" href="/dashboard/linkedin-recruiter" />
              <MobileNavItem icon={<Settings size={20} />} text="Settings" href="/dashboard/settings" />
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-2 py-2 rounded-md transition-colors text-muted-foreground hover:bg-primary/5 hover:text-foreground w-full"
                >
                  <LogOut size={20} />
                  <span className="ml-3">Sign Out</span>
                </button>
              </li>
            </ul>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-auto bg-secondary/20 p-4 md:p-6" {...fadeIn(300)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard title="Active Candidates" value="124" icon={<Users className="h-8 w-8 text-blue-500" />} trend="+14%" />
            <StatCard title="Open Positions" value="32" icon={<UserPlus className="h-8 w-8 text-green-500" />} trend="+5%" />
            <StatCard title="Interviews" value="28" icon={<Calendar className="h-8 w-8 text-purple-500" />} trend="-3%" trendDown />
            <StatCard title="Knowledge Updates" value="12" icon={<FileText className="h-8 w-8 text-orange-500" />} trend="New" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-2" {...slideInLeft(300)}>
              <CardHeader>
                <CardTitle>Recruitment Activity</CardTitle>
                <CardDescription>Overview of your recruitment pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-primary/5 rounded-md">
                  <span className="text-muted-foreground">Recruitment activity chart goes here</span>
                </div>
              </CardContent>
            </Card>

            <Card {...slideInLeft(400)}>
              <CardHeader>
                <CardTitle>Recent Candidates</CardTitle>
                <CardDescription>Latest applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sarah Johnson", position: "UX Designer", date: "2 days ago" },
                    { name: "Michael Chen", position: "Frontend Developer", date: "3 days ago" },
                    { name: "Olivia Smith", position: "HR Manager", date: "5 days ago" },
                    { name: "David Wilson", position: "Account Executive", date: "1 week ago" }
                  ].map((candidate, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <div>
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-sm text-muted-foreground">{candidate.position}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{candidate.date}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/dashboard/candidates">View All Candidates</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <Card {...slideInLeft(500)}>
              <CardHeader>
                <CardTitle>Upcoming Interviews</CardTitle>
                <CardDescription>Your interview schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Technical Interview: John Davis", position: "Software Engineer", date: "Today, 2:00 PM" },
                    { name: "First Round: Emma Rodriguez", position: "Marketing Specialist", date: "Tomorrow, 10:30 AM" },
                    { name: "Final Interview: Robert Kim", position: "Product Manager", date: "Sep 15, 3:00 PM" }
                  ].map((interview, index) => (
                    <div key={index} className="flex items-start space-x-4 py-2 border-b border-border/50 last:border-0">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="font-medium">{interview.name}</div>
                        <div className="text-sm text-muted-foreground">{interview.position}</div>
                        <div className="text-sm font-medium text-primary mt-1">{interview.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/dashboard/calendar">View Full Calendar</Link>
                </Button>
              </CardContent>
            </Card>

            <Card {...slideInLeft(600)}>
              <CardHeader>
                <CardTitle>Knowledge Updates</CardTitle>
                <CardDescription>Latest labor law updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Updated Workplace Safety Regulations", category: "Safety", date: "September 10, 2023" },
                    { title: "New Employee Benefits Guidelines", category: "Benefits", date: "September 5, 2023" },
                    { title: "Remote Work Policy Changes", category: "Policy", date: "August 28, 2023" }
                  ].map((update, index) => (
                    <div key={index} className="py-2 border-b border-border/50 last:border-0">
                      <div className="font-medium">{update.title}</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {update.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{update.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/dashboard/knowledge">Access Knowledge Hub</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

const SidebarItem = ({ icon, text, active = false, href, expanded }: { icon: React.ReactNode; text: string; active?: boolean; href: string; expanded: boolean }) => {
  return (
    <li>
      <Link
        to={href}
        className={cn(
          "flex items-center px-2 py-2 rounded-md transition-colors",
          active
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
        )}
      >
        <span className="flex-shrink-0">{icon}</span>
        {expanded && <span className="ml-3">{text}</span>}
      </Link>
    </li>
  );
};

const MobileNavItem = ({ icon, text, active = false, href }: { icon: React.ReactNode; text: string; active?: boolean; href: string }) => {
  return (
    <li>
      <Link
        to={href}
        className={cn(
          "flex items-center px-2 py-2 rounded-md transition-colors",
          active
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
        )}
      >
        <span className="flex-shrink-0">{icon}</span>
        <span className="ml-3">{text}</span>
      </Link>
    </li>
  );
};

const StatCard = ({ title, value, icon, trend, trendDown = false }: { title: string; value: string; icon: React.ReactNode; trend: string; trendDown?: boolean }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <div className="rounded-full bg-primary/10 p-2 h-fit">
            {icon}
          </div>
        </div>
        {trend && (
          <div className="mt-4 flex items-center">
            <span
              className={cn(
                "text-xs font-medium",
                trendDown ? "text-red-500" : trend === "New" ? "text-blue-500" : "text-green-500"
              )}
            >
              {trend}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

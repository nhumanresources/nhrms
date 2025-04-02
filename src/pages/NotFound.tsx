
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-4">
            We couldn't find the page you're looking for.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            The page may have been moved, deleted, or never existed. Please check the URL or navigate to one of our main sections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="default">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

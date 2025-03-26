
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We couldn't find the page you're looking for.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

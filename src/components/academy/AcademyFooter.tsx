import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function AcademyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/academy" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-lg text-foreground">
                nHRMS Academy
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Free educational resources for founders, HR leaders, and business owners. 
              Building trusted HR knowledge since 2008.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Learning</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/academy/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/academy/learning-paths" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/academy/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Free Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Topics</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/academy/courses?topic=recruiting" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Recruiting & Talent
                </Link>
              </li>
              <li>
                <Link to="/academy/courses?topic=hr-management" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  HR Management
                </Link>
              </li>
              <li>
                <Link to="/academy/courses?topic=payroll" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Payroll & Compensation
                </Link>
              </li>
              <li>
                <Link to="/academy/courses?topic=compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/academy/courses?topic=hr-tech" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  HR Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* nHRMS */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">nHRMS</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About nHRMS
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Research & Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} nHRMS Academy. All rights reserved. | <a href="https://rytadvisory.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">An RYT Group Firm</a>
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

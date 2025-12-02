import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight, Briefcase, BookOpen, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-background to-slate-50 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-semibold text-primary">Nurturing Human Resources & Management Systems</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Comprehensive 360° HR Management solutions for modern organizations seeking excellence in today's competitive landscape.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/n-hrms/" target="_blank" rel="noopener noreferrer" 
                 className="bg-primary/5 hover:bg-primary/10 text-primary p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/nhrms" target="_blank" rel="noopener noreferrer" 
                 className="bg-primary/5 hover:bg-primary/10 text-primary p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://fb.com/nhrms" target="_blank" rel="noopener noreferrer" 
                 className="bg-primary/5 hover:bg-primary/10 text-primary p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">What We Do</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground font-semibold text-sm">BUILD</li>
              <li>
                <Link to="/services/executive-search" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Executive Search
                </Link>
              </li>
              <li>
                <Link to="/services/talent-acquisition" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Build Teams - Talent Acquisition
                </Link>
              </li>
              <li className="text-muted-foreground font-semibold text-sm mt-4">OPERATE</li>
              <li>
                <Link to="/services/bot-hr-teams" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Fractional HR Solutions (BOT)
                </Link>
              </li>
              <li className="text-muted-foreground font-semibold text-sm mt-4">GROWTH</li>
              <li>
                <Link to="/services/go-to-market" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Go to Market Strategy & Execution
                </Link>
              </li>
              <li>
                <Link to="/learning-solutions" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Learning Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/hr-tech" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  HR Technology
                </Link>
              </li>
              <li className="text-muted-foreground font-semibold text-sm mt-4">ADVISORY</li>
              <li>
                <Link to="/services/hr-advisory" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  HR Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/who-we-are" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Who Are We
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Research
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Careers</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://jobs.nhrms.com/jobs/Careers" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Current Openings
                </a>
              </li>
              <li>
                <Link to="/careers/internships" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Internship Programs
                </Link>
              </li>
              <li>
                <Link to="/careers/internships/bangalore" className="text-muted-foreground hover:text-primary transition-colors flex items-center text-xs ml-5">
                  • Bangalore (6 months)
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Our Culture
                </Link>
              </li>
              <li>
                <a 
                  href="https://careeredge.nhrms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  title="Career Edge – Your assistant to Job Seekers"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Career Edge <span className="sr-only">(assistant to Job Seekers)</span>
                </a>
              </li>
              <li>
                <a 
                  href="/press-releases/nhrms-acquires-careeredge"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <LinkIcon className="h-3 w-3 mr-2" />
                  Read the Press Release: nHRMS acquires CareerEdge
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://jobs.nhrms.com/jobs/Careers" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Join Our Team <Briefcase className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 text-primary mt-1" />
                <span className="text-muted-foreground">
                  <strong>Office Locations:</strong><br />
                  US, India (Hyderabad & Bangalore)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-primary" />
                <a href="tel:+13144854747" className="text-muted-foreground hover:text-primary transition-colors">
                  +1-314-485-4747
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-primary" />
                <a href="mailto:info@nhrms.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@nhrms.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/contact" className="flex items-center justify-center">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2009-{currentYear} nHRMS Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

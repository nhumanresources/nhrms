
import { Phone, Mail } from 'lucide-react';

export default function ContactInformation() {
  return (
    <div className="lg:pl-10">
      <h2 className="text-3xl font-bold mb-8">Our Information</h2>
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-muted-foreground">
              <a href="tel:+13143018402" className="hover:text-primary transition-colors">
                +1 (314) 301-8402
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-muted-foreground">
              <a href="mailto:info@nhrms.com" className="hover:text-primary transition-colors">
                info@nhrms.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PhoneButton = () => (
  <Button size="sm" variant="outline" className="hidden lg:inline-flex" asChild>
    <a href="tel:+13143018402" className="gap-2">
      <Phone size={16} /> +1 (314) 301-8402
    </a>
  </Button>
);

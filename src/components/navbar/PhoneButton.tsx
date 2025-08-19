
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PhoneButton = () => (
  <Button size="sm" variant="outline" className="hidden lg:inline-flex" asChild>
    <a href="tel:+13144854747" className="gap-2">
      <Phone size={16} /> +1-314-485-4747
    </a>
  </Button>
);

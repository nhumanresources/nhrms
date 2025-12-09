
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PhoneButtonProps {
  isScrolled?: boolean;
}

export const PhoneButton = ({ isScrolled = true }: PhoneButtonProps) => (
  <Button 
    size="sm" 
    variant="outline" 
    className={cn(
      "hidden lg:inline-flex",
      !isScrolled && "border-white/50 text-white hover:bg-white/10 hover:text-white"
    )} 
    asChild
  >
    <a href="tel:+13144854747" className="gap-2">
      <Phone size={16} /> +1-314-485-4747
    </a>
  </Button>
);

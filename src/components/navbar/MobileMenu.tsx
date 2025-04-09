
import { cn } from '@/lib/utils';
import { MobileNavItems } from './MobileNavItems';

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => (
  <div
    className={cn(
      'md:hidden bg-white absolute left-0 right-0 px-4 pt-2 pb-4 shadow-lg transition-all duration-300 ease-in-out border-b border-border',
      isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
    )}
  >
    <div className="flex flex-col space-y-3">
      <MobileNavItems />
    </div>
  </div>
);

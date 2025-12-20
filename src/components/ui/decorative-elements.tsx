import { cn } from '@/lib/utils';

// Floating abstract shapes for backgrounds
export const FloatingShape = ({ 
  className, 
  variant = 'primary' 
}: { 
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}) => {
  const colorMap = {
    primary: 'bg-primary/10',
    secondary: 'bg-secondary/15',
    accent: 'bg-accent/20',
  };

  return (
    <div 
      className={cn(
        'absolute rounded-full blur-3xl',
        colorMap[variant],
        className
      )}
    />
  );
};

// Gradient orb for visual depth
export const GradientOrb = ({ 
  className,
  size = 'md'
}: { 
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) => {
  const sizeMap = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[500px] h-[500px]',
  };

  return (
    <div 
      className={cn(
        'absolute rounded-full opacity-60 blur-3xl',
        sizeMap[size],
        className
      )}
      style={{
        background: 'radial-gradient(circle, hsl(var(--secondary) / 0.3) 0%, hsl(var(--accent) / 0.2) 50%, transparent 70%)',
      }}
    />
  );
};

// Abstract network/connection visual for HR theme
export const NetworkPattern = ({ className }: { className?: string }) => (
  <svg 
    className={cn('absolute opacity-20', className)} 
    viewBox="0 0 400 400" 
    fill="none"
  >
    <circle cx="50" cy="50" r="6" fill="hsl(var(--secondary))" />
    <circle cx="150" cy="80" r="4" fill="hsl(var(--accent))" />
    <circle cx="250" cy="40" r="5" fill="hsl(var(--secondary))" />
    <circle cx="350" cy="90" r="4" fill="hsl(var(--accent))" />
    <circle cx="100" cy="150" r="5" fill="hsl(var(--secondary))" />
    <circle cx="200" cy="130" r="6" fill="hsl(var(--accent))" />
    <circle cx="300" cy="160" r="4" fill="hsl(var(--secondary))" />
    <circle cx="80" cy="250" r="4" fill="hsl(var(--accent))" />
    <circle cx="180" cy="220" r="5" fill="hsl(var(--secondary))" />
    <circle cx="280" cy="260" r="6" fill="hsl(var(--accent))" />
    <circle cx="380" cy="230" r="4" fill="hsl(var(--secondary))" />
    <circle cx="120" cy="320" r="5" fill="hsl(var(--accent))" />
    <circle cx="220" cy="350" r="4" fill="hsl(var(--secondary))" />
    <circle cx="320" cy="310" r="5" fill="hsl(var(--accent))" />
    
    <line x1="50" y1="50" x2="150" y2="80" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.5" />
    <line x1="150" y1="80" x2="250" y2="40" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
    <line x1="250" y1="40" x2="350" y2="90" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.5" />
    <line x1="100" y1="150" x2="200" y2="130" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
    <line x1="200" y1="130" x2="300" y2="160" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.5" />
    <line x1="150" y1="80" x2="100" y2="150" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" />
    <line x1="200" y1="130" x2="180" y2="220" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
    <line x1="280" y1="260" x2="320" y2="310" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.5" />
    <line x1="180" y1="220" x2="120" y2="320" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
  </svg>
);

// Abstract people silhouette pattern for HR
export const PeoplePattern = ({ className }: { className?: string }) => (
  <svg 
    className={cn('absolute opacity-10', className)} 
    viewBox="0 0 300 200" 
    fill="none"
  >
    {/* Person 1 */}
    <circle cx="50" cy="40" r="12" fill="hsl(var(--secondary))" />
    <path d="M35 70 Q50 55 65 70 L65 100 L35 100 Z" fill="hsl(var(--secondary))" />
    
    {/* Person 2 */}
    <circle cx="100" cy="35" r="14" fill="hsl(var(--primary))" />
    <path d="M82 68 Q100 50 118 68 L118 105 L82 105 Z" fill="hsl(var(--primary))" />
    
    {/* Person 3 */}
    <circle cx="150" cy="42" r="11" fill="hsl(var(--accent))" />
    <path d="M136 72 Q150 58 164 72 L164 98 L136 98 Z" fill="hsl(var(--accent))" />
    
    {/* Person 4 */}
    <circle cx="200" cy="38" r="13" fill="hsl(var(--secondary))" />
    <path d="M184 70 Q200 54 216 70 L216 102 L184 102 Z" fill="hsl(var(--secondary))" />
    
    {/* Person 5 */}
    <circle cx="250" cy="45" r="10" fill="hsl(var(--primary))" />
    <path d="M238 74 Q250 62 262 74 L262 96 L238 96 Z" fill="hsl(var(--primary))" />
  </svg>
);

// Decorative corner accent
export const CornerAccent = ({ 
  position = 'top-left',
  className 
}: { 
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}) => {
  const positionStyles = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  };

  return (
    <svg 
      className={cn('absolute w-24 h-24 opacity-30', positionStyles[position], className)} 
      viewBox="0 0 100 100" 
      fill="none"
    >
      <path 
        d="M0 0 L0 30 Q0 0 30 0 Z" 
        fill="url(#cornerGradient)" 
      />
      <path 
        d="M0 50 L0 100 L50 100 Q20 100 10 80 Q0 60 0 50" 
        fill="url(#cornerGradient)" 
        opacity="0.5"
      />
      <defs>
        <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--secondary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Service icon with gradient background
export const ServiceIconWrapper = ({ 
  children,
  variant = 'warm',
  className
}: { 
  children: React.ReactNode;
  variant?: 'warm' | 'navy' | 'accent';
  className?: string;
}) => {
  const gradients = {
    warm: 'from-secondary/20 to-accent/15 border-secondary/30',
    navy: 'from-primary/15 to-primary/5 border-primary/20',
    accent: 'from-accent/20 to-secondary/10 border-accent/30',
  };

  return (
    <div 
      className={cn(
        'relative w-16 h-16 rounded-2xl flex items-center justify-center',
        'bg-gradient-to-br border backdrop-blur-sm',
        'shadow-soft transition-all duration-300 group-hover:shadow-medium group-hover:scale-105',
        gradients[variant],
        className
      )}
    >
      {children}
    </div>
  );
};

// Animated stat number display
export const StatDisplay = ({
  value,
  label,
  suffix = '',
  className
}: {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
}) => (
  <div className={cn('text-center', className)}>
    <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-warm mb-2">
      {value}{suffix}
    </div>
    <div className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
      {label}
    </div>
  </div>
);

// Premium badge component
export const PremiumBadge = ({
  children,
  variant = 'warm',
  className
}: {
  children: React.ReactNode;
  variant?: 'warm' | 'navy' | 'light';
  className?: string;
}) => {
  const variants = {
    warm: 'bg-gradient-to-r from-secondary to-secondary/90 text-white shadow-lg',
    navy: 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg',
    light: 'bg-white/90 backdrop-blur-sm text-foreground border border-border/50 shadow-soft',
  };

  return (
    <span 
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm',
        variants[variant],
        className
      )}
      style={variant === 'warm' ? { boxShadow: '0 4px 20px hsl(var(--secondary) / 0.35)' } : undefined}
    >
      {children}
    </span>
  );
};

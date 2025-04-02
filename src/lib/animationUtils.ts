
// Animation utilities for creating modern, engaging UI effects

/**
 * Creates a fade-in animation with optional delay
 */
export const fadeInAnimation = (delay: number = 0) => ({
  className: `animate-fade-in opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

/**
 * Creates a slide-in animation from bottom with optional delay
 */
export const slideInBottomAnimation = (delay: number = 0) => ({
  className: `animate-slide-in-bottom opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

/**
 * Creates a slide-in animation from left with optional delay
 */
export const slideInLeftAnimation = (delay: number = 0) => ({
  className: `animate-slide-in-left opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

/**
 * Creates a slide-in animation from right with optional delay
 */
export const slideInRightAnimation = (delay: number = 0) => ({
  className: `animate-slide-in-right opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

/**
 * Creates a scale-in animation with optional delay
 */
export const scaleInAnimation = (delay: number = 0) => ({
  className: `animate-scale-in opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

/**
 * Apply animations to elements when they enter the viewport
 */
export const initInViewAnimations = () => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const animation = el.dataset.animation || 'fade-in';
        const delay = parseInt(el.dataset.delay || '0');
        
        switch (animation) {
          case 'fade-in':
            el.classList.add('animate-fade-in');
            break;
          case 'slide-in-bottom':
            el.classList.add('animate-slide-in-bottom');
            break;
          case 'slide-in-left':
            el.classList.add('animate-slide-in-left');
            break;
          case 'slide-in-right':
            el.classList.add('animate-slide-in-right');
            break;
          case 'scale-in':
            el.classList.add('animate-scale-in');
            break;
        }
        
        el.style.animationDelay = `${delay}ms`;
        el.style.animationFillMode = 'forwards';
        el.classList.remove('opacity-0');
        
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('[data-animation]').forEach(el => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });
};

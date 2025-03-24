
// Animation variants for framer-motion-like animations with CSS
export const fadeIn = (delay: number = 0) => ({
  className: `animate-fade-in opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

export const slideInLeft = (delay: number = 0) => ({
  className: `animate-slide-in-left opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

export const slideInRight = (delay: number = 0) => ({
  className: `animate-slide-in-right opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

export const slideInBottom = (delay: number = 0) => ({
  className: `animate-slide-in-bottom opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

export const slideInTop = (delay: number = 0) => ({
  className: `animate-slide-in-top opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

export const scaleIn = (delay: number = 0) => ({
  className: `animate-scale-in opacity-0`,
  style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
});

// Helper to add staggered animations to child elements
export const staggerChildren = (
  selector: string,
  baseDelay: number = 0,
  increment: number = 100,
  animation: (delay: number) => any
) => {
  return Array.from(document.querySelectorAll(selector)).forEach(
    (el, index) => {
      const delay = baseDelay + index * increment;
      const { className, style } = animation(delay);
      el.classList.add(...className.split(' ').filter(Boolean));
      Object.assign((el as HTMLElement).style, style);
    }
  );
};

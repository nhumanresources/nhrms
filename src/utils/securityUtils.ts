
/**
 * Security utilities to prevent content copying and unauthorized actions
 */

export const applySecurityMeasures = () => {
  // Prevent text selection/copying
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  
  // Instead of using direct properties that TypeScript doesn't recognize,
  // use setProperty for vendor prefixes
  document.body.style.setProperty('-ms-user-select', 'none');
  document.body.style.setProperty('-moz-user-select', 'none');
  
  // Disable context menu (right click)
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
  
  // Prevent keyboard shortcuts for copying
  document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+S, Ctrl+P, Ctrl+U
    if ((e.ctrlKey || e.metaKey) && 
        (e.key === 'c' || e.key === 'x' || e.key === 'v' || 
         e.key === 's' || e.key === 'p' || e.key === 'u')) {
      e.preventDefault();
      return false;
    }
    
    // Prevent F12 key (developer tools)
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
  });
  
  // Disable dragging of images
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });
  
  // Add invisible overlay to prevent direct selection
  const styles = document.createElement('style');
  styles.innerHTML = `
    .content-protection-overlay {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      pointer-events: none;
      user-select: none;
      z-index: 9999;
    }
  `;
  document.head.appendChild(styles);
  
  const overlay = document.createElement('div');
  overlay.className = 'content-protection-overlay';
  document.body.appendChild(overlay);
  
  console.log("Security measures applied to prevent content copying");
};

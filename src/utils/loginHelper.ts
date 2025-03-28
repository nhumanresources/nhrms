
/**
 * Helper functions for user authentication
 */

// Set login state
export const setLoggedIn = () => {
  localStorage.setItem('isLoggedIn', 'true');
};

// Clear login state
export const setLoggedOut = () => {
  localStorage.removeItem('isLoggedIn');
};

// Check login state
export const isLoggedIn = (): boolean => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

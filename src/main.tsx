
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Determine the base URL for routing
const isPreviewSite = window.location.pathname.startsWith('/hr360-solution-hub');
const baseUrl = isPreviewSite ? '/hr360-solution-hub' : '/';

console.log("Application initializing with baseUrl:", baseUrl);

// Apply blue/white pattern background to entire app
document.documentElement.classList.add('bg-gradient-to-br', 'from-blue-50', 'to-white');

// Add console warning
console.log(
  "%c⚠️ Warning: This website is protected", 
  "color: red; font-size: 24px; font-weight: bold;"
);
console.log(
  "%cAll content is proprietary and protected by copyright law.", 
  "color: black; font-size: 16px; font-weight: bold;"
);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
);

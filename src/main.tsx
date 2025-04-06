
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Determine the base URL for routing
const isPreviewSite = window.location.pathname.startsWith('/hr360-solution-hub');
const baseUrl = isPreviewSite ? '/hr360-solution-hub' : '/';

console.log("Application initializing with baseUrl:", baseUrl);
console.log("Current window location:", window.location.href);
console.log("Current window pathname:", window.location.pathname);

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

try {
  console.log("Attempting to render React application...");
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Failed to find root element in the DOM");
    throw new Error("Root element not found");
  }
  
  console.log("Root element found, creating React root");
  const root = createRoot(rootElement);
  
  console.log("Rendering React application with router");
  root.render(
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  );
  
  console.log("React application render complete");
} catch (error) {
  console.error("Failed to initialize application:", error);
  // Display a fallback UI for the user
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1>Unable to load application</h1>
        <p>There was a problem loading the application. Please try refreshing the page.</p>
        <p>Error details: ${error?.message || 'Unknown error'}</p>
      </div>
    `;
  }
}

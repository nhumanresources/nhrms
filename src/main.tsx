
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Determine the base URL for routing
const isPreviewSite = window.location.pathname.startsWith('/hr360-solution-hub');
const baseUrl = isPreviewSite ? '/hr360-solution-hub' : '/';

console.log("Application initializing with baseUrl:", baseUrl);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
);

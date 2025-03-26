
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Determine the base URL for routing
const baseUrl = import.meta.env.BASE_URL || '/';
console.log("Application initializing with baseUrl:", baseUrl);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
);

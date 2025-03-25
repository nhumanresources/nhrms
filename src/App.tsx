
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/who-we-are" element={<NotFound />} /> {/* Placeholder until page is created */}
          <Route path="/case-studies" element={<NotFound />} /> {/* Placeholder until page is created */}
          <Route path="/blog" element={<NotFound />} /> {/* Placeholder until page is created */}
          <Route path="/research" element={<NotFound />} /> {/* Placeholder until page is created */}
          <Route path="/contact" element={<NotFound />} /> {/* Placeholder until page is created */}
          {/* Service routes */}
          <Route path="/services/executive-search" element={<NotFound />} /> {/* Placeholder until page is created */}
          <Route path="/services/hr-advisory" element={<NotFound />} /> {/* Placeholder until page is created */}
          <Route path="/services/knowledge-management" element={<NotFound />} /> {/* Placeholder until page is created */}
          <Route path="/services/go-to-market" element={<NotFound />} /> {/* Placeholder until page is created */}
          <Route path="/services/bot-hr-teams" element={<NotFound />} /> {/* Placeholder until page is created */}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

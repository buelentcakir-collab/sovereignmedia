import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InstitutionalMedia from "./pages/InstitutionalMedia";
import StrategicAdvisory from "./pages/StrategicAdvisory";
import Insights from "./pages/Insights";
import CrisisContact from "./pages/CrisisContact";
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
          <Route path="/institutional-media" element={<InstitutionalMedia />} />
          <Route path="/strategic-advisory" element={<StrategicAdvisory />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/crisis-contact" element={<CrisisContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

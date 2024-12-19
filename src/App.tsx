import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import KundliGeneration from "./pages/KundliGeneration";
import Horoscope from "./pages/Horoscope";
import Consultations from "./pages/Consultations";
import Matchmaking from "./pages/Matchmaking";
import Tools from "./pages/Tools";
import Learning from "./pages/Learning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kundli" element={<KundliGeneration />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/matchmaking" element={<Matchmaking />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ONas from "./pages/ONas";
import Kontakt from "./pages/Kontakt";
import Wycena from "./pages/Wycena";
import Porady from "./pages/Porady";
import BlogPost from "./pages/BlogPost";
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
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/wycena" element={<Wycena />} />
          <Route path="/porady" element={<Porady />} />
          <Route path="/porady/:id" element={<BlogPost />} />
          
          {/* Oferta routes */}
          <Route path="/zadaszenia-tarasu" element={<NotFound />} />
          <Route path="/przeszklenia" element={<NotFound />} />
          <Route path="/pergole-lamelowe" element={<NotFound />} />
          <Route path="/carporty" element={<NotFound />} />
          <Route path="/wiatrolapy" element={<NotFound />} />
          <Route path="/ruchome-lamele" element={<NotFound />} />
          <Route path="/rolety-zip" element={<NotFound />} />
          <Route path="/markizy" element={<NotFound />} />
          
          {/* Additional routes that will be implemented in future updates */}
          <Route path="/realizacje" element={<NotFound />} />
          <Route path="/polityka-prywatnosci" element={<NotFound />} />
          <Route path="/jak-dojechac" element={<NotFound />} />
          <Route path="/rezerwacja" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

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
import Blog from './pages/Blog';
import Realizacje from './pages/Realizacje';
import ProductPage from './pages/ProductPage';

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
          
          {/* Oferta routes - Now handled by ProductPage */}
          <Route path="/oferta/:slug" element={<ProductPage />} />
          
          {/* Additional routes */}
          <Route path="/realizacje" element={<Realizacje />} />
          <Route path="/polityka-prywatnosci" element={<NotFound />} />
          <Route path="/jak-dojechac" element={<NotFound />} />
          <Route path="/rezerwacja" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import Blog from "./pages/blog";
import LoginPage from "./pages/LoginPage";  

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="digifalx-theme">
        <div className="min-h-screen bg-background text-foreground">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<LoginPage />} /> {/* Login Page Route */}
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

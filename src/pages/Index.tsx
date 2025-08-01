
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AIFeatures from '@/components/AIFeatures';
import AIChat from '@/components/AIChat';
import Footer from '@/components/Footer';
import BlogSection from '@/components/blogsection';
import ClientSlider from '@/components/ClientSlider';
import ServiceSlider from '@/components/ServiceSlider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesSection />
      <AIFeatures />
      <AIChat />
      <BlogSection />
      <ServiceSlider/>
      <ClientSlider/>
      <Footer />
    </div>
  );
};

export default Index;

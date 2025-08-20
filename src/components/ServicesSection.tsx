import { useState } from 'react';
import { 
  Globe, 
  Search, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Zap,
  ArrowRight,
  Brain,
  X
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
  longDescription?: string;
}

const ServicesSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies and responsive design.",
      features: ["React & Next.js", "Mobile-First Design", "Performance Optimization", "Scalable Architectures", "Secure Integrations"],
      color: "from-blue-500 to-indigo-600",
      longDescription: "We specialize in developing robust and scalable web solutions tailored to your business needs..."
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Comprehensive SEO strategies and digital marketing campaigns that drive organic growth.",
      features: ["Keyword Research", "Content Strategy", "Link Building", "Technical SEO Audits", "Paid Ad Management", "Social Media Marketing"],
      color: "from-purple-500 to-pink-600",
      longDescription: "Boost your online visibility and attract more customers with our expert SEO..."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate processes and enhance user experiences.",
      features: ["Chatbots & Automation", "Predictive Analytics", "ML Models", "Natural Language Processing (NLP)", "Computer Vision Solutions", "AI-Powered Personalization"],
      color: "from-indigo-500 to-purple-600",
      longDescription: "Transform your operations and customer interactions with cutting-edge AI integration..."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights and comprehensive analytics to track performance and optimize results.",
      features: ["Real-time Tracking", "Custom Dashboards", "ROI Analysis", "Audience Segmentation", "A/B Testing", "Conversion Rate Optimization"],
      color: "from-blue-600 to-teal-500",
      longDescription: "Unlock the true potential of your data with our advanced analytics and insights services..."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Progressive web apps and mobile-optimized experiences for all devices and platforms.",
      features: ["PWA Development", "Cross-Platform", "App Store Ready", "Native App Development (iOS/Android)", "Mobile UI/UX Design", "Push Notifications"],
      color: "from-teal-500 to-green-500",
      longDescription: "Reach your audience everywhere with our expertly crafted mobile solutions..."
    },
    {
      icon: Palette,
      title: "Brand & Design",
      description: "Creative branding and UI/UX design that captures your vision and engages your audience.",
      features: ["Logo Design", "Brand Guidelines", "UI/UX Design", "Prototyping & Wireframing", "Graphic Design", "Brand Strategy Workshops"],
      color: "from-pink-500 to-rose-500",
      longDescription: "Craft a memorable identity and create intuitive user experiences with our brand and design services..."
    }
  ];

  const openDialogWithService = (service: Service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  return (
     <section
  className="py-24 text-white"
  style={{
    background: 'linear-gradient(to bottom, #000000ff, #110b2cff)'
  }}
>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-gray-900 rounded-full px-4 py-2 text-sm font-medium text-blue-400">
            <Zap className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            From stunning websites to AI-powered marketing strategies, we deliver end-to-end 
            digital solutions that transform your business and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800 bg-gray-1000 overflow-hidden relative"
            >
              <CardHeader className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between bg-blue-600 hover:bg-blue-800 text-white transition-colors"
                  onClick={() => openDialogWithService(service)}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-1000 border-1px rounded-3xl p-12 text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-400">
              Let's discuss how our comprehensive digital solutions can accelerate your growth 
              and establish your dominant market presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/services-page">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-blue-500 text-blue-400 hover:bg-gray-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Dialog */}
      {selectedService && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[800px] p-6 sm:p-8 bg-gray-900 text-white rounded-lg shadow-xl">
            <DialogHeader className="flex justify-between items-start pb-4 border-b border-gray-800">
              <div>
                <DialogTitle className="text-3xl font-bold mb-2 flex items-center">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${selectedService.color} text-white mr-3`}>
                    <selectedService.icon className="h-5 w-5" />
                  </span>
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-lg text-gray-400">
                  {selectedService.description}
                </DialogDescription>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
                onClick={() => setIsDialogOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>
            <div className="py-6 space-y-6">
              {selectedService.longDescription && (
                <div>
                  <h4 className="text-xl font-semibold mb-3">Overview</h4>
                  <p className="leading-relaxed text-gray-300">{selectedService.longDescription}</p>
                </div>
              )}
              <div>
                <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-md text-gray-300">
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <DialogFooter className="pt-4 border-t border-gray-800 flex justify-end">
              <Button 
                variant="default" 
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => setIsDialogOpen(false)}
              >
                Got It!
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="ml-3 border-blue-500 text-blue-400 hover:bg-gray-800"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Request a Quote
                </Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default ServicesSection;

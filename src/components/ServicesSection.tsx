import { useState } from 'react'; // Import useState
import { 
  Globe, 
  Search, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Zap,
  ArrowRight,
  Brain,
  X // Import X icon for close button
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
  DialogFooter // Optional: for close button in footer
} from '@/components/ui/dialog'; // Import Dialog components

// Define a type for your service to ensure type safety
interface Service {
  icon: React.ElementType; // Type for Lucide React icons
  title: string;
  description: string;
  features: string[];
  color: string;
  longDescription?: string; // Optional: Add a more detailed description for the popup
}

const ServicesSection = () => {
  // State to manage the open/close of the dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // State to store the currently selected service for the dialog
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies and responsive design.",
      features: ["React & Next.js", "Mobile-First Design", "Performance Optimization", "Scalable Architectures", "Secure Integrations"],
      color: "from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500",
      longDescription: "We specialize in developing robust and scalable web solutions tailored to your business needs. From dynamic single-page applications to complex enterprise platforms, our team leverages the latest frameworks like React and Next.js to deliver high-performance, secure, and user-friendly digital experiences. We prioritize mobile-first design, ensuring your site looks and performs flawlessly on any device."
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Comprehensive SEO strategies and digital marketing campaigns that drive organic growth.",
      features: ["Keyword Research", "Content Strategy", "Link Building", "Technical SEO Audits", "Paid Ad Management", "Social Media Marketing"],
      color: "from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500",
      longDescription: "Boost your online visibility and attract more customers with our expert SEO and digital marketing services. We conduct in-depth keyword research, craft engaging content strategies, and build high-quality backlinks to improve your search engine rankings. Our holistic approach includes technical SEO audits, paid advertising campaigns, and social media engagement to maximize your digital footprint and ROI."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate processes and enhance user experiences.",
      features: ["Chatbots & Automation", "Predictive Analytics", "ML Models", "Natural Language Processing (NLP)", "Computer Vision Solutions", "AI-Powered Personalization"],
      color: "from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500",
      longDescription: "Transform your operations and customer interactions with cutting-edge AI integration. We develop intelligent chatbots for instant support, implement predictive analytics for data-driven decisions, and build custom Machine Learning models to solve complex business problems. Our expertise includes NLP for understanding human language and computer vision for image analysis, bringing smart automation and personalization to your services."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights and comprehensive analytics to track performance and optimize results.",
      features: ["Real-time Tracking", "Custom Dashboards", "ROI Analysis", "Audience Segmentation", "A/B Testing", "Conversion Rate Optimization"],
      color: "from-blue-600 to-teal-500 dark:from-blue-500 dark:to-teal-400",
      longDescription: "Unlock the true potential of your data with our advanced analytics and insights services. We set up real-time tracking, develop custom dashboards tailored to your KPIs, and perform in-depth ROI analysis to ensure every marketing dollar counts. Our data scientists identify key trends, segment audiences for targeted campaigns, and conduct A/B testing to continuously optimize your performance and drive higher conversions."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Progressive web apps and mobile-optimized experiences for all devices and platforms.",
      features: ["PWA Development", "Cross-Platform", "App Store Ready", "Native App Development (iOS/Android)", "Mobile UI/UX Design", "Push Notifications"],
      color: "from-teal-500 to-green-500 dark:from-teal-400 dark:to-green-400",
      longDescription: "Reach your audience everywhere with our expertly crafted mobile solutions. Whether it's a Progressive Web App (PWA) for broad reach, a cross-platform app for efficiency, or a native iOS/Android application for peak performance, we build engaging and intuitive mobile experiences. Our services include comprehensive mobile UI/UX design and integration of features like push notifications to keep users connected."
    },
    {
      icon: Palette,
      title: "Brand & Design",
      description: "Creative branding and UI/UX design that captures your vision and engages your audience.",
      features: ["Logo Design", "Brand Guidelines", "UI/UX Design", "Prototyping & Wireframing", "Graphic Design", "Brand Strategy Workshops"],
      color: "from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400",
      longDescription: "Craft a memorable identity and create intuitive user experiences with our brand and design services. We go beyond aesthetics to develop cohesive brand guidelines, captivating logos, and user interfaces that are both beautiful and functional. Our process includes thorough prototyping and wireframing, professional graphic design, and strategic workshops to define and articulate your unique brand story."
    }
  ];

  // Function to open the dialog and set the selected service
  const openDialogWithService = (service: Service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-24 gradient-bg dark:gradient-bg-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 glass dark:glass-dark rounded-full px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            <Zap className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            From stunning websites to AI-powered marketing strategies, we deliver end-to-end 
            digital solutions that transform your business and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 glass dark:glass-dark overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <CardHeader className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Use a regular Button and handle the click to open the dialog */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-blue-50 dark:group-hover:bg-slate-800 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors"
                  onClick={() => openDialogWithService(service)} // On click, open the dialog with this service
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center primary-gradient dark:primary-gradient-dark rounded-3xl p-12 text-white dark:text-slate-900">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl opacity-90">
              Let's discuss how our comprehensive digital solutions can accelerate your growth 
              and establish your dominant market presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/services-page"> {/* Renamed to avoid conflict with the component */}
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Dialog */}
      {selectedService && ( // Only render dialog content if a service is selected
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[800px] p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-lg shadow-xl">
            <DialogHeader className="flex justify-between items-start pb-4 border-b border-gray-200 dark:border-slate-700">
              <div>
                <DialogTitle className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${selectedService.color} text-white mr-3`}>
                    <selectedService.icon className="h-5 w-5" />
                  </span>
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-lg text-slate-600 dark:text-slate-400">
                  {selectedService.description}
                </DialogDescription>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setIsDialogOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>
            <div className="py-6 space-y-6 text-slate-700 dark:text-slate-300">
              {selectedService.longDescription && (
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Overview</h4>
                  <p className="leading-relaxed">{selectedService.longDescription}</p>
                </div>
              )}
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 list-none pl-0">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-md">
                      <div className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <DialogFooter className="pt-4 border-t border-gray-200 dark:border-slate-700 flex justify-end">
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-colors"
                onClick={() => setIsDialogOpen(false)}
              >
                Got It!
              </Button>
              {/* You could add another button here, e.g., "Contact Us" */}
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="ml-3 border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
                  onClick={() => setIsDialogOpen(false)} // Close dialog when navigating
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
import { 
  Globe, 
  Search, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Zap,
  ArrowRight,
  Brain
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies and responsive design.",
      features: ["React & Next.js", "Mobile-First Design", "Performance Optimization"],
      color: "from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500"
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Comprehensive SEO strategies and digital marketing campaigns that drive organic growth.",
      features: ["Keyword Research", "Content Strategy", "Link Building"],
      color: "from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate processes and enhance user experiences.",
      features: ["Chatbots & Automation", "Predictive Analytics", "ML Models"],
      color: "from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights and comprehensive analytics to track performance and optimize results.",
      features: ["Real-time Tracking", "Custom Dashboards", "ROI Analysis"],
      color: "from-blue-600 to-teal-500 dark:from-blue-500 dark:to-teal-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Progressive web apps and mobile-optimized experiences for all devices and platforms.",
      features: ["PWA Development", "Cross-Platform", "App Store Ready"],
      color: "from-teal-500 to-green-500 dark:from-teal-400 dark:to-green-400"
    },
    {
      icon: Palette,
      title: "Brand & Design",
      description: "Creative branding and UI/UX design that captures your vision and engages your audience.",
      features: ["Logo Design", "Brand Guidelines", "UI/UX Design"],
      color: "from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400"
    }
  ];

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
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-blue-50 dark:group-hover:bg-slate-800 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors"
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
              <Link to="/services">
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
    </section>
  );
};

export default ServicesSection;


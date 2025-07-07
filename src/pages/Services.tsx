
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Globe, 
  Search, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Brain,
  Code,
  Target,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  const serviceCategories = [
    {
      id: 'web-dev',
      name: 'Web Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          title: 'Custom Web Development',
          description: 'Tailored websites built from scratch using the latest technologies',
          price: 'From $2,500',
          features: ['React/Next.js', 'Responsive Design', 'SEO Optimized', 'Performance Tuned'],
          timeline: '4-8 weeks'
        },
        {
          title: 'E-commerce Solutions',
          description: 'Complete online stores with payment integration and inventory management',
          price: 'From $3,500',
          features: ['Shopping Cart', 'Payment Gateway', 'Inventory System', 'Admin Dashboard'],
          timeline: '6-10 weeks'
        },
        {
          title: 'Web Application Development',
          description: 'Complex web applications with advanced functionality',
          price: 'From $5,000',
          features: ['Custom Features', 'Database Design', 'API Integration', 'User Management'],
          timeline: '8-16 weeks'
        }
      ]
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          title: 'SEO Optimization',
          description: 'Comprehensive SEO strategy to improve search rankings',
          price: 'From $800/month',
          features: ['Keyword Research', 'On-page SEO', 'Link Building', 'Technical SEO'],
          timeline: '3-6 months'
        },
        {
          title: 'Social Media Marketing',
          description: 'Strategic social media campaigns across all platforms',
          price: 'From $1,200/month',
          features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics'],
          timeline: 'Ongoing'
        },
        {
          title: 'PPC Advertising',
          description: 'Targeted pay-per-click campaigns for immediate results',
          price: 'From $500/month + ad spend',
          features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'ROI Tracking'],
          timeline: '2-4 weeks setup'
        }
      ]
    },
    {
      id: 'ai-integration',
      name: 'AI Integration',
      icon: Brain,
      color: 'from-purple-500 to-violet-500',
      services: [
        {
          title: 'AI Chatbots',
          description: 'Intelligent chatbots for customer service and lead generation',
          price: 'From $1,500',
          features: ['Natural Language Processing', '24/7 Availability', 'Multi-platform', 'Analytics'],
          timeline: '3-4 weeks'
        },
        {
          title: 'Predictive Analytics',
          description: 'AI-powered insights for business decision making',
          price: 'From $2,500',
          features: ['Data Analysis', 'Trend Prediction', 'Custom Dashboards', 'Reporting'],
          timeline: '4-6 weeks'
        },
        {
          title: 'Content Generation',
          description: 'AI-assisted content creation and optimization',
          price: 'From $800/month',
          features: ['Auto-generation', 'SEO Optimization', 'Multi-format', 'Quality Control'],
          timeline: '1-2 weeks'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              <Zap className="h-4 w-4 mr-2" />
              Premium Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Transform Your Business with Our Expert Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to accelerate your growth, 
              enhance your online presence, and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="web-dev" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12 h-14">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="flex items-center space-x-2 text-sm font-medium data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} text-white mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, index) => (
                    <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-white">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {service.title}
                          </CardTitle>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            {service.timeline}
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="text-2xl font-bold gradient-text">
                          {service.price}
                        </div>
                        
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full group">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We follow a systematic approach to ensure every project delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your goals and requirements' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive action plan' },
              { step: '03', title: 'Execution', description: 'Implementing solutions with precision' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and growth' }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl font-bold opacity-50">{phase.step}</div>
                <h3 className="text-xl font-semibold">{phase.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

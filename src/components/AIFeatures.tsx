
import { useState } from 'react';
import { Brain, Zap, Target, BarChart3, MessageSquare, Sparkles } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

const AIFeatures = () => {
  const [contentInput, setContentInput] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');
  const [seoResults, setSeoResults] = useState<any[]>([]);
  const { toast } = useToast();

  const aiFeatures = [
    {
      id: 'content-generation',
      icon: Sparkles,
      title: 'AI Content Generation',
      description: 'Generate high-quality, SEO-optimized content for your website and marketing campaigns.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'seo-optimization',
      icon: Target,
      title: 'Smart SEO Analysis',
      description: 'AI-powered SEO recommendations to improve your search rankings and visibility.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'performance-insights',
      icon: BarChart3,
      title: 'Performance Insights',
      description: 'Get AI-driven insights about your website performance and user behavior.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'chatbot-preview',
      icon: MessageSquare,
      title: 'AI Chatbot Preview',
      description: 'Experience our intelligent chatbot that can handle customer inquiries 24/7.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const generateContent = async () => {
    if (!contentInput.trim()) return;

    const templates = [
      `Transform your business with ${contentInput}. Our expert team delivers cutting-edge solutions that drive real results and accelerate growth.`,
      `Discover the power of ${contentInput} with our comprehensive approach. We combine innovation, strategy, and technology to create exceptional experiences.`,
      `Elevate your ${contentInput} strategy with data-driven insights and proven methodologies. Our solutions are designed to maximize your ROI and market impact.`
    ];

    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    setGeneratedContent(randomTemplate);

    toast({
      title: "Content Generated!",
      description: "AI has created optimized content based on your input.",
    });
  };

  const analyzeSEO = async () => {
    if (!seoKeywords.trim()) return;

    const mockResults = [
      { keyword: seoKeywords, difficulty: 'Medium', volume: '2,400', opportunity: 'High' },
      { keyword: `${seoKeywords} services`, difficulty: 'Low', volume: '720', opportunity: 'High' },
      { keyword: `best ${seoKeywords}`, difficulty: 'High', volume: '1,200', opportunity: 'Medium' },
      { keyword: `${seoKeywords} company`, difficulty: 'Medium', volume: '890', opportunity: 'High' }
    ];

    setSeoResults(mockResults);

    toast({
      title: "SEO Analysis Complete!",
      description: "AI has analyzed keyword opportunities for your content.",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 text-sm font-medium text-purple-700">
            <Brain className="h-4 w-4" />
            <span>AI-Powered Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Experience AI Integration
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Try our AI-powered tools that help optimize your content, improve SEO, 
            and provide intelligent insights for your business growth.
          </p>
        </div>

        {/* AI Features Grid with Modal Popup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aiFeatures.map((feature) => (
            <Dialog key={feature.id}>
              <Card className="group transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Try Demo
                    </Button>
                  </DialogTrigger>
                </CardContent>
              </Card>

              {/* Dialog Content */}
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{feature.title}</DialogTitle>
                  <DialogDescription>{feature.description}</DialogDescription>
                </DialogHeader>

                {feature.id === 'content-generation' && (
                  <div className="space-y-4">
                    <Input
                      value={contentInput}
                      onChange={(e) => setContentInput(e.target.value)}
                      placeholder="Enter a topic like 'web development'"
                    />
                    <Button
                      onClick={generateContent}
                      className="bg-gradient-to-r from-purple-600 to-blue-600"
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Generate Content
                    </Button>
                    {generatedContent && (
                      <div className="p-4 bg-purple-50 rounded-lg text-sm text-gray-700 border">
                        {generatedContent}
                      </div>
                    )}
                  </div>
                )}

                {feature.id === 'seo-optimization' && (
                  <div className="space-y-4">
                    <Input
                      value={seoKeywords}
                      onChange={(e) => setSeoKeywords(e.target.value)}
                      placeholder="e.g., digital marketing agency"
                    />
                    <Button
                      onClick={analyzeSEO}
                      className="bg-gradient-to-r from-green-600 to-emerald-600"
                    >
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analyze SEO
                    </Button>
                    {seoResults.length > 0 && (
                      <div className="bg-green-50 p-4 rounded-lg border text-sm space-y-2">
                        {seoResults.map((result, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span>{result.keyword}</span>
                            <span className="text-xs text-gray-500">
                              Difficulty: {result.difficulty}, Volume: {result.volume}, Opportunity: {result.opportunity}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {feature.id === 'performance-insights' && (
                  <div className="text-gray-700">
                    <p className="mb-4">Example insights you can track:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Bounce Rate & Session Duration</li>
                      <li>Conversion Rate Optimization</li>
                      <li>User Flow Tracking</li>
                    </ul>
                  </div>
                )}

                {feature.id === 'chatbot-preview' && (
                  <div className="bg-gray-50 border p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Simulated Chatbot Response:</p>
                    <div className="bg-white p-3 rounded-lg border text-sm">
                      👋 Hi! How can I assist you today? I can help with product info, pricing, or connect you with support.
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;


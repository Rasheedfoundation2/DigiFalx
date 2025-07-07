
import { useState } from 'react';
import { Brain, Zap, Target, BarChart3, MessageSquare, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const AIFeatures = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
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
    
    // Simulate AI content generation
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
    
    // Simulate SEO analysis
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

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aiFeatures.map((feature) => (
            <Card 
              key={feature.id} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 ${
                activeDemo === feature.id ? 'ring-2 ring-purple-500 shadow-2xl' : ''
              }`}
              onClick={() => setActiveDemo(activeDemo === feature.id ? null : feature.id)}
            >
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
                <Button 
                  variant={activeDemo === feature.id ? "default" : "outline"}
                  className={`w-full ${activeDemo === feature.id ? 'bg-gradient-to-r from-purple-600 to-blue-600' : ''}`}
                >
                  {activeDemo === feature.id ? 'Close Demo' : 'Try Demo'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Demos */}
        {activeDemo === 'content-generation' && (
          <Card className="border-0 shadow-2xl mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
                AI Content Generator Demo
              </CardTitle>
              <CardDescription>
                Enter a topic or keyword and watch AI generate optimized content for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topic or Keyword
                </label>
                <Input
                  value={contentInput}
                  onChange={(e) => setContentInput(e.target.value)}
                  placeholder="e.g., digital marketing, web development, SEO..."
                  className="w-full"
                />
              </div>
              <Button 
                onClick={generateContent}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Zap className="h-4 w-4 mr-2" />
                Generate Content
              </Button>
              {generatedContent && (
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Generated Content:</h4>
                  <p className="text-gray-700 leading-relaxed">{generatedContent}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {activeDemo === 'seo-optimization' && (
          <Card className="border-0 shadow-2xl mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-600" />
                Smart SEO Analysis Demo
              </CardTitle>
              <CardDescription>
                Enter a keyword to get AI-powered SEO insights and recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Keyword
                </label>
                <Input
                  value={seoKeywords}
                  onChange={(e) => setSeoKeywords(e.target.value)}
                  placeholder="e.g., digital marketing agency"
                  className="w-full"
                />
              </div>
              <Button 
                onClick={analyzeSEO}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Analyze SEO
              </Button>
              {seoResults.length > 0 && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-4">SEO Analysis Results:</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-200">
                          <th className="text-left py-2">Keyword</th>
                          <th className="text-left py-2">Difficulty</th>
                          <th className="text-left py-2">Volume</th>
                          <th className="text-left py-2">Opportunity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {seoResults.map((result, index) => (
                          <tr key={index} className="border-b border-green-100">
                            <td className="py-2 font-medium">{result.keyword}</td>
                            <td className="py-2">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                result.difficulty === 'Low' ? 'bg-green-100 text-green-700' :
                                result.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {result.difficulty}
                              </span>
                            </td>
                            <td className="py-2">{result.volume}</td>
                            <td className="py-2">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                result.opportunity === 'High' ? 'bg-green-100 text-green-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {result.opportunity}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default AIFeatures;

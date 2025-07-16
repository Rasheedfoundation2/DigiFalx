
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Clock, 
  MousePointer, 
  Smartphone,
  Globe,
  Activity,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Analytics = () => {
  const [heatmapData, setHeatmapData] = useState<Array<{x: number, y: number, intensity: number}>>([]);

  // Generate mock heatmap data
  useEffect(() => {
    const generateHeatmapData = () => {
      const data = [];
      for (let i = 0; i < 50; i++) {
        data.push({
          x: Math.random() * 800,
          y: Math.random() * 600,
          intensity: Math.random()
        });
      }
      setHeatmapData(data);
    };
    generateHeatmapData();
  }, []);

  // Mock data for charts
  const trafficData = [
    { name: 'Jan', visits: 4000, conversions: 240 },
    { name: 'Feb', visits: 3000, conversions: 139 },
    { name: 'Mar', visits: 2000, conversions: 980 },
    { name: 'Apr', visits: 2780, conversions: 390 },
    { name: 'May', visits: 1890, conversions: 480 },
    { name: 'Jun', visits: 2390, conversions: 380 },
    { name: 'Jul', visits: 3490, conversions: 430 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 45, color: '#8b5cf6' },
    { name: 'Mobile', value: 35, color: '#3b82f6' },
    { name: 'Tablet', value: 20, color: '#06b6d4' },
  ];

  const kpiData = [
    {
      title: 'Total Visitors',
      value: '124,571',
      change: '+12.5%',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Page Views',
      value: '431,890',
      change: '+8.2%',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Avg. Session Duration',
      value: '3m 24s',
      change: '+15.3%',
      icon: Clock,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Conversion Rate',
      value: '4.2%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const topPages = [
    { page: '/services', views: 45231, bounce: 32 },
    { page: '/', views: 38901, bounce: 28 },
    { page: '/about', views: 29432, bounce: 45 },
    { page: '/contact', views: 18765, bounce: 52 },
    { page: '/analytics', views: 12543, bounce: 38 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics Dashboard
            </Badge>
            <h1 className="text-4xl md:text-6xl font-trebuchet ms gradient-text">
              Real-Time Analytics & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive analytics dashboard powered by AI to track performance, 
              understand user behavior, and optimize your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{kpi.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                      <p className="text-sm text-green-600 font-medium">{kpi.change}</p>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${kpi.color}`}>
                      <kpi.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Traffic Trends */}
            <Card className="lg:col-span-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                  Traffic & Conversions
                </CardTitle>
                <CardDescription>Monthly traffic and conversion trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="visits" fill="#8b5cf6" name="Visits" />
                    <Bar dataKey="conversions" fill="#3b82f6" name="Conversions" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Device Distribution */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="h-5 w-5 mr-2 text-blue-600" />
                  Device Usage
                </CardTitle>
                <CardDescription>Traffic by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {deviceData.map((device, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: device.color }}
                        ></div>
                        <span className="text-sm font-medium">{device.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{device.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Heatmap & Top Pages */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Heatmap Visualization */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MousePointer className="h-5 w-5 mr-2 text-red-600" />
                  Click Heatmap
                </CardTitle>
                <CardDescription>User interaction hotspots on your website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '300px' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
                    {heatmapData.map((point, index) => (
                      <div
                        key={index}
                        className="absolute rounded-full"
                        style={{
                          left: `${(point.x / 800) * 100}%`,
                          top: `${(point.y / 600) * 100}%`,
                          width: `${10 + point.intensity * 20}px`,
                          height: `${10 + point.intensity * 20}px`,
                          backgroundColor: `rgba(239, 68, 68, ${point.intensity * 0.6})`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Activity className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Simulated Heatmap Data</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Pages */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-green-600" />
                  Top Pages
                </CardTitle>
                <CardDescription>Most visited pages and their performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{page.page}</p>
                        <p className="text-sm text-gray-600">{page.views.toLocaleString()} views</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{page.bounce}%</p>
                        <p className="text-xs text-gray-500">bounce rate</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Insights
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our AI analyzes your data to provide actionable recommendations for growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Performance Optimization',
                description: 'AI identifies bottlenecks and suggests improvements for faster loading times and better user experience.'
              },
              {
                icon: Users,
                title: 'Audience Segmentation',
                description: 'Machine learning algorithms segment your audience for targeted marketing campaigns.'
              },
              {
                icon: TrendingUp,
                title: 'Predictive Analytics',
                description: 'Forecast future trends and user behavior to stay ahead of the competition.'
              }
            ].map((insight, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <insight.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-3">{insight.title}</h3>
                  <p className="text-white/80 leading-relaxed">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;

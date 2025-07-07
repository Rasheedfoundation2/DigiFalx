import { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = [
    "Digital Marketing Excellence",
    "AI-Powered Web Solutions", 
    "SEO & Analytics Mastery",
    "Brand Growth Strategies"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden secondary-gradient dark:secondary-gradient-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/30 dark:bg-blue-700/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400/30 dark:bg-purple-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-500/30 dark:bg-indigo-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="absolute top-1/4 left-1/4 h-6 w-6 text-blue-600 dark:text-blue-400 animate-pulse-slow" />
        <Zap className="absolute top-1/3 right-1/4 h-8 w-8 text-purple-700 dark:text-purple-300 animate-float" />
        <Globe className="absolute bottom-1/3 left-1/3 h-7 w-7 text-indigo-800 dark:text-indigo-200 animate-pulse-slow" />
        <TrendingUp className="absolute bottom-1/4 right-1/3 h-6 w-6 text-blue-600 dark:text-blue-400 animate-float" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 text-center">
        <div className="max-w-5xl w-full mx-auto space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass dark:glass-dark rounded-full px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 hover:scale-105">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Digital Excellence</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-slate-900 dark:text-white">Elevate Your</span>
            <span className="block gradient-text dark:gradient-text-dark animate-gradient-x">
              {rotatingTexts[currentText]}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with our world-class marketing strategies, 
            cutting-edge web development, and AI-integrated solutions that drive real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="primary-gradient hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 dark:primary-gradient-dark dark:hover:from-blue-300 dark:hover:via-purple-300 dark:hover:to-indigo-300 text-white dark:text-slate-900 font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105 glow dark:glow-dark group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-300 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-500 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-white font-semibold px-8 py-4 rounded-full glass dark:glass-dark hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "150%", label: "Average ROI Increase" },
              { number: "24/7", label: "Premium Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2 p-4 rounded-2xl glass dark:glass-dark hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold gradient-text dark:gradient-text-dark">{stat.number}</div>
                <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 dark:border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 dark:bg-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


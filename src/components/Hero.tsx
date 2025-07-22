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
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.4]"
      >
        <source src="/videos/Tech_Website_Video_Generation_Request.mp" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center px-4 text-center text-white">
        <div className="max-w-6xl w-full mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-300">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Digital Excellence</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block">Elevate Your</span>
            <span className="block text-blue-400 animate-pulse">{rotatingTexts[currentText]}</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with world-class marketing, web development,
            and AI-integrated strategies that deliver real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 'ai-trends',
      title: 'The Future of AI in Digital Marketing',
      description: 'Explore how artificial intelligence is revolutionizing marketing strategies and customer engagement.',
      date: 'May 15, 2023',
      readTime: '5 min read',
      author: 'Sarah Johnson',
      category: 'AI & Technology'
    },
    {
      id: 'seo-strategies',
      title: 'Advanced SEO Strategies for 2023',
      description: 'Discover the latest SEO techniques that will dominate search rankings this year and beyond.',
      date: 'April 28, 2023',
      readTime: '7 min read',
      author: 'Michael Chen',
      category: 'SEO'
    },
    {
      id: 'content-creation',
      title: 'Content Creation in the Age of AI',
      description: 'How to balance human creativity with AI tools to produce engaging, authentic content.',
      date: 'June 2, 2023',
      readTime: '6 min read',
      author: 'Emma Rodriguez',
      category: 'Content Marketing'
    },
    {
      id: 'social-media',
      title: 'Maximizing ROI on Social Media',
      description: 'Proven strategies to increase engagement and conversions across social platforms.',
      date: 'May 22, 2023',
      readTime: '4 min read',
      author: 'David Park',
      category: 'Social Media'
    },
    {
      id: 'analytics',
      title: 'Data-Driven Decision Making',
      description: 'Leveraging analytics tools to make informed marketing decisions that drive growth.',
      date: 'June 10, 2023',
      readTime: '8 min read',
      author: 'Lisa Wong',
      category: 'Analytics'
    }
  ];

  const handleNext = () => {
    if (activeIndex < blogPosts.length - 1) {
      setActiveIndex(activeIndex + 1);
      scrollToCard(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      scrollToCard(activeIndex - 1);
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      const gap = 32; // gap-8 = 32px
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-sm font-medium text-blue-700">
            <CalendarDays className="h-4 w-4" />
            <span>Latest Articles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover our latest blog posts covering AI, marketing strategies, SEO trends,
            and more to help grow your business.
          </p>
        </div>

        {/* Blog Posts Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="rounded-full h-12 w-12"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="text-sm font-medium text-gray-500">
              {activeIndex + 1} / {blogPosts.length}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              disabled={activeIndex === blogPosts.length - 1}
              className="rounded-full h-12 w-12"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden gap-8 pb-8 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className="flex-shrink-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
                style={{ scrollSnapAlign: 'start' }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-0">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
                      {post.category}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">By {post.author}</span>
                    </div>
                    <Button variant="link" className="mt-4 px-0 text-blue-600 hover:text-blue-800">
                      Read Article →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToCard(index);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
        <Link to="/blog" className="inline-block">
          <Button variant="outline" className="px-8 py-6 text-lg">
            View All Blog Posts
          </Button>
        </Link> 
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
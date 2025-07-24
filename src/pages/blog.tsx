import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarDays, PenLine } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Marketing',
      date: 'July 10, 2025',
      author: 'Rasheed Shaikh',
      summary: 'Explore how artificial intelligence is reshaping digital marketing strategies and customer engagement.',
      image: 'public\assest\Gemini_Generated_Image_2dzv1d2dzv1d2dzv.webp'
    },
    {
      title: 'Top 5 SEO Trends in 2025',
      date: 'July 5, 2025',
      author: 'Mike Chen',
      summary: 'Stay ahead in the SEO game with these must-know trends that are changing search engine rankings.',
      image: '/blog/seo-trends.jpg'
    },
    {
      title: 'Why UX Matters More Than Ever',
      date: 'June 30, 2025',
      author: 'Jane Doe',
      summary: 'Understand how user experience can make or break your digital success in the competitive online world.',
      image: '/blog/ux-matters.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      {/* Blog Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
            <PenLine className="h-4 w-4 mr-2" />
            Our Blog
          </Badge>
          <h1 className="text-4xl md:text-6xl font-trebuchet ms gradient-text mt-6">
            Insights, Updates & Digital Innovation
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mt-4">
            Explore the latest trends, stories, and tips from the world of digital strategy, marketing, and tech.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <CalendarDays className="h-4 w-4" />
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.author}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{post.summary}</p>
                  </div>
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

export default Blog;

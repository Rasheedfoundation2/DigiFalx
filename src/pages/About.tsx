
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Target, Zap, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy is designed with measurable outcomes and ROI in mind'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority, and we tailor solutions to your unique needs'
    },
    {
      icon: Zap, 
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and emerging trends'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering world-class quality in every project'
    }
  ];

  const team = [
    {
      name: 'Rasheed Shaikh',
      role: 'CEO & Founder',
      image: '\employee\rasheedsir.jpeg',
      bio: '10+ years in digital marketing with expertise in growth strategies'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      image: '/placeholder.svg', 
      bio: 'Full-stack developer specializing in AI integration and scalable solutions'
    },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Retention' },
    { number: '150%', label: 'Average ROI Increase' },
    { number: '50+', label: 'Industry Awards' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              <Star className="h-4 w-4 mr-2" />
              About Digifalx
            </Badge>
            <h1 className="text-4xl md:text-6xl font-trebuchet ms gradient-text">
              Pioneering Digital Excellence Since 2018
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a passionate team of digital innovators, committed to transforming businesses 
              through cutting-edge technology, strategic marketing, and AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower businesses of all sizes with innovative digital solutions that drive growth, 
                  enhance customer experiences, and create lasting competitive advantages in the digital landscape.
                </p>
                <ul className="space-y-3">
                  {[
                    'Deliver measurable results that exceed expectations',
                    'Foster long-term partnerships built on trust and transparency',
                    'Stay at the forefront of technological innovation',
                    'Provide exceptional value through expert consultation'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Zap className="h-16 w-16 text-purple-600 mx-auto" />
                  <h3 className="text-2xl font-bold gradient-text">Innovation Driven</h3>
                  <p className="text-gray-600">Pushing boundaries with AI and emerging technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do and shape our relationships with clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Talented professionals united by a passion for digital excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl opacity-90">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{achievement.number}</div>
                <div className="text-lg opacity-80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

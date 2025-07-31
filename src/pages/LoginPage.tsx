import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, LockKeyhole, LogIn, Sparkles } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      localStorage.setItem('userToken', response.data.token); 
      navigate('/dashboard'); 

    } catch (err: any) {
      console.error('Login error:', err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('No response from server. Please try again later.');
      } else {
        setError('Login failed. An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Initiating Google Login...');
    alert('Google Login functionality to be implemented!');
  };

  // Framer Motion variants for the main card container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.1, 
        duration: 0.6, 
        ease: "easeOut"
      } 
    },
  };

  // Framer Motion variants for individual form items
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    // Main container for the entire page, takes full viewport height and uses flex column
    <div className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden">
      
      {/* Video Background - now absolute within this parent div */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[1.3]" // z-0 pushes it back
      >
        <source src="public/videos/Digifalx (4).mp4" type="video/mp4" /> {/* Use forward slashes! */}
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to improve text readability over video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-[1]"></div> 
      {/* z-[1] ensures it's above video but below content */}

      {/* Header - z-index to ensure it's above the overlay and video */}
      <Header className="relative z-10" /> 
      {/* You might need to add a 'className' prop to your Header component */}

      {/* Main content area - flex-grow to take available space, z-index for visibility */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-md"
        >
          <Card className="p-6 md:p-8 bg-white/10 dark:bg-slate-800/90 shadow-lg border-0 rounded-lg backdrop-blur-md"> {/* Added transparency and backdrop-blur */}
            <CardHeader className="text-center pb-6">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mx-auto w-fit mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Welcome Back
              </Badge>
              <CardTitle className="text-3xl md:text-4xl font-trebuchet ms gradient-text mb-2">
                Sign In to Your Account
              </CardTitle>
              <CardDescription className="text-gray-600 text-md">
                Enter your credentials or use your social account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Label htmlFor="password" className="text-white-700">Password</Label>
                  <div className="relative mt-1">
                    <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </motion.div>

                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-red-600 text-sm text-center"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit" 
                    className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging In...
                      </span>
                    ) : (
                      <>
                        <LogIn className="h-5 w-5 mr-2" />
                        Login
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* OR Separator */}
              <motion.div variants={itemVariants} className="relative flex items-center py-5">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </motion.div>

              {/* Google Login Button */}
              <motion.div variants={itemVariants}>
                <Button 
                  onClick={handleGoogleLogin}
                  className="w-full py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                >
                  <FcGoogle className="h-5 w-5 mr-3" />
                  Sign in with Google
                </Button>
              </motion.div>

              {/* Optional: Forgot Password / Sign Up link */}
              <motion.p variants={itemVariants} className="text-center text-sm text-gray-600 mt-4">
                <span className="mx-2">|</span>
                <a href="/forgot-password" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer - z-index to ensure it's above the overlay and video */}
      <Footer className="relative z-10" /> 
      {/* You might need to add a 'className' prop to your Footer component */}
    </div>
  );
};

export default LoginPage;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { FcGoogle } from 'react-icons/fc';
=======
import axios from 'axios';
>>>>>>> 744e1f2ffb03b5e50b6d1a3ff3589e0ff655d63a

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [error, setError] = useState('');
=======
  const navigate = useNavigate();
>>>>>>> 744e1f2ffb03b5e50b6d1a3ff3589e0ff655d63a

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');
    console.log('Login attempt:', { email, password });
    // Add actual authentication logic here
=======
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/admin/add-blog');
    } catch (err) {
      alert('Invalid email or password.');
    }
>>>>>>> 744e1f2ffb03b5e50b6d1a3ff3589e0ff655d63a
  };

  const handleGoogleLogin = () => {
    console.log('Google login initiated');
    // Add actual Google login logic here (e.g., Firebase, OAuth2)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-900 via-purple-900 to-indigo-900 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome to Digifalx</h2>
        <p className="text-slate-300 text-center mb-8">Sign in to your dashboard</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-200">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-200">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full"
              required
            />
          </div>

<<<<<<< HEAD
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

=======
>>>>>>> 744e1f2ffb03b5e50b6d1a3ff3589e0ff655d63a
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded-full shadow-md hover:scale-105 transition-transform"
          >
            Log In
          </Button>
        </form>

<<<<<<< HEAD
        <div className="my-6 text-center text-slate-300">or</div>

        <Button
          onClick={handleGoogleLogin}
          variant="outline"
          className="w-full bg-white text-gray-700 hover:bg-gray-100 font-medium py-2 rounded-full shadow flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} />
          Login with Google
        </Button>
=======
        <p className="text-slate-400 text-sm text-center mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-400 hover:underline">
            Sign up here
          </Link>
        </p>
>>>>>>> 744e1f2ffb03b5e50b6d1a3ff3589e0ff655d63a
      </motion.div>
    </div>
  );
}

export default Login;


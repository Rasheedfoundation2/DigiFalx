
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass dark:glass-dark shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
<<<<<<< HEAD
                src="assest\88548745-e315-483d-98d2-d60d2558a9e8.png" 
=======
                src="\assest\88548745-e315-483d-98d2-d60d2558a9e8.png" 
>>>>>>> 5d5eb0e (fixed some minor error)
                alt="Digifalx Logo" 
                className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 h-10 w-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-md group-hover:opacity-75 transition-opacity"></div>
            </div>
            <span className="text-2xl font-trebuchet ms gradient-text dark:gradient-text-dark">Digifalx</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  location.pathname === item.path 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/contact">
              <Button className="primary-gradient hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 dark:primary-gradient-dark dark:hover:from-blue-300 dark:hover:via-purple-300 dark:hover:to-indigo-300 text-white dark:text-slate-900 font-trebuchet ms px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 glass dark:glass-dark mt-2 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full primary-gradient hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 dark:primary-gradient-dark dark:hover:from-blue-300 dark:hover:via-purple-300 dark:hover:to-indigo-300 text-white dark:text-slate-900 font-trebuchet ms rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

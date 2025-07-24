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
      setScrolled(window.scrollY > 30);
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-lg ${
      scrolled ? 'bg-gradient-to-r from-blue-950/70 to-purple-950/70 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/assest/88548745-e315-483d-98d2-d60d2558a9e8.png" 
                alt="Digifalx Logo"
                className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20 group-hover:opacity-100 opacity-60 transition-opacity" />
            </div>
            <span className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Digifalx</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium px-2 transition-all duration-300 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-slate-200 hover:text-blue-300'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Theme + Login */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-white hover:text-blue-400 font-medium transition-all"
              >
                Login
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-all"
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 py-4 px-4 rounded-xl bg-gradient-to-br from-blue-950/80 to-purple-950/80 shadow-xl space-y-3 animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-lg text-center font-medium ${
                  location.pathname === item.path
                    ? 'bg-blue-700/30 text-blue-300'
                    : 'text-white hover:bg-slate-700/40'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full text-blue-400 hover:underline"
              >
                Login
              </Button>
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-md">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

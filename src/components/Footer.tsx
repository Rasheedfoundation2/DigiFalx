
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="primary-gradient dark:primary-gradient-dark text-white dark:text-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="\assest\88548745-e315-483d-98d2-d60d2558a9e8.png" 
                alt="Digifalx Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-bold text-white dark:text-slate-900">Digifalx</span>
            </div>
            <p className="text-blue-100 dark:text-slate-700 leading-relaxed">
              Transforming businesses through cutting-edge digital marketing and AI-powered web solutions. 
              Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/DigiFalx?t=hA309qIeddhlyJYDCMPzJQ&s=09" className="p-2 rounded-full bg-white/10 dark:bg-slate-900/10 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/digifalx/" className="p-2 rounded-full bg-white/10 dark:bg-slate-900/10 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/digifalx?igsh=ZWtrYzlocWJ1M2tz" className="p-2 rounded-full bg-white/10 dark:bg-slate-900/10 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 dark:bg-slate-900/10 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white dark:text-slate-900">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Analytics', path: '/analytics' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-blue-100 dark:text-slate-700 hover:text-blue-200 dark:hover:text-slate-800 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white dark:text-slate-900">Services</h3>
            <ul className="space-y-2 text-blue-100 dark:text-slate-700">
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
              <li>AI Integration</li>
              <li>Analytics & Insights</li>
              <li>Brand Strategy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white dark:text-slate-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-100 dark:text-slate-700">
                <Mail className="h-5 w-5 text-blue-200 dark:text-slate-600" />
                <span>hello@digifalx.com</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100 dark:text-slate-700">
                <Phone className="h-5 w-5 text-blue-200 dark:text-slate-600" />
                <span>+91 758754748</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100 dark:text-slate-700">
                <MapPin className="h-5 w-5 text-blue-200 dark:text-slate-600" />
                <span>Digifalx, Office no 219, Annapoorna Premises, Plot 8, Sector 18, Vashi, Navi Mumbai - 400703</span>
                <span>digifalx dubai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 dark:border-slate-900/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 dark:text-slate-600 text-center md:text-left">
              © {currentYear} Digifalx. All rights reserved. 
              Designed By Ramanand.
            </p>
            <div className="flex space-x-6 text-sm text-blue-200 dark:text-slate-600">
              <a href="#" className="hover:text-blue-100 dark:hover:text-slate-800 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-100 dark:hover:text-slate-800 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-100 dark:hover:text-slate-800 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

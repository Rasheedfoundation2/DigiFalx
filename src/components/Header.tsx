import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Analytics", path: "/analytics" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-lg ${
        scrolled || location.pathname !== "/"
          ? "bg-gradient-to-r from-blue-950/80 to-purple-950/80 shadow-lg"
          : "bg-transparent"
      }`}
    >
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
            <span className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Digifalx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"} // only Home should use end
                className={({ isActive }) =>
                  `relative font-medium px-2 transition-all duration-300 ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-200 hover:text-blue-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Login */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-white hover:text-blue-400 font-medium transition-all"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-all"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 py-4 px-4 rounded-xl bg-gradient-to-br from-blue-950/90 to-purple-950/90 shadow-xl space-y-3 animate-fadeIn">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-center font-medium relative ${
                    isActive
                      ? "text-blue-300 bg-blue-700/30"
                      : "text-white hover:bg-slate-700/40"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full text-blue-400 hover:underline"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full text-blue-400 hover:underline"
              >
                Signup
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

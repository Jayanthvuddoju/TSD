import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Staffing Services', path: '/staffing-services' },
  { label: 'Tech Solutions', path: '/tech-solutions' },
  { label: 'Why Choose Us', path: '/why-tsd' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Careers', path: '/careers' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 flex justify-center pt-4 pointer-events-none">
      <nav className={`w-full max-w-6xl transition-all duration-500 rounded-full pointer-events-auto backdrop-blur-md backdrop-saturate-[180%] bg-black/40 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] px-8 ${scrolled ? 'py-1.5' : 'py-2.5'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="TSD Logo" className="h-11 md:h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-200 relative group ${isActive ? 'text-brand-teal' : 'text-white/70 hover:text-white'
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-teal transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="primary">Claim Free Consulting</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/70 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>


        {/* Mobile Nav Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass border-b border-border-dark shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${isActive ? 'bg-dark-surface/50 text-brand-teal border-l-2 border-brand-teal' : 'text-white/70 hover:bg-dark-surface/50 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 px-3">
                <Button variant="primary" className="w-full">Claim Free Consulting</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

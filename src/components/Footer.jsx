import { Link } from 'react-router-dom';
import { Share2, Camera, Send, Video, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import { FloatingPathsBackground } from './ui/floating-paths';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03211f] text-text-primary-dark border-t-[3px] border-brand-teal relative overflow-hidden">
      <FloatingPathsBackground position={1}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-brand"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <img src={logo} alt="TSD Logo" className="h-16 md:h-20 w-auto mb-2" />
              </Link>
              <p className="text-white/70 text-sm mt-4 leading-relaxed">
                Transforming businesses through cutting-edge technology and strategic expertise across Malaysia, Singapore, India, Indonesia, and the Philippines.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-white/70 hover:text-brand-teal transition-colors"><Share2 size={20} /></a>
                <a href="#" className="text-white/70 hover:text-brand-teal transition-colors"><Camera size={20} /></a>
                <a href="#" className="text-white/70 hover:text-brand-teal transition-colors"><Send size={20} /></a>
                <a href="#" className="text-white/70 hover:text-brand-teal transition-colors"><Video size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-heading font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/70 hover:text-brand-teal text-sm transition-colors">Home</Link></li>
                <li><Link to="/staffing-services" className="text-white/70 hover:text-brand-teal text-sm transition-colors">Staffing Services</Link></li>
                <li><Link to="/tech-solutions" className="text-white/70 hover:text-brand-teal text-sm transition-colors">Tech Solutions</Link></li>
                <li><Link to="/why-tsd" className="text-white/70 hover:text-brand-teal text-sm transition-colors">Why Choose Us</Link></li>
                <li><Link to="/about-us" className="text-white/70 hover:text-brand-teal text-sm transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-white/70 hover:text-brand-teal text-sm transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-heading font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin size={18} className="text-brand-teal shrink-0 mt-0.5" />
                  <span>2B-21-1B, Plaza Sentral,<br/>Jalan Stesen Sentral 5,<br/>KL Sentral, 50470<br/>Kuala Lumpur, Malaysia</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <Phone size={18} className="text-brand-teal shrink-0" />
                  <span>+60 3481 32521</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <Mail size={18} className="text-brand-teal shrink-0" />
                  <a href="mailto:info@tech-sd.com" className="hover:text-brand-teal transition-colors text-white/70">info@tech-sd.com</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              &copy; {currentYear} Tech Solutions & Development Sdn. Bhd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/70">
              <Link to="/privacy-policy" className="hover:text-brand-teal transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-brand-teal transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </FloatingPathsBackground>
    </footer>
  );
}

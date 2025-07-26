import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">Alka Forgings</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading impression die forging company delivering precision-forged components 
              with unmatched quality and reliability for diverse industries worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/capabilities" className="text-gray-300 hover:text-white transition-colors duration-200">Capabilities</Link></li>
              <li><Link to="/materials" className="text-gray-300 hover:text-white transition-colors duration-200">Materials</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-white transition-colors duration-200">Industries</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors duration-200">Case Studies</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/impression-die-forging" className="text-gray-300 hover:text-white transition-colors duration-200">Impression Die Forging</Link></li>
              <li><Link to="/capabilities" className="text-gray-300 hover:text-white transition-colors duration-200">CNC Machining</Link></li>
              <li><Link to="/capabilities" className="text-gray-300 hover:text-white transition-colors duration-200">3D Laser Scanning</Link></li>
              <li><Link to="/capabilities" className="text-gray-300 hover:text-white transition-colors duration-200">Reverse Engineering</Link></li>
              <li><Link to="/capabilities" className="text-gray-300 hover:text-white transition-colors duration-200">Custom Tooling</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-white transition-colors duration-200">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Industrial Area, Sector 45<br />
                  Gurgaon, Haryana 122003<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 124 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@alkaforgings.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Alka Forgings. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
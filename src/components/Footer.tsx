import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100 border-t border-slate-200">
      {/* Main Content */}
      <div className="w-full px-6 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="text-3xl font-bold tracking-tight inline-block mb-6 group">
                <span className="text-3xl font-bold tracking-tight text-slate-900">
                  zuvi<span className="text-indigo-600">go</span>
                </span>
              </Link>
              <p className="text-slate-700 max-w-sm mb-8 leading-relaxed text-base">
                We build digital systems that help founders and entrepreneurs scale their businesses. 
                From websites to automation, we've got you covered.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-indigo-600 border-2 border-slate-200 flex items-center justify-center  transition-all duration-300 shadow-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-indigo-600  border-2 border-slate-200 flex items-center justify-center  transition-all duration-300 shadow-sm"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-indigo-600  border-2 border-slate-200 flex items-center justify-center  transition-all duration-300 shadow-sm"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['How We Work', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-slate-700 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    >
                      {link}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-6">Get in Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@zuvigo.com"
                    className="text-slate-700 hover:text-blue-600 transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <Mail className="w-5 h-5 text-indigo-600" />
                    <span>hello@zuvigo.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-slate-700 hover:text-blue-600 transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <Phone className="w-5 h-5 text-indigo-600" />
                    <span>+1 (234) 567-890</span>
                  </a>
                </li>
                <li className="text-slate-700 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <span>Remote-First Agency</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-600 font-medium">
              © {currentYear} Zuvigo. All rights reserved.
            </p>
            <div className="flex gap-8 flex-wrap justify-center md:justify-end">
              <Link 
                to="/privacy-policy" 
                className="text-sm text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-sm text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

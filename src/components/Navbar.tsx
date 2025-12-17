
import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#process', label: 'How We Build' },
    { href: '#services', label: 'Solutions' },
    { href: '#work', label: 'Selected Work' },
    
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
           <a href="#" className="flex items-center gap-2">
  <span className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
    zuvi<span className="text-indigo-600">go</span>
  </span>
</a>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <button className="px-6 py-2.5 bg-indigo-600  text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl  transition-all duration-300">
                Schedule Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu - Slides from Left */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed left-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
           <span className="text-2xl font-semibold tracking-tight text-slate-900">
  zuvi<span className="text-indigo-600">go</span>
</span>

            <button
              onClick={closeMenu}
              className="text-slate-900"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-lg text-slate-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Let's Talk Button at Bottom */}
          <div className="absolute bottom-8 left-6 right-6">
            <button
              className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-300"
              onClick={closeMenu}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
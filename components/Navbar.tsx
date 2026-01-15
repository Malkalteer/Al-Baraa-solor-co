import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Phone } from 'lucide-react';
import { useRoute, navigate } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const route = useRoute();
  const location = { pathname: route };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'المستشار الذكي', href: '#ai-chat' },
    { name: 'من نحن', href: '#contact' }, 
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      // Add a small delay to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
           window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/90 dark:bg-dark-card/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => {
              if (location.pathname !== '/') navigate('/');
              window.scrollTo(0,0);
            }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sun className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-none">البراء</h1>
              <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">للطاقة الشمسية</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-bold transition-transform transform hover:scale-105 cursor-pointer"
            >
              <Phone size={18} />
              <span>اتصل بنا</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
             <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 dark:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-card shadow-xl absolute w-full left-0 top-full border-t border-gray-100 dark:border-gray-700">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 rounded-md cursor-pointer"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block px-3 py-3 text-base font-medium text-primary-600 dark:text-primary-400 font-bold cursor-pointer"
              >
                اتصل بنا
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
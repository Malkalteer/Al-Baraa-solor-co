import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Sun } from 'lucide-react';
import { navigate } from '../constants';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // Try to find the element on the current page first (e.g. #contact exists on all pages)
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If element not found (e.g. #services when on /projects page), navigate to Home first
      navigate('/');
      // Add a small delay to allow Home component to mount before scrolling
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    }
  };

  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Sun className="text-white w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">البراء للطاقة</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              البراء للطاقة المتجددة، شريكك الموثوق لمستقبل مشرق. نقدم حلول الطاقة المستدامة لتضيء منزلك 24/7 بأحدث التقنيات.
            </p>
            <div className="flex gap-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">روابط سريعة</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-primary-400 transition-colors cursor-pointer">الرئيسية</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-primary-400 transition-colors cursor-pointer">خدماتنا</a></li>
              <li><a href="#calculator" onClick={(e) => handleScroll(e, '#calculator')} className="hover:text-primary-400 transition-colors cursor-pointer">حاسبة التوفير</a></li>
              <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:text-primary-400 transition-colors cursor-pointer">معرض الأعمال</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-primary-400 transition-colors cursor-pointer">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">خدماتنا</h3>
            <ul className="space-y-4 text-gray-400">
              <li>منظومات طاقة للمنازل</li>
              <li>منظومات تشغيل المعامل</li>
              <li>طاقة شمسية للآبار الزراعية</li>
              <li>بطاريات وإنفرترات حديثة</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">تواصل معنا</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0" size={20} />
                <span>سوريا، دمشق <br/> اوتستراد المزة، جانب برج تالا</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={20} />
                <span dir="ltr">+963 944 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={20} />
                <span>info@albaraa-syria.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} شركة البراء للطاقة المتجددة - سوريا. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { navigate } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
          alt="مزرعة ألواح طاقة شمسية في سوريا - البراء للطاقة" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/70 dark:to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-yellow-500/90 text-black font-bold px-4 py-1 rounded-full text-sm mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
             مستقبل الطاقة بين يديك ⚡
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            استثمر في <span className="text-primary-400">الشمس</span> <br/>
            ووفر في فاتورتك
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            البراء للطاقة المتجددة تقدم لك أحدث حلول الطاقة الشمسية للمنازل والشركات. جودة عالمية، تركيب احترافي، وضمان طويل الأمد.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#ai-chat" 
              onClick={(e) => handleScroll(e, '#ai-chat')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30 cursor-pointer"
            >
              استشر الذكاء الاصطناعي
              <ArrowLeft size={20} />
            </a>
            <a 
              href="#/projects"
              onClick={(e) => { e.preventDefault(); navigate('/projects'); }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center cursor-pointer"
            >
              شاهد أعمالنا
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm sm:text-base text-gray-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary-400" size={18} />
              <span>ضمان يصل لـ 25 سنة</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary-400" size={18} />
              <span>صيانة دورية مجانية</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary-400" size={18} />
              <span>دعم فني 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
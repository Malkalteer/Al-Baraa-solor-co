import React from 'react';
import { navigate } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-primary-600 dark:bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">لماذا تختار البراء للطاقة؟</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-xl mb-4 shadow-lg">1</div>
            <h3 className="text-xl font-bold mb-2">جودة عالمية مضمونة</h3>
            <p className="text-gray-200 text-sm">نستخدم ألواح وبطاريات من ماركات عالمية موثوقة (Longi, Jinko, Growatt) لضمان عمر طويل.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-green-400 text-black font-bold rounded-full flex items-center justify-center text-xl mb-4 shadow-lg">2</div>
            <h3 className="text-xl font-bold mb-2">حلول لمشاكل التقنين</h3>
            <p className="text-gray-200 text-sm">نصمم منظومات هجينة (Hybrid) تضمن لك الكهرباء 24 ساعة حتى في أوقات انقطاع الشبكة.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-blue-400 text-black font-bold rounded-full flex items-center justify-center text-xl mb-4 shadow-lg">3</div>
            <h3 className="text-xl font-bold mb-2">كفالة وصيانة حقيقية</h3>
            <p className="text-gray-200 text-sm">ورشاتنا الفنية جاهزة دائماً للصيانة والدعم الفني في جميع المحافظات السورية.</p>
          </div>
        </div>

        <div className="mt-16 bg-black/30 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
           <div className="z-10 mb-6 md:mb-0">
             <h3 className="text-2xl font-bold mb-2">أكثر من 500 مشروع ناجح</h3>
             <p className="text-gray-300">من دمشق إلى حلب، نفخر بخدمة أهلنا في كل مكان.</p>
           </div>
           <a 
             href="#/projects" 
             onClick={(e) => { e.preventDefault(); navigate('/projects'); }}
             className="bg-white text-primary-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors z-10 cursor-pointer"
           >
             شاهد معرض الأعمال
           </a>
           {/* Abstract chart background */}
           <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20 flex items-end justify-around px-10">
              <div className="w-8 h-10 bg-white rounded-t"></div>
              <div className="w-8 h-16 bg-white rounded-t"></div>
              <div className="w-8 h-12 bg-white rounded-t"></div>
              <div className="w-8 h-24 bg-white rounded-t"></div>
              <div className="w-8 h-20 bg-white rounded-t"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
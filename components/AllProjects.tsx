import React, { useEffect } from 'react';
import { PROJECTS, navigate } from '../constants';
import { ArrowRight, MapPin, Zap } from 'lucide-react';

const AllProjects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
      <title>معرض الأعمال | مشاريع الطاقة الشمسية - البراء</title>
      <meta name="description" content="تصفح أحدث مشاريع الطاقة الشمسية التي نفذتها شركة البراء في سوريا. مشاريع منزلية، صناعية، وزراعية بأعلى معايير الجودة." />
      <link rel="canonical" href="https://albaraa-solar.sy/projects" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <a 
            href="#/" 
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-bold mb-4 hover:gap-2 transition-all cursor-pointer"
          >
            <ArrowRight size={20} className="ml-2" />
            العودة للرئيسية
          </a>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            معرض الأعمال
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            نفخر بتقديم أفضل حلول الطاقة المتجددة في سوريا. استعرض أحدث مشاريعنا التي تم تنفيذها بأعلى معايير الجودة.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={`تركيب طاقة شمسية - ${project.title} في ${project.location}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1 shadow-sm">
                  <Zap size={12} className="text-yellow-500" />
                  {project.capacity}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <MapPin size={16} className="text-primary-500" />
                  {project.location}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button className="text-primary-600 dark:text-primary-400 text-sm font-bold hover:underline">
                    مشاهدة التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Placeholder for more projects to fill the grid visually if needed */}
          {[1, 2, 3].map((i) => (
             <div key={`placeholder-${i}`} className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-8 min-h-[300px] text-center opacity-70">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <Zap size={32} className="text-gray-400" />
                </div>
                <h3 className="font-bold text-gray-500 dark:text-gray-400">مشروع قادم {i}</h3>
                <p className="text-sm text-gray-400 mt-2">نعمل باستمرار على توسيع خدماتنا</p>
             </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-primary-600 rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">هل لديك مشروع مشابه؟</h2>
            <p className="mb-8 text-primary-100 max-w-xl mx-auto">
              تواصل معنا اليوم للحصول على دراسة مجانية لمشروعك، سواء كان منزلياً، زراعياً أو صناعياً.
            </p>
            <a href="#contact" className="bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block">
              اطلب عرض سعر
            </a>
          </div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
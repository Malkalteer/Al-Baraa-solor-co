import React from 'react';
import { PROJECTS, navigate } from '../constants';
import { ArrowLeft } from 'lucide-react';

const ProjectsMarquee: React.FC = () => {
  // Triple the projects list to ensure smooth infinite scroll without gaps
  const marqueeItems = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#162032] overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <div>
           <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider text-sm">معرض الأعمال</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
            مشاريعنا المميزة
          </h2>
        </div>
        <a 
          href="#/projects" 
          onClick={(e) => { e.preventDefault(); navigate('/projects'); }}
          className="hidden md:flex items-center text-primary-600 dark:text-primary-400 font-bold hover:gap-2 transition-all cursor-pointer"
        >
          مشاهدة جميع المشاريع
          <ArrowLeft size={20} className="mr-2" />
        </a>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradient overlays to soften edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-gray-50 dark:from-[#162032] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-gray-50 dark:from-[#162032] to-transparent pointer-events-none"></div>
        
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee gap-6 py-4">
            {marqueeItems.map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                className="relative w-[300px] md:w-[400px] h-[300px] md:h-[350px] flex-shrink-0 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img 
                  src={project.imageUrl} 
                  alt={`مشروع طاقة شمسية: ${project.title} في ${project.location}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-right">
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <div className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                    {project.location}
                  </div>
                  <div className="text-primary-400 text-xs mt-2 font-mono">
                     ⚡ {project.capacity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMarquee;
import React from 'react';
import { Home, Factory, Sprout, Wrench } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={40} />,
  Factory: <Factory size={40} />,
  Sprout: <Sprout size={40} />,
  Wrench: <Wrench size={40} />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider text-sm">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            حلول الطاقة البديلة في سوريا
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            نقدم في البراء للطاقة المتجددة حزمة خدمات متكاملة لتأمين الكهرباء المستدامة لمنزلك أو مشروعك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 dark:bg-dark-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

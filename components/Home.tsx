import React from 'react';
import Hero from './Hero';
import Services from './Services';
import SavingsCalculator from './SavingsCalculator';
import ProjectsMarquee from './ProjectsMarquee';
import Features from './Features';
import AIChat from './AIChat';

const Home: React.FC = () => {
  return (
    <>
      <title>البراء للطاقة الشمسية | حلول الطاقة المتجددة في سوريا</title>
      <meta name="description" content="شركة البراء للطاقة الشمسية في سوريا. نقدم أفضل منظومات الطاقة للمنازل، المعامل، والآبار الزراعية. استشارات ذكية، كفالة حقيقية، وصيانة دورية." />
      <link rel="canonical" href="https://albaraa-solar.sy/" />
      
      <Hero />
      <Services />
      <SavingsCalculator />
      <ProjectsMarquee />
      <Features />
      <AIChat />
    </>
  );
};

export default Home;
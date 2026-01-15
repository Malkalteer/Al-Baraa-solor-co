import { useState, useEffect } from 'react';
import { Project, Service } from './types';

export const useRoute = () => {
  const [route, setRoute] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.slice(1);
      if (!hash) hash = '/';
      setRoute(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check in case of direct load with hash
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
};

export const navigate = (path: string) => {
  if (path === '/') {
    window.location.hash = ''; // or '#/'
  } else {
    window.location.hash = path;
  }
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "منظومات منزلية متكاملة",
    description: "حلول شاملة للإنارة وتشغيل البرادات والغسالات للاستغناء التام عن التقنين والأمبيرات.",
    icon: "Home"
  },
  {
    id: 2,
    title: "حلول للمعامل والمشاريع",
    description: "منظومات صناعية ضخمة لتأمين استمرارية العمل في المصانع والورش دون توقف.",
    icon: "Factory"
  },
  {
    id: 3,
    title: "طاقة للآبار الزراعية",
    description: "غطاسات ومضخات تعمل على الطاقة الشمسية مباشرة، الحل الأوفر للمزارع البعيدة.",
    icon: "Sprout"
  },
  {
    id: 4,
    title: "صيانة وتحديث",
    description: "صيانة دورية للألواح والإنفرترات، وتحديث المنظومات القديمة لرفع كفاءتها.",
    icon: "Wrench"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "منظومة تجارية",
    location: "حلب - المدينة الصناعية",
    capacity: "نظام 50 كيلو واط",
    imageUrl: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 2,
    title: "تشغيل مزرعة دواجن",
    location: "درعا - أزرع",
    capacity: "ضخ مياه 30 حصان",
    imageUrl: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    title: "مشروع منزلي متكامل",
    location: "ريف دمشق - يعفور",
    capacity: "نظام هجين 8 كيلو واط",
    imageUrl: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    title: "مشروع ري زراعي",
    location: "حماة - الغاب",
    capacity: "غطاس 40 حصان",
    imageUrl: "https://picsum.photos/800/600?random=4"
  },
  {
    id: 5,
    title: "فيلا سكنية",
    location: "اللاذقية",
    capacity: "نظام 15 كيلو واط",
    imageUrl: "https://picsum.photos/800/600?random=5"
  }
];
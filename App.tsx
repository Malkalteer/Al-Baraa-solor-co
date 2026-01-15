import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllProjects from './components/AllProjects';
import Footer from './components/Footer';
import { useRoute } from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const route = useRoute();

  useEffect(() => {
    // 1. Set default theme to Light (White)
    // Only use dark mode if explicitly saved in local storage
    // If key doesn't exist, it defaults to false (Light)
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);

    // 2. Handle scroll on refresh (Initial Load)
    // Prevent browser from restoring scroll position automatically
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 font-sans flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        {route === '/projects' ? <AllProjects /> : <Home />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
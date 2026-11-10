import { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { RequestPage } from './pages/RequestPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Handle URL hash on initial load or back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'solutions' || hash === 'simulator') {
        setCurrentPage('solutions');
        if (hash === 'simulator') {
          setTimeout(() => {
            const el = document.getElementById('simulator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      } else if (hash === 'request') {
        setCurrentPage('request');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType, sectionId?: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? (sectionId ? `#${sectionId}` : '') : (sectionId ? `#${sectionId}` : `#${page}`);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-text-primary flex flex-col font-body selection:bg-obsidian-pure selection:text-white">
      {/* Main Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main View Port */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'solutions' && <SolutionsPage onNavigate={navigateTo} />}
        {currentPage === 'request' && <RequestPage onNavigate={navigateTo} />}
      </main>

      {/* Global Minimalist Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;

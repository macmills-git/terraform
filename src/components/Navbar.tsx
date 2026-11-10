import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';
import { FlowerDoodle } from './FlowerDoodle';
import { Sparkle } from './Sparkle';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Lock body scroll and listen for Escape key when sidebar is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    if (sidebarOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const navLinks = [
    { label: 'Home', page: 'home' as PageType, sectionId: 'hero', index: '01' },
    { label: 'Solutions & Services', page: 'solutions' as PageType, sectionId: 'solutions', index: '02' },
    { label: 'Request Collection', page: 'request' as PageType, sectionId: 'request', index: '03' },
  ];

  const handleLinkClick = (page: PageType, sectionId?: string) => {
    setSidebarOpen(false);
    onNavigate(page, sectionId);
    if (page === currentPage && sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md transition-all duration-300 border-b border-border-hairline">
        {/* Tight, compact navbar container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 sm:h-13.5 md:h-14 flex items-center justify-between">
          
          {/* Brand Mark (Left): Uppercase TERRAFORM with tight sleek aperture glyph */}
          <button 
            onClick={() => handleLinkClick('home', 'hero')}
            className="flex items-center space-x-2 text-left group focus:outline-none"
          >
            {/* Sleek circular aperture glyph */}
            <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center p-0.5 group-hover:rotate-45 transition-transform duration-500">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <span className="font-heading font-normal text-base sm:text-lg tracking-tight text-obsidian-pure">
              TERRAFORM
            </span>
          </button>

          {/* Floating Center Pill Nav (Desktop view) */}
          <nav className="hidden lg:flex items-center bg-obsidian-pure rounded-full p-1 shadow-nav border border-white/10">
            {navLinks.slice(0, 2).map((link) => {
              const isActive = currentPage === link.page && (link.sectionId === 'hero' || currentPage !== 'home');
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.page, link.sectionId)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white/15 text-white font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Utility: Request Collection + Sidebar Drawer Menu Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleLinkClick('request')}
              className={`hidden sm:inline-flex px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                currentPage === 'request'
                  ? 'bg-[#80B86B] text-white border-[#80B86B] shadow-sm font-semibold'
                  : 'text-obsidian-pure border-neutral-300 hover:border-[#80B86B] hover:text-[#80B86B] hover:bg-neutral-50'
              }`}
            >
              Request Collection
            </button>

            {/* Menu Trigger Button: Only shown on smaller screens (phone/tablet), hidden on laptop/desktop */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full border border-neutral-300 hover:border-obsidian-pure text-obsidian-pure hover:bg-neutral-50 transition-all text-xs font-medium focus:outline-none"
              aria-label="Open Navigation Sidebar"
            >
              <Menu size={16} />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* 
        Responsive Drawer: Covers ~40% of the page from the right
      */}
      {/* 1. Backdrop Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/45 backdrop-blur-[2px] z-50 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* 2. Slide-in Sidebar (40% width on tablet/desktop, 85vw on mobile) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] sm:w-[50vw] md:w-[40%] max-w-[500px] bg-white text-obsidian-pure shadow-2xl border-l border-border-hairline flex flex-col justify-between transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Site Navigation Drawer"
      >
        {/* Top Header of the Sidebar */}
        <div className="p-5 sm:p-6 pb-4 border-b border-border-hairline flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center p-0.5">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <span className="font-heading font-normal text-base tracking-tight text-obsidian-pure">
              TERRAFORM
            </span>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors focus:outline-none"
            aria-label="Close Navigation Sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Middle Navigation Links List */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-1">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-3">
            Navigation
          </div>

          {navLinks.map((link) => {
            const isActive = currentPage === link.page && (link.sectionId === 'hero' || currentPage !== 'home');
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.page, link.sectionId)}
                className={`w-full text-left py-3 px-3.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                  isActive 
                    ? 'bg-neutral-100 text-obsidian-pure font-semibold' 
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-obsidian-pure'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {link.index && (
                    <span className="text-[11px] font-mono text-neutral-400 font-normal">
                      {link.index}
                    </span>
                  )}
                  <span className="text-sm sm:text-base font-normal font-heading">
                    {link.label}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#80B86B]"></span>
                  )}
                  <ArrowUpRight 
                    size={15} 
                    className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-neutral-500" 
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Section of Sidebar with CTA and Credentials */}
        <div className="p-5 sm:p-7 border-t border-border-hairline bg-neutral-50/50 space-y-4">
          {/* Quick CTA */}
          <button
            onClick={() => handleLinkClick('request')}
            className={`w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm ${
              currentPage === 'request'
                ? 'bg-[#80B86B] text-white hover:bg-[#72a65e]'
                : 'bg-obsidian-pure text-white hover:bg-neutral-900'
            }`}
          >
            <span>Request Collection &amp; Collaboration</span>
            <ArrowRight size={14} />
          </button>

          {/* Hub Status & Sprout Branding Accent */}
          <div className="pt-2 flex items-center justify-between text-xs text-neutral-500">
            <div>
              <div className="font-medium text-neutral-800">Accra Central Operations</div>
              <div className="text-[11px] text-neutral-400">Ring Road Central · EPA Licensed</div>
            </div>

            <div className="flex items-center space-x-1.5">
              <Sparkle size={14} className="text-[#80B86B]" />
              <FlowerDoodle size={22} color="#80B86B" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

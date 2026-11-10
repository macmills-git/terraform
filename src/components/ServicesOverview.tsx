import React, { useState, useRef } from 'react';
import { ArrowRight, Recycle, Building2, Home, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PageType } from '../types';

interface ServicesOverviewProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
  // Mobile stacked deck state
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
  const [isSwipingOut, setIsSwipingOut] = useState(false);
  const [swipeDir, setSwipeDir] = useState<'left' | 'right' | null>(null);
  const isDraggingRef = useRef(false);

  // Desktop active card focus state
  const [desktopActiveTab, setDesktopActiveTab] = useState<'commercial' | 'residential' | 'recycling'>('commercial');

  const cards = [
    {
      id: 'commercial',
      tabLabel: 'Commercial & Industrial',
      title: 'Commercial & Industrial Pickups',
      icon: Building2,
      stat: '3,800+ businesses',
      statLabel: 'Businesses Managed',
      badgeColor: 'bg-white text-obsidian-pure',
      theme: 'dark',
      subtitle: 'Guaranteed on-time waste pickup tailored to your operational hours for factories, corporate offices, hotels, and hospitals.',
      bullets: [
        'Guaranteed on-time arrival & rapid emergency dispatch within 120 minutes',
        'Heavy roll-offs, compactors & clean skips placed directly at your loading bay',
        'Zero overflowing bins, zero odor issues, and certified EPA Ghana manifests',
      ],
      ctaText: 'Book commercial pickup',
      targetPage: 'request' as PageType,
    },
    {
      id: 'residential',
      tabLabel: 'Residential & Estate',
      title: 'Residential & Estate Pickups',
      icon: Home,
      stat: '120K+ households',
      statLabel: 'Homes Serviced',
      badgeColor: 'bg-obsidian-pure text-white',
      theme: 'light',
      subtitle: 'Stress-free doorstep collection for private residences, gated communities, and estates on fixed, predictable schedules.',
      bullets: [
        'Dependable weekly & bi-weekly collection schedules you can set your watch by',
        'Clean, durable, odor-free wheeled bins delivered straight to your gate',
        'Automated WhatsApp pickup alerts 15 minutes ahead with polite crews',
      ],
      ctaText: 'Schedule home pickup',
      targetPage: 'request' as PageType,
    },
    {
      id: 'recycling',
      tabLabel: 'The Icing: Recycling',
      title: 'The Icing: Recycling & Bio-Products',
      icon: Recycle,
      stat: '88% diverted',
      statLabel: 'Landfill Diversion',
      badgeColor: 'bg-[#80B86B] text-white',
      theme: 'green',
      subtitle: 'What sets us apart: You get punctual, stress-free pickup, plus the assurance that your waste is recycled and turned into bio-products.',
      bullets: [
        'Plastics & polymers sorted into certified Grade-A manufacturing raw material',
        'Food & organic market waste processed into chemical-free bio-fertilizers',
        '88% verified landfill diversion with full corporate Scope 3 ESG accounting',
      ],
      ctaText: 'See circular yield',
      targetPage: 'solutions' as PageType,
    },
  ];

  const totalCards = cards.length;

  const nextCard = () => {
    if (isSwipingOut) return;
    setSwipeDir('left');
    setIsSwipingOut(true);
    setTimeout(() => {
      setActiveCardIndex((prev) => (prev + 1) % totalCards);
      setIsSwipingOut(false);
      setSwipeDir(null);
      setTouchStartX(null);
      setTouchCurrentX(null);
    }, 240);
  };

  const prevCard = () => {
    if (isSwipingOut) return;
    setSwipeDir('right');
    setIsSwipingOut(true);
    setTimeout(() => {
      setActiveCardIndex((prev) => (prev - 1 + totalCards) % totalCards);
      setIsSwipingOut(false);
      setSwipeDir(null);
      setTouchStartX(null);
      setTouchCurrentX(null);
    }, 240);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      setTouchCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchCurrentX !== null) {
      const diff = touchCurrentX - touchStartX;
      if (diff < -45) {
        nextCard();
      } else if (diff > 45) {
        prevCard();
      }
    }
    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  // Mouse handlers for desktop/tablet drag
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    setTouchStartX(e.clientX);
    setTouchCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current && touchStartX !== null) {
      setTouchCurrentX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current && touchStartX !== null && touchCurrentX !== null) {
      const diff = touchCurrentX - touchStartX;
      if (diff < -50) {
        nextCard();
      } else if (diff > 50) {
        prevCard();
      }
    }
    isDraggingRef.current = false;
    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      handleMouseUp();
    }
  };

  const dragOffset = touchStartX !== null && touchCurrentX !== null ? touchCurrentX - touchStartX : 0;

  return (
    <section id="services" className="py-14 sm:py-18 lg:py-24 bg-white border-b border-border-hairline overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching Inspiration 2 (Euphoria) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left max-w-3xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-border-subtle shadow-xs mb-4">
              <div className="w-3 h-3 rounded-full border border-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
              <span className="text-xs font-medium text-neutral-800">
                Punctual &bull; Stress-Free &bull; At Your Convenience
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="font-heading font-normal text-2xl sm:text-3xl md:text-[38px] leading-[1.2] tracking-tight text-obsidian-pure">
              Waste Collection Built Around Your Schedule —{' '}
              <span className="font-serifItalic italic font-normal text-neutral-800">Without Stress</span>
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-600 mt-3 max-w-2xl leading-relaxed">
              Our core promise is simple: we pick up waste on time, every time, from your factory, office, hospital, hotel, or home. The icing on top? We recycle raw materials and process organics into bio-products so nothing goes to waste.
            </p>
          </div>

          {/* Mobile Stack Deck Controls (Only shown on mobile/tablet) */}
          <div className="flex lg:hidden items-center space-x-3 self-start md:self-end">
            <span className="text-xs text-neutral-400 font-medium">
              Card <strong className="text-obsidian-pure">{activeCardIndex + 1}</strong> of {totalCards}
            </span>
            <div className="flex items-center space-x-1.5 bg-neutral-50 p-1 rounded-full border border-border-subtle">
              <button
                onClick={prevCard}
                aria-label="Previous card in stack"
                className="w-8 h-8 rounded-full flex items-center justify-center text-obsidian-pure hover:bg-neutral-200/70 transition-all focus:outline-none"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextCard}
                aria-label="Next card in stack"
                className="w-8 h-8 rounded-full flex items-center justify-center text-obsidian-pure hover:bg-neutral-200/70 transition-all focus:outline-none"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* 1. DESKTOP VIEW: Full 3-Column Side-By-Side Grid (Screens >= 1024px)       */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 items-stretch pt-2">
          
          {/* Card 1 // Commercial, Industrial & Healthcare Pickups */}
          <div
            onClick={() => setDesktopActiveTab('commercial')}
            className={`rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              desktopActiveTab === 'commercial'
                ? 'bg-obsidian-pure text-white shadow-card-dark scale-[1.015] ring-1 ring-white/20'
                : 'bg-white text-obsidian-pure border border-border-subtle shadow-subtle hover:border-neutral-300'
            }`}
          >
            <div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 shadow-sm transition-colors ${
                desktopActiveTab === 'commercial' ? 'bg-white text-obsidian-pure' : 'bg-obsidian-pure text-white'
              }`}>
                <Building2 size={16} />
              </div>

              <h3 className={`font-heading font-normal text-lg sm:text-xl tracking-tight mb-2.5 ${
                desktopActiveTab === 'commercial' ? 'text-white' : 'text-obsidian-pure'
              }`}>
                Commercial &amp; Industrial Pickups
              </h3>

              <p className={`font-body text-xs sm:text-sm mb-4 leading-relaxed ${
                desktopActiveTab === 'commercial' ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                Guaranteed on-time waste pickup tailored to your operational hours for factories, corporate offices, hotels, and hospitals.
              </p>

              <ul className={`space-y-2 font-body text-xs sm:text-[13px] mb-6 ${
                desktopActiveTab === 'commercial' ? 'text-neutral-200' : 'text-neutral-700'
              }`}>
                <li className="flex items-start space-x-2">
                  <span className={`${desktopActiveTab === 'commercial' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Guaranteed on-time arrival &amp; rapid emergency dispatch within 120 mins</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${desktopActiveTab === 'commercial' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Heavy roll-offs &amp; clean skips placed directly at your site</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${desktopActiveTab === 'commercial' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Zero overflowing bins, odor issues, and certified EPA manifests</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            {desktopActiveTab === 'commercial' ? (
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white text-obsidian-pure text-xs font-semibold shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-dot"></div>
                  <span>3,800+ businesses</span>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate('request'); }}
                  className="group inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-full border border-white/40 text-xs font-medium text-white hover:bg-white hover:text-obsidian-pure transition-all duration-200"
                >
                  <span>Book business pickup</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-border-hairline">
                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate('request'); }}
                  className="group inline-flex items-center space-x-1 text-xs sm:text-sm font-medium text-obsidian-pure hover:underline"
                >
                  <span>Book business pickup</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Card 2 // Residential & Estate Collection */}
          <div
            onClick={() => setDesktopActiveTab('residential')}
            className={`rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              desktopActiveTab === 'residential'
                ? 'bg-obsidian-pure text-white shadow-card-dark scale-[1.015] ring-1 ring-white/20'
                : 'bg-white text-obsidian-pure border border-border-subtle shadow-subtle hover:border-neutral-300'
            }`}
          >
            <div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 shadow-sm transition-colors ${
                desktopActiveTab === 'residential' ? 'bg-white text-obsidian-pure' : 'bg-obsidian-pure text-white'
              }`}>
                <Home size={16} />
              </div>

              <h3 className={`font-heading font-normal text-lg sm:text-xl tracking-tight mb-2.5 ${
                desktopActiveTab === 'residential' ? 'text-white' : 'text-obsidian-pure'
              }`}>
                Residential &amp; Estate Pickups
              </h3>

              <p className={`font-body text-xs sm:text-sm mb-4 leading-relaxed ${
                desktopActiveTab === 'residential' ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                Stress-free doorstep collection for private residences, gated communities, and estates on fixed, predictable schedules.
              </p>

              <ul className={`space-y-2 font-body text-xs sm:text-[13px] mb-6 ${
                desktopActiveTab === 'residential' ? 'text-neutral-200' : 'text-neutral-700'
              }`}>
                <li className="flex items-start space-x-2">
                  <span className={`${desktopActiveTab === 'residential' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Dependable weekly &amp; bi-weekly collection schedules you can set your watch by</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${desktopActiveTab === 'residential' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Clean, durable, odor-free wheeled bins delivered straight to your gate</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${desktopActiveTab === 'residential' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Zero missed collections with polite neighborhood drivers &amp; WhatsApp alerts</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            {desktopActiveTab === 'residential' ? (
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white text-obsidian-pure text-xs font-semibold shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-dot"></div>
                  <span>120K+ households</span>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate('request'); }}
                  className="group inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-full border border-white/40 text-xs font-medium text-white hover:bg-white hover:text-obsidian-pure transition-all duration-200"
                >
                  <span>Schedule home pickup</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-border-hairline">
                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate('request'); }}
                  className="group inline-flex items-center space-x-1 text-xs sm:text-sm font-medium text-obsidian-pure hover:underline"
                >
                  <span>Schedule home pickup</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Card 3 // The Icing: Recycling & Bio-Products */}
          <div
            onClick={() => setDesktopActiveTab('recycling')}
            className={`rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              desktopActiveTab === 'recycling'
                ? 'bg-obsidian-pure text-white shadow-card-dark scale-[1.015] ring-1 ring-white/20'
                : 'bg-white text-obsidian-pure border border-border-subtle shadow-subtle hover:border-neutral-300'
            }`}
          >
            <div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 shadow-sm transition-colors ${
                desktopActiveTab === 'recycling' ? 'bg-white text-obsidian-pure' : 'bg-obsidian-pure text-white'
              }`}>
                <Recycle size={16} />
              </div>

              <h3 className={`font-heading font-normal text-lg sm:text-xl tracking-tight mb-2.5 ${
                desktopActiveTab === 'recycling' ? 'text-white' : 'text-obsidian-pure'
              }`}>
                The Icing: Recycling &amp; Bio-Products
              </h3>

              <p className={`font-body text-xs sm:text-sm mb-4 leading-relaxed ${
                desktopActiveTab === 'recycling' ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                What sets us apart: You get punctual, stress-free pickup, plus the assurance that your waste is recycled and turned into bio-products.
              </p>

              <ul className={`space-y-2 font-body text-xs sm:text-[13px] mb-6 ${
                desktopActiveTab === 'recycling' ? 'text-neutral-200' : 'text-neutral-700'
              }`}>
                <li className="flex items-start space-x-2">
                  <span className={`${desktopActiveTab === 'recycling' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Plastics &amp; polymers sorted into certified Grade-A manufacturing raw material</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${desktopActiveTab === 'recycling' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Organic food waste processed into chemical-free agricultural bio-fertilizers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${desktopActiveTab === 'recycling' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>88% verified landfill diversion with certified Scope 3 corporate ESG logs</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            {desktopActiveTab === 'recycling' ? (
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white text-obsidian-pure text-xs font-semibold shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-dot"></div>
                  <span>88% diverted</span>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate('solutions'); }}
                  className="group inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-full border border-white/40 text-xs font-medium text-white hover:bg-white hover:text-obsidian-pure transition-all duration-200"
                >
                  <span>See circular yield</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-border-hairline">
                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate('solutions'); }}
                  className="group inline-flex items-center space-x-1 text-xs sm:text-sm font-medium text-obsidian-pure hover:underline"
                >
                  <span>See circular yield</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

        </div>


        {/* ========================================================================= */}
        {/* 2. MOBILE / RESPONSIVE VIEW: Stacked Cards Deck (Screens < 1024px)        */}
        {/* ========================================================================= */}
        <div className="block lg:hidden pt-2">
          
          {/* Quick Pill Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              const isActive = activeCardIndex === idx;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center space-x-1.5 border ${
                    isActive
                      ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-sm scale-105'
                      : 'bg-white text-neutral-700 border-border-subtle hover:border-neutral-400 hover:bg-neutral-50'
                  }`}
                >
                  <Icon size={13} className={isActive ? 'text-[#80B86B]' : 'text-neutral-500'} />
                  <span>{card.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Swipeable Stack Deck */}
          <div 
            className="relative w-full max-w-lg mx-auto min-h-[460px] sm:min-h-[430px] pb-8 perspective-1000 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {cards.map((card, idx) => {
              const Icon = card.icon;
              const diff = (idx - activeCardIndex + totalCards) % totalCards;
              
              let zIndex = 30;
              let translateY = 0;
              let scale = 1;
              let opacity = 1;
              let pointerEvents: 'auto' | 'none' = 'auto';

              if (diff === 0) {
                zIndex = 30;
                translateY = 0;
                scale = 1;
                opacity = 1;
                pointerEvents = 'auto';
              } else if (diff === 1) {
                zIndex = 20;
                translateY = 16;
                scale = 0.95;
                opacity = 0.88;
                pointerEvents = 'none';
              } else {
                zIndex = 10;
                translateY = 32;
                scale = 0.90;
                opacity = 0.72;
                pointerEvents = 'none';
              }

              let currentTranslateX = 0;
              let rotationDeg = 0;
              if (diff === 0) {
                if (isSwipingOut) {
                  currentTranslateX = swipeDir === 'left' ? -360 : 360;
                  rotationDeg = swipeDir === 'left' ? -10 : 10;
                  opacity = 0;
                } else if (dragOffset !== 0) {
                  currentTranslateX = dragOffset;
                  rotationDeg = dragOffset * 0.05;
                }
              }

              let themeClasses = 'bg-obsidian-pure text-white border border-white/10 shadow-2xl';
              if (card.theme === 'light') {
                themeClasses = 'bg-white text-obsidian-pure border border-border-subtle shadow-xl';
              } else if (card.theme === 'green') {
                themeClasses = 'bg-gradient-to-br from-[#1E451B] via-[#2F6629] to-[#3B7730] text-white border border-white/20 shadow-2xl';
              }

              return (
                <div
                  key={card.id}
                  style={{
                    zIndex,
                    transform: `translate3d(${currentTranslateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotationDeg}deg)`,
                    opacity,
                    transition: isSwipingOut || dragOffset === 0 ? 'transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.28s ease' : 'none',
                    pointerEvents,
                  }}
                  className={`absolute inset-x-0 top-0 rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-grab active:cursor-grabbing select-none ${themeClasses}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
                        card.theme === 'light' ? 'bg-neutral-100 text-obsidian-pure' : 'bg-white/15 text-white'
                      }`}>
                        <Icon size={18} className={card.theme === 'green' ? 'text-white' : 'text-[#80B86B]'} />
                      </div>

                      <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 bg-white/10 px-2.5 py-1 rounded-full">
                        {card.tabLabel}
                      </span>
                    </div>

                    <h3 className="font-heading font-medium text-lg sm:text-xl tracking-tight mb-2">
                      {card.title}
                    </h3>

                    <p className={`font-body text-xs sm:text-sm leading-relaxed mb-4 ${
                      card.theme === 'light' ? 'text-neutral-600' : 'text-neutral-200'
                    }`}>
                      {card.subtitle}
                    </p>

                    <ul className="space-y-2 font-body text-xs mb-5">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2">
                          <span className="text-[#80B86B] text-[11px] mt-0.5">❖</span>
                          <span className={card.theme === 'light' ? 'text-neutral-700' : 'text-neutral-100'}>
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-4 border-t flex items-center justify-between gap-3 ${
                    card.theme === 'light' ? 'border-border-hairline' : 'border-white/15'
                  }`}>
                    <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-xs ${
                      card.theme === 'light' ? 'bg-neutral-100 text-obsidian-pure' : 'bg-white/15 text-white'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#80B86B]"></span>
                      <span>{card.stat}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(card.targetPage);
                      }}
                      className={`group inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                        card.theme === 'light'
                          ? 'bg-obsidian-pure text-white hover:bg-neutral-800'
                          : 'bg-white text-obsidian-pure hover:bg-neutral-100'
                      }`}
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Swipe Hint & Dots (Mobile only) */}
          <div className="flex flex-col items-center justify-center space-y-2 -mt-2">
            <div className="flex items-center space-x-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCardIndex(i)}
                  aria-label={`Show card ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCardIndex === i ? 'w-6 bg-[#80B86B]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center space-x-1 text-[11px] text-neutral-400 font-medium">
              <Sparkles size={11} className="text-[#80B86B]" />
              <span>Swipe left or right to swap cards</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useRef } from 'react';
import { ArrowRight, Recycle, Building2, Home, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PageType } from '../types';
import plasticRecyclingImg from '../assets/plastic-recycling-awareness.jpg';

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

  const cards = [
    {
      id: 'commercial',
      tabLabel: 'Commercial & Industrial',
      title: 'Commercial & Industrial Pickups',
      icon: Building2,
      stat: '3,800+ businesses',
      theme: 'dark' as const,
      image: plasticRecyclingImg,
      subtitle: 'Guaranteed on-time waste removal tailored to your operational hours for factories, offices, hotels, and hospitals.',
      bullets: [
        '120-min emergency dispatch & rapid roll-off skips',
        'Certified EPA Ghana manifests & zero overflowing bins',
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
      theme: 'light' as const,
      subtitle: 'Stress-free doorstep collection for private residences, gated communities, and estates on fixed, predictable schedules.',
      bullets: [
        'Automated WhatsApp arrival alerts with polite crews',
        'Clean, odor-free wheeled bins delivered straight to your gate',
      ],
      ctaText: 'Schedule home pickup',
      targetPage: 'request' as PageType,
    },
    {
      id: 'recycling',
      tabLabel: 'The Icing: Recycling',
      title: 'Recycling & Bio-Products',
      icon: Recycle,
      stat: '88% diverted',
      theme: 'green' as const,
      subtitle: 'The circular advantage: your waste is sorted into certified Grade-A recycled plastics and chemical-free bio-fertilizers.',
      bullets: [
        'Grade-A polymers & organic bio-compost',
        '88% verified landfill diversion with Scope 3 ESG logs',
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
    <section id="services" className="py-10 sm:py-14 lg:py-16 bg-white border-b border-border-hairline overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block: Compact & Simple */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="text-left max-w-2xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-neutral-50 border border-border-subtle shadow-2xs mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-dot"></span>
              <span className="text-[11px] sm:text-xs font-medium text-neutral-700">
                Punctual &bull; Stress-Free &bull; At Your Convenience
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="font-heading font-normal text-2xl sm:text-3xl md:text-[32px] leading-snug tracking-tight text-obsidian-pure">
              Waste Collection Built Around Your Schedule —{' '}
              <span className="font-serifItalic italic font-normal text-neutral-800">Without Stress</span>
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
              On-time, dependable waste collection tailored to your schedule across Greater Accra—with responsible recycling and bio-processing built right in.
            </p>
          </div>

          {/* Mobile Stack Deck Controls (Only shown on mobile/tablet) */}
          <div className="flex lg:hidden items-center space-x-2.5 self-start md:self-end">
            <span className="text-xs text-neutral-400 font-medium">
              <strong className="text-obsidian-pure">{activeCardIndex + 1}</strong> of {totalCards}
            </span>
            <div className="flex items-center space-x-1 bg-neutral-50 p-0.5 rounded-full border border-border-subtle">
              <button
                onClick={prevCard}
                aria-label="Previous card in stack"
                className="w-7 h-7 rounded-full flex items-center justify-center text-obsidian-pure hover:bg-neutral-200/70 transition-all focus:outline-none"
              >
                <ChevronLeft size={15} />
              </button>
              <button
                onClick={nextCard}
                aria-label="Next card in stack"
                className="w-7 h-7 rounded-full flex items-center justify-center text-obsidian-pure hover:bg-neutral-200/70 transition-all focus:outline-none"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* 1. DESKTOP VIEW: Full 3-Column Side-By-Side Grid (Screens >= 1024px)       */}
        {/* Distinct Brand Colors: One Black, One White, One Green                     */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 items-stretch">
          {cards.map((card) => {
            const Icon = card.icon;
            
            let cardBgClasses = 'bg-white text-obsidian-pure border border-border-subtle shadow-subtle hover:border-neutral-300';
            if (card.theme === 'dark') {
              cardBgClasses = 'bg-obsidian-pure text-white border border-black/10 shadow-card-dark';
            } else if (card.theme === 'green') {
              cardBgClasses = 'bg-gradient-to-br from-[#1E451B] via-[#285923] to-[#34742E] text-white border border-white/15 shadow-card-dark';
            }

            return (
              <div
                key={card.id}
                className={`group rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between ${cardBgClasses}`}
              >
                <div>
                  {card.image ? (
                    /* Image header for card with uploaded photo */
                    <div className="w-full h-36 rounded-xl overflow-hidden mb-4 relative shadow-sm border border-white/10">
                      <img
                        src={card.image}
                        alt="Plastic Recycling Awareness Design"
                        className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                      <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-lg bg-obsidian-pure/80 backdrop-blur-md flex items-center justify-center text-[#80B86B] border border-white/15 shadow-xs">
                        <Icon size={14} />
                      </div>
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-obsidian-pure/80 backdrop-blur-md text-[10px] font-semibold text-white border border-white/15 shadow-xs">
                        {card.stat}
                      </span>
                    </div>
                  ) : (
                    /* Top: Icon + Stat Badge in one clean row */
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                        card.theme === 'light'
                          ? 'bg-neutral-100 border border-neutral-200/60 text-obsidian-pure group-hover:bg-neutral-200'
                          : 'bg-white/15 border border-white/15 text-white'
                      }`}>
                        <Icon size={16} className={card.theme === 'green' ? 'text-white' : (card.theme === 'dark' ? 'text-[#80B86B]' : 'text-obsidian-pure')} />
                      </div>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        card.theme === 'light'
                          ? 'text-neutral-600 bg-neutral-100'
                          : 'text-white bg-white/15 border border-white/10'
                      }`}>
                        {card.stat}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className={`font-heading font-medium text-lg tracking-tight mb-2 ${
                    card.theme === 'light' ? 'text-obsidian-pure' : 'text-white'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`font-body text-xs leading-relaxed mb-4 ${
                    card.theme === 'light'
                      ? 'text-neutral-600'
                      : (card.theme === 'green' ? 'text-emerald-50/90' : 'text-neutral-300')
                  }`}>
                    {card.subtitle}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-1.5 font-body text-xs mb-5">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <span className={`${card.theme === 'green' ? 'text-white' : 'text-[#80B86B]'} text-[10px] mt-0.5`}>❖</span>
                        <span className={
                          card.theme === 'light'
                            ? 'text-neutral-700'
                            : (card.theme === 'green' ? 'text-emerald-50/90' : 'text-neutral-200')
                        }>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className={`pt-3.5 border-t flex items-center justify-between ${
                  card.theme === 'light' ? 'border-border-hairline' : 'border-white/15'
                }`}>
                  <button
                    onClick={() => onNavigate(card.targetPage)}
                    className={`group/btn inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shadow-xs ${
                      card.theme === 'light'
                        ? 'bg-obsidian-pure text-white hover:bg-neutral-800'
                        : 'bg-white text-obsidian-pure hover:bg-neutral-100'
                    }`}
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    card.theme === 'green' ? 'bg-white' : 'bg-emerald-dot'
                  }`}></span>
                </div>
              </div>
            );
          })}
        </div>


        {/* ========================================================================= */}
        {/* 2. MOBILE / RESPONSIVE VIEW: Stacked Cards Deck (Screens < 1024px)        */}
        {/* ========================================================================= */}
        <div className="block lg:hidden">
          
          {/* Quick Pill Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-5">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              const isActive = activeCardIndex === idx;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 flex items-center space-x-1.5 border ${
                    isActive
                      ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-2xs'
                      : 'bg-white text-neutral-700 border-border-subtle hover:bg-neutral-50'
                  }`}
                >
                  <Icon size={12} className={isActive ? 'text-[#80B86B]' : 'text-neutral-500'} />
                  <span>{card.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Swipeable Stack Deck */}
          <div 
            className="relative w-full max-w-sm mx-auto min-h-[420px] sm:min-h-[400px] pb-4 perspective-1000 touch-pan-y"
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
                translateY = 12;
                scale = 0.96;
                opacity = 0.9;
                pointerEvents = 'none';
              } else {
                zIndex = 10;
                translateY = 24;
                scale = 0.92;
                opacity = 0.75;
                pointerEvents = 'none';
              }

              let currentTranslateX = 0;
              let rotationDeg = 0;
              if (diff === 0) {
                if (isSwipingOut) {
                  currentTranslateX = swipeDir === 'left' ? -340 : 340;
                  rotationDeg = swipeDir === 'left' ? -8 : 8;
                  opacity = 0;
                } else if (dragOffset !== 0) {
                  currentTranslateX = dragOffset;
                  rotationDeg = dragOffset * 0.04;
                }
              }

              let themeClasses = 'bg-obsidian-pure text-white border border-white/10 shadow-xl';
              if (card.theme === 'light') {
                themeClasses = 'bg-white text-obsidian-pure border border-border-subtle shadow-lg';
              } else if (card.theme === 'green') {
                themeClasses = 'bg-gradient-to-br from-[#1E451B] via-[#2F6629] to-[#3B7730] text-white border border-white/20 shadow-xl';
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
                  className={`absolute inset-x-0 top-0 rounded-2xl p-5 flex flex-col justify-between cursor-grab active:cursor-grabbing select-none ${themeClasses}`}
                >
                  <div>
                    {card.image ? (
                      /* Top row with image header for card with image */
                      <div className="w-full h-32 rounded-xl overflow-hidden mb-3 relative shadow-xs border border-white/15">
                        <img
                          src={card.image}
                          alt="Plastic Recycling Awareness Design"
                          className="w-full h-full object-cover object-[center_35%]"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                        <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-obsidian-pure/80 backdrop-blur-md flex items-center justify-center text-[#80B86B] border border-white/15">
                          <Icon size={13} />
                        </div>
                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-obsidian-pure/80 backdrop-blur-md text-[9px] font-semibold text-white border border-white/15">
                          {card.stat}
                        </span>
                      </div>
                    ) : (
                      /* Top row for cards without image */
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-xs ${
                          card.theme === 'light' ? 'bg-neutral-100 text-obsidian-pure' : 'bg-white/15 text-white'
                        }`}>
                          <Icon size={16} className={card.theme === 'green' ? 'text-white' : 'text-[#80B86B]'} />
                        </div>

                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          card.theme === 'light' ? 'bg-neutral-100 text-neutral-600' : 'bg-white/10 text-neutral-300'
                        }`}>
                          {card.stat}
                        </span>
                      </div>
                    )}

                    <h3 className="font-heading font-medium text-base sm:text-lg tracking-tight mb-1.5">
                      {card.title}
                    </h3>

                    <p className={`font-body text-xs leading-relaxed mb-3 ${
                      card.theme === 'light' ? 'text-neutral-600' : 'text-neutral-200'
                    }`}>
                      {card.subtitle}
                    </p>

                    <ul className="space-y-1.5 font-body text-xs mb-4">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2">
                          <span className="text-[#80B86B] text-[10px] mt-0.5">❖</span>
                          <span className={card.theme === 'light' ? 'text-neutral-700' : 'text-neutral-100'}>
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Actions */}
                  <div className={`pt-3 border-t flex items-center justify-between gap-3 ${
                    card.theme === 'light' ? 'border-border-hairline' : 'border-white/15'
                  }`}>
                    <span className="text-[11px] text-neutral-400 font-medium">TERRAFORM Loop</span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(card.targetPage);
                      }}
                      className={`group inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                        card.theme === 'light'
                          ? 'bg-obsidian-pure text-white hover:bg-neutral-800'
                          : 'bg-white text-obsidian-pure hover:bg-neutral-100'
                      }`}
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Swipe Hint & Dots (Mobile only) */}
          <div className="flex flex-col items-center justify-center space-y-1.5 -mt-1">
            <div className="flex items-center space-x-1.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCardIndex(i)}
                  aria-label={`Show card ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCardIndex === i ? 'w-5 bg-[#80B86B]' : 'w-1.5 bg-neutral-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center space-x-1 text-[10px] text-neutral-400 font-medium">
              <Sparkles size={10} className="text-[#80B86B]" />
              <span>Swipe left or right to swap cards</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useRef } from 'react';
import { ArrowRight, Recycle, Building2, Home, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PageType } from '../types';

interface ServicesOverviewProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
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
      statLabel: 'Businesses Managed',
      badgeColor: 'bg-white text-obsidian-pure',
      theme: 'dark', // obsidian dark theme
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
      theme: 'light', // clean white theme
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
      theme: 'green', // rich green gradient theme
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

  // Mouse handlers for desktop click-drag swipe
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border-hairline overflow-hidden scroll-mt-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching Inspiration (Euphoria) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="text-left max-w-2xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-neutral-50 border border-border-subtle shadow-xs mb-3">
              <div className="w-2.5 h-2.5 rounded-full border border-black flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-black"></div>
              </div>
              <span className="text-xs font-medium text-neutral-800">
                Punctual &bull; Stress-Free &bull; At Your Convenience
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="font-heading font-normal text-2xl sm:text-3xl md:text-[36px] leading-[1.2] tracking-tight text-obsidian-pure">
              Waste Collection Built Around Your Schedule —{' '}
              <span className="font-serifItalic italic font-normal text-neutral-800">Without Stress</span>
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-600 mt-2.5 max-w-xl leading-relaxed">
              Our core promise is simple: we pick up waste on time, every time, from your factory, office, hospital, hotel, or home. The icing on top? We recycle raw materials and process organics into bio-products.
            </p>
          </div>

          {/* Interactive Stack Deck Controls */}
          <div className="flex items-center space-x-3 self-start md:self-end">
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

        {/* Category Pill Switcher to quickly jump to any card in the stack */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isActive = activeCardIndex === idx;
            return (
              <button
                key={card.id}
                onClick={() => {
                  if (activeCardIndex !== idx) {
                    setActiveCardIndex(idx);
                  }
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center space-x-1.5 border ${
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

        {/* 
          STACKED CARD DECK CONTAINER:
          Cards sit directly on top of each other and swap smoothly when swiped or dragged
        */}
        <div 
          className="relative w-full max-w-2xl mx-auto min-h-[460px] sm:min-h-[440px] md:min-h-[420px] pb-10 perspective-1000 touch-pan-y"
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
            // Calculate distance in stack from active card: 0 = front, 1 = behind, 2 = furthest behind
            const diff = (idx - activeCardIndex + totalCards) % totalCards;
            
            // Visual stack properties based on position
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

            // Apply interactive drag or swipe-out translation to the top card
            let currentTranslateX = 0;
            let rotationDeg = 0;
            if (diff === 0) {
              if (isSwipingOut) {
                currentTranslateX = swipeDir === 'left' ? -380 : 380;
                rotationDeg = swipeDir === 'left' ? -12 : 12;
                opacity = 0;
              } else if (dragOffset !== 0) {
                currentTranslateX = dragOffset;
                rotationDeg = dragOffset * 0.05;
              }
            }

            // Visual Card Theme Styling
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
                className={`absolute inset-x-0 top-0 rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-grab active:cursor-grabbing ${themeClasses}`}
              >
                <div>
                  {/* Top Header of Card: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
                      card.theme === 'light' ? 'bg-neutral-100 text-obsidian-pure' : 'bg-white/15 text-white'
                    }`}>
                      <Icon size={18} className={card.theme === 'green' ? 'text-white' : 'text-[#80B86B]'} />
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 bg-white/10 px-2.5 py-1 rounded-full">
                        {card.tabLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading font-medium text-xl sm:text-2xl tracking-tight mb-2">
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`font-body text-xs sm:text-sm leading-relaxed mb-5 ${
                    card.theme === 'light' ? 'text-neutral-600' : 'text-neutral-200'
                  }`}>
                    {card.subtitle}
                  </p>

                  {/* Bullet list with diamond markers */}
                  <ul className="space-y-2.5 font-body text-xs sm:text-[13px] mb-6">
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

                {/* Bottom Actions Row */}
                <div className={`pt-4 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
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
                    className={`group inline-flex items-center space-x-1.5 px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
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

        {/* Swipe Hint & Dot Indicators below stacked deck */}
        <div className="flex flex-col items-center justify-center space-y-2 -mt-4">
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
    </section>
  );
};

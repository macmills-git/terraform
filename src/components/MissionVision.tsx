import React, { useRef, useState } from 'react';
import { 
  Truck, 
  Recycle, 
  Leaf, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PageType } from '../types';
import geminiMissionBg from '../assets/gemini-mission-bg.jpg';

interface MissionVisionProps {
  onNavigate?: (page: PageType, sectionId?: string) => void;
}

export const MissionVision: React.FC<MissionVisionProps> = ({ onNavigate }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const cards = [
    {
      id: 'collection',
      title: 'Guaranteed On-Time Pickups',
      description: 'Daily punctual fleet dispatch servicing factories, corporate offices, hotels, hospitals, and homes across Greater Accra.',
      icon: Truck,
    },
    {
      id: 'convenience',
      title: 'Zero-Hassle Convenience',
      description: 'Flexible schedules, tailored container placement, and direct route dispatch so waste management is completely stress-free.',
      icon: ShieldCheck,
    },
    {
      id: 'recycling',
      title: 'Virgin-Grade Material Recycling',
      description: 'Transforming collected polymers, plastics, and metals into certified high-purity feedstock for local manufacturing.',
      icon: Recycle,
    },
    {
      id: 'bio-products',
      title: 'Organic Bio-Products',
      description: 'Converting collected food and organic residuals into nutrient-dense bio-fertilizers and compost to regenerate regional soils.',
      icon: Leaf,
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.8));
      setActiveIdx(Math.min(cards.length - 1, Math.max(0, index)));
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIdx(index);
    }
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(0, activeIdx - 1));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(cards.length - 1, activeIdx + 1));
  };

  return (
    <section id="vision-mission" className="relative w-full bg-obsidian-pure text-white overflow-hidden mt-8 sm:mt-12 lg:mt-16 mb-7 sm:mb-10 lg:mb-12 py-14 sm:py-20 lg:py-24 border-y border-border-hairline scroll-mt-20">
      
      {/* Full-Bleed Gemini Generated Background Photograph Spanning 100% Viewport Width */}
      <div className="absolute inset-0 z-0">
        <img
          src={geminiMissionBg}
          alt="TERRAFORM Circular Systems & Regenerative Vision - Gemini Generated Imagery"
          className="w-full h-full object-cover object-center opacity-65 scale-[1.01]"
        />
        {/* Dark moody gradient overlay for crystal clear text legibility and cinematic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/50 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Row: /Label, Headline, Narrative & Right Pill Button */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 sm:mb-12">
          
          {/* Left Column: /Classes-style label, Display Headline & Subtitle */}
          <div className="max-w-2xl space-y-2.5 sm:space-y-3">
            {/* Reference Image "/Classes" style label */}
            <div className="text-xs sm:text-[13px] font-medium text-neutral-300 tracking-wider">
              /Vision &amp; Mission
            </div>

            {/* Display Headline in Easy Grotesk Standard 400 with descending line opacity */}
            <h2 className="font-heading font-normal text-2xl sm:text-3xl lg:text-[38px] leading-[1.18] tracking-tight">
              <span className="block text-white opacity-100">Punctual Pickups.</span>
              <span className="block text-white opacity-70">Zero Stress.</span>
              <span className="block text-white opacity-45">Recycling &amp; Circular Impact.</span>
            </h2>

            {/* Continental Narrative Body */}
            <p className="font-body text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal pt-1 max-w-xl">
              Our core work is simple: reliable, on-time waste collection for businesses and households at their convenience. And because we never settle for dumping in landfills, we recycle raw materials and process organics into bio-products.
            </p>
          </div>

          {/* Right Side: CTA Button + Carousel Arrow Navigation on Mobile */}
          <div className="shrink-0 flex items-center justify-between sm:justify-start gap-3 self-start lg:self-center">
            <button
              onClick={() => onNavigate && onNavigate('solutions')}
              className="px-5 py-2.5 rounded-full bg-white text-obsidian-pure hover:bg-neutral-100 text-xs sm:text-[13px] font-medium transition-all duration-200 shadow-sm"
            >
              Explore Operations
            </button>

            {/* Mobile / Tablet Horizontal Carousel Nav Controls */}
            <div className="flex lg:hidden items-center space-x-1.5 bg-white/10 backdrop-blur-sm p-1 rounded-full border border-white/15">
              <button
                onClick={handlePrev}
                disabled={activeIdx === 0}
                aria-label="Previous card"
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  activeIdx === 0 ? 'text-white/30 cursor-not-allowed' : 'text-white hover:bg-white/20'
                }`}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIdx === cards.length - 1}
                aria-label="Next card"
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  activeIdx === cards.length - 1 ? 'text-white/30 cursor-not-allowed' : 'text-white hover:bg-white/20'
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* 
          Horizontally Stacked & Swipeable Cards Container:
          - On mobile & tablet: horizontal swipe rail (overflow-x-auto, snap-x snap-mandatory, no vertical clutter)
          - On desktop: elegant 4-column layout
        */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="w-[82vw] sm:w-[52vw] md:w-[44vw] lg:w-auto shrink-0 snap-center bg-white rounded-2xl p-5 sm:p-6 text-obsidian-pure shadow-xl border border-black/5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top-Left: Small Tinted Rounded Icon Badge */}
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200/50 flex items-center justify-center text-obsidian-pure mb-4 shadow-2xs">
                    <Icon size={16} className="text-emerald-status" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading font-medium text-sm sm:text-base text-obsidian-pure tracking-tight leading-snug mb-2">
                    {card.title}
                  </h3>

                  {/* Body Copy */}
                  <p className="font-body text-xs text-neutral-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Hairline Status Accent */}
                <div className="pt-3 mt-4 border-t border-border-hairline flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Circular Pillar</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-dot"></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Pagination Dots Indicator */}
        <div className="flex lg:hidden items-center justify-center space-x-1.5 pt-3">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === i ? 'w-6 bg-[#80B86B]' : 'w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

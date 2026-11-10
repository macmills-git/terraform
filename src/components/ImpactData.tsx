import React, { useRef, useState } from 'react';
import { ArrowUpRight, ShieldCheck, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface ImpactDataProps {
  onNavigate?: (page: PageType, sectionId?: string) => void;
}

export const ImpactData: React.FC<ImpactDataProps> = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const metrics = [
    {
      stat: '88.4%',
      label: 'Diversion Rate',
      description: 'Percentage of collected municipal waste diverted from uncontrolled coastal landfills into high-grade circular cycles.',
      tag: 'EPA Verified',
    },
    {
      stat: '680K+',
      unit: 'Tons CO₂e',
      label: 'Emissions Avoided',
      description: 'Carbon abatement verified under international Gold Standard GHG accounting protocols across operational hubs.',
      tag: 'Gold Standard',
    },
    {
      stat: '2,450+',
      label: 'Green Jobs Formalized',
      description: 'Digital wallet daily wage payouts, medical health coverage, and ergonomic safety gear provided to collection workers.',
      tag: 'Fair Wage Certified',
    },
    {
      stat: '$42.5M',
      label: 'Local Value Retained',
      description: 'Economic value recirculated directly into local manufacturing facilities and post-consumer circular packaging.',
      tag: 'Domestic Circulation',
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.8));
      setActiveIdx(Math.min(metrics.length - 1, Math.max(0, index)));
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
    scrollToIndex(Math.min(metrics.length - 1, activeIdx + 1));
  };

  return (
    <section id="impact" className="mt-6 sm:mt-10 lg:mt-14 mb-6 sm:mb-9 lg:mb-12 py-12 sm:py-16 lg:py-20 bg-white border-b border-border-hairline scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean, compact with mobile swipe arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-border-subtle text-xs font-medium text-neutral-800 mb-3">
              <Activity size={12} className="text-emerald-status" />
              <span>Telemetry &amp; Live Verification</span>
            </div>

            <h2 className="font-heading font-normal text-2xl sm:text-3xl md:text-[34px] text-obsidian-pure tracking-tight mb-2.5">
              Measured Impact Across Greater Accra.
            </h2>

            <p className="font-body text-xs sm:text-sm text-neutral-600 font-normal">
              Verifiable environmental and economic metrics tracked daily via IoT telemetry and third-party circular audit logs.
            </p>
          </div>

          {/* Mobile / Tablet Horizontal Swipe Navigation Controls */}
          <div className="flex lg:hidden items-center space-x-1.5 self-start sm:self-end bg-neutral-50 p-1 rounded-full border border-border-subtle">
            <button
              onClick={handlePrev}
              disabled={activeIdx === 0}
              aria-label="Previous metric"
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                activeIdx === 0 ? 'text-neutral-300 cursor-not-allowed' : 'text-neutral-700 hover:bg-neutral-200/60'
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIdx === metrics.length - 1}
              aria-label="Next metric"
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                activeIdx === metrics.length - 1 ? 'text-neutral-300 cursor-not-allowed' : 'text-neutral-700 hover:bg-neutral-200/60'
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 
          Horizontally Stacked & Swipeable Telemetry Cards
          - On mobile/tablet: horizontal snap swipe container (minimal vertical height)
          - On desktop: standard balanced 4-column grid
        */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="w-[82vw] sm:w-[50vw] md:w-[44vw] lg:w-full shrink-0 lg:shrink snap-center lg:snap-align-none group p-5 sm:p-6 rounded-2xl bg-white border border-border-subtle hover:border-obsidian-pure hover:shadow-subtle transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <ShieldCheck size={14} className="text-emerald-status opacity-80" />
                </div>

                <div className="font-heading font-normal text-3xl sm:text-4xl text-obsidian-pure tracking-tight mb-1.5">
                  {item.stat}
                  {item.unit && (
                    <span className="block text-[11px] font-medium tracking-normal text-neutral-500 uppercase mt-0.5">
                      {item.unit}
                    </span>
                  )}
                </div>

                <div className="font-heading font-medium text-sm sm:text-[15px] text-obsidian-pure mb-2">
                  {item.label}
                </div>

                <p className="font-body text-xs text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border-hairline flex items-center justify-between text-xs text-neutral-400 group-hover:text-obsidian-pure transition-colors">
                <span>Verified Telemetry</span>
                <ArrowUpRight size={13} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Pagination Dots Indicator */}
        <div className="flex lg:hidden items-center justify-center space-x-1.5 pt-3">
          {metrics.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to metric ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === i ? 'w-6 bg-[#80B86B]' : 'w-1.5 bg-neutral-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

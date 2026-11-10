import React, { useState } from 'react';
import { ArrowRight, Recycle, Building2, Home } from 'lucide-react';
import { PageType } from '../types';

interface ServicesOverviewProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial' | 'municipal'>('commercial');

  return (
    <section id="services" className="py-14 sm:py-18 lg:py-24 bg-white border-b border-border-hairline overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching Inspiration 2 (Euphoria) - Simpler & Tighter */}
        <div className="text-left max-w-3xl mb-10">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-border-subtle shadow-xs mb-4">
            <div className="w-3 h-3 rounded-full border border-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>
            <span className="text-xs font-medium text-neutral-800">
              Punctual &bull; Stress-Free &bull; At Your Convenience
            </span>
          </div>

          {/* Display Headline with contrasting italic serif for "Structured" */}
          <h2 className="font-heading font-normal text-2xl sm:text-3xl md:text-[38px] leading-[1.2] tracking-tight text-obsidian-pure">
            Waste Collection Built Around Your Schedule —{' '}
            <span className="font-serifItalic italic font-normal text-neutral-800">Without Stress</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-neutral-600 mt-3 max-w-2xl leading-relaxed">
            Our core promise is simple: we pick up waste on time, every time, from your factory, office, hospital, hotel, or home. The icing on top? We recycle raw materials and process organics into bio-products so nothing goes to waste.
          </p>
        </div>

        {/* 3-Column Service Card Carousel / Grid (Tighter & Simpler) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch pt-2">
          
          {/* Card 1 // Commercial, Industrial & Healthcare Pickups */}
          <div
            onClick={() => setActiveTab('commercial')}
            className={`rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              activeTab === 'commercial'
                ? 'bg-obsidian-pure text-white shadow-card-dark scale-[1.015] ring-1 ring-white/20'
                : 'bg-white text-obsidian-pure border border-border-subtle shadow-subtle hover:border-neutral-300'
            }`}
          >
            <div>
              {/* Circular badge */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 shadow-sm transition-colors ${
                activeTab === 'commercial' ? 'bg-white text-obsidian-pure' : 'bg-obsidian-pure text-white'
              }`}>
                <Building2 size={16} />
              </div>

              {/* Card Title */}
              <h3 className={`font-heading font-normal text-lg sm:text-xl tracking-tight mb-2.5 ${
                activeTab === 'commercial' ? 'text-white' : 'text-obsidian-pure'
              }`}>
                Commercial &amp; Industrial Pickups
              </h3>

              <p className={`font-body text-xs sm:text-sm mb-4 leading-relaxed ${
                activeTab === 'commercial' ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                Guaranteed on-time waste pickup tailored to your operational hours for factories, corporate offices, hotels, and hospitals.
              </p>

              <ul className={`space-y-2 font-body text-xs sm:text-[13px] mb-6 ${
                activeTab === 'commercial' ? 'text-neutral-200' : 'text-neutral-700'
              }`}>
                <li className="flex items-start space-x-2">
                  <span className={`${activeTab === 'commercial' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Guaranteed on-time arrival &amp; rapid emergency dispatch</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${activeTab === 'commercial' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Heavy roll-offs &amp; clean skips placed at your site</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${activeTab === 'commercial' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Zero overflowing bins, odor issues, or downtime</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            {activeTab === 'commercial' ? (
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
            onClick={() => setActiveTab('residential')}
            className={`rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              activeTab === 'residential'
                ? 'bg-obsidian-pure text-white shadow-card-dark scale-[1.015] ring-1 ring-white/20'
                : 'bg-white text-obsidian-pure border border-border-subtle shadow-subtle hover:border-neutral-300'
            }`}
          >
            <div>
              {/* Circular badge */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 shadow-sm transition-colors ${
                activeTab === 'residential' ? 'bg-white text-obsidian-pure' : 'bg-obsidian-pure text-white'
              }`}>
                <Home size={16} />
              </div>

              {/* Card Title */}
              <h3 className={`font-heading font-normal text-lg sm:text-xl tracking-tight mb-2.5 ${
                activeTab === 'residential' ? 'text-white' : 'text-obsidian-pure'
              }`}>
                Residential &amp; Estate Pickups
              </h3>

              <p className={`font-body text-xs sm:text-sm mb-4 leading-relaxed ${
                activeTab === 'residential' ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                Stress-free doorstep collection for private residences, gated communities, and estates on fixed, predictable schedules.
              </p>

              {/* Bullet list with diamond markers (❖) */}
              <ul className={`space-y-2 font-body text-xs sm:text-[13px] mb-6 ${
                activeTab === 'residential' ? 'text-neutral-200' : 'text-neutral-700'
              }`}>
                <li className="flex items-start space-x-2">
                  <span className={`${activeTab === 'residential' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Dependable weekly &amp; bi-weekly collection schedules</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${activeTab === 'residential' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Clean, durable, odor-free bins delivered to your gate</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${activeTab === 'residential' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Zero missed collections with polite neighborhood drivers</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            {activeTab === 'residential' ? (
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
            onClick={() => setActiveTab('municipal')}
            className={`rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              activeTab === 'municipal'
                ? 'bg-obsidian-pure text-white shadow-card-dark scale-[1.015] ring-1 ring-white/20'
                : 'bg-white text-obsidian-pure border border-border-subtle shadow-subtle hover:border-neutral-300'
            }`}
          >
            <div>
              {/* Circular badge */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 shadow-sm transition-colors ${
                activeTab === 'municipal' ? 'bg-white text-obsidian-pure' : 'bg-obsidian-pure text-white'
              }`}>
                <Recycle size={16} />
              </div>

              {/* Card Title */}
              <h3 className={`font-heading font-normal text-lg sm:text-xl tracking-tight mb-2.5 ${
                activeTab === 'municipal' ? 'text-white' : 'text-obsidian-pure'
              }`}>
                The Icing: Recycling &amp; Bio-Products
              </h3>

              <p className={`font-body text-xs sm:text-sm mb-4 leading-relaxed ${
                activeTab === 'municipal' ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                What sets us apart: You get punctual, stress-free pickup, plus the assurance that your waste is recycled and turned into bio-products.
              </p>

              {/* Bullet list with diamond markers (❖) */}
              <ul className={`space-y-2 font-body text-xs sm:text-[13px] mb-6 ${
                activeTab === 'municipal' ? 'text-neutral-200' : 'text-neutral-700'
              }`}>
                <li className="flex items-start space-x-2">
                  <span className={`${activeTab === 'municipal' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Plastics &amp; polymers recycled into manufacturing feedstock</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${activeTab === 'municipal' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>Organic waste processed into natural bio-fertilizers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className={`${activeTab === 'municipal' ? 'text-white' : 'text-obsidian-pure'} text-[10px] mt-0.5`}>❖</span>
                  <span>88% verified landfill diversion with certified ESG logs</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            {activeTab === 'municipal' ? (
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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

      </div>
    </section>
  );
};

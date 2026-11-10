import React from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Radio } from 'lucide-react';
import { PageType } from '../types';
import stickersImg from '../assets/download-19-stickers.jpg';
import recoveryActionImg from '../assets/Gemini_Generated_Image_z1xkndz1xkndz1xk.jpg';

interface WhyChooseUsProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  return (
    <section id="why-us" className="mt-7 sm:mt-11 lg:mt-14 mb-10 sm:mb-14 lg:mb-20 py-14 sm:py-18 lg:py-24 bg-white border-t border-border-hairline scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row (Inspiration 3 - Marwa) - Tight & Simple */}
        <div className="mb-8">
          {/* Top-Left Category Badge: Small white rectangular pill */}
          <div className="inline-block px-3 py-1 rounded-md bg-white border border-border-subtle text-xs font-medium text-neutral-800 mb-4">
            Why Choose Us
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
            {/* Display Headline (Left) */}
            <div className="lg:col-span-7">
              <h2 className="font-heading font-normal text-2xl sm:text-3xl md:text-[36px] leading-[1.18] tracking-tight text-obsidian-pure">
                Why leaders choose TERRAFORM
              </h2>
            </div>

            {/* Sub-Headline (Right) */}
            <div className="lg:col-span-5 lg:text-right">
              <p className="font-body text-xs sm:text-sm text-neutral-600 max-w-md lg:ml-auto leading-relaxed">
                Waste collection on time. At your convenience. With responsible recycling and bio-product conversion as the icing on top.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Card Bento Grid Layout (Clean White Cards, 16px/20px rounded corners) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          
          {/* Card 1 (Left Column - 5 cols): Guaranteed On-Time Pickups */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-border-subtle shadow-subtle flex flex-col overflow-hidden relative group hover:border-neutral-300 transition-all duration-200">
            {/* Top Half: Visual stickers image from download (19) expanded to fill space */}
            <div className="w-full flex-1 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px] relative rounded-xl overflow-hidden mb-4 bg-[#F8F9FA] border border-border-subtle/80 flex items-center justify-center">
              <img
                src={stickersImg}
                alt="Local circular ecology stickers and sustainability badges"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Status beacon overlay */}
              <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/5 flex items-center space-x-1.5 text-[10px] sm:text-[11px] font-medium text-neutral-800 shadow-xs">
                <Radio size={11} className="text-emerald-status animate-pulse" />
                <span>99.4% On-Time Reliability</span>
              </div>
            </div>

            {/* Bottom Half: Title & Narrative */}
            <div className="mt-auto">
              <h3 className="font-heading font-normal text-lg sm:text-xl text-obsidian-pure tracking-tight mb-1.5">
                Guaranteed On-Time Pickups
              </h3>
              <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Never deal with delayed pickups or overflowing containers. Our dedicated fleet arrives on schedule across Greater Accra, built entirely around your business hours or household routine.
              </p>
            </div>
          </div>

          {/* Center Column (4 cols): Stacked Cards 2 and 3 */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            
            {/* Card 2 (Center-Top): Zero-Stress Convenience */}
            <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-subtle flex-1 flex flex-col justify-between hover:border-neutral-300 transition-all duration-200">
              <div>
                <div className="w-9 h-9 rounded-full bg-white border border-border-subtle flex items-center justify-center text-obsidian-pure mb-4 shadow-xs">
                  <Shield size={16} />
                </div>
                <h3 className="font-heading font-normal text-base sm:text-lg text-obsidian-pure tracking-tight mb-2">
                  Zero-Stress Convenience
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Effortless scheduling, rapid container swaps, and dedicated customer support. Whether you need a 240L wheelie bin or a 30-yard industrial compactor, we make waste management invisible and hassle-free.
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-border-subtle/60 flex items-center space-x-1.5 text-xs font-medium text-emerald-status">
                <CheckCircle2 size={13} />
                <span>Punctual Dispatch Guarantee</span>
              </div>
            </div>

            {/* Card 3 (Center-Bottom): The Icing: Recycling & Bio-Products */}
            <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-subtle flex-1 flex flex-col justify-between hover:border-neutral-300 transition-all duration-200">
              <div>
                <h3 className="font-heading font-normal text-base sm:text-lg text-obsidian-pure tracking-tight mb-1.5">
                  The Icing: Recycling &amp; Bio-Products
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  The added benefit: We divert up to 88% from landfills by recycling collected polymers and metals for manufacturers, and processing organic waste into nutrient-rich bio-products.
                </p>
              </div>

              {/* Social Proof: Row of circular face avatars + badge (Inspiration 3) */}
              <div className="pt-3 border-t border-border-subtle/60 flex flex-wrap items-center gap-2.5">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Community leader Accra"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Local partner engineer"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                    alt="Operations supervisor"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                    alt="Municipal coordinator"
                  />
                </div>

                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white border border-border-subtle text-[11px] font-medium text-neutral-800 shadow-xs">
                  +15 partner hubs
                </span>
              </div>
            </div>

          </div>

          {/* Card 4 (Right Column - 3 cols, Full-Height): Real-Time Impact Editorial Photo Card */}
          <div className="lg:col-span-3 bg-white rounded-2xl overflow-hidden border border-border-subtle relative min-h-[340px] lg:min-h-full flex flex-col justify-end group shadow-subtle">
            {/* Dramatic vertical editorial photo */}
            <img
              src={recoveryActionImg}
              alt="TERRAFORM circular recovery in action"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

            {/* Bottom text overlay & floating circular arrow button (Inspiration 3) */}
            <div className="relative z-10 p-5 flex items-end justify-between">
              <p className="font-body text-white text-sm sm:text-base font-normal leading-snug max-w-[160px]">
                See real recovery in action.
              </p>

              {/* Floating white circular button with black diagonal arrow (↗) */}
              <button
                onClick={() => onNavigate('solutions')}
                className="w-10 h-10 rounded-full bg-white text-obsidian-pure flex items-center justify-center shadow-md hover:bg-neutral-100 hover:scale-105 transition-all duration-200 focus:outline-none"
                aria-label="See real recovery in action"
              >
                <ArrowUpRight size={18} className="stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

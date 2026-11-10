import React from 'react';
import { Sparkle } from './Sparkle';
import { FlowerDoodle } from './FlowerDoodle';
import { ArrowRight } from 'lucide-react';
import { PageType } from '../types';
import geminiHeroBg from '../assets/gemini-hero-bg.jpg';

interface HeroProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <>
      {/* 
        Hero Section: Height reduced by 20px (min-h-[calc(100vh+10px)]).
        Uses a large percentage of the screen for the vivid Gemini landscape image.
      */}
      <section 
        id="hero" 
        className="hero-section bg-white relative overflow-hidden flex flex-col justify-between min-h-[calc(100vh+10px)] min-h-[calc(100svh+10px)]"
      >
        {/* Subtle 4-point sparkle crosshair markers in brand green #80B86B */}
        <div className="absolute top-12 sm:top-16 left-[12%] hidden lg:block pointer-events-none z-20">
          <Sparkle size={22} className="text-[#80B86B] opacity-90" />
        </div>
        <div className="absolute top-20 sm:top-28 right-[14%] hidden lg:block pointer-events-none z-20">
          <Sparkle size={20} className="text-[#80B86B] opacity-85" />
        </div>
        <div className="absolute top-36 left-[18%] hidden xl:block pointer-events-none z-20">
          <Sparkle size={16} className="text-[#80B86B] opacity-80" />
        </div>
        <div className="absolute top-32 right-[22%] hidden md:block pointer-events-none z-20">
          <Sparkle size={14} className="text-[#80B86B] opacity-75" />
        </div>

        {/* Flower / Sprout doodles added from footer to harmonize aesthetic */}
        <div className="absolute top-10 sm:top-14 right-[8%] hidden md:block pointer-events-none z-20">
          <FlowerDoodle size={28} color="#80B86B" className="rotate-12 opacity-80" />
        </div>
        <div className="absolute top-28 sm:top-36 left-[7%] hidden lg:block pointer-events-none z-20">
          <FlowerDoodle size={24} color="#80B86B" className="-rotate-12 opacity-75" />
        </div>

        {/* 
          Hero Content: Centered in the middle of the screen relative to the hero height and image
        */}
        <div className="flex-1 flex flex-col justify-center items-center relative z-20 max-w-3xl mx-auto px-4 sm:px-6 text-center pt-8 sm:pt-12 md:pt-14 pb-2">
          
          {/* Status Badge with delicate sprout doodle */}
          <div className="relative inline-flex items-center">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-border-subtle shadow-xs mb-3 transition-all hover:border-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-dot animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-medium tracking-tight text-neutral-800">
                Punctual, Stress-Free Waste Collection
              </span>
            </div>
            
            {/* Delicate sprout doodle perched beside the status badge */}
            <div className="absolute -top-3.5 -right-5 pointer-events-none hidden sm:block">
              <FlowerDoodle size={18} color="#80B86B" className="rotate-12" />
            </div>
          </div>

          {/* Main Display Headline (Easy Grotesk Standard 400) - Enhanced breathable line spacing */}
          <h1 className="font-heading font-normal text-3xl sm:text-4xl md:text-[50px] leading-[1.22] sm:leading-[1.2] tracking-[-0.03em] text-obsidian-pure mb-3">
            Waste Collection On Time. <br className="hidden sm:inline" />
            At Your Convenience.
          </h1>

          {/* Subtitle (Continental) */}
          <p className="font-body text-xs sm:text-sm md:text-[15px] text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal mb-5">
            Dependable, hassle-free waste pickups for industries, corporate offices, hospitals, hotels, and homes across Greater Accra. Never worry about overflowing bins or missed collections again—with responsible recycling and bio-processing built right in.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              onClick={() => onNavigate('request')}
              className="group inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-obsidian-pure text-white text-xs sm:text-[13px] font-medium transition-all duration-200 hover:bg-neutral-900 shadow-sm"
            >
              <span>Schedule Your Pickup</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-neutral-800 text-xs sm:text-[13px] font-medium border border-border-subtle hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200 shadow-xs"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* 
          Full-width image wrapper: Occupies a big percentage of the hero (~56-62vh)
          - Top fade maintained for seamless blend behind the buttons.
          - Bottom fade reduced by 70% so the terrain, wheat fields, and sunrise show with vivid clarity.
        */}
        <div className="hero-background-image-container relative w-full h-[54vh] sm:h-[58vh] md:h-[62vh] min-h-[380px] sm:min-h-[440px] md:min-h-[500px] -mt-8 sm:-mt-12 md:-mt-14 overflow-hidden z-1 flex flex-col justify-end">
          {/* Top smooth white fade overlay maintained */}
          <div className="hero-fade-top pointer-events-none"></div>

          {/* Gemini Generated Landscape Image showing clearly across a big percentage of the hero */}
          <img
            src={geminiHeroBg}
            alt="Golden sunrise landscape representing circular technology and agricultural restoration"
            className="hero-background-image w-full h-full object-cover object-[center_32%] block"
            loading="eager"
          />

          {/* Bottom subtle gradient fade (reduced by 70% to show image clearly) */}
          <div className="hero-fade-bottom pointer-events-none"></div>
        </div>
      </section>

      {/* 
        Impact Stats Section: Positioned cleanly BENEATH the hero section
        (Inspiration 1 Luckycharm metric dock)
      */}
      <section id="impact-stats" className="bg-white py-8 sm:py-12 border-b border-border-hairline relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
            
            {/* Metric 1 */}
            <div className="px-4 sm:px-8 py-3 sm:py-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] tracking-tight text-obsidian-pure leading-tight">
                99.4%
              </div>
              <div className="font-body text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                On-Time Pickup Rate
              </div>
            </div>

            {/* Metric 2 */}
            <div className="px-4 sm:px-8 py-3 sm:py-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] tracking-tight text-obsidian-pure leading-tight">
                50+
              </div>
              <div className="font-body text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                Dedicated Fleets &amp; Hubs
              </div>
            </div>

            {/* Metric 3 */}
            <div className="px-4 sm:px-8 py-3 sm:py-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] tracking-tight text-obsidian-pure leading-tight">
                120,000+
              </div>
              <div className="font-body text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                Homes &amp; Facilities Served
              </div>
            </div>

            {/* Metric 4 */}
            <div className="px-4 sm:px-8 py-3 sm:py-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] tracking-tight text-obsidian-pure leading-tight">
                88%
              </div>
              <div className="font-body text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                Recycled &amp; Bio-Processed
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

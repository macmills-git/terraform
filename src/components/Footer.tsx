import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1E451B] via-[#3B7730] to-[#80B86B] text-white pt-10 sm:pt-12 pb-5 sm:pb-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Action Row: Headline + White Pill CTA Button (Compact match to reference) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
          <h2 className="font-heading font-normal text-2xl sm:text-3xl md:text-[32px] text-white tracking-tight leading-tight max-w-xl">
            The waste collection partner your business counts on
          </h2>

          <button
            onClick={() => onNavigate('request')}
            className="px-5 py-2.5 rounded-lg bg-white text-[#1E451B] font-semibold text-xs sm:text-sm hover:bg-neutral-50 hover:shadow-sm transition-all duration-200 shrink-0 self-start sm:self-center font-body focus:outline-none"
          >
            Book a pickup
          </button>
        </div>

        {/* Subtle Horizontal Hairline Divider */}
        <div className="w-full border-t border-white/20 mb-6 sm:mb-8" />

        {/* Compact Navigation Grid: 4 Streamlined Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mb-7 sm:mb-9 text-xs sm:text-[13px] text-white/85">
          
          {/* Column 1: SERVICES */}
          <div>
            <div className="text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-2.5">
              Services
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-white transition-colors text-left"
                >
                  Commercial &amp; Industrial Pickups
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-white transition-colors text-left"
                >
                  Residential &amp; Estate Bins
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions', 'simulator')}
                  className="hover:text-white transition-colors text-left"
                >
                  Yield Simulator &amp; Recycling
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <div className="text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-2.5">
              Company
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('home', 'vision-mission')}
                  className="hover:text-white transition-colors text-left"
                >
                  Mission &amp; Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'why-us')}
                  className="hover:text-white transition-colors text-left"
                >
                  Why TERRAFORM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-white transition-colors text-left"
                >
                  Regional Hubs &amp; Facilities
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: LEGAL & TRUST */}
          <div>
            <div className="text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-2.5">
              Legal &amp; Trust
            </div>
            <ul className="space-y-1.5">
              <li className="text-white/80">EPA License #GH-WM-4091</li>
              <li className="text-white/80">ISO 14001:2015 &bull; Gold Standard</li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy &amp; Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT & FOLLOW */}
          <div>
            <div className="text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-2.5">
              Contact &amp; Connect
            </div>
            <ul className="space-y-1.5 mb-2.5">
              <li>
                <a
                  href="mailto:dispatch@terraform.eco"
                  className="hover:text-white transition-colors"
                >
                  dispatch@terraform.eco
                </a>
              </li>
              <li className="text-white/80">Greater Accra, Ghana</li>
            </ul>

            <div className="flex items-center space-x-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-white text-[#1E451B] flex items-center justify-center hover:bg-white/90 transition-all font-bold text-[11px]"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all text-[11px] font-semibold"
                aria-label="X / Twitter"
              >
                𝕏
              </a>
            </div>
          </div>

        </div>

        {/* Monumental Brand Wordmark & Icon Lockup - Scaled Massive matching Reference */}
        <div className="w-full flex items-center justify-start gap-3 sm:gap-5 md:gap-7 pt-5 sm:pt-7 pb-2 border-t border-white/20 select-none overflow-hidden">
          {/* Large Shield / Crest Icon matching letter height */}
          <svg 
            className="h-[9.5vw] sm:h-[11vw] md:h-[11.5vw] lg:h-[118px] xl:h-[136px] w-auto shrink-0 drop-shadow-sm" 
            viewBox="0 0 100 110" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 4 C68 4 86 14 92 24 C92 62 76 92 50 106 C24 92 8 62 8 24 C14 14 32 4 50 4 Z M50 34 A16 16 0 1 0 50 66 A16 16 0 1 0 50 34 Z"
              fill="white"
            />
            <circle cx="50" cy="50" r="6" fill="white" />
          </svg>

          {/* Monumental Bold TERRAFORM Wordmark */}
          <span className="font-heading font-bold tracking-[-0.035em] text-[10.5vw] sm:text-[12vw] md:text-[12.5vw] lg:text-[130px] xl:text-[146px] text-white leading-none whitespace-nowrap">
            TERRAFORM
          </span>
        </div>

        {/* Centered Copyright below wordmark */}
        <div className="text-center text-[11px] sm:text-xs text-white/65 pt-3 pb-1 font-body">
          &copy; {new Date().getFullYear()} TERRAFORM. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

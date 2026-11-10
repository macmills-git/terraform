import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PageType } from '../types';

interface PartnershipCTAProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const PartnershipCTA: React.FC<PartnershipCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-border-hairline">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Container - Clean Pure White */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-border-subtle shadow-subtle text-center relative overflow-hidden">
          
          {/* Subtle top indicator */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-border-subtle text-xs font-medium text-neutral-800 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-dot animate-pulse"></span>
            <span>Enterprise & Municipal Integration</span>
          </div>

          {/* Main Headline (Easy Grotesk) - Clean & compact */}
          <h2 className="font-heading font-normal text-xl sm:text-2xl md:text-3xl text-obsidian-pure tracking-tight max-w-2xl mx-auto mb-3.5 leading-[1.25]">
            Ready to Transform Your Waste Stream Into Structured Value?
          </h2>

          {/* Subtitle (Continental) */}
          <p className="font-body text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Join hundreds of forward-thinking businesses and municipalities across West Africa turning disposal costs into certified circular assets.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            {/* Primary: Solid Obsidian Black Pill */}
            <button
              onClick={() => onNavigate('request')}
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-obsidian-pure text-white text-xs sm:text-[13px] font-medium transition-all duration-200 hover:bg-neutral-900 shadow-sm"
            >
              <span>Schedule Waste Audit</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary: Black Hairline Outline Pill */}
            <button
              onClick={() => onNavigate('request')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-obsidian-pure text-xs sm:text-[13px] font-medium border border-neutral-300 hover:border-obsidian-pure hover:bg-neutral-50 transition-all duration-200"
            >
              Request Collection Portal
            </button>
          </div>

          {/* Trust Credentials */}
          <div className="pt-6 border-t border-border-hairline flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-neutral-500">
            <div className="flex items-center space-x-1.5">
              <Check size={13} className="text-emerald-status" />
              <span>ISO 14001 Compliant</span>
            </div>
            <span className="hidden sm:inline text-neutral-300">·</span>
            <div className="flex items-center space-x-1.5">
              <Check size={13} className="text-emerald-status" />
              <span>Gold Standard GHG Certified</span>
            </div>
            <span className="hidden sm:inline text-neutral-300">·</span>
            <div className="flex items-center space-x-1.5">
              <Check size={13} className="text-emerald-status" />
              <span>EPA Ghana Licensed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

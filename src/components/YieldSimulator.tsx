import React, { useState } from 'react';
import { Sliders, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface YieldSimulatorProps {
  onNavigate?: (page: PageType, sectionId?: string) => void;
}

export const YieldSimulator: React.FC<YieldSimulatorProps> = ({ onNavigate }) => {
  const [wasteVolume, setWasteVolume] = useState<number>(30);
  const [facilityType, setFacilityType] = useState<'commercial' | 'hospitality' | 'manufacturing' | 'residential'>('commercial');

  const facilityProfiles = {
    commercial: { label: 'Commercial & Office', factor: 0.84, rateGh: 1650 },
    hospitality: { label: 'Hospitality & Hotels', factor: 0.89, rateGh: 1820 },
    manufacturing: { label: 'Manufacturing & Industrial', factor: 0.95, rateGh: 2100 },
    residential: { label: 'Residential Estates', factor: 0.78, rateGh: 1450 },
  };

  const currentProfile = facilityProfiles[facilityType];
  const divertedTons = Number((wasteVolume * currentProfile.factor).toFixed(1));
  const co2Abated = Number((divertedTons * 1.48).toFixed(1));
  const recoveredKg = Math.round(divertedTons * 680);
  const monthlySavingsGh = Math.round(divertedTons * currentProfile.rateGh);

  return (
    <div className="rounded-2xl border border-border-subtle bg-white p-6 sm:p-8 lg:p-10 shadow-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-neutral-50 border border-border-subtle text-[11px] font-medium text-neutral-700 mb-2">
              <Sliders size={12} className="text-[#80B86B]" />
              <span>Interactive Yield Simulator</span>
            </div>
            <h3 className="font-heading font-normal text-xl sm:text-2xl text-obsidian-pure tracking-tight">
              Calculate Your Facility's Circular Potential
            </h3>
            <p className="font-body text-xs sm:text-sm text-neutral-600 mt-1">
              Adjust your monthly waste volume and sector profile to simulate diversion output, carbon credits, and local material recovery.
            </p>
          </div>

          {/* Sector Profile Switcher */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Select Sector Profile
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {(Object.keys(facilityProfiles) as Array<keyof typeof facilityProfiles>).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFacilityType(key)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-center border ${
                    facilityType === key
                      ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-xs'
                      : 'bg-white text-neutral-700 border-border-subtle hover:border-neutral-300'
                  }`}
                >
                  {facilityProfiles[key].label}
                </button>
              ))}
            </div>
          </div>

          {/* Volume Slider */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-semibold uppercase tracking-wider text-neutral-500">
                Monthly Waste Generation
              </label>
              <span className="font-heading text-base font-normal text-obsidian-pure bg-neutral-50 px-3 py-1 rounded-full border border-border-subtle">
                <strong>{wasteVolume}</strong> Tons / Month
              </span>
            </div>

            <input
              type="range"
              min={5}
              max={150}
              step={5}
              value={wasteVolume}
              onChange={(e) => setWasteVolume(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-obsidian-pure"
              aria-label="Monthly Waste Generation (Tons)"
            />

            <div className="flex justify-between text-[11px] text-neutral-400">
              <span>5 Tons (Small Facility)</span>
              <span>75 Tons (Medium Hub)</span>
              <span>150 Tons (Heavy Enterprise)</span>
            </div>
          </div>
        </div>

        {/* Right Telemetry Yield Card (5 cols) */}
        <div className="lg:col-span-5 bg-obsidian-pure text-white rounded-2xl p-6 sm:p-7 shadow-card-dark relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
            <div className="flex items-center space-x-2 text-xs font-medium text-neutral-300">
              <Sparkles size={14} className="text-[#80B86B]" />
              <span>Projected Monthly Yield</span>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#80B86B] bg-[#80B86B]/10 px-2 py-0.5 rounded-full">
              {Math.round(currentProfile.factor * 100)}% Diversion Target
            </span>
          </div>

          {/* Dynamic Stats Output */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-neutral-400 uppercase font-medium">Landfill Diversion</div>
              <div className="font-heading font-normal text-xl sm:text-2xl text-white mt-1">
                {divertedTons} <span className="text-xs text-neutral-400">Tons</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-neutral-400 uppercase font-medium">CO₂e Abatement</div>
              <div className="font-heading font-normal text-xl sm:text-2xl text-white mt-1">
                {co2Abated} <span className="text-xs text-neutral-400">Tons</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-neutral-400 uppercase font-medium">Recovered Pellets/Compost</div>
              <div className="font-heading font-normal text-xl sm:text-2xl text-white mt-1">
                {recoveredKg.toLocaleString()} <span className="text-xs text-neutral-400">KG</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-neutral-400 uppercase font-medium">Monthly Cost Savings</div>
              <div className="font-heading font-normal text-xl sm:text-2xl text-[#80B86B] mt-1">
                GH₵ {monthlySavingsGh.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Action Button */}
          {onNavigate && (
            <button
              type="button"
              onClick={() => onNavigate('request')}
              className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-white text-obsidian-pure text-xs sm:text-sm font-medium hover:bg-neutral-100 transition-all shadow-sm group"
            >
              <TrendingUp size={14} />
              <span>Request Full Facility Characterization</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};


import React from 'react';
import { ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';
import { PageType } from '../types';

interface ImpactDataProps {
  onNavigate?: (page: PageType, sectionId?: string) => void;
}

export const ImpactData: React.FC<ImpactDataProps> = () => {
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

  return (
    <section id="impact" className="mt-8 sm:mt-12 lg:mt-16 mb-7 sm:mb-11 lg:mb-14 py-14 sm:py-18 lg:py-24 bg-white border-b border-border-hairline scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & compact */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-border-subtle text-xs font-medium text-neutral-800 mb-3">
            <Activity size={12} className="text-emerald-status" />
            <span>Telemetry & Live Verification</span>
          </div>

          <h2 className="font-heading font-normal text-2xl sm:text-3xl md:text-[34px] text-obsidian-pure tracking-tight mb-2.5">
            Measured Impact Across Greater Accra.
          </h2>

          <p className="font-body text-sm sm:text-base text-neutral-600 font-normal">
            Verifiable environmental and economic metrics tracked daily via IoT telemetry and third-party circular audit logs.
          </p>
        </div>

        {/* Metric Grid with Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 sm:p-6 rounded-xl bg-white border border-border-subtle hover:border-obsidian-pure hover:shadow-subtle transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
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

                <div className="font-heading font-normal text-sm sm:text-[15px] text-obsidian-pure mb-2 font-medium">
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

      </div>
    </section>
  );
};

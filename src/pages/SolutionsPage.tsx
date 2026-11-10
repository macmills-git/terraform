import React, { useState } from 'react';
import { PageType } from '../types';
import { YieldSimulator } from '../components/YieldSimulator';
import commercialPickupImg from '../assets/commercial-industrial-pickup.jpg';
import residentialEstateImg from '../assets/residential-estate-bins.jpg';
import recyclingRecoveryImg from '../assets/recycling-bioproducts-recovery.jpg';
import conveyorSortingImg from '../assets/about-conveyor-sorting.jpg';
import smartInfraImg from '../assets/about-smart-infrastructure.jpg';
import { 
  Building2, 
  Factory, 
  Home, 
  Recycle, 
  Leaf, 
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Truck,
  ShieldCheck,
  Scale,
  Calendar,
  Hotel,
  Stethoscope,
  HardHat,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'commercial' | 'residential' | 'recycling'>('all');
  const [commercialTab, setCommercialTab] = useState<'hospitality' | 'corporate' | 'manufacturing' | 'healthcare' | 'construction'>('corporate');

  const scrollToSection = (id: string, filter: 'all' | 'commercial' | 'residential' | 'recycling') => {
    setActiveCategoryFilter(filter);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commercialSectors = {
    corporate: {
      name: 'Offices & Corporate Parks',
      icon: Building2,
      subtitle: 'Zero-clutter, discreet scheduled waste removal for modern commercial towers.',
      cadence: 'Daily or Custom Evening Pickups',
      containers: '660L–1100L Lockable Bins & Internal Sort Carts',
      sla: 'Guaranteed 99.6% on-time arrival rate',
      highlights: [
        'Desk-side and central waste room clearance before business hours',
        'Confidential document & electronic waste secure destruction',
        'EPA Ghana compliance certificates issued with monthly consolidated billing',
        'Scope 3 ESG sustainability dashboards provided for corporate reporting',
      ],
      compliance: 'ISO 14001:2015 & EPA License #GH-WM-4091',
    },
    hospitality: {
      name: 'Hotels, Restaurants & Venues',
      icon: Hotel,
      subtitle: 'High-frequency organic & packaging pickups to keep kitchens and guest areas immaculate.',
      cadence: 'Twice-Daily or 7-Day Scheduled Pickups',
      containers: 'Airtight Odor-Lock Organics Bins & 1100L Wheelies',
      sla: 'Zero foul-odor containment guarantee',
      highlights: [
        'Rapid kitchen organic waste removal to prevent pests and bacterial buildup',
        'High-volume beverage container, bottle, and carton baling and pickup',
        'Emergency rush service available 24/7 for high-profile banquets and events',
        'Food waste routed directly to TERRAFORM aerobic bio-compost digestion',
      ],
      compliance: 'Ghana FDA Sanitation Standards & EPA Regs',
    },
    manufacturing: {
      name: 'Factories & Industrial Parks',
      icon: Factory,
      subtitle: 'Heavy-duty roll-off containers and rapid swap-outs for manufacturing scrap and bulk packaging.',
      cadence: 'On-Demand Roll-Off Swaps (<120 min dispatch)',
      containers: '10 to 30 Cubic Yard Heavy Steel Roll-Offs & Compactors',
      sla: 'Direct weighbridge telemetry & digital slips',
      highlights: [
        'Heavy industrial roll-off dumpsters for scrap metal, wood pallets, and dry waste',
        'Stationary hydraulic compactor installation and ongoing preventive maintenance',
        'Certified non-hazardous waste destruction with digital weighbridge certificates',
        'Rapid swap-out logistics managed via dedicated WhatsApp dispatch desk',
      ],
      compliance: 'EPA Ghana Industrial Hazardous & Non-Hazardous Mandates',
    },
    healthcare: {
      name: 'Hospitals, Clinics & Labs',
      icon: Stethoscope,
      subtitle: 'Specialized segregation and chain-of-custody disposal for general and regulated medical facilities.',
      cadence: 'Strict Daily Manifested Sweeps',
      containers: 'Color-Coded Bio-Hazard & General Sanitation Bins',
      sla: '100% chain-of-custody tracking',
      highlights: [
        'Segregated collection of general institutional waste vs. regulated medical fractions',
        'Tamper-evident color-coded containment and secure transport vehicles',
        'High-temperature incineration and autoclaving at certified processing centers',
        'Full EPA chain-of-custody manifests signed at every handover point',
      ],
      compliance: 'Ghana Health Service & EPA Healthcare Waste Protocol',
    },
    construction: {
      name: 'Construction & Demolition Sites',
      icon: HardHat,
      subtitle: 'Rapid debris hauling and rubble disposal to keep worksites productive and compliant.',
      cadence: 'Same-Day Roll-Off Swaps',
      containers: 'Heavy Inert 20–30 Cubic Yard Open-Top Skips',
      sla: 'Under 120-minute on-site container swaps',
      highlights: [
        'High-capacity open-top skips for concrete rubble, drywall, timber, and metal',
        'Guaranteed fast turnarounds to prevent site blockages and permit delays',
        'Crushing and sorting of inert aggregates for sustainable road base reuse',
        'Digital weight ticket verification provided directly to site project managers',
      ],
      compliance: 'District Assembly Demolition & Haulage Permits',
    },
  };

  const currentSector = commercialSectors[commercialTab];

  return (
    <div className="w-full bg-white text-text-primary">
      
      {/* 1. HERO HEADER: Crystal Clear Value Proposition */}
      <section id="solutions" className="pt-12 pb-16 md:pt-16 md:pb-20 bg-white border-b border-border-hairline scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            {/* Breadcrumb Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-50 border border-border-subtle text-xs font-medium text-neutral-800 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#80B86B]"></span>
              <span className="font-heading font-medium tracking-wide">02. Solutions &amp; Services</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-normal text-3xl sm:text-5xl lg:text-[54px] text-obsidian-pure tracking-tight leading-[1.12] mb-5">
              Waste Collection On Time. <br className="hidden sm:inline" />
              <span className="text-neutral-500">At Your Convenience.</span>
            </h1>

            {/* Subtitle articulating core mission & the recycling icing */}
            <p className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed font-normal mb-8">
              Whether you run an industrial factory, manage a corporate office tower, operate a hotel, or live in a residential estate — TERRAFORM provides punctual, zero-stress waste pickup schedules with guaranteed arrival SLAs. 
              <strong className="text-obsidian-pure font-medium"> What sets us apart: </strong> 
              we recycle the vast majority of what we collect and convert the rest into rich organic bio-products.
            </p>

            {/* Key SLA Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl border border-border-subtle bg-neutral-50/50">
                <div className="text-xl sm:text-2xl font-heading font-normal text-obsidian-pure flex items-baseline space-x-1">
                  <span>99.4</span>
                  <span className="text-xs text-[#80B86B] font-semibold">%</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">On-Time Arrival SLA</div>
              </div>

              <div className="p-3 rounded-xl border border-border-subtle bg-neutral-50/50">
                <div className="text-xl sm:text-2xl font-heading font-normal text-obsidian-pure flex items-baseline space-x-1">
                  <span>&lt;120</span>
                  <span className="text-xs text-[#80B86B] font-semibold">min</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Emergency Roll-Off Swap</div>
              </div>

              <div className="p-3 rounded-xl border border-border-subtle bg-neutral-50/50">
                <div className="text-xl sm:text-2xl font-heading font-normal text-obsidian-pure flex items-baseline space-x-1">
                  <span>78</span>
                  <span className="text-xs text-[#80B86B] font-semibold">%</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Recycled &amp; Bio-Yield</div>
              </div>

              <div className="p-3 rounded-xl border border-border-subtle bg-neutral-50/50">
                <div className="text-xl sm:text-2xl font-heading font-normal text-[#80B86B] flex items-baseline space-x-1">
                  <span>EPA</span>
                  <span className="text-xs text-neutral-600 font-normal">#4091</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Certified Compliance</div>
              </div>
            </div>

          </div>

          {/* Quick-Filter Anchor Bar */}
          <div className="mt-10 pt-6 border-t border-border-hairline flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mr-2">Jump To:</span>
            
            <button
              onClick={() => scrollToSection('commercial-industrial', 'commercial')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center space-x-1.5 ${
                activeCategoryFilter === 'commercial'
                  ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-xs'
                  : 'border-border-subtle bg-white hover:bg-neutral-50 text-neutral-700 hover:border-neutral-400'
              }`}
            >
              <Building2 size={13} className={activeCategoryFilter === 'commercial' ? 'text-white' : 'text-[#80B86B]'} />
              <span>Commercial &amp; Industrial Pickups</span>
            </button>

            <button
              onClick={() => scrollToSection('residential-estate', 'residential')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center space-x-1.5 ${
                activeCategoryFilter === 'residential'
                  ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-xs'
                  : 'border-border-subtle bg-white hover:bg-neutral-50 text-neutral-700 hover:border-neutral-400'
              }`}
            >
              <Home size={13} className={activeCategoryFilter === 'residential' ? 'text-white' : 'text-[#80B86B]'} />
              <span>Residential &amp; Estate Bins</span>
            </button>

            <button
              onClick={() => scrollToSection('recycling-facility', 'recycling')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center space-x-1.5 ${
                activeCategoryFilter === 'recycling'
                  ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-xs'
                  : 'border-border-subtle bg-white hover:bg-neutral-50 text-neutral-700 hover:border-neutral-400'
              }`}
            >
              <Recycle size={13} className={activeCategoryFilter === 'recycling' ? 'text-white' : 'text-[#80B86B]'} />
              <span>Recycling &amp; Bio-Products</span>
            </button>

            <button
              onClick={() => scrollToSection('simulator', 'recycling')}
              className="px-4 py-1.5 rounded-full text-xs font-medium border border-border-subtle bg-white hover:bg-neutral-50 text-neutral-700 hover:border-neutral-400 transition-all flex items-center space-x-1.5"
            >
              <Sparkles size={13} className="text-[#80B86B]" />
              <span>Yield Simulator</span>
            </button>
          </div>

        </div>
      </section>


      {/* 2. CATEGORY 1: COMMERCIAL & INDUSTRIAL PICKUPS */}
      <section id="commercial-industrial" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 text-xs font-medium text-neutral-800 mb-3">
              <Building2 size={12} className="text-[#80B86B]" />
              <span>Enterprise &amp; Industrial Operations</span>
            </div>
            <h2 className="font-heading font-normal text-2xl sm:text-4xl text-obsidian-pure tracking-tight">
              Commercial &amp; Industrial Pickups
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-600 mt-2">
              High-capacity roll-offs, automated compactor systems, and punctual dispatch routes engineered for hotels, corporate towers, hospitals, retail malls, and industrial plants across Greater Accra &amp; Tema.
            </p>
          </div>

          <button
            onClick={() => onNavigate('request')}
            className="self-start md:self-end px-5 py-2.5 rounded-full bg-obsidian-pure text-white text-xs font-medium hover:bg-neutral-800 transition-all flex items-center space-x-2 shadow-sm shrink-0"
          >
            <span>Book Commercial Pickup</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Feature Visual Bento Grid with Real Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Visual Photo Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border-subtle shadow-subtle relative min-h-[380px] lg:min-h-[460px] flex flex-col justify-end p-6 sm:p-8 group bg-neutral-900">
            <img 
              src={commercialPickupImg} 
              alt="TERRAFORM Commercial & Industrial Collection Truck with Automated Hydraulic Arm" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            
            {/* Live operational badge on top */}
            <div className="absolute top-5 left-5 z-10 flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center space-x-1.5">
                <MapPin size={12} className="text-[#80B86B]" />
                <span>Tema &amp; Accra Industrial Fleet Active</span>
              </span>
            </div>

            {/* Bottom Content overlay */}
            <div className="relative z-10 space-y-3 text-white">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#80B86B]">
                Heavy-Duty Logistics Architecture
              </span>
              <h3 className="font-heading font-normal text-xl sm:text-2xl text-white tracking-tight">
                Punctual Swaps, Zero Overflow, Full Compliance
              </h3>
              <p className="font-body text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
                We place heavy roll-off containers and compactors on-site, monitor fill-rates, and swap them clockwork-style before waste ever accumulates — delivering certified EPA waste manifests straight to your desk.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-200">
                <span className="flex items-center space-x-1">
                  <Clock size={13} className="text-[#80B86B]" />
                  <span>120-min emergency swap</span>
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="flex items-center space-x-1">
                  <Scale size={13} className="text-[#80B86B]" />
                  <span>Digital weighbridge slips</span>
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="flex items-center space-x-1">
                  <ShieldCheck size={13} className="text-[#80B86B]" />
                  <span>EPA Ghana verified</span>
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Sector Switcher Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-neutral-50/70 rounded-2xl p-6 sm:p-7 border border-border-subtle shadow-subtle">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Tailored By Sector
              </div>
              <h3 className="font-heading font-normal text-lg sm:text-xl text-obsidian-pure mb-4">
                Select Your Industry Needs
              </h3>

              {/* Sector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-5">
                {(Object.keys(commercialSectors) as Array<keyof typeof commercialSectors>).map((key) => {
                  const sec = commercialSectors[key];
                  const Icon = sec.icon;
                  const isActive = commercialTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setCommercialTab(key)}
                      className={`p-2 rounded-xl text-xs font-medium transition-all text-left flex items-center space-x-1.5 border ${
                        isActive
                          ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-xs'
                          : 'bg-white text-neutral-700 border-border-subtle hover:border-neutral-300'
                      }`}
                    >
                      <Icon size={13} className={isActive ? 'text-[#80B86B]' : 'text-neutral-500'} />
                      <span className="truncate">{sec.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Card Content */}
              <div className="bg-white rounded-xl p-5 border border-border-subtle space-y-3.5 shadow-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-heading font-medium text-base text-obsidian-pure">
                      {currentSector.name}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {currentSector.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-border-hairline text-xs">
                  <div className="flex items-center justify-between text-neutral-600">
                    <span className="font-medium text-neutral-400 text-[11px] uppercase tracking-wider">Pickup Schedule:</span>
                    <span className="font-semibold text-obsidian-pure text-right">{currentSector.cadence}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-600">
                    <span className="font-medium text-neutral-400 text-[11px] uppercase tracking-wider">Container Type:</span>
                    <span className="font-semibold text-obsidian-pure text-right">{currentSector.containers}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-600">
                    <span className="font-medium text-neutral-400 text-[11px] uppercase tracking-wider">Service SLA:</span>
                    <span className="font-semibold text-[#80B86B] text-right">{currentSector.sla}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-border-hairline">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    Key Deliverables:
                  </div>
                  {currentSector.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-1.5 text-xs text-neutral-700">
                      <CheckCircle2 size={13} className="text-[#80B86B] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-border-subtle flex items-center justify-between">
              <span className="text-[11px] text-neutral-500 font-medium">
                {currentSector.compliance}
              </span>
              <button
                onClick={() => onNavigate('request')}
                className="text-xs font-semibold text-obsidian-pure hover:text-[#80B86B] transition-colors flex items-center space-x-1"
              >
                <span>Request Setup</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Commercial Container Fleet Showcase */}
        <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-border-subtle">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
            Commercial Equipment &amp; Storage Options
          </div>
          <h3 className="font-heading font-normal text-lg sm:text-2xl text-obsidian-pure tracking-tight mb-6">
            Containers Sized For Your Daily Footprint
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-5 border border-border-subtle shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-obsidian-pure mb-3">
                <Truck size={16} />
              </div>
              <h4 className="font-heading font-medium text-base text-obsidian-pure mb-1">
                Heavy Wheelie Bins (240L – 1100L)
              </h4>
              <p className="text-xs text-neutral-600 mb-3 leading-relaxed">
                Odor-sealed, puncture-resistant wheeled containers ideal for restaurants, retail premises, and corporate service docks.
              </p>
              <div className="text-[11px] font-medium text-[#80B86B] pt-2 border-t border-border-hairline">
                Daily or multi-weekly scheduled roll-out
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-border-subtle shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-obsidian-pure mb-3">
                <Building2 size={16} />
              </div>
              <h4 className="font-heading font-medium text-base text-obsidian-pure mb-1">
                Hydraulic Compactors (10–25 Cu Yd)
              </h4>
              <p className="text-xs text-neutral-600 mb-3 leading-relaxed">
                On-site hydraulic compression units that reduce waste volume by 4:1, slashing hauling costs for large complexes and malls.
              </p>
              <div className="text-[11px] font-medium text-[#80B86B] pt-2 border-t border-border-hairline">
                Telemetry fill-level automated dispatch
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-border-subtle shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-obsidian-pure mb-3">
                <Factory size={16} />
              </div>
              <h4 className="font-heading font-medium text-base text-obsidian-pure mb-1">
                Industrial Roll-Off Skips (15–30 Cu Yd)
              </h4>
              <p className="text-xs text-neutral-600 mb-3 leading-relaxed">
                Open-top steel skips for manufacturing scrap, construction rubble, packaging pallets, and heavy non-hazardous debris.
              </p>
              <div className="text-[11px] font-medium text-[#80B86B] pt-2 border-t border-border-hairline">
                Rapid on-demand swap in &lt;120 minutes
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* 3. CATEGORY 2: RESIDENTIAL & ESTATE BINS */}
      <section id="residential-estate" className="py-16 md:py-24 bg-neutral-50/60 border-t border-b border-border-hairline scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white border border-border-subtle text-xs font-medium text-neutral-800 mb-3">
                <Home size={12} className="text-[#80B86B]" />
                <span>Communities &amp; Households</span>
              </div>
              <h2 className="font-heading font-normal text-2xl sm:text-4xl text-obsidian-pure tracking-tight">
                Residential &amp; Estate Bins
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-600 mt-2">
                Punctual, dependable curbside waste collection for residential estates, gated homeowner communities, and individual family homes. Clean bins, reliable collection days, and zero lingering neighborhood clutter.
              </p>
            </div>

            <button
              onClick={() => onNavigate('request')}
              className="self-start md:self-end px-5 py-2.5 rounded-full bg-obsidian-pure text-white text-xs font-medium hover:bg-neutral-800 transition-all flex items-center space-x-2 shadow-sm shrink-0"
            >
              <span>Register Your Home or Estate</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Editorial Visual Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            
            {/* Visual Photo Card (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-border-subtle shadow-subtle relative min-h-[360px] sm:min-h-[420px] group bg-neutral-900">
              <img 
                src={residentialEstateImg} 
                alt="Clean modern color-coded residential bins along a landscaped estate sidewalk" 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-2.5 py-1 rounded-full bg-[#80B86B] text-obsidian-pure font-bold text-[10px] uppercase tracking-wider inline-block">
                  Punctual Curbside Guarantee
                </span>
                <h3 className="font-heading font-normal text-xl sm:text-2xl text-white">
                  Never Come Home To An Overflowing Bin
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-md">
                  Our uniformed fleet arrives at the same designated time window every week. Residents receive WhatsApp notifications 15 minutes before the truck arrives.
                </p>
              </div>
            </div>

            {/* Residential Offerings Cards (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Option 1: Gated Estates & HOAs */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-border-subtle shadow-xs hover:border-neutral-400 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-obsidian-pure">
                      <Building2 size={14} />
                    </div>
                    <h4 className="font-heading font-medium text-base text-obsidian-pure">
                      Gated Communities &amp; HOAs
                    </h4>
                  </div>
                  <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full">
                    Turnkey Contract
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mb-3 leading-relaxed">
                  Consolidated estate-wide agreements with synchronized pickup days, dedicated route managers, and quarterly bulky junk clearance drives (furniture, appliances, tree trimmings).
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-700 pt-2 border-t border-border-hairline">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 size={12} className="text-[#80B86B]" />
                    <span>Single HOA billing</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 size={12} className="text-[#80B86B]" />
                    <span>Resident WhatsApp alerts</span>
                  </span>
                </div>
              </div>

              {/* Option 2: Individual Households */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-border-subtle shadow-xs hover:border-neutral-400 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-obsidian-pure">
                      <Home size={14} />
                    </div>
                    <h4 className="font-heading font-medium text-base text-obsidian-pure">
                      Single-Family Homes &amp; Duplexes
                    </h4>
                  </div>
                  <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full">
                    Bi-Weekly / Weekly
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mb-3 leading-relaxed">
                  Durable 240L wheelie bins provided directly to your door. Fixed collection days with our zero-spill collection guarantee — your curb stays clean and sanitary.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-700 pt-2 border-t border-border-hairline">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 size={12} className="text-[#80B86B]" />
                    <span>Heavy-duty sealed bin</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 size={12} className="text-[#80B86B]" />
                    <span>Missed-pickup 4h dispatch</span>
                  </span>
                </div>
              </div>

              {/* Option 3: Apartment Complexes & High-Rises */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-border-subtle shadow-xs hover:border-neutral-400 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-obsidian-pure">
                      <Hotel size={14} />
                    </div>
                    <h4 className="font-heading font-medium text-base text-obsidian-pure">
                      Apartments &amp; Residential Towers
                    </h4>
                  </div>
                  <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full">
                    High Frequency
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mb-3 leading-relaxed">
                  Central dumpster room and trash chute bin swaps (up to 3x weekly) with automated bin sanitization to prevent odors, fruit flies, and pest infestations.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-700 pt-2 border-t border-border-hairline">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 size={12} className="text-[#80B86B]" />
                    <span>Bin steam sanitization</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 size={12} className="text-[#80B86B]" />
                    <span>High-volume 1100L skips</span>
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Secondary Smart Infrastructure Image & Neighborhood Stats */}
          <div className="rounded-2xl bg-white border border-border-subtle p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 rounded-xl overflow-hidden h-[180px] sm:h-[200px] relative border border-border-subtle">
              <img 
                src={smartInfraImg} 
                alt="Smart Municipal Infrastructure & Fleet Telemetry" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium">
                Accra Central GPS Telemetry
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#80B86B]">
                The TERRAFORM Neighborhood Standard
              </div>
              <h4 className="font-heading font-normal text-xl text-obsidian-pure">
                Clean Streets, Professional Crews, Guaranteed Punctuality
              </h4>
              <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our drivers and collection crews are fully vetted, wear clean high-visibility uniforms, and operate modern hydraulic trucks equipped with automated lifters. We leave your pavement clean with lids securely closed.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-medium text-neutral-700">
                <span className="flex items-center space-x-1.5">
                  <Calendar size={13} className="text-[#80B86B]" />
                  <span>Fixed calendar schedule</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Clock size={13} className="text-[#80B86B]" />
                  <span>Morning routes (6am – 10am)</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck size={13} className="text-[#80B86B]" />
                  <span>Zero street litter guarantee</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 4. CATEGORY 3: RECYCLING, BIO-PRODUCTS & MATERIAL RECOVERY */}
      <section id="recycling-facility" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 text-xs font-medium text-neutral-800 mb-3">
            <Recycle size={12} className="text-[#80B86B]" />
            <span>The Circular Bonus &bull; The Icing On The Cake</span>
          </div>
          <h2 className="font-heading font-normal text-2xl sm:text-4xl text-obsidian-pure tracking-tight">
            Transforming Collected Waste Into Raw Materials &amp; Bio-Products
          </h2>
          <p className="font-body text-sm sm:text-base text-neutral-600 mt-2">
            Punctual waste collection is our primary mission — but what makes TERRAFORM truly exceptional is what happens after the truck leaves your premises. Instead of rotting in overflowing municipal landfills, over 78% of the waste we collect is sorted, recovered, and processed into high-value secondary raw materials and rich organic bio-products.
          </p>
        </div>

        {/* Feature Grid with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Visual Image Card: Recycling & Bio-Products (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border-subtle shadow-subtle relative min-h-[380px] lg:min-h-[460px] flex flex-col justify-end p-6 sm:p-8 group bg-neutral-900">
            <img 
              src={recyclingRecoveryImg} 
              alt="State-of-the-art optical recycling sorting line and rich circular bio-products" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="relative z-10 space-y-3 text-white">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#80B86B]">
                Ring Road Material Recovery Facility (MRF)
              </span>
              <h3 className="font-heading font-normal text-xl sm:text-2xl text-white tracking-tight">
                High-Purity Sorting &amp; Organic Bio-Compost Digestion
              </h3>
              <p className="font-body text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
                Our optical and mechanical sorting lines extract clean PET, HDPE, aluminium, and cardboard for local manufacturing, while our controlled aerobic digestion lines convert organic food residues into nutrient-rich agricultural bio-fertilizer.
              </p>
              
              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-base sm:text-lg font-heading font-medium text-white">98.6%</div>
                  <div className="text-[10px] text-neutral-300 uppercase tracking-wider mt-0.5">Material Purity</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-base sm:text-lg font-heading font-medium text-[#80B86B]">42,000+</div>
                  <div className="text-[10px] text-neutral-300 uppercase tracking-wider mt-0.5">Tons Bio-Compost</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-base sm:text-lg font-heading font-medium text-white">100%</div>
                  <div className="text-[10px] text-neutral-300 uppercase tracking-wider mt-0.5">Zero Waterway Dump</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Details with Conveyor Photo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Conveyor Card */}
            <div className="rounded-2xl border border-border-subtle overflow-hidden bg-white shadow-xs">
              <div className="h-[160px] sm:h-[180px] w-full relative">
                <img 
                  src={conveyorSortingImg} 
                  alt="Optical conveyor sorting plastics and recyclables" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium">
                  Near-Infrared Optical Sorting
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading font-medium text-base text-obsidian-pure mb-1">
                  1. Automated Material Recovery
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Near-infrared sensors identify polymer signatures in milliseconds, flaking PET bottles and HDPE containers into Grade-A export and local manufacturing resin.
                </p>
              </div>
            </div>

            {/* Bio-Products Processing Card */}
            <div className="rounded-2xl border border-border-subtle p-5 bg-neutral-50/70 shadow-xs space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-[#80B86B]">
                  <Leaf size={15} />
                </div>
                <h4 className="font-heading font-medium text-base text-obsidian-pure">
                  2. Organic Bio-Products &amp; Soil Conditioning
                </h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Market waste, hotel food scraps, and agricultural offcuts undergo aerobic composting in our Ga South facility, producing chemical-free bio-pellets for commercial tomato and grain farms across Southern Ghana.
              </p>
              <div className="text-[11px] font-medium text-[#80B86B] pt-1">
                Zero methane emissions &bull; Restores degraded soil microbiology
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars of the Circular Loop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-border-subtle bg-white shadow-xs">
            <div className="text-xs font-bold text-[#80B86B] mb-1">STREAM 01</div>
            <h4 className="font-heading font-medium text-base text-obsidian-pure mb-1.5">Plastics &amp; Polymers</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Clean PET bottles, HDPE milk jugs, and PP caps washed and flaked into Grade-A circular raw materials.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-white shadow-xs">
            <div className="text-xs font-bold text-[#80B86B] mb-1">STREAM 02</div>
            <h4 className="font-heading font-medium text-base text-obsidian-pure mb-1.5">Corrugated Paper &amp; Cardboard</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Industrial carton baling and pulp recovery supplied directly to local paper and packaging mills.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-white shadow-xs">
            <div className="text-xs font-bold text-[#80B86B] mb-1">STREAM 03</div>
            <h4 className="font-heading font-medium text-base text-obsidian-pure mb-1.5">Organic Bio-Compost</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Aerobically digested biological solids transformed into rich organic humus pellets for agricultural soils.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-white shadow-xs">
            <div className="text-xs font-bold text-[#80B86B] mb-1">STREAM 04</div>
            <h4 className="font-heading font-medium text-base text-obsidian-pure mb-1.5">Refuse-Derived Fuel (RDF)</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Non-recyclable combustibles engineered into dry fuel pellets that displace fossil coal in cement kilns.
            </p>
          </div>
        </div>

      </section>


      {/* 5. INTERACTIVE YIELD SIMULATOR: See Your Circular Yield & Savings */}
      <section id="simulator" className="py-16 md:py-24 bg-neutral-50/70 border-t border-b border-border-hairline scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white border border-border-subtle text-xs font-medium text-neutral-800 mb-3">
              <Sparkles size={12} className="text-[#80B86B]" />
              <span>Interactive Telemetry Model</span>
            </div>
            <h2 className="font-heading font-normal text-2xl sm:text-4xl text-obsidian-pure tracking-tight">
              Simulate Your Diversion Yield &amp; Economic Savings
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-600 mt-2">
              Move the sliders below to estimate how many tons your facility will divert from landfill, the kilograms of bio-products and secondary plastics recovered, and your monthly hauling cost savings.
            </p>
          </div>

          {/* Embedded Yield Simulator */}
          <YieldSimulator onNavigate={onNavigate} />

        </div>
      </section>

    </div>
  );
};

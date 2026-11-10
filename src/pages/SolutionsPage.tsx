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
  Calendar,
  Hotel,
  Stethoscope,
  HardHat,
  ChevronRight,
  Sparkles,
  Box,
  Flame,
  FileCheck
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'commercial' | 'residential' | 'recycling' | 'specialized'>('all');
  
  // Commercial interactive states
  const [commercialTab, setCommercialTab] = useState<'corporate' | 'hospitality' | 'manufacturing' | 'healthcare' | 'construction'>('corporate');
  const [containerOption, setContainerOption] = useState<'wheelie' | 'compactor' | 'rolloff'>('wheelie');

  // Residential interactive states
  const [residentialTier, setResidentialTier] = useState<'hoa' | 'home' | 'apartments'>('hoa');

  // Recycling circular stream state
  const [activeStream, setActiveStream] = useState<number>(0);

  // Specialized waste accordion active state
  const [activeSpecialized, setActiveSpecialized] = useState<number>(0);

  const scrollToSection = (id: string, filter: 'all' | 'commercial' | 'residential' | 'recycling' | 'specialized') => {
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

  const containerSpecs = {
    wheelie: {
      title: 'Heavy Wheelie Bins (240L – 1100L)',
      desc: 'Reinforced polymer mobile bins with tight gasket odor seals. Ideal for restaurants, retail premises, and internal corporate docks.',
      schedule: 'Daily or multi-weekly roll-out',
      capacity: '240 to 1,100 Liters (up to 450 kg)',
    },
    compactor: {
      title: 'Stationary & Self-Contained Compactors',
      desc: 'Heavy-duty hydraulic compaction units reducing waste volume 4:1. Slashing hauling overhead for corporate towers and logistics hubs.',
      schedule: 'Automated IoT fill-level dispatch',
      capacity: '10 to 25 Cubic Yards (hydraulic)',
    },
    rolloff: {
      title: 'Heavy Steel Roll-Off Skips (15–30 Cu Yd)',
      desc: 'Industrial reinforced open-top containers for manufacturing scrap, construction demolition, timber pallets, and bulk dry refuse.',
      schedule: 'Guaranteed swap in <120 mins',
      capacity: '15 to 30 Cubic Yards (up to 12 tons)',
    },
  };

  const residentialTiers = {
    hoa: {
      title: 'Gated Communities & HOAs',
      tag: 'Turnkey Master Contract',
      desc: 'Master community agreements with dedicated fleet routes, synchronized pickup days, and quarterly bulky junk clearance (furniture, appliances, tree trimmings).',
      schedule: 'Coordinated neighborhood collection days',
      perks: [
        'Single consolidated HOA monthly statement',
        'Resident automated WhatsApp truck arrival alerts',
        'Quarterly neighborhood bulky cleanup drives',
        'Dedicated route operations manager assigned',
      ],
    },
    home: {
      title: 'Single-Family Homes & Duplexes',
      tag: 'Curbside Scheduled',
      desc: 'Standardized 240L heavy-duty wheelie bins delivered straight to your gate. Fixed morning collection calendar with our clean-curb guarantee.',
      schedule: 'Fixed Weekly or Bi-Weekly mornings',
      perks: [
        'Clean, odor-locked 240L wheelie bin provided',
        'Fixed calendar schedule (set your clock by it)',
        '4-hour dispatch guarantee if collection delayed',
        'Polite, vetted, uniformed collection crews',
      ],
    },
    apartments: {
      title: 'Apartments & Residential Towers',
      tag: 'High Frequency',
      desc: 'High-frequency waste chute clearance and central dumpster swaps up to 3x weekly, including automated bin sanitization to prevent odors and pests.',
      schedule: '2x to 4x Weekly Chute & Bin Swaps',
      perks: [
        'Bin steam sanitization & odor elimination',
        'Shared chute and service room management',
        'Clean hallway & loading area guarantee',
        'Direct property manager dispatch line',
      ],
    },
  };

  const circularStreams = [
    {
      id: 0,
      title: 'Plastics & Polymers',
      tag: 'STREAM 01',
      purity: '98.6% Purity',
      icon: Recycle,
      headline: 'Near-Infrared Optical Sorting & Flaking',
      desc: 'Rigid PET beverage bottles and HDPE jugs are identified in milliseconds, washed, flaked, and pelletized into Grade-A circular resin for domestic packaging.',
      metric: '28,000+ tons recovered',
    },
    {
      id: 1,
      title: 'Corrugated Paper & Pulp',
      tag: 'STREAM 02',
      purity: 'High-Density Baling',
      icon: Box,
      headline: 'Industrial Baling & Direct Mill Supply',
      desc: 'Cardboard shipping cartons and industrial packaging are baled at our Ring Road hub and routed directly into domestic paper mills for new box manufacturing.',
      metric: '18,500+ tons baled',
    },
    {
      id: 2,
      title: 'Organic Bio-Compost',
      tag: 'STREAM 03',
      purity: '100% Chemical-Free',
      icon: Leaf,
      headline: 'Controlled Aerobic Digestion & Soil Pellets',
      desc: 'Hotel food scraps and agricultural residues undergo 45-day controlled aerobic composting, yielding nutrient-rich organic bio-fertilizer pellets for Ghanaian soil.',
      metric: '42,000+ tons bio-compost',
    },
    {
      id: 3,
      title: 'Refuse-Derived Fuel (RDF)',
      tag: 'STREAM 04',
      purity: 'High Caloric Value',
      icon: Flame,
      headline: 'Engineered Fuel Displacing Fossil Coal',
      desc: 'Non-recyclable high-caloric fractions are dried and shredded into dense industrial fuel pellets for local cement kilns, ensuring 0% waste reaches the Gulf of Guinea.',
      metric: '100% zero-waterway guarantee',
    },
  ];

  const specializedServices = [
    {
      title: 'Regulated Bio-Medical Waste',
      icon: Stethoscope,
      badge: 'Healthcare Protocol',
      desc: 'Certified high-temperature incineration, autoclaving, and EPA-manifested chain-of-custody sweeps for diagnostic labs, clinics, and hospitals.',
      sla: 'Daily certified collection sweeps',
    },
    {
      title: 'Confidential Document Shredding',
      icon: FileCheck,
      badge: 'Certified Destruction',
      desc: 'On-site cross-cut shredding consoles with issued certificates of destruction for corporate headquarters, banks, law firms, and embassies.',
      sla: 'Tamper-evident security consoles',
    },
    {
      title: 'Event & Festival Rapid Sanitation',
      icon: Calendar,
      badge: 'Zero-Litter Events',
      desc: 'Mobile waste stations, dedicated roving ground crews, and rapid overnight site restoration for concerts, sporting events, and corporate exhibitions.',
      sla: '24/7 on-site event crew',
    },
    {
      title: 'Emergency Industrial Clearout',
      icon: Truck,
      badge: '<60 Min Response',
      desc: 'Rapid containment and roll-off deployment for warehouse water damage, factory scrap accumulation, or immediate road obstruction clearouts.',
      sla: 'Under 60-minute emergency dispatch',
    },
  ];

  const currentSector = commercialSectors[commercialTab];
  const currentContainer = containerSpecs[containerOption];
  const currentResidential = residentialTiers[residentialTier];
  const currentStream = circularStreams[activeStream];

  return (
    <div className="w-full bg-white text-text-primary">
      
      {/* 1. HERO HEADER: Crystal Clear Value Proposition & Metric Dock */}
      <section id="solutions" className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white border-b border-border-hairline scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            {/* Breadcrumb Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-50 border border-border-subtle text-xs font-medium text-neutral-800 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#80B86B]"></span>
              <span className="font-heading font-medium tracking-wide">02. Solutions &amp; Services</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-obsidian-pure tracking-tight leading-[1.14] mb-4">
              Waste Collection On Time. <br className="hidden sm:inline" />
              <span className="text-neutral-500">At Your Convenience.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed font-normal mb-6">
              Punctual, zero-stress pickup schedules for businesses, factories, and residences across Greater Accra. 
              <strong className="text-obsidian-pure font-medium"> What sets us apart: </strong> 
              we recycle raw materials and process organic waste into bio-products.
            </p>

            {/* Key SLA Metric Dock - Compact Single Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-xl border border-border-subtle bg-neutral-50/60">
                <div className="text-xl font-heading font-normal text-obsidian-pure flex items-baseline space-x-1">
                  <span>99.4</span>
                  <span className="text-xs text-[#80B86B] font-semibold">%</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">On-Time SLA</div>
              </div>

              <div className="p-3 rounded-xl border border-border-subtle bg-neutral-50/60">
                <div className="text-xl font-heading font-normal text-obsidian-pure flex items-baseline space-x-1">
                  <span>&lt;120</span>
                  <span className="text-xs text-[#80B86B] font-semibold">min</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Emergency Roll-Off</div>
              </div>

              <div className="p-3 rounded-xl border border-border-subtle bg-neutral-50/60">
                <div className="text-xl font-heading font-normal text-obsidian-pure flex items-baseline space-x-1">
                  <span>78</span>
                  <span className="text-xs text-[#80B86B] font-semibold">%</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Recycled &amp; Bio-Yield</div>
              </div>

              <div className="p-3 rounded-xl border border-border-subtle bg-neutral-50/60">
                <div className="text-xl font-heading font-normal text-[#80B86B] flex items-baseline space-x-1">
                  <span>EPA</span>
                  <span className="text-xs text-neutral-600 font-normal">#4091</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Compliance Certified</div>
              </div>
            </div>

          </div>

          {/* Jump-To Pills Navigation */}
          <div className="mt-8 pt-5 border-t border-border-hairline flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mr-1.5">Jump To:</span>
            
            <button
              onClick={() => scrollToSection('commercial-industrial', 'commercial')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center space-x-1.5 ${
                activeCategoryFilter === 'commercial'
                  ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-xs'
                  : 'border-border-subtle bg-white hover:bg-neutral-50 text-neutral-700 hover:border-neutral-400'
              }`}
            >
              <Building2 size={13} className={activeCategoryFilter === 'commercial' ? 'text-white' : 'text-[#80B86B]'} />
              <span>Commercial &amp; Industrial</span>
            </button>

            <button
              onClick={() => scrollToSection('residential-estate', 'residential')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center space-x-1.5 ${
                activeCategoryFilter === 'residential'
                  ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-xs'
                  : 'border-border-subtle bg-white hover:bg-neutral-50 text-neutral-700 hover:border-neutral-400'
              }`}
            >
              <Home size={13} className={activeCategoryFilter === 'residential' ? 'text-white' : 'text-[#80B86B]'} />
              <span>Residential &amp; Estates</span>
            </button>

            <button
              onClick={() => scrollToSection('recycling-facility', 'recycling')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center space-x-1.5 ${
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
              className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-border-subtle bg-white hover:bg-neutral-50 text-neutral-700 hover:border-neutral-400 transition-all flex items-center space-x-1.5"
            >
              <Sparkles size={13} className="text-[#80B86B]" />
              <span>Yield Simulator</span>
            </button>
          </div>

        </div>
      </section>


      {/* 2. SECTION 1: COMMERCIAL & INDUSTRIAL (Interactive Command Cockpit) */}
      <section id="commercial-industrial" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        
        {/* Section Title & Sector Switcher Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 text-xs font-medium text-neutral-800 mb-2">
              <Building2 size={12} className="text-[#80B86B]" />
              <span>Enterprise &amp; Industrial Operations</span>
            </div>
            <h2 className="font-heading font-normal text-2xl sm:text-3xl text-obsidian-pure tracking-tight">
              Commercial &amp; Industrial Pickups
            </h2>
          </div>

          {/* Industry Pills Selector */}
          <div className="flex flex-wrap gap-1.5 bg-neutral-50 p-1.5 rounded-2xl border border-border-subtle">
            {(Object.keys(commercialSectors) as Array<keyof typeof commercialSectors>).map((key) => {
              const sec = commercialSectors[key];
              const Icon = sec.icon;
              const isActive = commercialTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setCommercialTab(key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-obsidian-pure text-white shadow-xs'
                      : 'text-neutral-600 hover:text-obsidian-pure hover:bg-white/70'
                  }`}
                >
                  <Icon size={13} className={isActive ? 'text-[#80B86B]' : 'text-neutral-400'} />
                  <span>{sec.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Unified Cockpit: Visual Container Hub + Sector Specification (No extra stacked cards below!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Side: Visual Interactive Image with Container Specs Drawer (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border-subtle shadow-subtle relative min-h-[420px] flex flex-col justify-between p-5 sm:p-7 group bg-neutral-900">
            <img 
              src={commercialPickupImg} 
              alt="TERRAFORM Commercial & Industrial Collection Truck" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20" />
            
            {/* Top Operational Pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center space-x-1.5">
                <MapPin size={12} className="text-[#80B86B]" />
                <span>Tema &amp; Accra Industrial Fleet Active</span>
              </span>
              <span className="text-[11px] text-[#80B86B] font-semibold uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded">
                EPA #GH-WM-4091
              </span>
            </div>

            {/* Bottom Embedded Container Switcher & Spec Card */}
            <div className="relative z-10 space-y-3 pt-6">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300">
                  Select Container Spec:
                </span>
                <div className="flex bg-black/50 backdrop-blur-md p-1 rounded-lg border border-white/15">
                  <button
                    onClick={() => setContainerOption('wheelie')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-all ${
                      containerOption === 'wheelie' ? 'bg-[#80B86B] text-obsidian-pure font-bold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    Wheelies (240–1100L)
                  </button>
                  <button
                    onClick={() => setContainerOption('compactor')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-all ${
                      containerOption === 'compactor' ? 'bg-[#80B86B] text-obsidian-pure font-bold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    Compactors
                  </button>
                  <button
                    onClick={() => setContainerOption('rolloff')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-all ${
                      containerOption === 'rolloff' ? 'bg-[#80B86B] text-obsidian-pure font-bold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    Roll-Off Skips
                  </button>
                </div>
              </div>

              {/* Live Container Detail Pill Dock */}
              <div className="p-3.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs space-y-1">
                <div className="font-semibold text-white text-sm flex items-center justify-between">
                  <span>{currentContainer.title}</span>
                  <span className="text-[#80B86B] text-xs font-normal">{currentContainer.capacity}</span>
                </div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {currentContainer.desc}
                </p>
                <div className="text-[10px] text-neutral-400 pt-1 flex items-center space-x-1">
                  <Clock size={11} className="text-[#80B86B]" />
                  <span>{currentContainer.schedule}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Active Sector Operational Specifications (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-50/80 rounded-2xl p-6 sm:p-7 border border-border-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Sector Profile
                </span>
                <h3 className="font-heading font-medium text-xl text-obsidian-pure mt-0.5">
                  {currentSector.name}
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {currentSector.subtitle}
                </p>
              </div>

              {/* Cadence & SLA Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-2.5 rounded-xl bg-white border border-border-subtle">
                  <div className="text-[10px] text-neutral-400 uppercase font-semibold">Cadence:</div>
                  <div className="font-medium text-obsidian-pure mt-0.5">{currentSector.cadence}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-border-subtle">
                  <div className="text-[10px] text-neutral-400 uppercase font-semibold">Arrival SLA:</div>
                  <div className="font-semibold text-[#80B86B] mt-0.5">{currentSector.sla}</div>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Key Deliverables:
                </div>
                {currentSector.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-neutral-700">
                    <CheckCircle2 size={13} className="text-[#80B86B] mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Request Action */}
            <div className="pt-5 mt-4 border-t border-border-subtle flex items-center justify-between">
              <span className="text-[11px] text-neutral-500 font-medium">
                {currentSector.compliance}
              </span>
              <button
                onClick={() => onNavigate('request')}
                className="px-4 py-2 rounded-full bg-obsidian-pure text-white text-xs font-medium hover:bg-neutral-800 transition-all flex items-center space-x-1.5 shadow-sm"
              >
                <span>Request Setup</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>

        </div>

      </section>


      {/* 3. SECTION 2: RESIDENTIAL & ESTATE BINS (Interactive Community Tier Explorer) */}
      <section id="residential-estate" className="py-12 sm:py-16 bg-neutral-50/60 border-t border-b border-border-hairline scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-7">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white border border-border-subtle text-xs font-medium text-neutral-800 mb-2">
              <Home size={12} className="text-[#80B86B]" />
              <span>Communities &amp; Neighborhoods</span>
            </div>
            <h2 className="font-heading font-normal text-2xl sm:text-3xl text-obsidian-pure tracking-tight">
              Residential &amp; Estate Bins
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-600 mt-1">
              Select your community setup below to view guaranteed collection windows, odor-lock bin options, and pickup schedules.
            </p>
          </div>

          {/* Interactive Tier Explorer Grid: 3 Selectable Cards on Left + Dynamic Visual Showcase on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left 3 Tier Switcher Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {(Object.keys(residentialTiers) as Array<keyof typeof residentialTiers>).map((key) => {
                const tier = residentialTiers[key];
                const isActive = residentialTier === key;
                return (
                  <div
                    key={key}
                    onClick={() => setResidentialTier(key)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-white border-obsidian-pure shadow-subtle ring-1 ring-obsidian-pure/10'
                        : 'bg-white/70 border-border-subtle hover:border-neutral-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-heading font-medium text-base text-obsidian-pure">
                        {tier.title}
                      </h4>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-[#80B86B] text-obsidian-pure' : 'bg-neutral-100 text-neutral-500'
                      }`}>
                        {tier.tag}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                      {tier.desc}
                    </p>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-border-hairline text-neutral-500">
                      <span>{tier.schedule}</span>
                      <ChevronRight size={13} className={isActive ? 'text-[#80B86B]' : 'text-neutral-400'} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Visual Live Preview Showcase (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border-subtle bg-white p-5 sm:p-7 shadow-xs flex flex-col justify-between">
              
              {/* Top Photo Strip */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-xl overflow-hidden h-36 relative border border-border-subtle">
                  <img 
                    src={residentialEstateImg} 
                    alt="Neat residential bins along sidewalk" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[10px]">
                    Curbside Wheelie Standard
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden h-36 relative border border-border-subtle">
                  <img 
                    src={smartInfraImg} 
                    alt="Smart Fleet Telemetry" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[10px]">
                    Accra Fleet GPS Telemetry
                  </div>
                </div>
              </div>

              {/* Active Tier Highlights */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-medium text-lg text-obsidian-pure">
                    {currentResidential.title} — Service Standards
                  </h3>
                  <span className="text-xs font-semibold text-[#80B86B] bg-[#80B86B]/10 px-2.5 py-0.5 rounded-full">
                    Active Specification
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentResidential.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-1.5 text-neutral-700">
                      <CheckCircle2 size={13} className="text-[#80B86B] mt-0.5 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Conversion Row */}
              <div className="pt-4 mt-4 border-t border-border-hairline flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs text-neutral-500">
                  <ShieldCheck size={14} className="text-[#80B86B]" />
                  <span>Clean Street &amp; No-Spill Guarantee</span>
                </div>
                <button
                  onClick={() => onNavigate('request')}
                  className="px-4 py-2 rounded-full bg-obsidian-pure text-white text-xs font-medium hover:bg-neutral-800 transition-all flex items-center space-x-1"
                >
                  <span>Register Community</span>
                  <ArrowRight size={12} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 4. SECTION 3: RECYCLING & CIRCULAR DIVERSION (Interactive 4-Stream Pipeline) */}
      <section id="recycling-facility" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        
        <div className="max-w-3xl mb-7">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 text-xs font-medium text-neutral-800 mb-2">
            <Recycle size={12} className="text-[#80B86B]" />
            <span>The Circular Bonus &bull; The Icing On The Cake</span>
          </div>
          <h2 className="font-heading font-normal text-2xl sm:text-3xl text-obsidian-pure tracking-tight">
            Transforming Waste Into Recycled Feedstock &amp; Bio-Products
          </h2>
          <p className="font-body text-xs sm:text-sm text-neutral-600 mt-1">
            Every ton picked up is prioritized for high-yield material recovery and organic bio-processing rather than rotting in landfills. Click each circular stream below to explore the loop:
          </p>
        </div>

        {/* 4-Step Interactive Pipeline Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-7">
          {circularStreams.map((stream, sIdx) => {
            const Icon = stream.icon;
            const isActive = activeStream === sIdx;
            return (
              <button
                key={stream.id}
                onClick={() => setActiveStream(sIdx)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-obsidian-pure text-white border-obsidian-pure shadow-sm ring-1 ring-white/10'
                    : 'bg-white text-neutral-700 border-border-subtle hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold tracking-wider ${isActive ? 'text-[#80B86B]' : 'text-neutral-400'}`}>
                    {stream.tag}
                  </span>
                  <Icon size={14} className={isActive ? 'text-[#80B86B]' : 'text-neutral-500'} />
                </div>
                <div className="font-heading font-medium text-xs sm:text-sm truncate">
                  {stream.title}
                </div>
                <div className={`text-[10px] mt-0.5 ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {stream.purity}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stream Interactive Showcase (Photo Split + Metrics) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Visual Image Card with live purity metric (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border-subtle relative min-h-[340px] flex flex-col justify-end p-5 sm:p-7 bg-neutral-900 group">
            <img 
              src={recyclingRecoveryImg} 
              alt="Optical sorting and bio-products recovery" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="relative z-10 text-white space-y-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#80B86B] bg-black/50 px-2 py-0.5 rounded">
                Ring Road Material Recovery Facility (MRF)
              </span>
              <h3 className="font-heading font-normal text-xl sm:text-2xl text-white">
                {currentStream.headline}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-lg leading-relaxed">
                {currentStream.desc}
              </p>
            </div>
          </div>

          {/* Side Processing Overview with Conveyor Photo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Conveyor Card */}
            <div className="rounded-2xl border border-border-subtle overflow-hidden bg-white shadow-xs">
              <div className="h-32 w-full relative">
                <img 
                  src={conveyorSortingImg} 
                  alt="Optical sorting conveyor" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white text-[10px]">
                  Near-Infrared Optical Sorting Line
                </div>
              </div>
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between text-xs font-medium text-obsidian-pure">
                  <span>Cumulative Stream Recovery:</span>
                  <span className="text-[#80B86B] font-bold">{currentStream.metric}</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  Certified audit manifests verifying material recirculation into local packaging mills and biological soil restoration.
                </p>
              </div>
            </div>

            {/* Live Diversion Scorecard */}
            <div className="rounded-2xl border border-border-subtle p-4 bg-neutral-50 flex items-center justify-between text-xs">
              <div>
                <div className="text-[10px] uppercase font-semibold text-neutral-400">Total Diversion</div>
                <div className="font-heading font-medium text-base text-obsidian-pure">78% Municipal Rate</div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-semibold text-neutral-400">Waterway Dump</div>
                <div className="font-heading font-medium text-base text-[#80B86B]">0% Zero Guarantee</div>
              </div>
              <button
                onClick={() => scrollToSection('simulator', 'recycling')}
                className="px-3 py-1.5 rounded-full bg-obsidian-pure text-white text-[11px] font-medium hover:bg-neutral-800 transition-all"
              >
                Simulate Yield
              </button>
            </div>

          </div>

        </div>

      </section>


      {/* 5. SECTION 4: INTERACTIVE YIELD SIMULATOR */}
      <section id="simulator" className="py-12 sm:py-16 bg-neutral-50/70 border-t border-b border-border-hairline scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-7">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white border border-border-subtle text-xs font-medium text-neutral-800 mb-2">
              <Sparkles size={12} className="text-[#80B86B]" />
              <span>Interactive Telemetry Model</span>
            </div>
            <h2 className="font-heading font-normal text-2xl sm:text-3xl text-obsidian-pure tracking-tight">
              Simulate Your Diversion Yield &amp; Economic Savings
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-600 mt-1">
              Adjust monthly tonnage and facility type below to see instant diversion forecasts, CO₂ abatement, and hauling savings.
            </p>
          </div>

          {/* Embedded Yield Simulator */}
          <YieldSimulator onNavigate={onNavigate} />

        </div>
      </section>


      {/* 6. SECTION 5: SPECIALIZED & HAZARDOUS WASTE (Compact Accordion Grid) */}
      <section id="specialized-services" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 text-xs font-medium text-neutral-800 mb-2">
              <ShieldCheck size={12} className="text-[#80B86B]" />
              <span>Specialized Protocols &amp; Compliance</span>
            </div>
            <h2 className="font-heading font-normal text-2xl sm:text-3xl text-obsidian-pure tracking-tight">
              Regulated &amp; Specialized Services
            </h2>
          </div>

          <button
            onClick={() => onNavigate('request')}
            className="text-xs font-semibold text-obsidian-pure hover:text-[#80B86B] transition-colors flex items-center space-x-1"
          >
            <span>Consult Environmental Officer</span>
            <ChevronRight size={13} />
          </button>
        </div>

        {/* 4 Compact Interactive Protocol Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {specializedServices.map((service, idx) => {
            const Icon = service.icon;
            const isSelected = activeSpecialized === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveSpecialized(idx)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md ring-1 ring-[#80B86B]'
                    : 'bg-white text-obsidian-pure border-border-subtle hover:border-neutral-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-white/15 text-[#80B86B]' : 'bg-neutral-100 text-obsidian-pure'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#80B86B] text-obsidian-pure' : 'bg-neutral-100 text-neutral-500'
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  <h4 className="font-heading font-medium text-sm sm:text-base mb-1.5">
                    {service.title}
                  </h4>

                  <p className={`text-xs leading-relaxed mb-3 ${
                    isSelected ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {service.desc}
                  </p>
                </div>

                <div className={`pt-2 border-t text-[11px] font-medium flex items-center justify-between ${
                  isSelected ? 'border-white/15 text-[#80B86B]' : 'border-border-hairline text-neutral-400'
                }`}>
                  <span>{service.sla}</span>
                  <ChevronRight size={12} />
                </div>
              </div>
            );
          })}
        </div>

      </section>


      {/* 7. BOTTOM CONVERSION ACTION DOCK */}
      <section className="py-12 sm:py-14 bg-obsidian-pure text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#80B86B]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-white/10 text-xs font-medium text-[#80B86B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#80B86B]"></span>
              <span>Ready for Punctual Waste Pickups?</span>
            </div>

            <h2 className="font-heading font-normal text-2xl sm:text-3xl text-white tracking-tight">
              Collection Built Around Your Schedule.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg">
              Contact our Accra &amp; Tema fleet dispatch team to configure scheduled pickups for your business, estate, or home.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('request')}
              className="px-5 py-2.5 rounded-full bg-white text-obsidian-pure text-xs sm:text-sm font-semibold hover:bg-neutral-100 transition-all flex items-center space-x-2 shadow-md"
            >
              <span>Book a Pickup</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => scrollToSection('simulator', 'recycling')}
              className="px-4 py-2.5 rounded-full bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-medium hover:bg-white/15 transition-all"
            >
              Simulate Yield
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

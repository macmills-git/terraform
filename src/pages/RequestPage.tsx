import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  Trash2, 
  Building, 
  Handshake, 
  FileText, 
  Calendar, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Check,
  Leaf,
  Clock
} from 'lucide-react';

interface RequestPageProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

type FormCategory = 'collection' | 'quotation' | 'partnership' | 'consultation';

export const RequestPage: React.FC<RequestPageProps> = () => {
  const [activeForm, setActiveForm] = useState<FormCategory>('collection');
  const [submitted, setSubmitted] = useState(false);
  const [district, setDistrict] = useState('accra-metro');
  const [facilityType, setFacilityType] = useState('commercial');
  const [frequency, setFrequency] = useState('bi-weekly');
  const [containerSize, setContainerSize] = useState('240l');

  // Waste category selection state
  const [selectedWasteCategories, setSelectedWasteCategories] = useState<string[]>([
    'Rigid Polymers (HDPE, PET)',
    'Cardboard & Pulp Packaging',
  ]);

  const wasteTypes = [
    'Rigid Polymers (HDPE, PET)',
    'Flexible Film Plastics',
    'Cardboard & Pulp Packaging',
    'Organic & Food Residuals',
    'Electronic & Electrical (E-waste)',
    'Metals & Aluminum Cans',
    'Industrial Scrap & Manufacturing Residuals',
    'Construction / Debris Waste',
  ];

  const districtHints: Record<string, { code: string; hub: string }> = {
    'accra-metro': { code: 'GA-183-4920 (Ring Road / Ridge / Osu)', hub: 'Accra Central Hub' },
    'tema-industrial': { code: 'GT-042-8812 (Harbour Road / Heavy Industrial)', hub: 'Tema Industrial Fleet Station' },
    'adenta': { code: 'GD-210-3341 (Boundary Road / East Legon / ARS)', hub: 'Adenta North Sorting MRF' },
    'kasoa': { code: 'GS-092-1104 (Bortianor / Barrier Logistics)', hub: 'Kasoa Corridor Processing Hub' },
    'osu-cantonments': { code: 'GL-014-2209 (Airport Residential / Cantonments)', hub: 'Accra Central Hub' },
    'spintex': { code: 'GZ-119-5520 (Flowerpot / Manet Commercial)', hub: 'Spintex Regional Fleet Station' },
  };

  const toggleCategory = (cat: string) => {
    if (selectedWasteCategories.includes(cat)) {
      if (selectedWasteCategories.length > 1) {
        setSelectedWasteCategories(selectedWasteCategories.filter((c) => c !== cat));
      }
    } else {
      setSelectedWasteCategories([...selectedWasteCategories, cat]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white">
      {/* Form Container - Direct to Forms */}
      <section id="request" className="pt-8 sm:pt-12 md:pt-14 pb-16 md:pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        
        {/* Switcher Pill Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button
            onClick={() => { setActiveForm('collection'); setSubmitted(false); }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-2 border ${
              activeForm === 'collection'
                ? 'bg-[#80B86B] text-white border-[#80B86B] shadow-sm'
                : 'bg-white text-neutral-700 border-border-subtle hover:border-neutral-400'
            }`}
          >
            <Trash2 size={15} />
            <span>Waste Collection Request</span>
          </button>

          <button
            onClick={() => { setActiveForm('quotation'); setSubmitted(false); }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-2 border ${
              activeForm === 'quotation'
                ? 'bg-[#80B86B] text-white border-[#80B86B] shadow-sm'
                : 'bg-white text-neutral-700 border-border-subtle hover:border-neutral-400'
            }`}
          >
            <Building size={15} />
            <span>Business Quotation</span>
          </button>

          <button
            onClick={() => { setActiveForm('partnership'); setSubmitted(false); }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-2 border ${
              activeForm === 'partnership'
                ? 'bg-[#80B86B] text-white border-[#80B86B] shadow-sm'
                : 'bg-white text-neutral-700 border-border-subtle hover:border-neutral-400'
            }`}
          >
            <Handshake size={15} />
            <span>Partnership Application</span>
          </button>

          <button
            onClick={() => { setActiveForm('consultation'); setSubmitted(false); }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-2 border ${
              activeForm === 'consultation'
                ? 'bg-[#80B86B] text-white border-[#80B86B] shadow-sm'
                : 'bg-white text-neutral-700 border-border-subtle hover:border-neutral-400'
            }`}
          >
            <FileText size={15} />
            <span>Consultation &amp; Audit</span>
          </button>
        </div>

        {/* Success Confirmation Card */}
        {submitted ? (
          <div className="bg-white rounded-hero p-8 sm:p-14 border border-border-subtle text-center max-w-2xl mx-auto shadow-elevated">
            <div className="w-16 h-16 rounded-full bg-emerald-status text-white flex items-center justify-center mx-auto mb-6 shadow-md">
              <Check size={32} className="stroke-[3]" />
            </div>

            <h3 className="font-heading font-normal text-2xl sm:text-3xl text-obsidian-pure mb-4 tracking-tight">
              Request Dispatched to Fleet Dispatch
            </h3>

            <p className="font-body text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Thank you. Your inquiry has been routed to our {districtHints[district]?.hub || 'Central Accra Hub'}. A certified logistics officer will verify coordinate telemetry and container placement within 2 operational hours.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-border-subtle text-xs text-neutral-600 max-w-md mx-auto mb-8 text-left space-y-2">
              <div className="flex justify-between border-b border-border-hairline pb-2">
                <span>Reference Ticket:</span>
                <span className="font-mono font-bold text-obsidian-pure">#TRF-GH-2026-{(Math.floor(Math.random() * 90000) + 10000)}</span>
              </div>
              <div className="flex justify-between border-b border-border-hairline pb-2">
                <span>Operational Hub:</span>
                <span className="font-semibold text-obsidian-pure">{districtHints[district]?.hub}</span>
              </div>
              <div className="flex justify-between border-b border-border-hairline pb-2">
                <span>Selected Fractions:</span>
                <span className="font-semibold text-obsidian-pure">{selectedWasteCategories.length} Streams</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-emerald-status font-bold flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-dot animate-pulse"></span>
                  <span>Active In Dispatch Queue</span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-full bg-obsidian-pure text-white text-xs sm:text-sm font-medium hover:bg-neutral-900 transition-all shadow-sm"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          /* Form Content Card */
          <div className="bg-white rounded-hero p-8 sm:p-12 border border-border-subtle shadow-subtle">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Form Category Header */}
              <div className="border-b border-border-hairline pb-6">
                <h2 className="font-heading font-normal text-2xl sm:text-3xl text-obsidian-pure tracking-tight">
                  {activeForm === 'collection' && 'Schedule Waste Collection'}
                  {activeForm === 'quotation' && 'Request Enterprise Quotation'}
                  {activeForm === 'partnership' && 'Apply for Circular Partnership'}
                  {activeForm === 'consultation' && 'Book Waste Characterization Audit'}
                </h2>
                <p className="font-body text-sm text-neutral-500 mt-1">
                  Fill in your details below for instantaneous dispatch assignment and certified handling.
                </p>
              </div>

              {/* 1. Waste Category Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    Select Applicable Waste Categories ({selectedWasteCategories.length} selected)
                  </label>
                  <span className="text-xs text-neutral-400">Click to toggle</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {wasteTypes.map((cat) => {
                    const isChecked = selectedWasteCategories.includes(cat);
                    return (
                      <div
                        key={cat}
                        onClick={() => toggleCategory(cat)}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-between ${
                          isChecked
                            ? 'border-obsidian-pure bg-neutral-50 font-medium text-obsidian-pure'
                            : 'border-border-subtle text-neutral-600 hover:border-neutral-400'
                        }`}
                      >
                        <span>{cat}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-obsidian-pure border-obsidian-pure text-white' : 'border-neutral-300'
                        }`}>
                          {isChecked && <Check size={10} className="stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Facility & Client Sector Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                  Client / Facility Sector
                </label>
                <select
                  value={facilityType}
                  onChange={(e) => setFacilityType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-obsidian-pure focus:outline-none text-sm transition-colors bg-white"
                >
                  <option value="industrial">Manufacturing &amp; Industrial Plant</option>
                  <option value="commercial">Corporate Office &amp; Business Park</option>
                  <option value="hospitality">Hotel, Resort &amp; Hospitality Facility</option>
                  <option value="healthcare">Hospital, Clinic &amp; Medical Center</option>
                  <option value="residential">Residential Estate &amp; Private Home</option>
                  <option value="institution">School, University &amp; Event Center</option>
                </select>
              </div>

              {/* Container Size & Frequency Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Container or Hauling Capacity
                  </label>
                  <select
                    value={containerSize}
                    onChange={(e) => setContainerSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-obsidian-pure focus:outline-none text-sm transition-colors bg-white"
                  >
                    <option value="240l">Residential Smart Bin (240 Liters)</option>
                    <option value="1100l">Commercial Wheelie Dumpster (1,100 Liters)</option>
                    <option value="10yd">Industrial Skip Container (10 Cubic Yards)</option>
                    <option value="20yd">Heavy Roll-Off Container (20 Cubic Yards)</option>
                    <option value="30yd">Manufacturing Compactor (30 Cubic Yards)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Collection Cadence / Frequency
                  </label>
                  <div className="flex gap-2">
                    {[
                      { id: 'bi-weekly', label: 'Bi-Weekly' },
                      { id: 'weekly', label: 'Weekly' },
                      { id: 'on-demand', label: 'On-Demand' },
                    ].map((f) => (
                      <button
                        type="button"
                        key={f.id}
                        onClick={() => setFrequency(f.id)}
                        className={`flex-1 py-3 text-xs sm:text-[13px] rounded-xl font-medium border transition-all ${
                          frequency === f.id
                            ? 'bg-[#80B86B] text-white border-[#80B86B] shadow-xs'
                            : 'bg-white text-neutral-700 border-border-subtle hover:border-neutral-400'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Contact & Address Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-border-hairline">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Full Name or Entity Lead
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Kwame Mensah"
                    className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-obsidian-pure focus:outline-none text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Work Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="kwame@enterprise.com.gh"
                    className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-obsidian-pure focus:outline-none text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Phone / WhatsApp Contact
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+233 (0) 24 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-obsidian-pure focus:outline-none text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Operational District (Greater Accra)
                  </label>
                  <select
                    required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-obsidian-pure focus:outline-none text-sm transition-colors bg-white"
                  >
                    <option value="accra-metro">Accra Metropolitan (AMA)</option>
                    <option value="tema-industrial">Tema Heavy Industrial Area</option>
                    <option value="adenta">Adenta / East Legon Corridor</option>
                    <option value="kasoa">Ga South / Kasoa Corridor</option>
                    <option value="osu-cantonments">Osu / Cantonments / Airport</option>
                    <option value="spintex">Spintex Road Logistics Zone</option>
                  </select>
                </div>
              </div>

              {/* 3. Collection Date & Physical Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Target Start / Collection Date
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="date"
                      defaultValue="2026-11-15"
                      className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-obsidian-pure focus:outline-none text-sm transition-colors bg-white"
                    />
                    <Calendar size={16} className="absolute right-4 top-3.5 text-neutral-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Physical Address & GPS Digital Post Code
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder={districtHints[district]?.code || 'e.g. GA-183-4920'}
                      className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-obsidian-pure focus:outline-none text-sm transition-colors"
                    />
                    <MapPin size={16} className="absolute right-4 top-3.5 text-neutral-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Environmental Telemetry Estimate Banner */}
              <div className="p-4 rounded-xl bg-white border border-border-subtle shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center space-x-2 text-neutral-700">
                  <Leaf size={16} className="text-emerald-status" />
                  <span>
                    Assigned: <strong>{districtHints[district]?.hub}</strong> · Estimated CO₂e Abatement: <strong>~3.8 Tons / month</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-neutral-500">
                  <Clock size={14} />
                  <span>2-Hour Telemetry Response SLA</span>
                </div>
              </div>

              {/* 4. Additional Scope Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                  Special Operational Requirements & Site Access
                </label>
                <textarea
                  rows={3}
                  placeholder="Note any gated access codes, loading bay dock heights, hazardous materials, or specific billing cycles..."
                  className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-obsidian-pure focus:outline-none text-sm transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-neutral-500">
                  <ShieldCheck size={16} className="text-emerald-status" />
                  <span>EPA Ghana & ISO 14001 Compliant Secure Chain of Custody</span>
                </div>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full bg-obsidian-pure text-white text-sm font-medium transition-all duration-300 hover:bg-neutral-900 hover:scale-[1.02] shadow-md"
                >
                  <span>Submit Operational Request</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          </div>
        )}

      </section>
    </div>
  );
};

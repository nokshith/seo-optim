import { useState } from "react";

const DAVINCI_FEATURES = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#FF7A00" strokeWidth="2"/><path d="M16 8v8l6 3" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Real-Time Event-Driven Integration",
    desc: "Syncs data instantly using real-time events, with no delays.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="14" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="14" y="4" width="4" height="24" rx="2" fill="#FF7A00"/></svg>
    ),
    title: "Open Connector, Zero Lock-In",
    desc: "Connects easily without middleware, with full flexibility.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#FF7A00" strokeWidth="2"/><circle cx="16" cy="16" r="5" stroke="#FF7A00" strokeWidth="2"/></svg>
    ),
    title: "Full Object Traceability",
    desc: "Tracks everything—orders, events, and costs end to end.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="24" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="4" y="4" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="4" y="14" width="24" height="4" rx="2" fill="#FF7A00"/></svg>
    ),
    title: "Template-Based Reusable Logic",
    desc: "Uses ready templates, cutting down on custom code and time.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="24" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="4" y="4" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="4" y="14" width="24" height="4" rx="2" fill="#FF7A00"/></svg>
    ),
    title: "Real-Time Orchestration with Dynamic Recovery",
    desc: "Manages workflows live and fixes issues automatically.",
  },
];

const COMPETITOR_FEATURES = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#FF7A00" strokeWidth="2"/><path d="M16 8v8l6 3" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Batch-Based Sync",
    desc: "Data syncs in scheduled batches, causing delays.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="14" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="14" y="4" width="4" height="24" rx="2" fill="#FF7A00"/></svg>
    ),
    title: "Proprietary Connectors",
    desc: "Requires middleware or vendor-specific connectors.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#FF7A00" strokeWidth="2"/><circle cx="16" cy="16" r="5" stroke="#FF7A00" strokeWidth="2"/></svg>
    ),
    title: "Limited Traceability",
    desc: "Partial tracking, often missing end-to-end visibility.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="24" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="4" y="4" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="4" y="14" width="24" height="4" rx="2" fill="#FF7A00"/></svg>
    ),
    title: "Custom Code for Every Use Case",
    desc: "Requires custom code for each new workflow.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="24" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="4" y="4" width="24" height="4" rx="2" fill="#FF7A00"/><rect x="4" y="14" width="24" height="4" rx="2" fill="#FF7A00"/></svg>
    ),
    title: "Manual Recovery",
    desc: "Workflow issues require manual intervention.",
  },
];

export default function DaVinciDifferenceFigma() {
  const [active, setActive] = useState<'davinci' | 'competitor'>('davinci');
  const features = active === 'davinci' ? DAVINCI_FEATURES : COMPETITOR_FEATURES;

  return (
    <section className="w-full bg-[#f6f7f8] py-16 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8">The Davinci Difference</h2>
      <div className="flex justify-center mb-10 w-full max-w-xl">
        <button
          className={`flex-1 py-3 rounded-full text-lg font-semibold transition-all ${active === 'davinci' ? 'bg-orange-500 text-white shadow' : 'bg-white text-orange-500 border border-orange-500'} mr-2`}
          onClick={() => setActive('davinci')}
        >
          Davinci Smart
        </button>
        <button
          className={`flex-1 py-3 rounded-full text-lg font-semibold transition-all ${active === 'competitor' ? 'bg-orange-100 text-orange-500 shadow' : 'bg-white text-orange-500 border border-orange-200'} ml-2`}
          onClick={() => setActive('competitor')}
        >
          Competitor MES
        </button>
      </div>
      <div className="w-full max-w-3xl space-y-4 mb-12">
        {features.map((f, i) => (
          <div key={i} className="flex items-center bg-white rounded-xl shadow p-6 gap-6 border border-gray-100">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">{f.icon}</div>
            <div>
              <div className="font-bold text-lg text-gray-900 mb-1">{f.title}</div>
              <div className="text-gray-500 text-sm md:text-base">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl text-center mt-10">
        <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">Let Your Furnace Think. Let Your Factory Breathe.</h3>
        <p className="text-gray-500 mb-6">Ignis AI turns heat into thought, and thought into action. It is not an upgrade — it is a transformation.</p>
        <button
          className="px-6 py-2 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-900 hover:text-white transition-all"
          onClick={() => window.open('/book-demo', '_blank')}
        >
          Book a Demo
        </button>
      </div>
    </section>
  );
} 
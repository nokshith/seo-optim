'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DaVinciDifference() {
  const [active, setActive] = useState('davinci');

  const davinciFeatures = [
    {
      icon: '/icons/integration-icon.png',
      title: 'Real-Time Event-Driven Integration',
      desc: 'Syncs data instantly using real-time events, with no delays.',
    },
    {
      icon: '/icons/connector-icon.png',
      title: 'Open Connector, Zero Lock-in',
      desc: 'Connects easily without middleware, with full flexibility.',
    },
    {
      icon: '/icons/trace-icon.png',
      title: 'Full Object Traceability',
      desc: 'Tracks everything — orders, events, and costs — end to end.',
    },
    {
      icon: '/icons/template-icon.png',
      title: 'Template-Based Reusable Logic',
      desc: 'Uses ready templates, cutting down on custom code and time.',
    },
    {
      icon: '/icons/recovery-icon.png',
      title: 'Real-Time Orchestration with Dynamic Recovery',
      desc: 'Manages workflows live and fixes issues automatically.',
    },
  ];

  const competitorFeatures = [
    {
      icon: '/icons/integration-icon.png',
      title: 'Batch-Based Integration',
      desc: 'Data updates happen in scheduled batches, causing delays.',
    },
    {
      icon: '/icons/connector-icon.png',
      title: 'Proprietary Middleware Lock-in',
      desc: 'Requires vendor middleware, limiting flexibility.',
    },
    {
      icon: '/icons/trace-icon.png',
      title: 'Limited Traceability',
      desc: 'Tracks only basic events and lacks end-to-end visibility.',
    },
    {
      icon: '/icons/template-icon.png',
      title: 'Custom Development Heavy',
      desc: 'Requires extensive coding for logic reuse.',
    },
    {
      icon: '/icons/recovery-icon.png',
      title: 'Manual Workflow Recovery',
      desc: 'Issues must be resolved manually, increasing downtime.',
    },
  ];

  const featuresToShow = active === 'davinci' ? davinciFeatures : competitorFeatures;

  return (
    <section className="max-w-[1055px] w-full bg-white mx-auto pt-10 px-6">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-center text-[#001F5C] mb-8">
        The Davinci Difference
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-12">
        <button
          onClick={() => setActive('davinci')}
          className={`rounded-full px-6 py-4 text-white font-medium transition-all w-[237px] h-[74px] ${
            active === 'davinci'
              ? 'bg-[#f25c05]'
              : 'bg-[#e0e0e0] text-gray-700'
          }`}
        >
          Davinci Smart
        </button>
        <button
          onClick={() => setActive('competitor')}
          className={`rounded-full px-6 py-4 font-medium transition-all w-[237px] h-[74px] ${
            active === 'competitor'
              ? 'bg-[#f25c05] text-white'
              : 'bg-[#e0e0e0] text-gray-700'
          }`}
        >
          Competitor MES
        </button>
      </div>

      {/* Feature List */}
      <div className="space-y-6">
        {featuresToShow.map((feature, index) => (
          <div
            key={index}
            className="flex items-start bg-gray-50 w-full h-[118px] rounded-md px-[75px] py-2 gap-[73px]"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={32}
              height={32}
            />
            <div>
              <h4 className="font-bold text-[#001F5C]">{feature.title}</h4>
              <p className="text-gray-700 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

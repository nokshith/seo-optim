"use client";

import { useState } from "react";
import Image from "next/image";

const davinciFeatures = [
  {
    icon: "/images/mdi_solar-power.png",
    title: "Real-Time Event-Driven Integration",
    description: "Syncs data instantly using real-time events, with no delays.",
  },
  {
    icon: "/images/mdi_solar-power (1).png",
    title: "Open Connector, Zero Lock-In",
    description: "Connects easily without middleware, with full flexibility.",
  },
  {
    icon: "/images/mdi_solar-power (2).png",
    title: "Full Object Traceability",
    description: "Tracks everything orders, events, and costs end to end.",
  },
  {
    icon: "/images/mdi_solar-power (3).png",
    title: "Template-Based Reusable Logic",
    description: "Uses ready templates, cutting down on custom code and time.",
  },
  {
    icon: "/images/mdi_solar-power (4).png",
    title: "Real-Time Orchestration with Dynamic Recovery",
    description: "Manages workflows live and fixes issues automatically.",
  },
];

const competitorFeatures = [
  {
    icon: "/images/mdi_solar-power (6).png",
    title: "Batch-Based Data Sync",
    description: "Data syncing is delayed, causing slow decisions and inefficiency.",
  },
  {
    icon: "/images/mdi_solar-power (7).png",
    title: "Vendor Lock-In",
    description: "Limited flexibility and difficult to integrate with other systems.",
  },
  {
    icon: "/images/mdi_solar-power (8).png",
    title: "Limited Traceability",
    description: "Only tracks part of the process — gaps in data flow.",
  },
  {
    icon: "/images/mdi_solar-power (9).png",
    title: "Heavy Custom Code",
    description: "Custom logic requires dev time and frequent maintenance.",
  },
  {
    icon: "/images/mdi_solar-power (10).png",
    title: "Manual Recovery",
    description: "Errors often need manual intervention, slowing operations.",
  },
];

export default function SmartVsCompetitorSection() {
  const [selectedTab, setSelectedTab] = useState<"davinci" | "competitor">("davinci");
  const features = selectedTab === "davinci" ? davinciFeatures : competitorFeatures;

  return (
    <section className="w-full bg-[#F5F6F7] flex flex-col items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Section Title */}
      <h2 className="font-segoe font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] leading-tight sm:leading-snug lg:leading-[43px] text-center text-[#141A46] mb-8 sm:mb-10 md:mb-12">
        The Davinci Difference
      </h2>

      {/* Toggle Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 w-full max-w-[1000px]">
        <button
          className={`w-full sm:w-[300px] md:w-[400px] lg:w-[474px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[74px] rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold font-segoe transition-all duration-200
            ${selectedTab === "davinci"
              ? "bg-[#FE7A3E] text-white shadow-lg"
              : "bg-[#F5F6F7] text-[#FE7A3E] border border-[#FE7A3E] hover:bg-[#FE7A3E] hover:text-white"}
          `}
          onClick={() => setSelectedTab("davinci")}
        >
          Davinci Smart
        </button>
        <button
          className={`w-full sm:w-[300px] md:w-[400px] lg:w-[474px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[74px] rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold font-segoe transition-all duration-200
            ${selectedTab === "competitor"
              ? "bg-[#FE7A3E] text-white shadow-lg"
              : "bg-[#F5F6F7] text-[#FE7A3E] border border-[#FE7A3E] hover:bg-[#FE7A3E] hover:text-white"}
          `}
          onClick={() => setSelectedTab("competitor")}
        >
          Competitor MES
        </button>
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-[1055px] flex flex-col gap-4 sm:gap-6 md:gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center sm:items-start bg-white rounded-[6px] shadow-[0px_4px_15px_rgba(0,0,0,0.06)] px-4 sm:px-6 md:px-8 lg:px-[75px] py-4 sm:py-6 md:py-8 lg:py-[10px] gap-4 sm:gap-6 md:gap-8 lg:gap-[73px] min-h-[100px] sm:min-h-[110px] md:min-h-[118px] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-shrink-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] flex items-center justify-center">
              <Image
                src={feature.icon}
                alt="icon"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center w-full sm:w-auto sm:flex-1 lg:w-[800px] text-center sm:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[24px] font-semibold text-[#141A46] mb-2 font-segoe leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-[#737373] font-segoe text-justify leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  
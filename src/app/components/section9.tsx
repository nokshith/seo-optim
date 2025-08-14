"use client";

import { useState } from "react";
import Image from "next/image";

// Da Vinci: only label text is shown
const davinciFeatures = [
  {
    icon: "/images/s91.png",
    label: "Predictive pre-execution optimization",
  },
  {
    icon: "/images/photos/images/s92.png",
    label: "CFO real-time financial exposure dashboard",
  },
  {
    icon: "/images/photos/images/s93.png",
    label: "Auto-attested, continuous ESG compliance",
  },
  {
    icon: "/images/photos/images/s94.png",
    label: "Compliance as operational advantage",
  },
];

// Competitor: title + description
const competitorFeatures = [
  {
    icon: "/images/s95.png",
    title: "Retrospective analysis",
    description: "",
  },
  {
    icon: "/images/s96.png",
    title: "CFO reconciliation lag",
    description: "",
  },
  {
    icon: "/images/s97.png",
    title: "Manual ESG disclosures",
    description: "",
  },
  {
    icon: "/images/s98.png",
    title: "Compliance as burden",
    description: "",
  },
];

type DaVinciFeature = { icon: string; label: string };
type CompetitorFeature = { icon: string; title: string; description: string };
type Feature = DaVinciFeature | CompetitorFeature;

export default function Section9() {
  const [selectedTab, setSelectedTab] = useState<"davinci" | "competitor">("davinci");
  const isDaVinci = selectedTab === "davinci";
  const features: Feature[] = isDaVinci ? davinciFeatures : competitorFeatures;

  return (
    <section className="w-full bg-[#F5F6F7] flex flex-col items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Title */}
      <h2 className="font-segoe font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight sm:leading-snug lg:leading-[43px] text-center text-[#141A46] mb-8 sm:mb-10 md:mb-12">
        Enterprise Operating Model Transformation
      </h2>

      {/* Toggle Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 w-full max-w-[1000px]">
        <button
          className={`w-full sm:w-[300px] md:w-[400px] lg:w-[474px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[74px] rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold font-segoe transition-all duration-200 ${
            isDaVinci
              ? "bg-[#FE7A3E] text-white shadow"
              : "bg-[#F5F6F7] text-[#FE7A3E] border border-[#FE7A3E]"
          }`}
          onClick={() => setSelectedTab("davinci")}
        >
          Davinci Energy Intelligence Model
        </button>
        <button
          className={`w-full sm:w-[300px] md:w-[400px] lg:w-[474px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[74px] rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold font-segoe transition-all duration-200 ${
            !isDaVinci
              ? "bg-[#FE7A3E] text-white shadow"
              : "bg-[#F5F6F7] text-[#FE7A3E] border border-[#FE7A3E]"
          }`}
          onClick={() => setSelectedTab("competitor")}
        >
          Legacy Energy Management
        </button>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1055px] flex flex-col gap-4 sm:gap-6 md:gap-8">
        {features.map((feature, idx) => (
           <div
             key={idx}
             className="flex flex-col sm:flex-row items-center bg-white rounded-[6px] shadow-[0px_4px_15px_rgba(0,0,0,0.06)] px-4 sm:px-6 md:px-8 lg:px-[75px] py-4 sm:py-6 md:py-8 lg:py-[10px] gap-4 min-h-[100px] sm:min-h-[110px] md:min-h-[118px] hover:shadow-lg transition-shadow duration-300"
           >
             {/* Icon */}
             <div className="flex-shrink-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center">
               <Image
                 src={feature.icon}
                 alt="icon"
                 width={30}
                 height={30}
                 className="object-contain sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"
               />
             </div>
             {/* Content */}
             <div className="flex flex-col justify-center items-center w-full sm:w-auto lg:w-[800px] text-center">
               {isDaVinci && "label" in feature ? (
                 <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-[#737373] font-[600] font-segoe leading-tight sm:leading-snug lg:leading-[100%]">
                   {feature.label}
                 </p>
               ) : !isDaVinci && "title" in feature && "description" in feature ? (
                 <>
                   <h3 className="text-base sm:text-lg md:text-xl lg:text-[24px] font-semibold text-[#141A46] font-segoe leading-tight">
                     {feature.title}
                   </h3>
                   {feature.description && (
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-[#737373] font-segoe text-center font-semibold leading-relaxed mt-2">
                       {feature.description}
                     </p>
                   )}
                 </>
               ) : null}
             </div>
           </div>
        ))}
      </div>
    </section>
  );
}
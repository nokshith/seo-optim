

"use client";

import React from "react";

export default function Section2() {
  const cardData = [
    {
      title: "Financial Exposure Modeling",
      description:
        "Direct integration into ERP financial models, carbon markets, and energy price indexes — translating energy behavior into real-time profit-and-loss exposure.",
      icon: "./images/s21.png",
    },
    {
      title: "Predictive Energy Governance",
      description:
        "AI models forecast energy curves before production begins, optimizing sequencing, scheduling, and tariff exposure dynamically.",
      icon: "./images/s22.png",
    },
    {
      title: "Carbon Ledgering at the Transactional Level",
      description:
        "Real-time Scope 1 and 2 emissions tied directly to operational events — traceable, attestable, and continuously audited.",
      icon: "./images/s23.png",
    },
  ];

  const cardData2 = [
    {
      title: "Native Execution Integration",
      description:
        "DaVinci operates within the MES kernel itself — not as a secondary ESG module. Every furnace cycle, batch order, and load transition is computed before, during, and after execution.",
      icon: "./images/s24.png",
    },
    {
      title: "Regulatory Assurance by Design",
      description:
        "Real-time Scope 1 and 2 emissions tied directly to operational events  traceable, attestable, and continuously audited.Every data stream is synchronized to the regulatory frameworks driving enterprise ESG mandates across global jurisdictions.",
      icon: "./images/s25.png",
    },
  ];

  return (
         <div className="w-full max-w-[1440px] mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-12 px-4 sm:px-6 md:px-8 lg:px-[116px] py-4 sm:py-6 md:py-8 lg:py-12">
      {/* Heading */}
             <h2
         className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-center text-[#141A46] mb-8 sm:mb-12 md:mb-16 lg:mb-20 leading-tight sm:leading-snug lg:leading-normal"
         style={{ fontFamily: "Segoe UI" }}
       >
        Why Davinci is Unmatched
      </h2>

      {/* Combined Grid for All Cards */}
      {/* First Row - 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-[24px] justify-items-center">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="w-full max-w-[348px] h-auto min-h-[300px] sm:min-h-[350px] lg:h-[390px] bg-[#F5F6F7] border border-white shadow-[0px_4px_13px_0px_rgba(0,0,0,0.25)] rounded-[6px] px-4 sm:px-6 md:px-8 lg:px-[30px] pt-6 sm:pt-8 md:pt-10 lg:pt-[30px] pb-8 sm:pb-10 md:pb-12 lg:pb-[63px] relative hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[90px] lg:h-[90px] rounded-full shadow-[0px_4px_12.8px_-5px_rgba(0,0,0,0.25)] bg-white absolute top-4 sm:top-6 md:top-8 lg:top-[30px] left-4 sm:left-6 md:left-8 lg:left-[30px] flex items-center justify-center">
              <img src={card.icon} alt="icon" className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[42px] lg:h-[41px]" />
            </div>

            {/* Text */}
            <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-[130px]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-[#141A46] mb-2 sm:mb-3 lg:mb-[10px] leading-tight" style={{ fontFamily: "Segoe UI" }}>
                {card.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-[16px] font-semibold text-[#737373] text-justify leading-relaxed" style={{ fontFamily: "Segoe UI" }}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - 2 Cards that take full width */}
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-[100px] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-[24px] justify-items-center">
        {cardData2.map((card, i) => (
          <div
            key={i}
            className="w-full max-w-[530px] h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px] bg-[#F5F6F7] border border-white shadow-[0px_4px_13px_0px_rgba(0,0,0,0.25)] rounded-[6px] relative flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[90px] lg:h-[90px] rounded-full shadow-[0px_4px_12.8px_-5px_rgba(0,0,0,0.25)] bg-white absolute top-4 sm:top-6 md:top-8 lg:top-[30px] left-4 sm:left-6 md:left-8 lg:left-[30px] flex items-center justify-center z-10">
              <img src={card.icon} alt="icon" className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[42px] lg:h-[41px]" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-start pt-20 sm:pt-24 md:pt-28 lg:pt-[130px] px-4 sm:px-6 md:px-8 lg:px-[30px] pb-6 sm:pb-8 md:pb-10 lg:pb-[30px]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-[#141A46] w-full min-h-[40px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px] leading-tight sm:leading-snug lg:leading-[28px] mb-2 sm:mb-3 lg:mb-[10px]" style={{ fontFamily: "Segoe UI" }}>
                {card.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-[16px] font-semibold text-[#737373] text-justify leading-relaxed sm:leading-relaxed lg:leading-[22px]" style={{ fontFamily: "Segoe UI" }}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

             {/* Bottom white padding */}
       <div className="pt-2 sm:pt-4 md:pt-6 lg:pt-8 pb-4 sm:pb-6 md:pb-8 lg:pb-12"></div>
    </div>
  );
}
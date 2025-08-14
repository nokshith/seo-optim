"use client";

import { useState } from "react";
import Image from "next/image";

export function TechnicalBenefits() {
  const benefits = [
    {
      title: "No Manual Data Entry",
      description:
        "Eliminate human error and reduce labor costs with automated data capture.",
    },
    {
      title: "Configurable Thresholds",
      description:
        "Set custom tolerance limits for every parameter to ensure precision.",
    },
    {
      title: "Digital Signatures & Audit Trails",
      description:
        "Ensure traceability with secure digital approvals and logs.",
    },
    {
      title: "Cloud or Edge-Enabled",
      description:
        "Deploy seamlessly in your environment—whether centralized or decentralized.",
    },
    {
      title: "Multi-Device Support",
      description:
        "Access insights and controls from desktop, tablet, or mobile devices.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="relative bg-[#F5F6F7] py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Outer container to limit width and add horizontal padding */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#141A46] leading-tight sm:leading-snug lg:leading-[43px]">
            Key Technical Benefits
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#737373] leading-relaxed sm:leading-relaxed lg:leading-[27px] mt-2 sm:mt-3 md:mt-4">
            Advanced capabilities designed for modern manufacturing environments
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Image Section */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[392px] rounded shadow-md overflow-hidden bg-[#868686] mt-0 lg:mt-[7px] order-1 lg:order-1">
            <Image
              src="/images/image 46.png?height=392&width=626"
              alt="Technical Interface"
              fill
              className="object-cover"
            />
          </div>

          {/* Accordion Section */}
          <div className="order-2 lg:order-2">
            {benefits.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 overflow-hidden ${
                    index === 0 ? "border-t-[3px] sm:border-t-[5px] md:border-t-[7px] border-orange-500" : ""
                  }`}
                >
                  <div
                    onClick={() => handleToggle(index)}
                    className={`cursor-pointer px-4 sm:px-6 transition-colors duration-300 ${
                      isOpen ? "bg-white py-3 sm:py-4" : "bg-[#F5F6F7] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[84px] flex items-center"
                    }`}
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-black leading-tight sm:leading-snug lg:leading-[32px]">
                      {item.title}
                    </h3>
                    {isOpen && (
                      <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-[16px] font-semibold text-[#737373] leading-relaxed sm:leading-relaxed lg:leading-[21px] text-justify">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

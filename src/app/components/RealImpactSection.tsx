"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function RealImpactSection() {
  const stats = [
    { value: "100%", label: "Real-Time Sync" },
    { value: "4.2×", label: "Financial Close", highlight: "Faster" },
    { value: "0.5%", label: "Inventory/Batches", highlight: "Error" },
    { value: "600+", label: "Monthly Rework", highlight: "Hours Saved" },
  ];

  const images = [
    "/images/steel-factory-metallurgical.png",
    "/images/impact1.png",
    "/images/Frame 1000005154.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 3000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[823px] bg-[#F5F6F7] flex justify-center py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Title */}
        <h2 className="w-full max-w-[764px] mx-auto text-[#141A46] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] font-[600] text-center font-[Segoe UI] leading-tight sm:leading-snug lg:leading-[100%] mb-8 sm:mb-12 md:mb-16">
          Real Impact. Real Numbers.
        </h2>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-10 lg:gap-[83px]">
          {/* Stat Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[42px] gap-x-[31px] w-fit mx-auto lg:mx-0 order-2 lg:order-1">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[270px] md:w-[310px] lg:w-[330px] h-auto min-h-[180px] sm:min-h-[200px] md:min-h-[224px] bg-white rounded-[6px] p-4 sm:p-6 md:p-8 lg:p-[40px] box-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="w-full text-black font-[Segoe UI] leading-tight sm:leading-snug lg:leading-[64px] whitespace-nowrap">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-[700]">{stat.value}</span>
                  {stat.highlight && (
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[24px] font-[600] text-[#FE7A3E] ml-1 sm:ml-2">
                      {stat.highlight}
                    </span>
                  )}
                </p>
                <p className="w-full mt-3 sm:mt-4 md:mt-5 lg:mt-[20px] text-sm sm:text-base lg:text-[16px] font-medium text-[#4F4F4F] leading-relaxed sm:leading-relaxed lg:leading-[32px] font-[Segoe UI]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Image Slider & Controls Wrapper */}
          <div className="flex flex-col w-full lg:w-[372px] order-1 lg:order-2">
            {/* Image Container */}
            <div className="w-full h-[300px] md:h-[400px] lg:h-[464px] overflow-hidden rounded">
              <Image
                src={images[activeIndex]}
                alt={`Slide ${activeIndex + 1}`}
                width={372}
                height={464}
                className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                key={activeIndex}
              />
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-4">
              {/* Previous Button */}
              <button
                onClick={goToPrev}
                aria-label="Previous slide"
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {/* Dot Indicators */}
              <div className="flex gap-3">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      activeIndex === idx ? "bg-[#FE7A3E]" : "bg-gray-400 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
              {/* Next Button */}
              <button
                onClick={goToNext}
                aria-label="Next slide"
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
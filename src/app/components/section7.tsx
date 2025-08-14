"use client";

import Image from "next/image";
import TimelineCardWithLine from "./TimelineCardProps";

const timelineData = [
  {
    title: "SEC Climate Rule (USA)",
    description: "Tracks Scope 1 & 2 emissions for SEC climate compliance.",
    image: "/images/s71.png",
  },
  {
    title: "EU CSRD/SFDR",
    description: "Supports EU sustainability reporting with real-time ESG data.",
    image: "/images/s72.png",
  },
  {
    title: "SEBI BRSR (India)",
    description: "Aligns with India's ESG disclosure rules for industrial reporting.",
    image: "/images/s73.png",
  },
  {
    title: "GHG Protocol (Scope 1 & 2)",
    description: "Built-in carbon tracking, fully aligned with GHG standards.",
    image: "/images/s74.png",
  },
  {
    title: "ISO 50001 / 14064",
    description: "Meets global energy and emissions audit standards.",
    image: "/images/s75.png",
  },
  {
    title: "CDP, TCFD, SASB, IFRS",
    description: "Covers leading global ESG frameworks for investors and regulators.",
    image: "/images/s76.png",
  },
];

export default function Section7() {
  return (
    <div className="w-full bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[131px] flex justify-center">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[56px] pt-0 pb-8 sm:pb-12 md:pb-16 lg:pb-[60px] max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] text-[#141A46] font-semibold text-center m-0 leading-tight sm:leading-snug lg:leading-normal"
          style={{ fontFamily: "Segoe UI" }}
        >
          From Trigger to Traceability in Milliseconds
        </h2>

        {/* Mobile Timeline - Vertical Stack */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[93px] lg:hidden">
          <div className="flex flex-col space-y-6 sm:space-y-8">
            {timelineData.map((item, index) => (
              <div key={`mobile-${index}`} className="w-full">
                <TimelineCardWithLine
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  left={0}
                  top={0}
                  isMobile={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline - Original Layout */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[93px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] w-full relative hidden lg:block">
          {/* Top row of cards */}
          {timelineData.slice(0, 3).map((item, index) => {
            const baseLeft = 57;
            const left = baseLeft + index * (240 + 154);
            return (
              <TimelineCardWithLine
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                left={left}
              />
            );
          })}

          {/* Peach rectangles row (images) */}
          {[...Array(6)].map((_, index) => {
            const baseLeft = -20;
            const imageWidth = 220;
            const gap = -10;
            const left = baseLeft + index * (imageWidth + gap);
            return (
              <Image
                key={`vector-${index}`}
                src="/images/Rectangle 6.png"
                alt="Vector Image"
                width={220}
                height={43}
                className="absolute"
                style={{
                  top: "372px",
                  left: `${left}px`,
                  opacity: 1,
                }}
              />
            );
          })}

          {/* Bottom row of cards */}
          {timelineData.slice(3, 6).map((item, index) => {
            const cardWidth = 240;
            const gap = 154;

            let left;
            if (index === 0) {
              left = 252;
            } else {
              left = 252 + index * (cardWidth + gap);
            }

            return (
              <TimelineCardWithLine
                key={`bottom-${index}`}
                title={item.title}
                description={item.description}
                image={item.image}
                left={left}
                top={430}
                reverseLineGradient={true} // ✅ Pass this only to bottom row
              />
            );
          })}

        </div>
      </div>
    </div>
  );
}

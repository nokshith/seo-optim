"use client";

import Image from "next/image";
import TimelineCardWithLine from "./TimelineCardWithLine";
 
const timelineData = [
  {
    title: "Ladle Prepped",
    description: "A ladle of molten aluminum is ready for pouring.",
    image: "/images/Frame 1000005086 (6).png",
  },
  {
    title: "Composition Scanned",
    description: "Bruker Q2 ION XRF analyzes melt composition (focus: Mg, Si).",
    image: "/images/timline.png",
  },
  {
    title: "Deviation Detected",
    description: "If levels are out of spec, Davinci MES automatically holds the pour.",
    image: "/images/photo_2025-07-28_11-52-31.jpg",
  },
  {
    title: "Supervisor Notified",
    description: "Melt shop supervisor receives an in-dashboard alert.",
    image: "/images/photo_2025-07-28_12-14-01.jpg",
  },
  {
    title: "Adjustment + Retest",
    description: "Alloy is corrected and rechecked until it meets tolerance.",
    image: "/images/photo_2025-07-28_12-12-55.jpg",
  },
  {
    title: "Pour Released",
    description: "Once verified, MES clears the hold and pouring resumes—seamlessly.",
    image: "/images/Frame 1000005086 (6).png",
  },
];
 
export default function ProcessTimeline() {
  return (
    <div className="w-full bg-gray-100 py-4 sm:py-6 md:py-8 lg:py-20 xl:py-[60px] flex justify-center">
  <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[56px] pt-0 pb-20 sm:pb-24 md:pb-32 lg:pb-[80px] xl:pb-[100px] max-w-[1440px] mx-auto">
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
    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[60px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[720px] w-full relative hidden lg:block">
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
            isMobile={false}
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
            reverseLineGradient={true}
            isMobile={false}
          />
        );
      })}
    </div>
  </div>
</div>

  );
}
 
 

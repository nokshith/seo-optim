"use client";

import Image from "next/image";
import TimelineCardWithLine from "./TimelineCardWithLine";

const timelineData = [
  {
    title: "SAP Drops a Work Order",
    description: "Your   ERP   initiates   production DaVinci listens for the trigger in real time.",
    image: "/images/Frame 1000005086.png",
  },
  {
    title: "DaVinci Dashboard Fires Up",
    description: "The operator sees the exact order with zero delay. Context-rich, rule-based instructions appear.",
    image: "/images/Frame 1000005088.png",
  },
  {
    title: "Operator executes production",
    description: "The operator starts and completes the production task on the shop floor.",
    image: "/images/Frame 1000005090 (2).png",
  },
  {
    title: "Confirmation Sent Back + Scrap Recorded",
    description: "As work moves, confirmations go. Scrap? Auto-logged. No delays, no manual steps.",
    image: "/images/Frame 1000005086 (1).png",
  },
  {
    title: "COA + Quality Results Synced to Batch Record",
    description: "No lag, no waiting. Quality data is instantly ready for reports and compliance.",
    image: "/images/Frame 1000005086 (2).png",
  },
  {
    title: "Inventory Updated in ERP",
    description: "Output quantity hits inventory. Costs roll into your ERP in real time.",
    image: "/images/Frame 1000005086 (3).png",
  },
];

export default function TriggerTraceability() {
  return (
    <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 flex justify-center bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[56px] max-w-[1440px] mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] text-[#141A46] font-semibold text-center mb-6 sm:mb-8 md:mb-12 leading-tight sm:leading-snug lg:leading-normal" style={{ fontFamily: "Segoe UI" }}>
          From Trigger to Traceability in Milliseconds
        </h2>

        {/* Mobile Timeline - Vertical Stack */}
        <div className="lg:hidden">
          <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10">
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
        <div className="hidden lg:block w-full relative h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[800px]">
          {/* Top row of cards */}
          {timelineData.slice(0, 3).map((item, index) => {
            const baseLeft = 57;
            const left = baseLeft + index * (240 + 154);
            return (
              <TimelineCardWithLine
                key={`top-${index}`}
                title={item.title}
                description={item.description}
                image={item.image}
                left={left}
                isMobile={false}
              />
            );
          })}

          {/* Middle connecting rectangles */}
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
            const left = index === 0 ? 252 : 252 + index * (cardWidth + gap);
            return (
              <TimelineCardWithLine
                key={`bottom-${index}`}
                title={item.title}
                description={item.description}
                image={item.image}
                left={left}
                top={430}
                reverseLineGradient
                isMobile={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

const WhyItMatters = () => {
  const whyItMattersItems = [
    {
      title: "Downtime becomes preemptive intervention",
      content:
        "With Ignis, unplanned downtime is a relic of the past. It transforms into proactive maintenance, where potential failures are detected and resolved before they disrupt operations.",
      image: "/images/Frame79.png",
    },
    {
      title: "Failures dissolve into foresight",
      content:
        "It's no longer acceptable to wait for a breakdown.\nIt's no longer viable to rely on periodic inspections or delayed data.\nToday's factories demand machine-level cognition and real-time situational awareness.",
      image: "/images/Frame 29.png",
    },
    {
      title: "Human error is augmented with intelligent guidance",
      content:
        "Operators are empowered with AI-driven insights, not overwhelmed by data.\nIgnis transforms complex furnace operations into intuitive, actionable intelligence.",
      image: "/images/Frame79.png",
    },
    {
      title: "Maintenance transforms from reactive to regenerative",
      content:
        "With Ignis, maintenance is no longer a cost center.\nIt's a value driver, extending asset life and enhancing operational efficiency.",
      image: "/images/Frame 29.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const frontImage = whyItMattersItems[activeIndex].image;
  const backImage =
    whyItMattersItems[(activeIndex + 1) % whyItMattersItems.length].image;

  return (
    <section className="w-full mt-[60px] sm:mt-[80px] lg:mt-[112px] pb-[30px] sm:pb-[10px] lg:pb-[100px] px-4">
      <h2 className="w-full max-w-[1210px] mx-auto font-semibold text-[#141a46] text-[24px] sm:text-[28px] lg:text-[32px] text-center">
        Why It Matters
      </h2>

      <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 mt-[30px] sm:mt-[40px] lg:mt-[50px] max-w-[1210px] mx-auto">
        {/* Image Display */}
        <div className="w-full max-w-[574px] mb-6 lg:mb-0 lg:mr-8 lg:relative mx-auto lg:mx-0">
          {/* On mobile/tablet, show only the front image statically */}
          <div className="block lg:hidden w-full max-w-[521px] h-[350px] sm:h-[400px] bg-[#dbdbdb] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0px_4px_24.2px_#00000042] mx-auto">
            <img
              className="w-full h-full object-cover"
              src={frontImage}
              alt="Why it matters"
            />
          </div>
          {/* On desktop, show layered images */}
          <div className="hidden lg:block relative w-full max-w-[574px] h-[611px]">
            {/* Front image - main focus */}
            <div className="absolute top-0 left-0 w-[521px] h-[550px] bg-[#dbdbdb] rounded-[28px] overflow-hidden shadow-[0px_4px_24.2px_#00000042] transition-opacity duration-300 ease-in-out">
              <img
                className="w-full h-full object-cover"
                src={frontImage}
                alt="Front layer"
              />
            </div>
            {/* Back image - slightly offset */}
            <div className="absolute top-[98px] left-[53px] w-[521px] h-[550px] bg-[#dbdbdb] rounded-[28px] overflow-hidden shadow-[0px_4px_24.2px_#00000042]">
              <img
                className="w-full h-full object-cover"
                src={backImage}
                alt="Back layer"
              />
            </div>
            
          </div>
        </div>
        {/* Accordion */}
        <div className="flex flex-col w-full max-w-[625px] gap-4 sm:gap-6">
          {whyItMattersItems.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer border rounded-[10px] p-[16px] sm:p-[20px] transition-all duration-300 ease-in-out shadow-sm ${
                activeIndex === index ? "bg-[#f9f9f9]" : "bg-white"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#141a46]">
                {item.title}
              </h3>
              {activeIndex === index && item.content && (
                <div className="mt-3 border-t pt-3 text-[#727272] text-sm sm:text-base font-semibold whitespace-pre-line leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;

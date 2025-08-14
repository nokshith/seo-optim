"use client";

import Image from "next/image";

export default function BeyondAPIsSection() {
  const points = [
    "Build ERP-MES blueprints tailored to your factory",
    "Conduct sync impact simulations before go-live",
    "Design error-tolerant, schema-aligned integrations",
    "Migrate legacy flows without disruption",
    "Train your teams to own and extend these systems",
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-20 bg-white min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-10 lg:gap-[80px]">
        {/* Left Text Section */}
        <div className="w-full lg:max-w-[592px] flex flex-col gap-4 sm:gap-6 order-2 lg:order-1">
          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] leading-tight sm:leading-snug lg:leading-[43px] font-semibold text-[#141A46] font-segoe mb-0 text-center lg:text-left">
            Go Beyond APIs — Orchestrate Intelligence
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] leading-tight sm:leading-snug lg:leading-[37px] font-semibold text-[#FE7A3E] font-segoe mb-0 text-center lg:text-left">
            Connect your systems smoothly.<br />Run your factory smarter and faster
          </p>

          {/* Bullet Points */}
          <ul className="text-sm sm:text-base md:text-lg lg:text-[16px] leading-relaxed sm:leading-relaxed lg:leading-[48px] text-[#737373] font-semibold font-segoe text-justify flex flex-col gap-2 sm:gap-3 lg:gap-0 mt-4 sm:mt-6 lg:mt-2">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3 min-h-[32px] sm:min-h-[40px] lg:min-h-[48px]">
                <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 lg:w-[21px] lg:h-[21px] mt-0.5 sm:mt-1 lg:mt-2">
                  {/* Plain orange check icon */}
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[21px] lg:h-[21px]"
                  >
                    <path
                      d="M4 11.5L9 16L17 6"
                      stroke="#FE7A3E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="flex-1">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[490px] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[446px] order-1 lg:order-2 mb-6 lg:mb-0">
          <Image
            src="/images/api-section.png"
            alt="Beyond APIs ERP"
            width={490}
            height={446}
            className="object-cover w-full h-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import Image from "next/image";

export function IntegrationFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Automated Material Verification",
      description:
        "Spectrometer readings are automatically captured during incoming goods checks, melt validations, or in-process inspections. These values are instantly compared against pre-defined grade libraries and tolerance limits. Any deviations trigger alerts, CAPA workflows, or immediate process holds without manual intervention. This ensures real-time quality control at the source. As a result, compliance becomes proactive, not reactive.",
    },
    {
      title: "Real-Time Composition Data in MES",
      description:
        "Seamlessly integrate live X-ray spectrometer data directly into your Manufacturing Execution System (MES). Access real-time material composition data for immediate decision-making and quality control.",
    },
    {
      title: "Certified Analysis Reports",
      description:
        "Lab-grade chemical composition certificates are automatically generated and attached to shipments or inventory records. Report formats are configurable to match ISO, ASTM, or customer-specific standards. These certificates are digitally stored and shared without delay. Manual reporting is eliminated, reducing time and risk. Customers receive clear, validated documentation for every batch.",
    },
    {
      title: "Closed-Loop Feedback to Production",
      description:
        "Enable real-time process adjustments based on material analysis results. Our closed-loop system automatically adjusts production parameters to maintain optimal quality and reduce waste.",
    },
  ];

  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#141A46] text-center leading-tight sm:leading-snug lg:leading-[43px] font-['Segoe UI'] max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
        What the Integration Enables
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-x-12 lg:gap-y-12 w-full max-w-6xl">
          {[0, 1].map((col) => (
            <div key={col} className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-between">
              {[0, 1].map((row) => {
                const index = col + row * 2;
                const isHovered = hoveredIndex === index;
                const isTopOrBottom =
                  hoveredIndex === index - 2 || hoveredIndex === index + 2;

                let heightClass = "min-h-[250px] sm:min-h-[280px] md:min-h-[300px] lg:h-[336px]";
                let bgClass = "bg-[#F5F6F7]";
                let additionalClass = "shadow-[0_8px_16px_rgba(0,0,0,0.2)]";

                if (isHovered) {
                  heightClass = "min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[449px]";
                  bgClass = "bg-[#FFF3ED]";
                } else if (isTopOrBottom) {
                  heightClass = "min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:h-[224px]";
                  additionalClass =
                    "border border-white shadow-[0_8px_16px_rgba(0,0,0,0.2)]";
                }

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`transition-all duration-500 ease-in-out ${bgClass} ${heightClass} ${additionalClass} rounded-[6px] px-4 sm:px-6 md:px-8 lg:px-[30px] py-4 sm:py-6 md:py-8 lg:py-[30px] overflow-hidden flex flex-col items-start gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] justify-start w-full`}
                  >
                    {/* Icon Section */}
                    <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] min-w-[60px] sm:min-w-[70px] md:min-w-[80px] lg:min-w-[90px] min-h-[60px] sm:min-h-[70px] md:min-h-[80px] lg:min-h-[90px] bg-white shadow-[0_4px_12.8px_-5px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center relative flex-shrink-0">
                      {index <= 1 ? (
                        <Image
                          src="/images/uiw_verification.png"
                          alt="Top Feature Icon"
                          width={42}
                          height={42}
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[42px] lg:h-[42px]"
                        />
                      ) : (
                        <Image
                          src="/images/icon-park-outline_analysis.png"
                          alt="Top Feature Icon"
                          width={42}
                          height={42}
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[42px] lg:h-[42px]"
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-black leading-tight sm:leading-snug lg:leading-[32px] font-['Segoe UI'] w-full">
                      {features[index].title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-[#737373] text-sm sm:text-base lg:text-[16px] font-semibold leading-relaxed sm:leading-relaxed lg:leading-[21px] text-justify font-['Segoe UI'] transition-all duration-500 ease-in-out ${
                        isHovered
                          ? "line-clamp-none"
                          : isTopOrBottom
                          ? "line-clamp-1"
                          : "line-clamp-2"
                      }`}
                    >
                      {features[index].description}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function OutcomesSection() {
  const outcomes = [
    "Zero tolerance launches for critical inspections",
    "Automated workflows with real-time notifications",
    "Fully optimized quality workflows - from raw input to final dispatch",
    "99% traceability for testing and quality control processes",
    "Automated Scrap and reject material inspection and documentation",
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1228.97px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[126px] items-center">
        {/* Left Image */}
        <div className="relative w-full sm:w-[400px] md:w-[450px] lg:w-[489.94px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[446px] bg-[#868686] rounded-lg overflow-hidden shadow-md order-1 lg:order-1 mb-6 lg:mb-0">
          <Image
            src="/images/Frame 1000005084 (4).png"
            alt="Outcomes Visualization"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:max-w-[613.03px] order-2 lg:order-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight sm:leading-snug lg:leading-[43px] font-semibold text-[#141A46] font-['Segoe UI'] mb-2 text-center lg:text-left">
            Outcomes & Value
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-tight sm:leading-snug lg:leading-[37px] font-semibold text-[#FE7A3E] font-['Segoe UI'] mb-4 sm:mb-6 text-center lg:text-left">
            Make every process faster and more reliable.
          </p>

          <div className="pl-2">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-center mb-0"
                style={{ minHeight: 48 }}
              >
                <span className="mr-3 sm:mr-4 flex items-center justify-center">
                  <svg
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                    className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[13px] lg:h-[10px]"
                  >
                    <path
                      d="M1 5.5L5 9L12 1"
                      stroke="#FE7A3E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[#737373] text-sm sm:text-base lg:text-[16px] font-semibold leading-relaxed sm:leading-relaxed lg:leading-[48px] text-justify font-['Segoe UI']">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

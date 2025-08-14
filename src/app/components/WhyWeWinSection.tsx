"use client";

export default function WhyWeWinSection() {
  const features = [
    {
      icon: "/images/stash_integrations.png",
      title: "Native Not Bolted On.",
      description:
        "ERP logic is baked into DaVinci's DNA we interpret your ERP's intent and execute it live on the shop floor.",
    },
    {
      icon: "/images/Screen Record Alt Fill Streamline Outlined Fill - Material Pro (2).png",
      title: "End-to-End Automations",
      description:
        "From order to quality release, every action flows to ERP instantly — no delays, no manual fixes.",
    },
    {
      icon: "/images/carbon_ibm-cloud-pak-integration.png",
      title: "Multi-ERP Mastery",
      description:
        "Run SAP in Plant A, Oracle in Plant B? Davinci harmonizes and syncs them seamlessly no hassle.",
    },
    {
      icon: "/images/iconoir_mobile-dev-mode.png",
      title: "Developer-First, CIO-Ready",
      description:
        "Expose clean APIs, configure events, track failures in real time all inside your control tower.",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] min-h-[400px] sm:min-h-[500px] lg:min-h-[572px] bg-white rounded-t-[10px] mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h2 className="w-full max-w-[764px] font-segoe font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[32px] leading-tight sm:leading-snug lg:leading-[43px] text-[#141A46] text-center mb-8 sm:mb-12 lg:mb-16">
        Why We Win
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[30px] w-full max-w-[1200px]">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="w-full h-auto min-h-[280px] sm:min-h-[320px] lg:min-h-[343px] bg-[#F5F6F7] rounded-[6px] border border-[#FFFFFF] p-4 sm:p-6 lg:p-[30px] shadow-[0px_4px_13px_rgba(0,0,0,0.25)] flex flex-col items-start gap-4 sm:gap-6 lg:gap-[25px] hover:shadow-lg transition-shadow duration-300"
          >
            {/* Circle Icon */}
            <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[90px] lg:h-[90px] bg-white rounded-full shadow-[0px_4px_12.8px_-5px_rgba(0,0,0,0.25)] flex items-center justify-center flex-shrink-0">
              <img
                src={feature.icon}
                alt="icon"
                className="w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] lg:w-[42px] lg:h-[41px] object-contain"
              />
            </div>
            {/* Title */}
            <h3 className="w-full font-segoe font-semibold text-lg sm:text-xl lg:text-2xl xl:text-[24px] leading-tight sm:leading-snug lg:leading-[32px] text-black min-h-[48px] sm:min-h-[56px] lg:min-h-[64px] flex items-start">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="w-full font-segoe font-semibold text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-relaxed lg:leading-[21px] text-[#737373] text-justify flex-grow">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

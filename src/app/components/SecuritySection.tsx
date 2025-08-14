"use client";

import Image from "next/image";

export default function SecuritySection() {
  const points = [
    "AES-256 Encryption + TLS 1.3",
    "Field-level data masking",
    "Full audit logs with rollback and replay options",
    "ISO 27001, SOC 2, and GDPR-aligned",
    "ERP outage fallback + retry queues",
  ];

  return (
    <section className="relative flex justify-center w-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] py-4 sm:py-6 md:py-8 lg:py-10 bg-transparent px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] bg-white rounded-t-[10px] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-start lg:justify-start w-full h-full p-3 sm:p-4 md:p-6 lg:p-8 gap-4 sm:gap-6 md:gap-8 lg:gap-[80px]">
          {/* Left Gray Box with Image */}
          <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:w-[420px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[380px] bg-[#868686] shadow-[0px_4px_11px_rgba(0,0,0,0.25)] rounded-[10px] overflow-hidden order-2 lg:order-1 relative">
            <Image
              src="/images/security.png"
              alt="Security Shield"
              fill
              className="object-cover object-center"
              sizes="(max-width: 280px) 280px, (max-width: 350px) 350px, (max-width: 400px) 400px, 420px"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-auto lg:flex-1 order-1 lg:order-2 flex flex-col justify-center lg:h-[380px]">
            {/* Heading */}
            <h2 className="w-full font-segoe font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-tight sm:leading-snug lg:leading-[43px] text-[#141A46] mb-3 sm:mb-4 lg:mb-6 text-center lg:text-left">
              Enterprise-Grade Security. Finance Grade Trust.
            </h2>

            {/* Subheading */}
            <p className="w-full font-segoe font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] leading-tight sm:leading-snug lg:leading-[37px] text-[#FE7A3E] mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left">
            Secure, reliable, and built to protect every part of your business.
            </p>

            {/* Bullet Points */}
            <ul className="w-full max-w-[511px] font-segoe font-semibold text-xs sm:text-sm md:text-base lg:text-[16px] leading-relaxed sm:leading-relaxed lg:leading-[300%] text-[#737373] text-justify list-none p-0 m-0 space-y-0.5 sm:space-y-1 lg:space-y-2">
              {points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start sm:items-center min-h-[20px] sm:min-h-[24px] lg:min-h-[28px]"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 lg:w-[21px] lg:h-[21px] mr-2 sm:mr-3 lg:mr-4 mt-0.5 sm:mt-0 lg:mt-0">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 14.43 10.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[21px] lg:h-[21px]"
                    >
                      <path
                        d="M1 5.25L5.5 9.5L13.43 1"
                        stroke="#FE7A3E"
                        strokeWidth="2.8"
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
        </div>
      </div>
    </section>
  );
}

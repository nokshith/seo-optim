"use client";

import React from "react";
import Image from "next/image";
export default function Section10() {
    const items = [
        "Total energy transparency",
        "Predictive final exposure",
        "Continuous carbon disclosure",
        "Board-level ESG alignment",
        "Regulator-ready data assurance",
        "Fully autonomous energy governance architecture",
    ];
    return (
        <div className="w-full h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[680px] bg-white rounded-t-[10px] shadow-[0px_4px_14px_-5px_rgba(0,0,0,0.25)] px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="relative w-full h-full">
                <div className="w-full max-w-[1207.94px] h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[446px] bg-white mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[120px] opacity-100">
                    {/* Text Box */}
                    <div className="w-full lg:w-[592px] h-auto lg:h-[415px] rounded-[8px] opacity-100 order-1 lg:order-1">
                        <div className="w-full h-auto opacity-100">
                            <h3
                                className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold leading-tight sm:leading-snug lg:leading-[100%] text-[#141A46] text-center lg:text-left"
                                style={{ fontFamily: "Segoe UI" }}
                            >
                                The Executive Outcome
                            </h3>
                        </div>
                        <div className="w-full h-auto mt-4 sm:mt-6 lg:mt-[22px] opacity-100 flex items-center justify-center lg:justify-start">
                            <h4
                                className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold text-[#FE7A3E] text-center lg:text-left leading-tight"
                                style={{ fontFamily: "Segoe UI" }}
                            >
                                Davinci simultaneously integrates:
                            </h4>
                        </div>
                        <div className="w-full h-auto mt-4 sm:mt-6 lg:mt-[21px] opacity-100 bg-white px-2 pt-4 sm:pt-6 lg:pt-[19px]">
                            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[26px]">
                                {items.map((text, index) => (
                                    <div key={index} className="flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-[19.5px]">
                                        {/* Tick icon */}
                                        <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] lg:w-[16px] lg:h-[16px] mt-[2px] flex-shrink-0">
                                            <img src="./images/tickmark.png" alt="tick" className="w-full h-full" />
                                        </div>

                                        {/* Text */}
                                        <p
                                            className="text-[#4F4F4F] text-sm sm:text-base md:text-lg lg:text-[16px] font-semibold leading-relaxed sm:leading-relaxed lg:leading-[140%] flex-1"
                                            style={{ fontFamily: "Segoe UI" }}
                                        >
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    {/* Image Box */}
                    <div className="w-full lg:w-[490px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[446px] relative opacity-100 order-2 lg:order-2">
                        <Image
                            src="/images/s101.png"
                            alt="Executive Dashboard Interface"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

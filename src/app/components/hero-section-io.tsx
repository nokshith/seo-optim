"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Head from 'next/head';

export function HeroSection() {
  return (
    <>
      <Head>
        <title>A Structural Shift in Manufacturing Energy Governance</title>
        <meta
          name="description"
          content="Seamlessly connect X-ray spectrometers to your quality systems. Davinci automates data processing, validation, and traceability for fast, lab-grade material analysis in real time."
        />
        <meta
          name="keywords"
          content="automated data processing, X-ray spectrometers, quality management, XRF integration, material analysis, lab automation, Davinci MES"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.davincism.io/X-Ray-Spectrometers" />
        
        {/* Open Graph for LinkedIn/Facebook */}
        <meta property="og:title" content="Automated Data Processing with X-Ray Spectrometers" />
        <meta property="og:description" content="Enable real-time material validation with automated data processing and XRS integration through Davinci Quality Management." />
        <meta property="og:url" content="https://www.davincism.io/X-Ray-Spectrometers" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/Frame 1000005.png" />
      </Head>
    <section className="relative bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1212px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[71px] relative  mt-[40px]">
        {/* Text Section */}
        <div className="flex flex-col items-start justify-start w-full lg:w-[437px] h-auto lg:h-[582px] rounded-[17px] p-4 sm:p-6 lg:p-0 order-2 lg:order-1 space-y-4 sm:space-y-6">
          <h1 className="text-[#141A46] font-['Segoe UI'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-snug lg:leading-[53px] w-full m-0 text-center lg:text-left">
            Advanced Integration with X-Ray Spectrometers
          </h1>
          <p className="text-[#FE7A3E] font-['Segoe UI'] font-bold text-lg sm:text-xl lg:text-[20px] leading-tight sm:leading-snug lg:leading-[27px] w-full m-0 text-center lg:text-left">
            Seamless Material Validation. Real-Time Alloy & Purity Insights.
          </p>
          <p className="text-[#4F4F4F] font-['Segoe UI'] font-semibold text-sm sm:text-base lg:text-[15px] leading-relaxed sm:leading-relaxed lg:leading-[20px] text-justify w-full m-0">
            In industries like metallurgy, mining, aerospace, and precision
            manufacturing, material composition isn't optional — it's critical.
            Da Vinci's Quality Management module comes pre-equipped to natively
            integrate with leading X-ray Spectrometry (XRS) systems,
            enabling real-time chemical analysis, automated data processing, and full
            traceability without manual intervention.
            Whether you're using handheld XRF devices or fully automated inline X-ray spectrometers, Da Vinci ensures accurate, fast, and secure
            data flow between lab-grade analysis and your manufacturing systems.
          </p>
          <Button
            className="bg-[#FE7A3E] hover:bg-[#ff5a14] text-white font-['Segoe UI'] font-semibold text-base sm:text-lg lg:text-[18px] leading-tight sm:leading-snug lg:leading-[24px] w-full sm:w-auto lg:w-[187px] h-auto lg:h-[44px] px-4 sm:px-6 lg:px-[10px] py-2 sm:py-3 lg:py-[10px] rounded-[8px] flex items-center justify-center gap-2 sm:gap-3 lg:gap-[10px] opacity-100 mt-4 sm:mt-6 lg:mt-0 self-center lg:self-start"
            style={{ boxShadow: "none" }}
          >
            Book Discovery Call
          </Button>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-[684px] h-auto lg:h-[588px] order-1 lg:order-2">
          {/* Mobile Layout - Stacked Images */}
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <div className="relative w-[280px] h-[180px] overflow-hidden rounded-lg">
              <Image
                src="/images/Frame 1000005.png"
                alt="X-Ray Spectrometer System Integration"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="280px"
              />
            </div>
            <div className="relative w-[250px] h-[160px] overflow-hidden rounded-lg">
              <Image
                src="/images/Frame 1000005152.png"
                alt="X-Ray Spectrometer Integration Interface"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="250px"
              />
            </div>
            <div className="relative w-[250px] h-[160px] overflow-hidden rounded-lg">
              <Image
                src="/images/Frame 1000005153.png"
                alt="Material Analysis Dashboard"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="250px"
              />
            </div>
          </div>

          {/* Desktop Layout - Original Positioning */}
          <div className="hidden lg:block relative w-full h-[588px]">
            <div className="absolute top-[5.5px] left-[387px] w-[297px] h-[275px] z-10 overflow-hidden rounded-lg">
              <Image
                src="/images/Frame 1000005152.png"
                alt="X-Ray Spectrometer Integration Interface"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="297px"
              />
            </div>
            <div className="absolute top-[318.5px] left-[387px] w-[297px] h-[275px] z-10 overflow-hidden rounded-lg">
              <Image
                src="/images/Frame 1000005153.png"
                alt="Material Analysis Dashboard"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="297px"
              />
            </div>
            <div className="absolute top-[50px] left-[0px] w-[336px] h-[419px] z-10 overflow-hidden rounded-lg">
              <Image
                src="/images/Frame 1000005.png"
                alt="X-Ray Spectrometer System Integration"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="336px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

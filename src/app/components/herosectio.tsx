"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Head from 'next/head';

export default function herosectio() {
  return (
    <>
      
    <section className="relative bg-gray-50 py-16">
      <div className="max-w-[1212px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-[71px] relative mt-[40px] pt-[40px] justify-between">
        {/* Text Section */}
        <div
          className="flex flex-col items-start justify-start w-[437px] h-[500px] rounded-[17px] p-0 mt-[70px] gap-[15px]"
        >
          <h1 className="text-[#141A46] font-['Segoe UI'] font-bold text-[40px] leading-[53px] w-[437px] h-[159px] m-0">
            A Structural Shift in Manufacturing Energy Governance
          </h1>

          <p className="text-[#FE7A3E] font-['Segoe UI'] font-bold text-[20px] leading-[27px] w-[437px] h-[81px] m-0">
            In the emerging industrial economy, energy no longer follows production. Production follows energy.
          </p>

          <ul className="text-[#4F4F4F] font-['Segoe UI'] font-semibold text-[15px] leading-[20px] text-justify w-[437px] h-[100px] m-0 list-disc pl-5">
            <li>Unpredictable global commodity markets</li>
            <li>Carbon as a balance sheet exposure</li>
            <li>Financial instruments pricing emissions volatility</li>
            <li>Investor-grade ESG compliance as a license to operate</li>
            <li>National carbon disclosure regimes with legal liability</li>
          </ul>

          <Button
            className="bg-[#FE7A3E] hover:bg-[#ff5a14] text-white font-['Segoe UI'] font-semibold text-[18px] leading-[24px] w-[187px] h-[44px] px-[10px] py-[10px] rounded-[8px] flex items-center justify-center gap-[10px] opacity-100"
            style={{ boxShadow: "none" }}
          >
            Book Discovery Call
          </Button>
        </div>



        {/* Image Section */}
        <div className="relative w-[684px] h-[600px] -mt-6">
          {/* Top Right Card */}
          <div className="absolute top-[5.5px] left-[387px] w-[297px] h-[275px] z-10 overflow-hidden">
            <Image
              src="/images/image-top-right.png"
              alt="Top Right Card"
              fill
              style={{ objectFit: "cover" }}
              className=""
              sizes="(max-width: 684px) 100vw, 297px"
            />
          </div>

          {/* Bottom Right Card */}
          <div className="absolute top-[318.5px] left-[370px] w-[325px] h-[280px] z-10 overflow-hidden rounded-lg">
            <Image
              src="/images/image-bottom-right.png"
              alt="Bottom Right Card"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              sizes="(max-width: 684px) 100vw, 297px"
            />
          </div>

          {/* Left Card */}
          <div className="absolute top-[100px] left-[0px] w-[336px] h-[419px] z-10 overflow-hidden rounded-lg">
            <Image
              src="/images/image-left.png"
              alt="Left Card"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              sizes="(max-width: 336px) 100vw, 336px"
            />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
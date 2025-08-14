
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Section3() {
  const leftItems = [
    "MES-Level Synchronization",
    "Load Forecasting Engine",
    "Thermal Process Optimization",
    "Carbon Intensity Ledger",
    "Financial Co-Variance Engine",
    "ESG Reporting Layer",
  ];

  const rightItems = [
    "Live energy & emissions mapping at batch-level",
    "Predictive sequencing to flatten peak tariffs",
    "Furnace-level AI load curve shaping",
    "Live Scope 1 & 2 emissions ledger with batch linkage",
    "Carbon pricing integrated into cost models",
    "Audit-grade regulatory disclosure generation",
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full flex justify-center bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-[60px] px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-[1208px] h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[767px] rounded-[10px]">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#141A46] text-center leading-tight sm:leading-snug lg:leading-[100%] w-full max-w-[764px] px-4"
            style={{ fontFamily: "Segoe UI" }}
          >
            Why Davinci is Unmatched
          </h2>
        </motion.div>

        {/* Orange Headers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col lg:flex-row mt-8 sm:mt-12 md:mt-16 lg:mt-[100px] gap-4 lg:gap-[130px]"
        >
          <div className="w-full lg:w-[399px] h-auto min-h-[60px] sm:min-h-[70px] lg:h-[82px] bg-[#FE7A3E] p-4 sm:p-6 lg:p-[25px] border-t-[3px] shadow-md flex items-center justify-center">
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-white text-center leading-tight"
              style={{ fontFamily: "Segoe UI" }}
            >
              Control Layer
            </p>
          </div>
          <div className="w-full lg:w-[675px] h-auto min-h-[60px] sm:min-h-[70px] lg:h-[82px] bg-[#FE7A3E] p-4 sm:p-6 lg:p-[25px] border-t-[3px] shadow-md flex items-center justify-center">
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-white text-center leading-tight"
              style={{ fontFamily: "Segoe UI" }}
            >
              Davinci's Capability
            </p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="flex flex-col lg:flex-row mt-6 sm:mt-8 md:mt-12 lg:mt-[73px] gap-4 sm:gap-6 md:gap-8 lg:gap-[130px]">
          {/* Left Column */}
          <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-[5px] w-full lg:w-[399px]">
            {leftItems.map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className={`h-auto min-h-[50px] sm:min-h-[60px] lg:h-[71px] bg-white shadow-md rounded-sm flex items-center justify-center text-[#141A46] text-sm sm:text-base md:text-lg lg:text-[16px] font-semibold px-2 sm:px-4 lg:px-6 ${
                  i === 0 ? "border-t-[2px] sm:border-t-[3px] md:border-t-[4px] border-[#FE7A3E]" : ""
                }`}
                style={{ fontFamily: "Segoe UI" }}
              >
                {text}
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-[5px] w-full lg:w-[675px]">
            {rightItems.map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className={`h-auto min-h-[50px] sm:min-h-[60px] lg:h-[71px] bg-white shadow-md rounded-sm flex items-center justify-center text-[#737373] text-sm sm:text-base md:text-lg lg:text-[16px] font-semibold text-center px-2 sm:px-4 lg:px-6 ${
                  i === 0 ? "border-t-[2px] sm:border-t-[3px] md:border-t-[4px] border-[#FE7A3E]" : ""
                }`}
                style={{ fontFamily: "Segoe UI" }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
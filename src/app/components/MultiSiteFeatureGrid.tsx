import React from "react";

const features = [
  {
    title: "ERP-Agnostic Workflows",
    desc: "Seamlessly orchestrate processes across any ERP system, no matter the vendor.",
    icon: "📁",
  },
  {
    title: "Plant-Specific Routing Logic",
    desc: "Configure unique workflows for each plant, line, or region with ease.",
    icon: "🛠️",
  },
  {
    title: "Timezone-Aware, Multi-Language Compatible",
    desc: "Support global operations with timezone and language flexibility.",
    icon: "🌐",
  },
  {
    title: "Harmonized Data Model Across ERPs",
    desc: "Unify data from multiple ERPs into a single, actionable model.",
    icon: "🔗",
  },
];

export default function MultiSiteFeatureGrid() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-20 px-4 md:px-16 bg-[#f6f7f8] rounded-2xl mt-16">
      {/* Section Header */}
      <div className="w-full max-w-[700px] mx-auto text-center mb-14">
        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">
          Multi-Site. Multi-ERP. One Platform.
        </h3>
      </div>
      {/* Feature Grid */}
      <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md p-8 pt-16 flex flex-col items-start min-h-[240px] border border-gray-100"
          >
            {/* Circular Icon */}
            <div className="absolute -top-8 left-8 bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center text-3xl text-orange-500 border border-gray-100">
              {item.icon}
            </div>
            <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-2 mt-2">{item.title}</h4>
            <p className="text-gray-600 text-base md:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 
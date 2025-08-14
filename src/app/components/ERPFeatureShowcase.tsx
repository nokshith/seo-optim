"use client";

import Image from "next/image";

const features = [
  {
    icon: "/images/Ai Robot Laptop Streamline Outlined Line - Material Pro.png",
    title: "ERP-Agnostic Workflows",
    description:
      "Connect effortlessly with any ERP—SAP, Oracle, or custom. Standardize workflows across all your sites while staying tech-stack neutral.",
  },
  {
    icon: "/images/Social Distancing Correct 3 Streamline Covid - Free (1).png",
    title: "Plant-Specific Routing Logic",
    description:
      "Define custom routing based on each plant's unique layout, equipment, and process rules, ensuring localized efficiency with centralized control.",
  },
  {
    icon: "/images/Heating Furnace Streamline Atlas Line.png",
    title: "Timezone-Aware & Multi-Language",
    description:
      "Operate seamlessly across global teams with full support for time zones, languages, and local formats, ensuring real-time clarity and coordination.",
  },
  {
    icon: "/images/Lock Rotation Streamline Flex Line - Free.png",
    title: "Harmonized Data Model",
    description:
      "Unify data from multiple ERPs into one standardized model. This allows you to gain real-time visibility and enable faster, smarter decision-making.",
  },
];

export default function ERPFeatureShowcase() {
  return (
    <section className="w-full bg-[#F5F6F7] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#05284C] mb-16 md:mb-20 text-center font-segoe leading-tight max-w-2xl">
        Multi-Site. Multi-ERP. One Platform.
      </h2>

      {/* Feature Grid - Changed to 2 columns on medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32 w-full max-w-4xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 relative flex flex-col transition-shadow duration-300 hover:shadow-xl"
          >
            {/* Icon bubble */}
            <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
              <Image
                src={feature.icon}
                alt={`${feature.title} icon`}
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col flex-grow pt-8">
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-base text-[#4F4F4F] text-left leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
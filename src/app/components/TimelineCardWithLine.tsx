"use client";

import Image from "next/image";

interface TimelineCardProps {
  title: string;
  description: string;
  image: string;
  left: number;
  top?: number;
  reverseLineGradient?: boolean;
  isMobile?: boolean;
}

export default function TimelineCardWithLine({
  title,
  description,
  image,
  left,
  top = 32,
  reverseLineGradient = false,
  isMobile = false,
}: TimelineCardProps) {
  if (isMobile) {
    return (
      <div className="w-full bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-[#FE7A3E] font-semibold text-lg sm:text-xl leading-tight">
            {title}
          </h3>
        </div>

        <div className="mb-4 sm:mb-6">
          <p className="text-[#737373] font-medium text-sm sm:text-base text-justify leading-relaxed">
            {description}
          </p>
        </div>

        <div className="w-full drop-shadow-lg">
          <Image 
            src={image} 
            alt={title} 
            width={240} 
            height={132} 
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Horizontal Dashed Line with Gradient */}
      <div
        className="absolute w-[325px] h-[2px]"
        style={{
          top: `${top}px`,
          left: `${left - 26}px`,
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 8px, transparent 8px, transparent 16px)",
          WebkitMaskImage: reverseLineGradient
            ? "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1))"
            : "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))",
          maskImage: reverseLineGradient
            ? "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1))"
            : "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))",
          transform: "rotate(90deg)",
          transformOrigin: "left top",
        }}
      />

      {/* Card Content */}
      <div
        className="absolute flex flex-col items-start p-4"
        style={{
          width: "240px",
          top: `${top}px`,
          left: `${left}px`,
        }}
      >
        <div className="mb-[25px]">
          <h3 className="text-[#FE7A3E] font-semibold text-xl">{title}</h3>
        </div>

        <div className="mb-[25px]">
          <p className="text-[#737373] font-medium text-sm text-justify">
            {description}
          </p>
        </div>

        <div className="w-full drop-shadow-lg">
          <Image src={image} alt={title} width={240} height={132} />
        </div>
      </div>
    </>
  );
}

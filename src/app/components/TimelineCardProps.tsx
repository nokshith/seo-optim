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

      {/* Card */}
      <div
        className="absolute flex flex-col justify-between p-4 "
        style={{
          width: "240px",
          height: "330px",
          top: `${top}px`,
          left: `${left}px`,
        }}
      >
        {/* Title + Description Group with 25px spacing */}
        <div className="flex flex-col" style={{ gap: "25px" }}>
          {/* Title */}
          <div className="min-h-[36px] text-[#FE7A3E] font-semibold text-xl leading-tight overflow-hidden text-ellipsis">
            {title}
          </div>

          {/* Description */}
          <div className="min-h-[60px] text-[#737373] font-medium text-sm text-justify leading-[20px] overflow-hidden text-ellipsis">
            {description}
          </div>
        </div>

        {/* Image at Bottom */}
        <div className="w-full drop-shadow-lg mt-auto">
          <Image src={image} alt={title} width={240} height={132} />
        </div>
      </div>
    </>
  );
}

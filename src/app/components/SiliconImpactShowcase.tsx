"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image: "/images/industrial_impact.png",
    title: "Silicon Sensitivity",
    description:
      "The purity of silicon relies on precision controlled thermal environments. Ignis synchronizes heat inputs with inferred crystal growth states, ensuring uniformity, minimizing scrap, and enabling ultra-pure output with lower energy usage.",
  },
  {
    image: "/images/image 1 (2).png",
    title: "Aluminum Awareness",
    description:
      "For aluminum furnaces, dross buildup, thermal imbalance, and overheating events occur silently before catastrophic outcomes. IGNIS uses audio-based event detection to preempt these risks, while optimizing energy utilization for sustainable operations.",
  },
  {
    image: "/images/image 1 (3).png",
    title: "Iron Intelligence",
    description:
      "In high-pressure blast furnaces, small stress changes can escalate into collapses. IGNIS monitors internal stress fields and slag dynamics to predict and prevent these high-cost, high-risk failures.",
  },
  {
    image: "/images/image 1 (4).png",
    title: "Steel Intelligence",
    description:
      "In steel casting, minute vibrational distortions and abnormal harmonics can precede slab cracking or delamination. IGNIS detects these early signatures, recommends precise cooling or flow corrections, and reduces waste while maintaining metallurgical integrity.",
  },
  {
    image: "/images/image 1 (5).png",
    title: "Copper Cognition",
    description:
      "Oxidation rates and crucible fatigue are complex to monitor in copper refining. IGNIS tracks real-time oxidation profiles and signals when crucible wear nears tolerance thresholds — extending asset life and improving quality assurance.",
  },
  {
    image: "/images/image 1 (6).png",
    title: "Hybrid Operations",
    description:
      "For facilities that work with multiple materials across lines, IGNIS creates context-aware, material-specific intelligence layers — adapting its models and alerts dynamically to the asset it's connected to.",
  },
];

export default function ImmersiveScroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${slides.length * 1000}`, // proportional scroll
          pin: true,
          scrub: 1.5,
        },
      });

      slides.forEach((_, index) => {
        const slideSelector = `.slide-${index}`;

        // Fade in
        tl.fromTo(
          slideSelector,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" },
          index * 2
        );

        // Fade out (except last one)
        if (index < slides.length - 1) {
          tl.to(
            slideSelector,
            { autoAlpha: 0, y: -50, duration: 1, ease: "power2.in" },
            index * 2 + 1.5
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            slide-${index} absolute top-0 left-0 w-full h-full 
            flex flex-col md:flex-row items-center justify-center 
            px-4 sm:px-6 md:px-10 opacity-0 pointer-events-none
          `}
          style={{ zIndex: slides.length - index }}
        >
          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full max-w-[300px] md:max-w-[75%] rounded-xl shadow-xl object-cover"
              draggable={false}
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 md:px-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

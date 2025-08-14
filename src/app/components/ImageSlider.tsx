"use client";

import React, { useRef, useLayoutEffect } from "react";
// --- FIX: Import GSAP and ScrollTrigger from a CDN to resolve the build error ---
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// It's important to register the plugin after importing it.
gsap.registerPlugin(ScrollTrigger);

// --- Data for the slides ---
const scrollContent = [
  {
    imageUrl: "/images/image 1 (1).png",
    title: "Silicon Sensitivity",
    description:
      "The purity of silicon relies on precision controlled thermal environments. Ignis synchronizes heat inputs with inferred crystal growth states, ensuring uniformity, minimizing scrap, and enabling ultra-pure output with lower energy usage.",
  },
  {
    imageUrl: "/images/image 1 (2).png",
    title: "Aluminum Awareness",
    description:
      "For aluminum furnaces, dross buildup, thermal imbalance, and overheating events occur silently before catastrophic outcomes. IGNIS uses audio-based event detection to preempt these risks, while optimizing energy utilization for sustainable operations.",
  },
  {
    imageUrl: "/images/image 1 (3).png",
    title: "Iron Intelligence",
    description:
      "The purity of silicon relies on precision controlled thermal environments. IGNIS synchronizes heat inputs with inferred crystal growth stIn high-pressure blast furnaces, small stress changes can escalate into collapses. IGNIS monitors internal stress fields and slag dynamics to predict and prevent these high-cost, high-risk failures.ates, ensuring uniformity, minimizing scrap, and enabling ultra-pure output with lower energy usage.",
  },
  {
    imageUrl: "/images/image 1 (4).png",
    title: "Steel Intelligence",
    description:
      "In steel casting, minute vibrational distortions and abnormal harmonics can precede slab cracking or delamination. IGNIS detects these early signatures, recommends precise cooling or flow corrections, and reduces waste while maintaining metallurgical integrity.",
  },
  {
    imageUrl: "/images/image 1 (5).png",
    title: "Copper Cognition",
    description:
      "Oxidation rates and crucible fatigue are complex to monitor in copper refining. IGNIS tracks real-time oxidation profiles and signals when crucible wear nears tolerance thresholds — extending asset life and improving quality assurance.",
  },
  {
    imageUrl: "/images/image 1 (6).png",
    title: "Hybrid Operations",
    description:
      "For aluminum furnaces, dross buildup, thermal imbalance, and overheating events occur silently before catastrophic outcomes. IGNIS uses audio-based event detection to preempt these risks, while optimizing energy utilization for sustainable operations.For facilities that work with multiple materials across lines, IGNIS creates context-aware, material-specific intelligence layers — adapting its models and alerts dynamically to the asset it's connected to.",
  },
];

// --- The Image Slider Component ---
// --- The Image Slider Component ---
const ImageSlider = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // gsap.context() is the recommended way to use GSAP in React, as it provides automatic cleanup.
    const ctx = gsap.context(() => {
      // Get an array of all the slide elements
      const slides = gsap.utils.toArray(".slide-panel");
      if (!sliderRef.current || slides.length === 0) return;

      // Create the main horizontal scroll animation
      const horizontalScroll = gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none", // Linear movement
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          scrub: 1, // Smoothly scrubs the animation along with the scroll
          snap: {
            snapTo: 1 / (slides.length - 1), // Snaps to the nearest slide
            duration: { min: 0.2, max: 0.5 }, // Defines the snap animation speed
            ease: "power1.inOut",
          },
          // Set the end point of the scroll trigger
          end: () =>
            "+=" +
            ((sliderRef.current?.offsetWidth ?? window.innerWidth) -
              window.innerWidth),
        },
      });

      // Animate the content of each slide as it comes into view
      (slides as HTMLElement[]).forEach((slide) => {
        const slideElem = slide;
        const image = slideElem.querySelector(".slide-image");
        const content = slideElem.querySelector(".slide-content");

        // Animate the image and content when the slide is in the center
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            containerAnimation: horizontalScroll,
            start: "left center",
            end: "right center",
            scrub: true,
          },
        });

        // Fade image in then out
        tl.fromTo(
          image,
          { opacity: 0 },
          { opacity: 1, ease: "power2.out", duration: 0.4 }
        ).to(
          image,
          { opacity: 0, ease: "power2.in", duration: 0.4 },
          ">" // Delay slightly after fade-in
        );

        // Fade content in then out
        tl.fromTo(
          content,
          { opacity: 0 },
          { opacity: 1, ease: "power2.out", duration: 0.4 },
          "<"
        ).to(content, { opacity: 0, ease: "power2.in", duration: 0.4 });

        // gsap
        //   .timeline({
        //     scrollTrigger: {
        //       trigger: slide,
        //       containerAnimation: horizontalScroll, // Link to the main scroll animation
        //       start: "left center", // Trigger when the left of the slide hits the center of the viewport
        //       end: "right center", // End when the right of the slide leaves the center
        //       scrub: 1, // Smooth scrubbing
        //       // markers: true, // Uncomment for debugging
        //     },
        //   })
        //   // --- EDIT: Image comes from bottom to top ---
        //   .fromTo(
        //     image,
        //     { opacity: 0 },
        //     { opacity: 1, ease: "power2.out", duration: 0.8 }
        //   )
        //   // --- EDIT: Content comes from top to bottom ---
        //   .fromTo(
        //     content,
        //     { opacity: 0 },
        //     { opacity: 1, ease: "power2.out", duration: 0.8 },
        //     "<" // Start at the same time as the image animation
        //   );
      });
    }, componentRef); // Scope the context to the component

    return () => ctx.revert(); // Cleanup GSAP animations and ScrollTriggers
  }, []);

  return (
    <div ref={componentRef} className="relative bg-gray-50">
      <h2 className="absolute top-20 -translate-x-1/2 left-1/2 text-3xl font-bold text-center text-gray-900">
        Industrial Impact
      </h2>
      <div className="h-screen mx-auto overflow-hidden">
        <div
          ref={sliderRef}
          className="flex h-full"
          style={{ width: `${scrollContent.length * 100}%` }}
        >
          {scrollContent.map((item, index) => (
            <div
              key={index}
              className="slide-panel flex-shrink-0 w-full h-full flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center"
              style={{ width: `${100 / scrollContent.length}%` }} // Each slide takes up its portion of the container
            >
              {/* Image Block */}
              <div className="hidden md:flex relative w-full md:w-1/2 h-full bg-transparent overflow-hidden items-center justify-end ">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-[600] h-[400] slide-image rounded-lg shadow-lg"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/800x800/cccccc/ffffff?text=Image+Not+Found")
                  }
                />
              </div>

              {/* Content Block */}
              <div className="w-full md:w-1/2 text-center md:text-left slide-content flex flex-col items-center md:items-start">
                <div className="w-3/5">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
// This component demonstrates how the ImageSlider fits into a larger page layout.
export default function App() {
  return <ImageSlider />;
}

"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function RequestDemoSection() {
  return (
    <section id="contact-section" className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 text-center">
          <div className="space-y-2 sm:space-y-4">
            <ScrollAnimation>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-akatab font-bold tracking-tighter text-[#141A46] leading-tight sm:leading-snug lg:leading-normal">
                Let Your Furnace Think. Let Your Factory Breathe.
              </h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="my-4 mx-auto max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-[#44546F] leading-relaxed">
              Ignis AI turns heat into thought, and thought into action. It is not an upgrade — it is a transformation.
              </p>
            </ScrollAnimation>
          </div>
          <div className="w-full max-w-sm space-y-2 sm:space-y-0 sm:space-x-2 sm:flex sm:justify-center">
            <ScrollAnimation>
              <button
                className="w-full sm:w-auto border border-[#141A46] text-[#141A46] hover:bg-[#141A46] hover:text-white hover:font-semibold transition-colors px-4 py-2 rounded-full text-sm sm:text-base"
                onClick={() => {
                  window.open("mailto:arizvi@virtueserve.com", "_blank");
                }}
              >
                Request a Demo
              </button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

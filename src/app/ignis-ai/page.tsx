"use client";
import React, { useState } from "react";
import { CheckIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import WhyItMatters from "../components/WhyItMatters";
import SiliconImpactShowcase from "../components/SiliconImpactShowcase";



const IgnisAi = (): JSX.Element => {
  // Navigation menu items data
  const navigationItems = [
    { label: "Features", href: "#features" },
    { label: "AI & IOT", href: "#ai-iot" },
    { label: "Ignis AI", href: "#ignis-ai" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  // How Ignis Thinks data
  const thinkingSteps = [
    {
      icon: "/images/perceive_icon.png",
      title: "Perceive",
      description:
        "Ignis ingests real-time sensor streams, fusing sound, temperature, and pressure into a coherent operational narrative.",
    },
    {
      icon: "/images/interpret_icon.png",
      title: "Interpret",
      description:
        "Ignis detects hidden stress, cracks, slag, and combustion issues early preventing failures before they surface.",
    },
    {
      icon: "/images/respond_icon.png",
      title: "Respond",
      description:
        "With intelligent prompts and self-adjustments, Ignis responds instantly, avoiding downtime and ensuring safety.",
    },
  ];

  // Cognitive capabilities data
  const capabilities = [
    {
      icon: "/images/fracture_forewarning_icon.png",
      title: "Fracture Forewarning",
      description:
        "Detects the subtlest shifts in vibrational harmonics precursors to structural failure invisible to human senses.",
    },
    {
      icon: "/images/aural_icon.png",
      title: "AI-Powered Aural Insight",
      description:
        'Ignis "hears" like no technician can decoding the tonal fingerprint of your furnace to distinguish healthy from hazardous.',
    },
    {
      icon: "/images/thermal_icon.png",
      title: "Live Thermal Awareness",
      description:
        "Dynamic, interactive dashboards render the heartbeat of your furnace in real time with predictive arcs and AI-suggested interventions.",
    },
    {
      icon: "/analysis-2.svg",
      title: "Prescriptive Foresight",
      description:
        "No more post-mortems. IGNIS delivers next-best actions, risk quantification, and recommended responses on the fly.",
    },
  ];

  // Why It Matters card items
  const whyItMattersItems = [
    {
      title: "Downtime becomes preemptive intervention",
      content: "With Ignis, unplanned downtime is a relic of the past. It transforms into proactive maintenance, where potential failures are detected and resolved before they disrupt operations.",
      image: "/images/Frame79.png",
    },
    {
      title: "Failures dissolve into foresight",
      content:
        "It's no longer acceptable to wait for a breakdown.\nIt's no longer viable to rely on periodic inspections or delayed data.\nToday's factories demand machine-level cognition and real-time situational awareness.",
      image: "/images/Frame 29.png",
    },
    {
      title: "Human error is augmented with intelligent guidance",
      content: "Operators are empowered with AI-driven insights, not overwhelmed by data.\nIgnis transforms complex furnace operations into intuitive, actionable intelligence.",
      image: "/images/Frame79.png",
    },
    {
      title: "Maintenance transforms from reactive to regenerative",
      content: "With Ignis, maintenance is no longer a cost center.\nIt's a value driver, extending asset life and enhancing operational efficiency.",
      image: "/images/Frame 29.png",
    },
  ];

  // Da Vinci Alliance features
  const daVinciFeatures = [
    "True edge inference at sub-second latencies",
    "AI agents orchestrated across IoT layers",
    "One MES. Infinite intelligence pathways.",
    "From micro-cracks to macro-efficiency  all observed, all optimized",
  ];

  // Transformational outcomes benefits
  const transformationalBenefits = [
    {
      title: "99% Less Unplanned Downtime",
      description:
        "Ignis enables early intervention, virtually eliminating surprise failures.",
    },
    {
      title: "2x–5x ROI in 6–12 Months",
      description:
        "Gain fast returns via reduced downtime, longer furnace life, and lower maintenance costs.",
    },
    {
      title: "15–20% Better Thermal Efficiency",
      description:
        "Improved control cuts fuel use, emissions, and boosts sustainability.",
    },
    {
      title: "Smarter Operators at Scale",
      description:
        "Real-time alerts and no-code tools help workers make faster, better decisions no data science needed.",
    },
  ];

  // Engineered for Future feature cards
  const futureFeatureCards = [
    {
      id: 1,
      title: "Zero-Latency Edge Computing",
      description:
        "Ignis supports real-time processing directly at the edge. Whether your site is connected to the cloud or air-gapped for security, the AI inference engine runs locally  giving you immediate alerts and zero-lag insights.",
      imageSrc: "/images/edge_computing_icon.png",
    },
    {
      id: 2,
      title: "Human-Centric Design",
      description:
        "From dashboards that visualize confidence intervals and time-to-failure, to mobile alerts that support field engineers, Ignis is not a black box. It's a transparent collaborator built to elevate human decision-making.",
      imageSrc: "/images/centric_design_icon.png",
    },
    {
      id: 3,
      title: "Composable AI Architecture",
      description:
        "Designed as modular bricks, Ignis can scale from a single furnace to an entire plant. Add features like emissions prediction, predictive maintenance, or safety incident prevention without disrupting existing systems.",
      imageSrc: "/images/aiarchitecture_icon.png",
    },
    {
      id: 4,
      title: "Security & Compliance by Design",
      description:
        "With zero-trust architecture, audit-ready logs, and GDPR/ESG support, Ignis is not just powerful it's responsible. Data stays where it belongs. Privacy is preserved. Governance is native.",
      imageSrc: "/images/compliance_icon.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#f5f6f7] flex flex-row justify-center w-full">
      <div className="bg-[#f5f6f7] w-full max-w-[1800px] relative">
        {/* Navigation Bar */}


        {/* Hero Section - Call to Action */}
        {/* HERO SECTION */}
        <section className="w-full max-w-[1208px] mx-auto bg-[url('/images/steel-factory-metallurgical.png')] bg-cover bg-center py-8 sm:py-0 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-0" />

          <div className="
    relative z-10
    flex flex-col-reverse sm:flex-row
    items-center
    w-full max-w-[1208px] mx-auto
    min-h-[320px] sm:min-h-[460px] lg:min-h-[606px]
    px-4
    ">

            {/* Empty div for layout, shown only on sm+ screens */}
            <div className="hidden sm:block flex-1" />

            {/* Text Block: right on desktop/tablet, bottom on mobile */}
            <div className="
      flex flex-col gap-4
      flex-1
      sm:max-w-[300px] lg:max-w-[376px]
      sm:items-start items-center
      text-center sm:text-left
      py-4 sm:py-0
      ">
              <h1 className="font-bold text-white text-2xl sm:text-4xl lg:text-6xl leading-tight font-['Segoe_UI-Bold',Helvetica]">
                IGNIS AI
              </h1>
              <h2 className="font-bold text-[#fe7a3e] text-base sm:text-xl lg:text-2xl leading-normal font-['Segoe_UI-Bold',Helvetica]">
                The Sentient Core of Thermal Intelligence
              </h2>
              <p className="font-normal text-white text-sm sm:text-base text-justify leading-normal font-['Segoe_UI-Semibold',Helvetica]">
                Where molten metal meets machine cognition — Ignis AI is the living,
                breathing intelligence embedded within your furnace. It listens,
                learns, and intervenes before the unthinkable occurs. Designed for
                industries that run red-hot — and can't afford to fail.
              </p>
              <Button
                variant="default"
                className="mt-2 sm:mt-4 w-[140px] sm:w-[159px] bg-white text-black hover:bg-white/90 rounded-lg px-4 py-2"
              >
                <span className="font-normal text-sm sm:text-lg font-['Segoe_UI-Semibold',Helvetica]">
                  Request a Demo
                </span>
              </Button>
            </div>
          </div>
        </section>


        {/* OVERLAYING "HOW IGNIS THINKS" SECTION */}
        <section className="relative z-10 -mt-8 sm:-mt-[70px] w-full max-w-[932px] mx-auto px-4">
          <Card className="rounded-t-lg overflow-hidden shadow-[0px_4px_14px_-5px_#00000040]">
            <CardContent className="p-4 sm:p-8 lg:p-10">

              <h2 className="mb-6 sm:mb-10 lg:mb-12 font-['Segoe_UI-Semibold',Helvetica] text-xl sm:text-2xl lg:text-3xl text-[#141a46] text-center">
                How Ignis Thinks
              </h2>

              {/* Steps - stacks vertically on mobile, rows on md+ */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-2 w-full max-w-[764px] mx-auto">
                {thinkingSteps.map((step, index) => (
                  <div
                    key={index}
                    className="group flex flex-col flex-1 items-center gap-3.5 p-5 sm:p-6 hover:bg-[#141A46] rounded-lg transition-colors"
                  >
                    <img
                      className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                      alt={`${step.title} icon`}
                      src={step.icon}
                    />
                    <h3 className="font-['Segoe_UI-Semibold',Helvetica] text-black text-base sm:text-lg text-center group-hover:text-white">
                      {step.title}
                    </h3>
                    <p className="font-['Segoe_UI-Semibold',Helvetica] text-[#727272] text-xs sm:text-sm text-center group-hover:text-white">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>


        {/* Cognitive Capabilities Section */}
        <section className="w-full mt-[60px] sm:mt-[80px] lg:mt-[90px] relative px-0">
          {/* FULL WIDTH white box */}
          <div className="w-full min-h-[400px] sm:h-[500px] lg:h-[572px] bg-white shadow-[0px_4px_14px_-5px_#00000040] rounded-none sm:rounded-none md:rounded-none lg:rounded-none px-4 sm:px-8 md:px-8">
            <div className="w-full mx-auto py-8 sm:py-12 lg:py-14 px-0 sm:px-0">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] text-[#141a46] text-center mb-8 sm:mb-10 lg:mb-12 font-semibold font-['Segoe_UI-Semibold',Helvetica]">
                Cognitive Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-[54px] xl:gap-[108px] max-w-6xl mx-auto">
                {capabilities.slice(0, 3).map((capability, index) => (
                  <div
                    key={index}
                    className="w-full min-h-[300px] sm:min-h-[320px] lg:min-h-[356px] bg-[#f5f6f7] rounded-t-[10px] overflow-hidden shadow-[0px_4px_14px_-5px_#00000040] flex flex-col items-start justify-center gap-3.5 p-[20px] sm:p-[25px] mt-0"
                  >
                    <img
                      className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px] mb-2"
                      alt="Icon"
                      src={capability.icon}
                    />
                    <h3 className="font-['Segoe_UI-Semibold',Helvetica] text-black text-xl sm:text-2xl">
                      {capability.title}
                    </h3>
                    <p className="w-full font-['Segoe_UI-Semibold',Helvetica] text-[#727272] text-sm sm:text-base">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <WhyItMatters></WhyItMatters>

        {/* Da Vinci Alliance Section */}
        <section className="w-full mt-[20px] sm:mt-[20px] lg:mt-[100px] px-0">
          <div className="w-full bg-white shadow-[0px_4px_14px_-5px_#00000040] rounded-none sm:rounded-none md:rounded-none lg:rounded-none py-12 sm:py-14 lg:py-16 px-4 sm:px-8 md:px-0">
            <div className="w-full max-w-6xl mx-auto">
              <h2 className="font-semibold text-[#141a46] text-[24px] sm:text-[28px] lg:text-[32px] text-center w-full mb-8 sm:mb-10 lg:mb-12">
                The Da Vinci Alliance
              </h2>
              <div className="flex flex-col lg:flex-row gap-14 items-center w-full max-w-full">
                {/* Text Box */}
                <div className="flex flex-col w-full lg:w-[515px] gap-[18px] sm:gap-[22px]">
                  <h3 className="font-semibold text-[#fe7a3e] text-[20px] sm:text-[24px] lg:text-[28px] font-semibold">
                    A Neural Link Between Furnace and Factory Floor
                  </h3>
                  <p className="text-[#727272] text-sm sm:text-base text-justify font-semibold">
                    Ignis AI is deeply woven into the Da Vinci Smart MES fabric enabling factory-wide symphonies of sensing, synchronization, and self-correction.
                  </p>
                  <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                    {daVinciFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <img
                          src="/images/tickmark.png"
                          alt="Tick mark"
                          className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] mt-1.5 sm:mt-2 flex-shrink-0"
                        />
                        <span className="text-[#727272] text-sm sm:text-base leading-6 sm:leading-8 font-semibold">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Image Box */}
                <div className="w-full lg:w-[672px] h-[300px] sm:h-[400px] lg:h-[538px] bg-[#d9d2d2] overflow-hidden rounded-md">
                  <img
                    className="w-full h-full object-cover"
                    alt="Industrial furnace showing the Da Vinci Alliance technology in action"
                    src="/images/Frame 60.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Silicon Sensitivity Section */}
        <SiliconImpactShowcase />

        {/* Engineered For Future Section */}
        <section className="w-full mt-[60px] sm:mt-[80px] lg:mt-[100px] py-12 sm:py-14 lg:py-16 px-4 relative">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] text-[#141a46] text-center font-semibold mb-12 sm:mb-14 lg:mb-16 max-w-[572px] mx-auto">
              Engineered for the Future of Industry
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-x-[90px] lg:gap-y-[68px] justify-center">
              {futureFeatureCards.map((card) => (
                <div key={card.id} className="relative w-full max-w-[449px] min-h-[250px] sm:min-h-[287px] mx-auto">
                  <div className="relative h-full">
                    <img
                      className="w-[80px] h-[80px] sm:w-[104px] sm:h-[104px] absolute -top-8 sm:-top-12 left-6 sm:left-10 z-10"
                      alt="Feature icon"
                      src={card.imageSrc}
                    />
                    <Card className="mt-8 sm:mt-12 shadow-[0px_4px_15px_#0000000f] h-full">
                      <CardContent className="pt-8 sm:pt-10 pb-[25px] sm:pb-[30px] px-[25px] sm:px-[39px] flex flex-col gap-y-[12px] sm:gap-y-[14px]">
                        <h3 className="text-xl sm:text-2xl font-semibold text-black">
                          {card.title}
                        </h3>
                        <p className="text-[#727272] text-sm sm:text-base text-justify font-semibold">
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}

              {/* Bottom wide card inside grid, centered and col-span-2 */}
              <div className="relative lg:col-span-2 max-w-[799px] mx-auto mt-8 sm:mt-12">
                <div className="relative h-full">
                  <img
                    className="w-[80px] h-[80px] sm:w-[104px] sm:h-[104px] absolute -top-8 sm:-top-12 left-1/2 transform -translate-x-1/2 z-10"
                    alt="Agentic Autonomy Icon"
                    src="/images/agentic_icon.png"
                  />
                  <Card className="shadow-[0px_4px_15px_#0000000f] h-full">
                    <CardContent className="pt-8 sm:pt-10 pb-[25px] sm:pb-[30px] px-[25px] sm:px-[39px] flex flex-col gap-3 sm:gap-3.5">
                      <h3 className="text-xl sm:text-2xl font-semibold text-black">
                        Agentic Autonomy
                      </h3>
                      <p className="text-[#727272] text-sm sm:text-base text-justify font-semibold">
                        Each deployment of Ignis becomes its own learning agent building a knowledge base from your specific furnace behavior, your unique audio patterns, and your plant's rhythms. It doesn't just detect – it adapts, evolving into a co-pilot that grows with you.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformational Outcomes Section */}
        <div className="flex flex-col lg:flex-row gap-14 items-center justify-center w-full max-w-full bg-[#FFFFFF]  md:py-16 shadow-[0px_4px_14px_-5px_#00000040] rounded-none sm:rounded-none md:rounded-none lg:rounded-none px-4 sm:px-8 md:px-8">
          {/* Image Box */}
          <div className="w-full lg:w-[672px] h-[300px] sm:h-[400px] lg:h-[538px] overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover"
              alt="Industrial furnace showing the Da Vinci Alliance technology in action"
              src="/images/Frame 60.png"
            />
          </div>

          {/* Text Box */}
          <div className="flex flex-col w-full lg:w-[515px] gap-[18px] sm:gap-[22px]">
            <h3 className="font-semibold text-[#fe7a3e] text-[20px] sm:text-[24px] lg:text-[28px] font-semibold">
              A Neural Link Between Furnace and Factory Floor
            </h3>
            <p className="text-[#727272] text-sm sm:text-base text-justify font-semibold">
              Ignis AI is deeply woven into the Da Vinci Smart MES fabric enabling factory-wide symphonies of sensing, synchronization, and self-correction.
            </p>
            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              {daVinciFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img
                    src="/images/tickmark.png"
                    alt="Tick mark"
                    className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] mt-1.5 sm:mt-2 flex-shrink-0"
                  />
                  <span className="text-[#727272] text-sm sm:text-base leading-6 sm:leading-8 font-semibold">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final Call to Action Section */}
        <section className="flex flex-col items-center gap-4 sm:gap-6 py-8 sm:py-10 lg:py-12 w-full max-w-3xl mx-auto mb-[60px] sm:mb-[80px] lg:mb-[100px] px-4">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#141a46] text-center leading-tight">
            Let Your Furnace Think. Let Your Factory Breathe.
          </h2>

          <p className="text-sm sm:text-base font-semibold text-[#727272] text-center">
            Ignis AI turns heat into thought, and thought into action. It is not an
            upgrade — it is a transformation.
          </p>

          <Button
            variant="outline"
            className="rounded-[22px] border-[#141a4661] text-[#141a46] text-base sm:text-lg font-normal px-4 sm:px-6 py-2.5"
          >
            Book a&nbsp;&nbsp;Demo
          </Button>
        </section>
      </div>
    </div>
  );
};

export default IgnisAi;
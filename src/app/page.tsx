"use client";
import { useEffect, useState } from "react";
import Head from 'next/head';
import ImageTextLayout from "./components/ImageTextLayout";
import ScrollAnimation from "./components/ScrollAnimation";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const keyFeatures = [
    {
      id: 1,
      title: "Real-time Analytics",
      description:
        "Monitor your manufacturing processes in real-time with advanced analytics and reporting.",
      icon: "/svg/Analytics-vector.svg",
    },
    {
      id: 2,
      title: "Emissions Reporting",
      description:
        "Stay compliant with evolving industry standards through automated emissions tracking and reporting.",
      icon: "/svg/Emission-vector.svg",
    },
    {
      id: 3,
      title: "Inventory Optimization",
      description:
        "Streamline your supply chain with AI-driven inventory management and forecasting.",
      icon: "/svg/Inventory-vector.svg",
    },
    {
      id: 4,
      title: "Quality Management",
      description:
        "Ensure consistent product quality with integrated quality control and management systems.",
      icon: "/svg/quality-vector.svg",
    },
    {
      id: 5,
      title: "ERP Integration",
      description:
        "Seamlessly connect Davinci with your existing ERP systems for comprehensive operational oversight.",
      icon: "/svg/integration-vector.svg",
    },
    {
      id: 6,
      title: "Modular Solutions",
      description:
        "Customize your manufacturing software with modular features tailored to your specific needs.",
      icon: "/svg/modular-vector.svg",
    },
  ];

  const aiAdvantages = [
    "Predictive maintenance to minimize downtime",
    "Real-time process optimization",
    "Intelligent decision-making capabilities",
    "Comprehensive data analysis for continuous improvement",
  ];
  const ignisAIAdvantages = [
    "Real-time furnace performance analysis",
    "Predictive maintenance for refinery equipment",
    "Energy efficiency optimization",
    "Anomaly detection in refinery processes",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const featureSection = document.getElementById("feature-section");
      if (featureSection) {
        const featureOffsetTop = featureSection.offsetTop;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= featureOffsetTop) {
          setShowScrollToTop(true);
        } else {
          setShowScrollToTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>AI Manufacturing Platform | Smart Factory Operations | Davinci MES - Real-time Intelligence & Autonomous Decision Making</title>
        <meta
          name="description"
          content="Transform your manufacturing with Davinci's AI-powered platform. Real-time analytics, predictive maintenance, quality management, and ERP integration for smarter factory operations. Experience next-generation MES with autonomous decision-making capabilities."
        />
        <meta name="keywords" content="AI manufacturing platform, smart manufacturing, industrial AI, predictive analytics, Davinci MES, autonomous factory, real-time factory data, manufacturing execution system, IoT manufacturing, predictive maintenance, quality management, ERP integration" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.davincism.io/" />
        <meta name="author" content="Davinci Manufacturing" />
        <meta name="language" content="English" />
        <meta property="og:title" content="AI Manufacturing Platform for Smarter Factory Operations" />
        <meta property="og:description" content="Experience the next generation of MES with Davinci—real-time, autonomous, AI-powered manufacturing intelligence." />
        <meta property="og:url" content="https://www.davincism.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.davincism.io/images/ignis-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DaVinci Manufacturing" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Manufacturing Platform for Smarter Factory Operations" />
        <meta name="twitter:description" content="Experience the next generation of MES with Davinci—real-time, autonomous, AI-powered manufacturing intelligence." />
        <meta name="twitter:image" content="https://www.davincism.io/images/ignis-banner.png" />
        <meta name="twitter:site" content="@davincimanufacturing" />
        <meta name="twitter:creator" content="@davincimanufacturing" />
      </Head>

      <div className="bg-white h-dvh font-dm">
        <main className="pt-12" role="main">
          <div className="container mx-auto px-4 py-2">
            <Breadcrumbs />
          </div>
          <section id="hero-section" className="py-20 relative" aria-labelledby="hero-heading">
            <img
              src="/svg/bgLogo.svg"
              className="absolute bottom-0 hidden md:block"
              alt="Davinci Manufacturing Background Logo"
            />
            <ScrollAnimation>
              <div className="md:px-[8%] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 id="hero-heading" className="text-left text-[#141A46] font-baloo font-semibold text-[40px] sm:text-[60px] md:text-[120px] leading-none">
                  Smart
                </h1>
                <h2 className="text-left text-[#F54E00] font-baloo font-semibold text-[40px] sm:text-[60px] md:text-[75px] leading-none">
                  Manufacturing .
                </h2>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="flex justify-end md:px-[8%] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-5">
                <div className="md:w-1/2">
                  <h3 className="text-xl text-[#141A46] sm:text-2xl md:text-3xl font-semibold">
                    Powering the Future
                  </h3>
                  <p className="text-base text-[#44546F] sm:text-lg mt-4 font-medium leading-8">
                    Empower your industrial operations with Davinci, the
                    cutting-edge smart manufacturing software leveraging AI and
                    IoT for unparalleled efficiency and insight. Our comprehensive
                    manufacturing execution system (MES) provides real-time
                    monitoring, predictive analytics, and autonomous decision-making
                    capabilities to optimize your production processes and reduce
                    operational costs while improving product quality and compliance.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </section>
          <section
            id="feature-section"
            className="bg-[#F5F6F7] w-full py-12 md:py-16"
          >
            <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
              <ScrollAnimation>
                <h3 className="text-2xl font-akatab font-bold sm:text-5xl text-center mb-12 text-gray-900">
                  Key Features
                </h3>
              </ScrollAnimation>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {keyFeatures.map((feature) => (
                  <ScrollAnimation key={feature.id}>
                    <div className="flex flex-col items-center space-y-3 text-center p-6 rounded-lg">
                      <div className="h-14 w-14 flex items-center justify-center">
                        <img
                          src={feature.icon}
                          alt={`${feature.title} - Davinci Manufacturing Feature Icon`}
                          className="h-auto max-h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
          <section
            id="ai-iot-section"
            className="h-auto flex justify-center w-full px-4 sm:px-6 lg:px-8"
          >
            <ScrollAnimation>
              <ImageTextLayout
                img="/images/ai-banner.png"
                title="AI & IoT"
                subTitle="The Core of Davinci"
                imgPosition="right"
                description="Davinci harnesses the power of artificial intelligence and Internet of Things (IoT) to transform your manufacturing processes. Our software integrates seamlessly with your existing infrastructure, providing"
                advantages={aiAdvantages}
              />
            </ScrollAnimation>
          </section>
          <section
            id="ignisAI-section"
            className="bg-[#F5F6F7] h-auto flex justify-center w-full px-4 sm:px-6 lg:px-8"
          >
            <ScrollAnimation>
              <ImageTextLayout
                img="/images/ignis-banner.png"
                title="Ignis AI"
                subTitle="Advanced Furnace and Refinery Intelligence"
                imgPosition="left"
                description="Ignis AI is our specialized artificial intelligence system designed to revolutionize furnace analysis and refinery monitoring within the Davinci platform."
                advantages={ignisAIAdvantages}
              />
            </ScrollAnimation>
          </section>

          <section id="contact-section" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <ScrollAnimation>
                    <h2 className="text-3xl font-akatab font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#141A46]">
                      Ready to Transform Your Manufacturing?
                    </h2>
                  </ScrollAnimation>
                  <ScrollAnimation>
                    <p className="my-4 mx-auto max-w-2xl text-[#44546F] md:text-xl">
                      Get in touch with us to learn how Davinci can revolutionize
                      your industrial operations, enhance efficiency, and
                      future-proof your production systems. Our team of manufacturing
                      experts and AI specialists are ready to help you implement
                      smart manufacturing solutions that drive operational excellence,
                      reduce costs, and improve product quality through advanced
                      analytics and predictive maintenance capabilities.
                    </p>
                  </ScrollAnimation>
                </div>

                <div className="w-full max-w-sm space-y-2 sm:space-y-0 sm:space-x-2 sm:flex sm:justify-center">
                  {/* <RequestDemoButton /> */}
                  <ScrollAnimation>
                    <button
                      className="w-full sm:w-auto border border-[#141A46] text-[#141A46] hover:bg-[#141A46] hover:text-white hover:font-semibold transition-colors px-4 py-2 rounded-full"
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
        </main>
        <Footer />
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 h-12 w-12 flex items-center justify-center bg-[#F54E00] text-white rounded-full shadow-lg hover:bg-[#e04900] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}

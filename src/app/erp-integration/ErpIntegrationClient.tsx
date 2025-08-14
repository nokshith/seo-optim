import Image from "next/image";
import Head from 'next/head';
import WhyWeWinSection from "../components/WhyWeWinSection";
import LeadingERPSystemsSection from "../components/LeadingERPSystemsSection";
import RealImpactSection from "../components/RealImpactSection";
import SecuritySection from "../components/SecuritySection";
import ErpFeatureShowcase from "../components/ERPFeatureShowcase";
import BeyondAPIsSection from "../components/BeyondAPIsSection";
import SmartVsCompetitorSection from "../components/SmartVsCompetitorSection";
import TriggerTraceability from "../components/TriggerTraceability";
import Footer from "../components/Footer";
import DemoBtn from "../components/DemoBtn";

export default function ErpIntegrationClient() {
  return (
    <>
      

      {/* === ERP Integrations Section === */}
      <section className="w-full flex justify-center bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-[1205px] flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-[100px] mt-[40px] px-4 sm:px-6 lg:px-8">
          {/* Left Text Block */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[437px] lg:self-center order-2 lg:order-1">
            <h1 className="font-segoe font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#141A46] leading-tight">
              ERP Integrations
            </h1>
            <h2 className="font-segoe font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#FE7A3E] leading-tight">
              Built to Command, Designed to Flow.
            </h2>
            <p className="font-segoe font-semibold text-sm sm:text-base md:text-lg text-[#4F4F4F] text-justify leading-relaxed">
              DaVinci doesn't just integrate with ERP — it becomes its operational brainstem.
            </p>
            <p className="font-segoe font-semibold text-sm sm:text-base md:text-lg text-[#4F4F4F] text-justify leading-relaxed">
              Manufacturers run on precision. And precision demands zero lag between planning and execution. DaVinci's ERP integrations are engineered not as patches but as embedded conduits of truth between your enterprise core and the real-time factory floor.
            </p>
            <button className="bg-[#FE7A3E] text-white rounded-md px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-segoe font-semibold w-fit hover:bg-[#e56a2e] transition-colors duration-200 shadow-md">
              Book Discovery Call
            </button>
          </div>

          {/* Image Section */}
          <div className="flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-6 items-center order-1 lg:order-2 w-full lg:w-auto">
            {/* Center Image */}
            <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[336px] lg:w-[336px]">
              <Image
                src="/images/erp-1.png"
                alt="ERP integration dashboard in smart manufacturing environment"
                width={336}
                height={419}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            {/* Right Column Images */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[260px] sm:max-w-[297px] lg:max-w-[297px]">
              <Image
                src="/images/erp-2.png"
                alt="ERP feature integration showing real-time data flow"
                width={297}
                height={275}
                className="object-cover w-full h-auto"
              />
              <Image
                src="/images/erp-3.png"
                alt="ERP system connectivity and workflow automation"
                width={297}
                height={275}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Why We Win Section === */}
      <section className="w-full py-8 sm:py-12">
        <WhyWeWinSection />
      </section>

      {/* === Multi-Site Feature Grid Section === */}
      <section className="w-full bg-gray-100 py-8 sm:py-12">
        <LeadingERPSystemsSection />
      </section>

      {/* === Trigger Traceability Section === */}
      <section className="w-full">
        <TriggerTraceability />
      </section>

      {/* === Real Impact Section === */}
      <section className="w-full py-8 sm:py-12">
        <RealImpactSection />
      </section>

      {/* === Security Section === */}
      <section className="w-full">
        <SecuritySection />
      </section>

      {/* === ERP Feature Showcase Section === */}
      <section className="w-full py-8 sm:py-12">
        <ErpFeatureShowcase />
      </section>
      {/* === Beyond APIs Section === */}
      <section className="w-full">
        <BeyondAPIsSection />
      </section>

      {/* === Smart vs Competitor Section === */}
      <section className="w-full bg-gray-100 py-8 sm:py-12">
        <SmartVsCompetitorSection />
        <div className="mt-6 sm:mt-8 flex justify-center">
          <DemoBtn />
        </div>
      </section>

      {/* === Footer Section === */}
      <section className="w-full bg-gray-900">
        <Footer />
      </section>
    </>
  );
}
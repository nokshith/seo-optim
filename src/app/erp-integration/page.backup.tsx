import Image from "next/image";
import WhyWeWinSection from "../components/WhyWeWinSection";
import LeadingERPSystemsSection from "../components/LeadingERPSystemsSection";
import RealImpactSection from "../components/RealImpactSection";
import SecuritySection from "../components/SecuritySection";
import ErpFeatureShowcase from "../components/ERPFeatureShowcase";
import BeyondAPIsSection from "../components/BeyondAPIsSection";
import SmartVsCompetitorSection from "../components/SmartVsCompetitorSection";
import TriggerTraceability from "../components/TriggerTraceability";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import DemoBtn from "../components/DemoBtn";

export default function ErpIntegrationSection() {
  return (
    <div className="overflow-x-hidden w-screen max-w-full">
      {/* === ERP Section === */}
      <section className="relative w-full flex justify-center bg-gray-100 py-20 px-4 overflow-x-hidden">
        <div className="relative w-full max-w-[1205px] h-[588px] flex flex-row gap-[84px] items-center overflow-hidden">
          {/* Left Text Block */}
          <div className="flex flex-col gap-[15px] w-[437px] h-[424px] p-[60px_0px_40px] rounded-[17px]">
            <h1 className="font-segoe font-bold text-[40px] leading-[53px] text-[#141A46]">
              ERP Integrations
            </h1>
            <h2 className="font-segoe font-bold text-[20px] leading-[27px] text-[#FE7A3E]">
              Built to Command, Designed to Flow.
            </h2>
            <p className="font-segoe font-semibold text-[15px] leading-[20px] text-[#4F4F4F] text-justify">
              DaVinci doesn’t just integrate with ERP — it becomes its operational brainstem.
            </p>
            <p className="font-segoe font-semibold text-[15px] leading-[20px] text-[#4F4F4F] text-justify">
              Manufacturers run on precision. And precision demands zero lag between planning and execution. DaVinci’s ERP integrations are engineered not as patches but as embedded conduits of truth between your enterprise core and the real-time factory floor.
            </p>
            <button className="bg-[#FE7A3E] text-white rounded-[8px] px-[10px] py-[10px] text-[18px] font-segoe font-semibold w-[187px] h-[44px]">
              Book Discovery Call
            </button>
          </div>

          {/* Center Image - No shadow */}
          <div className="absolute left-[561px] top-[74px] w-[336px] h-[419px]">
            <Image
              src="/images/erp-1.png"
              alt="ERP Main"
              width={336}
              height={419}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Images - No shadow */}
          <div className="absolute left-[908px] top-[5px] w-[297px] h-[275px]">
            <Image
              src="/images/erp-2.png"
              alt="ERP Feature Top"
              width={297}
              height={275}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute left-[908px] top-[313px] w-[297px] h-[275px]">
            <Image
              src="/images/erp-3.png"
              alt="ERP Feature Bottom"
              width={297}
              height={275}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* === Why We Win Section === */}
      <section>
        <WhyWeWinSection />
      </section>

      {/* === Multi-Site Feature Grid Section === */}
      <section  className="bg-gray-100">
        <LeadingERPSystemsSection />
      </section>

      <section>
        <TriggerTraceability />
      </section>

      {/* === Real Impact Section === */}
      <section>
        <RealImpactSection />
      </section>

      <section>
        <SecuritySection />
      </section>

      <section>
        <ErpFeatureShowcase />
      </section>

      <section>
        <BeyondAPIsSection />
      </section>

      <section className="bg-gray-100">
        <SmartVsCompetitorSection />
        <DemoBtn />
      </section>
      {/* Final CTA
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Let Your Furnace Think, Let Your Factory Breathe.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to transform your industrial operations? Let's start the
            conversation about your thermal intelligence future.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Start Your Journey
          </Button>
        </div>
      </section> */}
      <section className="bg-gray-900">
        <Footer />
      </section>
        
    </div>
  );
}


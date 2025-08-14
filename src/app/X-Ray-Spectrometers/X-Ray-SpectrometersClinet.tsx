"use client";
import { HeroSection } from "../components/hero-section-io"
import { IntegrationFeatures } from "../components/Integration-Features"
import { TechnicalBenefits } from "../components/techinical-befefits"
import { SupportedIntegrations } from "../components/supported-integration"
import  ProcessTimeline  from "../components/process-timeline"
import { OutcomesSection } from "../components/outcomes-section"
import Footer from "../components/Footer"
import RequestDemoSection from "../components/RequestDemoSection";

export default function XRaySpectrometersClient() {
  return (
    <main >
      <div >
        <HeroSection />
        <IntegrationFeatures />
        <TechnicalBenefits />
        <SupportedIntegrations />
        <ProcessTimeline />
        <OutcomesSection />
        <RequestDemoSection />
        <Footer />
      </div>
    </main>
  )
}
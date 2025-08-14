"use client";
import HeroSectio from "../components/herosectio";
import ScrollAnimation from '../components/ScrollAnimation'; // Make sure path is correct
import Footer from "../components/Footer"; // Make sure path is correct
import Section2 from "../components/section2";
import Section3 from '../components/section3';
import Section4 from '../components/Section4'; // Make sure path is correct
import Section5 from "../components/section5";
import Section6 from "../components/section6"; // Make sure path is correct
import Section7 from "../components/section7";
import Section8 from "../components/section8";
import Section9 from "../components/section9"; // Make sure path is correct
import Section10 from "../components/section10";
import RequestDemoSection from "../components/RequestDemoSection";

export default function IndustrialOperationsClient() {
    return (
        <main className="min-h-screen w-full overflow-x-hidden">
            <div className="w-full max-w-full">
                <HeroSectio />
                <Section2 />
                <Section3/>
                <Section4 />
                <Section5 />
                <Section6/>
                <Section7 />
                <Section8 />
                <Section9 />
                <Section10 />
                <RequestDemoSection />
                <Footer />
            </div>
        </main>
    )
}
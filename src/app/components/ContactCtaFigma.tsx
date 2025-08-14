import Image from "next/image";

const bullets = [
  "Build ERP-MES blueprints tailored to your factory",
  "Conduct sync impact simulations before go-live",
  "Design error-tolerant, schema-aligned integrations",
  "Migrate legacy flows without disruption",
  "Train your teams to own and extend these systems",
];

export default function ContactCtaFigma() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-20 px-4 md:px-16 bg-white rounded-2xl mt-16 flex flex-col lg:flex-row items-center gap-16 relative">
      {/* Left Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">Go Beyond APIs — Orchestrate Intelligence</h2>
        <p className="text-[#f25c05] text-xl md:text-2xl mb-8 font-semibold">Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <ul className="space-y-5 text-base md:text-lg w-full relative z-10 pt-0">
          {bullets.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="text-2xl text-orange-500">✔</span>
              <span className="text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center z-10 mt-12 lg:mt-0">
        <Image
          src="/images/erp-section.png"
          alt="ERP System"
          width={440}
          height={400}
          className="rounded-2xl object-cover shadow-lg border border-gray-100"
        />
      </div>
    </section>
  );
} 
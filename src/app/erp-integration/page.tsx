
export const metadata = {
  title: "ERP Integration for Smart Manufacturing | Davinci MES",
  description:
    "Seamlessly connect your enterprise systems with Davinci's ERP integration framework. Unlock real-time insights, optimize factory workflows, and accelerate industrial decision-making.",
  keywords: [
    "ERP integration",
    "smart manufacturing",
    "MES systems",
    "factory workflows",
    "industrial ERP",
    "Davinci MES",
    "real-time visibility",
    "digital manufacturing",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.davincism.io/erp-integration",
  },
  openGraph: {
    title: "ERP Integration for Smart Manufacturing",
    description:
      "Discover how Davinci's ERP integration enhances factory intelligence and operational control in modern manufacturing.",
    url: "https://www.davincism.io/erp-integration",
    type: "website",
    images: [
      {
        url: "/images/Group 93.png",  //add here the the real image and its actual height and width;
        width:  1488,
        height: 1856,
        alt: "Davinci MES ERP Integration",
      },
    ],
  },
};

import ErpIntegrationClient from "./ErpIntegrationClient"; // 👈 Client UI

export default function ErpIntegrationSection() {
  return (
    <main>
      <ErpIntegrationClient />
    </main>
  );
}

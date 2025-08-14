// app/industrialoperations/page.tsx

export const metadata = {
  title: "Smart Manufacturing Operations & Industrial Analytics | Da Vinci MES",
  description:
    "Transform factory performance through Da Vinci's smart manufacturing operations—powered by real-time analytics, AI-driven optimization, and connected industrial workflows.",
  keywords: [
    "smart manufacturing operations",
    "industrial analytics",
    "AI IoT manufacturing",
    "real-time factory optimization",
    "connected workflows",
    "Da Vinci MES",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.davincism.io/Industrial-operations",
  },
  openGraph: {
    title: "Smart Manufacturing Operations Powered by AI & IoT",
    description:
      "Discover how Da Vinci delivers smart manufacturing operations with AI, IoT, predictive maintenance, and real-time analytics.",
    url: "https://www.davincism.io/Industrial-operations",
    type: "website",
    images: [
      {
        url: "/images/Frame 1000005154.png",
        width: 1474,
        height:  1806,
        alt: "Da Vinci MES Smart Manufacturing Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Manufacturing Operations Powered by AI & IoT",
    description:
      "Discover how Da Vinci delivers smart manufacturing operations with AI, IoT, predictive maintenance, and real-time analytics.",
    images: ["/images/Frame 1000005154.png"],
  },
};

import IndustrialOperationsClient from "./IndustrialOperationsClient";

export default function Home1() {
  return (
    <main>
      <IndustrialOperationsClient />
    </main>
  );
}

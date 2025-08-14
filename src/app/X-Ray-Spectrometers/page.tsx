// app/x-ray-spectrometers/page.tsx

export const metadata = {
  title: "A Structural Shift in Manufacturing Energy Governance",
  description:
    "Seamlessly connect X-ray spectrometers to your quality systems. Davinci automates data processing, validation, and traceability for fast, lab-grade material analysis in real time.",
  keywords: [
    "automated data processing",
    "X-ray spectrometers",
    "quality management",
    "XRF integration",
    "material analysis",
    "lab automation",
    "Davinci MES",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.davincism.io/X-Ray-Spectrometers",
  },
  openGraph: {
    title: "Automated Data Processing with X-Ray Spectrometers",
    description:
      "Enable real-time material validation with automated data processing and XRS integration through Davinci Quality Management.",
    url: "https://www.davincism.io/X-Ray-Spectrometers",
    type: "website",
    images: [
      {
        url: "/images/Frame 1000005.png",
        width:   370,
        height:  452,
        alt: "X-ray Spectrometer Integration with Davinci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated Data Processing with X-Ray Spectrometers",
    description:
      "Enable real-time material validation with automated data processing and XRS integration through Davinci Quality Management.",
    images: ["/images/Frame 1000005.png"],
  },
};

import XRaySpectrometersClient from "./X-Ray-SpectrometersClinet";

export default function XRaySpectrometersPage() {
  return (
    <main>
      <XRaySpectrometersClient />
    </main>
  );
}

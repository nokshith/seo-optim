export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DaVinci Manufacturing",
    "url": "https://www.davincism.io",
    "logo": "https://www.davincism.io/svg/bgLogo.svg",
    "description": "AI-powered smart manufacturing platform for real-time analytics, predictive maintenance, and operational excellence.",
    "foundingDate": "2024",
    "industry": "Manufacturing Technology",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "arizvi@virtueserve.com"
    },
    "sameAs": [
      "https://www.facebook.com/davincimanufacturing",
      "https://twitter.com/davincimanufacturing",
      "https://www.linkedin.com/company/davinci-manufacturing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Manufacturing Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real-time Analytics",
            "description": "Monitor manufacturing processes in real-time with advanced analytics and reporting."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Predictive Maintenance",
            "description": "AI-driven predictive maintenance to minimize downtime and optimize equipment performance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quality Management",
            "description": "Integrated quality control and management systems for consistent product quality."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ERP Integration",
            "description": "Seamless integration with existing ERP systems for comprehensive operational oversight."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 
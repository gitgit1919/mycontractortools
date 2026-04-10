import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CFM & Airflow Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate required CFM, duct velocity, and static pressure for HVAC systems. Includes air changes per hour (ACH) guidelines for bathrooms, kitchens, bedrooms, and more.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CFM in HVAC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CFM stands for Cubic Feet per Minute, which measures the volume of air flowing through an HVAC system. It is the primary metric used to size ductwork, fans, and ventilation equipment for proper airflow in buildings.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate CFM for a room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the room volume (length x width x height in feet) by the required air changes per hour (ACH), then divide by 60 to convert to CFM. For example, a 200 sq ft bedroom with 8-foot ceilings needing 4 ACH requires about 107 CFM.",
      },
    },
    {
      "@type": "Question",
      name: "How many CFM per square foot do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "General HVAC guidelines recommend 1 CFM per square foot for standard occupied spaces. Kitchens and bathrooms need more, typically 2-3 CFM per square foot, while server rooms or workshops may need 4+ CFM per square foot.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between CFM and SCFM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CFM measures actual air volume at current conditions, while SCFM (Standard Cubic Feet per Minute) measures air volume corrected to standard conditions of 68 F and 14.7 psi. SCFM is used for compressed air systems to allow consistent comparisons regardless of operating pressure and temperature.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}

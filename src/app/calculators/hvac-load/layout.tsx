import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Load Calculator — Free BTU & Tonnage Calculator | MyContractorTools",
  description: "Free HVAC load calculator. Calculate heating and cooling loads in BTU and tons for residential and commercial buildings. Factor in climate, insulation, windows, and occupants.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many BTUs do I need per square foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally 20-25 BTU per square foot for cooling. Hot climates need more, cold climates need more heating BTUs.",
      },
    },
    {
      "@type": "Question",
      name: "What size AC unit do I need for my house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 1,500 sq ft home typically needs a 2.5-3 ton AC unit. Use our calculator for a precise estimate based on your climate and insulation.",
      },
    },
    {
      "@type": "Question",
      name: "How is HVAC load calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manual J calculation considers square footage, insulation, windows, climate zone, sun exposure, and occupancy.",
      },
    },
    {
      "@type": "Question",
      name: "What is a ton of cooling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One ton equals 12,000 BTU/hour of cooling capacity.",
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

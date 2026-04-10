import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Calculator — Shingles, Materials & Cost Estimator | MyContractorTools",
  description: "Free roofing material calculator. Estimate shingles, underlayment, ridge caps, and materials by roof area and pitch. Calculate roofing squares and material costs.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate how many shingles I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure roof area in square feet, divide by 100 to get roofing squares. Each square needs 3 bundles of standard shingles.",
      },
    },
    {
      "@type": "Question",
      name: "What is a roofing square?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A roofing square equals 100 square feet of roof area. It's the standard unit for ordering roofing materials.",
      },
    },
    {
      "@type": "Question",
      name: "How much does roofing material cost per square?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asphalt shingles cost $90-$150 per square for materials. Architectural shingles run $100-$200 per square.",
      },
    },
    {
      "@type": "Question",
      name: "How do I account for roof pitch in material calculations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steeper roofs have more surface area. Multiply the flat footprint by the pitch multiplier (e.g., 1.12 for 6/12 pitch).",
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

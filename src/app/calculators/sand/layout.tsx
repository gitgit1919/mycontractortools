import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sand Calculator — Free Online Calculator | MyContractorTools",
  description: "Free sand calculator. Calculate cubic feet, cubic yards, and tons of sand needed for your project. Supports rectangular and circular areas with multiple sand types and cost estimates.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much sand do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the length by width by depth (all in feet) to get cubic feet, then divide by 27 to convert to cubic yards. One cubic yard of sand weighs approximately 2,700 pounds (1.35 tons) and covers about 108 square feet at 3 inches deep.",
      },
    },
    {
      "@type": "Question",
      name: "How many bags of sand per square foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard 50-pound bag of sand covers about 0.5 cubic feet. For a 1-inch layer, one bag covers roughly 6 square feet. For a 2-inch layer, one bag covers about 3 square feet. Multiply your total area by the depth to determine the number of bags needed.",
      },
    },
    {
      "@type": "Question",
      name: "What type of sand for leveling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coarse concrete sand or mason sand is best for leveling and bedding applications. Use concrete sand for paver bases and general leveling, and mason sand for finer leveling like under above-ground pools. Avoid play sand for construction leveling as it shifts too easily.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate sand for a paver base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the paver area in square feet and plan for a 1-inch bedding layer of coarse sand. Multiply the area by 0.083 feet (1 inch) to get cubic feet, then divide by 27 for cubic yards. Add 10% extra for compaction and edge filling.",
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

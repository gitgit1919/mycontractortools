import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paver Calculator — Patio, Walkway & Base Materials | MyContractorTools",
  description: "Free paver calculator. Estimate pavers, base gravel, leveling sand, and polymeric sand for patios and walkways. Multiple paver sizes and laying patterns.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many pavers do I need per square foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on paver size. Standard 4x8-inch pavers require about 4.5 pavers per square foot. Larger 6x9-inch pavers need roughly 2.7 per square foot. Always add 5-10% extra for cuts and waste.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate pavers for a patio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the patio length by width to get total square footage. Divide by the area of one paver in square feet to get the number needed, then add 10% for cuts, breakage, and future replacements.",
      },
    },
    {
      "@type": "Question",
      name: "How much sand do I need under pavers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apply a 1-inch layer of leveling sand over the compacted gravel base. One cubic yard of sand covers approximately 324 square feet at 1 inch deep. You will also need polymeric sand to fill the joints after laying.",
      },
    },
    {
      "@type": "Question",
      name: "What is the standard paver size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common paver size is 4x8 inches (roughly the size of a standard brick). Other popular sizes include 6x6, 6x9, and 12x12 inches. Thickness is typically 2-3/8 inches for pedestrian areas.",
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

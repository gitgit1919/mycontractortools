import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asphalt Calculator — Tons for Driveways & Parking Lots | MyContractorTools",
  description: "Free asphalt calculator. Estimate tons of asphalt for driveways, parking lots, and overlays. Calculate by area, thickness, and material density.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does asphalt cost per ton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hot mix asphalt typically costs $100-$200 per ton for materials, depending on the mix type and your region. Installed costs including labor and equipment usually run $3-$7 per square foot for a standard 2-3 inch layer.",
      },
    },
    {
      "@type": "Question",
      name: "How many tons of asphalt do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate the area in square feet, multiply by the thickness in feet, then multiply by the density (typically 145 lbs per cubic foot for hot mix). Divide the total weight by 2,000 to convert to tons.",
      },
    },
    {
      "@type": "Question",
      name: "How thick should asphalt be for a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential driveways typically require 2-3 inches of compacted asphalt over a 6-8 inch aggregate base. Commercial driveways and parking lots need 3-4 inches of asphalt to handle heavier traffic loads.",
      },
    },
    {
      "@type": "Question",
      name: "What is the coverage rate for hot mix asphalt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One ton of hot mix asphalt covers approximately 80 square feet at 2 inches thick, or about 160 square feet at 1 inch thick. Coverage varies slightly based on the specific mix design and compaction rate.",
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

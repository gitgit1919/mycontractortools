import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tile Calculator — Flooring, Grout & Thinset Estimator | MyContractorTools",
  description: "Free tile and flooring calculator. Calculate number of tiles, grout, thinset, and cost for any tile size and room dimensions. Includes waste factor for cuts.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many tiles do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide your room's square footage by the square footage of one tile. For example, a 12x12-inch tile covers 1 sq ft, so a 150 sq ft room needs 150 tiles. Always add 10-15% extra for cuts, waste, and future repairs.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate tile for a room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the room's length and width in inches, then multiply to get the area. Convert the tile size to square inches and divide the room area by the tile area. Include grout line width in your tile size for a more accurate count.",
      },
    },
    {
      "@type": "Question",
      name: "How much tile waste should I plan for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plan for 10% waste for standard straight-lay patterns in rectangular rooms. Add 15% for diagonal layouts or rooms with many cuts. Complex patterns like herringbone may need 20% extra. Always keep a few spare tiles for future repairs.",
      },
    },
    {
      "@type": "Question",
      name: "What size tiles are best for small rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Large-format tiles (12x24 or 24x24 inches) can make small rooms appear bigger by reducing grout lines. However, they require a very flat subfloor. For bathrooms under 40 sq ft, 12x12 or 12x24 tiles are popular choices that balance appearance with practical installation.",
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

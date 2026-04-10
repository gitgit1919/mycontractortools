import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deck Calculator — Boards, Joists, Railing & Cost | MyContractorTools",
  description: "Free deck calculator. Estimate deck boards, joists, posts, beams, railing, and total cost. Calculate for pressure treated, cedar, and composite decking materials.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build a deck per square foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A pressure-treated wood deck costs $15-$25 per square foot for materials, while composite decking runs $30-$60 per square foot. With professional labor, total installed costs are $25-$45 for wood and $45-$85 for composite. A typical 12x16 deck costs $4,800-$16,000 total.",
      },
    },
    {
      "@type": "Question",
      name: "How many boards do I need for a deck?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide your deck's square footage by the coverage area of one board. A standard 5.5-inch wide deck board covers 0.46 sq ft per linear foot. For a 200 sq ft deck with 12-foot boards, you need approximately 37 boards. Add 10-15% for waste and cuts.",
      },
    },
    {
      "@type": "Question",
      name: "What size deck joists do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most residential decks, 2x8 joists span up to 10.5 feet and 2x10 joists span up to 13.5 feet at 16 inches on center. Use 2x6 joists only for spans under 8 feet. Always check your local building code, as span tables vary by lumber species and grade.",
      },
    },
    {
      "@type": "Question",
      name: "How deep should deck post footings be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deck footings must extend below the frost line, which varies by region from 12 inches in the South to 48 inches or more in northern states. Most codes require a minimum 12-inch diameter footing. Check your local building department for the exact frost depth in your area.",
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

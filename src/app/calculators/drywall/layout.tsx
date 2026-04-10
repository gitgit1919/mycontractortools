import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drywall Calculator — Sheets, Mud, Tape & Screws | MyContractorTools",
  description: "Free drywall calculator. Estimate sheets of drywall, joint compound, tape, and screws needed for walls and ceilings. Calculate by room dimensions.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many sheets of drywall do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate the total square footage of your walls and ceiling, then divide by 32 (for 4x8 sheets) or 48 (for 4x12 sheets). Add 10-15% for waste from cuts and mistakes. A standard 12x12 room with 8-foot ceilings needs about 18 sheets for the walls alone.",
      },
    },
    {
      "@type": "Question",
      name: "What size drywall should I use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use 1/2-inch drywall for most walls and ceilings with framing spaced 16 inches on center. Use 5/8-inch for ceilings with 24-inch framing or where fire rating is required. Use 1/4-inch for curved walls. Moisture-resistant (green board) is used in bathrooms.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate drywall for a room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure each wall's width and height, multiply to get square footage, then add all walls together. Subtract door and window openings. Add the ceiling area if finishing it. Divide the total by 32 sq ft per 4x8 sheet and add 10% for waste.",
      },
    },
    {
      "@type": "Question",
      name: "How much does drywall cost per sheet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard 1/2-inch 4x8 drywall costs $12-$18 per sheet. Moisture-resistant drywall runs $14-$22, and fire-rated 5/8-inch costs $15-$25 per sheet. Professional installation adds $1.50-$3.50 per square foot for hanging, taping, and finishing.",
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

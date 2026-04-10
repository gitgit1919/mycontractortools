import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rafter Length Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate common and hip rafter lengths, ridge height, birdsmouth cut dimensions, and tail cut angles. Enter building span, roof pitch, and overhang to get accurate framing measurements.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate rafter length?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the building span by 2 to get the run, then use the Pythagorean theorem: rafter length equals the square root of (run squared + rise squared). Add the overhang length to get the total rafter length.",
      },
    },
    {
      "@type": "Question",
      name: "What size rafter do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rafter size depends on span, spacing, load, and lumber species. For most residential roofs, 2x6 rafters handle spans up to 10 feet and 2x8 rafters handle spans up to 14 feet at 16-inch spacing. Always check local building codes for your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How far apart should rafters be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rafters are typically spaced 16 or 24 inches on center. 16-inch spacing is standard for most residential roofs and provides stronger support, while 24-inch spacing may be used for lighter loads or when using engineered lumber.",
      },
    },
    {
      "@type": "Question",
      name: "How does roof pitch affect rafter length?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steeper roof pitches require longer rafters for the same building span. For example, a 12/12 pitch rafter is about 41% longer than the horizontal run, while a 4/12 pitch rafter is only about 5% longer. Use a pitch multiplier table to quickly calculate the adjustment.",
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

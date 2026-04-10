import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carpet Calculator — Square Yards, Padding & Cost | MyContractorTools",
  description: "Free carpet calculator. Calculate carpet in square yards, seam length, padding, and total cost for any room size. Includes waste factor and roll width optimization.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate carpet for a room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the room length by the room width in feet to get the square footage, then divide by 9 to convert to square yards. Carpet is typically sold by the square yard, so this gives you the base amount needed before adding waste.",
      },
    },
    {
      "@type": "Question",
      name: "How much extra carpet should I order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add 10-15% extra carpet for waste, seams, pattern matching, and cuts around doorways and closets. Complex room shapes or patterned carpet may require up to 20% extra to ensure proper alignment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the standard carpet roll width?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard carpet rolls come in 12-foot and 15-foot widths. Choosing the right roll width for your room dimensions can minimize seams and reduce waste, which saves money on larger installations.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate carpet for stairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the depth of one tread plus the height of one riser, add 2 inches for the nose tuck, then multiply by the number of stairs. Standard stairs need about 36 inches of carpet width per stair.",
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

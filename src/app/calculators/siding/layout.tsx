import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siding Calculator — Panels, Trim & Accessories | MyContractorTools",
  description: "Free siding calculator. Estimate siding panels, J-channel, starter strip, trim, and accessories. Calculate for vinyl, fiber cement, and wood siding.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate siding for a house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the height and width of each exterior wall and multiply to get total square footage. Subtract the area of all windows and doors. Add 10-15% for waste and cuts, then divide by the coverage per panel or square to determine how much siding to order.",
      },
    },
    {
      "@type": "Question",
      name: "How many squares of siding do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate the total wall area in square feet, subtract openings (windows and doors), and divide by 100 to convert to squares. One square equals 100 square feet of coverage. Add 10-15% for waste depending on the complexity of your home's exterior.",
      },
    },
    {
      "@type": "Question",
      name: "What is a siding square?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A siding square is a unit of measurement equal to 100 square feet of wall coverage. Siding manufacturers package and price material by the square. For example, a house with 2,000 square feet of exterior wall area (minus openings) would need about 20 squares of siding.",
      },
    },
    {
      "@type": "Question",
      name: "How do I account for windows and doors in siding calculations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the width and height of each window and door, then multiply to get the area of each opening. Subtract the total opening area from your gross wall square footage. For a rough estimate, a standard window is about 15 square feet and a door is about 20 square feet.",
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallpaper Calculator — Free Online Calculator | MyContractorTools",
  description: "Free wallpaper calculator. Calculate the number of wallpaper rolls needed based on room dimensions, wall height, doors, windows, roll size, and pattern repeat. Accounts for waste from pattern matching.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many rolls of wallpaper do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate total wall area (perimeter x height), subtract doors and windows, then divide by the usable coverage per roll. A standard American single roll covers about 36 square feet before pattern waste.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate wallpaper for a room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the room perimeter and wall height to get total wall area. Subtract openings for doors (about 21 sq ft each) and windows (about 15 sq ft each), then divide by coverage per roll, rounding up.",
      },
    },
    {
      "@type": "Question",
      name: "What is the standard wallpaper roll size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An American single roll is typically 20.5 inches wide by 33 feet long, covering about 56 square feet. A double roll is the same width at 33 feet long but sold as a continuous length, giving roughly 56-72 square feet of coverage depending on the manufacturer.",
      },
    },
    {
      "@type": "Question",
      name: "How do I account for pattern repeat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Larger pattern repeats increase waste because each strip must be aligned. Add the repeat length to each strip's cut length to account for matching. Repeats over 12 inches can reduce usable yield per roll by 15-25%.",
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wall Framing Calculator — Studs, Plates & Sheathing | MyContractorTools",
  description: "Free wall framing calculator. Calculate studs, top and bottom plates, headers, sheathing, and nails for wall framing. 16 and 24 inch on-center spacing.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many studs do I need for a wall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the wall length in inches by the stud spacing (16 or 24 inches) and add 1 for the starting stud. Then add extra studs for corners, intersections, and door or window trimmers and king studs.",
      },
    },
    {
      "@type": "Question",
      name: "How far apart are wall studs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wall studs are typically spaced 16 inches on center for load-bearing walls and exterior walls. Interior non-load-bearing walls may use 24-inch spacing to reduce material costs while still meeting code.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate framing materials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Count studs based on wall length and spacing, then add two plates for top and bottom (three if using a double top plate). Include headers, cripple studs, and king and trimmer studs for each opening, plus sheathing panels for the wall area.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between 16 and 24 on center?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "16-inch on center means studs are spaced 16 inches apart measured from center to center, using more lumber but providing greater strength. 24-inch on center uses fewer studs and is acceptable for non-load-bearing interior walls, reducing material cost by about 25%.",
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

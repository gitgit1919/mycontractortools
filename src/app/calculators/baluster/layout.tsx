import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baluster & Spindle Calculator — Free Online Calculator | MyContractorTools",
  description: "Free baluster and spindle calculator. Calculate the number of balusters, spacing, and materials for your railing project. Includes IRC 4-inch sphere rule code compliance checking.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many balusters do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the total railing length by the on-center spacing (baluster width plus gap). For standard 1.5-inch square balusters with code-compliant 4-inch gaps, that works out to roughly 2.2 balusters per linear foot.",
      },
    },
    {
      "@type": "Question",
      name: "How far apart should balusters be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per the IRC, the clear space between balusters must be less than 4 inches so a 4-inch sphere cannot pass through. The actual on-center spacing depends on the width of your balusters.",
      },
    },
    {
      "@type": "Question",
      name: "What is the code requirement for baluster spacing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The International Residential Code (IRC R312.1.3) requires that openings in guards shall not allow passage of a 4-inch sphere. This applies to both deck and staircase railings in residential construction.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate balusters for a staircase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the rake (angled) length of the stair railing, then divide by on-center spacing just like a level section. Account for the angled orientation, which slightly increases the gap between balusters compared to a horizontal run.",
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

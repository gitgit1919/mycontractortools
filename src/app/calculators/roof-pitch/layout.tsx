import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roof Pitch Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate roof pitch as X:12, slope angle in degrees, slope percentage, and roof area multiplier. Includes a common pitch factor reference table for roofers and contractors.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I measure roof pitch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Place a level horizontally against the roof surface and measure 12 inches along it. Then measure the vertical distance from the end of the level down to the roof. That vertical measurement is the rise, expressed as rise-over-12 (e.g., 6/12).",
      },
    },
    {
      "@type": "Question",
      name: "What does 6/12 roof pitch mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 6/12 pitch means the roof rises 6 inches vertically for every 12 inches of horizontal run. This is a moderate slope equal to about 26.6 degrees and is one of the most common residential roof pitches.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good roof pitch for shingles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asphalt shingles perform best on roofs with a pitch of 4/12 or steeper, which provides good water runoff. Most shingle manufacturers require a minimum 2/12 pitch with special underlayment. Pitches between 4/12 and 9/12 are ideal for standard installation.",
      },
    },
    {
      "@type": "Question",
      name: "How do I convert roof pitch to degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the rise by the run (12) and take the arctangent of the result. For example, a 6/12 pitch equals arctan(6/12) = 26.57 degrees. Common conversions: 4/12 = 18.4 degrees, 8/12 = 33.7 degrees, 12/12 = 45 degrees.",
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

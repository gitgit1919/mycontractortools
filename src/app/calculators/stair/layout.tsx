import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stair Calculator — Risers, Treads & Stringer Length | MyContractorTools",
  description: "Free stair calculator. Calculate riser height, tread depth, stringer length, and stair angle. IRC building code compliance checking for residential stairs.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate stair rise and run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the total height from the finished floor at the bottom to the finished floor at the top. Divide by your target riser height (typically 7 to 7.75 inches) to get the number of risers. The total run equals the number of treads multiplied by the tread depth (typically 10 to 11 inches).",
      },
    },
    {
      "@type": "Question",
      name: "What is the standard stair riser height?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IRC building code sets the maximum riser height at 7-3/4 inches (196 mm) for residential stairs. Most comfortable stairs have risers between 7 and 7.5 inches. All risers in a staircase must be within 3/8 inch of each other in height.",
      },
    },
    {
      "@type": "Question",
      name: "How many stairs do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the total rise (floor-to-floor height) by the riser height. A standard 9-foot ceiling with floor framing gives a total rise of about 108 inches. At 7.5 inches per riser, that is about 14-15 risers, with one fewer tread than risers since the top floor acts as the final step.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 7-11 rule for stairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 7-11 rule is a guideline stating risers should be about 7 inches tall and treads about 11 inches deep. This provides a comfortable, safe staircase. The IRC code requires a maximum 7.75-inch riser and minimum 10-inch tread, and many builders aim for a riser-plus-tread sum between 17 and 18 inches.",
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paint Calculator — Gallons Needed by Room Size | MyContractorTools",
  description: "Free paint coverage calculator. Calculate gallons of paint needed based on wall area, ceiling, trim, and number of coats. Includes primer and coverage estimates.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much paint do I need for a room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate the total wall area (perimeter x height), subtract windows and doors, then divide by 350 sq ft per gallon. A typical 12x12 room with 8-foot ceilings needs about 1.5 gallons for two coats on the walls. Add more for the ceiling and trim.",
      },
    },
    {
      "@type": "Question",
      name: "How many square feet does a gallon of paint cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One gallon of interior latex paint covers approximately 350-400 square feet on smooth surfaces with one coat. Rough or textured surfaces, dark colors, and porous surfaces like bare drywall may reduce coverage to 250-300 square feet per gallon.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need one coat or two?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two coats are recommended in most situations for even coverage and true color. You can get away with one coat when painting the same color over itself or using a high-quality paint-and-primer-in-one. Always use two coats when covering dark colors or painting new drywall.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate paint for trim and doors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard interior door requires about 1/2 quart of paint per coat. For trim and baseboards, figure about 1 quart per 100 linear feet. A typical room with one door and standard trim needs about 1 quart of trim paint for two coats.",
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

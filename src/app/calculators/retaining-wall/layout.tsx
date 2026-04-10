import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retaining Wall Calculator — Blocks, Drainage & Geogrid | MyContractorTools",
  description: "Free retaining wall calculator. Calculate retaining wall blocks, cap stones, drainage gravel, geogrid, and drain pipe. Estimate materials by wall length and height.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate retaining wall materials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the wall length by the number of courses (rows) to get the total block count per face. Add 5-10% for cuts and waste. You will also need cap stones for the top row, gravel backfill behind the wall, and drain pipe along the base.",
      },
    },
    {
      "@type": "Question",
      name: "How deep should a retaining wall footing be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The footing or base trench should be at least 6 inches deep with a compacted gravel base. Bury the first course of blocks so that about one inch of block sits below grade for every eight inches of total wall height, ensuring stability.",
      },
    },
    {
      "@type": "Question",
      name: "When does a retaining wall need engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most jurisdictions require engineered plans and permits for retaining walls over 4 feet tall. Walls with surcharge loads (driveways, structures, or slopes above), poor soil conditions, or proximity to property lines may also require engineering regardless of height.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cheapest retaining wall material?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treated timber is generally the lowest-cost retaining wall material at $10-$15 per square foot of wall face, but it has a shorter lifespan of 10-20 years. Concrete blocks cost $15-$25 per square foot and last 50+ years, making them more cost-effective long term.",
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

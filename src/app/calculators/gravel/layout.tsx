import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gravel Calculator — Tons of Crushed Stone, Sand & Aggregate | MyContractorTools",
  description: "Free gravel calculator. Calculate tons of gravel, crushed stone, sand, or topsoil needed by area and depth. Multiple material types with density-based tonnage.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much gravel do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the area length by width in feet, then multiply by depth in feet, and divide by 27 to get cubic yards. Multiply cubic yards by the material density (typically 1.4 tons per cubic yard for crushed stone) to get tonnage needed.",
      },
    },
    {
      "@type": "Question",
      name: "How many tons of gravel per cubic yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most crushed gravel weighs about 1.4 tons per cubic yard, though this varies by material type. Pea gravel averages 1.3 tons per cubic yard, while dense crushed limestone can reach 1.5 tons per cubic yard.",
      },
    },
    {
      "@type": "Question",
      name: "How deep should gravel be for a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A gravel driveway should be 4 to 6 inches deep total, typically built in three layers: a 3-inch base of large crushed stone, a 2-inch middle layer of mid-size gravel, and a 1-inch top layer of fine gravel or crusher run.",
      },
    },
    {
      "@type": "Question",
      name: "What type of gravel is best for drainage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clean, washed 3/4-inch to 1-1/2-inch crushed stone is best for drainage because the angular shape creates air gaps that allow water to flow freely. Avoid using crusher run or stone dust for drainage, as the fine particles compact and block water flow.",
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

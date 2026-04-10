import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miter Angle Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate miter and bevel angles for any corner angle or polygon. Includes presets for 90-degree corners, octagons, hexagons, pentagons, and compound miter settings for crown molding.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate a miter angle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the corner angle by 2 to get the miter angle for each piece. For example, a 90-degree corner requires two cuts at 45 degrees each so the pieces meet flush.",
      },
    },
    {
      "@type": "Question",
      name: "What miter angle for a 45-degree corner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 45-degree corner requires a miter angle of 22.5 degrees on each piece. Set your miter saw to 22.5 degrees so both cuts combine to form the 45-degree joint.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find the miter angle for crown molding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crown molding requires compound miter cuts because it sits at an angle between the wall and ceiling. Use the spring angle of the molding (typically 38 or 45 degrees) along with the corner angle to calculate both the miter and bevel settings.",
      },
    },
    {
      "@type": "Question",
      name: "What is the formula for miter cuts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The miter angle equals the corner angle divided by 2. For polygons, the corner angle is (n-2) x 180 / n, where n is the number of sides. An octagon, for example, has 135-degree corners requiring 67.5-degree miter cuts.",
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

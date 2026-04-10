import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fence Calculator — Posts, Rails, Pickets & Cost | MyContractorTools",
  description: "Free fence calculator. Estimate posts, rails, pickets, concrete, and total cost for wood, vinyl, or chain link fences. Calculate materials by fence length and height.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many fence posts do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide your total fence length by the post spacing (typically 8 feet) and add 1 for the starting post. A 100-foot fence with 8-foot spacing needs 14 posts. Add extra posts for corners and gate openings, which each require two posts.",
      },
    },
    {
      "@type": "Question",
      name: "How far apart should fence posts be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard fence post spacing is 6 to 8 feet on center. Wood privacy fences typically use 8-foot spacing to match rail lengths. Vinyl and chain link fences often use 6-foot spacing. Shorter spacing provides more strength in high-wind areas.",
      },
    },
    {
      "@type": "Question",
      name: "How many pickets do I need per foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a standard privacy fence with 3.5-inch pickets and no gaps, you need about 3.4 pickets per linear foot. With 1/2-inch spacing between pickets, you need about 3 pickets per foot. Multiply by your total fence length to get the total count.",
      },
    },
    {
      "@type": "Question",
      name: "How much concrete per fence post?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each fence post typically needs 1 to 2 bags (50 lb) of pre-mixed concrete, depending on hole size. A standard 10-inch diameter hole that is 30 inches deep uses about 1.5 bags. For a 100-foot fence with 14 posts, plan on 20-28 bags total.",
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

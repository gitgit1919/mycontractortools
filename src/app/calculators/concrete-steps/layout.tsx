import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Steps Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate concrete volume, riser height, total run, and form board needs for concrete steps. Verifies IRC code compliance for maximum riser height and minimum tread depth.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate concrete for steps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate the volume of each step as a rectangular box (width x tread depth x riser height), then add the volumes together. Include the landing platform and multiply the total cubic feet by the number of steps, then divide by 27 to convert to cubic yards.",
      },
    },
    {
      "@type": "Question",
      name: "What are standard step dimensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per IRC code, the maximum riser height is 7.75 inches and the minimum tread depth is 10 inches. A comfortable standard is a 7-inch riser with an 11-inch tread, and steps should be at least 36 inches wide.",
      },
    },
    {
      "@type": "Question",
      name: "How many bags of concrete for one step?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A single 36-inch-wide step with a 7-inch riser and 11-inch tread uses about 1.6 cubic feet of concrete, which requires roughly 3 to 4 sixty-pound bags of premixed concrete.",
      },
    },
    {
      "@type": "Question",
      name: "Do concrete steps need rebar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, concrete steps should be reinforced with #4 rebar running horizontally through each step and vertically tying into the footing. Rebar prevents cracking from freeze-thaw cycles and structural loads.",
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

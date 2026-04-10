import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rebar Calculator — Quantity, Weight & Tie Wire | MyContractorTools",
  description: "Free rebar calculator for concrete slabs. Calculate rebar quantity, total weight, tie wires, and bar chairs by grid spacing. Estimate rebar for footings and slabs.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much rebar do I need for a slab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the slab length and width in feet, then divide each dimension by the grid spacing (typically 12 or 18 inches) and add one bar per direction. Multiply the number of bars by their length to get total linear feet of rebar needed.",
      },
    },
    {
      "@type": "Question",
      name: "What size rebar for a concrete slab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For residential slabs 4 to 5 inches thick, #3 (3/8-inch) or #4 (1/2-inch) rebar is standard. Thicker slabs, driveways with heavy loads, or commercial applications typically require #4 or #5 rebar. Check local codes for specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How far apart should rebar be spaced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For residential slabs, rebar is commonly spaced in a 12-inch or 18-inch grid pattern. Heavier loads or thicker slabs may require tighter spacing such as 8 or 10 inches. The spacing should never exceed three times the slab thickness.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need rebar for a 4-inch slab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 4-inch slab on stable, well-compacted soil may use welded wire mesh instead of rebar for light-duty use like a walkway. However, rebar is recommended for driveways, garage floors, or any slab that will carry significant weight or span unstable soil.",
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

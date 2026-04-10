import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Concrete Driveway Cost Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate concrete driveway costs including cubic yards, material costs, labor costs, and total project cost. Covers broom finish, stamped, and exposed aggregate with 2025-2026 pricing.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How thick should a concrete driveway be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A residential concrete driveway should be at least 4 inches thick for passenger vehicles. For heavy trucks or RVs, increase thickness to 5-6 inches with a reinforced subbase.",
      },
    },
    {
      "@type": "Question",
      name: "How much concrete for a 2-car driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical 2-car driveway is about 16 feet wide by 40 feet long at 4 inches thick, requiring approximately 7.9 cubic yards of concrete. Add 10% for waste, bringing the total to about 8.7 cubic yards.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need rebar in a driveway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rebar or welded wire mesh is strongly recommended for concrete driveways to control cracking and add structural strength. Use #4 rebar on 18-inch centers or 6x6 W2.9xW2.9 welded wire mesh placed at mid-depth in the slab.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I can drive on new concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wait at least 7 days before driving passenger vehicles on new concrete and 28 days for full cure strength. Avoid heavy trucks or equipment for at least 28 days to prevent surface damage.",
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

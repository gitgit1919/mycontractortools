import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board Foot Calculator — Lumber & Wood Calculator | MyContractorTools",
  description: "Free board foot and lumber calculator. Calculate board feet, linear feet, and cost for lumber orders. Build material lists with common dimensional lumber sizes.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a board foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A board foot is a unit of lumber volume equal to 144 cubic inches, or a piece of wood 12 inches long, 12 inches wide, and 1 inch thick. It is the standard unit used by sawmills and lumber yards to price hardwood and specialty lumber.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate board feet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the thickness in inches by the width in inches by the length in feet, then divide by 12. The formula is: Board Feet = (Thickness x Width x Length) / 12, where thickness and width are in inches and length is in feet.",
      },
    },
    {
      "@type": "Question",
      name: "How many board feet in a 2x4x8?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 2x4x8 contains 5.33 board feet using nominal dimensions (2 x 4 x 8 / 12 = 5.33). Lumber pricing is based on nominal dimensions, not actual dimensions, so a 2x4 that actually measures 1.5 x 3.5 inches is still calculated as 2 x 4.",
      },
    },
    {
      "@type": "Question",
      name: "Why is lumber sold by the board foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Board foot pricing lets buyers compare lumber costs across different dimensions and lengths on an equal basis. It is the standard for hardwoods and specialty woods, while softwood framing lumber is more commonly sold by the linear foot or per piece.",
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

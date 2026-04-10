import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Unit Converter — Free Length, Area, Volume Converter | MyContractorTools",
  description: "Free unit converter for contractors. Convert between feet, inches, meters, yards, square feet, square meters, cubic yards, cubic feet, gallons, liters, and more.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many cubic feet in a cubic yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are 27 cubic feet in one cubic yard (3 ft x 3 ft x 3 ft = 27 cu ft). This is the most common volume conversion in concrete and gravel ordering.",
      },
    },
    {
      "@type": "Question",
      name: "How do I convert square feet to square yards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the square footage by 9 to get square yards (since 1 yard = 3 feet, and 3 x 3 = 9). For example, a 270 square foot room equals 30 square yards.",
      },
    },
    {
      "@type": "Question",
      name: "How many feet in a meter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One meter equals 3.281 feet, or about 3 feet 3-3/8 inches. To convert meters to feet, multiply by 3.281. To convert feet to meters, multiply by 0.3048.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a ton and a metric ton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A U.S. (short) ton is 2,000 pounds, while a metric ton (tonne) is 1,000 kilograms or about 2,205 pounds. When ordering materials like gravel or sand, confirm which unit your supplier uses to avoid a 10% quantity difference.",
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Pipe Sizing Calculator — Flow Rate & Diameter | MyContractorTools",
  description: "Free plumbing pipe sizing calculator. Find the right pipe diameter based on fixture units and flow rates. Calculate GPM, velocity, and pipe size for water supply systems.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size pipe do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pipe size depends on the total fixture units served and the available water pressure. Most residential main lines use 3/4-inch or 1-inch pipe, while individual fixtures typically use 1/2-inch supply lines.",
      },
    },
    {
      "@type": "Question",
      name: "What are fixture units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fixture units are a standardized measure of the probable demand each plumbing fixture places on the water supply system. For example, a lavatory is typically 1 fixture unit while a bathtub is 2. They are used to size pipes without calculating exact GPM for every fixture.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between supply and drain pipe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Supply pipes carry pressurized water to fixtures and are typically 1/2-inch to 1-inch copper or PEX. Drain pipes carry waste water by gravity and are larger, usually 1-1/2 to 4 inches in PVC or ABS, and must be sloped at 1/4 inch per foot.",
      },
    },
    {
      "@type": "Question",
      name: "How does pipe material affect sizing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Different materials have different interior diameters and friction losses. Copper has smooth interior walls with low friction, PEX has slightly more friction loss, and galvanized steel has the highest friction due to corrosion buildup. Higher friction means you may need to upsize the pipe.",
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

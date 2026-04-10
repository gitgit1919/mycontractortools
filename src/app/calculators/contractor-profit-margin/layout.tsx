import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Profit Margin Calculator — Markup & Pricing | MyContractorTools",
  description: "Free contractor profit margin calculator. Calculate gross and net profit margins, markup percentage, and break-even pricing for construction jobs and your business.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good profit margin for contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A healthy net profit margin for contractors is 8-15%, with top-performing companies hitting 15-20%. Gross profit margins should be 35-50% to cover overhead. Specialty trades like electrical and plumbing often achieve higher margins than general contractors due to licensing requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate profit margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Profit margin equals (Revenue minus Costs) divided by Revenue, expressed as a percentage. For example, a $50,000 job with $40,000 in total costs has a 20% profit margin. Be sure to include all costs: materials, labor, subcontractors, overhead allocation, and insurance.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between gross and net margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gross margin only subtracts direct job costs (materials, labor, subs) from revenue. Net margin subtracts everything including overhead, office expenses, insurance, vehicle costs, and owner salary. A contractor might have a 40% gross margin but only an 8-12% net margin after overhead.",
      },
    },
    {
      "@type": "Question",
      name: "Why do contractors fail financially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The top reasons are underpricing jobs by not accounting for all overhead costs, poor cash flow management, not tracking job costs accurately, and growing too fast without sufficient capital. Many contractors confuse markup with margin, leading to lower profits than expected.",
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Software Cost Calculator — Total Cost of Ownership | MyContractorTools",
  description:
    "Calculate the real total cost of contractor software including hidden fees. Compare ServiceTitan, Jobber, Housecall Pro, and more side by side.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What hidden costs should contractors watch for in field service software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beyond the monthly subscription, watch for per-user fees that scale with your team, onboarding and setup costs ($1,000-$5,000 for enterprise tools), payment processing fees (typically 2.9-3%), annual contract lock-ins, and the real cost of training time for your techs.",
      },
    },
    {
      "@type": "Question",
      name: "How much does contractor software really cost per year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total cost varies widely. A 5-tech team might pay $1,800-$2,500/year for Jobber, $2,500-$3,500/year for Housecall Pro, or $7,000-$12,000/year for ServiceTitan when you include all fees, onboarding, and payment processing costs.",
      },
    },
    {
      "@type": "Question",
      name: "Why do payment processing fees matter when choosing contractor software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you collect $50,000/month through your software at a 2.99% rate, you pay roughly $1,495/month or $17,940/year in processing fees alone. This often exceeds the software subscription cost itself and is the biggest hidden expense.",
      },
    },
    {
      "@type": "Question",
      name: "Is expensive contractor software worth the investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your revenue and team size. Enterprise tools like ServiceTitan offer advanced features but cost 3-5x more than mid-tier options. For teams under 5 techs doing under $1M/year, mid-tier tools like Jobber or Housecall Pro usually deliver better ROI.",
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

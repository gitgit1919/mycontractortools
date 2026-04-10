import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Which Contractor Software Should I Use? — Free Quiz | MyContractorTools",
  description:
    "Answer 5 quick questions about your trade, team size, and priorities. Get a personalized software recommendation in under 60 seconds.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the contractor software quiz work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The quiz asks 5 quick questions about your trade, team size, annual revenue, top priorities, and current software. Based on your answers, it recommends the best field-service management software for your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "Is this software recommendation quiz really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the quiz is 100% free with no email required. We make money through affiliate partnerships with the software companies we recommend, but our recommendations are based on genuine fit for your business.",
      },
    },
    {
      "@type": "Question",
      name: "What contractor software options does the quiz recommend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The quiz may recommend Jobber, Housecall Pro, ServiceTitan, FieldPulse, JobNimbus, or GorillaDesk depending on your trade, team size, budget, and priorities. Each recommendation includes pricing and links to detailed reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Can I retake the quiz if my business changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. As your team grows or your priorities shift, retake the quiz anytime. Software that fits a solo operator may not fit a 15-person crew, so revisiting your choice as you scale is smart.",
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

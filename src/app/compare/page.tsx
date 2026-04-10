import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Software Comparisons — Head-to-Head Reviews | MyContractorTools",
  description:
    "Side-by-side comparisons of the top contractor software platforms. Jobber vs Housecall Pro, ServiceTitan vs FieldEdge, and more — with real pricing, features, and honest recommendations.",
};

const comparisons = [
  {
    title: "Jobber vs Housecall Pro",
    href: "/compare/jobber-vs-housecall-pro/",
    description:
      "Two top field-service platforms compared on pricing, scheduling, invoicing, and mobile apps.",
  },
  {
    title: "ServiceTitan vs Housecall Pro",
    href: "/compare/servicetitan-vs-housecall-pro/",
    description:
      "Enterprise power vs small-business simplicity — which fits your team size and budget?",
  },
  {
    title: "Jobber vs ServiceTitan",
    href: "/compare/jobber-vs-servicetitan/",
    description:
      "Affordable all-in-one vs full-scale platform — the right pick depends on your revenue.",
  },
  {
    title: "Buildertrend vs CoConstruct",
    href: "/compare/buildertrend-vs-coconstruct/",
    description:
      "Project management for builders and remodelers — scope, budget tracking, and client portals.",
  },
  {
    title: "Jobber vs FieldEdge",
    href: "/compare/jobber-vs-fieldedge/",
    description:
      "General-purpose simplicity vs HVAC/plumbing-focused dispatching and flat-rate pricing.",
  },
  {
    title: "Jobber vs JobNimbus",
    href: "/compare/jobber-vs-jobnimbus/",
    description:
      "Field service scheduling vs roofing-focused CRM — which matches your workflow?",
  },
  {
    title: "ServiceTitan vs FieldEdge",
    href: "/compare/servicetitan-vs-fieldedge/",
    description:
      "Two platforms built for HVAC and plumbing shops, compared on features and cost.",
  },
  {
    title: "Housecall Pro vs JobNimbus",
    href: "/compare/housecall-pro-vs-jobnimbus/",
    description:
      "All-trades simplicity vs roofing-specific tools — pricing, CRM, and mobile experience.",
  },
];

const alternatives = [
  {
    title: "ServiceTitan Alternatives",
    href: "/compare/servicetitan-alternatives/",
    description:
      "Lower-cost options for shops that don't need enterprise-grade complexity.",
  },
  {
    title: "Jobber Alternatives",
    href: "/compare/jobber-alternatives/",
    description:
      "Similar platforms with different pricing, features, or trade-specific strengths.",
  },
  {
    title: "Buildertrend Alternatives",
    href: "/compare/buildertrend-alternatives/",
    description:
      "Project management tools for builders who want different pricing or workflows.",
  },
  {
    title: "Housecall Pro Alternatives",
    href: "/compare/housecall-pro-alternatives/",
    description:
      "Field service platforms that compete on price, features, or trade focus.",
  },
  {
    title: "QuickBooks Alternatives for Contractors",
    href: "/compare/quickbooks-alternatives-contractors/",
    description:
      "Accounting and job-costing tools built specifically for the trades.",
  },
  {
    title: "FieldEdge Alternatives",
    href: "/compare/fieldedge-alternatives/",
    description:
      "Simpler, cheaper options for HVAC and plumbing shops outgrowing FieldEdge.",
  },
  {
    title: "JobNimbus Alternatives",
    href: "/compare/jobnimbus-alternatives/",
    description:
      "Roofing and general-purpose platforms for contractors exploring beyond JobNimbus.",
  },
  {
    title: "Procore Alternatives",
    href: "/compare/procore-alternatives/",
    description:
      "Project management tools for builders who don't need enterprise-grade Procore.",
  },
];

export default function CompareIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Compare</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Software Comparisons
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Head-to-head reviews of the most popular contractor software. Real
          pricing, honest pros and cons, and clear recommendations so you pick
          the right tool the first time.
        </p>
      </header>

      {/* Head-to-Head Comparisons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-brand-blue mb-6">
          Head-to-Head Comparisons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-orange hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-brand-blue group-hover:text-brand-orange transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Alternatives */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-brand-blue mb-6">
          Software Alternatives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alternatives.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-orange hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-brand-blue group-hover:text-brand-orange transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <p className="text-center text-sm text-gray-400 mt-12">
        More comparisons coming soon. Have a matchup you want to see?{" "}
        <a
          href="mailto:info@mycontractortools.com"
          className="text-brand-orange hover:underline"
        >
          Let us know
        </a>
        .
      </p>
    </div>
  );
}

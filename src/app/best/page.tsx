import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Contractor Software by Trade (2026) | MyContractorTools",
  description:
    "Find the best software for your trade. HVAC, plumbing, electrical, roofing, landscaping, painting, flooring, concrete, pest control, and general contractor software — reviewed and ranked for 2026.",
};

const trades = [
  {
    title: "Best HVAC Software",
    href: "/best/hvac-software/",
    description:
      "Dispatch, flat-rate pricing, and maintenance-agreement tools built for heating and cooling pros.",
    icon: "🌡️",
  },
  {
    title: "Best Plumbing Software",
    href: "/best/plumbing-software/",
    description:
      "Service calls, drain camera integration, and invoicing designed for plumbing businesses.",
    icon: "🔧",
  },
  {
    title: "Best Electrical Contractor Software",
    href: "/best/electrical-contractor-software/",
    description:
      "Estimating, permit tracking, and panel scheduling for residential and commercial electricians.",
    icon: "⚡",
  },
  {
    title: "Best Roofing Software",
    href: "/best/roofing-software/",
    description:
      "Aerial measurements, insurance claim management, and production tracking for roofing crews.",
    icon: "🏠",
  },
  {
    title: "Best Landscaping Software",
    href: "/best/landscaping-software/",
    description:
      "Route optimization, recurring-service scheduling, and crew management for lawn and landscape.",
    icon: "🌿",
  },
  {
    title: "Best General Contractor Software",
    href: "/best/general-contractor-software/",
    description:
      "Project management, sub scheduling, budget tracking, and client portals for GCs and builders.",
    icon: "🏗️",
  },
  {
    title: "Best Painting Software",
    href: "/best/painting-software/",
    description:
      "Estimating by square footage, color scheduling, and crew-based job tracking for painters.",
    icon: "🎨",
  },
  {
    title: "Best Flooring Software",
    href: "/best/flooring-software/",
    description:
      "Material calculators, room-by-room scheduling, and install tracking for flooring contractors.",
    icon: "🪵",
  },
  {
    title: "Best Concrete & Masonry Software",
    href: "/best/concrete-contractor-software/",
    description:
      "Pour scheduling, mix calculators, and weather-aware planning for concrete and masonry work.",
    icon: "🧱",
  },
  {
    title: "Best Pest Control Software",
    href: "/best/pest-control-software/",
    description:
      "Route management, chemical tracking, and recurring-service automation for pest control operators.",
    icon: "🐛",
  },
];

export default function BestSoftwareIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Best Software</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Best Contractor Software by Trade (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Every trade has different needs. We reviewed the top platforms for each
          specialty so you can find software that actually fits your workflow —
          not a generic tool you have to fight with.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trades.map((trade) => (
          <Link
            key={trade.href}
            href={trade.href}
            className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-orange hover:shadow-md transition-all"
          >
            <span className="text-3xl mb-3 block" aria-hidden="true">
              {trade.icon}
            </span>
            <h2 className="font-bold text-brand-blue group-hover:text-brand-orange transition-colors mb-2">
              {trade.title}
            </h2>
            <p className="text-sm text-gray-600">{trade.description}</p>
          </Link>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-12">
        More trade-specific reviews coming soon. Have a trade you want covered?{" "}
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

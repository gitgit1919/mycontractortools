import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Contractor Guides — Start & Grow Your Business | MyContractorTools",
  description:
    "Free guides for contractors: how to start a contracting business, get licensed, find customers, build a website, and grow your revenue. Practical advice from industry experience.",
};

const guides = [
  {
    title: "How to Start a Contracting Business (Complete Guide)",
    href: "/guides/starting-a-contracting-business/",
    description:
      "Everything you need to start a contracting business from scratch — licensing, insurance, LLC formation, pricing your work, finding customers, and building systems that scale.",
    icon: "🚀",
    tag: "Most Popular",
  },
  {
    title: "How to Start an HVAC Business (2026)",
    href: "/guides/starting-an-hvac-business/",
    description:
      "EPA 608 certification, essential tools ($15K–$30K), pricing service calls, landing maintenance agreements, and scaling from solo tech to full crew.",
    icon: "🌡️",
    tag: "Trade Guide",
  },
  {
    title: "How to Start a Plumbing Business (2026)",
    href: "/guides/starting-a-plumbing-business/",
    description:
      "Apprenticeship path, licensing, essential tools ($10K–$25K), pricing plumbing services, emergency call marketing, and adding specialties like gas fitting.",
    icon: "🔧",
    tag: "Trade Guide",
  },
  {
    title: "How to Start an Electrical Business (2026)",
    href: "/guides/starting-an-electrical-business/",
    description:
      "Licensing path from apprentice to master, tools ($8K–$20K), pricing electrical work, EV charger opportunities, and scaling to commercial contracts.",
    icon: "⚡",
    tag: "Trade Guide",
  },
  {
    title: "How to Start a Roofing Business (2026)",
    href: "/guides/starting-a-roofing-business/",
    description:
      "Manufacturer certifications, equipment costs ($15K–$35K), per-square pricing, insurance restoration work, and scaling from one crew to multiple.",
    icon: "🏠",
    tag: "Trade Guide",
  },
  {
    title: "How to Start a Landscaping Business (2026)",
    href: "/guides/starting-a-landscaping-business/",
    description:
      "Low startup costs ($8K–$25K), recurring maintenance revenue, route density, hardscape upsells, and snow removal for year-round income.",
    icon: "🌿",
    tag: "Trade Guide",
  },
  {
    title: "How to Start a Painting Business (2026)",
    href: "/guides/starting-a-painting-business/",
    description:
      "Lowest startup cost of any trade ($3K–$10K), 50–65% margins, EPA RRP certification, and scaling with crew leads.",
    icon: "🎨",
    tag: "Trade Guide",
  },
  {
    title: "How to Start a Flooring Business (2026)",
    href: "/guides/starting-a-flooring-business/",
    description:
      "Manufacturer certifications, tools ($8K–$20K), per-sq-ft pricing for hardwood, LVP, tile, and carpet, plus showroom partnerships.",
    icon: "🪵",
    tag: "Trade Guide",
  },
  {
    title: "How to Start a Concrete Business (2026)",
    href: "/guides/starting-a-concrete-business/",
    description:
      "ACI certifications, heavy equipment ($15K–$40K), flatwork and decorative pricing, weather considerations, and scaling to commercial.",
    icon: "🏗️",
    tag: "Trade Guide",
  },
  {
    title: "Contractor Software Buyer's Guide (2026)",
    href: "/guides/contractor-software-buyers-guide/",
    description:
      "Compare scheduling, invoicing, and field service software with real pricing. Trade-specific recommendations, hidden cost warnings, and questions to ask before you buy.",
    icon: "📋",
    tag: "Free Download",
  },
];

export default function GuidesIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Guides</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Free Contractor Guides
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Practical, no-fluff guides to help you start, run, and grow a
          contracting business. Written for tradespeople, not MBAs.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-orange hover:shadow-md transition-all"
          >
            <span className="text-3xl mb-3 block" aria-hidden="true">
              {guide.icon}
            </span>
            {guide.tag && (
              <span className="inline-block text-xs bg-brand-orange text-white px-2 py-0.5 rounded-full mb-2">
                {guide.tag}
              </span>
            )}
            <h2 className="font-bold text-brand-blue group-hover:text-brand-orange transition-colors mb-2">
              {guide.title}
            </h2>
            <p className="text-sm text-gray-600">{guide.description}</p>
          </Link>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-12">
        More guides coming soon. Have a topic you want covered?{" "}
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

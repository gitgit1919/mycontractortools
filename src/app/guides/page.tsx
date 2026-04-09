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

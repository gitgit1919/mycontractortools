import type { ReactNode } from "react";
import Link from "next/link";
import EmailCapture from "./EmailCapture";

export interface SoftwareProduct {
  name: string;
  logo?: string;
  rating: number;
  bestFor: string;
  priceRange: string;
  pros: string[];
  cons: string[];
  features: string[];
  url?: string;
}

const trialUrls: Record<string, string> = {
  ServiceTitan: "https://www.servicetitan.com",
  "Housecall Pro": "https://www.housecallpro.com",
  Jobber: "https://getjobber.com",
  FieldPulse: "https://www.fieldpulse.com",
  FieldEdge: "https://www.fieldedge.com",
  Workiz: "https://www.workiz.com",
  GorillaDesk: "https://www.gorilladesk.com",
  JobNimbus: "https://www.jobnimbus.com",
  Buildertrend: "https://www.buildertrend.com",
  "Contractor Foreman": "https://www.contractorforeman.com",
  Procore: "https://www.procore.com",
  ServiceM8: "https://www.servicem8.com",
};

interface ComparisonLayoutProps {
  title: string;
  description: string;
  trade: string;
  lastUpdated: string;
  products: SoftwareProduct[];
  introContent: ReactNode;
  buyerGuideContent?: ReactNode;
  faqContent?: ReactNode;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating}/5</span>
    </div>
  );
}

function ProductCard({ product, rank }: { product: SoftwareProduct; rank: number }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-brand-blue text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
              {rank}
            </span>
            <h3 className="text-xl font-bold text-brand-blue">{product.name}</h3>
          </div>
          <StarRating rating={product.rating} />
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-brand-orange">{product.priceRange}</p>
          <p className="text-xs text-gray-500">per month</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4">
        <span className="font-semibold">Best for:</span> {product.bestFor}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm font-semibold text-green-700 mb-2">Pros</p>
          <ul className="text-sm text-gray-700 space-y-1">
            {product.pros.map((pro) => (
              <li key={pro} className="flex items-start gap-1.5">
                <span className="text-green-500 mt-0.5 shrink-0">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-red-700 mb-2">Cons</p>
          <ul className="text-sm text-gray-700 space-y-1">
            {product.cons.map((con) => (
              <li key={con} className="flex items-start gap-1.5">
                <span className="text-red-500 mt-0.5 shrink-0">−</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t pt-3">
        <p className="text-sm font-semibold text-gray-700 mb-2">Key Features</p>
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <span key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      {trialUrls[product.name] && (
        <div className="mt-4 pt-4 border-t">
          <a
            href={product.url || trialUrls[product.name]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit {product.name} — Start Free Trial
          </a>
        </div>
      )}
    </div>
  );
}

export default function ComparisonLayout({
  title,
  description,
  trade,
  lastUpdated,
  products,
  introContent,
  buyerGuideContent,
  faqContent,
}: ComparisonLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{title}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          {title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        <p className="text-sm text-gray-400 mt-2">Last updated: {lastUpdated}</p>
      </header>

      {/* Quick comparison table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-brand-blue text-white">
            <tr>
              <th className="text-left p-3 font-semibold">#</th>
              <th className="text-left p-3 font-semibold">Software</th>
              <th className="text-left p-3 font-semibold">Best For</th>
              <th className="text-left p-3 font-semibold">Price</th>
              <th className="text-left p-3 font-semibold">Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 font-bold text-brand-orange">{i + 1}</td>
                <td className="p-3 font-semibold text-brand-blue">{product.name}</td>
                <td className="p-3 text-gray-700">{product.bestFor}</td>
                <td className="p-3 text-gray-700">{product.priceRange}</td>
                <td className="p-3">
                  <span className="font-semibold">{product.rating}/5</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Intro content */}
      <div className="prose prose-gray max-w-none mb-10">
        {introContent}
      </div>

      {/* Product cards */}
      <div className="space-y-6 mb-10">
        {products.map((product, i) => (
          <ProductCard key={product.name} product={product} rank={i + 1} />
        ))}
      </div>

      {/* Buyer guide */}
      {buyerGuideContent && (
        <section className="mb-10 bg-brand-gray rounded-xl p-6 sm:p-8" aria-labelledby="buyer-guide">
          <h2 id="buyer-guide" className="text-2xl font-bold text-brand-blue mb-4">
            How to Choose the Right Software
          </h2>
          <div className="prose prose-gray max-w-none text-gray-700">
            {buyerGuideContent}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqContent && (
        <section className="mb-10" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-bold text-brand-blue mb-4">
            Frequently Asked Questions
          </h2>
          <div className="prose prose-gray max-w-none text-gray-700">
            {faqContent}
          </div>
        </section>
      )}

      {/* Software quiz CTA */}
      <section className="mb-8 bg-brand-blue text-white rounded-xl p-6 sm:p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Not Sure Which Software Is Right for You?</h2>
        <p className="text-white/80 text-sm mb-4">
          Answer 5 quick questions about your trade, team size, and priorities — get a personalized recommendation in under 60 seconds.
        </p>
        <Link
          href="/calculators/software-quiz/"
          className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium px-6 py-3 rounded-lg hover:bg-brand-orange/90 transition-colors"
        >
          Take the Free Software Quiz
        </Link>
      </section>

      {/* Email capture */}
      <div className="mb-8">
        <EmailCapture
          trade={trade}
          heading={`Free ${trade} Software Guide`}
          description={`Get our free guide comparing the best software tools for ${trade.toLowerCase()} businesses — with real pricing and honest recommendations.`}
        />
      </div>

      {/* Affiliate disclosure */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
        <p className="font-semibold mb-1">Affiliate Disclosure</p>
        <p>
          Some links on this page are affiliate links. If you click through and purchase,
          we may earn a commission at no extra cost to you. This does not influence our
          rankings or recommendations. See our{" "}
          <Link href="/affiliate-disclosure/" className="underline hover:text-brand-orange">
            full affiliate disclosure
          </Link>.
        </p>
      </div>
    </div>
  );
}

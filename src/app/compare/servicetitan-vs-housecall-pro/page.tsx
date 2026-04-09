import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "ServiceTitan vs Housecall Pro (2026) — Honest Comparison",
  description:
    "Detailed comparison of ServiceTitan vs Housecall Pro for contractors. We compare pricing, features, ease of use, and which is better for your size business.",
};

const features = [
  { feature: "Starting Price", servicetitan: "~$245/tech/mo", housecall: "$69/mo" },
  { feature: "Contract Required", servicetitan: "Yes (multi-year)", housecall: "No" },
  { feature: "Free Trial", servicetitan: "Demo only", housecall: "14 days" },
  { feature: "Pricebook (Flat-Rate)", servicetitan: "Yes (built-in)", housecall: "No" },
  { feature: "Dispatching", servicetitan: "Advanced with GPS", housecall: "Good with GPS" },
  { feature: "Online Booking", servicetitan: "Yes", housecall: "Yes" },
  { feature: "Automated Invoicing", servicetitan: "Yes", housecall: "Yes" },
  { feature: "Payment Processing", servicetitan: "Yes (Titan Pay)", housecall: "Yes (2.99%)" },
  { feature: "QuickBooks Integration", servicetitan: "Two-way sync", housecall: "Two-way sync" },
  { feature: "Marketing Analytics", servicetitan: "Advanced (call tracking, ROI)", housecall: "Basic" },
  { feature: "Membership Management", servicetitan: "Yes (full program)", housecall: "Limited" },
  { feature: "Review Requests", servicetitan: "Yes", housecall: "Yes (automated)" },
  { feature: "Consumer Financing", servicetitan: "Yes (GreenSky)", housecall: "Yes (Wisetack)" },
  { feature: "Reporting", servicetitan: "Enterprise-grade", housecall: "Basic" },
  { feature: "API Access", servicetitan: "Yes (open API)", housecall: "Limited" },
  { feature: "Mobile App", servicetitan: "Full-featured", housecall: "Clean and simple" },
  { feature: "Onboarding Time", servicetitan: "6-12 weeks", housecall: "1-3 days" },
];

export default function ServiceTitanVsHousecallPro() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/servicetitan-vs-housecall-pro/" className="text-gray-700">ServiceTitan vs Housecall Pro</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          ServiceTitan vs Housecall Pro (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          A no-BS comparison of the enterprise leader and the mid-market favorite. These tools serve
          very different businesses — here&apos;s how to know which one fits yours.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Quick verdict */}
      <div className="bg-brand-gray rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-3">Quick Verdict</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-blue mb-2">Choose ServiceTitan if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• You have 10+ technicians in the field</li>
              <li>• You do $1M+ in annual revenue</li>
              <li>• Flat-rate pricebook is essential to your business</li>
              <li>• You spend $5K+/month on marketing and need ROI tracking</li>
              <li>• You want enterprise-grade reporting and analytics</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-orange mb-2">Choose Housecall Pro if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• You have 1-15 technicians</li>
              <li>• You want to be up and running this week</li>
              <li>• Budget matters — you want good features at $69-$149/mo</li>
              <li>• You need automated review collection</li>
              <li>• Your team prefers a simpler, easier tool</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Feature comparison table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Feature-by-Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-brand-blue text-white">
              <tr>
                <th className="text-left p-3 font-semibold">Feature</th>
                <th className="text-left p-3 font-semibold">ServiceTitan</th>
                <th className="text-left p-3 font-semibold">Housecall Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-3 text-gray-700">{row.servicetitan}</td>
                  <td className="p-3 text-gray-700">{row.housecall}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing breakdown */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Pricing Comparison</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-brand-blue text-lg mb-3">ServiceTitan Pricing</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Starter</span><span className="font-semibold">~$245/tech/mo</span></li>
              <li className="flex justify-between"><span>Essentials</span><span className="font-semibold">~$300/tech/mo</span></li>
              <li className="flex justify-between"><span>The Works</span><span className="font-semibold">~$398/tech/mo</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Per-technician pricing. Multi-year contract. Implementation fees $5K-$50K.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-brand-orange text-lg mb-3">Housecall Pro Pricing</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Basic (1 user)</span><span className="font-semibold">$69/mo</span></li>
              <li className="flex justify-between"><span>Essentials (up to 5)</span><span className="font-semibold">$149/mo</span></li>
              <li className="flex justify-between"><span>MAX</span><span className="font-semibold">Custom</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Annual billing. No long-term contract. Monthly billing ~15-20% more.</p>
          </div>
        </div>
      </section>

      {/* Detailed analysis */}
      <section className="mb-10 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Detailed Analysis</h2>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Who Should Even Consider ServiceTitan?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ServiceTitan is built for established home service companies. If you have fewer than 5 techs or
          do under $500K in revenue, it will cost more than it returns. The platform shines when you have
          enough volume to benefit from its pricebook, marketing analytics, and membership management.
          The onboarding takes 6-12 weeks and requires a dedicated point person on your team.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Dispatching and Scheduling</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ServiceTitan&apos;s dispatch board is the most powerful in the industry. Real-time GPS, capacity
          planning, and automatic job assignment make it invaluable for large operations. Housecall Pro&apos;s
          dispatching is solid and handles most needs well, but it lacks the depth for complex multi-tech
          routing across a large service area.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Flat-Rate Pricebook</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the single biggest differentiator. ServiceTitan includes a built-in, regularly updated
          pricebook that lets techs present professional pricing options to customers on the spot. This
          increases average ticket size significantly. Housecall Pro does not have a native pricebook —
          you would need to build your own or use a third-party integration.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Marketing and Lead Tracking</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ServiceTitan&apos;s marketing module tracks every call, ties it to the campaign that generated
          it, and shows you cost per lead and ROI by channel. For companies spending $10K+ per month on
          ads, this pays for itself. Housecall Pro offers basic review automation and a postcard marketing
          feature, but nothing close to ServiceTitan&apos;s marketing analytics.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Ease of Use</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Housecall Pro wins here decisively. Most techs learn the app in a day, and the office staff
          can be productive within a week. ServiceTitan requires weeks of training and ongoing admin
          effort to maintain. If your team resists new technology, Housecall Pro is a much safer bet.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed">
          ServiceTitan and Housecall Pro are not really direct competitors — they serve different market
          segments. ServiceTitan is the right choice for established companies with 10+ techs, $1M+ revenue,
          and the budget and patience for enterprise software. Housecall Pro is the right choice for growing
          businesses that want solid features, fast setup, and predictable pricing. If you are between the
          two, start with Housecall Pro. You can always upgrade to ServiceTitan later when the business
          justifies the investment.
        </p>
      </section>

      {/* Email capture */}
      <div className="mb-8">
        <EmailCapture
          heading="Free Software Comparison Guide"
          description="Get our free guide comparing all the top contractor software tools — with real pricing and honest recommendations."
        />
      </div>

      {/* Affiliate disclosure */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
        <p className="font-semibold mb-1">Affiliate Disclosure</p>
        <p>
          Some links on this page are affiliate links. If you click through and purchase, we may earn
          a commission at no extra cost to you. See our{" "}
          <Link href="/affiliate-disclosure/" className="underline hover:text-brand-orange">
            full affiliate disclosure
          </Link>.
        </p>
      </div>
    </div>
  );
}

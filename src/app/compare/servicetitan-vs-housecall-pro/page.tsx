import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { getTrialUrl } from "@/lib/trialUrls";

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
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>&bull; You have 10+ technicians in the field</li>
              <li>&bull; You do $1M+ in annual revenue</li>
              <li>&bull; Flat-rate pricebook is essential to your business</li>
              <li>&bull; You spend $5K+/month on marketing and need ROI tracking</li>
              <li>&bull; You want enterprise-grade reporting and analytics</li>
            </ul>
            <a
              href={getTrialUrl("ServiceTitan")!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Book ServiceTitan demo &rarr;
            </a>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-orange mb-2">Choose Housecall Pro if:</h3>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>&bull; You have 1-15 technicians</li>
              <li>&bull; You want to be up and running this week</li>
              <li>&bull; Budget matters &mdash; you want good features at $69-$149/mo</li>
              <li>&bull; You need automated review collection</li>
              <li>&bull; Your team prefers a simpler, easier tool</li>
            </ul>
            <a
              href={getTrialUrl("Housecall Pro")!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Start Housecall Pro free trial &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Business stage matrix */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Which Stage Are You In?</h2>
        <p className="text-gray-700 mb-4">
          These tools live in different worlds. Here is the honest match by revenue and crew size:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Solo / Startup</p>
            <p className="text-lg font-bold text-brand-blue mt-1">Under $300K</p>
            <p className="text-xs text-gray-600 mb-2">1-2 trucks</p>
            <p className="text-sm text-gray-700"><strong>Housecall Pro Basic.</strong> ServiceTitan would burn 5%+ of gross revenue at this stage.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">Small Crew</p>
            <p className="text-lg font-bold text-brand-blue mt-1">$300K - $750K</p>
            <p className="text-xs text-gray-600 mb-2">3-5 techs</p>
            <p className="text-sm text-gray-700"><strong>HCP Essentials</strong>. The marketing automation and Wisetack financing pay for the upgrade.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Growing</p>
            <p className="text-lg font-bold text-brand-blue mt-1">$750K - $2M</p>
            <p className="text-xs text-gray-600 mb-2">6-15 techs</p>
            <p className="text-sm text-gray-700"><strong>The crossover zone.</strong> If you sell flat-rate and spend $5K+/mo on ads, demo ServiceTitan. Otherwise stay on HCP MAX.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide">Established</p>
            <p className="text-lg font-bold text-brand-blue mt-1">$2M+</p>
            <p className="text-xs text-gray-600 mb-2">15+ techs</p>
            <p className="text-sm text-gray-700"><strong>ServiceTitan territory.</strong> Pricebook lift, dispatch optimization, and call tracking start paying for the cost.</p>
          </div>
        </div>
      </section>

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

      {/* Real Year-1 cost analysis */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Real Year-1 Cost by Team Size</h2>
        <p className="text-gray-700 mb-4">
          The pricing gap is enormous. Here is what each costs in Year 1, including software, implementation,
          and training time. Numbers are estimates &mdash; ServiceTitan does not publish pricing.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-brand-blue text-white">
              <tr>
                <th className="text-left p-3 font-semibold">Team Size</th>
                <th className="text-left p-3 font-semibold">Housecall Pro (Year 1)</th>
                <th className="text-left p-3 font-semibold">ServiceTitan (Year 1)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 font-medium text-gray-800">3 techs</td>
                <td className="p-3 text-gray-700">~$1,788 (Essentials)</td>
                <td className="p-3 text-gray-700">~$13,500 + ~$5K setup = ~$18,500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium text-gray-800">5 techs</td>
                <td className="p-3 text-gray-700">~$1,788 (Essentials cap)</td>
                <td className="p-3 text-gray-700">~$22,500 + ~$8K setup = ~$30,500</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-medium text-gray-800">10 techs</td>
                <td className="p-3 text-gray-700">~$3,500-$5,000 (MAX)</td>
                <td className="p-3 text-gray-700">~$45,000 + ~$15K setup = ~$60,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium text-gray-800">20 techs</td>
                <td className="p-3 text-gray-700">~$7,000-$10,000 (MAX)</td>
                <td className="p-3 text-gray-700">~$90,000 + ~$25K setup = ~$115,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-brand-gray rounded-lg p-4 mt-4 text-sm">
          <p className="font-semibold text-brand-blue mb-1">When the 12x premium pays back:</p>
          <p className="text-gray-700">
            ServiceTitan can earn its keep through (1) flat-rate pricebook lifting average tickets by
            $50-$200, (2) call tracking that reveals which marketing channels actually book jobs, and
            (3) membership program automation. None of these matter much under $1M revenue. All three
            matter a lot above $1.5M.
          </p>
        </div>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-4">
          ServiceTitan and Housecall Pro are not really direct competitors &mdash; they serve different market
          segments. ServiceTitan is the right choice for established companies with 10+ techs, $1M+ revenue,
          and the budget and patience for enterprise software. Housecall Pro is the right choice for growing
          businesses that want solid features, fast setup, and predictable pricing. If you are between the
          two, start with Housecall Pro. You can always upgrade to ServiceTitan later when the business
          justifies the investment.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={getTrialUrl("Housecall Pro")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium px-5 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Start Housecall Pro free trial
          </a>
          <a
            href={getTrialUrl("ServiceTitan")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-blue font-medium px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
          >
            Book ServiceTitan demo
          </a>
        </div>
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

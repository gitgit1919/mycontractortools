import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { getTrialUrl } from "@/lib/trialUrls";

export const metadata: Metadata = {
  title: "Jobber vs Housecall Pro (2026) — Honest Comparison",
  description:
    "Detailed comparison of Jobber vs Housecall Pro for contractors. We compare pricing, features, ease of use, and which is better for your trade business.",
};

const features = [
  { feature: "Starting Price", jobber: "$29/mo", housecall: "$69/mo" },
  { feature: "Free Trial", jobber: "14 days", housecall: "14 days" },
  { feature: "Max Users (Base Plan)", jobber: "1 user", housecall: "1 user" },
  { feature: "Online Booking", jobber: "Yes", housecall: "Yes" },
  { feature: "Drag-and-Drop Scheduling", jobber: "Yes", housecall: "Yes" },
  { feature: "GPS Tracking", jobber: "Yes (Core plan+)", housecall: "Yes (Essentials+)" },
  { feature: "Automated Invoicing", jobber: "Yes", housecall: "Yes" },
  { feature: "Payment Processing", jobber: "Yes (2.9% + 30¢)", housecall: "Yes (2.99%)" },
  { feature: "QuickBooks Integration", jobber: "Two-way sync", housecall: "Two-way sync" },
  { feature: "Customer Portal", jobber: "Client Hub", housecall: "No" },
  { feature: "Review Requests", jobber: "Limited", housecall: "Automated" },
  { feature: "Flat-Rate Pricebook", jobber: "No", housecall: "No" },
  { feature: "Consumer Financing", jobber: "No", housecall: "Yes (Wisetack)" },
  { feature: "Reporting", jobber: "Good", housecall: "Basic" },
  { feature: "API Access", jobber: "Yes", housecall: "Limited" },
];

export default function JobberVsHousecallPro() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/jobber-vs-housecall-pro/" className="text-gray-700">Jobber vs Housecall Pro</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Jobber vs Housecall Pro (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          An honest, side-by-side comparison of the two most popular field service management tools for
          small to mid-size contractors.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Quick verdict */}
      <div className="bg-brand-gray rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-3">Quick Verdict</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-blue mb-2">Choose Jobber if:</h3>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>&bull; You want the cleanest, easiest interface</li>
              <li>&bull; You rely heavily on quoting and follow-ups</li>
              <li>&bull; You want a customer self-service portal</li>
              <li>&bull; You need strong reporting and analytics</li>
              <li>&bull; Budget is a primary concern ($29 vs $69)</li>
            </ul>
            <a
              href={getTrialUrl("Jobber")!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Start Jobber free trial &rarr;
            </a>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-orange mb-2">Choose Housecall Pro if:</h3>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>&bull; You want automated review collection</li>
              <li>&bull; You need consumer financing (Wisetack)</li>
              <li>&bull; Online booking is critical for your business</li>
              <li>&bull; You want a built-in postcard marketing tool</li>
              <li>&bull; Your techs prefer a simpler mobile experience</li>
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
          Both tools fit different shops. The honest match changes with your team size and where your leads come from:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Solo / Startup</p>
            <p className="text-lg font-bold text-brand-blue mt-1">Under $200K</p>
            <p className="text-xs text-gray-600 mb-2">1 truck, owner-operator</p>
            <p className="text-sm text-gray-700"><strong>Jobber Core ($29).</strong> The cheapest path to professional quotes and invoicing.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">Small Crew</p>
            <p className="text-lg font-bold text-brand-blue mt-1">$200K - $500K</p>
            <p className="text-xs text-gray-600 mb-2">2-4 techs</p>
            <p className="text-sm text-gray-700"><strong>Either works.</strong> If reviews and online booking drive your leads, lean HCP. If quoting is your sales engine, lean Jobber.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Growing</p>
            <p className="text-lg font-bold text-brand-blue mt-1">$500K - $1M</p>
            <p className="text-xs text-gray-600 mb-2">5-10 techs</p>
            <p className="text-sm text-gray-700"><strong>HCP edges ahead</strong> if you offer consumer financing (Wisetack lifts close rates on $5K+ tickets).</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide">Established</p>
            <p className="text-lg font-bold text-brand-blue mt-1">$1M+</p>
            <p className="text-xs text-gray-600 mb-2">10+ techs</p>
            <p className="text-sm text-gray-700"><strong>Both feel constrained.</strong> Look at FieldPulse or ServiceTitan for true multi-location dispatch.</p>
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
                <th className="text-left p-3 font-semibold">Jobber</th>
                <th className="text-left p-3 font-semibold">Housecall Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-3 text-gray-700">{row.jobber}</td>
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
            <h3 className="font-bold text-brand-blue text-lg mb-3">Jobber Plans</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Core (1 user)</span><span className="font-semibold">$29/mo</span></li>
              <li className="flex justify-between"><span>Connect (1 user)</span><span className="font-semibold">$99/mo</span></li>
              <li className="flex justify-between"><span>Grow (1 user)</span><span className="font-semibold">$149/mo</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Annual billing. Monthly billing is ~15% more.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-brand-orange text-lg mb-3">Housecall Pro Plans</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Basic (1 user)</span><span className="font-semibold">$69/mo</span></li>
              <li className="flex justify-between"><span>Essentials (up to 5)</span><span className="font-semibold">$149/mo</span></li>
              <li className="flex justify-between"><span>MAX</span><span className="font-semibold">Custom</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Annual billing. Monthly billing is ~15-20% more.</p>
          </div>
        </div>
      </section>

      {/* Detailed analysis */}
      <section className="mb-10 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Detailed Analysis</h2>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Scheduling and Dispatching</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Both platforms offer drag-and-drop scheduling, but Jobber&apos;s calendar is more polished and
          easier to navigate. Housecall Pro&apos;s dispatch view is functional but can feel cluttered when
          managing many techs. For GPS tracking, both require a mid-tier plan — it&apos;s not available on
          the cheapest option.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Quoting and Invoicing</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is where Jobber shines. Its quoting system is best-in-class for contractors — you can create
          professional quotes with optional line items, automated follow-up reminders, and a client hub
          where customers can approve and pay. Housecall Pro&apos;s estimates are simpler and work fine for
          straightforward jobs, but lack the polish and automation of Jobber&apos;s system.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Marketing and Reviews</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Housecall Pro wins on marketing. It has automated review request emails after job completion
          (which is huge for building your Google presence), a postcard marketing feature, and consumer
          financing through Wisetack. Jobber has basic review requests but nothing as polished or
          automated as Housecall Pro&apos;s system.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Mobile App</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Both apps are solid, but they have different strengths. Jobber&apos;s app is more feature-complete
          — techs can do almost everything from their phone. Housecall Pro&apos;s app is simpler and more
          streamlined, which some techs prefer because there&apos;s less to learn. Both work offline to
          some degree, which matters for job sites with poor connectivity.
        </p>
      </section>

      {/* Real Year-1 cost analysis */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Real Year-1 Cost by Team Size</h2>
        <p className="text-gray-700 mb-4">
          Headline price is one number. Here is the real Year-1 spend for a typical service shop, including
          team plan upgrades and the difference in payment processing fees on $300K of card volume:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-brand-blue text-white">
              <tr>
                <th className="text-left p-3 font-semibold">Team Size</th>
                <th className="text-left p-3 font-semibold">Jobber (Year 1)</th>
                <th className="text-left p-3 font-semibold">Housecall Pro (Year 1)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 font-medium text-gray-800">Solo (1 user)</td>
                <td className="p-3 text-gray-700">~$348 (Core)</td>
                <td className="p-3 text-gray-700">~$828 (Basic)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium text-gray-800">3 users</td>
                <td className="p-3 text-gray-700">~$1,188 (Connect)</td>
                <td className="p-3 text-gray-700">~$1,788 (Essentials)</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-medium text-gray-800">5 users</td>
                <td className="p-3 text-gray-700">~$1,788 (Grow)</td>
                <td className="p-3 text-gray-700">~$1,788 (Essentials cap)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium text-gray-800">10 users</td>
                <td className="p-3 text-gray-700">~$3,588 (Grow tier)</td>
                <td className="p-3 text-gray-700">~$3,500-$5,000 (MAX, custom)</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-medium text-gray-800">Card processing on $300K</td>
                <td className="p-3 text-gray-700">~$8,800 (2.9% + 30&cent;)</td>
                <td className="p-3 text-gray-700">~$8,970 (2.99%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Annual billing assumed. Numbers are 2026 estimates and vary by region and contract terms.
        </p>
        <div className="bg-brand-gray rounded-lg p-4 mt-4 text-sm">
          <p className="font-semibold text-brand-blue mb-1">When the price gap matters:</p>
          <p className="text-gray-700">
            For a solo operator, Jobber Core is &lt;$1/day &mdash; the savings vs HCP Basic is real but tiny in
            the context of running a business. By 5+ users the gap closes entirely. <strong>Pick on features and
            workflow fit, not on price.</strong>
          </p>
        </div>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-4">
          Jobber and Housecall Pro are both excellent tools, and you can run a successful contracting
          business with either one. Jobber is the better choice if you value clean design, powerful
          quoting, and a customer portal. Housecall Pro is better if marketing, reviews, and consumer
          financing are priorities. Both offer free trials &mdash; the best way to decide is to test each
          with your actual workflow for a week.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={getTrialUrl("Jobber")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium px-5 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Start Jobber free trial
          </a>
          <a
            href={getTrialUrl("Housecall Pro")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-blue font-medium px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
          >
            Start Housecall Pro free trial
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

import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Best ServiceTitan Alternatives (2026) — 6 Options That Cost Less",
  description:
    "Looking for a ServiceTitan alternative? Compare 6 affordable options starting at $29/mo. Honest pricing, pros, cons, and recommendations for contractors.",
};

const alternatives = [
  {
    name: "Jobber",
    bestFor: "Best overall alternative",
    startingPrice: "$29/mo",
    keyAdvantage: "Simple, affordable, great mobile app",
  },
  {
    name: "Housecall Pro",
    bestFor: "Marketing automation",
    startingPrice: "$49/mo",
    keyAdvantage: "Online booking, automated reviews",
  },
  {
    name: "FieldEdge",
    bestFor: "Shops wanting a pricebook",
    startingPrice: "~$100+/user/mo",
    keyAdvantage: "Built-in flat-rate pricebook",
  },
  {
    name: "Workiz",
    bestFor: "Phone-first businesses",
    startingPrice: "$49/mo",
    keyAdvantage: "Built-in VoIP and call tracking",
  },
  {
    name: "FieldPulse",
    bestFor: "Growing teams on a budget",
    startingPrice: "$60/mo",
    keyAdvantage: "Affordable per-user pricing with CRM",
  },
  {
    name: "Service Fusion",
    bestFor: "Mid-size shops wanting flat pricing",
    startingPrice: "$166/mo",
    keyAdvantage: "Unlimited users on every plan",
  },
];

export default function ServiceTitanAlternatives() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/servicetitan-alternatives/" className="text-gray-700">
            ServiceTitan Alternatives
          </Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Best ServiceTitan Alternatives (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          6 field service tools that cost less than ServiceTitan — without giving up the
          features your shop actually needs.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Why contractors look for alternatives */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">
          Why Contractors Switch From ServiceTitan
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ServiceTitan is a powerful platform, but it is not the right fit for every shop.
          The most common reasons contractors look for alternatives:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-brand-orange font-bold mt-0.5">$</span>
            <span>
              <strong>Expensive.</strong> Plans start around $398/mo with most shops paying
              significantly more. There is no free trial — you need a demo call just to see
              pricing.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-orange font-bold mt-0.5">!</span>
            <span>
              <strong>Overkill for small shops.</strong> If you run a 1-5 person crew, you
              are paying for call tracking, advanced reporting, and marketing features you
              may never touch.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-orange font-bold mt-0.5">#</span>
            <span>
              <strong>Long contracts.</strong> ServiceTitan typically requires annual
              contracts. Walking away mid-year is not easy.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-orange font-bold mt-0.5">~</span>
            <span>
              <strong>Complex onboarding.</strong> Implementation can take weeks and often
              requires paid onboarding support. Simpler tools get you running in a day.
            </span>
          </li>
        </ul>
      </section>

      {/* Quick comparison table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">
          Quick Comparison: All 6 Alternatives
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-brand-blue text-white">
              <tr>
                <th className="text-left p-3 font-semibold">Software</th>
                <th className="text-left p-3 font-semibold">Best For</th>
                <th className="text-left p-3 font-semibold">Starting Price</th>
                <th className="text-left p-3 font-semibold">Key Advantage</th>
              </tr>
            </thead>
            <tbody>
              {alternatives.map((alt, i) => (
                <tr key={alt.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{alt.name}</td>
                  <td className="p-3 text-gray-700">{alt.bestFor}</td>
                  <td className="p-3 text-gray-700">{alt.startingPrice}</td>
                  <td className="p-3 text-gray-700">{alt.keyAdvantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          ServiceTitan starts at ~$398/mo with annual contracts and required demos.
        </p>
      </section>

      {/* Detailed alternative sections */}
      <section className="mb-10 space-y-8">
        <h2 className="text-2xl font-bold text-brand-blue mb-2">
          Detailed Breakdown
        </h2>

        {/* Jobber */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-bold text-brand-blue">1. Jobber</h3>
            <span className="text-sm font-semibold text-brand-orange">$29 - $149/mo</span>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-3">Best overall ServiceTitan alternative</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jobber is the most popular alternative for a reason. It covers scheduling,
            dispatching, invoicing, quoting, and payments at a fraction of the cost. The
            interface is clean and techs can learn it in a day. Works well for shops with 1
            to 15 people across any trade — HVAC, plumbing, electrical, landscaping, cleaning,
            and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Strengths</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Affordable per-plan pricing (not per user)</li>
                <li>- 14-day free trial — no sales call needed</li>
                <li>- Excellent mobile app for techs</li>
                <li>- Client Hub for customer self-service</li>
                <li>- Strong QuickBooks Online sync</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- No built-in flat-rate pricebook</li>
                <li>- No built-in call tracking</li>
                <li>- Reporting is basic compared to ServiceTitan</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Read more:{" "}
            <Link href="/compare/jobber-vs-servicetitan/" className="text-brand-orange hover:underline">
              Jobber vs ServiceTitan
            </Link>
          </p>
        </div>

        {/* Housecall Pro */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-bold text-brand-blue">2. Housecall Pro</h3>
            <span className="text-sm font-semibold text-brand-orange">$49+/mo</span>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-3">Best for marketing automation</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Housecall Pro stands out with built-in marketing features that ServiceTitan
            charges extra for. Online booking lets homeowners schedule directly from your
            website or Google listing. Automated review requests go out after every job,
            helping you build a strong online reputation without manual follow-up.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Strengths</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Online booking built in</li>
                <li>- Automated review requests after jobs</li>
                <li>- Postcard and email marketing tools</li>
                <li>- Instapay for same-day deposits</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Per-user pricing adds up fast</li>
                <li>- QuickBooks sync can be inconsistent</li>
                <li>- Advanced features locked to higher plans</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Read more:{" "}
            <Link href="/compare/servicetitan-vs-housecall-pro/" className="text-brand-orange hover:underline">
              ServiceTitan vs Housecall Pro
            </Link>
          </p>
        </div>

        {/* FieldEdge */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-bold text-brand-blue">3. FieldEdge</h3>
            <span className="text-sm font-semibold text-brand-orange">~$100+/user/mo</span>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-3">Best for shops wanting a pricebook</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            FieldEdge is the closest alternative to ServiceTitan in terms of depth. Its
            built-in flat-rate pricebook lets techs present professional pricing on-site
            without calling the office. If your HVAC or plumbing shop runs on flat-rate
            pricing and you rely on QuickBooks Desktop, FieldEdge is worth a serious look.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Strengths</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Built-in flat-rate pricebook</li>
                <li>- Strong QuickBooks Desktop integration</li>
                <li>- Purpose-built dispatch board</li>
                <li>- Technician performance tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- No public pricing — requires sales call</li>
                <li>- Steeper learning curve than Jobber</li>
                <li>- No customer self-service portal</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Read more:{" "}
            <Link href="/compare/servicetitan-vs-fieldedge/" className="text-brand-orange hover:underline">
              ServiceTitan vs FieldEdge
            </Link>
          </p>
        </div>

        {/* Workiz */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-bold text-brand-blue">4. Workiz</h3>
            <span className="text-sm font-semibold text-brand-orange">$49+/mo</span>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-3">Best for phone-first businesses</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Workiz is a strong choice for contractors whose business lives on the phone.
            Built-in VoIP and call tracking let you see which marketing channels drive
            calls, record conversations, and route calls to the right person — features that
            ServiceTitan also offers but at a much higher price point.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Strengths</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Built-in VoIP phone system</li>
                <li>- Call tracking with source attribution</li>
                <li>- Affordable starting price</li>
                <li>- Good for locksmith, garage door, appliance repair</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Smaller ecosystem than ServiceTitan</li>
                <li>- Fewer integrations overall</li>
                <li>- Reporting is less advanced</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FieldPulse */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-bold text-brand-blue">5. FieldPulse</h3>
            <span className="text-sm font-semibold text-brand-orange">$60/mo</span>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-3">Best for growing teams on a budget</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            FieldPulse offers a solid CRM, scheduling, invoicing, and estimating package at
            a price that scales well as your team grows. Per-user pricing stays reasonable
            and the built-in customer management tools help shops that are outgrowing
            spreadsheets but do not need the complexity of ServiceTitan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Strengths</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Affordable per-user pricing</li>
                <li>- Built-in CRM with customer history</li>
                <li>- Pricebook with markup management</li>
                <li>- Good for HVAC and plumbing shops</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Smaller user community</li>
                <li>- Fewer third-party integrations</li>
                <li>- Mobile app can be slow on older devices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Fusion */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-bold text-brand-blue">6. Service Fusion</h3>
            <span className="text-sm font-semibold text-brand-orange">$166/mo</span>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-3">Best for mid-size shops wanting flat pricing</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Service Fusion charges a flat monthly rate with unlimited users — a major
            advantage if you have a large team. You get scheduling, dispatching, invoicing,
            customer management, and estimates without worrying about per-seat costs eating
            into your margins.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Strengths</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Unlimited users on every plan</li>
                <li>- Flat monthly pricing — no per-seat surprises</li>
                <li>- GPS fleet tracking available</li>
                <li>- FusionPay for integrated payments</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Interface feels dated compared to Jobber</li>
                <li>- Mobile app reviews are mixed</li>
                <li>- Customer support can be slow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to stick with ServiceTitan */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">
          When ServiceTitan Is Actually Worth It
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ServiceTitan is expensive for a reason. If your shop fits the profile below, it
          may genuinely be the best tool for you — and switching to a cheaper alternative
          could cost you more in lost efficiency.
        </p>
        <div className="bg-brand-gray rounded-xl p-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-brand-blue font-bold mt-0.5">+</span>
              <span>
                <strong>Large multi-crew operations.</strong> If you manage 15+ techs across
                multiple teams, ServiceTitan&apos;s dispatching and reporting depth is hard
                to match.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-blue font-bold mt-0.5">+</span>
              <span>
                <strong>You need call tracking ROI data.</strong> ServiceTitan&apos;s call
                tracking ties marketing spend directly to booked revenue. No alternative
                does this as well.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-blue font-bold mt-0.5">+</span>
              <span>
                <strong>Your shop does $1M+ in annual revenue.</strong> At that scale, the
                efficiency gains and data insights can more than pay for the monthly cost.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-blue font-bold mt-0.5">+</span>
              <span>
                <strong>You want a full platform ecosystem.</strong> ServiceTitan&apos;s
                marketplace of add-ons for membership management, equipment tracking, and
                sales proposals goes deeper than any alternative.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-3">
          For most small to mid-size contractors, <strong>Jobber</strong> is the best
          ServiceTitan alternative — it covers the essentials at a price that makes sense
          for shops under 15 people. If marketing automation matters most, look
          at <strong>Housecall Pro</strong>. If you need a flat-rate pricebook and
          QuickBooks Desktop support, <strong>FieldEdge</strong> is your best bet.
        </p>
        <p className="text-white/90 leading-relaxed">
          Only stick with ServiceTitan if your shop is large enough and profitable enough
          to take full advantage of its advanced features. Paying $400+/mo for software
          you use 30% of is not a smart business decision.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/best/hvac-software/" className="bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1.5 text-white">
            Best HVAC Software
          </Link>
          <Link href="/best/plumbing-software/" className="bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1.5 text-white">
            Best Plumbing Software
          </Link>
          <Link href="/compare/jobber-vs-servicetitan/" className="bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1.5 text-white">
            Jobber vs ServiceTitan
          </Link>
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

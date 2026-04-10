import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { getTrialUrl } from "@/lib/trialUrls";

export const metadata: Metadata = {
  title: "Jobber vs ServiceTitan (2026) — Honest Comparison",
  description:
    "Detailed comparison of Jobber vs ServiceTitan for contractors. We compare pricing, features, ease of use, and which is better for small vs large businesses.",
};

const features = [
  { feature: "Starting Price", jobber: "$29/mo", servicetitan: "$245+/tech/mo" },
  { feature: "Contract Required", jobber: "No", servicetitan: "Yes (multi-year)" },
  { feature: "Free Trial", jobber: "14 days", servicetitan: "Demo only" },
  { feature: "Best For", jobber: "1-15 employees", servicetitan: "10-200+ employees" },
  { feature: "Pricebook (Flat-Rate)", jobber: "No", servicetitan: "Yes (built-in)" },
  { feature: "Dispatching", jobber: "Basic", servicetitan: "Advanced with GPS" },
  { feature: "Online Booking", jobber: "Yes", servicetitan: "Yes" },
  { feature: "Quoting", jobber: "Excellent (best-in-class)", servicetitan: "Good" },
  { feature: "Customer Portal", jobber: "Client Hub", servicetitan: "Customer-facing app" },
  { feature: "Payment Processing", jobber: "2.9% + 30¢", servicetitan: "Titan Pay" },
  { feature: "QuickBooks Integration", jobber: "Two-way sync", servicetitan: "Two-way sync" },
  { feature: "Marketing Analytics", jobber: "None", servicetitan: "Advanced" },
  { feature: "Membership Management", jobber: "Basic", servicetitan: "Full program" },
  { feature: "Reporting", jobber: "Good", servicetitan: "Enterprise-grade" },
  { feature: "API Access", jobber: "Yes", servicetitan: "Yes" },
  { feature: "Setup Time", jobber: "1 day", servicetitan: "6-12 weeks" },
];

export default function JobberVsServiceTitan() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/jobber-vs-servicetitan/" className="text-gray-700">Jobber vs ServiceTitan</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Jobber vs ServiceTitan (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          The most affordable small-business tool vs the industry&apos;s enterprise platform. They aren&apos;t
          really competitors — but contractors ask about this comparison constantly.
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
              <li>&bull; You have 1-15 employees</li>
              <li>&bull; You want something running by tomorrow</li>
              <li>&bull; Quoting and follow-ups are critical to your sales</li>
              <li>&bull; You want a customer self-service portal</li>
              <li>&bull; Budget is a primary concern</li>
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
            <h3 className="font-bold text-brand-orange mb-2">Choose ServiceTitan if:</h3>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>&bull; You have 10+ technicians</li>
              <li>&bull; You need a built-in flat-rate pricebook</li>
              <li>&bull; Marketing spend tracking and ROI matter</li>
              <li>&bull; You want membership program management</li>
              <li>&bull; You can invest 6-12 weeks in onboarding</li>
            </ul>
            <a
              href={getTrialUrl("ServiceTitan")!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Book a ServiceTitan demo &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Business stage matrix */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Which Stage Are You In?</h2>
        <p className="text-gray-700 mb-4">
          The right answer changes as your shop grows. Here is the honest match by revenue and crew size:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Solo / Startup</p>
            <p className="text-lg font-bold text-brand-blue mt-1">Under $250K</p>
            <p className="text-xs text-gray-600 mb-2">1 truck, owner-operator</p>
            <p className="text-sm text-gray-700"><strong>Jobber Core ($29/mo).</strong> ServiceTitan would be a $20K+/year mistake at this stage.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">Small Crew</p>
            <p className="text-lg font-bold text-brand-blue mt-1">$250K - $750K</p>
            <p className="text-xs text-gray-600 mb-2">2-5 techs</p>
            <p className="text-sm text-gray-700"><strong>Jobber Connect or Grow.</strong> Still too small for ServiceTitan&apos;s minimum spend to make sense.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Growing</p>
            <p className="text-lg font-bold text-brand-blue mt-1">$750K - $1.5M</p>
            <p className="text-xs text-gray-600 mb-2">5-10 techs</p>
            <p className="text-sm text-gray-700"><strong>The decision zone.</strong> Jobber Grow still works, but if you sell flat-rate and run marketing, demo ServiceTitan.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide">Established</p>
            <p className="text-lg font-bold text-brand-blue mt-1">$1.5M+</p>
            <p className="text-xs text-gray-600 mb-2">10-50+ techs</p>
            <p className="text-sm text-gray-700"><strong>ServiceTitan starts to pay for itself</strong> through pricebook sales lift, call tracking, and dispatch optimization.</p>
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
                <th className="text-left p-3 font-semibold">ServiceTitan</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-3 text-gray-700">{row.jobber}</td>
                  <td className="p-3 text-gray-700">{row.servicetitan}</td>
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
            <p className="text-xs text-gray-500 mt-2">Annual billing. No contract. Team plans available from $149/mo (5 users).</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-brand-orange text-lg mb-3">ServiceTitan Plans</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Starter</span><span className="font-semibold">~$245/tech/mo</span></li>
              <li className="flex justify-between"><span>Essentials</span><span className="font-semibold">~$300/tech/mo</span></li>
              <li className="flex justify-between"><span>The Works</span><span className="font-semibold">~$398/tech/mo</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Multi-year contract. Implementation fees $5K-$50K. Add-ons extra.</p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4 text-sm text-amber-900">
          <p className="font-semibold">Price perspective:</p>
          <p>A solo contractor on Jobber Core pays $348/year. A 5-tech team on ServiceTitan pays $14,700+/year minimum plus implementation fees. That gap only makes sense when your revenue and team size justify the advanced features.</p>
        </div>
      </section>

      {/* Real Year 1 cost analysis */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Real Year-1 Cost by Team Size</h2>
        <p className="text-gray-700 mb-4">
          Headline pricing is misleading. Here is what each option actually costs in your first year &mdash; including
          implementation, payment processing on $300K of card volume, and required training:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-brand-blue text-white">
              <tr>
                <th className="text-left p-3 font-semibold">Team Size</th>
                <th className="text-left p-3 font-semibold">Jobber (Year 1)</th>
                <th className="text-left p-3 font-semibold">ServiceTitan (Year 1)</th>
                <th className="text-left p-3 font-semibold">Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 font-medium text-gray-800">Solo (1 person)</td>
                <td className="p-3 text-gray-700">~$348 (Core)</td>
                <td className="p-3 text-gray-700">~$8,000+ (1 tech min + setup)</td>
                <td className="p-3 font-semibold text-brand-orange">23x more</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium text-gray-800">3 techs</td>
                <td className="p-3 text-gray-700">~$1,800 (Connect, 3 users)</td>
                <td className="p-3 text-gray-700">~$13,500 + ~$5K setup = ~$18,500</td>
                <td className="p-3 font-semibold text-brand-orange">10x more</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-medium text-gray-800">5 techs</td>
                <td className="p-3 text-gray-700">~$3,600 (Grow, 5 users)</td>
                <td className="p-3 text-gray-700">~$22,500 + ~$8K setup = ~$30,500</td>
                <td className="p-3 font-semibold text-brand-orange">8x more</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium text-gray-800">10 techs</td>
                <td className="p-3 text-gray-700">~$7,200 (Grow, 10 users)</td>
                <td className="p-3 text-gray-700">~$45,000 + ~$15K setup = ~$60,000</td>
                <td className="p-3 font-semibold text-brand-orange">8x more</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-medium text-gray-800">20 techs</td>
                <td className="p-3 text-gray-700">~$14,400 (custom)</td>
                <td className="p-3 text-gray-700">~$90,000 + ~$25K setup = ~$115,000</td>
                <td className="p-3 font-semibold text-brand-orange">8x more</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Numbers are 2026 estimates. ServiceTitan does not publish pricing &mdash; figures from contractor reports
          and reseller materials. Actual quotes vary by trade, region, and contract length.
        </p>
        <div className="bg-brand-gray rounded-lg p-4 mt-4 text-sm">
          <p className="font-semibold text-brand-blue mb-1">When the 8-23x premium is worth it:</p>
          <p className="text-gray-700">
            ServiceTitan can pay for itself when (a) flat-rate pricebook selling lifts your average ticket by
            $50-$200, (b) call tracking shows you which marketing channels actually work, and (c) you have
            enough call volume that dispatch optimization saves real drive time. None of these matter much under
            $1M revenue. All three matter a lot above $1.5M.
          </p>
        </div>
      </section>

      {/* Detailed analysis */}
      <section className="mb-10 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Detailed Analysis</h2>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">The Real Question</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Comparing Jobber to ServiceTitan is like comparing a reliable pickup truck to a semi. Both
          haul things — but they serve completely different purposes. The honest answer is that most
          contractors searching this comparison should choose Jobber. ServiceTitan only makes financial
          sense at a certain scale, and if you are at that scale, you probably already know it.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Quoting and Sales</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Jobber has the best quoting system of any field service tool. Automated follow-ups, optional
          line items, and a client hub where customers approve and pay online. ServiceTitan approaches
          sales differently — its pricebook lets techs present good/better/best options on-site, which
          is more effective for residential service calls but requires months of setup and pricebook
          customization.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Growing Into ServiceTitan</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many successful contractors start with Jobber and switch to ServiceTitan when they cross
          the 10-tech, $1M revenue threshold. This is a smart path. Jobber teaches you good habits
          (consistent quoting, organized scheduling, timely invoicing) without overwhelming you. When
          you are ready for pricebook-driven selling, marketing analytics, and enterprise reporting,
          ServiceTitan will be there.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">What About the Middle?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have 5-10 techs and feel like Jobber is too simple but ServiceTitan is too much, look
          at Housecall Pro or FieldPulse. Both offer more dispatching power and features than Jobber
          at a fraction of ServiceTitan&apos;s price. Check our{" "}
          <Link href="/compare/jobber-vs-housecall-pro/" className="text-brand-orange underline hover:text-brand-blue">
            Jobber vs Housecall Pro comparison
          </Link>{" "}
          for that decision.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-4">
          Choose Jobber if you are a small to mid-size contractor who wants a clean, affordable tool
          that handles the fundamentals well. Choose ServiceTitan if you run a large operation where
          pricebook-driven selling, marketing analytics, and enterprise reporting will generate enough
          additional revenue to justify the 5-10x higher cost. When in doubt, start with Jobber &mdash; it is
          easy to switch later, and most successful contractors do.
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

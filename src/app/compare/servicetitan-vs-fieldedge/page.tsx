import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "ServiceTitan vs FieldEdge (2026) — Honest Comparison",
  description:
    "Detailed comparison of ServiceTitan vs FieldEdge for HVAC, plumbing, and electrical contractors. Pricing, pricebook, dispatching, marketing ROI, QuickBooks integration, and more.",
};

const features = [
  { feature: "Starting Price", servicetitan: "$398+/mo minimum", fieldedge: "~$100+/user/mo" },
  { feature: "Pricing Model", servicetitan: "Tiered packages + per-tech fees", fieldedge: "Per user" },
  { feature: "Pricebook", servicetitan: "Yes — powerful, integrated pricebook", fieldedge: "Yes — built-in flat-rate pricebook" },
  { feature: "Dispatching", servicetitan: "Advanced — capacity planning, zones", fieldedge: "Excellent — purpose-built dispatch board" },
  { feature: "Scheduling", servicetitan: "Smart scheduling with arrival windows", fieldedge: "Dispatch board with drag-and-drop" },
  { feature: "Invoicing", servicetitan: "Yes — from pricebook, multi-option proposals", fieldedge: "Yes — from pricebook" },
  { feature: "Payment Processing", servicetitan: "Yes — integrated financing options", fieldedge: "Yes" },
  { feature: "QuickBooks Integration", servicetitan: "QuickBooks Online only", fieldedge: "QuickBooks Online + strong Desktop integration" },
  { feature: "Mobile App", servicetitan: "iOS + Android (full-featured, tablet-optimized)", fieldedge: "iOS + Android" },
  { feature: "Reporting", servicetitan: "Enterprise-grade — deep KPI dashboards", fieldedge: "Good — tech performance focus" },
  { feature: "Marketing ROI Tracking", servicetitan: "Yes — call tracking, campaign attribution", fieldedge: "Limited" },
  { feature: "Customer Portal", servicetitan: "Yes — online booking", fieldedge: "No" },
  { feature: "Fleet Tracking", servicetitan: "Yes — GPS fleet tracking add-on", fieldedge: "Limited" },
  { feature: "Phone Integration", servicetitan: "Yes — built-in call booking, screen pops", fieldedge: "Yes — caller ID integration" },
  { feature: "Memberships / Service Agreements", servicetitan: "Yes — robust membership management", fieldedge: "Yes — service agreements" },
  { feature: "Owned By", servicetitan: "Independent (PE-backed)", fieldedge: "Xplor Technologies" },
];

export default function ServiceTitanVsFieldEdge() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/servicetitan-vs-fieldedge/" className="text-gray-700">ServiceTitan vs FieldEdge</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          ServiceTitan vs FieldEdge (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Enterprise-grade power vs mid-market simplicity — two strong platforms for HVAC, plumbing,
          and electrical contractors with very different price points.
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
              <li>- You have 5+ techs and are growing fast</li>
              <li>- Marketing ROI tracking and call booking matter</li>
              <li>- You want enterprise-grade reporting and KPI dashboards</li>
              <li>- You need built-in financing and multi-option proposals</li>
              <li>- You can invest $398+/mo as a starting cost</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-orange mb-2">Choose FieldEdge if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- You&apos;re a mid-size shop wanting simpler pricebook management</li>
              <li>- QuickBooks Desktop integration is critical</li>
              <li>- You want solid dispatching without enterprise complexity</li>
              <li>- Your team prefers a shorter learning curve</li>
              <li>- You want per-user pricing without large minimums</li>
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
                <th className="text-left p-3 font-semibold">FieldEdge</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-3 text-gray-700">{row.servicetitan}</td>
                  <td className="p-3 text-gray-700">{row.fieldedge}</td>
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
              <li className="flex justify-between"><span>Starter package</span><span className="font-semibold">$398+/mo</span></li>
              <li className="flex justify-between"><span>Essentials package</span><span className="font-semibold">Custom quote</span></li>
              <li className="flex justify-between"><span>The Works package</span><span className="font-semibold">Custom quote</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Pricing requires a demo call. Expect $200-$300+/tech/mo for most shops. Onboarding fees can be $2,000-$5,000+.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-brand-orange text-lg mb-3">FieldEdge Pricing</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Per user/month</span><span className="font-semibold">~$100+</span></li>
              <li className="flex justify-between"><span>Setup fee</span><span className="font-semibold">Varies</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Pricing is not publicly listed. Requires a sales call for a custom quote. Expect $100+/user/mo for most shops.</p>
          </div>
        </div>
      </section>

      {/* Detailed analysis */}
      <section className="mb-10 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Detailed Analysis</h2>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Pricebook and Proposals</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Both platforms include built-in flat-rate pricebooks, which is a must-have for HVAC and
          plumbing shops. ServiceTitan takes it further with multi-option proposals — techs can present
          good/better/best options directly on a tablet, which tends to increase average ticket size.
          FieldEdge&apos;s pricebook is simpler to manage and quicker to set up, making it a better fit
          for shops that just want straightforward flat-rate pricing without the complexity.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Dispatching and Scheduling</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ServiceTitan offers advanced capacity planning, zone-based dispatching, and arrival window
          management built for large operations running dozens of calls per day. FieldEdge&apos;s dispatch
          board is purpose-built and effective for mid-size shops — it gives dispatchers clear visibility
          without the overhead of configuring zones and capacity rules. If you have fewer than 10 techs,
          FieldEdge&apos;s dispatching will likely feel more manageable.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Marketing ROI and Call Tracking</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is ServiceTitan&apos;s standout advantage. Built-in call tracking ties every phone call
          back to the marketing campaign that generated it — you can see exactly which ads are driving
          booked jobs and revenue. FieldEdge has limited marketing features. If you spend significant
          money on marketing (Google Ads, LSA, direct mail), ServiceTitan&apos;s attribution data can
          pay for itself by helping you cut underperforming campaigns and double down on winners.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">QuickBooks Integration</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          FieldEdge has a clear edge here, especially for shops on QuickBooks Desktop. Its Desktop
          integration has been a core feature for years and is deeply reliable. ServiceTitan only
          integrates with QuickBooks Online. If your accountant requires QuickBooks Desktop and
          switching is not an option, this could be a dealbreaker for ServiceTitan.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Reporting and Analytics</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ServiceTitan&apos;s reporting is enterprise-grade — revenue dashboards, technician scoreboards,
          marketing ROI reports, and customizable KPIs. It gives owners and managers deep visibility into
          every aspect of the business. FieldEdge&apos;s reporting focuses on technician performance and
          job profitability, which covers the essentials but lacks the breadth and depth of
          ServiceTitan&apos;s analytics suite.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-4">
          ServiceTitan is built for larger shops (5+ techs) that want enterprise-grade marketing ROI
          tracking, call booking, advanced dispatching, and deep reporting. It&apos;s a significant
          investment — both in cost and implementation time — but the data and automation can drive
          real revenue growth for shops ready to use it.
        </p>
        <p className="text-white/90 leading-relaxed">
          FieldEdge is the better fit for mid-size HVAC, plumbing, and electrical shops that want
          solid pricebook management, reliable QuickBooks Desktop integration, and effective
          dispatching without the enterprise complexity or price tag. It does the core job well
          at a lower cost and with a shorter learning curve.
        </p>
      </section>

      {/* Related pages */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-brand-blue mb-3">Related Comparisons</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/best/hvac-software/" className="text-sm bg-brand-gray text-brand-blue px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Best HVAC Software
          </Link>
          <Link href="/best/plumbing-software/" className="text-sm bg-brand-gray text-brand-blue px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Best Plumbing Software
          </Link>
          <Link href="/compare/jobber-vs-fieldedge/" className="text-sm bg-brand-gray text-brand-blue px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Jobber vs FieldEdge
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

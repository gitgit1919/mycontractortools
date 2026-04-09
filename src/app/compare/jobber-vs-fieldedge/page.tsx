import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Jobber vs FieldEdge (2026) — Honest Comparison",
  description:
    "Detailed comparison of Jobber vs FieldEdge for HVAC, plumbing, and electrical contractors. Pricing, pricebook features, QuickBooks integration, and more.",
};

const features = [
  { feature: "Starting Price", jobber: "$29/mo", fieldedge: "~$100+/user/mo" },
  { feature: "Pricing Model", jobber: "Per-plan (not per user)", fieldedge: "Per user" },
  { feature: "Free Trial", jobber: "14 days", fieldedge: "Demo only" },
  { feature: "Scheduling", jobber: "Drag-and-drop calendar", fieldedge: "Dispatch board" },
  { feature: "Dispatching", jobber: "Good", fieldedge: "Excellent — purpose-built" },
  { feature: "Flat-Rate Pricebook", jobber: "No", fieldedge: "Yes — built-in" },
  { feature: "Invoicing", jobber: "Yes — professional templates", fieldedge: "Yes — from pricebook" },
  { feature: "Payment Processing", jobber: "Yes (2.9% + 30c)", fieldedge: "Yes" },
  { feature: "QuickBooks Online", jobber: "Two-way sync", fieldedge: "Two-way sync" },
  { feature: "QuickBooks Desktop", jobber: "Limited", fieldedge: "Strong native integration" },
  { feature: "Mobile App", jobber: "iOS + Android (full-featured)", fieldedge: "iOS + Android" },
  { feature: "Reporting", jobber: "Good — customizable", fieldedge: "Good — tech performance focus" },
  { feature: "Customer Portal", jobber: "Client Hub", fieldedge: "No" },
  { feature: "Marketing Tools", jobber: "Basic", fieldedge: "Limited" },
  { feature: "Owned By", jobber: "Independent", fieldedge: "Xplor Technologies" },
];

export default function JobberVsFieldEdge() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/jobber-vs-fieldedge/" className="text-gray-700">Jobber vs FieldEdge</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Jobber vs FieldEdge (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Two very different tools for field service contractors — one built for simplicity and
          breadth, the other for HVAC, plumbing, and electrical depth.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Quick verdict */}
      <div className="bg-brand-gray rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-3">Quick Verdict</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-blue mb-2">Choose Jobber if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- You&apos;re a small to mid-size service contractor</li>
              <li>- Budget matters — you need affordable software</li>
              <li>- You want a clean, easy-to-learn interface</li>
              <li>- You serve multiple trades (not just HVAC/plumbing)</li>
              <li>- You want a customer self-service portal</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-orange mb-2">Choose FieldEdge if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- You run an established HVAC, plumbing, or electrical shop</li>
              <li>- You need a built-in flat-rate pricebook</li>
              <li>- QuickBooks Desktop integration is critical</li>
              <li>- You want detailed technician performance tracking</li>
              <li>- You have the budget for per-user pricing</li>
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
                <th className="text-left p-3 font-semibold">Jobber</th>
                <th className="text-left p-3 font-semibold">FieldEdge</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-3 text-gray-700">{row.jobber}</td>
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
            <h3 className="font-bold text-brand-blue text-lg mb-3">Jobber Plans</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Core (1 user)</span><span className="font-semibold">$29/mo</span></li>
              <li className="flex justify-between"><span>Connect (1 user)</span><span className="font-semibold">$99/mo</span></li>
              <li className="flex justify-between"><span>Grow (1 user)</span><span className="font-semibold">$149/mo</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Annual billing. Additional users available on Connect and Grow.</p>
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

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Scheduling and Dispatching</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Jobber uses a clean drag-and-drop calendar that works well for most service businesses.
          FieldEdge takes dispatching more seriously with a purpose-built dispatch board designed for
          shops that manage multiple techs across many daily calls. If you run a busy HVAC or plumbing
          operation with 10+ techs, FieldEdge&apos;s dispatch view gives dispatchers more control and
          visibility than Jobber&apos;s calendar.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Pricebook and Invoicing</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is FieldEdge&apos;s biggest differentiator. Its built-in flat-rate pricebook lets techs
          present professional, pre-calculated pricing to homeowners on the spot — no more guessing or
          calling the office for a price. Jobber does not have a flat-rate pricebook. If your business
          runs on flat-rate pricing (common in HVAC and plumbing), this alone could justify
          FieldEdge&apos;s higher cost.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">QuickBooks Integration</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Both tools sync with QuickBooks Online, but FieldEdge has a clear advantage for shops still
          on QuickBooks Desktop. FieldEdge&apos;s Desktop integration is native and deep — it&apos;s been a
          core feature for years. Jobber&apos;s Desktop support is more limited. If your accountant insists
          on QuickBooks Desktop and switching to Online is not an option, FieldEdge handles this much
          better.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Mobile App and Ease of Use</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Jobber&apos;s mobile app is widely praised for being intuitive and easy to learn. New techs can
          typically get comfortable within a day. FieldEdge&apos;s app is more powerful in some areas
          (pricebook access, for example) but has a steeper learning curve. For shops where tech
          adoption is a concern, Jobber&apos;s simplicity is a real advantage.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed">
          Jobber is the better choice for most small to mid-size service contractors who want
          affordable, easy-to-use software that covers the basics well. FieldEdge is worth the
          premium if you run an established HVAC, plumbing, or electrical shop and need a flat-rate
          pricebook, strong QuickBooks Desktop integration, and detailed technician performance
          metrics. The price difference is significant — make sure FieldEdge&apos;s specialized features
          justify the cost for your specific operation.
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

import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Buildertrend vs CoConstruct (2026) — Honest Comparison",
  description:
    "Detailed comparison of Buildertrend vs CoConstruct for general contractors. Pricing, features, and what the CoConstruct acquisition means for your business.",
};

const features = [
  { feature: "Starting Price", buildertrend: "$99/mo", coconstruct: "N/A (being sunset)" },
  { feature: "Top-Tier Price", buildertrend: "$699/mo", coconstruct: "N/A" },
  { feature: "Free Trial", buildertrend: "Yes", coconstruct: "No longer available" },
  { feature: "Project Management", buildertrend: "Full suite", coconstruct: "Strong (legacy)" },
  { feature: "Client Portal", buildertrend: "Yes — robust", coconstruct: "Yes — well-regarded" },
  { feature: "Estimating", buildertrend: "Built-in", coconstruct: "Built-in" },
  { feature: "Selections Management", buildertrend: "Yes", coconstruct: "Yes — a standout feature" },
  { feature: "Change Orders", buildertrend: "Yes", coconstruct: "Yes" },
  { feature: "Scheduling", buildertrend: "Gantt + calendar", coconstruct: "Calendar-based" },
  { feature: "Financial Tools", buildertrend: "Budgeting, POs, invoicing", coconstruct: "Budgeting, invoicing" },
  { feature: "Mobile App", buildertrend: "iOS + Android", coconstruct: "iOS + Android (limited updates)" },
  { feature: "Integrations", buildertrend: "QuickBooks, Xero, 50+", coconstruct: "QuickBooks, Xero" },
  { feature: "Active Development", buildertrend: "Yes — regular updates", coconstruct: "No — being merged" },
  { feature: "New Sign-Ups", buildertrend: "Open", coconstruct: "Closed to new customers" },
];

export default function BuildertrendVsCoconstruct() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/buildertrend-vs-coconstruct/" className="text-gray-700">Buildertrend vs CoConstruct</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Buildertrend vs CoConstruct (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          A head-to-head comparison for general contractors — and what the CoConstruct acquisition
          means for your software decision.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Important notice */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold text-red-800 mb-2">Important: CoConstruct Is Being Sunset</h2>
        <p className="text-sm text-red-700 leading-relaxed">
          Buildertrend acquired CoConstruct in 2021, and CoConstruct is being merged into the
          Buildertrend platform. CoConstruct is no longer accepting new customers, and existing
          users are being migrated to Buildertrend. If you&apos;re choosing software today, CoConstruct
          is not a viable option — this comparison exists to help current CoConstruct users understand
          what they&apos;re moving to.
        </p>
      </div>

      {/* Quick verdict */}
      <div className="bg-brand-gray rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-3">Quick Verdict</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-blue mb-2">Choose Buildertrend if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- You&apos;re a residential GC or remodeler</li>
              <li>- You need an all-in-one project management platform</li>
              <li>- You want active development and regular feature updates</li>
              <li>- You need a strong client portal and selections tool</li>
              <li>- You&apos;re currently on CoConstruct and need to migrate</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-orange mb-2">Consider Procore instead if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- You focus on commercial construction</li>
              <li>- You manage large crews and subcontractors</li>
              <li>- You need enterprise-grade compliance tools</li>
              <li>- Budget is less of a concern than feature depth</li>
              <li>- You need advanced RFI and submittal workflows</li>
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
                <th className="text-left p-3 font-semibold">Buildertrend</th>
                <th className="text-left p-3 font-semibold">CoConstruct</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-3 text-gray-700">{row.buildertrend}</td>
                  <td className="p-3 text-gray-700">{row.coconstruct}</td>
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
            <h3 className="font-bold text-brand-blue text-lg mb-3">Buildertrend Plans</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Essential</span><span className="font-semibold">$99/mo</span></li>
              <li className="flex justify-between"><span>Advanced</span><span className="font-semibold">$399/mo</span></li>
              <li className="flex justify-between"><span>Complete</span><span className="font-semibold">$699/mo</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Annual billing. Unlimited users on all plans.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-400 text-lg mb-3">CoConstruct (Legacy)</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>No longer accepting new customers</li>
              <li>Existing users being migrated to Buildertrend</li>
              <li>Legacy pricing is no longer relevant</li>
            </ul>
            <p className="text-xs text-gray-400 mt-2">Contact Buildertrend for migration details.</p>
          </div>
        </div>
      </section>

      {/* Detailed analysis */}
      <section className="mb-10 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Detailed Analysis</h2>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Project Management</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Buildertrend offers a comprehensive project management suite with daily logs, to-do lists,
          document storage, and Gantt-style scheduling. CoConstruct had a strong project management
          system of its own, particularly praised for its tight integration between specs, selections,
          and budgeting. Buildertrend has been incorporating CoConstruct&apos;s best features into its
          platform as part of the merger.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Client Portal and Selections</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Both platforms were known for excellent client portals. CoConstruct&apos;s selections management
          was considered best-in-class — letting homeowners browse and choose finishes, fixtures, and
          materials with pricing updated in real time. Buildertrend has invested heavily in matching
          this functionality and now offers a comparable selections experience within its own portal.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Estimating and Financial Tools</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Buildertrend includes estimating, budgeting, purchase orders, change orders, and invoicing
          all in one platform. The financial tools connect directly to QuickBooks and Xero for
          accounting sync. CoConstruct had similar capabilities with a particularly clean estimating
          workflow, but since it&apos;s no longer being developed, Buildertrend is the clear choice for
          anyone who needs reliable, supported financial tools.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">What CoConstruct Users Should Know</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you&apos;re currently on CoConstruct, your migration to Buildertrend is inevitable. The good
          news is that Buildertrend has been working to preserve the features CoConstruct users loved
          most — especially selections and the client experience. The transition can be disruptive, so
          plan for a few weeks of adjustment. Reach out to Buildertrend&apos;s migration team early to
          ensure your data transfers cleanly.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed">
          This comparison is essentially settled: Buildertrend wins by default because CoConstruct is
          being absorbed into it. For residential general contractors and remodelers, Buildertrend is
          the strongest all-in-one platform on the market. If you do commercial work or need
          enterprise-level features, look at Procore instead. Current CoConstruct users should start
          planning their migration sooner rather than later.
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

import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { getTrialUrl } from "@/lib/trialUrls";

export const metadata: Metadata = {
  title: "Jobber vs JobNimbus (2026) — Honest Comparison",
  description:
    "Detailed comparison of Jobber vs JobNimbus for contractors. Jobber for general field service vs JobNimbus for roofing — pricing, features, and which is right for you.",
};

const features = [
  { feature: "Starting Price", jobber: "$29/mo", jobnimbus: "$25/user/mo" },
  { feature: "Pricing Model", jobber: "Per-plan", jobnimbus: "Per user ($25-$65)" },
  { feature: "Free Trial", jobber: "14 days", jobnimbus: "14 days" },
  { feature: "Best For", jobber: "General field service", jobnimbus: "Roofing contractors" },
  { feature: "Scheduling", jobber: "Drag-and-drop calendar", jobnimbus: "Calendar + boards" },
  { feature: "Estimating", jobber: "Professional quotes", jobnimbus: "Estimates + supplements" },
  { feature: "Work Orders", jobber: "Yes", jobnimbus: "Yes — job boards" },
  { feature: "Invoicing", jobber: "Yes — automated", jobnimbus: "Yes" },
  { feature: "Aerial Measurements", jobber: "No", jobnimbus: "Yes — EagleView, GAF QuickMeasure" },
  { feature: "Insurance Claims", jobber: "No", jobnimbus: "Yes — built-in workflow" },
  { feature: "Lead Tracking", jobber: "Basic CRM", jobnimbus: "Full CRM + pipeline boards" },
  { feature: "Mobile App", jobber: "iOS + Android (full-featured)", jobnimbus: "iOS + Android" },
  { feature: "Integrations", jobber: "QuickBooks, Stripe, 50+", jobnimbus: "QuickBooks, CompanyCam, SRS" },
  { feature: "Customer Portal", jobber: "Client Hub", jobnimbus: "Limited" },
  { feature: "Reporting", jobber: "Good — customizable", jobnimbus: "Good — sales pipeline focus" },
];

export default function JobberVsJobNimbus() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/jobber-vs-jobnimbus/" className="text-gray-700">Jobber vs JobNimbus</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Jobber vs JobNimbus (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          A general-purpose field service tool vs a roofing-focused powerhouse — which one fits
          your contracting business?
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
              <li>- You run a general service contracting business</li>
              <li>- You want a clean, intuitive interface</li>
              <li>- Quoting and customer self-service are priorities</li>
              <li>- You serve multiple trades (HVAC, landscaping, cleaning, etc.)</li>
              <li>- You want strong scheduling and dispatching</li>
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
            <h3 className="font-bold text-brand-orange mb-2">Choose JobNimbus if:</h3>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>- You&apos;re a roofing contractor</li>
              <li>- You need aerial measurement integrations</li>
              <li>- You handle insurance claims and supplements</li>
              <li>- You want a CRM with visual sales pipeline boards</li>
              <li>- Lead tracking and sales management are critical</li>
            </ul>
            <a
              href={getTrialUrl("JobNimbus")!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Start JobNimbus free trial &rarr;
            </a>
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
                <th className="text-left p-3 font-semibold">JobNimbus</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-3 text-gray-700">{row.jobber}</td>
                  <td className="p-3 text-gray-700">{row.jobnimbus}</td>
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
            <p className="text-xs text-gray-500 mt-2">Annual billing. Additional users on Connect and Grow plans.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-brand-orange text-lg mb-3">JobNimbus Plans</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Growing</span><span className="font-semibold">$25/user/mo</span></li>
              <li className="flex justify-between"><span>Established</span><span className="font-semibold">$45/user/mo</span></li>
              <li className="flex justify-between"><span>Advanced</span><span className="font-semibold">$65/user/mo</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Annual billing. Per-user pricing — costs scale with team size.</p>
          </div>
        </div>
      </section>

      {/* Detailed analysis */}
      <section className="mb-10 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Detailed Analysis</h2>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Roofing-Specific Features</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is where JobNimbus pulls away. It integrates directly with aerial measurement tools
          like EagleView and GAF QuickMeasure, so you can order roof measurements and pull them into
          estimates without leaving the app. It also has built-in insurance claim tracking and
          supplement workflows — essential for storm restoration roofers. Jobber has none of these
          features because it&apos;s designed for general field service, not roofing specifically.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">CRM and Lead Management</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          JobNimbus was built as a CRM first and added job management later, which means its lead
          tracking and sales pipeline tools are more mature. The Kanban-style boards let you visualize
          where every lead and job sits in your process. Jobber has basic CRM functionality — it
          tracks customers and jobs — but it&apos;s not designed for the kind of sales pipeline management
          that roofing companies need when juggling dozens of insurance claims.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Scheduling and Job Management</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Jobber has the edge here with a more polished scheduling and dispatching experience. Its
          calendar is clean and intuitive, and the automated quote follow-ups and customer
          communication tools are best-in-class. JobNimbus handles scheduling adequately, but it&apos;s
          not the platform&apos;s primary strength — the boards and pipeline view take center stage instead.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Pricing Considerations</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The pricing models are very different. Jobber charges per plan (starting at $29/mo for one
          user), while JobNimbus charges per user ($25-$65/user/mo). For a solo operator, JobNimbus
          can be cheaper. But for a crew of 10, JobNimbus at $45/user would be $450/mo versus
          Jobber&apos;s $149/mo Grow plan. Run the math for your specific team size before deciding.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-4">
          If you&apos;re a roofing contractor, JobNimbus is the better tool — aerial measurements,
          insurance claim workflows, and the sales pipeline boards are built for how roofers actually
          work. For every other trade (HVAC, landscaping, cleaning, electrical, plumbing), Jobber is
          the stronger choice with better scheduling, a cleaner interface, and more predictable
          pricing. Both offer free trials, so test the one that matches your trade.
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
            href={getTrialUrl("JobNimbus")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-blue font-medium px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
          >
            Start JobNimbus free trial
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

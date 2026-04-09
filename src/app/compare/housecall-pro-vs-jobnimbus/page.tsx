import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Housecall Pro vs JobNimbus (2026) — Honest Comparison",
  description:
    "Detailed comparison of Housecall Pro vs JobNimbus for contractors. One built for general field service, the other purpose-built for roofers. Pricing, features, and honest recommendations.",
};

const features = [
  { feature: "Starting Price", hcp: "$49/mo", jobnimbus: "$149/mo per user" },
  { feature: "Target Trade", hcp: "General field service (HVAC, plumbing, electrical, cleaning, etc.)", jobnimbus: "Roofing (primary), exteriors" },
  { feature: "Scheduling", hcp: "Drag-and-drop calendar, online booking", jobnimbus: "Job board with production calendar" },
  { feature: "Estimating", hcp: "Professional estimates with e-signature", jobnimbus: "Roofing-specific estimates with material calcs" },
  { feature: "Invoicing", hcp: "Yes — automated, professional templates", jobnimbus: "Yes — tied to job workflow" },
  { feature: "Payment Processing", hcp: "Yes — instapay, financing options", jobnimbus: "Yes — integrated payments" },
  { feature: "Aerial Measurements", hcp: "No", jobnimbus: "Yes — EagleView / GAF QuickMeasure integration" },
  { feature: "Insurance Claims Workflow", hcp: "No", jobnimbus: "Yes — built-in Xactimate integration, supplement tracking" },
  { feature: "Lead Management", hcp: "Basic CRM, lead tracking", jobnimbus: "Full sales pipeline with customizable boards" },
  { feature: "Marketing Automation", hcp: "Yes — automated postcards, email campaigns, review requests", jobnimbus: "Limited" },
  { feature: "Customer Portal", hcp: "Yes — online booking, approvals", jobnimbus: "Yes — job status portal" },
  { feature: "Mobile App", hcp: "iOS + Android (full-featured)", jobnimbus: "iOS + Android (photo-heavy workflow)" },
  { feature: "Integrations", hcp: "QuickBooks, Mailchimp, Google, Zapier, 20+", jobnimbus: "QuickBooks, EagleView, CompanyCam, SalesRabbit, Zapier" },
  { feature: "Photo Documentation", hcp: "Basic job photos", jobnimbus: "Robust — before/after, damage documentation, organized by job" },
  { feature: "Reporting", hcp: "Good — revenue, tech performance", jobnimbus: "Sales pipeline, job profitability, team performance" },
];

export default function HousecallProVsJobNimbus() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/housecall-pro-vs-jobnimbus/" className="text-gray-700">Housecall Pro vs JobNimbus</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Housecall Pro vs JobNimbus (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          A general field service platform vs a roofing-focused powerhouse — which one fits
          your contracting business?
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Quick verdict */}
      <div className="bg-brand-gray rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-3">Quick Verdict</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-blue mb-2">Choose Housecall Pro if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- You run any trade other than roofing</li>
              <li>- You want affordable software starting at $49/mo</li>
              <li>- Automated marketing (postcards, reviews) matters to you</li>
              <li>- You need online booking and a customer portal</li>
              <li>- You want a clean, easy-to-learn interface</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-orange mb-2">Choose JobNimbus if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- You&apos;re a roofing contractor</li>
              <li>- You need aerial measurement integrations</li>
              <li>- Insurance claims and Xactimate are part of your workflow</li>
              <li>- You want a visual sales pipeline for leads</li>
              <li>- Photo documentation is critical to your process</li>
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
                <th className="text-left p-3 font-semibold">Housecall Pro</th>
                <th className="text-left p-3 font-semibold">JobNimbus</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-3 text-gray-700">{row.hcp}</td>
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
            <h3 className="font-bold text-brand-blue text-lg mb-3">Housecall Pro Plans</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Basic (1 user)</span><span className="font-semibold">$49/mo</span></li>
              <li className="flex justify-between"><span>Essentials (1-5 users)</span><span className="font-semibold">$129/mo</span></li>
              <li className="flex justify-between"><span>MAX</span><span className="font-semibold">Custom pricing</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Annual billing. 14-day free trial available on all plans.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-brand-orange text-lg mb-3">JobNimbus Pricing</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Per user/month</span><span className="font-semibold">$149+</span></li>
              <li className="flex justify-between"><span>Growing plan</span><span className="font-semibold">Custom quote</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Pricing has increased in recent years. Requires a demo for exact quote. 14-day free trial available.</p>
          </div>
        </div>
      </section>

      {/* Detailed analysis */}
      <section className="mb-10 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Detailed Analysis</h2>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Target Market and Trade Focus</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the fundamental difference between these two platforms. Housecall Pro is designed for
          general field service businesses — HVAC, plumbing, electrical, cleaning, landscaping, and
          more. JobNimbus is purpose-built for roofing contractors and exterior trades. If you&apos;re a
          roofer, JobNimbus speaks your language with features like aerial measurements, insurance
          claims, and supplement tracking baked in. If you&apos;re any other trade, Housecall Pro
          will be a much better fit.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Aerial Measurements and Insurance Claims</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          JobNimbus integrates directly with EagleView and GAF QuickMeasure, letting roofers pull
          satellite-based roof measurements straight into estimates. It also has built-in insurance
          claims workflow with Xactimate integration and supplement tracking — essential for storm
          restoration contractors. Housecall Pro has none of these roofing-specific features. For
          roofers, these integrations alone justify JobNimbus&apos;s higher price.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Marketing and Customer Acquisition</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Housecall Pro has a clear edge in marketing automation. It offers automated postcard
          campaigns, email marketing, review request automation, and online booking — all built in.
          These tools help service businesses consistently generate reviews and stay top of mind with
          past customers. JobNimbus focuses more on sales pipeline management — great for tracking
          leads through your sales process, but lacking in automated marketing outreach.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Sales Pipeline and Lead Management</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          JobNimbus&apos;s visual sales pipeline is one of its strongest features. Customizable board
          views let you track every lead from initial contact through signed contract and completed
          job. This is especially valuable for roofing companies running door-to-door sales teams or
          managing high volumes of storm leads. Housecall Pro has basic CRM functionality but nothing
          as robust as JobNimbus&apos;s pipeline boards.
        </p>

        <h3 className="text-xl font-semibold text-brand-blue mt-6 mb-2">Photo Documentation</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Roofing contractors live and die by photo documentation — before/after shots, damage photos
          for insurance, progress photos for homeowners. JobNimbus handles this well with organized
          photo galleries tied to each job. Housecall Pro supports basic job photos but doesn&apos;t
          have the same depth of photo organization that roofers need for insurance documentation.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-4">
          If you&apos;re a roofer, choose JobNimbus. Its aerial measurement integrations, insurance
          claims workflow, visual sales pipeline, and photo documentation are purpose-built for how
          roofing companies actually work. No other general-purpose tool matches these capabilities.
        </p>
        <p className="text-white/90 leading-relaxed">
          If you&apos;re any other trade — HVAC, plumbing, electrical, cleaning, landscaping —
          choose Housecall Pro. It&apos;s more affordable, easier to learn, and its marketing
          automation tools (postcards, review requests, online booking) help you grow your business
          in ways that JobNimbus simply doesn&apos;t focus on.
        </p>
      </section>

      {/* Related pages */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-brand-blue mb-3">Related Comparisons</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/best/roofing-software/" className="text-sm bg-brand-gray text-brand-blue px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Best Roofing Software
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

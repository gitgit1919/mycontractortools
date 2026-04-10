import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import TrialCtaGrid from "@/components/TrialCtaGrid";

export const metadata: Metadata = {
  title: "Best Housecall Pro Alternatives (2026) — 6 Competitors Compared",
  description:
    "Compare the best Housecall Pro alternatives for contractors. Jobber, ServiceTitan, FieldEdge, Workiz, Kickserv, and mHelpDesk — pricing, features, and honest recommendations.",
};

const alternatives = [
  {
    name: "Jobber",
    price: "$29-$149/mo",
    bestFor: "Best overall alternative",
    scheduling: "Drag-and-drop",
    dispatching: "Good",
    estimating: "Yes",
    pricebook: "No",
    payments: "Yes (2.9% + 30c)",
    callTracking: "No",
  },
  {
    name: "ServiceTitan",
    price: "$398+/mo",
    bestFor: "Best for large shops",
    scheduling: "Advanced",
    dispatching: "Excellent",
    estimating: "Yes",
    pricebook: "Yes",
    payments: "Yes",
    callTracking: "Yes",
  },
  {
    name: "FieldEdge",
    price: "~$100+/user/mo",
    bestFor: "Best for pricebook-driven shops",
    scheduling: "Dispatch board",
    dispatching: "Excellent",
    estimating: "Yes",
    pricebook: "Yes — built-in",
    payments: "Yes",
    callTracking: "No",
  },
  {
    name: "Workiz",
    price: "$49+/mo",
    bestFor: "Best for call tracking",
    scheduling: "Yes",
    dispatching: "Good",
    estimating: "Yes",
    pricebook: "No",
    payments: "Yes",
    callTracking: "Yes — built-in",
  },
  {
    name: "Kickserv",
    price: "$47+/mo",
    bestFor: "Best budget alternative",
    scheduling: "Yes",
    dispatching: "Basic",
    estimating: "Yes",
    pricebook: "No",
    payments: "Yes",
    callTracking: "No",
  },
  {
    name: "mHelpDesk",
    price: "$169+/mo",
    bestFor: "Best for custom workflows",
    scheduling: "Yes",
    dispatching: "Good",
    estimating: "Yes",
    pricebook: "No",
    payments: "Yes",
    callTracking: "No",
  },
];

export default function HousecallProAlternatives() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/housecall-pro-alternatives/" className="text-gray-700">
            Housecall Pro Alternatives
          </Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Best Housecall Pro Alternatives (2026) — 6 Competitors Compared
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Housecall Pro is solid software, but it&apos;s not the right fit for every contractor.
          Whether pricing has gotten too steep, you need trade-specific features, or you want better
          estimating tools — here are 6 alternatives worth considering.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Why contractors look for alternatives */}
      <section className="bg-brand-gray rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-3">
          Why Contractors Switch from Housecall Pro
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-blue mb-2">Common Complaints</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- Pricing has increased significantly over time</li>
              <li>- No built-in flat-rate pricebook</li>
              <li>- Estimating features are basic</li>
              <li>- Limited trade-specific functionality</li>
              <li>- Feature-gating on lower-tier plans</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-orange mb-2">What People Want Instead</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- Flat-rate pricebook for techs in the field</li>
              <li>- Better estimating with good/better/best options</li>
              <li>- More affordable per-user pricing</li>
              <li>- Trade-specific workflows (HVAC, plumbing, etc.)</li>
              <li>- Stronger reporting and analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-brand-blue text-white">
              <tr>
                <th className="text-left p-3 font-semibold">Software</th>
                <th className="text-left p-3 font-semibold">Price</th>
                <th className="text-left p-3 font-semibold">Best For</th>
                <th className="text-left p-3 font-semibold">Pricebook</th>
                <th className="text-left p-3 font-semibold">Call Tracking</th>
                <th className="text-left p-3 font-semibold">Dispatching</th>
              </tr>
            </thead>
            <tbody>
              {alternatives.map((alt, i) => (
                <tr key={alt.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{alt.name}</td>
                  <td className="p-3 text-gray-700">{alt.price}</td>
                  <td className="p-3 text-gray-700">{alt.bestFor}</td>
                  <td className="p-3 text-gray-700">{alt.pricebook}</td>
                  <td className="p-3 text-gray-700">{alt.callTracking}</td>
                  <td className="p-3 text-gray-700">{alt.dispatching}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed sections for each alternative */}
      <section className="mb-10 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Detailed Breakdown</h2>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            1. Jobber ($29-$149/mo) — Best Overall Alternative
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Simpler interface, lower price, strong core features</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Jobber is the most common switch from Housecall Pro, and for good reason. It covers the
            same core features — scheduling, dispatching, invoicing, quoting, customer communication —
            but with a cleaner interface and more straightforward pricing. Most contractors find
            Jobber easier to learn and use day-to-day.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The main trade-off is that Jobber doesn&apos;t have built-in marketing tools like
            Housecall Pro&apos;s postcard campaigns and review management. If those features drive
            revenue for your business, factor that into your decision. But for pure field service
            management, Jobber holds its own at a lower price point.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            2. ServiceTitan ($398+/mo) — Best for Large Shops
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Enterprise-grade features for growing operations</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            ServiceTitan is what contractors graduate to when they outgrow Housecall Pro. It handles
            everything — pricebook management, call tracking, marketing attribution, advanced
            reporting, membership programs, and multi-location management. If you&apos;re running
            $2M+ in revenue with 10+ techs, ServiceTitan gives you visibility and control that
            Housecall Pro simply can&apos;t match.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The downside is cost and complexity. Starting at $398/month with per-user fees on top,
            ServiceTitan is a serious investment. Implementation takes weeks, not days. But for shops
            ready for enterprise software, it&apos;s the industry standard in HVAC, plumbing, and
            electrical.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            3. FieldEdge (~$100+/user/mo) — Best for Pricebook-Driven Shops
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Built-in flat-rate pricebook for HVAC and plumbing</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            If the main reason you&apos;re leaving Housecall Pro is the lack of a pricebook, FieldEdge
            should be at the top of your list. Its built-in flat-rate pricebook lets techs present
            professional, pre-calculated pricing to homeowners on the spot. No more calling the office
            for a price or guessing in the field.
          </p>
          <p className="text-gray-700 leading-relaxed">
            FieldEdge also has strong QuickBooks Desktop integration — something Housecall Pro
            struggles with. Per-user pricing means costs scale with your team size, so it works best
            for shops with 3-15 techs where the pricebook justifies the investment.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            4. Workiz ($49+/mo) — Best for Call Tracking and Phone-Based Booking
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Built-in call tracking with automatic job creation</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Workiz stands out with built-in call tracking that automatically logs calls, records
            conversations, and can create jobs from phone bookings. For service businesses where the
            phone is the primary booking channel — locksmiths, appliance repair, junk removal — this
            eliminates the need for a separate call tracking service.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The platform also includes a built-in phone system with local and toll-free numbers, SMS
            messaging, and call routing. If you&apos;re currently paying for both Housecall Pro and a
            separate call tracking tool, Workiz could save you money while consolidating your tech
            stack.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            5. Kickserv ($47+/mo) — Best Budget Alternative
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Core features at a lower price point</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Kickserv covers the essentials — scheduling, estimating, invoicing, customer management,
            and basic reporting — at a price point that undercuts most competitors. It&apos;s not as
            polished as Housecall Pro or Jobber, but it gets the job done for contractors who need
            functional software without premium pricing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The trade-off is fewer bells and whistles. No marketing tools, limited automation, and
            basic dispatching. But for small shops (1-5 techs) watching their overhead, Kickserv
            provides solid value. It also integrates with QuickBooks Online for accounting.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            6. mHelpDesk ($169+/mo) — Best for Custom Workflows
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Highly customizable for unique business processes</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            mHelpDesk is for contractors whose workflows don&apos;t fit neatly into standard field
            service software. It offers extensive customization — custom fields, custom statuses,
            custom workflows, and flexible automation rules. If your business has unique processes
            that Housecall Pro can&apos;t accommodate, mHelpDesk lets you build exactly what you need.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The pricing is higher than budget alternatives, and the interface takes more time to set
            up. But for contractors in specialized trades or those with complex multi-step workflows,
            the flexibility is worth the investment. It also has a strong integration with HomeAdvisor
            (now Angi) for lead management.
          </p>
        </div>
      </section>

      {/* When to stick with Housecall Pro */}
      <section className="mb-10">
        <div className="bg-brand-gray rounded-xl p-6">
          <h2 className="text-xl font-bold text-brand-blue mb-3">When to Stick with Housecall Pro</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Switching software is always disruptive. Here are situations where staying with Housecall
            Pro makes sense:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-brand-orange font-bold mr-2 mt-0.5">1.</span>
              <span>
                <strong>You use the marketing tools.</strong> Housecall Pro&apos;s built-in postcard
                campaigns, review management, and email marketing are hard to replace. If these
                features actively generate revenue for your business, switching means adding separate
                marketing tools and paying for them individually.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-orange font-bold mr-2 mt-0.5">2.</span>
              <span>
                <strong>Your team is trained and productive.</strong> If your techs and office staff
                know Housecall Pro inside and out, the productivity loss during a transition could
                cost more than the monthly savings. Retraining takes time and patience.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-orange font-bold mr-2 mt-0.5">3.</span>
              <span>
                <strong>You rely on Housecall Pro&apos;s payment processing.</strong> Housecall Pro&apos;s
                integrated payment processing (including financing options) is tightly woven into its
                invoicing workflow. Migrating payment processing can be messy and may disrupt your
                cash flow temporarily.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-3">
          The right Housecall Pro alternative depends on why you&apos;re leaving. If price is the
          issue, Jobber or Kickserv give you strong core features at a lower cost. If you need a
          flat-rate pricebook, FieldEdge or ServiceTitan are your best options. If call tracking
          matters most, Workiz has it built in. And if you need enterprise-grade software for a
          growing operation, ServiceTitan is the industry standard.
        </p>
        <p className="text-white/90 leading-relaxed">
          Whatever you choose, plan for 2-4 weeks of transition time. Export your customer data from
          Housecall Pro, train your team on the new platform, and run both systems in parallel for at
          least a week before cutting over completely.
        </p>
      </section>

      {/* Related comparisons */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-brand-blue mb-3">Related Comparisons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/compare/jobber-vs-housecall-pro/"
            className="block bg-brand-gray rounded-lg p-3 text-sm text-brand-blue font-medium hover:bg-gray-200 transition text-center"
          >
            Jobber vs Housecall Pro
          </Link>
          <Link
            href="/compare/servicetitan-vs-housecall-pro/"
            className="block bg-brand-gray rounded-lg p-3 text-sm text-brand-blue font-medium hover:bg-gray-200 transition text-center"
          >
            ServiceTitan vs Housecall Pro
          </Link>
          <Link
            href="/compare/housecall-pro-vs-jobnimbus/"
            className="block bg-brand-gray rounded-lg p-3 text-sm text-brand-blue font-medium hover:bg-gray-200 transition text-center"
          >
            Housecall Pro vs JobNimbus
          </Link>
        </div>
      </div>

      {/* Trial CTA grid */}
      <TrialCtaGrid
        names={["Jobber", "ServiceTitan", "FieldEdge", "Workiz", "Kickserv", "mHelpDesk", "Housecall Pro"]}
        heading="Try any of these free"
        description="Each tool below offers a free trial or live demo. We earn an affiliate commission if you sign up — see disclosure below."
      />

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

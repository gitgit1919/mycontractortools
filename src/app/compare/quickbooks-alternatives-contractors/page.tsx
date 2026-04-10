import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Best QuickBooks Alternatives for Contractors (2026)",
  description:
    "Compare the best QuickBooks alternatives for contractors. Jobber, Housecall Pro, FreshBooks, Wave, Xero, and Contractor Foreman — pricing, features, and honest recommendations.",
};

const alternatives = [
  {
    name: "Jobber",
    price: "$29-$149/mo",
    bestFor: "Best all-in-one with QuickBooks integration",
    scheduling: "Yes",
    invoicing: "Yes",
    estimating: "Yes",
    payments: "Yes (2.9% + 30c)",
    jobCosting: "Basic",
    qbIntegration: "Two-way sync",
  },
  {
    name: "Housecall Pro",
    price: "$49+/mo",
    bestFor: "Best for replacing QB entirely",
    scheduling: "Yes",
    invoicing: "Yes",
    estimating: "Yes",
    payments: "Built-in",
    jobCosting: "Basic",
    qbIntegration: "One-way sync",
  },
  {
    name: "FreshBooks",
    price: "$17+/mo",
    bestFor: "Best pure accounting alternative",
    scheduling: "No",
    invoicing: "Yes",
    estimating: "Yes",
    payments: "Yes",
    jobCosting: "No",
    qbIntegration: "Import/export",
  },
  {
    name: "Wave",
    price: "Free",
    bestFor: "Best free alternative",
    scheduling: "No",
    invoicing: "Yes",
    estimating: "No",
    payments: "Yes (2.9% + 30c)",
    jobCosting: "No",
    qbIntegration: "Import/export",
  },
  {
    name: "Xero",
    price: "$15+/mo",
    bestFor: "Best for international contractors",
    scheduling: "No",
    invoicing: "Yes",
    estimating: "No",
    payments: "Via integrations",
    jobCosting: "Via add-ons",
    qbIntegration: "Migration tools",
  },
  {
    name: "Contractor Foreman",
    price: "$49+/mo",
    bestFor: "Best for project-based job costing",
    scheduling: "Yes",
    invoicing: "Yes",
    estimating: "Yes",
    payments: "Yes",
    jobCosting: "Advanced",
    qbIntegration: "Two-way sync",
  },
];

export default function QuickBooksAlternativesContractors() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/quickbooks-alternatives-contractors/" className="text-gray-700">
            QuickBooks Alternatives for Contractors
          </Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Best QuickBooks Alternatives for Contractors (2026)
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          QuickBooks is great accounting software, but it was never designed for contractors. No
          scheduling, no dispatching, no estimating, no field service features. Here are 6
          alternatives that give contractors what QuickBooks can&apos;t.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Why contractors look for alternatives */}
      <section className="bg-brand-gray rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-3">
          Why Contractors Look Beyond QuickBooks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-blue mb-2">What QuickBooks Does Well</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- Bookkeeping and accounting</li>
              <li>- Tax preparation and reporting</li>
              <li>- Payroll processing</li>
              <li>- Expense tracking</li>
              <li>- CPA familiarity (most accountants know it)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-brand-orange mb-2">What Contractors Need (and QB Lacks)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>- Job scheduling and dispatching</li>
              <li>- Mobile estimating in the field</li>
              <li>- Customer communication (texts, reminders)</li>
              <li>- GPS tracking and route optimization</li>
              <li>- All-in-one field service management</li>
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
                <th className="text-left p-3 font-semibold">Scheduling</th>
                <th className="text-left p-3 font-semibold">Invoicing</th>
                <th className="text-left p-3 font-semibold">Job Costing</th>
              </tr>
            </thead>
            <tbody>
              {alternatives.map((alt, i) => (
                <tr key={alt.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{alt.name}</td>
                  <td className="p-3 text-gray-700">{alt.price}</td>
                  <td className="p-3 text-gray-700">{alt.bestFor}</td>
                  <td className="p-3 text-gray-700">{alt.scheduling}</td>
                  <td className="p-3 text-gray-700">{alt.invoicing}</td>
                  <td className="p-3 text-gray-700">{alt.jobCosting}</td>
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
            1. Jobber ($29-$149/mo) — Best All-in-One with QuickBooks Integration
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Keep QuickBooks for accounting, add Jobber for everything else</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Jobber doesn&apos;t replace QuickBooks — it complements it. The two-way sync means your
            invoices, payments, and expenses flow into QuickBooks automatically while Jobber handles
            scheduling, dispatching, quoting, and customer communication. For contractors who like
            QuickBooks&apos; accounting but need field service features, this is the cleanest solution.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pricing starts at $29/month for a single user, making it accessible for solo contractors.
            The interface is clean and techs can typically learn it in a day. Best for general
            contractors, landscapers, cleaners, and multi-trade service businesses.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            2. Housecall Pro ($49+/mo) — Best for Replacing QuickBooks Entirely
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Built-in payments, invoicing, and marketing tools</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Housecall Pro is designed to be the only software a contractor needs. It handles
            invoicing, payment processing, customer communication, scheduling, dispatching, and even
            marketing (postcards, email campaigns). If you want to eliminate QuickBooks entirely and
            run everything from one platform, Housecall Pro is the strongest option.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The trade-off is that its accounting features aren&apos;t as deep as QuickBooks. You may
            still want a bookkeeper or CPA to review your financials at tax time. Best for HVAC,
            plumbing, electrical, and home service contractors who want simplicity over accounting depth.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            3. FreshBooks ($17+/mo) — Best Pure Accounting Alternative
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Simpler than QuickBooks, great for solos</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            FreshBooks is for contractors who want better accounting software, not field service
            software. It does the same things as QuickBooks — invoicing, expense tracking, time
            tracking, reports — but with a much simpler interface. Solo contractors who find
            QuickBooks overwhelming often switch to FreshBooks and never look back.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The limitation is that FreshBooks has no scheduling, dispatching, or field service
            features. It&apos;s purely accounting and invoicing. If you need those features, pair
            FreshBooks with a separate field service tool, or look at Jobber or Housecall Pro instead.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            4. Wave (Free) — Best Free Alternative
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Free invoicing and accounting for budget-conscious contractors</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Wave is completely free for invoicing and accounting. It makes money through payment
            processing (2.9% + 30 cents per transaction) and optional payroll services. For brand-new
            contractors or one-person operations watching every dollar, Wave covers the basics without
            any monthly subscription.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The catch: Wave has no estimating, no scheduling, and limited reporting compared to
            QuickBooks. It also lacks some advanced accounting features. But for simple invoicing and
            expense tracking, it&apos;s hard to argue with free.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            5. Xero ($15+/mo) — Best for International Contractors
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Multi-currency support and strong international features</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Xero is a full accounting platform popular outside the US (especially in the UK, Australia,
            and New Zealand). It handles multi-currency invoicing, international tax compliance, and
            has a large marketplace of add-on integrations. For contractors who do cross-border work
            or operate in multiple countries, Xero handles this better than QuickBooks.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Like FreshBooks, Xero is pure accounting — no scheduling or dispatching. Its US market
            share is smaller than QuickBooks, which means fewer US accountants are familiar with it.
            But its integration ecosystem is deep, and it connects well with field service tools like
            Jobber and ServiceM8.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="text-xl font-semibold text-brand-blue mb-1">
            6. Contractor Foreman ($49+/mo) — Best for Project-Based Job Costing
          </h3>
          <p className="text-sm text-brand-orange font-medium mb-3">Built for contractors who need detailed project tracking</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Contractor Foreman is purpose-built for contractors who manage projects, not just service
            calls. It includes detailed job costing, change order management, daily logs, safety
            tracking, and project scheduling. If you&apos;re a general contractor, remodeler, or
            specialty contractor doing project-based work, this gives you tools QuickBooks never will.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The two-way QuickBooks sync keeps your accounting data flowing while Contractor Foreman
            handles the project management side. It&apos;s less polished than Jobber or Housecall Pro but
            more specialized for construction and project-based contractors.
          </p>
        </div>
      </section>

      {/* When to stick with QuickBooks */}
      <section className="mb-10">
        <div className="bg-brand-gray rounded-xl p-6">
          <h2 className="text-xl font-bold text-brand-blue mb-3">When to Stick with QuickBooks</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            QuickBooks isn&apos;t always the wrong answer. Here are situations where staying makes sense:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-brand-orange font-bold mr-2 mt-0.5">1.</span>
              <span>
                <strong>Your CPA prefers it.</strong> If your accountant is set up around QuickBooks
                and switching would mean retraining them (or finding a new CPA), the switching cost
                may not be worth it. Instead, add a field service tool like Jobber that syncs with QB.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-orange font-bold mr-2 mt-0.5">2.</span>
              <span>
                <strong>You have established processes.</strong> If your team has years of data,
                custom reports, and workflows built around QuickBooks, migrating is disruptive. Adding
                a complementary tool is usually smarter than replacing everything.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-orange font-bold mr-2 mt-0.5">3.</span>
              <span>
                <strong>You need payroll.</strong> QuickBooks&apos; built-in payroll is hard to beat for
                small businesses. Most contractor-specific tools don&apos;t include payroll, so
                you&apos;d need a separate payroll service anyway.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-3">
          Most contractors don&apos;t need to replace QuickBooks — they need to supplement it. The
          best approach for most shops is to keep QuickBooks for accounting and add a field service
          tool like Jobber or Housecall Pro for scheduling, dispatching, and customer management.
        </p>
        <p className="text-white/90 leading-relaxed">
          If you genuinely want to ditch QuickBooks, Housecall Pro is the strongest standalone
          replacement. If you&apos;re a solo contractor looking for simpler accounting, FreshBooks or
          Wave will save you time and money. And if you do project-based work with detailed job
          costing needs, Contractor Foreman is worth a serious look.
        </p>
      </section>

      {/* Related guide */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-brand-blue mb-2">Related Guide</h3>
        <p className="text-sm text-gray-700 mb-3">
          Starting a contracting business and trying to figure out which software to use? Our
          complete guide covers everything from licensing to your first customers.
        </p>
        <Link
          href="/guides/starting-a-contracting-business/"
          className="inline-block bg-brand-orange text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-600 transition text-sm"
        >
          Read: Starting a Contracting Business Guide
        </Link>
      </div>

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

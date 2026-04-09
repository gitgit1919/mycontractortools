import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title:
    "Contractor Software Buyer's Guide (2026) | MyContractorTools",
  description:
    "Free contractor software buyer's guide. Compare scheduling, invoicing, estimating, and field service management software for HVAC, plumbing, electrical, roofing, landscaping, and general contractors.",
};

const toc = [
  { id: "why-software", label: "Why You Need Contractor Software" },
  { id: "types", label: "Types of Contractor Software" },
  { id: "features", label: "Must-Have Features by Trade" },
  { id: "pricing", label: "How Pricing Actually Works" },
  { id: "by-trade", label: "Best Software by Trade" },
  { id: "by-size", label: "Best Software by Business Size" },
  { id: "questions", label: "Questions to Ask Before You Buy" },
  { id: "mistakes", label: "Mistakes to Avoid" },
  { id: "switching", label: "How to Switch Software" },
  { id: "verdict", label: "Our Recommendations" },
];

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold text-brand-blue mt-12 mb-4 scroll-mt-20"
    >
      {children}
    </h2>
  );
}

function ComparisonRow({
  feature,
  jobber,
  hcp,
  st,
}: {
  feature: string;
  jobber: string;
  hcp: string;
  st: string;
}) {
  return (
    <tr className="border-b border-gray-200">
      <td className="px-3 py-2 text-sm font-medium text-gray-800">
        {feature}
      </td>
      <td className="px-3 py-2 text-sm text-gray-600">{jobber}</td>
      <td className="px-3 py-2 text-sm text-gray-600">{hcp}</td>
      <td className="px-3 py-2 text-sm text-gray-600">{st}</td>
    </tr>
  );
}

export default function BuyersGuide() {
  return (
    <GuideLayout
      title="The Contractor Software Buyer's Guide (2026)"
      description="An honest, no-BS guide to choosing the right software for your contracting business. Real pricing, trade-specific recommendations, and the questions you should ask before spending a dime."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Choosing contractor software is one of the most important business
        decisions you will make. The right tool saves you hours every week on
        scheduling, invoicing, and chasing payments. The wrong one costs you
        money, frustrates your team, and makes you look unprofessional to
        customers.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        This guide cuts through the marketing noise. We have tested the major
        platforms, verified pricing, and talked to contractors who use them
        daily. Here is what actually matters.
      </p>

      {/* Section 1 */}
      <SectionHeading id="why-software">
        1. Why You Need Contractor Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you are still running your business on paper, spreadsheets, or
        texting back and forth with your crew, you are leaving money on the
        table. Here is what contractor software actually solves:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {[
          {
            title: "Get paid faster",
            desc: "Send invoices the moment a job is done. Accept credit cards and ACH. Automated payment reminders mean fewer awkward collection calls.",
          },
          {
            title: "Stop double-booking",
            desc: "Drag-and-drop scheduling with crew assignments. Everyone sees the same calendar. No more missed appointments or overlapping jobs.",
          },
          {
            title: "Look professional",
            desc: "Branded quotes, professional invoices, automated appointment confirmations. Customers trust businesses that look organized.",
          },
          {
            title: "Know your numbers",
            desc: "Revenue, job costs, profit margins, close rates — all in one place. Stop guessing whether you are making money.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <h4 className="font-bold text-brand-blue mb-1">{item.title}</h4>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-brand-gray rounded-xl p-5 my-6">
        <p className="text-sm text-gray-700">
          <strong>The math:</strong> If software saves you just 5 hours per week
          in admin time and you bill at $75/hour, that is $375/week or{" "}
          <strong>$19,500/year</strong> in recovered billable time. Most
          contractor software costs $30-$150/month. The ROI is not close.
        </p>
      </div>

      {/* Section 2 */}
      <SectionHeading id="types">
        2. Types of Contractor Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        &quot;Contractor software&quot; is a broad category. Here is how the market
        breaks down:
      </p>

      <div className="space-y-4 my-6">
        {[
          {
            name: "Field Service Management (FSM)",
            examples: "Jobber, Housecall Pro, ServiceTitan",
            desc: "All-in-one platforms: scheduling, dispatching, quoting, invoicing, payments, CRM. This is what most contractors need.",
            who: "Service contractors (HVAC, plumbing, electrical, landscaping)",
          },
          {
            name: "Project Management / Construction",
            examples: "Buildertrend, CoConstruct, Procore",
            desc: "Job costing, change orders, subcontractor management, client portal, selections. Built for longer-duration projects.",
            who: "General contractors, remodelers, custom home builders",
          },
          {
            name: "Estimating-Focused",
            examples: "LMN, STACK, PlanSwift",
            desc: "Detailed takeoff and estimating with labor/material databases. Often paired with an FSM tool.",
            who: "Contractors who bid large jobs with detailed material lists",
          },
          {
            name: "Accounting",
            examples: "QuickBooks, FreshBooks, Wave",
            desc: "Bookkeeping, expense tracking, tax preparation. Not contractor-specific but essential.",
            who: "Everyone (usually alongside an FSM or PM tool)",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <h4 className="font-bold text-brand-blue mb-1">{item.name}</h4>
            <p className="text-xs text-gray-500 mb-2">
              Examples: {item.examples}
            </p>
            <p className="text-sm text-gray-700 mb-2">{item.desc}</p>
            <p className="text-xs text-brand-orange font-medium">
              Best for: {item.who}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-brand-blue rounded-r-lg p-4 my-6">
        <p className="font-bold text-brand-blue mb-1">
          Most contractors start with FSM
        </p>
        <p className="text-sm text-gray-700">
          If you are a service contractor doing residential work, you need a
          Field Service Management tool. It handles 80% of what you need in one
          platform. Add QuickBooks or another accounting tool for your books.
        </p>
      </div>

      {/* Section 3 */}
      <SectionHeading id="features">
        3. Must-Have Features by Trade
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Not every trade needs the same features. Here is what matters most for
        each:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-brand-gray">
            <tr>
              <th className="text-left px-3 py-2 font-semibold text-brand-blue">
                Feature
              </th>
              <th className="text-center px-3 py-2 font-semibold text-brand-blue">
                HVAC
              </th>
              <th className="text-center px-3 py-2 font-semibold text-brand-blue">
                Plumbing
              </th>
              <th className="text-center px-3 py-2 font-semibold text-brand-blue">
                Electrical
              </th>
              <th className="text-center px-3 py-2 font-semibold text-brand-blue">
                Roofing
              </th>
              <th className="text-center px-3 py-2 font-semibold text-brand-blue">
                Landscaping
              </th>
              <th className="text-center px-3 py-2 font-semibold text-brand-blue">
                GC
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Dispatching", "!!!", "!!!", "!!", "!", "!!", "!"],
              ["Scheduling", "!!!", "!!!", "!!!", "!!", "!!!", "!!"],
              ["Pricebook", "!!!", "!!!", "!!", "!", "!", "!"],
              ["Estimating", "!!", "!!", "!!", "!!!", "!!!", "!!!"],
              ["Job costing", "!!", "!!", "!!", "!!!", "!!!", "!!!"],
              ["Route optimization", "!", "!", "!", "!", "!!!", "!"],
              ["Recurring jobs", "!!", "!!", "!", "!", "!!!", "!"],
              ["Photo documentation", "!!", "!!", "!!", "!!!", "!!", "!!!"],
              ["Client portal", "!!", "!!", "!!", "!!!", "!", "!!!"],
              ["Change orders", "!", "!", "!", "!!", "!", "!!!"],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-gray-100">
                <td className="px-3 py-1.5 font-medium text-gray-800">
                  {row[0]}
                </td>
                {row.slice(1).map((cell, i) => (
                  <td key={i} className="text-center px-3 py-1.5">
                    {cell === "!!!" ? (
                      <span className="text-green-600 font-bold">Essential</span>
                    ) : cell === "!!" ? (
                      <span className="text-yellow-600">Important</span>
                    ) : (
                      <span className="text-gray-400">Nice to have</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 4 */}
      <SectionHeading id="pricing">
        4. How Pricing Actually Works
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Software pricing in this industry is deliberately confusing. Here is
        what you need to know:
      </p>

      <h3 className="text-lg font-bold text-brand-blue mt-6 mb-3">
        The Three Pricing Models
      </h3>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">
            Flat monthly fee (Jobber, Housecall Pro)
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            One price per month, usually tiered by features. $29-$149/month for
            most contractors. Predictable costs. You know what you are paying.
          </p>
          <p className="text-xs text-green-600 font-medium">
            Best for: small to mid-size contractors who want simple pricing
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">
            Per-technician pricing (ServiceTitan)
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            You pay per field technician per month. Costs scale linearly with
            team size. A 5-tech shop might pay $1,200+/month. Gets expensive
            fast.
          </p>
          <p className="text-xs text-yellow-600 font-medium">
            Best for: larger operations (10+ techs) where per-tech cost is
            offset by revenue gains
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">
            Project-based (Buildertrend, Procore)
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            Pricing based on number of active projects or revenue. Procore
            charges by annual construction volume. Buildertrend is a flat fee
            but starts at $99+/month.
          </p>
          <p className="text-xs text-brand-orange font-medium">
            Best for: general contractors and remodelers managing multiple
            projects
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold text-brand-blue mt-8 mb-3">
        Real Pricing Comparison (April 2026)
      </h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-brand-gray">
            <tr>
              <th className="text-left px-3 py-2 font-semibold text-brand-blue">
                Software
              </th>
              <th className="text-left px-3 py-2 font-semibold text-brand-blue">
                Starting Price
              </th>
              <th className="text-left px-3 py-2 font-semibold text-brand-blue">
                Mid Tier
              </th>
              <th className="text-left px-3 py-2 font-semibold text-brand-blue">
                Top Tier
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Jobber", "$29/mo (Core)", "$99/mo (Connect)", "$149/mo (Grow)"],
              [
                "Housecall Pro",
                "$69/mo (Basic)",
                "$149/mo (Essentials)",
                "Custom (MAX)",
              ],
              [
                "ServiceTitan",
                "~$245/tech/mo",
                "Custom pricing",
                "Custom + add-ons",
              ],
              [
                "Buildertrend",
                "$99/mo",
                "$399/mo (Growing)",
                "$699/mo (Established)",
              ],
              ["Jobber (Solo)", "$29/mo", "1 user included", "Extra users $29 each"],
              [
                "LMN",
                "$99/mo (Starter)",
                "$199/mo (Pro)",
                "$349/mo (Enterprise)",
              ],
            ].map((row, i) => (
              <tr
                key={row[0]}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-3 py-2 font-medium">{row[0]}</td>
                <td className="px-3 py-2">{row[1]}</td>
                <td className="px-3 py-2">{row[2]}</td>
                <td className="px-3 py-2">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6 rounded-r-lg">
        <p className="font-bold text-red-700 mb-1">Watch Out For Hidden Costs</p>
        <p className="text-sm text-red-700">
          Many platforms charge extra for: payment processing (2.5-3.5% per
          transaction), marketing add-ons ($100-$300/mo), advanced reporting,
          additional users, onboarding/training fees ($500-$2,000), and API
          access. Always ask for the total cost, not just the base subscription.
        </p>
      </div>

      {/* Section 5 */}
      <SectionHeading id="by-trade">
        5. Best Software by Trade
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here are our top picks for each trade, based on testing, pricing
        research, and contractor feedback:
      </p>

      <div className="space-y-4 my-6">
        {[
          {
            trade: "HVAC",
            pick: "Jobber (small shops) / ServiceTitan (5+ techs)",
            why: "HVAC needs strong dispatching, pricebook, and maintenance agreement tracking. Jobber covers this at $29-$149/mo. ServiceTitan adds pricebook depth and marketing but costs 5-10x more.",
            link: "/best/hvac-software/",
          },
          {
            trade: "Plumbing",
            pick: "Housecall Pro (residential) / ServiceTitan (commercial)",
            why: "Plumbers need fast dispatching for emergency calls and good invoicing. HCP at $69/mo has the right balance. ServiceTitan for shops doing $1M+.",
            link: "/best/plumbing-software/",
          },
          {
            trade: "Electrical",
            pick: "Jobber (1-5 people) / ServiceTitan (larger shops)",
            why: "Electrical contractors need quoting for panel upgrades and service work. Jobber is clean and simple. ServiceTitan adds pricebook and financing options.",
            link: "/best/electrical-contractor-software/",
          },
          {
            trade: "Roofing",
            pick: "Jobber or AccuLynx",
            why: "Roofing needs photo documentation, measurement integration, and material ordering. AccuLynx is roofing-specific. Jobber works for smaller operations.",
            link: "/best/roofing-software/",
          },
          {
            trade: "Landscaping",
            pick: "Jobber (maintenance) / LMN (design-build)",
            why: "Landscaping lives on route optimization and recurring services. Jobber handles this well. LMN adds detailed estimating for install projects.",
            link: "/best/landscaping-software/",
          },
          {
            trade: "General Contractor",
            pick: "Buildertrend (residential) / Procore (commercial)",
            why: "GCs need project management, subcontractor coordination, and client portals. Buildertrend covers residential remodeling. Procore scales to large commercial.",
            link: "/best/general-contractor-software/",
          },
        ].map((item) => (
          <div
            key={item.trade}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-brand-blue">{item.trade}</h4>
                <p className="text-sm font-medium text-brand-orange mt-1">
                  {item.pick}
                </p>
              </div>
              <Link
                href={item.link}
                className="text-xs bg-brand-gray text-brand-blue px-3 py-1 rounded-full hover:bg-brand-orange hover:text-white transition-colors whitespace-nowrap ml-3"
              >
                Full Review
              </Link>
            </div>
            <p className="text-sm text-gray-700 mt-2">{item.why}</p>
          </div>
        ))}
      </div>

      {/* Section 6 */}
      <SectionHeading id="by-size">
        6. Best Software by Business Size
      </SectionHeading>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-green-300 rounded-lg p-5">
          <h4 className="font-bold text-brand-blue mb-2">
            Solo Operator / 1-2 People
          </h4>
          <p className="text-sm text-gray-700 mb-3">
            You need simple scheduling, invoicing, and payment collection. Do
            not overspend on features you will not use.
          </p>
          <p className="text-sm font-medium text-brand-orange">
            Recommendation: Jobber Core ($29/mo) or Housecall Pro Basic
            ($69/mo)
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Budget: $30-$70/month. Total cost with accounting: $30-$100/month.
          </p>
        </div>

        <div className="bg-white border border-blue-300 rounded-lg p-5">
          <h4 className="font-bold text-brand-blue mb-2">
            Small Team / 3-10 People
          </h4>
          <p className="text-sm text-gray-700 mb-3">
            You need dispatching, crew scheduling, and quoting/estimating.
            Mobile app for field techs is essential at this size.
          </p>
          <p className="text-sm font-medium text-brand-orange">
            Recommendation: Jobber Connect ($99/mo) or Housecall Pro Essentials
            ($149/mo)
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Budget: $100-$200/month. ROI becomes obvious at this stage.
          </p>
        </div>

        <div className="bg-white border border-purple-300 rounded-lg p-5">
          <h4 className="font-bold text-brand-blue mb-2">
            Established / 10-50 People
          </h4>
          <p className="text-sm text-gray-700 mb-3">
            You need advanced reporting, pricebook management, marketing
            integration, and possibly multi-location support.
          </p>
          <p className="text-sm font-medium text-brand-orange">
            Recommendation: ServiceTitan, Aspire (landscaping), or Buildertrend
            (GC)
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Budget: $300-$2,000/month. At this scale, the right software pays
            for itself many times over.
          </p>
        </div>
      </div>

      {/* Section 7 */}
      <SectionHeading id="questions">
        7. Questions to Ask Before You Buy
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Before signing up for any platform, get clear answers to these
        questions. Do not rely on the sales demo alone.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            q: "What is the TOTAL monthly cost for my team size?",
            why: "Include per-user fees, add-ons, payment processing, and any features that require upgrades.",
          },
          {
            q: "Is there a contract or can I cancel monthly?",
            why: "Avoid annual contracts until you have used the tool for at least 2 months. Many platforms offer month-to-month.",
          },
          {
            q: "What does onboarding/training cost?",
            why: "ServiceTitan charges $2,000+ for onboarding. Others include it free. Ask upfront.",
          },
          {
            q: "Does it integrate with QuickBooks/Xero?",
            why: "If you have to manually re-enter transactions, you have lost half the time savings.",
          },
          {
            q: "What happens to my data if I leave?",
            why: "Make sure you can export customer data, job history, and invoices. Some platforms make this difficult.",
          },
          {
            q: "How does the mobile app work offline?",
            why: "Your techs work in basements and attics with no signal. Does the app still function?",
          },
          {
            q: "What is the payment processing fee?",
            why: "Most charge 2.5-3.5% per credit card transaction. This adds up fast. Compare rates.",
          },
          {
            q: "Can I see a reference from a company my size?",
            why: "A tool that works for a 50-person shop may be overkill for you. Ask for references from similar-sized businesses.",
          },
        ].map((item) => (
          <div
            key={item.q}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <p className="font-bold text-brand-blue text-sm mb-1">{item.q}</p>
            <p className="text-xs text-gray-600">{item.why}</p>
          </div>
        ))}
      </div>

      {/* Section 8 */}
      <SectionHeading id="mistakes">
        8. Mistakes to Avoid
      </SectionHeading>

      <div className="space-y-3 my-6">
        {[
          {
            mistake: "Buying the most expensive option",
            fix: "More expensive does not mean better for YOUR business. A solo plumber does not need ServiceTitan. Start with what fits your current size, not where you hope to be in 5 years.",
          },
          {
            mistake: "Not getting your team on board",
            fix: "The best software in the world fails if your techs refuse to use it. Involve your team in the decision. Pick something with an easy mobile app.",
          },
          {
            mistake: "Signing a long-term contract on day one",
            fix: "Use a free trial or monthly plan first. Use it for at least 30 days before committing. Annual contracts save money but lock you in.",
          },
          {
            mistake: "Ignoring the transition period",
            fix: "Switching software takes 2-4 weeks of running both systems. Budget time for data migration, training, and the inevitable frustration period.",
          },
          {
            mistake: "Not using the features you are paying for",
            fix: "Most contractors use 30% of their software's features. Spend time learning the quoting, reporting, and automation features. That is where the real ROI lives.",
          },
          {
            mistake: "Choosing based on the sales demo",
            fix: "Everything looks great in a demo. Ask for a free trial and enter YOUR data. Send a real invoice. Schedule a real job. That is the true test.",
          },
        ].map((item) => (
          <div
            key={item.mistake}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <p className="font-bold text-red-600 text-sm mb-1">
              {item.mistake}
            </p>
            <p className="text-xs text-gray-700">{item.fix}</p>
          </div>
        ))}
      </div>

      {/* Section 9 */}
      <SectionHeading id="switching">
        9. How to Switch Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Already using software but want to switch? Here is the process:
      </p>

      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Export your data first.</strong> Download customer lists, job
          history, and any templates. Do this BEFORE canceling your old
          platform.
        </li>
        <li>
          <strong>Set up the new tool alongside the old one.</strong> Run both
          for 2-4 weeks. Enter new jobs in the new system. Keep the old one for
          reference.
        </li>
        <li>
          <strong>Import your customer data.</strong> Most platforms support CSV
          import. Clean up your data during the transfer (remove duplicates,
          update phone numbers).
        </li>
        <li>
          <strong>Train your team.</strong> Block 2 hours for initial training.
          Then do daily 15-minute check-ins for the first week.
        </li>
        <li>
          <strong>Go fully live.</strong> Pick a date and commit. Having two
          active systems creates confusion. Cut over cleanly.
        </li>
        <li>
          <strong>Cancel the old platform.</strong> But download one final data
          export first. Keep it as a backup.
        </li>
      </ol>

      {/* Section 10 */}
      <SectionHeading id="verdict">
        10. Our Recommendations
      </SectionHeading>

      <div className="bg-brand-gray rounded-xl p-6 my-6">
        <h3 className="text-xl font-bold text-brand-blue mb-4">
          The Bottom Line
        </h3>

        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border-2 border-brand-orange">
            <p className="text-xs text-brand-orange font-bold mb-1">
              BEST OVERALL VALUE
            </p>
            <h4 className="font-bold text-brand-blue text-lg">Jobber</h4>
            <p className="text-sm text-gray-700 mt-1">
              Starting at $29/month, Jobber offers the best balance of features,
              ease of use, and pricing for most contractors. It handles
              scheduling, quoting, invoicing, and payments well. The mobile app
              is clean. QuickBooks integration works. If you are a service
              contractor with 1-15 people, start here.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-500 font-bold mb-1">
              BEST FOR GROWING TEAMS
            </p>
            <h4 className="font-bold text-brand-blue text-lg">
              Housecall Pro
            </h4>
            <p className="text-sm text-gray-700 mt-1">
              At $69-$149/month, HCP adds online booking, review management,
              and stronger marketing features. Good for contractors who want to
              grow through online presence and customer reviews.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-500 font-bold mb-1">
              BEST FOR LARGE OPERATIONS
            </p>
            <h4 className="font-bold text-brand-blue text-lg">ServiceTitan</h4>
            <p className="text-sm text-gray-700 mt-1">
              At ~$245/tech/month, ServiceTitan is expensive but powerful. Deep
              pricebook, advanced dispatching, marketing ROI tracking, and
              financing integrations. Only makes sense at $1M+ revenue.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-500 font-bold mb-1">
              BEST FOR GENERAL CONTRACTORS
            </p>
            <h4 className="font-bold text-brand-blue text-lg">Buildertrend</h4>
            <p className="text-sm text-gray-700 mt-1">
              Starting at $99/month, Buildertrend is the standard for
              residential GCs and remodelers. Project management, client portal,
              change orders, and selections. Not cheap, but it replaces 3-4
              other tools.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">
          Read Our Full Reviews
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: "Best HVAC Software", href: "/best/hvac-software/" },
            {
              name: "Best Plumbing Software",
              href: "/best/plumbing-software/",
            },
            {
              name: "Best Electrical Software",
              href: "/best/electrical-contractor-software/",
            },
            { name: "Best Roofing Software", href: "/best/roofing-software/" },
            {
              name: "Best Landscaping Software",
              href: "/best/landscaping-software/",
            },
            {
              name: "Best GC Software",
              href: "/best/general-contractor-software/",
            },
            {
              name: "Jobber vs Housecall Pro",
              href: "/compare/jobber-vs-housecall-pro/",
            },
            {
              name: "Jobber vs ServiceTitan",
              href: "/compare/jobber-vs-servicetitan/",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-blue rounded-xl p-6 my-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Need Help Choosing?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Use our free calculators to run your business smarter, and check our
          trade-specific reviews for detailed comparisons with real pricing.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/calculators/"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse Calculators
          </Link>
          <Link
            href="/guides/starting-a-contracting-business/"
            className="inline-block bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Startup Guide
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}

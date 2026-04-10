import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import { getTrialUrl } from "@/lib/trialUrls";

export const metadata: Metadata = {
  title:
    "How to Start a Contracting Business (2026 Guide) | MyContractorTools",
  description:
    "Complete guide to starting a contracting business. Learn about licensing, LLC formation, contractor insurance, pricing your work, getting customers, building a website, and growing your business.",
};

const toc = [
  { id: "decide-your-trade", label: "Decide Your Trade and Specialty" },
  { id: "business-structure", label: "Choose a Business Structure (LLC vs Sole Prop)" },
  { id: "licensing", label: "Get Licensed and Registered" },
  { id: "insurance", label: "Get Contractor Insurance" },
  { id: "finances", label: "Set Up Your Business Finances" },
  { id: "pricing", label: "Price Your Work for Profit" },
  { id: "website", label: "Build Your Contractor Website" },
  { id: "get-customers", label: "Get Your First Customers" },
  { id: "software", label: "Set Up Your Business Software" },
  { id: "scale", label: "Scale from Solo to Crew" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-brand-blue mt-12 mb-4 scroll-mt-20">
      {children}
    </h2>
  );
}

function TipBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border-l-4 border-brand-blue rounded-r-lg p-4 my-6">
      <p className="font-bold text-brand-blue mb-1">{title}</p>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
}

function CostTable({ rows }: { rows: { item: string; cost: string; notes: string }[] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-brand-gray">
          <tr>
            <th className="text-left px-4 py-2 font-semibold text-brand-blue">Item</th>
            <th className="text-left px-4 py-2 font-semibold text-brand-blue">Typical Cost</th>
            <th className="text-left px-4 py-2 font-semibold text-brand-blue">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2">{row.item}</td>
              <td className="px-4 py-2 font-medium">{row.cost}</td>
              <td className="px-4 py-2 text-gray-600">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StartingContractingBusiness() {
  return (
    <GuideLayout
      title="How to Start a Contracting Business (2026 Guide)"
      description="A step-by-step guide to starting your own contracting business — from choosing your trade to landing your first customers. No fluff, just the practical steps you need."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Starting a contracting business is one of the best paths to building real
        wealth in the trades. You already have the skills — the business side is
        what trips most people up. This guide walks you through every step, from
        paperwork to getting paid.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Whether you are an electrician, plumber, HVAC tech, carpenter, roofer,
        landscaper, or general contractor, the fundamentals are the same. We will
        call out trade-specific differences where they matter.
      </p>

      {/* Section 1 */}
      <SectionHeading id="decide-your-trade">
        1. Decide Your Trade and Specialty
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most successful contractors specialize. A general contractor who does
        &quot;everything&quot; competes with everyone. A contractor who specializes in
        bathroom remodels, commercial HVAC, or residential electrical panels has
        a clear target market and can charge more.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ask yourself these questions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>What work do I enjoy most?</strong> You will be doing a lot of
          it. Pick something you are good at and don&apos;t mind doing every day.
        </li>
        <li>
          <strong>What is in demand in my area?</strong> Look at what jobs are
          being posted, what contractors are booked out, and what types of work
          homeowners are searching for.
        </li>
        <li>
          <strong>What has good margins?</strong> Some specialties pay better
          than others. Service calls (HVAC repair, plumbing emergencies) tend to
          have higher margins than new construction subcontracting.
        </li>
        <li>
          <strong>What licensing do I already have?</strong> If you hold a
          journeyman electrician license, starting an electrical contracting
          business is the path of least resistance.
        </li>
      </ul>

      <TipBox title="High-Margin Specialties to Consider">
        <p>
          HVAC service and replacement, bathroom/kitchen remodeling, deck
          building, landscape design-build, electrical panel upgrades, and
          commercial maintenance contracts tend to offer the best margins for
          small contractors.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="business-structure">
        2. Choose a Business Structure
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        You need to register your business before you do anything else. Most
        contractors choose one of these structures:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Sole Proprietorship</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Simplest and cheapest to set up</li>
            <li>No separation between you and the business</li>
            <li>Your personal assets are at risk if sued</li>
            <li>Fine for testing the waters, not recommended long-term</li>
          </ul>
        </div>
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-brand-blue">LLC (Recommended)</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Best for most</span>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Separates your personal and business assets</li>
            <li>Protects your house and savings if someone sues</li>
            <li>Costs $50–$500 depending on your state</li>
            <li>Can elect S-Corp taxation to save on self-employment tax</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Our recommendation:</strong> Form an LLC. The liability
        protection alone is worth it. Contracting work involves real risk —
        property damage, injuries, unhappy customers. An LLC puts a wall between
        your business and your personal finances.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You can file the LLC yourself through your state&apos;s Secretary of State
        website, or use a formation service to handle the paperwork for you.
        Formation services typically cost $0–$150 plus state fees and handle the
        articles of organization, EIN filing, and registered agent service.
      </p>

      <CostTable
        rows={[
          { item: "State LLC filing fee", cost: "$50–$500", notes: "Varies by state. Wyoming and New Mexico are cheapest." },
          { item: "Registered agent (annual)", cost: "$0–$125/yr", notes: "Required in most states. You can be your own." },
          { item: "LLC formation service", cost: "$0–$150", notes: "Handles paperwork for you. Optional but saves time." },
          { item: "EIN (Tax ID number)", cost: "Free", notes: "Apply directly on IRS.gov. Takes 5 minutes." },
          { item: "Operating agreement", cost: "$0–$100", notes: "Template is fine for single-member LLC." },
        ]}
      />

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Which LLC Formation Service Should You Use?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You can absolutely file the LLC paperwork yourself on your state&apos;s Secretary of
        State website &mdash; it is just a form. Formation services exist to save you the
        afternoon and to handle registered agent service in years 2+. Here is the honest
        rundown for contractors:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-brand-blue">Northwest Registered Agent</h4>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Best for most contractors</span>
            </div>
            <span className="text-sm text-gray-500">$39 + state fee</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            US-based privacy-first formation service. They use their address as your
            registered agent so your home address never appears on the public record &mdash;
            valuable when angry customers start Googling you. No upsells, no &quot;premium&quot;
            tiers that exist to confuse you.
          </p>
          <p className="text-xs text-gray-600 mb-3"><strong>Why we recommend it:</strong> The cleanest pricing on this list, the best privacy practices, and US-based phone support that picks up. Year 2+ is $125 for registered agent service.</p>
          <a
            href={getTrialUrl("Northwest Registered Agent")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit Northwest Registered Agent &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <h4 className="font-bold text-brand-blue">ZenBusiness</h4>
            <span className="text-sm text-gray-500">$0 + state fee (Starter plan)</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            Free filing on the entry plan, slick onboarding, and add-on services like
            worry-free compliance reminders and a business banking partnership. The
            tradeoff: heavier upsells through the checkout flow, and the $0 plan has a
            longer turnaround.
          </p>
          <p className="text-xs text-gray-600 mb-3"><strong>Pick this if:</strong> You want a free filing and don&apos;t mind clicking past upsells.</p>
          <a
            href={getTrialUrl("ZenBusiness")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit ZenBusiness &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <h4 className="font-bold text-brand-blue">LegalZoom</h4>
            <span className="text-sm text-gray-500">$0–$299 + state fee</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            The most recognized name. Pays off if you also need attorney consultations
            or trademark filing through the same vendor. Otherwise their LLC pricing is
            higher than competitors for an essentially identical product.
          </p>
          <p className="text-xs text-gray-600 mb-3"><strong>Pick this if:</strong> You already plan to use LegalZoom for trademarks or legal advice and want everything on one platform.</p>
          <a
            href={getTrialUrl("LegalZoom")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit LegalZoom &rarr;
          </a>
        </div>
      </div>

      <TipBox title="DIY filing is also fine">
        <p>
          If you have an afternoon and a clear head, you can file directly with your
          state for just the state fee &mdash; no service required. The forms are short.
          The benefit of a service is mainly the registered agent privacy, which keeps
          your home address off the public record.
        </p>
      </TipBox>

      <TipBox title="S-Corp Election — Save on Taxes Later">
        <p>
          Once you are making $60K+ in profit, talk to an accountant about
          electing S-Corp status for your LLC. This can save you thousands per
          year in self-employment taxes. Use our{" "}
          <Link href="/calculators/self-employment-tax/" className="text-brand-orange hover:underline">
            Self-Employment Tax Calculator
          </Link>{" "}
          to estimate your current tax burden.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="licensing">
        3. Get Licensed and Registered
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Licensing requirements vary dramatically by state, county, and trade.
        Some states require a license for almost all contracting work. Others
        only require it for specific trades or projects above a dollar threshold.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What you typically need:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>State contractor license</strong> — Required in most states for
          work above a certain dollar amount. Application involves proof of
          experience, exam, and bond.
        </li>
        <li>
          <strong>Trade license</strong> — Electrical, plumbing, and HVAC almost
          always require a separate trade license. This usually means passing a
          journeyman or master exam.
        </li>
        <li>
          <strong>Local business license</strong> — Most cities and counties
          require a general business license. Usually $50–$200/year.
        </li>
        <li>
          <strong>Specialty permits</strong> — Asbestos, lead, refrigerant
          handling (EPA 608), etc. depend on your specific trade.
        </li>
      </ul>

      <TipBox title="How to Find Your State's Requirements">
        <p>
          Search &quot;[your state] contractor license requirements&quot; and look for
          the .gov result. Most states have a Contractor Licensing Board or
          Department of Professional Regulation that lists every requirement.
          Call them — they are usually helpful and can walk you through the
          process.
        </p>
      </TipBox>

      {/* Section 4 */}
      <SectionHeading id="insurance">
        4. Get Contractor Insurance
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance is not optional. Most states require it for licensing, most
        clients require it before you start work, and one bad incident without
        coverage could bankrupt you.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what you need:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">General Liability Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers property damage and bodily injury caused by your work.
            Required by nearly every state and client.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $500–$2,000/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Workers Compensation</h4>
          <p className="text-sm text-gray-700 mb-1">
            Required in most states if you have employees. Covers employee
            injuries on the job. Even some solo contractors need it.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: varies widely by trade and payroll</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Commercial Auto Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            If you use a vehicle for work (which you do), personal auto
            insurance may not cover business use. Get a commercial policy.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $1,200–$3,000/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Tools and Equipment Coverage</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers theft or damage to your tools. Often available as a rider
            on your general liability policy.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $200–$500/year</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Get quotes from multiple providers. Insurance marketplaces that
        specialize in contractors can often get you coverage faster and at
        better rates than general insurance agents. Many offer same-day
        certificates of insurance, which you will need when bidding commercial
        jobs.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Where to Get Contractor Insurance Quotes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        These four providers all sell direct to contractors with same-day
        certificates of insurance. Get a quote from at least two before binding a
        policy &mdash; rates for the same coverage can vary 30%+ between carriers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">NEXT Insurance</h4>
          <p className="text-sm text-gray-700 mb-2">
            Online-first, instant quotes, same-day certificates from your phone.
            Built specifically around small contractor and trade businesses.
            Bundle GL + tools + commercial auto in one policy.
          </p>
          <p className="text-xs text-gray-600 mb-3"><strong>Best for:</strong> Solo contractors and small crews who want a fully-online experience.</p>
          <a
            href={getTrialUrl("NEXT Insurance")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Get NEXT quote &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">Hiscox</h4>
          <p className="text-sm text-gray-700 mb-2">
            Established carrier with deep small-business expertise. Strong on
            general liability and professional liability. Slightly more
            traditional underwriting than NEXT &mdash; sometimes better pricing for
            higher-revenue shops.
          </p>
          <p className="text-xs text-gray-600 mb-3"><strong>Best for:</strong> Contractors who want a brand-name carrier with good claims service.</p>
          <a
            href={getTrialUrl("Hiscox")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Get Hiscox quote &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">Simply Business</h4>
          <p className="text-sm text-gray-700 mb-2">
            Marketplace that pulls quotes from multiple carriers in one
            application. Saves you from filling out the same form three times.
            Good when you do not know which carrier will price your trade best.
          </p>
          <p className="text-xs text-gray-600 mb-3"><strong>Best for:</strong> Contractors who want to compare multiple carriers from one form.</p>
          <a
            href={getTrialUrl("Simply Business")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Compare quotes &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">Thimble</h4>
          <p className="text-sm text-gray-700 mb-2">
            Unique on-demand pricing &mdash; you can buy a single-day, single-week,
            or single-month policy for one specific job, in addition to standard
            annual GL. Useful when a one-off commercial job demands proof of
            insurance you do not normally carry.
          </p>
          <p className="text-xs text-gray-600 mb-3"><strong>Best for:</strong> Side-job contractors or specialty work requiring short-term certs.</p>
          <a
            href={getTrialUrl("Thimble")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Get Thimble quote &rarr;
          </a>
        </div>
      </div>

      <TipBox title="Always get GL bound before your first paid job">
        <p>
          A single accident on a job site &mdash; a dropped tool through a window, water
          damage, a slip-and-fall &mdash; can cost more than you will earn in a year. Bind
          a general liability policy <strong>before</strong> you take your first paid
          job, not after. Most contractors can be insured by tomorrow morning if they
          start the application tonight.
        </p>
      </TipBox>

      {/* Section 5 */}
      <SectionHeading id="finances">
        5. Set Up Your Business Finances
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is where most new contractors make mistakes. Keeping business and
        personal money separate from day one saves enormous headaches at tax
        time and protects your LLC status.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Your financial setup checklist:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Open a business checking account</strong> — Use your EIN and
          LLC documents. Many banks offer free business checking for small
          businesses. All business income in, all business expenses out.
        </li>
        <li>
          <strong>Get a business credit card</strong> — Use it for materials,
          fuel, and tools. Pay it off monthly. Builds business credit and makes
          expense tracking easy.
        </li>
        <li>
          <strong>Set aside money for taxes</strong> — As a contractor, nobody
          withholds taxes for you. Set aside 25–30% of every payment into a
          separate savings account. Pay quarterly estimated taxes to avoid
          penalties.
        </li>
        <li>
          <strong>Track every expense</strong> — Use a simple accounting tool
          from day one. Categorize expenses properly. This matters more than
          you think at tax time.
        </li>
        <li>
          <strong>Get a bookkeeper or use accounting software</strong> — At
          minimum, use QuickBooks Self-Employed or Wave (free). Once past $100K
          revenue, hire a bookkeeper ($200–$400/month).
        </li>
      </ul>

      <TipBox title="Tax Tip: Quarterly Estimated Payments">
        <p>
          The IRS expects you to pay taxes four times a year (April 15, June 15,
          September 15, January 15). Underpayment triggers penalties. Use our{" "}
          <Link href="/calculators/self-employment-tax/" className="text-brand-orange hover:underline">
            Self-Employment Tax Calculator
          </Link>{" "}
          to estimate what you owe each quarter.
        </p>
      </TipBox>

      {/* Section 6 */}
      <SectionHeading id="pricing">
        6. Price Your Work for Profit
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Underpricing is the number one reason contractors fail. You need to
        cover materials, labor, overhead, AND profit. Most new contractors
        forget about overhead and profit — then wonder why they are working
        hard and barely breaking even.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The pricing formula:</strong>
      </p>
      <div className="bg-brand-gray rounded-xl p-5 my-6 font-mono text-center text-lg">
        Price = (Materials + Labor + Overhead) &times; (1 + Profit Margin)
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Overhead includes everything that is not on a specific job:</strong>{" "}
        vehicle payment, fuel, insurance, phone, tools, licensing fees, office
        supplies, accounting, marketing, and your own salary when you are not
        billing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A healthy contracting business targets 10–20% net profit margin after
        all costs. That means if a job costs you $8,000 in materials, labor, and
        overhead, you should be charging $8,800–$9,600 minimum.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Use Our Calculators</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/calculators/contractor-profit-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Profit Margin Calculator
          </Link>
          <Link
            href="/calculators/hourly-rate/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Hourly Rate Calculator
          </Link>
          <Link
            href="/calculators/self-employment-tax/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Self-Employment Tax Calculator
          </Link>
        </div>
      </div>

      {/* Section 7 */}
      <SectionHeading id="website">
        7. Build Your Contractor Website
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        A website is not optional in 2026. When a homeowner searches
        &quot;plumber near me&quot; or gets your name from a referral, the first thing
        they do is look you up online. No website = no credibility.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Your website needs exactly five things:</strong>
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>What you do</strong> — Clear headline. &quot;Licensed Electrician
          Serving [City]&quot; not &quot;Welcome to our website.&quot;
        </li>
        <li>
          <strong>Service area</strong> — List the cities and towns you serve.
          This helps with local search rankings.
        </li>
        <li>
          <strong>How to contact you</strong> — Phone number prominent on every
          page. Contact form. Business hours.
        </li>
        <li>
          <strong>Photos of your work</strong> — Before and after photos. Job
          site photos. Real photos, not stock images.
        </li>
        <li>
          <strong>Reviews/testimonials</strong> — Link to your Google reviews or
          display quotes from happy customers.
        </li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need a fancy website. A clean, professional, mobile-friendly
        site with your services, service area, and contact info is enough to
        close jobs. You can build one in an afternoon with a website builder.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Which Website Builder Should You Use?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two paths: an all-in-one builder (fastest) or WordPress on shared
        hosting (more flexible, better long-term SEO). Both work for
        contractors. Pick by how much control you want and whether you plan to
        invest in SEO down the road.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-green-500 rounded-xl p-5 relative">
          <span className="absolute -top-3 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            Fastest to launch
          </span>
          <h4 className="font-bold text-brand-blue mb-1 mt-2">Squarespace</h4>
          <p className="text-sm text-gray-700 mb-2">
            Polished templates, hosting included, mobile-responsive out of the
            box. $16&ndash;$33/month. The pick if you want a professional site
            live in an afternoon and never touch code.
          </p>
          <p className="text-xs text-gray-600 mb-3">
            <strong>Best for:</strong> Solo contractors who want done-in-a-day
          </p>
          <a
            href={getTrialUrl("Squarespace")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit Squarespace &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">Wix</h4>
          <p className="text-sm text-gray-700 mb-2">
            Drag-and-drop builder with a free tier. $17&ndash;$36/month for
            premium plans that remove ads and add a custom domain. Easiest UI
            for non-technical users.
          </p>
          <p className="text-xs text-gray-600 mb-3">
            <strong>Best for:</strong> Contractors who want maximum design
            control without coding
          </p>
          <a
            href={getTrialUrl("Wix")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit Wix &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">Bluehost</h4>
          <p className="text-sm text-gray-700 mb-2">
            WordPress hosting recommended by WordPress.org itself. Around
            $3&ndash;$10/month with a free domain for the first year. Best if
            you plan to take SEO seriously and want to own your platform.
          </p>
          <p className="text-xs text-gray-600 mb-3">
            <strong>Best for:</strong> Contractors planning to invest in
            content marketing and SEO
          </p>
          <a
            href={getTrialUrl("Bluehost")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit Bluehost &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">SiteGround</h4>
          <p className="text-sm text-gray-700 mb-2">
            Premium WordPress hosting with faster speeds and better support
            than budget hosts. $3&ndash;$8/month introductory, renews higher.
            Worth it if your site is mission-critical.
          </p>
          <p className="text-xs text-gray-600 mb-3">
            <strong>Best for:</strong> Contractors who already have a working
            WordPress site and want it faster
          </p>
          <a
            href={getTrialUrl("SiteGround")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit SiteGround &rarr;
          </a>
        </div>
      </div>

      <TipBox title="Don't Overthink Your Website">
        <p>
          Perfection is the enemy of done. A basic 3-page site that is live
          today beats a perfect 20-page site that you never finish. Get your
          name, services, and phone number online &mdash; you can improve it
          later. If you&apos;re torn between Squarespace and WordPress, start
          with Squarespace. You can always migrate later if SEO becomes a real
          priority.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="get-customers">
        8. Get Your First Customers
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The best marketing for a new contractor is a combination of free
        methods that build over time and paid methods that generate leads
        immediately. Start with both.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Free Marketing (Start Immediately)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Business Profile</strong> — This is the single most
          important thing you can do. Create and optimize your Google Business
          Profile. This is what shows up in the map pack when someone searches
          &quot;electrician near me.&quot; It is free and drives more leads than anything
          else for local contractors.
        </li>
        <li>
          <strong>Ask for reviews</strong> — After every job, ask the customer
          to leave a Google review. Text them the link. Reviews are the currency
          of local search. 10+ reviews with 4.5+ stars puts you ahead of most
          competitors.
        </li>
        <li>
          <strong>Nextdoor</strong> — Claim your business on Nextdoor. Neighbors
          recommend contractors here constantly.
        </li>
        <li>
          <strong>Facebook</strong> — Create a business page. Post project
          photos. Join local community groups (don&apos;t spam, but mention what you
          do when relevant).
        </li>
        <li>
          <strong>Word of mouth</strong> — Tell everyone you know. Former
          coworkers, family, friends, neighbors. Personal referrals are the
          highest-closing leads in contracting.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Paid Marketing (When You&apos;re Ready)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Local Services Ads (LSA)</strong> — Pay per lead, not
          per click. Google verified badge. Best ROI for most contractors.
          Typical cost: $15–$50 per lead.
        </li>
        <li>
          <strong>Google Ads (Search)</strong> — Target specific keywords like
          &quot;AC repair [city]&quot; or &quot;bathroom remodel [city].&quot; More expensive
          ($20–$80 per click for competitive trades) but high intent.
        </li>
        <li>
          <strong>Home Advisor / Angi</strong> — Shared leads. Quality varies.
          Can work for newer contractors who need volume. Watch your cost per
          acquisition closely.
        </li>
        <li>
          <strong>Thumbtack</strong> — Similar to HomeAdvisor. You choose which
          leads to respond to. Better for service trades.
        </li>
      </ul>

      <TipBox title="The 80/20 of Contractor Marketing">
        <p>
          For most contractors, Google Business Profile + asking for reviews + a
          basic website generates 80% of your leads. Master these three before
          spending money on ads.
        </p>
      </TipBox>

      {/* Section 9 */}
      <SectionHeading id="software">
        9. Set Up Your Business Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need much software when you are starting. But a few tools pay
        for themselves immediately by saving you time and making you look
        professional.
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Scheduling + Invoicing</h4>
              <p className="text-sm text-gray-700 mt-1">
                Send professional invoices, schedule jobs, accept online
                payments. Stops you from chasing checks.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">$29–$149/mo</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Accounting</h4>
              <p className="text-sm text-gray-700 mt-1">
                Track income, expenses, and receipts. Generate profit & loss
                reports. Essential for tax time.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">$0–$30/mo</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Estimating</h4>
              <p className="text-sm text-gray-700 mt-1">
                Build accurate estimates with material and labor costs.
                Convert to invoices with one click.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Built into most tools</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        We have reviewed the best software for every trade. See which tool
        fits your business:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          { name: "Best HVAC Software", href: "/best/hvac-software/" },
          { name: "Best Plumbing Software", href: "/best/plumbing-software/" },
          { name: "Best Electrical Software", href: "/best/electrical-contractor-software/" },
          { name: "Best Roofing Software", href: "/best/roofing-software/" },
          { name: "Best Landscaping Software", href: "/best/landscaping-software/" },
          { name: "Best General Contractor Software", href: "/best/general-contractor-software/" },
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

      {/* Section 10 */}
      <SectionHeading id="scale">
        10. Scale from Solo to Crew
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        At some point, you will hit a ceiling. There are only so many hours in a
        day, and you are the bottleneck. Hiring your first employee or
        subcontractor is how you break through.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>When to hire:</strong> When you are consistently turning down
        work or booking out more than 2–3 weeks. That means demand exceeds your
        capacity — the perfect time to add help.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Employee vs. subcontractor:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Employees</strong> — You control when, where, and how they
          work. You must pay payroll taxes, workers comp, and unemployment
          insurance. More expensive but more control.
        </li>
        <li>
          <strong>Subcontractors (1099)</strong> — They control how they do the
          work. You pay them per job. No payroll taxes on your end. But the IRS
          is strict about classification — you cannot treat an employee as a 1099
          to avoid taxes.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>When you hire employees, you will need:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>Payroll service (compared below)</li>
        <li>Workers compensation insurance (required in most states)</li>
        <li>Unemployment insurance registration with your state</li>
        <li>I-9 and W-4 forms for each employee</li>
        <li>Employer Identification Number (you already have this from LLC setup)</li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Payroll &amp; Accounting Tools for Your First Hire
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The day you hire your first W-2 employee, you need payroll software.
        Doing payroll by hand is the fastest way to file your taxes wrong and
        owe penalties. Pair payroll with accounting from day one so the books
        stay clean.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-green-500 rounded-xl p-5 relative">
          <span className="absolute -top-3 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            Best payroll for small contractors
          </span>
          <h4 className="font-bold text-brand-blue mb-1 mt-2">Gusto</h4>
          <p className="text-sm text-gray-700 mb-2">
            Full-service payroll with auto tax filing, workers comp
            integration, contractor 1099 payments, and benefits. Starts around
            $40/month + $6/employee. The simplest way to run payroll without a
            bookkeeper.
          </p>
          <p className="text-xs text-gray-600 mb-3">
            <strong>Best for:</strong> Contractors hiring their first
            1&ndash;10 employees
          </p>
          <a
            href={getTrialUrl("Gusto")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit Gusto &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">QuickBooks Online</h4>
          <p className="text-sm text-gray-700 mb-2">
            Industry-standard accounting software. Most CPAs and bookkeepers
            already work in it, which saves you hours at tax time. Add
            QuickBooks Payroll if you want one vendor for both. $30&ndash;$200/month.
          </p>
          <p className="text-xs text-gray-600 mb-3">
            <strong>Best for:</strong> Contractors who want one tool for
            books + payroll their CPA already knows
          </p>
          <a
            href={getTrialUrl("QuickBooks")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit QuickBooks &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">FreshBooks</h4>
          <p className="text-sm text-gray-700 mb-2">
            Easier-to-use accounting alternative to QuickBooks. Strong
            invoicing, time tracking, and expense capture. Better for solo
            operators and small crews than QuickBooks. $19&ndash;$60/month.
          </p>
          <p className="text-xs text-gray-600 mb-3">
            <strong>Best for:</strong> Solo contractors who hate QuickBooks&apos;
            complexity
          </p>
          <a
            href={getTrialUrl("FreshBooks")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit FreshBooks &rarr;
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-brand-blue mb-1">Wave</h4>
          <p className="text-sm text-gray-700 mb-2">
            Free accounting and invoicing. Pay only for payment processing
            and payroll add-ons. Genuinely free for the bookkeeping side.
            Limited features, but hard to beat the price for a solo
            contractor.
          </p>
          <p className="text-xs text-gray-600 mb-3">
            <strong>Best for:</strong> Cash-tight solos who just need
            invoicing and basic books
          </p>
          <a
            href={getTrialUrl("Wave")!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Visit Wave &rarr;
          </a>
        </div>
      </div>

      <TipBox title="One Vendor or Two?">
        <p>
          Two solid combos work for most contractors: <strong>QuickBooks +
          QuickBooks Payroll</strong> (one login, one vendor) or
          <strong> Gusto + Xero/FreshBooks</strong> (best-in-class payroll
          paired with friendlier accounting). Don&apos;t over-engineer it
          &mdash; pick a combo and stop shopping.
        </p>
      </TipBox>

      <TipBox title="Start with Subs, Then Hire">
        <p>
          Many contractors start by subcontracting overflow work. This lets you
          test working with someone before committing to a full employee. Once
          you have steady enough work, convert your best sub to an employee.
        </p>
      </TipBox>

      {/* Section 11 */}
      <SectionHeading id="mistakes">
        11. Common Mistakes to Avoid
      </SectionHeading>

      <div className="space-y-4 my-6">
        {[
          {
            mistake: "Pricing too low to win jobs",
            fix: "Competing on price is a race to the bottom. Compete on quality, reliability, and professionalism instead. The customers who only care about price are the worst customers.",
          },
          {
            mistake: "Not getting everything in writing",
            fix: "Every job needs a written contract or proposal. Scope of work, price, payment schedule, timeline, and what is NOT included. This prevents 90% of disputes.",
          },
          {
            mistake: "Skipping insurance",
            fix: "One ladder accident or burst pipe can cost $50K+. Insurance is not optional — it is the cost of doing business.",
          },
          {
            mistake: "Mixing personal and business money",
            fix: "Separate accounts from day one. Mixing finances makes tax time a nightmare and weakens your LLC protection.",
          },
          {
            mistake: "Doing everything yourself",
            fix: "You are a contractor, not a bookkeeper, marketer, and admin assistant. Outsource what you are bad at so you can focus on what makes money.",
          },
          {
            mistake: "Not tracking costs per job",
            fix: "If you don't know what each job actually costs you, you can't know if you are making money. Track materials, labor hours, and overhead per job.",
          },
          {
            mistake: "Neglecting online presence",
            fix: "Your Google Business Profile is more important than a business card. Set it up, post photos, and ask for reviews.",
          },
        ].map((item) => (
          <div key={item.mistake} className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-red-600 mb-1">{item.mistake}</p>
            <p className="text-sm text-gray-700">{item.fix}</p>
          </div>
        ))}
      </div>

      {/* Startup Cost Summary */}
      <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-4">
        Total Startup Costs Summary
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a realistic breakdown of what it costs to start a contracting
        business. Not everyone needs everything on this list — it depends on
        your trade, state, and whether you already own tools.
      </p>

      <CostTable
        rows={[
          { item: "LLC formation + state fee", cost: "$50–$500", notes: "One-time" },
          { item: "Contractor license + exam", cost: "$200–$1,000", notes: "Varies by state/trade" },
          { item: "General liability insurance", cost: "$500–$2,000", notes: "Annual" },
          { item: "Commercial auto insurance", cost: "$1,200–$3,000", notes: "Annual" },
          { item: "Tools and equipment", cost: "$2,000–$15,000", notes: "If you don't already own them" },
          { item: "Vehicle", cost: "$5,000–$40,000", notes: "Used truck/van if needed" },
          { item: "Website", cost: "$0–$400", notes: "Year one (builder + domain)" },
          { item: "Business cards + branding", cost: "$50–$300", notes: "One-time" },
          { item: "Accounting software", cost: "$0–$360", notes: "Annual" },
          { item: "Marketing (first 3 months)", cost: "$0–$1,500", notes: "Google Ads, yard signs, etc." },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Realistic total: $4,000–$20,000 to start
        </p>
        <p className="text-gray-700 text-sm">
          Most solo contractors can start for under $10,000 if they already have
          tools and a vehicle. The biggest variable is equipment — a landscaper
          starting from scratch needs more than an electrician who already owns
          hand tools from their apprenticeship.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-brand-blue rounded-xl p-6 my-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Use our free tools to plan your business, price your work, and
          estimate your taxes. Everything you need is right here.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/calculators/"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse All Calculators
          </Link>
          <Link
            href="/best/general-contractor-software/"
            className="inline-block bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Compare Software
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}

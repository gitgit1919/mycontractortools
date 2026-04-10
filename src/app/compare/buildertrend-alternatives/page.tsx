import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Best Buildertrend Alternatives (2026) — 5 Options for Builders & GCs",
  description:
    "Looking for Buildertrend alternatives? We compare Procore, Jobber, Contractor Foreman, Houzz Pro, and CompanyCam — with real pricing and honest recommendations for builders and general contractors.",
};

const alternatives = [
  {
    name: "Procore",
    price: "Custom pricing",
    bestFor: "Commercial and large general contractors",
    projectMgmt: "Yes — enterprise-grade",
    scheduling: "Yes — Gantt charts",
    budgeting: "Yes — detailed cost tracking",
    clientPortal: "Yes — owner portal",
    mobileApp: "Full-featured",
    keyStrength: "The industry standard for commercial construction. Deep project management, RFIs, submittals, change orders, and drawing management. If you run large commercial projects with multiple subcontractors, Procore is built for your workflow.",
    keyWeakness: "Very expensive — pricing is based on annual construction volume, and most small builders will not be able to justify the cost. Overkill for residential work.",
    link: null,
  },
  {
    name: "Jobber",
    price: "$29-$149/mo",
    bestFor: "Residential service contractors (not builders)",
    projectMgmt: "Basic — job tracking",
    scheduling: "Yes — drag-and-drop",
    budgeting: "Basic — quoting and invoicing",
    clientPortal: "Yes — Client Hub",
    mobileApp: "Excellent",
    keyStrength: "Affordable, easy to learn, and great for service-based contractors. If your work is mostly same-day or short-duration jobs (HVAC, plumbing, electrical, cleaning), Jobber handles scheduling, quoting, invoicing, and payments better than Buildertrend.",
    keyWeakness: "Not built for construction project management. No Gantt charts, no daily logs, no change order workflows. If you manage multi-week building projects, Jobber will feel too basic.",
    link: null,
  },
  {
    name: "Contractor Foreman",
    price: "$49+/mo",
    bestFor: "Budget alternative with daily logs and timesheets",
    projectMgmt: "Yes — full-featured",
    scheduling: "Yes — Gantt and calendar",
    budgeting: "Yes — estimates and cost tracking",
    clientPortal: "Yes",
    mobileApp: "iOS + Android",
    keyStrength: "The most affordable full-featured construction management tool. Includes daily logs, timesheets, change orders, punch lists, safety checklists, and document management — all at a fraction of Buildertrend&apos;s price. Great for small builders who need real project management on a budget.",
    keyWeakness: "Less polished interface than Buildertrend. Fewer integrations with third-party tools. Customer support can be slower during peak times.",
    link: null,
  },
  {
    name: "Houzz Pro",
    price: "$65+/mo",
    bestFor: "Design-build firms and remodelers",
    projectMgmt: "Yes — with visual tools",
    scheduling: "Yes — timeline view",
    budgeting: "Yes — estimates with markups",
    clientPortal: "Yes — with 3D tools",
    mobileApp: "iOS + Android",
    keyStrength: "Combines project management with Houzz&apos;s massive home design marketplace. Built-in lead generation, mood boards, 3D floor plans, and a client portal that lets homeowners visualize the project. If your business depends on design and client presentations, Houzz Pro integrates marketing and project management in a way no other tool does.",
    keyWeakness: "Not as strong on the construction management side — daily logs, subcontractor coordination, and cost tracking are less robust than Buildertrend. Better for design-build than pure construction.",
    link: null,
  },
  {
    name: "CompanyCam",
    price: "$19/user/mo",
    bestFor: "Photo documentation (complement, not replacement)",
    projectMgmt: "No — photo-focused only",
    scheduling: "No",
    budgeting: "No",
    clientPortal: "Yes — photo sharing",
    mobileApp: "Excellent — core product",
    keyStrength: "The best photo documentation tool for contractors. Automatic GPS and timestamp tagging, before/after comparisons, photo annotations, and organized project timelines. Solves the specific problem of documenting job progress, which Buildertrend&apos;s photo features do not handle as well.",
    keyWeakness: "Not a Buildertrend replacement — it only handles photos. You still need a project management tool alongside it. Think of CompanyCam as a powerful add-on, not a standalone solution.",
    link: null,
  },
];

const comparisonTable = [
  { feature: "Starting Price", values: ["Custom", "$29/mo", "$49/mo", "$65/mo", "$19/user/mo"] },
  { feature: "Best For", values: ["Commercial GCs", "Service contractors", "Budget builders", "Design-build", "Photo docs"] },
  { feature: "Project Management", values: ["Enterprise", "Basic", "Full-featured", "Good", "No"] },
  { feature: "Daily Logs", values: ["Yes", "No", "Yes", "Limited", "No"] },
  { feature: "Gantt Charts", values: ["Yes", "No", "Yes", "Timeline view", "No"] },
  { feature: "Client Portal", values: ["Yes", "Yes", "Yes", "Yes (3D tools)", "Photo sharing"] },
  { feature: "Change Orders", values: ["Yes", "No", "Yes", "Yes", "No"] },
  { feature: "Mobile App", values: ["Full-featured", "Excellent", "Good", "Good", "Excellent"] },
];

const altNames = ["Procore", "Jobber", "Contractor Foreman", "Houzz Pro", "CompanyCam"];

export default function BuildertrendAlternatives() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/buildertrend-alternatives/" className="text-gray-700">Buildertrend Alternatives</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Best Buildertrend Alternatives (2026) — 5 Options for Builders &amp; GCs
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Buildertrend is a powerful construction management platform, but its pricing ($99-$699/mo)
          and complexity are not a fit for every builder. Whether you need something simpler,
          cheaper, more specialized, or enterprise-grade, these five alternatives deserve a look.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Why people look for alternatives */}
      <section className="bg-brand-gray rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-3">Why Builders Look for Buildertrend Alternatives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-brand-blue mb-1">Too Expensive</h3>
            <p className="text-sm text-gray-700">
              Buildertrend ranges from $99 to $699/mo. For small builders running a handful of
              projects, that monthly cost is hard to justify when cheaper options exist.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-brand-blue mb-1">Too Complex</h3>
            <p className="text-sm text-gray-700">
              Buildertrend has dozens of features. If you only need scheduling, daily logs, and
              basic client communication, you are paying for complexity you will never use.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-brand-blue mb-1">Overkill for Small Builders</h3>
            <p className="text-sm text-gray-700">
              Solo builders and two-person crews do not need enterprise project management. A
              simpler tool with daily logs and timesheets may be all you need.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-brand-blue mb-1">Want Simpler Project Management</h3>
            <p className="text-sm text-gray-700">
              Some builders just want to track schedules, share updates with clients, and
              manage documents without navigating a complex platform.
            </p>
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-brand-blue text-white">
              <tr>
                <th className="text-left p-3 font-semibold">Feature</th>
                {altNames.map((name) => (
                  <th key={name} className="text-left p-3 font-semibold">{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  {row.values.map((val, j) => (
                    <td key={j} className="p-3 text-gray-700">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed sections for each alternative */}
      {alternatives.map((alt, index) => (
        <section key={alt.name} className="mb-10">
          <h2 className="text-2xl font-bold text-brand-blue mb-2">
            {index + 1}. {alt.name} ({alt.price}) — Best for {alt.bestFor}
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-4">
              <div><span className="font-medium text-gray-500">Project Mgmt:</span> <span className="text-gray-700">{alt.projectMgmt}</span></div>
              <div><span className="font-medium text-gray-500">Scheduling:</span> <span className="text-gray-700">{alt.scheduling}</span></div>
              <div><span className="font-medium text-gray-500">Budgeting:</span> <span className="text-gray-700">{alt.budgeting}</span></div>
              <div><span className="font-medium text-gray-500">Client Portal:</span> <span className="text-gray-700">{alt.clientPortal}</span></div>
              <div><span className="font-medium text-gray-500">Mobile App:</span> <span className="text-gray-700">{alt.mobileApp}</span></div>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-green-700 text-sm mb-1">Key Strength</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{alt.keyStrength}</p>
              </div>
              <div>
                <h3 className="font-semibold text-red-700 text-sm mb-1">Key Weakness</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{alt.keyWeakness}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* When to stick with Buildertrend */}
      <section className="mb-10 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-3">When to Stick with Buildertrend</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Buildertrend is still the right choice for many builders. Consider staying if:
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>You are a residential builder or remodeler managing multiple active projects simultaneously</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>You need robust client communication — selections, change orders, and a homeowner portal</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>Your team has already learned Buildertrend and switching costs would be significant</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>You need financial tools — detailed budgeting, purchase orders, and lien waiver tracking</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>You want a mature, well-supported platform with a large user community</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>You manage subcontractors and need scheduling, bids, and document sharing in one place</li>
        </ul>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-3">
          The right Buildertrend alternative depends on why you are looking. Procore is for
          commercial contractors who need enterprise-grade tools. Contractor Foreman delivers real
          construction management features at a fraction of the cost. Jobber is better if you are
          a service contractor, not a builder. Houzz Pro shines for design-build firms. And
          CompanyCam solves one specific problem — photo documentation — better than anyone.
        </p>
        <p className="text-white/90 leading-relaxed">
          If cost is the main issue, start with Contractor Foreman. If complexity is the problem,
          figure out which features you actually use and find the simplest tool that covers them.
        </p>
      </section>

      {/* Related comparisons */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Related Comparisons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/compare/buildertrend-vs-coconstruct/" className="bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-orange transition-colors">
            <span className="text-sm font-medium text-brand-blue">Buildertrend vs CoConstruct</span>
          </Link>
          <Link href="/best/general-contractor-software/" className="bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-orange transition-colors">
            <span className="text-sm font-medium text-brand-blue">Best General Contractor Software</span>
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

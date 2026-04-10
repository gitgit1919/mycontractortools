import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Best Jobber Alternatives (2026) — 6 Competitors Compared",
  description:
    "Looking for Jobber alternatives? We compare Housecall Pro, ServiceTitan, FieldEdge, Workiz, JobNimbus, and GorillaDesk — with real pricing, features, and honest recommendations for contractors.",
};

const alternatives = [
  {
    name: "Housecall Pro",
    price: "$49+/mo",
    bestFor: "Marketing automation and online booking",
    scheduling: "Yes — drag-and-drop",
    invoicing: "Yes — with automated follow-ups",
    mobileApp: "Excellent",
    crm: "Yes — with automated marketing",
    pricebook: "No",
    keyStrength: "Built-in online booking, automated email/postcard marketing, and strong review management. If getting more customers is your priority, Housecall Pro does more out of the box than Jobber.",
    keyWeakness: "Per-user pricing gets expensive as you grow. Reporting is more limited than ServiceTitan or FieldEdge.",
    link: "/compare/jobber-vs-housecall-pro/",
  },
  {
    name: "ServiceTitan",
    price: "$398+/mo",
    bestFor: "Large operations wanting everything",
    scheduling: "Yes — advanced dispatch board",
    invoicing: "Yes — with pricebook integration",
    mobileApp: "Full-featured",
    crm: "Yes — enterprise-grade",
    pricebook: "Yes — built-in",
    keyStrength: "The most powerful platform in the industry. Pricebook, memberships, marketing ROI tracking, call tracking, payroll integration, and deep reporting. Built for shops doing $1M+ in revenue.",
    keyWeakness: "Very expensive, long onboarding (8-12 weeks typical), and overkill for small shops. You need dedicated admin time to get full value.",
    link: "/compare/jobber-vs-servicetitan/",
  },
  {
    name: "FieldEdge",
    price: "~$100+/user/mo",
    bestFor: "Pricebook and QuickBooks Desktop integration",
    scheduling: "Yes — dispatch board",
    invoicing: "Yes — from pricebook",
    mobileApp: "iOS + Android",
    crm: "Basic",
    pricebook: "Yes — built-in flat-rate",
    keyStrength: "The best flat-rate pricebook in the business and the strongest QuickBooks Desktop integration. If your HVAC or plumbing shop runs on flat-rate pricing and QB Desktop, FieldEdge is hard to beat.",
    keyWeakness: "No public pricing — requires a sales call. Per-user cost adds up fast. Less modern UI than Jobber or Housecall Pro.",
    link: "/compare/jobber-vs-fieldedge/",
  },
  {
    name: "Workiz",
    price: "$49+/mo",
    bestFor: "Phone-based service businesses",
    scheduling: "Yes — calendar view",
    invoicing: "Yes",
    mobileApp: "iOS + Android",
    crm: "Yes — with call tracking",
    pricebook: "No",
    keyStrength: "Built-in phone system with call tracking, IVR, and automatic call recording. If your business lives and dies by incoming phone calls (locksmiths, garage door, appliance repair), Workiz gives you tools Jobber simply does not have.",
    keyWeakness: "Smaller ecosystem and fewer integrations than Jobber. Not as polished for field crews who primarily use the mobile app.",
    link: null,
  },
  {
    name: "JobNimbus",
    price: "$149+/mo",
    bestFor: "Roofers (aerial measurements and insurance claims)",
    scheduling: "Yes — board and calendar views",
    invoicing: "Yes",
    mobileApp: "iOS + Android",
    crm: "Yes — Kanban-style boards",
    pricebook: "No",
    keyStrength: "Purpose-built for roofing contractors. Integrates with EagleView and GAF for aerial measurements, handles insurance claims workflows, and includes material ordering. The dominant CRM in roofing.",
    keyWeakness: "Very roofing-specific — not a great fit for general service contractors. If you are not a roofer, most of JobNimbus&apos;s best features will not apply to you.",
    link: "/compare/jobber-vs-jobnimbus/",
  },
  {
    name: "GorillaDesk",
    price: "$49+/mo",
    bestFor: "Pest control and lawn care",
    scheduling: "Yes — route optimization",
    invoicing: "Yes",
    mobileApp: "iOS + Android",
    crm: "Yes",
    pricebook: "No",
    keyStrength: "Built specifically for recurring-service businesses like pest control and lawn care. Route optimization, chemical tracking, service diagrams, and recurring scheduling are all first-class features — not afterthoughts.",
    keyWeakness: "Very niche. If you are not in pest control, lawn care, or a similar recurring-route business, GorillaDesk will feel limiting compared to Jobber.",
    link: null,
  },
];

const comparisonTable = [
  { feature: "Starting Price", values: ["$49+/mo", "$398+/mo", "~$100+/user", "$49+/mo", "$149+/mo", "$49+/mo"] },
  { feature: "Best For", values: ["Marketing", "Large shops", "Pricebook", "Phone calls", "Roofing", "Pest/Lawn"] },
  { feature: "Pricebook", values: ["No", "Yes", "Yes", "No", "No", "No"] },
  { feature: "Marketing Tools", values: ["Strong", "Enterprise", "Limited", "Call tracking", "Basic", "Basic"] },
  { feature: "Mobile App", values: ["Excellent", "Full-featured", "Good", "Good", "Good", "Good"] },
  { feature: "Ease of Use", values: ["Easy", "Complex", "Moderate", "Easy", "Easy", "Easy"] },
  { feature: "QuickBooks", values: ["Online", "Online", "Online + Desktop", "Online", "Online", "Online"] },
  { feature: "Free Trial", values: ["14 days", "No", "Demo only", "Yes", "Yes", "14 days"] },
];

const altNames = ["Housecall Pro", "ServiceTitan", "FieldEdge", "Workiz", "JobNimbus", "GorillaDesk"];

export default function JobberAlternatives() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compare/jobber-alternatives/" className="text-gray-700">Jobber Alternatives</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Best Jobber Alternatives (2026) — 6 Competitors Compared
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Jobber is great for many contractors, but it is not the right fit for everyone. Whether you
          need more marketing features, trade-specific tools, a built-in pricebook, or integrated
          phone systems, these six alternatives are worth a close look.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: April 2026</p>
      </header>

      {/* Why people look for alternatives */}
      <section className="bg-brand-gray rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-3">Why Contractors Look for Jobber Alternatives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-brand-blue mb-1">Need More Features</h3>
            <p className="text-sm text-gray-700">
              Jobber covers the basics well, but some contractors outgrow it. No built-in pricebook,
              limited marketing automation, and basic reporting push growing shops elsewhere.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-brand-blue mb-1">Need Trade-Specific Tools</h3>
            <p className="text-sm text-gray-700">
              Jobber is built for general service contractors. Roofers need aerial measurement
              integrations. Pest control needs chemical tracking. HVAC needs pricebooks.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-brand-blue mb-1">Want Integrated Marketing</h3>
            <p className="text-sm text-gray-700">
              Housecall Pro and ServiceTitan include automated email campaigns, postcard marketing,
              review management, and call tracking that Jobber does not offer natively.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-brand-blue mb-1">Need a Pricebook</h3>
            <p className="text-sm text-gray-700">
              Flat-rate pricing is standard in HVAC and plumbing. Jobber does not include a pricebook,
              forcing shops to use separate tools or manual price lists.
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
              <div><span className="font-medium text-gray-500">Scheduling:</span> <span className="text-gray-700">{alt.scheduling}</span></div>
              <div><span className="font-medium text-gray-500">Invoicing:</span> <span className="text-gray-700">{alt.invoicing}</span></div>
              <div><span className="font-medium text-gray-500">Mobile App:</span> <span className="text-gray-700">{alt.mobileApp}</span></div>
              <div><span className="font-medium text-gray-500">CRM:</span> <span className="text-gray-700">{alt.crm}</span></div>
              <div><span className="font-medium text-gray-500">Pricebook:</span> <span className="text-gray-700">{alt.pricebook}</span></div>
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
          {alt.link && (
            <Link
              href={alt.link}
              className="inline-block text-sm font-medium text-brand-orange hover:underline"
            >
              Read full {alt.name} vs Jobber comparison &rarr;
            </Link>
          )}
        </section>
      ))}

      {/* When to stick with Jobber */}
      <section className="mb-10 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-3">When to Stick with Jobber</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Jobber is still a great choice for many contractors. Consider staying if:
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>You are a small to mid-size service contractor (1-15 employees) and the software covers your needs</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>Budget is a priority — Jobber&apos;s per-plan pricing is more predictable than per-user tools</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>You value simplicity and ease of use over advanced features</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>You serve multiple trades and need a generalist tool, not a specialist one</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>You want a customer self-service portal (Client Hub) — most alternatives lack this</li>
          <li className="flex items-start"><span className="text-brand-orange font-bold mr-2">-</span>Your team adopted Jobber quickly and switching costs would outweigh the benefits</li>
        </ul>
      </section>

      {/* Bottom line */}
      <section className="mb-10 bg-brand-blue text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
        <p className="text-white/90 leading-relaxed mb-3">
          There is no single &quot;best&quot; Jobber alternative — it depends on what Jobber is missing for
          your business. Housecall Pro wins on marketing. ServiceTitan wins on power (if you can
          afford it). FieldEdge wins on pricebooks and QuickBooks Desktop. Workiz wins for
          phone-heavy businesses. JobNimbus dominates roofing. GorillaDesk owns pest control and
          lawn care.
        </p>
        <p className="text-white/90 leading-relaxed">
          Start by identifying what Jobber is not doing well enough for your operation, then match
          that gap to the alternative that specializes in it.
        </p>
      </section>

      {/* Related comparisons */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Related Comparisons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/compare/jobber-vs-housecall-pro/" className="bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-orange transition-colors">
            <span className="text-sm font-medium text-brand-blue">Jobber vs Housecall Pro</span>
          </Link>
          <Link href="/compare/jobber-vs-servicetitan/" className="bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-orange transition-colors">
            <span className="text-sm font-medium text-brand-blue">Jobber vs ServiceTitan</span>
          </Link>
          <Link href="/compare/jobber-vs-fieldedge/" className="bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-orange transition-colors">
            <span className="text-sm font-medium text-brand-blue">Jobber vs FieldEdge</span>
          </Link>
          <Link href="/compare/jobber-vs-jobnimbus/" className="bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-orange transition-colors">
            <span className="text-sm font-medium text-brand-blue">Jobber vs JobNimbus</span>
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

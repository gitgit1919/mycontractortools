import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

const calculatorGroups = [
  {
    heading: "Trade Calculators",
    items: [
      {
        name: "HVAC Load Calculator",
        href: "/calculators/hvac-load/",
        description: "Calculate heating and cooling loads for residential and commercial buildings.",
        icon: "🌡️",
      },
      {
        name: "Electrical Load Calculator",
        href: "/calculators/electrical-load/",
        description: "Determine total electrical load and service panel size requirements.",
        icon: "⚡",
      },
      {
        name: "Plumbing Pipe Sizing",
        href: "/calculators/plumbing-pipe-sizing/",
        description: "Find the right pipe diameter based on fixture units and flow rates.",
        icon: "🔧",
      },
      {
        name: "Concrete Volume Calculator",
        href: "/calculators/concrete-volume/",
        description: "Calculate cubic yards of concrete for slabs, footings, and columns.",
        icon: "🏗️",
      },
      {
        name: "Roofing Material Calculator",
        href: "/calculators/roofing-material/",
        description: "Estimate shingles, underlayment, and materials by roof area and pitch.",
        icon: "🏠",
      },
      {
        name: "Landscaping Material Calculator",
        href: "/calculators/landscaping-material/",
        description: "Calculate cubic yards of mulch, gravel, topsoil, and other materials.",
        icon: "🌿",
      },
      {
        name: "Drywall Calculator",
        href: "/calculators/drywall/",
        description: "Estimate sheets of drywall, joint compound, and tape needed.",
        icon: "🪵",
      },
      {
        name: "Paint Coverage Calculator",
        href: "/calculators/paint-coverage/",
        description: "Calculate gallons of paint needed based on room dimensions and coats.",
        icon: "🎨",
      },
    ],
  },
  {
    heading: "Business Calculators",
    items: [
      {
        name: "Profit Margin Calculator",
        href: "/calculators/contractor-profit-margin/",
        description: "Calculate gross and net profit margins for jobs and your overall business.",
        icon: "📊",
      },
      {
        name: "Self-Employment Tax Calculator",
        href: "/calculators/self-employment-tax/",
        description: "Estimate your self-employment tax, including Social Security and Medicare.",
        icon: "📋",
      },
      {
        name: "Hourly Rate Calculator",
        href: "/calculators/hourly-rate/",
        description: "Figure out what to charge per hour based on your costs and income goals.",
        icon: "💰",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Free Calculators for
            <span className="text-brand-orange"> Contractors</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            HVAC load, electrical load, concrete, roofing, plumbing, and more.
            Built for tradespeople, by people who understand the trades.
          </p>
          <Link
            href="#calculators"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Browse Calculators
          </Link>
        </div>
      </section>

      {/* Value props */}
      <section className="py-12 bg-brand-gray border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2" aria-hidden="true">✅</div>
              <h2 className="font-bold text-lg mb-1">100% Free</h2>
              <p className="text-gray-600 text-sm">No signup required. No hidden fees. Just open and use.</p>
            </div>
            <div>
              <div className="text-3xl mb-2" aria-hidden="true">🎯</div>
              <h2 className="font-bold text-lg mb-1">Built for the Trades</h2>
              <p className="text-gray-600 text-sm">Not generic math calculators — tools designed for how contractors actually work.</p>
            </div>
            <div>
              <div className="text-3xl mb-2" aria-hidden="true">📱</div>
              <h2 className="font-bold text-lg mb-1">Works on Any Device</h2>
              <p className="text-gray-600 text-sm">Use it on your phone at the job site or on your computer in the office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator grid */}
      <section id="calculators" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {calculatorGroups.map((group) => (
            <div key={group.heading} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-6">
                {group.heading}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.items.map((calc) => (
                  <Link
                    key={calc.href}
                    href={calc.href}
                    className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-orange hover:shadow-md transition-all"
                  >
                    <div className="text-2xl mb-2" aria-hidden="true">{calc.icon}</div>
                    <h3 className="font-semibold text-brand-blue group-hover:text-brand-orange transition-colors mb-1">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-gray-600">{calc.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Email capture */}
      <section className="py-12 bg-brand-gray">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailCapture />
        </div>
      </section>
    </>
  );
}

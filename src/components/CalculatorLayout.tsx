import type { ReactNode } from "react";
import Link from "next/link";
import EmailCapture from "./EmailCapture";

interface RelatedCalc {
  name: string;
  href: string;
}

const relatedByTrade: Record<string, RelatedCalc[]> = {
  HVAC: [
    { name: "HVAC Load Calculator", href: "/calculators/hvac-load/" },
    { name: "CFM & Airflow Calculator", href: "/calculators/cfm-airflow/" },
    { name: "Insulation Calculator", href: "/calculators/insulation/" },
    { name: "Snow Load Calculator", href: "/calculators/snow-load/" },
  ],
  Electrical: [
    { name: "Electrical Load Calculator", href: "/calculators/electrical-load/" },
    { name: "Voltage Drop Calculator", href: "/calculators/voltage-drop/" },
    { name: "Wire Size Calculator", href: "/calculators/wire-size/" },
  ],
  Plumbing: [
    { name: "Plumbing Pipe Sizing", href: "/calculators/plumbing-pipe-sizing/" },
  ],
  Concrete: [
    { name: "Concrete Volume Calculator", href: "/calculators/concrete-volume/" },
    { name: "Concrete Driveway Cost", href: "/calculators/concrete-driveway/" },
    { name: "Concrete Steps Calculator", href: "/calculators/concrete-steps/" },
    { name: "Sonotube Calculator", href: "/calculators/sonotube/" },
    { name: "Rebar Calculator", href: "/calculators/rebar/" },
  ],
  Carpentry: [
    { name: "Wall Framing Calculator", href: "/calculators/framing/" },
    { name: "Stair Calculator", href: "/calculators/stair/" },
    { name: "Deck Calculator", href: "/calculators/deck/" },
    { name: "Beam Span Calculator", href: "/calculators/beam-span/" },
    { name: "Floor Joist Calculator", href: "/calculators/floor-joist/" },
    { name: "Rafter Length Calculator", href: "/calculators/rafter/" },
    { name: "Board Foot Calculator", href: "/calculators/board-foot/" },
    { name: "Miter Angle Calculator", href: "/calculators/miter-angle/" },
    { name: "Baluster Calculator", href: "/calculators/baluster/" },
    { name: "Plywood Calculator", href: "/calculators/plywood/" },
  ],
  Roofing: [
    { name: "Roofing Material Calculator", href: "/calculators/roofing-material/" },
    { name: "Roof Pitch Calculator", href: "/calculators/roof-pitch/" },
    { name: "Snow Load Calculator", href: "/calculators/snow-load/" },
    { name: "Gutter Calculator", href: "/calculators/gutter/" },
  ],
  Landscaping: [
    { name: "Landscaping Material Calculator", href: "/calculators/landscaping-material/" },
    { name: "Gravel Calculator", href: "/calculators/gravel/" },
    { name: "Paver Calculator", href: "/calculators/paver/" },
    { name: "French Drain Calculator", href: "/calculators/french-drain/" },
    { name: "Retaining Wall Calculator", href: "/calculators/retaining-wall/" },
    { name: "Sand Calculator", href: "/calculators/sand/" },
  ],
  Masonry: [
    { name: "Brick Calculator", href: "/calculators/brick/" },
    { name: "Concrete Block Calculator", href: "/calculators/concrete-block/" },
    { name: "Mortar Calculator", href: "/calculators/mortar/" },
  ],
  Flooring: [
    { name: "Tile & Flooring Calculator", href: "/calculators/tile-flooring/" },
    { name: "Carpet Calculator", href: "/calculators/carpet/" },
  ],
  Painting: [
    { name: "Paint Coverage Calculator", href: "/calculators/paint-coverage/" },
    { name: "Wallpaper Calculator", href: "/calculators/wallpaper/" },
  ],
  Business: [
    { name: "Profit Margin Calculator", href: "/calculators/contractor-profit-margin/" },
    { name: "Markup vs Margin Calculator", href: "/calculators/markup-margin/" },
    { name: "Self-Employment Tax Calculator", href: "/calculators/self-employment-tax/" },
    { name: "Hourly Rate Calculator", href: "/calculators/hourly-rate/" },
  ],
  General: [
    { name: "Square Footage Calculator", href: "/calculators/square-footage/" },
    { name: "Drywall Calculator", href: "/calculators/drywall/" },
    { name: "Insulation Calculator", href: "/calculators/insulation/" },
    { name: "Siding Calculator", href: "/calculators/siding/" },
    { name: "Sand Calculator", href: "/calculators/sand/" },
  ],
  Paving: [
    { name: "Asphalt Calculator", href: "/calculators/asphalt/" },
    { name: "Concrete Driveway Cost", href: "/calculators/concrete-driveway/" },
    { name: "Gravel Calculator", href: "/calculators/gravel/" },
  ],
};

const softwareByTrade: Record<string, { name: string; href: string }> = {
  HVAC: { name: "Best HVAC Software", href: "/best/hvac-software/" },
  Electrical: { name: "Best Electrical Software", href: "/best/electrical-contractor-software/" },
  Plumbing: { name: "Best Plumbing Software", href: "/best/plumbing-software/" },
  Roofing: { name: "Best Roofing Software", href: "/best/roofing-software/" },
  Landscaping: { name: "Best Landscaping Software", href: "/best/landscaping-software/" },
  General: { name: "Best GC Software", href: "/best/general-contractor-software/" },
};

interface CalculatorLayoutProps {
  title: string;
  description: string;
  trade: string;
  children: ReactNode;
  howToUse: string;
  formula?: string;
  disclaimer?: string;
}

export default function CalculatorLayout({
  title,
  description,
  trade,
  children,
  howToUse,
  formula,
  disclaimer,
}: CalculatorLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          {title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </header>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8 mb-8">
        {children}
      </div>

      {/* Get Quotes CTA */}
      <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-green-800 mb-1">Need a Contractor?</h3>
          <p className="text-sm text-green-700">
            Get free quotes from licensed {trade.toLowerCase() !== "business" && trade.toLowerCase() !== "general" ? trade.toLowerCase() + " " : ""}contractors in your area. No obligation, no hassle.
          </p>
        </div>
        <a
          href="https://getcontractorquotes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap text-sm"
        >
          Get Free Quotes
        </a>
      </div>

      <section className="mb-8" aria-labelledby="how-to-use">
        <h2 id="how-to-use" className="text-2xl font-bold text-brand-blue mb-3">
          How to Use This Calculator
        </h2>
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
          <p>{howToUse}</p>
        </div>
      </section>

      {formula && (
        <section className="mb-8 bg-gray-50 rounded-xl p-6" aria-labelledby="formula">
          <h2 id="formula" className="text-xl font-bold text-brand-blue mb-2">
            Formula Used
          </h2>
          <p className="text-gray-700 font-mono text-sm">{formula}</p>
        </section>
      )}

      {/* Related Calculators */}
      {relatedByTrade[trade] && relatedByTrade[trade].length > 1 && (
        <section className="mb-8" aria-labelledby="related-calcs">
          <h2 id="related-calcs" className="text-xl font-bold text-brand-blue mb-3">
            Related {trade} Calculators
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {relatedByTrade[trade]
              .filter((c) => !title.includes(c.name.replace(" Calculator", "")))
              .slice(0, 6)
              .map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium text-brand-blue"
                >
                  {calc.name}
                </Link>
              ))}
          </div>
          {softwareByTrade[trade] && (
            <Link
              href={softwareByTrade[trade].href}
              className="inline-block mt-3 text-sm text-brand-orange hover:underline"
            >
              {softwareByTrade[trade].name} →
            </Link>
          )}
        </section>
      )}

      <div className="mb-8">
        <EmailCapture
          trade={trade}
          heading={`Free Software Guide for ${trade} Professionals`}
          description={`Get our free guide comparing the best software tools for ${trade.toLowerCase()} businesses — with real pricing and honest recommendations.`}
        />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-amber-900">
        <p className="font-semibold mb-1">Disclaimer</p>
        <p>
          {disclaimer ||
            "This calculator is for estimation purposes only. Results may vary based on local conditions, materials, and building codes. Always consult a licensed professional before making decisions based on these calculations. MyContractorTools is not responsible for any errors or omissions."}
        </p>
      </div>
    </div>
  );
}

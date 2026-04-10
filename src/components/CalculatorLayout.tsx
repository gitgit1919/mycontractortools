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
    { name: "Hourly Rate Calculator", href: "/calculators/hourly-rate/" },
    { name: "Crew Day Cost Calculator", href: "/calculators/crew-day-cost/" },
    { name: "Max Lead Cost Calculator", href: "/calculators/lead-cost/" },
    { name: "W-2 vs 1099 Employee Cost", href: "/calculators/employee-true-cost/" },
    { name: "Self-Employment Tax Calculator", href: "/calculators/self-employment-tax/" },
    { name: "Software Cost Calculator", href: "/calculators/software-cost/" },
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
  Painting: { name: "Best Painting Software", href: "/best/painting-software/" },
  Flooring: { name: "Best Flooring Software", href: "/best/flooring-software/" },
  Concrete: { name: "Best Concrete Software", href: "/best/concrete-contractor-software/" },
  Carpentry: { name: "Best GC Software", href: "/best/general-contractor-software/" },
  Masonry: { name: "Best Concrete Software", href: "/best/concrete-contractor-software/" },
  Paving: { name: "Best GC Software", href: "/best/general-contractor-software/" },
};

const softwareBridgeByTrade: Record<string, { hook: string; quizNote: string }> = {
  HVAC: {
    hook: "Tired of calculating loads by hand? The right HVAC software automates sizing, generates instant quotes, and tracks maintenance agreements — so you close more jobs faster.",
    quizNote: "Not sure which HVAC software fits your shop?",
  },
  Electrical: {
    hook: "Still doing panel schedules on paper? Electrical contractor software handles load calculations, permit tracking, and invoicing — so you spend less time in the office and more time on the job.",
    quizNote: "Not sure which software fits your electrical business?",
  },
  Plumbing: {
    hook: "Managing service calls with spreadsheets? Plumbing software handles dispatching, flat-rate pricing, and invoicing from one app — so your techs can focus on the work.",
    quizNote: "Not sure which software fits your plumbing business?",
  },
  Roofing: {
    hook: "Still measuring roofs by hand and writing estimates in the truck? Roofing software handles aerial measurements, material ordering, and customer follow-ups automatically.",
    quizNote: "Not sure which software fits your roofing company?",
  },
  Landscaping: {
    hook: "Spending hours planning routes and chasing invoices? Landscaping software optimizes your routes, automates recurring billing, and lets your crew clock in from their phones.",
    quizNote: "Not sure which software fits your landscaping business?",
  },
  Concrete: {
    hook: "Great at pouring concrete but buried in paperwork? The right software handles estimating, scheduling, and invoicing — so you can focus on the pour, not the paperwork.",
    quizNote: "Not sure which software fits your concrete business?",
  },
  Carpentry: {
    hook: "Juggling estimates, schedules, and invoices across multiple projects? Contractor software keeps everything in one place — quotes, change orders, sub schedules, and payments.",
    quizNote: "Not sure which software fits your business?",
  },
  General: {
    hook: "Running your business on sticky notes and spreadsheets? Contractor software handles scheduling, estimating, and invoicing from your phone — so nothing falls through the cracks.",
    quizNote: "Not sure which software fits your business?",
  },
  Business: {
    hook: "Want software that handles estimates, invoicing, and scheduling so you can focus on growing your business? Find the right tool for your trade and team size.",
    quizNote: "Not sure which software fits your business?",
  },
  Painting: {
    hook: "Tired of writing estimates on the tailgate? Painting software calculates coverage, generates professional quotes, and follows up with customers automatically.",
    quizNote: "Not sure which software fits your painting business?",
  },
  Flooring: {
    hook: "Still calculating material by hand and tracking jobs on paper? Flooring software handles room-by-room scheduling, material ordering, and customer communication in one app.",
    quizNote: "Not sure which software fits your flooring business?",
  },
  Masonry: {
    hook: "Great at laying block but buried in paperwork? Contractor software handles estimating, scheduling, and invoicing — so you can focus on the work, not the office.",
    quizNote: "Not sure which software fits your business?",
  },
  Paving: {
    hook: "Managing paving jobs with spreadsheets and phone calls? Contractor software streamlines scheduling, estimating, and crew management from one app.",
    quizNote: "Not sure which software fits your business?",
  },
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

      {/* Get Quotes CTA - subtle, for homeowners */}
      <p className="mb-8 text-sm text-gray-500">
        Are you a homeowner looking for help with a project?{" "}
        <a
          href="https://getcontractorquotes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange hover:underline"
        >
          Get free quotes from licensed {trade.toLowerCase() !== "business" && trade.toLowerCase() !== "general" ? trade.toLowerCase() + " " : ""}contractors in your area
        </a>
        .
      </p>

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

      {/* Software bridge — contextual CTA connecting calculators to software */}
      {softwareBridgeByTrade[trade] && (
        <section className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {softwareBridgeByTrade[trade].hook}
          </p>
          <div className="flex flex-wrap gap-3">
            {softwareByTrade[trade] && (
              <Link
                href={softwareByTrade[trade].href}
                className="inline-flex items-center gap-1 text-sm font-medium bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-brand-blue/90 transition-colors"
              >
                Compare {trade === "Business" ? "" : trade + " "}Software Options
              </Link>
            )}
            <Link
              href="/calculators/software-quiz/"
              className="inline-flex items-center gap-1 text-sm font-medium border border-brand-blue text-brand-blue px-4 py-2 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
            >
              {softwareBridgeByTrade[trade].quizNote} Take the quiz
            </Link>
          </div>
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

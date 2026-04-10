"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Trade =
  | "HVAC"
  | "Plumbing"
  | "Electrical"
  | "Roofing"
  | "Landscaping"
  | "General Contractor"
  | "Painting"
  | "Flooring"
  | "Concrete"
  | "Pest Control"
  | "Solar"
  | "Cleaning"
  | "Fencing"
  | "Other";

type TeamSize = "solo" | "2-5" | "6-15" | "16-50" | "50+";

type Revenue = "under150k" | "150k-500k" | "500k-1.5m" | "1.5m-5m" | "5m+";

type Priority =
  | "easy"
  | "cheap"
  | "dispatching"
  | "pricebook"
  | "marketing"
  | "quoting"
  | "portal"
  | "inventory";

type CurrentSoftware =
  | "none"
  | "QuickBooks"
  | "ServiceTitan"
  | "Jobber"
  | "Housecall Pro"
  | "FieldEdge"
  | "Other";

interface Answers {
  trade: Trade | null;
  teamSize: TeamSize | null;
  revenue: Revenue | null;
  priorities: Priority[];
  currentSoftware: CurrentSoftware | null;
}

interface Recommendation {
  software: string;
  reason: string;
  monthlyCost: string;
  features: string[];
  bestPageLink: string | null;
  bestPageLabel: string | null;
  compareLink: string | null;
  compareLabel: string | null;
  tradeNote: string | null;
}

/* ------------------------------------------------------------------ */
/*  Option data                                                        */
/* ------------------------------------------------------------------ */

const trades: { value: Trade; label: string }[] = [
  { value: "HVAC", label: "HVAC" },
  { value: "Plumbing", label: "Plumbing" },
  { value: "Electrical", label: "Electrical" },
  { value: "Roofing", label: "Roofing" },
  { value: "Landscaping", label: "Landscaping" },
  { value: "General Contractor", label: "General Contractor" },
  { value: "Painting", label: "Painting" },
  { value: "Flooring", label: "Flooring" },
  { value: "Concrete", label: "Concrete" },
  { value: "Pest Control", label: "Pest Control" },
  { value: "Solar", label: "Solar" },
  { value: "Cleaning", label: "Cleaning" },
  { value: "Fencing", label: "Fencing" },
  { value: "Other", label: "Other" },
];

const teamSizes: { value: TeamSize; label: string }[] = [
  { value: "solo", label: "Just me" },
  { value: "2-5", label: "2-5 employees" },
  { value: "6-15", label: "6-15 employees" },
  { value: "16-50", label: "16-50 employees" },
  { value: "50+", label: "50+" },
];

const revenues: { value: Revenue; label: string }[] = [
  { value: "under150k", label: "Under $150K (startup)" },
  { value: "150k-500k", label: "$150K - $500K" },
  { value: "500k-1.5m", label: "$500K - $1.5M" },
  { value: "1.5m-5m", label: "$1.5M - $5M" },
  { value: "5m+", label: "$5M+" },
];

const priorities: { value: Priority; label: string }[] = [
  { value: "easy", label: "Easy to learn" },
  { value: "cheap", label: "Lowest price" },
  { value: "dispatching", label: "Best dispatching" },
  { value: "pricebook", label: "Flat-rate pricebook" },
  { value: "marketing", label: "Marketing & reviews" },
  { value: "quoting", label: "Professional quoting" },
  { value: "portal", label: "Customer portal" },
  { value: "inventory", label: "Inventory tracking" },
];

const currentSoftwareOptions: { value: CurrentSoftware; label: string }[] = [
  { value: "none", label: "No — this is my first time" },
  { value: "QuickBooks", label: "Yes — switching from QuickBooks" },
  { value: "ServiceTitan", label: "Yes — switching from ServiceTitan" },
  { value: "Jobber", label: "Yes — switching from Jobber" },
  { value: "Housecall Pro", label: "Yes — switching from Housecall Pro" },
  { value: "FieldEdge", label: "Yes — switching from FieldEdge" },
  { value: "Other", label: "Yes — switching from something else" },
];

/* ------------------------------------------------------------------ */
/*  Trade → best-page mapping                                          */
/* ------------------------------------------------------------------ */

const tradeBestPages: Partial<Record<Trade, { href: string; label: string }>> = {
  HVAC: { href: "/best/hvac-software/", label: "Best HVAC Software" },
  Plumbing: { href: "/best/plumbing-software/", label: "Best Plumbing Software" },
  Electrical: {
    href: "/best/electrical-contractor-software/",
    label: "Best Electrical Contractor Software",
  },
  Roofing: { href: "/best/roofing-software/", label: "Best Roofing Software" },
  Landscaping: {
    href: "/best/landscaping-software/",
    label: "Best Landscaping Software",
  },
  "General Contractor": {
    href: "/best/general-contractor-software/",
    label: "Best General Contractor Software",
  },
  Painting: { href: "/best/painting-software/", label: "Best Painting Software" },
  "Pest Control": {
    href: "/best/pest-control-software/",
    label: "Best Pest Control Software",
  },
  Cleaning: {
    href: "/best/cleaning-business-software/",
    label: "Best Cleaning Business Software",
  },
};

/* ------------------------------------------------------------------ */
/*  Trade-specific feature lists                                       */
/* ------------------------------------------------------------------ */

const tradeFeatures: Partial<Record<Trade, string[]>> = {
  HVAC: ["Equipment tracking", "Maintenance agreements", "Flat-rate pricebook"],
  Plumbing: ["Flat-rate pricebook", "Photo attachments", "Parts ordering"],
  Electrical: ["Permit tracking", "Code reference", "Estimate templates"],
  Roofing: ["Aerial measurements", "Photo reports", "Storm tracking"],
  Landscaping: ["Route optimization", "Recurring scheduling", "Crew management"],
  "General Contractor": ["Subcontractor management", "Change orders", "Project timelines"],
  Painting: ["Room-by-room estimating", "Color logging", "Before/after photos"],
  Flooring: ["Material calculators", "Room measurements", "Waste tracking"],
  Concrete: ["Volume calculators", "Weather scheduling", "Equipment tracking"],
  "Pest Control": ["Route optimization", "Treatment history", "Recurring service plans"],
  Solar: ["Roof measurements", "Permit management", "Incentive tracking"],
  Cleaning: ["Recurring scheduling", "Checklist templates", "Client communication"],
  Fencing: ["Linear footage estimating", "Material ordering", "Permit tracking"],
  Other: ["Job scheduling", "Invoicing", "Customer management"],
};

/* ------------------------------------------------------------------ */
/*  Recommendation engine                                              */
/* ------------------------------------------------------------------ */

function getRecommendation(answers: Answers): Recommendation {
  const { trade, teamSize, priorities: prios } = answers;
  const revenue = answers.revenue as string | null;
  const hasPriority = (p: Priority) => prios.includes(p);
  const tradeKey = trade ?? "Other";

  const bestPage = trade ? tradeBestPages[trade] ?? null : null;
  const features = tradeFeatures[tradeKey] ?? tradeFeatures["Other"]!;

  // 50+ / $5M+ → ServiceTitan strongly
  if (teamSize === "50+" || revenue === "5m+") {
    return {
      software: "ServiceTitan",
      reason:
        "At your scale, ServiceTitan delivers the enterprise-level dispatching, reporting, and pricebook management that large operations need. Yes, it's expensive — but at your volume the ROI is there.",
      monthlyCost: "Custom enterprise pricing (typically $245+/tech/mo)",
      features: ["Advanced dispatching & routing", "Enterprise reporting dashboard", features[0]],
      bestPageLink: bestPage?.href ?? null,
      bestPageLabel: bestPage?.label ?? null,
      compareLink: null,
      compareLabel: null,
      tradeNote:
        trade === "Roofing"
          ? "Also consider JobNimbus — it's built specifically for roofing contractors with aerial measurement integrations."
          : trade === "Pest Control"
            ? "Also consider GorillaDesk — it's built specifically for pest control with route optimization and treatment tracking."
            : null,
    };
  }

  // 16-50 / $1.5M-$5M → ServiceTitan
  if (teamSize === "16-50" || revenue === "1.5m-5m") {
    return {
      software: "ServiceTitan",
      reason:
        "With a mid-to-large operation, ServiceTitan's dispatching, pricebook, and reporting will help you manage complexity and scale further. Yes, it's expensive, but at your scale the ROI is there.",
      monthlyCost: "Custom pricing (typically $245+/tech/mo)",
      features: ["Multi-crew dispatching", "Flat-rate pricebook", features[0]],
      bestPageLink: bestPage?.href ?? null,
      bestPageLabel: bestPage?.label ?? null,
      compareLink: "/compare/servicetitan-vs-housecall-pro/",
      compareLabel: "ServiceTitan vs Housecall Pro",
      tradeNote:
        trade === "Roofing"
          ? "Also consider JobNimbus — it's purpose-built for roofing with aerial measurement tools and storm-tracking workflows."
          : trade === "Pest Control"
            ? "Also consider GorillaDesk — it's purpose-built for pest control with route optimization and treatment history tracking."
            : null,
    };
  }

  // Pricebook priority → FieldPulse or ServiceTitan
  if (hasPriority("pricebook")) {
    if (revenue === "500k-1.5m" || revenue === "1.5m-5m" || revenue === "5m+") {
      return {
        software: "ServiceTitan",
        reason:
          "ServiceTitan has the most powerful flat-rate pricebook in the industry. At your revenue level, the investment pays for itself through consistent pricing and higher close rates.",
        monthlyCost: "Custom pricing (typically $245+/tech/mo)",
        features: ["Industry-leading pricebook", "Good-better-best options", features[0]],
        bestPageLink: bestPage?.href ?? null,
        bestPageLabel: bestPage?.label ?? null,
        compareLink: null,
        compareLabel: null,
        tradeNote: null,
      };
    }
    return {
      software: "FieldPulse",
      reason:
        "FieldPulse offers a solid flat-rate pricebook at a fraction of ServiceTitan's cost. Great for budget-conscious contractors who want professional pricing presentations.",
      monthlyCost: "$99/mo",
      features: ["Built-in pricebook", "Professional proposals", features[0]],
      bestPageLink: bestPage?.href ?? null,
      bestPageLabel: bestPage?.label ?? null,
      compareLink: null,
      compareLabel: null,
      tradeNote: null,
    };
  }

  // 6-15 / $500K-$1.5M → Housecall Pro or FieldPulse
  if (teamSize === "6-15" || revenue === "500k-1.5m") {
    if (hasPriority("marketing")) {
      return {
        software: "Housecall Pro",
        reason:
          "Housecall Pro's built-in review generation and marketing tools make it the best choice when growing your online reputation is a top priority.",
        monthlyCost: "$129/mo for up to 5 users (Essentials plan)",
        features: ["Automated review requests", "Postcard marketing", features[0]],
        bestPageLink: bestPage?.href ?? null,
        bestPageLabel: bestPage?.label ?? null,
        compareLink: "/compare/jobber-vs-housecall-pro/",
        compareLabel: "Jobber vs Housecall Pro",
        tradeNote:
          trade === "Roofing"
            ? "Also consider JobNimbus — it's built specifically for roofing contractors with aerial measurements and insurance claim workflows."
            : null,
      };
    }
    return {
      software: "Housecall Pro or FieldPulse",
      reason:
        "At your size, both Housecall Pro and FieldPulse offer the dispatching and scheduling power you need. Housecall Pro is better for marketing; FieldPulse is better if you want a built-in pricebook without ServiceTitan pricing.",
      monthlyCost: "Housecall Pro: $129/mo | FieldPulse: $99/mo",
      features: ["Multi-tech dispatching", "Online booking", features[0]],
      bestPageLink: bestPage?.href ?? null,
      bestPageLabel: bestPage?.label ?? null,
      compareLink: "/compare/jobber-vs-housecall-pro/",
      compareLabel: "Jobber vs Housecall Pro",
      tradeNote:
        trade === "Landscaping"
          ? "Route optimization is a game-changer for landscaping crews — make sure whichever tool you pick handles it well."
          : trade === "Roofing"
            ? "Also consider JobNimbus as a roofing-specific alternative with aerial measurement integrations."
            : trade === "Pest Control"
              ? "Also consider GorillaDesk as a pest-control-specific option with route optimization and treatment tracking."
              : null,
    };
  }

  // 2-5 / marketing+reviews priority → Housecall Pro
  if (teamSize === "2-5" && hasPriority("marketing")) {
    return {
      software: "Housecall Pro",
      reason:
        "Housecall Pro's automated review requests and built-in marketing tools make it the best fit when growing your reputation is a top priority.",
      monthlyCost: "$69/mo (Basic) or $129/mo (Essentials)",
      features: ["Automated review requests", "Online booking", features[0]],
      bestPageLink: bestPage?.href ?? null,
      bestPageLabel: bestPage?.label ?? null,
      compareLink: "/compare/jobber-vs-housecall-pro/",
      compareLabel: "Jobber vs Housecall Pro",
      tradeNote: null,
    };
  }

  // 2-5 / $150K-$500K / general needs → Jobber Connect or Housecall Pro
  if (teamSize === "2-5" || revenue === "150k-500k") {
    return {
      software: "Jobber Connect or Housecall Pro",
      reason:
        "Both are excellent for small teams. Jobber is slightly easier to learn; Housecall Pro has stronger marketing tools. You can't go wrong with either.",
      monthlyCost: "Jobber Connect: $129/mo | Housecall Pro: $69-$129/mo",
      features: ["Team scheduling", "Client hub / portal", features[0]],
      bestPageLink: bestPage?.href ?? null,
      bestPageLabel: bestPage?.label ?? null,
      compareLink: "/compare/jobber-vs-housecall-pro/",
      compareLabel: "Jobber vs Housecall Pro comparison",
      tradeNote:
        trade === "Roofing"
          ? "Also worth checking out JobNimbus — it's built specifically for roofing contractors."
          : trade === "Pest Control"
            ? "Also worth checking out GorillaDesk — it's built specifically for pest control businesses."
            : trade === "Landscaping"
              ? "Look for strong route optimization features — they save landscaping crews serious drive time."
              : null,
    };
  }

  // Solo / under $150K / easy + cheap → Jobber Core
  return {
    software: "Jobber Core",
    reason:
      "Jobber Core is the easiest field-service software to learn, and at $29/mo it's perfect for solo operators just getting started. You'll have quoting, invoicing, and scheduling covered from day one.",
    monthlyCost: "$29/mo",
    features: ["Simple scheduling", "Quick invoicing", features[0]],
    bestPageLink: bestPage?.href ?? null,
    bestPageLabel: bestPage?.label ?? null,
    compareLink: null,
    compareLabel: null,
    tradeNote:
      trade === "Roofing"
        ? "As you grow, consider JobNimbus — it's purpose-built for roofing contractors."
        : trade === "Pest Control"
          ? "As you grow, consider GorillaDesk — it's purpose-built for pest control."
          : null,
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SoftwareQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    trade: null,
    teamSize: null,
    revenue: null,
    priorities: [],
    currentSoftware: null,
  });

  const totalSteps = 5;
  const progressPct = Math.round(((step) / totalSteps) * 100);
  const showResults = step === totalSteps;

  /* helpers */
  const canAdvance = (): boolean => {
    switch (step) {
      case 0:
        return answers.trade !== null;
      case 1:
        return answers.teamSize !== null;
      case 2:
        return answers.revenue !== null;
      case 3:
        return answers.priorities.length >= 1 && answers.priorities.length <= 2;
      case 4:
        return answers.currentSoftware !== null;
      default:
        return false;
    }
  };

  const next = () => {
    if (canAdvance() && step < totalSteps) setStep(step + 1);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers({
      trade: null,
      teamSize: null,
      revenue: null,
      priorities: [],
      currentSoftware: null,
    });
  };

  const togglePriority = (p: Priority) => {
    setAnswers((prev) => {
      const has = prev.priorities.includes(p);
      if (has) return { ...prev, priorities: prev.priorities.filter((x) => x !== p) };
      if (prev.priorities.length >= 2) return prev; // max 2
      return { ...prev, priorities: [...prev.priorities, p] };
    });
  };

  /* shared styles */
  const cardBase =
    "border-2 rounded-xl p-4 text-center cursor-pointer transition-all duration-150 font-medium text-sm sm:text-base";
  const cardIdle = "border-gray-200 bg-white hover:border-brand-orange hover:shadow-md text-gray-700";
  const cardActive = "border-brand-orange bg-orange-50 shadow-md text-brand-blue";

  /* ------- render helpers ------- */

  const renderStep = () => {
    switch (step) {
      /* Step 0 — Trade */
      case 0:
        return (
          <div>
            <h2 className="text-xl font-bold text-brand-blue mb-1">What&apos;s your trade?</h2>
            <p className="text-gray-500 text-sm mb-5">Select the option that best describes your business.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {trades.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setAnswers({ ...answers, trade: t.value })}
                  className={`${cardBase} ${answers.trade === t.value ? cardActive : cardIdle}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        );

      /* Step 1 — Team size */
      case 1:
        return (
          <div>
            <h2 className="text-xl font-bold text-brand-blue mb-1">
              How many people on your team?
            </h2>
            <p className="text-gray-500 text-sm mb-5">Include yourself, employees, and regular subs.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
              {teamSizes.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setAnswers({ ...answers, teamSize: s.value })}
                  className={`${cardBase} ${answers.teamSize === s.value ? cardActive : cardIdle}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        );

      /* Step 2 — Revenue */
      case 2:
        return (
          <div>
            <h2 className="text-xl font-bold text-brand-blue mb-1">
              What&apos;s your approximate annual revenue?
            </h2>
            <p className="text-gray-500 text-sm mb-5">This helps us match you with the right tier.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
              {revenues.map((r) => (
                <button
                  key={r.value}
                  onClick={() => setAnswers({ ...answers, revenue: r.value })}
                  className={`${cardBase} ${answers.revenue === r.value ? cardActive : cardIdle}`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        );

      /* Step 3 — Priorities */
      case 3:
        return (
          <div>
            <h2 className="text-xl font-bold text-brand-blue mb-1">
              What&apos;s most important to you?
            </h2>
            <p className="text-gray-500 text-sm mb-5">Pick your top 1-2 priorities.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {priorities.map((p) => (
                <button
                  key={p.value}
                  onClick={() => togglePriority(p.value)}
                  className={`${cardBase} ${answers.priorities.includes(p.value) ? cardActive : cardIdle}`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            {answers.priorities.length === 2 && (
              <p className="text-xs text-gray-400 mt-2 text-center">Maximum 2 selected. Tap a selected option to deselect.</p>
            )}
          </div>
        );

      /* Step 4 — Current software */
      case 4:
        return (
          <div>
            <h2 className="text-xl font-bold text-brand-blue mb-1">
              Do you currently use any software?
            </h2>
            <p className="text-gray-500 text-sm mb-5">We&apos;ll factor in switching ease.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
              {currentSoftwareOptions.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setAnswers({ ...answers, currentSoftware: o.value })}
                  className={`${cardBase} ${answers.currentSoftware === o.value ? cardActive : cardIdle}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const recommendation = showResults ? getRecommendation(answers) : null;

  const renderResults = () => {
    if (!recommendation) return null;
    const rec = recommendation;

    return (
      <div>
        <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">
          Your Recommendation
        </h2>

        {/* Recommendation card */}
        <div className="border-2 border-brand-orange rounded-2xl overflow-hidden max-w-2xl mx-auto">
          {/* Header */}
          <div className="bg-brand-blue text-white px-6 py-4">
            <p className="text-sm font-medium opacity-80 mb-1">We recommend</p>
            <h3 className="text-2xl font-bold">{rec.software}</h3>
            <p className="text-sm opacity-90 mt-1">{rec.monthlyCost}</p>
          </div>

          {/* Body */}
          <div className="px-6 py-5 space-y-4">
            <div>
              <h4 className="font-semibold text-brand-blue text-sm uppercase tracking-wide mb-1">
                Why it fits
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">{rec.reason}</p>
            </div>

            <div>
              <h4 className="font-semibold text-brand-blue text-sm uppercase tracking-wide mb-2">
                Top features for your business
              </h4>
              <ul className="space-y-1">
                {rec.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {rec.tradeNote && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-sm text-amber-800">{rec.tradeNote}</p>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {rec.bestPageLink && (
                <Link
                  href={rec.bestPageLink}
                  className="inline-block bg-brand-orange text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Read: {rec.bestPageLabel}
                </Link>
              )}
              {rec.compareLink && (
                <Link
                  href={rec.compareLink}
                  className="inline-block border-2 border-brand-blue text-brand-blue font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
                >
                  {rec.compareLabel}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/compare/"
            className="text-brand-blue text-sm font-medium hover:underline"
          >
            Not sure? Compare all options &rarr;
          </Link>
          <button
            onClick={() => window.print()}
            className="text-gray-500 text-sm hover:text-gray-700 underline"
          >
            Print results
          </button>
          <button
            onClick={restart}
            className="text-gray-500 text-sm hover:text-gray-700 underline"
          >
            Retake quiz
          </button>
        </div>
      </div>
    );
  };

  return (
    <CalculatorLayout
      title="Which Contractor Software Should I Use?"
      description="Answer 5 quick questions about your business. We'll match you with the best field-service management software for your trade, team size, and priorities — in under 60 seconds."
      trade="Business"
      howToUse="Click through each step, selecting the answer that best matches your business. After 5 questions you'll get a personalized software recommendation with pricing, key features, and links to in-depth reviews."
      formula=""
    >
      {/* Progress bar */}
      {!showResults && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
            <span>
              Question {step + 1} of {totalSteps}
            </span>
            <span>{progressPct}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-brand-orange h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      )}

      {/* Step content */}
      {showResults ? renderResults() : renderStep()}

      {/* Navigation buttons */}
      {!showResults && (
        <div className="flex items-center justify-between mt-8">
          {step > 0 ? (
            <button
              onClick={back}
              className="text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors"
            >
              &larr; Back
            </button>
          ) : (
            <span />
          )}
          <button
            onClick={next}
            disabled={!canAdvance()}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              canAdvance()
                ? "bg-brand-blue text-white hover:bg-blue-900 cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {step === totalSteps - 1 ? "Get My Recommendation" : "Next"}
          </button>
        </div>
      )}
    </CalculatorLayout>
  );
}

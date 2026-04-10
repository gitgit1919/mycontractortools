"use client";

import { useState, useRef } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

/* ──────────────────────────── platform data ──────────────────────────── */

interface Platform {
  id: string;
  name: string;
  baseCost: (users: number) => number; // monthly
  onboarding: { low: number; high: number };
  contractType: string;
  processingRate: number; // decimal, e.g. 0.0299
  processingFlat: number; // per-txn flat fee (annualized as estimate)
  trainingHours: { low: number; high: number };
}

const PLATFORMS: Platform[] = [
  {
    id: "servicetitan",
    name: "ServiceTitan",
    baseCost: (u) => {
      if (u <= 2) return 250;
      return 250 + (u - 2) * 50;
    },
    onboarding: { low: 2000, high: 5000 },
    contractType: "12-month minimum",
    processingRate: 0.0299,
    processingFlat: 0.3,
    trainingHours: { low: 40, high: 80 },
  },
  {
    id: "housecallpro",
    name: "Housecall Pro",
    baseCost: (u) => {
      if (u <= 1) return 69;
      if (u <= 5) return 149;
      return 149 + (u - 5) * 30;
    },
    onboarding: { low: 0, high: 0 },
    contractType: "Monthly",
    processingRate: 0.0299,
    processingFlat: 0,
    trainingHours: { low: 4, high: 8 },
  },
  {
    id: "jobber",
    name: "Jobber",
    baseCost: (u) => {
      if (u <= 1) return 29;
      if (u <= 5) return 99;
      if (u <= 15) return 149;
      return 149 + (u - 15) * 25;
    },
    onboarding: { low: 0, high: 0 },
    contractType: "Monthly or annual (15% discount)",
    processingRate: 0.029,
    processingFlat: 0.3,
    trainingHours: { low: 2, high: 4 },
  },
  {
    id: "fieldpulse",
    name: "FieldPulse",
    baseCost: (u) => {
      if (u <= 1) return 99;
      return 99 + (u - 1) * 40;
    },
    onboarding: { low: 0, high: 0 },
    contractType: "Monthly",
    processingRate: 0.029,
    processingFlat: 0.3,
    trainingHours: { low: 8, high: 16 },
  },
  {
    id: "fieldedge",
    name: "FieldEdge",
    baseCost: (u) => u * 100,
    onboarding: { low: 1000, high: 3000 },
    contractType: "Annual",
    processingRate: 0.029,
    processingFlat: 0,
    trainingHours: { low: 20, high: 40 },
  },
  {
    id: "workiz",
    name: "Workiz",
    baseCost: (u) => {
      if (u <= 2) return 0;
      if (u <= 5) return 65;
      return 225 + (u - 10) * 20;
    },
    onboarding: { low: 0, high: 0 },
    contractType: "Monthly",
    processingRate: 0.029,
    processingFlat: 0.3,
    trainingHours: { low: 4, high: 8 },
  },
  {
    id: "gorilladesk",
    name: "GorillaDesk",
    baseCost: (u) => {
      if (u <= 10) return 99;
      return 99 + Math.ceil((u - 10) / 1) * 10;
    },
    onboarding: { low: 0, high: 0 },
    contractType: "Monthly",
    processingRate: 0.029,
    processingFlat: 0.3,
    trainingHours: { low: 2, high: 4 },
  },
  {
    id: "jobnimbus",
    name: "JobNimbus",
    baseCost: (u) => u * 25,
    onboarding: { low: 0, high: 0 },
    contractType: "Monthly",
    processingRate: 0.029,
    processingFlat: 0.3,
    trainingHours: { low: 4, high: 8 },
  },
];

const TECH_HOURLY_RATE = 35;

/* ──────────────────────────── helpers ──────────────────────────── */

function fmt(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function fmtDetailed(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

interface CalcResult {
  platform: Platform;
  monthlySoftware: number;
  annualSoftware: number;
  onboardingAvg: number;
  annualProcessing: number;
  trainingCost: number;
  totalYear1: number;
  totalYear2Plus: number;
  costPerTechPerMonth: number;
}

function calculate(
  platform: Platform,
  teamSize: number,
  monthlyRevenue: number,
  pctCollected: number
): CalcResult {
  const monthlySoftware = platform.baseCost(teamSize);
  const annualSoftware = monthlySoftware * 12;
  const onboardingAvg = (platform.onboarding.low + platform.onboarding.high) / 2;

  // Payment processing: monthly revenue * % collected * rate, annualized
  // Add a rough flat-fee estimate: assume ~100 transactions/month if collecting through software
  const monthlyCollected = monthlyRevenue * (pctCollected / 100);
  const monthlyProcessingPct = monthlyCollected * platform.processingRate;
  const monthlyProcessingFlat = platform.processingFlat > 0 ? 100 * platform.processingFlat : 0;
  const annualProcessing = (monthlyProcessingPct + monthlyProcessingFlat) * 12;

  const avgTrainingHours =
    (platform.trainingHours.low + platform.trainingHours.high) / 2;
  const trainingCost = avgTrainingHours * TECH_HOURLY_RATE;

  const totalYear1 = annualSoftware + onboardingAvg + annualProcessing + trainingCost;
  const totalYear2Plus = annualSoftware + annualProcessing;
  const costPerTechPerMonth =
    teamSize > 0 ? totalYear1 / teamSize / 12 : 0;

  return {
    platform,
    monthlySoftware,
    annualSoftware,
    onboardingAvg,
    annualProcessing,
    trainingCost,
    totalYear1,
    totalYear2Plus,
    costPerTechPerMonth,
  };
}

/* ──────────────────────────── component ──────────────────────────── */

export default function SoftwareCostCalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [selected, setSelected] = useState<Set<string>>(
    new Set(["servicetitan", "housecallpro", "jobber"])
  );
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [pctCollected, setPctCollected] = useState(50);
  const [calculated, setCalculated] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  const togglePlatform = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (next.size >= 4) return prev; // max 4
        next.add(id);
      }
      return next;
    });
  };

  const selectedPlatforms = PLATFORMS.filter((p) => selected.has(p.id));

  const results: CalcResult[] = selectedPlatforms.map((p) =>
    calculate(p, teamSize, monthlyRevenue, pctCollected)
  );

  const handleCalculate = () => {
    setCalculated(true);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handlePrint = () => {
    window.print();
  };

  // Chart helpers
  const maxYear1 = Math.max(...results.map((r) => r.totalYear1), 1);
  const minYear1 = Math.min(...results.map((r) => r.totalYear1));
  const maxTotalResult = results.reduce(
    (acc, r) => (r.totalYear1 > acc.totalYear1 ? r : acc),
    results[0]
  );
  const minTotalResult = results.reduce(
    (acc, r) => (r.totalYear1 < acc.totalYear1 ? r : acc),
    results[0]
  );

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="Software Total Cost of Ownership Calculator"
      description="Contractor software costs far more than the monthly subscription. This calculator reveals the true total cost — including onboarding fees, per-user charges, payment processing, and training time — so you can compare platforms on a level playing field."
      trade="Business"
      howToUse="Enter your team size, select 2-4 software platforms to compare, input your average monthly revenue and the percentage you collect through software. Click Calculate to see a full side-by-side cost breakdown and bar chart."
      formula="Total Year 1 = (Monthly Software Cost x 12) + Onboarding Fee + (Monthly Revenue x % Collected x Processing Rate x 12) + (Training Hours x $35/hr). Year 2+ drops the onboarding and training costs."
    >
      {/* ── Inputs ── */}
      <div className="space-y-6">
        {/* Team Size */}
        <div>
          <label htmlFor="teamSize" className={labelClass}>
            Team Size (number of techs/users)
          </label>
          <input
            id="teamSize"
            type="number"
            min={1}
            max={100}
            value={teamSize}
            onChange={(e) =>
              setTeamSize(Math.max(1, Math.min(100, Number(e.target.value))))
            }
            className={inputClass}
          />
        </div>

        {/* Platform Selection */}
        <div>
          <p className={labelClass}>
            Select 2-4 platforms to compare{" "}
            <span className="text-gray-400 font-normal">
              ({selected.size}/4 selected)
            </span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PLATFORMS.map((p) => {
              const isSelected = selected.has(p.id);
              const atMax = selected.size >= 4 && !isSelected;
              return (
                <label
                  key={p.id}
                  className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors text-sm ${
                    isSelected
                      ? "border-brand-blue bg-blue-50 text-brand-blue font-medium"
                      : atMax
                        ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    disabled={atMax}
                    onChange={() => togglePlatform(p.id)}
                    className="accent-brand-blue"
                  />
                  {p.name}
                </label>
              );
            })}
          </div>
          {selected.size < 2 && (
            <p className="text-sm text-red-500 mt-1">
              Please select at least 2 platforms to compare.
            </p>
          )}
        </div>

        {/* Monthly Revenue */}
        <div>
          <label htmlFor="monthlyRevenue" className={labelClass}>
            Average Monthly Revenue ($)
          </label>
          <input
            id="monthlyRevenue"
            type="number"
            min={0}
            step={5000}
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        {/* % Collected Through Software */}
        <div>
          <label htmlFor="pctCollected" className={labelClass}>
            Payments collected through software: {pctCollected}%
          </label>
          <input
            id="pctCollected"
            type="range"
            min={0}
            max={100}
            step={5}
            value={pctCollected}
            onChange={(e) => setPctCollected(Number(e.target.value))}
            className="w-full accent-brand-orange"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Calculate button */}
        <button
          onClick={handleCalculate}
          disabled={selected.size < 2}
          className="w-full sm:w-auto px-8 py-3 bg-brand-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calculate Total Cost of Ownership
        </button>
      </div>

      {/* ── Results ── */}
      {calculated && results.length >= 2 && (
        <div ref={resultsRef} className="mt-10 space-y-8 print:mt-4">
          {/* Print button */}
          <div className="flex justify-end print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print Results
            </button>
          </div>

          {/* ── Bar Chart ── */}
          <div>
            <h2 className="text-xl font-bold text-brand-blue mb-4">
              Year 1 Total Cost Comparison
            </h2>
            <div className="space-y-3">
              {results.map((r) => {
                const pct = (r.totalYear1 / maxYear1) * 100;
                const isMin =
                  r.platform.id === minTotalResult?.platform.id &&
                  results.length > 1;
                const isMax =
                  r.platform.id === maxTotalResult?.platform.id &&
                  results.length > 1 &&
                  maxYear1 !== minYear1;
                return (
                  <div key={r.platform.id}>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span
                        className={
                          isMin
                            ? "text-green-700"
                            : isMax
                              ? "text-red-700"
                              : "text-gray-700"
                        }
                      >
                        {r.platform.name}
                      </span>
                      <span
                        className={
                          isMin
                            ? "text-green-700 font-bold"
                            : isMax
                              ? "text-red-700 font-bold"
                              : "text-gray-700"
                        }
                      >
                        {fmt(r.totalYear1)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-6 overflow-hidden">
                      <div
                        className={`h-6 rounded-full transition-all duration-500 ${
                          isMin
                            ? "bg-green-500"
                            : isMax
                              ? "bg-red-400"
                              : "bg-brand-blue"
                        }`}
                        style={{ width: `${Math.max(pct, 3)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {minTotalResult && maxYear1 !== minYear1 && (
              <p className="text-sm text-gray-500 mt-3">
                {minTotalResult.platform.name} saves you{" "}
                <strong className="text-green-700">
                  {fmt(maxTotalResult.totalYear1 - minTotalResult.totalYear1)}
                </strong>{" "}
                in Year 1 compared to {maxTotalResult.platform.name}.
              </p>
            )}
          </div>

          {/* ── Comparison Table ── */}
          <div className="overflow-x-auto -mx-6 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-brand-blue text-white">
                  <th className="text-left p-3 rounded-tl-lg">Cost Category</th>
                  {results.map((r) => (
                    <th key={r.platform.id} className="text-right p-3 last:rounded-tr-lg">
                      {r.platform.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-600">Monthly Software Cost</td>
                  {results.map((r) => (
                    <td key={r.platform.id} className="p-3 text-right font-medium">
                      {fmt(r.monthlySoftware)}/mo
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-600">Annual Software Cost</td>
                  {results.map((r) => (
                    <td key={r.platform.id} className="p-3 text-right font-medium">
                      {fmt(r.annualSoftware)}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-600">Onboarding Fee (one-time)</td>
                  {results.map((r) => (
                    <td key={r.platform.id} className="p-3 text-right font-medium">
                      {r.onboardingAvg > 0 ? fmt(r.onboardingAvg) : "Free"}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-600">
                    Annual Payment Processing Fees
                    <span className="block text-xs text-gray-400">
                      Based on {fmt(monthlyRevenue)}/mo at {pctCollected}% collected
                    </span>
                  </td>
                  {results.map((r) => (
                    <td key={r.platform.id} className="p-3 text-right font-medium">
                      {fmt(r.annualProcessing)}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-600">
                    Training Cost (one-time)
                    <span className="block text-xs text-gray-400">
                      Hours x ${TECH_HOURLY_RATE}/hr avg tech rate
                    </span>
                  </td>
                  {results.map((r) => (
                    <td key={r.platform.id} className="p-3 text-right font-medium">
                      {r.trainingCost > 0 ? fmt(r.trainingCost) : "Free"}
                    </td>
                  ))}
                </tr>
                <tr className="bg-brand-blue/5 font-bold">
                  <td className="p-3 text-brand-blue">Total Year 1 Cost</td>
                  {results.map((r) => {
                    const isMin =
                      r.platform.id === minTotalResult?.platform.id &&
                      results.length > 1;
                    const isMax =
                      r.platform.id === maxTotalResult?.platform.id &&
                      results.length > 1 &&
                      maxYear1 !== minYear1;
                    return (
                      <td
                        key={r.platform.id}
                        className={`p-3 text-right text-base ${
                          isMin
                            ? "text-green-700"
                            : isMax
                              ? "text-red-700"
                              : "text-brand-blue"
                        }`}
                      >
                        {fmt(r.totalYear1)}
                        {isMin && (
                          <span className="block text-xs font-normal text-green-600">
                            Lowest cost
                          </span>
                        )}
                        {isMax && (
                          <span className="block text-xs font-normal text-red-500">
                            Highest cost
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <td className="p-3 text-gray-700">
                    Total Year 2+ Cost
                    <span className="block text-xs font-normal text-gray-400">
                      Ongoing annual (no onboarding/training)
                    </span>
                  </td>
                  {results.map((r) => (
                    <td key={r.platform.id} className="p-3 text-right">
                      {fmt(r.totalYear2Plus)}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-600">
                    Cost Per Tech Per Month
                    <span className="block text-xs text-gray-400">
                      Year 1 total / {teamSize} techs / 12 months
                    </span>
                  </td>
                  {results.map((r) => (
                    <td key={r.platform.id} className="p-3 text-right font-medium">
                      {fmtDetailed(r.costPerTechPerMonth)}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-600">Contract Type</td>
                  {results.map((r) => (
                    <td key={r.platform.id} className="p-3 text-right text-gray-700">
                      {r.platform.contractType}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Hidden Costs Callout ── */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-6">
            <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Hidden Costs to Watch For
            </h3>
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 shrink-0">1.</span>
                <span>
                  <strong>Payment processing fees</strong> are often the biggest
                  hidden expense. At $50K/mo revenue and 50% collected through
                  software, you could pay $9,000-$10,000/year in processing fees
                  alone.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 shrink-0">2.</span>
                <span>
                  <strong>Per-user fees add up fast.</strong> A tool that looks
                  cheap for 2 users can cost 3-5x more when you scale to 10+
                  techs. Always calculate for your actual team size.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 shrink-0">3.</span>
                <span>
                  <strong>Annual contracts lock you in.</strong> Some platforms
                  require 12-month commitments. If the software does not work
                  out, you are stuck paying for months you do not use.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 shrink-0">4.</span>
                <span>
                  <strong>Training downtime is real money.</strong> Enterprise
                  tools can require 40-80 hours of training. That is $1,400-$2,800
                  in lost tech productivity before you see any benefit.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 shrink-0">5.</span>
                <span>
                  <strong>Integration and add-on costs.</strong> QuickBooks sync,
                  GPS tracking, marketing features, and premium support often
                  cost extra on top of the base subscription.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 shrink-0">6.</span>
                <span>
                  <strong>Switching costs.</strong> Moving platforms means
                  re-entering customer data, retraining your team, and potential
                  downtime. Factor this in before committing.
                </span>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 mt-4">
            Cost estimates are approximations based on publicly available pricing
            as of early 2025. Actual pricing may vary based on your specific
            plan, negotiated rates, and promotional offers. Contact each vendor
            for exact quotes. Processing fee calculations assume approximately
            100 transactions per month for flat per-transaction fees.
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}

"use client";

import { useState, useRef } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type Mode = "costToPrice" | "markupToMargin" | "marginToMarkup" | "jobPricing";

function fmt(n: number, decimals = 2): string {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function PieChart({
  slices,
}: {
  slices: { label: string; value: number; color: string }[];
}) {
  const total = slices.reduce((s, sl) => s + sl.value, 0);
  if (total <= 0) return null;

  let cumulative = 0;
  const gradientParts: string[] = [];

  for (const slice of slices) {
    const startPct = (cumulative / total) * 100;
    cumulative += slice.value;
    const endPct = (cumulative / total) * 100;
    gradientParts.push(`${slice.color} ${startPct}% ${endPct}%`);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-48 h-48 rounded-full border-2 border-gray-200"
        style={{
          background: `conic-gradient(${gradientParts.join(", ")})`,
        }}
      />
      <div className="flex flex-wrap justify-center gap-3">
        {slices.map((s) => (
          <div key={s.label} className="flex items-center gap-1.5 text-xs">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: s.color }}
            />
            <span className="text-gray-700">
              {s.label}: ${fmt(s.value, 0)} ({((s.value / total) * 100).toFixed(1)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarkupMarginCalculator() {
  const [mode, setMode] = useState<Mode>("costToPrice");
  const [cost, setCost] = useState(1000);
  const [markupPct, setMarkupPct] = useState(20);
  const [marginPct, setMarginPct] = useState(20);

  // Job Pricing Worksheet state
  const [materials, setMaterials] = useState(5000);
  const [laborHours, setLaborHours] = useState(40);
  const [laborRate, setLaborRate] = useState(25);
  const [crewSize, setCrewSize] = useState(2);
  const [subCosts, setSubCosts] = useState(0);
  const [permitFees, setPermitFees] = useState(0);
  const [equipmentRental, setEquipmentRental] = useState(0);
  const [overheadRate, setOverheadRate] = useState(15);
  const [desiredMargin, setDesiredMargin] = useState(20);

  const worksheetRef = useRef<HTMLDivElement>(null);

  // Mode 1: Cost + Markup% → Price, Margin, Profit
  const m1Price = cost * (1 + markupPct / 100);
  const m1Profit = m1Price - cost;
  const m1Margin = m1Price > 0 ? (m1Profit / m1Price) * 100 : 0;

  // Mode 2: Markup% → Margin%
  const m2Margin =
    markupPct > 0 ? (markupPct / (100 + markupPct)) * 100 : 0;

  // Mode 3: Margin% → Markup%
  const m3Markup =
    marginPct < 100 ? (marginPct / (100 - marginPct)) * 100 : 0;

  // Mode 4: Job Pricing Worksheet calculations
  const directLabor = laborHours * laborRate * crewSize;
  const totalDirectCosts =
    materials + directLabor + subCosts + permitFees + equipmentRental;
  const overhead = totalDirectCosts * (overheadRate / 100);
  const totalCost = totalDirectCosts + overhead;
  const requiredMarkup =
    desiredMargin < 100 ? (desiredMargin / (100 - desiredMargin)) * 100 : 0;
  const sellingPrice = totalCost * (1 + requiredMarkup / 100);
  const grossProfit = sellingPrice - totalCost;
  const actualMargin =
    sellingPrice > 0 ? (grossProfit / sellingPrice) * 100 : 0;
  const revenuePerHour = laborHours > 0 ? sellingPrice / laborHours : 0;

  // "What if" margin scenarios
  const whatIfMargins = [15, 20, 25, 30];
  const whatIfRows = whatIfMargins.map((m) => {
    const mu = m < 100 ? (m / (100 - m)) * 100 : 0;
    const sp = totalCost * (1 + mu / 100);
    const pr = sp - totalCost;
    return { margin: m, markup: mu, sellingPrice: sp, profit: pr };
  });

  // Pie chart slices
  const otherDirect = subCosts + permitFees + equipmentRental;
  const pieSlices = [
    { label: "Materials", value: materials, color: "#2563eb" },
    { label: "Labor", value: directLabor, color: "#f97316" },
    { label: "Subs/Permits/Equip", value: otherDirect, color: "#6b7280" },
    { label: "Overhead", value: overhead, color: "#93c5fd" },
    { label: "Profit", value: grossProfit, color: "#22c55e" },
  ].filter((s) => s.value > 0);

  const handlePrint = () => {
    window.print();
  };

  // Common reference table data
  const referenceTable = [
    { markup: 10, margin: 9.09 },
    { markup: 15, margin: 13.04 },
    { markup: 20, margin: 16.67 },
    { markup: 25, margin: 20.0 },
    { markup: 30, margin: 23.08 },
    { markup: 33.33, margin: 25.0 },
    { markup: 40, margin: 28.57 },
    { markup: 50, margin: 33.33 },
    { markup: 75, margin: 42.86 },
    { markup: 100, margin: 50.0 },
  ];

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="Markup vs Margin Calculator"
      description="The most common pricing mistake contractors make is confusing markup with margin. A 20% markup is NOT the same as a 20% profit margin. This calculator shows you the difference and helps you price jobs correctly."
      trade="Business"
      howToUse="Choose a calculation mode: enter your cost and markup percentage to get a selling price, convert between markup and margin percentages, or use the Job Pricing Worksheet to price a full job from your actual costs."
      formula="Markup% = (Profit / Cost) × 100. Margin% = (Profit / Selling Price) × 100. Selling Price = Cost × (1 + Markup% / 100). Markup% = Margin% / (100% − Margin%) × 100. Margin% = Markup% / (100% + Markup%) × 100."
    >
      {/* Warning callout */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
        <p className="font-bold text-red-700 mb-1">
          The #1 Contractor Pricing Mistake
        </p>
        <p className="text-sm text-red-700">
          If your job costs you $10,000 and you add a 20% markup, your selling
          price is $12,000 — but your profit margin is only 16.7%, not 20%.
          Confusing the two can cost you thousands per year.
        </p>
      </div>

      {/* Mode selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: "costToPrice" as Mode, label: "Cost → Selling Price" },
          { key: "markupToMargin" as Mode, label: "Markup% → Margin%" },
          { key: "marginToMarkup" as Mode, label: "Margin% → Markup%" },
          { key: "jobPricing" as Mode, label: "Job Pricing Worksheet" },
        ].map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === m.key
                ? "bg-brand-blue text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Mode 1: Cost to Price */}
      {mode === "costToPrice" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="cost" className={labelClass}>
                Job Cost ($)
              </label>
              <input
                id="cost"
                type="number"
                min={0}
                step={100}
                value={cost}
                onChange={(e) => setCost(Number(e.target.value))}
                className={inputClass}
              />
              <p className="text-xs text-gray-500 mt-1">
                Materials + labor + overhead
              </p>
            </div>
            <div>
              <label htmlFor="markup" className={labelClass}>
                Markup Percentage (%)
              </label>
              <input
                id="markup"
                type="number"
                min={0}
                max={500}
                step={1}
                value={markupPct}
                onChange={(e) => setMarkupPct(Number(e.target.value))}
                className={inputClass}
              />
            </div>
          </div>

          <div className="bg-brand-gray rounded-xl p-6">
            <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Selling Price</p>
                <p className="text-2xl font-bold text-brand-blue">
                  ${fmt(m1Price)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Gross Profit</p>
                <p className="text-2xl font-bold text-green-700">
                  ${fmt(m1Profit)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Actual Profit Margin</p>
                <p className="text-2xl font-bold text-brand-orange">
                  {m1Margin.toFixed(2)}%
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  NOT {markupPct}%
                </p>
              </div>
            </div>

            {markupPct > 0 && (
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Translation:</strong> A{" "}
                  <span className="font-bold text-brand-blue">
                    {markupPct}% markup
                  </span>{" "}
                  on ${cost.toLocaleString()} gives you a selling price of $
                  {fmt(m1Price)} and a profit of ${fmt(m1Profit)}. Your actual
                  profit margin is{" "}
                  <span className="font-bold text-brand-orange">
                    {m1Margin.toFixed(1)}%
                  </span>
                  , not {markupPct}%.
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {/* Mode 2: Markup to Margin */}
      {mode === "markupToMargin" && (
        <>
          <div className="max-w-xs mb-6">
            <label htmlFor="markup2" className={labelClass}>
              Markup Percentage (%)
            </label>
            <input
              id="markup2"
              type="number"
              min={0}
              max={500}
              step={1}
              value={markupPct}
              onChange={(e) => setMarkupPct(Number(e.target.value))}
              className={inputClass}
            />
          </div>

          <div className="bg-brand-gray rounded-xl p-6">
            <h2 className="text-xl font-bold text-brand-blue mb-4">Result</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Markup</p>
                <p className="text-2xl font-bold text-brand-blue">
                  {markupPct}%
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Equals Profit Margin</p>
                <p className="text-2xl font-bold text-brand-orange">
                  {m2Margin.toFixed(2)}%
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4">
              A {markupPct}% markup means you keep{" "}
              <strong>{m2Margin.toFixed(1)}%</strong> of every dollar you
              collect — not {markupPct}%.
            </p>
          </div>
        </>
      )}

      {/* Mode 3: Margin to Markup */}
      {mode === "marginToMarkup" && (
        <>
          <div className="max-w-xs mb-6">
            <label htmlFor="margin3" className={labelClass}>
              Desired Profit Margin (%)
            </label>
            <input
              id="margin3"
              type="number"
              min={0}
              max={99}
              step={1}
              value={marginPct}
              onChange={(e) => setMarginPct(Number(e.target.value))}
              className={inputClass}
            />
          </div>

          <div className="bg-brand-gray rounded-xl p-6">
            <h2 className="text-xl font-bold text-brand-blue mb-4">Result</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Desired Margin</p>
                <p className="text-2xl font-bold text-brand-blue">
                  {marginPct}%
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Required Markup</p>
                <p className="text-2xl font-bold text-brand-orange">
                  {m3Markup.toFixed(2)}%
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4">
              To achieve a true {marginPct}% profit margin, you need to mark up
              your costs by <strong>{m3Markup.toFixed(1)}%</strong>.
            </p>
          </div>
        </>
      )}

      {/* Mode 4: Job Pricing Worksheet */}
      {mode === "jobPricing" && (
        <div ref={worksheetRef}>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg">
            <p className="font-bold text-green-800 mb-1">
              Job Pricing Worksheet
            </p>
            <p className="text-sm text-green-700">
              Enter your actual costs below and this calculator will tell you
              exactly what to charge. It accounts for materials, labor, overhead,
              and your desired profit margin.
            </p>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            <div>
              <label htmlFor="jp-materials" className={labelClass}>
                Materials Cost ($)
              </label>
              <input
                id="jp-materials"
                type="number"
                min={0}
                step={100}
                value={materials}
                onChange={(e) => setMaterials(Number(e.target.value))}
                className={inputClass}
              />
              <p className="text-xs text-gray-500 mt-1">
                Lumber, fixtures, supplies
              </p>
            </div>
            <div>
              <label htmlFor="jp-laborHours" className={labelClass}>
                Labor Hours
              </label>
              <input
                id="jp-laborHours"
                type="number"
                min={0}
                step={1}
                value={laborHours}
                onChange={(e) => setLaborHours(Number(e.target.value))}
                className={inputClass}
              />
              <p className="text-xs text-gray-500 mt-1">
                Total hours for the job
              </p>
            </div>
            <div>
              <label htmlFor="jp-laborRate" className={labelClass}>
                Labor Rate ($/hr)
              </label>
              <input
                id="jp-laborRate"
                type="number"
                min={0}
                step={1}
                value={laborRate}
                onChange={(e) => setLaborRate(Number(e.target.value))}
                className={inputClass}
              />
              <p className="text-xs text-gray-500 mt-1">
                What you pay your crew
              </p>
            </div>
            <div>
              <label htmlFor="jp-crewSize" className={labelClass}>
                Number of Crew Members
              </label>
              <input
                id="jp-crewSize"
                type="number"
                min={1}
                step={1}
                value={crewSize}
                onChange={(e) => setCrewSize(Number(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="jp-subs" className={labelClass}>
                Subcontractor Costs ($)
              </label>
              <input
                id="jp-subs"
                type="number"
                min={0}
                step={100}
                value={subCosts}
                onChange={(e) => setSubCosts(Number(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="jp-permits" className={labelClass}>
                Permit Fees ($)
              </label>
              <input
                id="jp-permits"
                type="number"
                min={0}
                step={50}
                value={permitFees}
                onChange={(e) => setPermitFees(Number(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="jp-equipment" className={labelClass}>
                Equipment Rental ($)
              </label>
              <input
                id="jp-equipment"
                type="number"
                min={0}
                step={50}
                value={equipmentRental}
                onChange={(e) => setEquipmentRental(Number(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="jp-overhead" className={labelClass}>
                Overhead Rate (%)
              </label>
              <input
                id="jp-overhead"
                type="number"
                min={0}
                max={100}
                step={1}
                value={overheadRate}
                onChange={(e) => setOverheadRate(Number(e.target.value))}
                className={inputClass}
              />
              <p className="text-xs text-gray-500 mt-1">
                Office, insurance, truck, tools
              </p>
            </div>
            <div>
              <label htmlFor="jp-margin" className={labelClass}>
                Desired Profit Margin (%)
              </label>
              <input
                id="jp-margin"
                type="number"
                min={0}
                max={99}
                step={1}
                value={desiredMargin}
                onChange={(e) => setDesiredMargin(Number(e.target.value))}
                className={inputClass}
              />
              <p className="text-xs text-gray-500 mt-1">
                What you want to keep as profit
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-brand-gray rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-brand-blue">
                Job Pricing Results
              </h2>
              <button
                onClick={handlePrint}
                className="print:hidden flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print Worksheet
              </button>
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-xs text-gray-500">Total Job Cost</p>
                <p className="text-lg font-bold text-gray-800">
                  ${fmt(totalCost, 0)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border-2 border-brand-blue">
                <p className="text-xs text-brand-blue font-medium">
                  Selling Price
                </p>
                <p className="text-2xl font-bold text-brand-blue">
                  ${fmt(sellingPrice, 0)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-xs text-gray-500">Gross Profit</p>
                <p className="text-lg font-bold text-green-700">
                  ${fmt(grossProfit, 0)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-xs text-gray-500">Profit Margin</p>
                <p className="text-lg font-bold text-brand-orange">
                  {actualMargin.toFixed(1)}%
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-xs text-gray-500">Revenue/Labor Hr</p>
                <p className="text-lg font-bold text-gray-800">
                  ${fmt(revenuePerHour, 0)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-xs text-gray-500">Markup Applied</p>
                <p className="text-lg font-bold text-gray-800">
                  {requiredMarkup.toFixed(1)}%
                </p>
              </div>
            </div>

            {/* Cost breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Pie chart */}
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">
                  Cost Breakdown
                </h3>
                <PieChart slices={pieSlices} />
              </div>

              {/* Cost detail table */}
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Line Item Detail
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-1.5 text-gray-600">Materials</td>
                      <td className="py-1.5 text-right font-medium">
                        ${fmt(materials, 0)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1.5 text-gray-600">
                        Direct Labor ({laborHours}h x ${laborRate}/hr x{" "}
                        {crewSize} crew)
                      </td>
                      <td className="py-1.5 text-right font-medium">
                        ${fmt(directLabor, 0)}
                      </td>
                    </tr>
                    {subCosts > 0 && (
                      <tr className="border-b border-gray-100">
                        <td className="py-1.5 text-gray-600">Subcontractors</td>
                        <td className="py-1.5 text-right font-medium">
                          ${fmt(subCosts, 0)}
                        </td>
                      </tr>
                    )}
                    {permitFees > 0 && (
                      <tr className="border-b border-gray-100">
                        <td className="py-1.5 text-gray-600">Permit Fees</td>
                        <td className="py-1.5 text-right font-medium">
                          ${fmt(permitFees, 0)}
                        </td>
                      </tr>
                    )}
                    {equipmentRental > 0 && (
                      <tr className="border-b border-gray-100">
                        <td className="py-1.5 text-gray-600">
                          Equipment Rental
                        </td>
                        <td className="py-1.5 text-right font-medium">
                          ${fmt(equipmentRental, 0)}
                        </td>
                      </tr>
                    )}
                    <tr className="border-b border-gray-200">
                      <td className="py-1.5 font-medium text-gray-700">
                        Total Direct Costs
                      </td>
                      <td className="py-1.5 text-right font-bold">
                        ${fmt(totalDirectCosts, 0)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1.5 text-gray-600">
                        Overhead ({overheadRate}%)
                      </td>
                      <td className="py-1.5 text-right font-medium">
                        ${fmt(overhead, 0)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-2 font-bold text-gray-800">
                        Total Job Cost
                      </td>
                      <td className="py-2 text-right font-bold text-gray-800">
                        ${fmt(totalCost, 0)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1.5 text-gray-600">
                        Markup ({requiredMarkup.toFixed(1)}%)
                      </td>
                      <td className="py-1.5 text-right font-medium text-green-700">
                        +${fmt(grossProfit, 0)}
                      </td>
                    </tr>
                    <tr className="bg-brand-blue/5">
                      <td className="py-2 font-bold text-brand-blue">
                        Selling Price
                      </td>
                      <td className="py-2 text-right font-bold text-brand-blue text-lg">
                        ${fmt(sellingPrice, 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* What-if table */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                &ldquo;What If&rdquo; — Different Margin Targets
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Based on your total job cost of ${fmt(totalCost, 0)}, here is
                what you would charge at different profit margins:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-2 font-semibold text-gray-700">
                        Profit Margin
                      </th>
                      <th className="text-left px-4 py-2 font-semibold text-gray-700">
                        Markup Needed
                      </th>
                      <th className="text-left px-4 py-2 font-semibold text-gray-700">
                        Selling Price
                      </th>
                      <th className="text-left px-4 py-2 font-semibold text-gray-700">
                        Profit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {whatIfRows.map((row, i) => (
                      <tr
                        key={row.margin}
                        className={`${
                          row.margin === desiredMargin
                            ? "bg-green-50 font-medium"
                            : i % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50"
                        }`}
                      >
                        <td className="px-4 py-2">
                          {row.margin}%
                          {row.margin === desiredMargin && (
                            <span className="ml-2 text-xs text-green-700 font-medium">
                              (your target)
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2">{row.markup.toFixed(1)}%</td>
                        <td className="px-4 py-2 font-medium">
                          ${fmt(row.sellingPrice, 0)}
                        </td>
                        <td className="px-4 py-2 text-green-700">
                          ${fmt(row.profit, 0)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reference Table */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-brand-blue mb-4">
          Markup vs Margin Reference Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-brand-gray">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-brand-blue">
                  Markup %
                </th>
                <th className="text-left px-4 py-2 font-semibold text-brand-blue">
                  Profit Margin %
                </th>
                <th className="text-left px-4 py-2 font-semibold text-brand-blue">
                  Price on $10,000 Job
                </th>
                <th className="text-left px-4 py-2 font-semibold text-brand-blue">
                  Profit
                </th>
              </tr>
            </thead>
            <tbody>
              {referenceTable.map((row, i) => {
                const price = 10000 * (1 + row.markup / 100);
                const profit = price - 10000;
                return (
                  <tr
                    key={row.markup}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-2 font-medium">{row.markup}%</td>
                    <td className="px-4 py-2 text-brand-orange font-medium">
                      {row.margin.toFixed(2)}%
                    </td>
                    <td className="px-4 py-2">
                      $
                      {price.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </td>
                    <td className="px-4 py-2 text-green-700">
                      $
                      {profit.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Based on a $10,000 job cost. Notice: a 50% markup only gives you a
          33% margin. To get a true 50% margin, you need a 100% markup.
        </p>
      </div>

      {/* Common Contractor Margins by Trade */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-bold text-amber-900 mb-3">
          Common Contractor Margins by Trade
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-gray-700 mb-4">
          <div className="flex justify-between border-b border-amber-100 py-1">
            <span>HVAC</span>
            <span className="font-medium">10-25% net margin</span>
          </div>
          <div className="flex justify-between border-b border-amber-100 py-1">
            <span>Plumbing</span>
            <span className="font-medium">10-20% net margin</span>
          </div>
          <div className="flex justify-between border-b border-amber-100 py-1">
            <span>Electrical</span>
            <span className="font-medium">8-18% net margin</span>
          </div>
          <div className="flex justify-between border-b border-amber-100 py-1">
            <span>Roofing</span>
            <span className="font-medium">20-40% net margin</span>
          </div>
          <div className="flex justify-between border-b border-amber-100 py-1">
            <span>General Contracting</span>
            <span className="font-medium">8-15% net margin</span>
          </div>
          <div className="flex justify-between border-b border-amber-100 py-1">
            <span>Landscaping</span>
            <span className="font-medium">15-30% net margin</span>
          </div>
          <div className="flex justify-between border-b border-amber-100 py-1">
            <span>Painting</span>
            <span className="font-medium">15-35% net margin</span>
          </div>
          <div className="flex justify-between border-b border-amber-100 py-1">
            <span>Remodeling</span>
            <span className="font-medium">10-20% net margin</span>
          </div>
        </div>
        <p className="text-xs text-amber-800 bg-amber-100 rounded-lg px-3 py-2">
          These are <strong>NET</strong> margins after all overhead. Your{" "}
          <strong>MARKUP</strong> needs to be higher than these numbers to
          achieve these margins. Use the calculator above to find the right
          markup for your target margin.
        </p>
      </div>

      {/* Key Takeaways */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-brand-blue mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <strong>Markup</strong> is calculated on your cost: (Profit / Cost)
            &times; 100
          </li>
          <li>
            <strong>Margin</strong> is calculated on the selling price: (Profit
            / Selling Price) &times; 100
          </li>
          <li>
            Markup is always a higher number than margin for the same profit
          </li>
          <li>
            Most contractors target 10-20% net profit margin, which requires a
            11-25% markup before overhead
          </li>
          <li>
            If you want a 20% margin, you need a 25% markup — not 20%
          </li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}

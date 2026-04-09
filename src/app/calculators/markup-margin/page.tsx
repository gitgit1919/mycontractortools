"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type Mode = "costToPrice" | "markupToMargin" | "marginToMarkup";

export default function MarkupMarginCalculator() {
  const [mode, setMode] = useState<Mode>("costToPrice");
  const [cost, setCost] = useState(1000);
  const [markupPct, setMarkupPct] = useState(20);
  const [marginPct, setMarginPct] = useState(20);
  const [sellingPrice, setSellingPrice] = useState(1500);

  // Mode 1: Cost + Markup% → Price, Margin, Profit
  const m1Price = cost * (1 + markupPct / 100);
  const m1Profit = m1Price - cost;
  const m1Margin = m1Price > 0 ? (m1Profit / m1Price) * 100 : 0;

  // Mode 2: Markup% → Margin%
  const m2Margin = markupPct > 0 ? (markupPct / (100 + markupPct)) * 100 : 0;

  // Mode 3: Margin% → Markup%
  const m3Markup = marginPct < 100 ? (marginPct / (100 - marginPct)) * 100 : 0;

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
      howToUse="Choose a calculation mode: enter your cost and markup percentage to get a selling price, or convert between markup and margin percentages. The reference table at the bottom shows common conversions at a glance."
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
                  ${m1Price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Gross Profit</p>
                <p className="text-2xl font-bold text-green-700">
                  ${m1Profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
                  <span className="font-bold text-brand-blue">{markupPct}% markup</span> on ${cost.toLocaleString()} gives
                  you a selling price of ${m1Price.toLocaleString(undefined, { maximumFractionDigits: 2 })} and a
                  profit of ${m1Profit.toLocaleString(undefined, { maximumFractionDigits: 2 })}. Your actual profit
                  margin is{" "}
                  <span className="font-bold text-brand-orange">{m1Margin.toFixed(1)}%</span>
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
                <p className="text-2xl font-bold text-brand-blue">{markupPct}%</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Equals Profit Margin</p>
                <p className="text-2xl font-bold text-brand-orange">{m2Margin.toFixed(2)}%</p>
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
                <p className="text-2xl font-bold text-brand-blue">{marginPct}%</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Required Markup</p>
                <p className="text-2xl font-bold text-brand-orange">{m3Markup.toFixed(2)}%</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4">
              To achieve a true {marginPct}% profit margin, you need to mark up
              your costs by <strong>{m3Markup.toFixed(1)}%</strong>.
            </p>
          </div>
        </>
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
                      ${price.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="px-4 py-2 text-green-700">
                      ${profit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
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

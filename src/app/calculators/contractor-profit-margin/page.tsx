"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function ContractorProfitMarginCalculator() {
  const [materialCost, setMaterialCost] = useState<number>(5000);
  const [laborCost, setLaborCost] = useState<number>(8000);
  const [subcontractors, setSubcontractors] = useState<number>(0);
  const [permits, setPermits] = useState<number>(500);
  const [equipment, setEquipment] = useState<number>(300);
  const [overhead, setOverhead] = useState<number>(1200);
  const [targetMargin, setTargetMargin] = useState<number>(20);
  const [laborHours, setLaborHours] = useState<number>(80);

  const result = useMemo(() => {
    const totalCost =
      materialCost + laborCost + subcontractors + permits + equipment + overhead;
    const safeMargin = Math.min(Math.max(targetMargin, 0), 95);
    const markup = (safeMargin / (100 - safeMargin)) * 100;
    const bidPrice = totalCost / (1 - safeMargin / 100);
    const profit = bidPrice - totalCost;

    // Cost composition (percent of total cost)
    const costRows = [
      { label: "Materials", value: materialCost, color: "bg-blue-500" },
      { label: "Labor", value: laborCost, color: "bg-orange-500" },
      { label: "Subcontractors", value: subcontractors, color: "bg-purple-500" },
      { label: "Permits / Fees", value: permits, color: "bg-amber-500" },
      { label: "Equipment", value: equipment, color: "bg-teal-500" },
      { label: "Overhead", value: overhead, color: "bg-gray-500" },
    ].filter((r) => r.value > 0);

    // Sensitivity table — bid prices at standard margin levels
    const sensitivity = [10, 15, 20, 25, 30, 35].map((m) => ({
      margin: m,
      bid: totalCost / (1 - m / 100),
      profit: totalCost / (1 - m / 100) - totalCost,
    }));

    // Cost overrun scenarios — what happens if costs come in 10% / 20% over estimate
    const overrun10 = totalCost * 1.10;
    const overrun20 = totalCost * 1.20;
    const profitAt10Overrun = bidPrice - overrun10;
    const profitAt20Overrun = bidPrice - overrun20;
    const marginAt10Overrun = bidPrice > 0 ? (profitAt10Overrun / bidPrice) * 100 : 0;
    const marginAt20Overrun = bidPrice > 0 ? (profitAt20Overrun / bidPrice) * 100 : 0;

    // Profit per labor hour — the most actionable productivity metric
    const profitPerLaborHour = laborHours > 0 ? profit / laborHours : 0;
    const revenuePerLaborHour = laborHours > 0 ? bidPrice / laborHours : 0;

    return {
      totalCost,
      bidPrice,
      profit,
      markup,
      costRows,
      sensitivity,
      overrun10,
      overrun20,
      profitAt10Overrun,
      profitAt20Overrun,
      marginAt10Overrun,
      marginAt20Overrun,
      profitPerLaborHour,
      revenuePerLaborHour,
    };
  }, [
    materialCost,
    laborCost,
    subcontractors,
    permits,
    equipment,
    overhead,
    targetMargin,
    laborHours,
  ]);

  return (
    <CalculatorLayout
      title="Contractor Profit Margin Calculator"
      description="Calculate the right bid price for any job based on your costs and target profit margin. See cost composition, the difference between markup and margin, and what happens to your profit if costs run over by 10% or 20%."
      trade="Business"
      howToUse="Enter all job costs &mdash; materials, labor, subcontractors, permits, equipment rental, and overhead allocation. Set your target profit margin (the percentage of the final bid that becomes profit). Add labor hours to see profit per hour worked. The calculator computes the correct bid price, shows cost composition, and stress-tests your margin against cost overruns."
      formula="Bid Price = Total Costs / (1 - Target Margin%). Markup% = Margin% / (100% - Margin%). Profit = Bid Price - Total Costs. Profit Per Labor Hour = Profit / Labor Hours."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="materials" className="block text-sm font-medium text-gray-700 mb-1">Material Costs ($)</label>
          <input id="materials" type="number" min={0} step={100} value={materialCost} onChange={(e) => setMaterialCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="labor" className="block text-sm font-medium text-gray-700 mb-1">Labor Costs ($)</label>
          <input id="labor" type="number" min={0} step={100} value={laborCost} onChange={(e) => setLaborCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="subs" className="block text-sm font-medium text-gray-700 mb-1">Subcontractor Costs ($)</label>
          <input id="subs" type="number" min={0} step={100} value={subcontractors} onChange={(e) => setSubcontractors(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="permits" className="block text-sm font-medium text-gray-700 mb-1">Permits &amp; Fees ($)</label>
          <input id="permits" type="number" min={0} step={50} value={permits} onChange={(e) => setPermits(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="equipment" className="block text-sm font-medium text-gray-700 mb-1">Equipment Rental ($)</label>
          <input id="equipment" type="number" min={0} step={50} value={equipment} onChange={(e) => setEquipment(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="overhead" className="block text-sm font-medium text-gray-700 mb-1">Overhead Allocation ($)</label>
          <input id="overhead" type="number" min={0} step={100} value={overhead} onChange={(e) => setOverhead(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Insurance, office, vehicle, etc.</p>
        </div>
        <div>
          <label htmlFor="laborHours" className="block text-sm font-medium text-gray-700 mb-1">Labor Hours On Job</label>
          <input id="laborHours" type="number" min={1} step={1} value={laborHours} onChange={(e) => setLaborHours(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Total crew hours &mdash; for profit/hour metric</p>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="margin" className="block text-sm font-medium text-gray-700 mb-1">Target Profit Margin (%)</label>
          <input id="margin" type="range" min={5} max={50} step={1} value={targetMargin} onChange={(e) => setTargetMargin(Number(e.target.value))}
            className="w-full accent-orange-500" />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>5%</span>
            <span className="font-bold text-brand-orange">{targetMargin}%</span>
            <span>50%</span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Job Cost</p>
            <p className="text-2xl font-bold text-brand-blue">${result.totalCost.toLocaleString()}</p>
            <p className="text-sm text-gray-500">all costs</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border-2 border-brand-orange">
            <p className="text-sm text-gray-600">Bid Price</p>
            <p className="text-3xl font-bold text-brand-orange">${Math.round(result.bidPrice).toLocaleString()}</p>
            <p className="text-sm text-gray-500">{result.markup.toFixed(1)}% markup</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Profit</p>
            <p className="text-2xl font-bold text-green-600">${Math.round(result.profit).toLocaleString()}</p>
            <p className="text-sm text-gray-500">{targetMargin}% margin</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Profit / Labor Hour</p>
            <p className="text-2xl font-bold text-brand-blue">${result.profitPerLaborHour.toFixed(0)}</p>
            <p className="text-sm text-gray-500">${result.revenuePerLaborHour.toFixed(0)} rev/hr</p>
          </div>
        </div>

        {/* Cost composition visual */}
        {result.costRows.length > 0 && (
          <div className="mt-6 bg-white rounded-lg p-5 border border-gray-200">
            <h3 className="text-lg font-bold text-brand-blue mb-3">Cost Composition</h3>
            <div className="flex h-6 rounded-md overflow-hidden border border-gray-300">
              {result.costRows.map((row) => {
                const pct = (row.value / result.totalCost) * 100;
                return (
                  <div
                    key={row.label}
                    className={`${row.color}`}
                    style={{ width: `${pct}%` }}
                    title={`${row.label}: ${pct.toFixed(0)}%`}
                  />
                );
              })}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 text-xs">
              {result.costRows.map((row) => {
                const pct = (row.value / result.totalCost) * 100;
                return (
                  <div key={row.label} className="flex items-center gap-2">
                    <span className={`inline-block w-3 h-3 rounded-sm ${row.color}`}></span>
                    <span className="text-gray-700">
                      {row.label}: <strong>{pct.toFixed(0)}%</strong> ($
                      {row.value.toLocaleString()})
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Margin sensitivity */}
        <h3 className="text-lg font-bold text-brand-blue mt-6 mb-3">Bid Price at Different Margins</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {result.sensitivity.map((item) => (
            <div
              key={item.margin}
              className={`bg-white rounded-lg p-3 text-center border ${
                item.margin === targetMargin
                  ? "border-2 border-brand-orange"
                  : "border-gray-200"
              }`}
            >
              <p className="text-xs text-gray-600">{item.margin}% margin</p>
              <p className="text-base font-bold text-brand-blue">${Math.round(item.bid).toLocaleString()}</p>
              <p className="text-xs text-green-600">${Math.round(item.profit).toLocaleString()} profit</p>
            </div>
          ))}
        </div>

        {/* Cost overrun stress test */}
        <div className="mt-6 bg-white rounded-lg p-5 border border-gray-200">
          <h3 className="text-lg font-bold text-brand-blue mb-1">Cost Overrun Stress Test</h3>
          <p className="text-xs text-gray-500 mb-4">
            What happens to your profit if real-world costs come in over your estimate?
            (Bid price stays fixed at ${Math.round(result.bidPrice).toLocaleString()}.)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-xs text-gray-600">On Budget</p>
              <p className="text-xl font-bold text-green-600">${Math.round(result.profit).toLocaleString()}</p>
              <p className="text-xs text-gray-500">{targetMargin}% margin</p>
            </div>
            <div
              className={`text-center rounded-lg p-3 ${
                result.profitAt10Overrun >= 0
                  ? "bg-amber-50 border border-amber-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <p className="text-xs text-gray-600">10% Overrun</p>
              <p
                className={`text-xl font-bold ${
                  result.profitAt10Overrun >= 0 ? "text-amber-700" : "text-red-600"
                }`}
              >
                ${Math.round(result.profitAt10Overrun).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">{result.marginAt10Overrun.toFixed(1)}% margin</p>
            </div>
            <div
              className={`text-center rounded-lg p-3 ${
                result.profitAt20Overrun >= 0
                  ? "bg-amber-50 border border-amber-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <p className="text-xs text-gray-600">20% Overrun</p>
              <p
                className={`text-xl font-bold ${
                  result.profitAt20Overrun >= 0 ? "text-amber-700" : "text-red-600"
                }`}
              >
                ${Math.round(result.profitAt20Overrun).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">{result.marginAt20Overrun.toFixed(1)}% margin</p>
            </div>
          </div>
          {result.profitAt10Overrun < 0 && (
            <p className="mt-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
              <strong>Warning:</strong> A 10% cost overrun on this job would
              wipe out your profit and put you in the red. Build in a contingency
              buffer or raise your margin before bidding.
            </p>
          )}
          {result.profitAt10Overrun >= 0 && result.profitAt20Overrun < 0 && (
            <p className="mt-3 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
              <strong>Tight margin.</strong> You can absorb a 10% overrun, but
              a 20% overrun puts you under water. Consider a 5&ndash;10%
              contingency line item in your estimate.
            </p>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}

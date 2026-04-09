"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const fixtureUnits: Record<string, number> = {
  "Bathroom sink": 1, "Kitchen sink": 1.5, "Bathtub": 2, "Shower": 2,
  "Toilet (1.6 gpf)": 3, "Dishwasher": 1.5, "Washing machine": 2,
  "Utility sink": 1.5, "Hose bib": 2.5, "Water heater": 0,
};

const pipeSizeTable = [
  { maxUnits: 3, size: "1/2\"" }, { maxUnits: 6, size: "3/4\"" },
  { maxUnits: 18, size: "1\"" }, { maxUnits: 36, size: "1-1/4\"" },
  { maxUnits: 65, size: "1-1/2\"" }, { maxUnits: 150, size: "2\"" },
  { maxUnits: 400, size: "2-1/2\"" }, { maxUnits: 1000, size: "3\"" },
];

export default function PlumbingPipeSizingCalculator() {
  const [fixtures, setFixtures] = useState<Record<string, number>>(
    Object.fromEntries(Object.keys(fixtureUnits).map((k) => [k, k === "Toilet (1.6 gpf)" ? 2 : k === "Bathroom sink" ? 2 : k === "Kitchen sink" ? 1 : k === "Shower" ? 1 : k === "Bathtub" ? 1 : 0]))
  );

  const totalUnits = Object.entries(fixtures).reduce(
    (sum, [fixture, count]) => sum + count * fixtureUnits[fixture], 0
  );

  const recommendedPipe = pipeSizeTable.find((p) => p.maxUnits >= totalUnits)?.size || "3\" or larger";
  const estimatedGPM = (totalUnits * 1.0).toFixed(1); // rough approximation

  return (
    <CalculatorLayout
      title="Plumbing Pipe Sizing Calculator"
      description="Determine the correct water supply pipe diameter based on the total fixture units in a building. Uses WSFU (Water Supply Fixture Units) methodology per UPC/IPC standards."
      trade="Plumbing"
      howToUse="Enter the number of each type of plumbing fixture in the building. The calculator totals the Water Supply Fixture Units (WSFU) and recommends a main supply pipe diameter. This is based on standard residential pressure conditions (40-80 PSI). For long runs, high-rise buildings, or low-pressure situations, upsize by one pipe diameter."
      formula="Total WSFU = Sum of (Fixture Count × Fixture Unit Value). Pipe size selected from UPC/IPC sizing tables based on total WSFU."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(fixtureUnits).map(([fixture, units]) => (
          <div key={fixture} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
            <div>
              <label htmlFor={`fixture-${fixture}`} className="text-sm font-medium text-gray-700">{fixture}</label>
              <p className="text-xs text-gray-500">{units} WSFU each</p>
            </div>
            <input
              id={`fixture-${fixture}`}
              type="number" min={0} max={100}
              value={fixtures[fixture]}
              onChange={(e) => setFixtures({ ...fixtures, [fixture]: Number(e.target.value) })}
              className="w-20 border border-gray-300 rounded-lg px-3 py-2 text-center focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Fixture Units</p>
            <p className="text-2xl font-bold text-brand-blue">{totalUnits}</p>
            <p className="text-sm text-gray-500">WSFU</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Estimated Peak Flow</p>
            <p className="text-2xl font-bold text-brand-blue">{estimatedGPM}</p>
            <p className="text-sm text-gray-500">GPM</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Main Supply Pipe</p>
            <p className="text-2xl font-bold text-brand-orange">{recommendedPipe}</p>
            <p className="text-sm text-gray-500">diameter</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

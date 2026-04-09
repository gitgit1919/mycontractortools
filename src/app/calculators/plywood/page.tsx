"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const thicknessOptions: Record<
  string,
  { label: string; weightPerSheet: number; costPerSheet: number }
> = {
  "0.25": { label: '1/4"', weightPerSheet: 22, costPerSheet: 18 },
  "0.375": { label: '3/8"', weightPerSheet: 29, costPerSheet: 24 },
  "0.5": { label: '1/2"', weightPerSheet: 40, costPerSheet: 30 },
  "0.625": { label: '5/8"', weightPerSheet: 48, costPerSheet: 36 },
  "0.75": { label: '3/4"', weightPerSheet: 60, costPerSheet: 42 },
};

export default function PlywoodCalculator() {
  const [inputMode, setInputMode] = useState<"dimensions" | "sqft">("dimensions");
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(16);
  const [totalSqFt, setTotalSqFt] = useState<number>(320);
  const [sheetLength, setSheetLength] = useState<number>(8);
  const [sheetWidth, setSheetWidth] = useState<number>(4);
  const [thickness, setThickness] = useState<string>("0.5");
  const [wastePercent, setWastePercent] = useState<number>(10);
  const [costPerSheet, setCostPerSheet] = useState<number>(30);

  // Area calculation
  const area = inputMode === "dimensions" ? length * width : totalSqFt;

  // Sheet area
  const sheetArea = sheetLength * sheetWidth;

  // Sheets needed before waste
  const sheetsRaw = sheetArea > 0 ? area / sheetArea : 0;

  // Waste factor
  const wasteFactor = 1 + wastePercent / 100;

  // Sheets needed with waste (round up)
  const sheetsNeeded = Math.ceil(sheetsRaw * wasteFactor);

  // Waste amount in sheets
  const wasteSheets = sheetsNeeded - Math.ceil(sheetsRaw);

  // Total coverage including waste
  const totalCoverage = sheetsNeeded * sheetArea;

  // Waste sq ft
  const wasteSqFt = totalCoverage - area;

  // Weight
  const opt = thicknessOptions[thickness];
  const weightPerSheet = opt.weightPerSheet;
  const totalWeight = sheetsNeeded * weightPerSheet;

  // Cost
  const totalCost = sheetsNeeded * costPerSheet;

  return (
    <CalculatorLayout
      title="Plywood & Sheathing Calculator"
      description="Calculate the number of plywood or sheathing sheets you need based on your project area, sheet size, thickness, and waste allowance. Includes weight and cost estimates for accurate budgeting."
      trade="Carpentry"
      howToUse="Enter your project area either as length x width dimensions or as total square footage. Select the plywood sheet size (4x8 is standard), choose the thickness you need, and set a waste percentage (10% is typical for rectangular areas, 15% or more for complex layouts). The calculator will show the number of sheets needed, total weight, waste amount, and cost estimate."
      formula="Sheets Needed = ceil((Area / Sheet Area) x (1 + Waste%)). Total Weight = Sheets x Weight per Sheet. Total Cost = Sheets x Cost per Sheet."
    >
      {/* Input Mode Toggle */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Input Method</label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setInputMode("dimensions")}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${
              inputMode === "dimensions"
                ? "bg-brand-blue text-white border-brand-blue"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Length x Width
          </button>
          <button
            type="button"
            onClick={() => setInputMode("sqft")}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${
              inputMode === "sqft"
                ? "bg-brand-blue text-white border-brand-blue"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Total Square Footage
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {inputMode === "dimensions" ? (
          <>
            <div>
              <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">
                Area Length (ft)
              </label>
              <input
                id="length"
                type="number"
                min={1}
                max={500}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                Area Width (ft)
              </label>
              <input
                id="width"
                type="number"
                min={1}
                max={500}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </>
        ) : (
          <div>
            <label htmlFor="totalSqFt" className="block text-sm font-medium text-gray-700 mb-1">
              Total Square Footage
            </label>
            <input
              id="totalSqFt"
              type="number"
              min={1}
              max={100000}
              value={totalSqFt}
              onChange={(e) => setTotalSqFt(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        <div>
          <label htmlFor="sheetSize" className="block text-sm font-medium text-gray-700 mb-1">
            Sheet Size
          </label>
          <select
            id="sheetSize"
            value={`${sheetWidth}x${sheetLength}`}
            onChange={(e) => {
              const [w, l] = e.target.value.split("x").map(Number);
              setSheetWidth(w);
              setSheetLength(l);
            }}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="4x8">4 ft x 8 ft (standard)</option>
            <option value="4x10">4 ft x 10 ft</option>
            <option value="4x12">4 ft x 12 ft</option>
            <option value="5x5">5 ft x 5 ft</option>
          </select>
        </div>

        <div>
          <label htmlFor="thickness" className="block text-sm font-medium text-gray-700 mb-1">
            Plywood Thickness
          </label>
          <select
            id="thickness"
            value={thickness}
            onChange={(e) => {
              setThickness(e.target.value);
              setCostPerSheet(thicknessOptions[e.target.value].costPerSheet);
            }}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {Object.entries(thicknessOptions).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label} ({val.weightPerSheet} lbs/sheet)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="waste" className="block text-sm font-medium text-gray-700 mb-1">
            Waste Percentage (%)
          </label>
          <input
            id="waste"
            type="number"
            min={0}
            max={50}
            value={wastePercent}
            onChange={(e) => setWastePercent(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">10% for simple layouts, 15%+ for complex cuts</p>
        </div>

        <div>
          <label htmlFor="costPerSheet" className="block text-sm font-medium text-gray-700 mb-1">
            Cost per Sheet ($)
          </label>
          <input
            id="costPerSheet"
            type="number"
            min={0}
            step={0.5}
            value={costPerSheet}
            onChange={(e) => setCostPerSheet(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Plywood Estimate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Area to Cover</p>
            <p className="text-2xl font-bold text-brand-blue">{area.toLocaleString()} sq ft</p>
            <p className="text-sm text-gray-500">
              {inputMode === "dimensions" ? `${length} ft x ${width} ft` : "entered directly"}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sheets Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{sheetsNeeded}</p>
            <p className="text-sm text-gray-500">
              {sheetWidth} ft x {sheetLength} ft sheets
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sheet Area</p>
            <p className="text-2xl font-bold text-brand-blue">{sheetArea} sq ft</p>
            <p className="text-sm text-gray-500">per sheet</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Waste Allowance</p>
            <p className="text-2xl font-bold text-brand-orange">
              {wasteSheets} sheet{wasteSheets !== 1 ? "s" : ""}
            </p>
            <p className="text-sm text-gray-500">~{wasteSqFt.toFixed(0)} sq ft extra</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Weight</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totalWeight.toLocaleString()} lbs
            </p>
            <p className="text-sm text-gray-500">
              {weightPerSheet} lbs/sheet ({opt.label})
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Estimated Cost</p>
            <p className="text-2xl font-bold text-brand-orange">
              ${totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-gray-500">${costPerSheet}/sheet</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

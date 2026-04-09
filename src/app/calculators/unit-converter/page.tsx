"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type Category = "length" | "area" | "volume" | "weight" | "temperature";

interface UnitDef {
  key: string;
  label: string;
  /** Factor to convert ONE of this unit into the category's base unit.
   *  For temperature the conversion is handled separately. */
  toBase: number;
}

/* ------------------------------------------------------------------ */
/*  Unit definitions (base units: ft, sq ft, cu ft, lb, degF)          */
/* ------------------------------------------------------------------ */
const LENGTH_UNITS: UnitDef[] = [
  { key: "ft", label: "Feet", toBase: 1 },
  { key: "in", label: "Inches", toBase: 1 / 12 },
  { key: "yd", label: "Yards", toBase: 3 },
  { key: "m", label: "Meters", toBase: 3.28084 },
  { key: "cm", label: "Centimeters", toBase: 0.0328084 },
  { key: "mm", label: "Millimeters", toBase: 0.00328084 },
];

const AREA_UNITS: UnitDef[] = [
  { key: "sqft", label: "Square Feet", toBase: 1 },
  { key: "sqyd", label: "Square Yards", toBase: 9 },
  { key: "sqm", label: "Square Meters", toBase: 10.7639 },
  { key: "acre", label: "Acres", toBase: 43560 },
  { key: "sqin", label: "Square Inches", toBase: 1 / 144 },
];

const VOLUME_UNITS: UnitDef[] = [
  { key: "cuyd", label: "Cubic Yards", toBase: 27 },
  { key: "cuft", label: "Cubic Feet", toBase: 1 },
  { key: "cuin", label: "Cubic Inches", toBase: 1 / 1728 },
  { key: "gal", label: "Gallons (US)", toBase: 0.133681 },
  { key: "l", label: "Liters", toBase: 0.0353147 },
  { key: "cum", label: "Cubic Meters", toBase: 35.3147 },
];

const WEIGHT_UNITS: UnitDef[] = [
  { key: "lb", label: "Pounds", toBase: 1 },
  { key: "ton", label: "Tons (US)", toBase: 2000 },
  { key: "kg", label: "Kilograms", toBase: 2.20462 },
  { key: "mt", label: "Metric Tons", toBase: 2204.62 },
];

/** Temperature is handled with custom functions, but we still need unit defs
 *  for the dropdowns. toBase is unused. */
const TEMP_UNITS: UnitDef[] = [
  { key: "f", label: "Fahrenheit", toBase: 1 },
  { key: "c", label: "Celsius", toBase: 1 },
];

const CATEGORY_META: Record<
  Category,
  { label: string; units: UnitDef[]; defaultFrom: string; defaultTo: string }
> = {
  length: { label: "Length", units: LENGTH_UNITS, defaultFrom: "ft", defaultTo: "m" },
  area: { label: "Area", units: AREA_UNITS, defaultFrom: "sqft", defaultTo: "sqm" },
  volume: { label: "Volume", units: VOLUME_UNITS, defaultFrom: "cuyd", defaultTo: "cuft" },
  weight: { label: "Weight", units: WEIGHT_UNITS, defaultFrom: "lb", defaultTo: "kg" },
  temperature: { label: "Temperature", units: TEMP_UNITS, defaultFrom: "f", defaultTo: "c" },
};

/* ------------------------------------------------------------------ */
/*  Conversion helpers                                                 */
/* ------------------------------------------------------------------ */
function convert(
  value: number,
  fromKey: string,
  toKey: string,
  category: Category
): number {
  if (category === "temperature") {
    return convertTemp(value, fromKey, toKey);
  }
  const units = CATEGORY_META[category].units;
  const from = units.find((u) => u.key === fromKey);
  const to = units.find((u) => u.key === toKey);
  if (!from || !to) return 0;
  const baseValue = value * from.toBase; // convert to base
  return baseValue / to.toBase; // convert from base to target
}

function convertTemp(value: number, from: string, to: string): number {
  if (from === to) return value;
  if (from === "f" && to === "c") return (value - 32) * (5 / 9);
  if (from === "c" && to === "f") return value * (9 / 5) + 32;
  return value;
}

function formatResult(n: number): string {
  if (Number.isNaN(n) || !Number.isFinite(n)) return "0";
  // Use up to 6 decimal places, trimming trailing zeros
  return parseFloat(n.toFixed(6)).toLocaleString("en-US", {
    maximumFractionDigits: 6,
  });
}

/* ------------------------------------------------------------------ */
/*  Shared styles (matching other calculators)                         */
/* ------------------------------------------------------------------ */
const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";
const selectClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";

/* ------------------------------------------------------------------ */
/*  Contractor quick-reference facts                                   */
/* ------------------------------------------------------------------ */
const CONTRACTOR_FACTS = [
  "1 cubic yard = 27 cubic feet",
  "1 square (roofing) = 100 sq ft",
  "1 board foot = 144 cubic inches",
  "1 ton (US) = 2,000 lbs",
  "1 yard = 3 feet = 36 inches",
  "1 acre = 43,560 sq ft",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function UnitConverterPage() {
  const [category, setCategory] = useState<Category>("length");
  const [inputValue, setInputValue] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState<string>(
    CATEGORY_META.length.defaultFrom
  );
  const [toUnit, setToUnit] = useState<string>(
    CATEGORY_META.length.defaultTo
  );

  const meta = CATEGORY_META[category];
  const result = convert(inputValue, fromUnit, toUnit, category);

  function switchCategory(cat: Category) {
    setCategory(cat);
    setFromUnit(CATEGORY_META[cat].defaultFrom);
    setToUnit(CATEGORY_META[cat].defaultTo);
    setInputValue(1);
  }

  function swapUnits() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  const fromLabel =
    meta.units.find((u) => u.key === fromUnit)?.label ?? fromUnit;
  const toLabel = meta.units.find((u) => u.key === toUnit)?.label ?? toUnit;

  return (
    <CalculatorLayout
      title="Construction Unit Converter"
      description="Convert between common construction units for length, area, volume, weight, and temperature. See a full quick-reference table for every conversion at a glance."
      trade="General Contracting"
      howToUse="Choose a measurement category (Length, Area, Volume, Weight, or Temperature), enter a value, and select the units you want to convert from and to. The result updates instantly. Use the swap button to quickly reverse the conversion direction. The quick-reference table below the result shows all conversions from your input value at once."
      formula="value x (from-unit factor / to-unit factor). Temperature: F to C = (F - 32) x 5/9. C to F = C x 9/5 + 32."
    >
      {/* ---- Category Tabs ---- */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(Object.keys(CATEGORY_META) as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => switchCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              category === cat
                ? "bg-brand-blue text-white border-brand-blue"
                : "bg-white text-gray-700 border-gray-300 hover:border-brand-orange"
            }`}
          >
            {CATEGORY_META[cat].label}
          </button>
        ))}
      </div>

      {/* ---- Converter Controls ---- */}
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 items-end mb-6">
        {/* Value */}
        <div className="sm:col-span-2">
          <label className={labelClass}>Value</label>
          <input
            type="number"
            step="any"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        {/* From */}
        <div className="sm:col-span-2">
          <label className={labelClass}>From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className={selectClass}
          >
            {meta.units.map((u) => (
              <option key={u.key} value={u.key}>
                {u.label}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center sm:col-span-1">
          <button
            onClick={swapUnits}
            className="mt-1 p-2 rounded-full border border-gray-300 hover:border-brand-orange hover:text-brand-orange transition-colors"
            aria-label="Swap units"
            title="Swap units"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </button>
        </div>

        {/* To */}
        <div className="sm:col-span-2">
          <label className={labelClass}>To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className={selectClass}
          >
            {meta.units.map((u) => (
              <option key={u.key} value={u.key}>
                {u.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ---- Primary Result ---- */}
      <div className="bg-brand-gray rounded-xl p-6 mb-6">
        <div className="bg-white rounded-lg p-5 text-center border-2 border-brand-orange">
          <p className="text-sm text-gray-600 mb-1">
            {formatResult(inputValue)} {fromLabel}
          </p>
          <p className="text-3xl font-bold text-brand-blue">
            {formatResult(result)}
          </p>
          <p className="text-sm text-gray-500 mt-1">{toLabel}</p>
        </div>
      </div>

      {/* ---- Quick-Reference Table ---- */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-brand-blue mb-3">
          All Conversions from {formatResult(inputValue)} {fromLabel}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-2 font-medium text-gray-700 border-b border-gray-200">
                  Unit
                </th>
                <th className="text-right px-4 py-2 font-medium text-gray-700 border-b border-gray-200">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {meta.units.map((u) => {
                const converted = convert(inputValue, fromUnit, u.key, category);
                const isSelected = u.key === toUnit;
                return (
                  <tr
                    key={u.key}
                    className={
                      isSelected
                        ? "bg-orange-50 font-semibold"
                        : "even:bg-gray-50"
                    }
                  >
                    <td className="px-4 py-2 border-b border-gray-100">
                      {u.label}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100 text-right font-mono">
                      {formatResult(converted)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---- Contractor Quick-Reference ---- */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="text-md font-bold text-brand-blue mb-3">
          Common Contractor Conversions
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
          {CONTRACTOR_FACTS.map((fact) => (
            <li
              key={fact}
              className="text-sm text-gray-700 flex items-start gap-2"
            >
              <span className="text-brand-orange font-bold mt-0.5">&#8226;</span>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </CalculatorLayout>
  );
}

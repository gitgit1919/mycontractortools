"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type JoistSize = "2x6" | "2x8" | "2x10" | "2x12";
type Spacing = 12 | 16 | 24;
type Species = "douglas-fir" | "southern-pine" | "spruce-pine-fir" | "hem-fir";
type LiveLoad = 30 | 40;

/**
 * IRC-based maximum floor joist spans (feet-inches converted to decimal feet).
 * For #2 grade lumber, L/360 deflection limit.
 * Indexed by [species][joistSize][liveLoad][spacing].
 */
const SPAN_TABLE: Record<
  Species,
  Record<JoistSize, Record<LiveLoad, Record<Spacing, number>>>
> = {
  "douglas-fir": {
    "2x6": {
      30: { 12: 11.0, 16: 10.0, 24: 8.5 },
      40: { 12: 10.0, 16: 9.0, 24: 7.5 },
    },
    "2x8": {
      30: { 12: 14.5, 16: 13.0, 24: 11.0 },
      40: { 12: 13.0, 16: 12.0, 24: 10.0 },
    },
    "2x10": {
      30: { 12: 18.5, 16: 16.5, 24: 14.0 },
      40: { 12: 16.5, 16: 15.0, 24: 12.5 },
    },
    "2x12": {
      30: { 12: 22.0, 16: 20.0, 24: 17.0 },
      40: { 12: 20.5, 16: 18.5, 24: 15.5 },
    },
  },
  "southern-pine": {
    "2x6": {
      30: { 12: 11.5, 16: 10.5, 24: 9.0 },
      40: { 12: 10.5, 16: 9.5, 24: 8.0 },
    },
    "2x8": {
      30: { 12: 15.0, 16: 13.5, 24: 11.5 },
      40: { 12: 13.5, 16: 12.5, 24: 10.5 },
    },
    "2x10": {
      30: { 12: 19.0, 16: 17.5, 24: 14.5 },
      40: { 12: 17.5, 16: 15.5, 24: 13.0 },
    },
    "2x12": {
      30: { 12: 23.0, 16: 21.0, 24: 17.5 },
      40: { 12: 21.0, 16: 19.0, 24: 16.0 },
    },
  },
  "spruce-pine-fir": {
    "2x6": {
      30: { 12: 10.5, 16: 9.5, 24: 8.0 },
      40: { 12: 9.5, 16: 8.5, 24: 7.0 },
    },
    "2x8": {
      30: { 12: 13.5, 16: 12.5, 24: 10.5 },
      40: { 12: 12.5, 16: 11.0, 24: 9.5 },
    },
    "2x10": {
      30: { 12: 17.5, 16: 15.5, 24: 13.0 },
      40: { 12: 15.5, 16: 14.0, 24: 12.0 },
    },
    "2x12": {
      30: { 12: 21.0, 16: 19.0, 24: 16.0 },
      40: { 12: 19.0, 16: 17.5, 24: 14.5 },
    },
  },
  "hem-fir": {
    "2x6": {
      30: { 12: 10.5, 16: 9.5, 24: 8.0 },
      40: { 12: 9.5, 16: 8.5, 24: 7.0 },
    },
    "2x8": {
      30: { 12: 14.0, 16: 12.5, 24: 10.5 },
      40: { 12: 12.5, 16: 11.5, 24: 9.5 },
    },
    "2x10": {
      30: { 12: 17.5, 16: 16.0, 24: 13.5 },
      40: { 12: 16.0, 16: 14.5, 24: 12.0 },
    },
    "2x12": {
      30: { 12: 21.5, 16: 19.5, 24: 16.5 },
      40: { 12: 19.5, 16: 18.0, 24: 15.0 },
    },
  },
};

const JOIST_SIZES: JoistSize[] = ["2x6", "2x8", "2x10", "2x12"];
const SPACINGS: Spacing[] = [12, 16, 24];

const SPECIES_OPTIONS: { value: Species; label: string }[] = [
  { value: "douglas-fir", label: "Douglas Fir-Larch #2" },
  { value: "southern-pine", label: "Southern Pine #2" },
  { value: "spruce-pine-fir", label: "Spruce-Pine-Fir #2" },
  { value: "hem-fir", label: "Hem-Fir #2" },
];

/** Actual depth in inches for deflection calc */
const JOIST_DEPTHS: Record<JoistSize, number> = {
  "2x6": 5.5,
  "2x8": 7.25,
  "2x10": 9.25,
  "2x12": 11.25,
};

/** Moment of inertia for 1.5" wide lumber (in^4) */
function momentOfInertia(depth: number): number {
  return (1.5 * Math.pow(depth, 3)) / 12;
}

export default function FloorJoistSpanCalculator() {
  const [species, setSpecies] = useState<Species>("douglas-fir");
  const [joistSize, setJoistSize] = useState<JoistSize>("2x10");
  const [spacing, setSpacing] = useState<Spacing>(16);
  const [liveLoad, setLiveLoad] = useState<LiveLoad>(40);
  const [deadLoad, setDeadLoad] = useState<number>(10);
  const [actualSpan, setActualSpan] = useState<number>(14);

  // Look up max span
  const maxSpan = SPAN_TABLE[species][joistSize][liveLoad][spacing];

  // Deflection check: delta = 5 * w * L^4 / (384 * E * I)
  // E for #2 lumber approx 1,600,000 psi (Douglas Fir), we simplify
  const E_VALUES: Record<Species, number> = {
    "douglas-fir": 1600000,
    "southern-pine": 1600000,
    "spruce-pine-fir": 1400000,
    "hem-fir": 1300000,
  };

  const E = E_VALUES[species];
  const depth = JOIST_DEPTHS[joistSize];
  const I = momentOfInertia(depth);
  const spacingFt = spacing / 12;

  // w in lbs per inch (live load only for L/360)
  const wLive = (liveLoad * spacingFt) / 12; // lbs per inch
  const spanInches = actualSpan * 12;
  const deflection =
    spanInches > 0
      ? (5 * wLive * Math.pow(spanInches, 4)) / (384 * E * I)
      : 0;
  const allowableDeflection = spanInches / 360;
  const deflectionPass = deflection <= allowableDeflection;

  const spanPass = actualSpan <= maxSpan;

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="Floor Joist Span Calculator"
      description="Find maximum allowable floor joist spans based on IRC residential span tables. Select joist size, spacing, lumber species, and live load to verify your joist layout meets code."
      trade="Carpentry"
      howToUse="Select the lumber species and grade, joist size, on-center spacing, and the design live load. Enter your actual planned span to see if it passes. The calculator checks both the IRC span table and L/360 deflection limit for live loads. Use the comparison table to quickly compare all sizes and spacings."
      formula="Max span from IRC Table R502.3.1. Deflection check: delta = 5wL^4 / (384EI). Allowable deflection = L/360 for live loads. I = bd^3/12 where b=1.5 in (nominal 2x). E varies by species."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="species" className={labelClass}>
            Lumber Species / Grade
          </label>
          <select
            id="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value as Species)}
            className={inputClass}
          >
            {SPECIES_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="joistSize" className={labelClass}>
            Joist Size
          </label>
          <select
            id="joistSize"
            value={joistSize}
            onChange={(e) => setJoistSize(e.target.value as JoistSize)}
            className={inputClass}
          >
            {JOIST_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="spacing" className={labelClass}>
            On-Center Spacing
          </label>
          <select
            id="spacing"
            value={spacing}
            onChange={(e) => setSpacing(Number(e.target.value) as Spacing)}
            className={inputClass}
          >
            {SPACINGS.map((s) => (
              <option key={s} value={s}>
                {s}&quot; OC
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="liveLoad" className={labelClass}>
            Design Live Load
          </label>
          <select
            id="liveLoad"
            value={liveLoad}
            onChange={(e) => setLiveLoad(Number(e.target.value) as LiveLoad)}
            className={inputClass}
          >
            <option value={30}>30 psf (sleeping areas)</option>
            <option value={40}>40 psf (living areas)</option>
          </select>
        </div>

        <div>
          <label htmlFor="deadLoad" className={labelClass}>
            Dead Load (psf)
          </label>
          <input
            id="deadLoad"
            type="number"
            min={5}
            max={30}
            value={deadLoad}
            onChange={(e) => setDeadLoad(Number(e.target.value))}
            className={inputClass}
          />
          <p className="text-xs text-gray-500 mt-1">
            Typical: 10 psf for standard floor assembly
          </p>
        </div>

        <div>
          <label htmlFor="actualSpan" className={labelClass}>
            Your Actual Span (ft)
          </label>
          <input
            id="actualSpan"
            type="number"
            min={1}
            max={30}
            step={0.5}
            value={actualSpan}
            onChange={(e) => setActualSpan(Number(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Max Allowable Span</p>
            <p className="text-2xl font-bold text-brand-blue">
              {maxSpan.toFixed(1)}
            </p>
            <p className="text-sm text-gray-500">feet</p>
          </div>

          <div
            className={`rounded-lg p-4 text-center border ${
              spanPass
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            <p className="text-sm text-gray-600">Span Check</p>
            <p
              className={`text-2xl font-bold ${
                spanPass ? "text-green-700" : "text-red-700"
              }`}
            >
              {spanPass ? "PASS" : "FAIL"}
            </p>
            <p className="text-sm text-gray-500">
              {actualSpan} ft vs {maxSpan.toFixed(1)} ft max
            </p>
          </div>

          <div
            className={`rounded-lg p-4 text-center border ${
              deflectionPass
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            <p className="text-sm text-gray-600">Deflection (L/360)</p>
            <p
              className={`text-2xl font-bold ${
                deflectionPass ? "text-green-700" : "text-red-700"
              }`}
            >
              {deflectionPass ? "PASS" : "FAIL"}
            </p>
            <p className="text-sm text-gray-500">
              {deflection.toFixed(3)}&quot; vs {allowableDeflection.toFixed(3)}&quot; max
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <h3 className="text-lg font-bold text-brand-blue mb-3 mt-6">
          Max Span Comparison — {SPECIES_OPTIONS.find((s) => s.value === species)?.label} at {liveLoad} psf
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="px-3 py-2 text-left rounded-tl-lg">
                  Joist Size
                </th>
                <th className="px-3 py-2 text-right">12&quot; OC</th>
                <th className="px-3 py-2 text-right">16&quot; OC</th>
                <th className="px-3 py-2 text-right rounded-tr-lg">
                  24&quot; OC
                </th>
              </tr>
            </thead>
            <tbody>
              {JOIST_SIZES.map((size, i) => (
                <tr
                  key={size}
                  className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${
                    size === joistSize ? "ring-2 ring-brand-orange" : ""
                  }`}
                >
                  <td className="px-3 py-2 font-medium">{size}</td>
                  {SPACINGS.map((sp) => (
                    <td key={sp} className="px-3 py-2 text-right">
                      {SPAN_TABLE[species][size][liveLoad][sp].toFixed(1)} ft
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CalculatorLayout>
  );
}

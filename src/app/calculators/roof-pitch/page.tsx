"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const COMMON_PITCHES = [
  { pitch: "1:12", angle: 4.76, slope: 8.33, multiplier: 1.003 },
  { pitch: "2:12", angle: 9.46, slope: 16.67, multiplier: 1.014 },
  { pitch: "3:12", angle: 14.04, slope: 25.0, multiplier: 1.031 },
  { pitch: "4:12", angle: 18.43, slope: 33.33, multiplier: 1.054 },
  { pitch: "5:12", angle: 22.62, slope: 41.67, multiplier: 1.083 },
  { pitch: "6:12", angle: 26.57, slope: 50.0, multiplier: 1.118 },
  { pitch: "7:12", angle: 30.26, slope: 58.33, multiplier: 1.158 },
  { pitch: "8:12", angle: 33.69, slope: 66.67, multiplier: 1.202 },
  { pitch: "9:12", angle: 36.87, slope: 75.0, multiplier: 1.25 },
  { pitch: "10:12", angle: 39.81, slope: 83.33, multiplier: 1.302 },
  { pitch: "11:12", angle: 42.51, slope: 91.67, multiplier: 1.357 },
  { pitch: "12:12", angle: 45.0, slope: 100.0, multiplier: 1.414 },
];

export default function RoofPitchCalculator() {
  const [mode, setMode] = useState<"rise-run" | "ratio">("rise-run");
  const [rise, setRise] = useState<number>(6);
  const [run, setRun] = useState<number>(12);
  const [ratioRise, setRatioRise] = useState<number>(6);

  // Calculations
  const effectiveRise = mode === "rise-run" ? rise : ratioRise;
  const effectiveRun = mode === "rise-run" ? run : 12;

  const pitchPer12 = effectiveRun > 0 ? (effectiveRise / effectiveRun) * 12 : 0;
  const angleDeg =
    effectiveRun > 0
      ? (Math.atan(effectiveRise / effectiveRun) * 180) / Math.PI
      : 0;
  const slopePercent =
    effectiveRun > 0 ? (effectiveRise / effectiveRun) * 100 : 0;
  const areaMultiplier =
    effectiveRun > 0
      ? Math.sqrt(1 + Math.pow(effectiveRise / effectiveRun, 2))
      : 1;

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="Roof Pitch Calculator"
      description="Calculate roof pitch as X:12, angle in degrees, slope percentage, and the roof area multiplier. Enter rise and run measurements or a pitch ratio to get instant results."
      trade="Roofing"
      howToUse="Select your input mode: enter a rise and run in inches, or enter a pitch ratio directly (the rise per 12 inches of run). The calculator outputs the pitch in X:12 format, the angle in degrees, slope as a percentage, and the roof area multiplier (used to convert flat area to actual roof area). Scroll down for a handy reference table of common pitches."
      formula="Pitch = (Rise / Run) x 12. Angle = arctan(Rise / Run) in degrees. Slope % = (Rise / Run) x 100. Area Multiplier = sqrt(1 + (Rise / Run)^2)."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Input Mode */}
        <div className="sm:col-span-2">
          <label className={labelClass}>Input Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as "rise-run" | "ratio")}
            className={inputClass}
          >
            <option value="rise-run">Rise &amp; Run (inches)</option>
            <option value="ratio">Pitch Ratio (X:12)</option>
          </select>
        </div>

        {mode === "rise-run" ? (
          <>
            <div>
              <label htmlFor="rise" className={labelClass}>
                Rise (inches)
              </label>
              <input
                id="rise"
                type="number"
                min={0}
                step={0.25}
                value={rise}
                onChange={(e) => setRise(Number(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="run" className={labelClass}>
                Run (inches)
              </label>
              <input
                id="run"
                type="number"
                min={0.1}
                step={0.25}
                value={run}
                onChange={(e) => setRun(Number(e.target.value))}
                className={inputClass}
              />
            </div>
          </>
        ) : (
          <div>
            <label htmlFor="ratioRise" className={labelClass}>
              Pitch (rise per 12 inches of run)
            </label>
            <div className="flex items-center gap-2">
              <input
                id="ratioRise"
                type="number"
                min={0}
                step={0.25}
                value={ratioRise}
                onChange={(e) => setRatioRise(Number(e.target.value))}
                className={inputClass}
              />
              <span className="text-gray-600 font-medium whitespace-nowrap">
                : 12
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Pitch</p>
            <p className="text-2xl font-bold text-brand-blue">
              {pitchPer12.toFixed(1)}:12
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Angle</p>
            <p className="text-2xl font-bold text-brand-blue">
              {angleDeg.toFixed(1)}&deg;
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Slope</p>
            <p className="text-2xl font-bold text-brand-blue">
              {slopePercent.toFixed(1)}%
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Area Multiplier</p>
            <p className="text-2xl font-bold text-brand-orange">
              {areaMultiplier.toFixed(3)}
            </p>
          </div>
        </div>

        {/* Pitch Factor Table */}
        <h3 className="text-lg font-bold text-brand-blue mb-3">
          Common Pitch Factor Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="px-3 py-2 text-left rounded-tl-lg">Pitch</th>
                <th className="px-3 py-2 text-right">Angle</th>
                <th className="px-3 py-2 text-right">Slope %</th>
                <th className="px-3 py-2 text-right rounded-tr-lg">
                  Area Multiplier
                </th>
              </tr>
            </thead>
            <tbody>
              {COMMON_PITCHES.map((p, i) => (
                <tr
                  key={p.pitch}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-3 py-2 font-medium">{p.pitch}</td>
                  <td className="px-3 py-2 text-right">
                    {p.angle.toFixed(1)}&deg;
                  </td>
                  <td className="px-3 py-2 text-right">
                    {p.slope.toFixed(1)}%
                  </td>
                  <td className="px-3 py-2 text-right">{p.multiplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CalculatorLayout>
  );
}

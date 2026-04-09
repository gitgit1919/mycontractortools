"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type InputMode = "corner_angle" | "num_sides" | "crown_molding";

const PRESETS: { label: string; sides?: number; angle?: number }[] = [
  { label: "90\u00b0 Corner (Square)", angle: 90 },
  { label: "Pentagon (5 sides)", sides: 5 },
  { label: "Hexagon (6 sides)", sides: 6 },
  { label: "Octagon (8 sides)", sides: 8 },
  { label: "120\u00b0 Corner", angle: 120 },
  { label: "135\u00b0 Corner", angle: 135 },
];

type SpringAngle = "38" | "45";

function computeCrownMiter(cornerAngle: number, springAngle: number) {
  const cornerRad = (cornerAngle * Math.PI) / 180;
  const springRad = (springAngle * Math.PI) / 180;

  const miterAngle =
    Math.atan(Math.sin(springRad) / Math.tan(cornerRad / 2)) * (180 / Math.PI);
  const bevelAngle =
    Math.asin(Math.cos(springRad) * Math.cos(cornerRad / 2)) * (180 / Math.PI);

  return { miterAngle: Math.abs(miterAngle), bevelAngle: Math.abs(bevelAngle) };
}

export default function MiterAngleCalculator() {
  const [inputMode, setInputMode] = useState<InputMode>("corner_angle");
  const [cornerAngle, setCornerAngle] = useState<number>(90);
  const [numSides, setNumSides] = useState<number>(4);
  const [materialWidth, setMaterialWidth] = useState<string>("");
  const [springAngle, setSpringAngle] = useState<SpringAngle>("38");
  const [crownCornerAngle, setCrownCornerAngle] = useState<number>(90);

  // Calculate based on mode
  let effectiveCornerAngle = cornerAngle;
  if (inputMode === "num_sides") {
    effectiveCornerAngle = ((numSides - 2) * 180) / numSides;
  }

  const miterAngle = inputMode === "crown_molding" ? 0 : (180 - effectiveCornerAngle) / 2;
  const complementaryAngle = 90 - miterAngle;
  const bevelAngle = 0; // flat miter, no bevel for simple joints

  // Crown molding compound miter
  const crownResult = computeCrownMiter(crownCornerAngle, Number(springAngle));

  // Material width offset (if provided)
  const width = parseFloat(materialWidth);
  const hasWidth = !isNaN(width) && width > 0;
  const offsetDistance = hasWidth
    ? width * Math.tan((miterAngle * Math.PI) / 180)
    : null;

  return (
    <CalculatorLayout
      title="Miter Angle Calculator"
      description="Calculate miter angles, bevel angles, and compound miter settings for any corner. Includes presets for common polygons and crown molding spring angles."
      trade="Carpentry"
      howToUse="Choose your input method: enter a corner angle directly, specify the number of polygon sides, or select crown molding mode. For simple miters, the calculator splits the corner angle to find the saw miter setting. For crown molding, enter the wall corner angle and spring angle to get compound miter and bevel settings for your saw."
      formula="Miter Angle = (180 - Corner Angle) / 2. For a regular polygon: Corner Angle = (N - 2) x 180 / N. Crown Molding Miter = arctan(sin(spring) / tan(corner / 2)). Crown Bevel = arcsin(cos(spring) x cos(corner / 2))."
    >
      {/* Mode selector */}
      <div className="mb-6">
        <label htmlFor="inputMode" className="block text-sm font-medium text-gray-700 mb-1">
          Calculation Mode
        </label>
        <select
          id="inputMode"
          value={inputMode}
          onChange={(e) => setInputMode(e.target.value as InputMode)}
          className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
        >
          <option value="corner_angle">Corner Angle</option>
          <option value="num_sides">Number of Sides (Polygon)</option>
          <option value="crown_molding">Crown Molding (Compound Miter)</option>
        </select>
      </div>

      {/* Presets */}
      {inputMode !== "crown_molding" && (
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Common Presets</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => {
                  if (p.sides) {
                    setInputMode("num_sides");
                    setNumSides(p.sides);
                  } else if (p.angle) {
                    setInputMode("corner_angle");
                    setCornerAngle(p.angle);
                  }
                }}
                className="px-3 py-1.5 text-sm bg-blue-50 text-brand-blue border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {inputMode === "corner_angle" && (
          <div>
            <label htmlFor="cornerAngle" className="block text-sm font-medium text-gray-700 mb-1">
              Corner Angle (degrees)
            </label>
            <input
              id="cornerAngle"
              type="number"
              min={1}
              max={359}
              step={0.5}
              value={cornerAngle}
              onChange={(e) => setCornerAngle(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        {inputMode === "num_sides" && (
          <div>
            <label htmlFor="numSides" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Sides
            </label>
            <input
              id="numSides"
              type="number"
              min={3}
              max={36}
              step={1}
              value={numSides}
              onChange={(e) => setNumSides(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        {inputMode === "crown_molding" && (
          <>
            <div>
              <label htmlFor="crownCornerAngle" className="block text-sm font-medium text-gray-700 mb-1">
                Wall Corner Angle (degrees)
              </label>
              <input
                id="crownCornerAngle"
                type="number"
                min={1}
                max={359}
                step={0.5}
                value={crownCornerAngle}
                onChange={(e) => setCrownCornerAngle(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="springAngle" className="block text-sm font-medium text-gray-700 mb-1">
                Spring Angle
              </label>
              <select
                id="springAngle"
                value={springAngle}
                onChange={(e) => setSpringAngle(e.target.value as SpringAngle)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              >
                <option value="38">38&deg; (most common)</option>
                <option value="45">45&deg;</option>
              </select>
            </div>
          </>
        )}

        {inputMode !== "crown_molding" && (
          <div>
            <label htmlFor="materialWidth" className="block text-sm font-medium text-gray-700 mb-1">
              Material Width (inches, optional)
            </label>
            <input
              id="materialWidth"
              type="number"
              min={0}
              step={0.125}
              placeholder="e.g. 3.5"
              value={materialWidth}
              onChange={(e) => setMaterialWidth(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>

        {inputMode === "crown_molding" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Saw Miter Angle</p>
              <p className="text-2xl font-bold text-brand-orange">{crownResult.miterAngle.toFixed(1)}&deg;</p>
              <p className="text-sm text-gray-500">miter gauge setting</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Saw Bevel Angle</p>
              <p className="text-2xl font-bold text-brand-orange">{crownResult.bevelAngle.toFixed(1)}&deg;</p>
              <p className="text-sm text-gray-500">blade tilt setting</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Wall Corner Angle</p>
              <p className="text-2xl font-bold text-brand-blue">{crownCornerAngle.toFixed(1)}&deg;</p>
              <p className="text-sm text-gray-500">between walls</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Spring Angle</p>
              <p className="text-2xl font-bold text-brand-blue">{springAngle}&deg;</p>
              <p className="text-sm text-gray-500">from wall</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Corner Angle</p>
              <p className="text-2xl font-bold text-brand-blue">{effectiveCornerAngle.toFixed(1)}&deg;</p>
              <p className="text-sm text-gray-500">
                {inputMode === "num_sides" ? `${numSides}-sided polygon` : "between pieces"}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Miter Angle (each piece)</p>
              <p className="text-2xl font-bold text-brand-orange">{miterAngle.toFixed(2)}&deg;</p>
              <p className="text-sm text-gray-500">saw miter setting</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Complementary Angle</p>
              <p className="text-2xl font-bold text-brand-blue">{complementaryAngle.toFixed(2)}&deg;</p>
              <p className="text-sm text-gray-500">90&deg; &minus; miter</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Bevel Angle</p>
              <p className="text-2xl font-bold text-brand-blue">{bevelAngle.toFixed(1)}&deg;</p>
              <p className="text-sm text-gray-500">blade tilt (flat miter)</p>
            </div>
            {offsetDistance !== null && (
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Miter Offset</p>
                <p className="text-2xl font-bold text-brand-blue">{offsetDistance.toFixed(3)}&quot;</p>
                <p className="text-sm text-gray-500">long point to short point</p>
              </div>
            )}
            {inputMode === "num_sides" && (
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Total Interior Angles</p>
                <p className="text-2xl font-bold text-brand-blue">{((numSides - 2) * 180).toFixed(0)}&deg;</p>
                <p className="text-sm text-gray-500">(N-2) x 180</p>
              </div>
            )}
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const PAVER_SIZES: { label: string; widthIn: number; lengthIn: number }[] = [
  { label: '4" x 8"', widthIn: 4, lengthIn: 8 },
  { label: '6" x 6"', widthIn: 6, lengthIn: 6 },
  { label: '6" x 9"', widthIn: 6, lengthIn: 9 },
  { label: '6" x 12"', widthIn: 6, lengthIn: 12 },
  { label: '8" x 8"', widthIn: 8, lengthIn: 8 },
  { label: '12" x 12"', widthIn: 12, lengthIn: 12 },
  { label: '16" x 16"', widthIn: 16, lengthIn: 16 },
];

const JOINT_WIDTHS: { label: string; inches: number }[] = [
  { label: '1/8"', inches: 0.125 },
  { label: '1/4"', inches: 0.25 },
  { label: '3/8"', inches: 0.375 },
];

const PATTERNS: { label: string; wasteAdd: number }[] = [
  { label: "Running Bond", wasteAdd: 0 },
  { label: "Herringbone (+10% waste)", wasteAdd: 10 },
  { label: "Basketweave", wasteAdd: 0 },
];

type AreaShape = "rectangle" | "circle" | "irregular";

export default function PaverCalculator() {
  const [shape, setShape] = useState<AreaShape>("rectangle");
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(15);
  const [diameter, setDiameter] = useState<number>(12);
  const [irregularSqFt, setIrregularSqFt] = useState<number>(200);
  const [paverSizeIdx, setPaverSizeIdx] = useState<number>(0); // default 4x8
  const [jointIdx, setJointIdx] = useState<number>(0); // default 1/8"
  const [patternIdx, setPatternIdx] = useState<number>(0); // default running bond
  const [wasteFactor, setWasteFactor] = useState<number>(5);
  const [baseDepth, setBaseDepth] = useState<number>(4); // inches

  const paver = PAVER_SIZES[paverSizeIdx];
  const joint = JOINT_WIDTHS[jointIdx];
  const pattern = PATTERNS[patternIdx];
  const effectiveWaste = wasteFactor + pattern.wasteAdd;

  // --- Area Calculation ---
  let totalArea = 0;
  let perimeter = 0;

  if (shape === "rectangle") {
    totalArea = length * width;
    perimeter = 2 * (length + width);
  } else if (shape === "circle") {
    const radius = diameter / 2;
    totalArea = Math.PI * radius * radius;
    perimeter = Math.PI * diameter;
  } else {
    totalArea = irregularSqFt;
    // Approximate perimeter as if square for edge restraint estimate
    perimeter = 4 * Math.sqrt(irregularSqFt);
  }

  // --- Paver Calculations ---
  // Pavers per sq ft = 144 / ((paver_width + joint) x (paver_length + joint))
  const paversPerSqFt =
    144 / ((paver.widthIn + joint.inches) * (paver.lengthIn + joint.inches));
  const totalPavers = Math.ceil(totalArea * paversPerSqFt * (1 + effectiveWaste / 100));

  // --- Edge Restraint ---
  const edgeRestraintLf = Math.ceil(perimeter);

  // --- Gravel Base ---
  // Gravel base CY = area x depth_ft / 27
  const baseDepthFt = baseDepth / 12;
  const gravelCY = (totalArea * baseDepthFt) / 27;

  // --- Sand Setting Bed ---
  // Sand CY = area x (1/12) / 27  (1 inch bed)
  const sandCY = (totalArea * (1 / 12)) / 27;

  // --- Polymeric Sand for Joints ---
  // Coverage: ~50 lb bag covers 30-75 sq ft depending on paver size and joint width
  // Smaller pavers + wider joints = more sand needed (lower coverage)
  // Estimate: coverage = base coverage adjusted by paver area and joint width
  const paverAreaSqIn = paver.widthIn * paver.lengthIn;
  // Smaller pavers have more joints per sq ft, wider joints need more fill
  // Base: 50 sq ft for a mid-range paver. Scale inversely with joint width and paver perimeter-to-area ratio.
  const baseCoverage = 50; // sq ft per bag for average conditions
  const jointFactor = 0.25 / joint.inches; // normalize to 1/4" baseline
  const sizeFactor = paverAreaSqIn / 48; // normalize to 4x12 (48 sq in) baseline
  const coveragePerBag = Math.min(75, Math.max(30, baseCoverage * jointFactor * sizeFactor));
  const polymericSandBags = Math.ceil(totalArea / coveragePerBag);

  // --- Geotextile Fabric ---
  // Same as area + 2ft overlap margins on each side
  // For a rectangle: (length + 4) * (width + 4); for others, add ~15% for overlaps
  let geotextileSqFt = 0;
  if (shape === "rectangle") {
    geotextileSqFt = (length + 4) * (width + 4);
  } else {
    // Add approximate 2ft margin all around: increase effective area
    // For circle: pi * (r+2)^2; for irregular: area + perimeter*2 + 16 (corner approximation)
    if (shape === "circle") {
      const radiusPlus = diameter / 2 + 2;
      geotextileSqFt = Math.PI * radiusPlus * radiusPlus;
    } else {
      geotextileSqFt = totalArea + perimeter * 2 + 16;
    }
  }
  geotextileSqFt = Math.ceil(geotextileSqFt);

  return (
    <CalculatorLayout
      title="Paver Calculator"
      description="Calculate the exact number of pavers, base materials, sand, polymeric sand, and edge restraints needed for your patio, walkway, or driveway project. Supports rectangle, circle, and irregular area shapes with multiple paver sizes and laying patterns."
      trade="Hardscaping"
      howToUse="Select your project area shape -- rectangle, circle, or irregular (enter total square footage directly). Choose your paver size, joint width, and laying pattern. The calculator automatically adjusts the waste factor for herringbone patterns. Set your gravel base depth (4-6 inches is standard) and the tool will estimate all materials including pavers, gravel base, sand setting bed, polymeric joint sand, edge restraint, and geotextile fabric."
      formula="Pavers per sq ft = 144 / ((paver_width + joint) x (paver_length + joint)). Gravel Base (CY) = Area x Depth (ft) / 27. Sand Setting Bed (CY) = Area x (1/12) / 27. Polymeric Sand coverage varies 30-75 sq ft per 50 lb bag based on paver size and joint width."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Area Shape */}
        <div className="sm:col-span-2">
          <label htmlFor="shape" className="block text-sm font-medium text-gray-700 mb-1">Area Shape</label>
          <select
            id="shape"
            value={shape}
            onChange={(e) => setShape(e.target.value as AreaShape)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="irregular">Irregular (enter sq ft)</option>
          </select>
        </div>

        {/* Rectangle Inputs */}
        {shape === "rectangle" && (
          <>
            <div>
              <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Length (feet)</label>
              <input
                id="length"
                type="number"
                min={1}
                step={0.5}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Width (feet)</label>
              <input
                id="width"
                type="number"
                min={1}
                step={0.5}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </>
        )}

        {/* Circle Input */}
        {shape === "circle" && (
          <div>
            <label htmlFor="diameter" className="block text-sm font-medium text-gray-700 mb-1">Diameter (feet)</label>
            <input
              id="diameter"
              type="number"
              min={1}
              step={0.5}
              value={diameter}
              onChange={(e) => setDiameter(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        {/* Irregular Input */}
        {shape === "irregular" && (
          <div>
            <label htmlFor="irregularSqFt" className="block text-sm font-medium text-gray-700 mb-1">Total Area (sq ft)</label>
            <input
              id="irregularSqFt"
              type="number"
              min={1}
              step={1}
              value={irregularSqFt}
              onChange={(e) => setIrregularSqFt(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        {/* Paver Size */}
        <div>
          <label htmlFor="paverSize" className="block text-sm font-medium text-gray-700 mb-1">Paver Size</label>
          <select
            id="paverSize"
            value={paverSizeIdx}
            onChange={(e) => setPaverSizeIdx(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {PAVER_SIZES.map((p, i) => (
              <option key={i} value={i}>{p.label}</option>
            ))}
          </select>
        </div>

        {/* Joint Width */}
        <div>
          <label htmlFor="jointWidth" className="block text-sm font-medium text-gray-700 mb-1">Joint Width (polymeric sand)</label>
          <select
            id="jointWidth"
            value={jointIdx}
            onChange={(e) => setJointIdx(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {JOINT_WIDTHS.map((j, i) => (
              <option key={i} value={i}>{j.label}</option>
            ))}
          </select>
        </div>

        {/* Pattern */}
        <div>
          <label htmlFor="pattern" className="block text-sm font-medium text-gray-700 mb-1">Laying Pattern</label>
          <select
            id="pattern"
            value={patternIdx}
            onChange={(e) => setPatternIdx(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {PATTERNS.map((p, i) => (
              <option key={i} value={i}>{p.label}</option>
            ))}
          </select>
        </div>

        {/* Waste Factor */}
        <div>
          <label htmlFor="waste" className="block text-sm font-medium text-gray-700 mb-1">Base Waste Factor (%)</label>
          <input
            id="waste"
            type="number"
            min={0}
            max={30}
            value={wasteFactor}
            onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            {pattern.wasteAdd > 0
              ? `+${pattern.wasteAdd}% for ${pattern.label.split(" (")[0]} = ${effectiveWaste}% total`
              : `5% typical for straight cuts, 10% for curves`}
          </p>
        </div>

        {/* Base Material Depth */}
        <div>
          <label htmlFor="baseDepth" className="block text-sm font-medium text-gray-700 mb-1">Gravel Base Depth (inches)</label>
          <select
            id="baseDepth"
            value={baseDepth}
            onChange={(e) => setBaseDepth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={4}>4 inches</option>
            <option value={5}>5 inches</option>
            <option value={6}>6 inches</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">+ 1&quot; sand setting bed (calculated separately)</p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Material Estimate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Area</p>
            <p className="text-2xl font-bold text-brand-blue">{totalArea.toLocaleString(undefined, { maximumFractionDigits: 1 })}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Pavers per Sq Ft</p>
            <p className="text-2xl font-bold text-brand-blue">{paversPerSqFt.toFixed(1)}</p>
            <p className="text-sm text-gray-500">based on {paver.label} + {joint.label} joint</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Pavers Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{totalPavers.toLocaleString()}</p>
            <p className="text-sm text-gray-500">incl. {effectiveWaste}% waste</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Edge Restraint</p>
            <p className="text-2xl font-bold text-brand-blue">{edgeRestraintLf.toLocaleString()}</p>
            <p className="text-sm text-gray-500">linear feet of perimeter</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gravel Base</p>
            <p className="text-2xl font-bold text-brand-blue">{gravelCY.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards ({baseDepth}&quot; depth)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sand Setting Bed</p>
            <p className="text-2xl font-bold text-brand-blue">{sandCY.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards (1&quot; depth)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Polymeric Sand</p>
            <p className="text-2xl font-bold text-brand-blue">{polymericSandBags}</p>
            <p className="text-sm text-gray-500">bags (50 lb, ~{Math.round(coveragePerBag)} sq ft/bag)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Geotextile Fabric</p>
            <p className="text-2xl font-bold text-brand-blue">{geotextileSqFt.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft (incl. 2 ft overlap margins)</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

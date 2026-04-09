"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type RebarSize = "#3" | "#4" | "#5" | "#6" | "#7" | "#8";

const REBAR_DATA: Record<RebarSize, { diameter: string; weightPerFt: number }> = {
  "#3": { diameter: '3/8"', weightPerFt: 0.376 },
  "#4": { diameter: '1/2"', weightPerFt: 0.668 },
  "#5": { diameter: '5/8"', weightPerFt: 1.043 },
  "#6": { diameter: '3/4"', weightPerFt: 1.502 },
  "#7": { diameter: '7/8"', weightPerFt: 2.044 },
  "#8": { diameter: '1"', weightPerFt: 2.670 },
};

const SPACING_OPTIONS = [12, 16, 18, 24];
const BAR_LENGTH_FT = 20;

export default function RebarCalculator() {
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(20);
  const [rebarSize, setRebarSize] = useState<RebarSize>("#4");
  const [spacingX, setSpacingX] = useState<number>(12);
  const [spacingY, setSpacingY] = useState<number>(12);
  const [sameSpacing, setSameSpacing] = useState<boolean>(true);
  const [overlapLength, setOverlapLength] = useState<number>(24);
  const [edgeSetback, setEdgeSetback] = useState<number>(3);

  const effectiveSpacingY = sameSpacing ? spacingX : spacingY;

  // Convert setback from inches to feet
  const setbackFt = edgeSetback / 12;

  // Effective slab dimensions after setback on both sides
  const effectiveLengthFt = Math.max(length - 2 * setbackFt, 0);
  const effectiveWidthFt = Math.max(width - 2 * setbackFt, 0);

  // Bars running along the LENGTH direction are spaced across the WIDTH
  // Each bar spans the effective length
  const barsAlongLength = effectiveWidthFt > 0
    ? Math.floor(effectiveWidthFt / (spacingX / 12)) + 1
    : 0;

  // Bars running along the WIDTH direction are spaced across the LENGTH
  // Each bar spans the effective width
  const barsAlongWidth = effectiveLengthFt > 0
    ? Math.floor(effectiveLengthFt / (effectiveSpacingY / 12)) + 1
    : 0;

  // Linear feet per bar in each direction
  const barLengthAlongLength = effectiveLengthFt;
  const barLengthAlongWidth = effectiveWidthFt;

  // Total linear feet
  const totalLinearFeetLengthDir = barsAlongLength * barLengthAlongLength;
  const totalLinearFeetWidthDir = barsAlongWidth * barLengthAlongWidth;
  const totalLinearFeet = totalLinearFeetLengthDir + totalLinearFeetWidthDir;

  // Weight
  const weightPerFt = REBAR_DATA[rebarSize].weightPerFt;
  const totalWeight = totalLinearFeet * weightPerFt;

  // Number of 20ft bars needed (accounting for overlap)
  const overlapFt = overlapLength / 12;
  const effectiveBarLength = BAR_LENGTH_FT - overlapFt;

  const barsNeededLengthDir = barsAlongLength * Math.ceil(barLengthAlongLength / effectiveBarLength);
  const barsNeededWidthDir = barsAlongWidth * Math.ceil(barLengthAlongWidth / effectiveBarLength);
  const totalBarsNeeded = barsNeededLengthDir + barsNeededWidthDir;

  // Tie wires: 1 per intersection
  const tieWires = barsAlongLength * barsAlongWidth;

  // Chairs/supports: 1 per 4 sq ft of slab area
  const slabArea = length * width;
  const chairs = Math.ceil(slabArea / 4);

  return (
    <CalculatorLayout
      title="Rebar Calculator"
      description="Calculate rebar quantity, weight, and materials for concrete slabs. Get bar counts, tie wire totals, and chair support estimates for any grid pattern."
      trade="Concrete"
      howToUse="Enter the slab dimensions in feet, choose a rebar size, and set the grid spacing. You can use the same spacing in both directions or set them independently. Adjust the overlap length (24 inches / 40 bar diameters is standard) and the edge setback from forms (3 inches is typical). The calculator gives you total bars, linear footage, weight, tie wires, and chair supports needed."
      formula="Bars in each direction = floor(effective span / spacing) + 1. Linear feet = bars x bar length. 20ft bars needed = bars x ceil(bar length / (20 - overlap)). Tie wires = bars in length dir x bars in width dir. Chairs = ceil(slab area / 4)."
    >
      {/* Slab Dimensions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Slab Length (feet)</label>
          <input id="length" type="number" min={0.1} step={0.1} value={length} onChange={(e) => setLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Slab Width (feet)</label>
          <input id="width" type="number" min={0.1} step={0.1} value={width} onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>

        {/* Rebar Size */}
        <div>
          <label htmlFor="rebarSize" className="block text-sm font-medium text-gray-700 mb-1">Rebar Size</label>
          <select id="rebarSize" value={rebarSize} onChange={(e) => setRebarSize(e.target.value as RebarSize)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {(Object.keys(REBAR_DATA) as RebarSize[]).map((size) => (
              <option key={size} value={size}>
                {size} ({REBAR_DATA[size].diameter}) &mdash; {REBAR_DATA[size].weightPerFt} lb/ft
              </option>
            ))}
          </select>
        </div>

        {/* Spacing */}
        <div>
          <label htmlFor="spacingX" className="block text-sm font-medium text-gray-700 mb-1">
            Grid Spacing {sameSpacing ? "(both directions)" : "(length direction)"} &mdash; on center
          </label>
          <select id="spacingX" value={spacingX} onChange={(e) => setSpacingX(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {SPACING_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}&quot; o.c.</option>
            ))}
          </select>
        </div>

        {/* Same Spacing Toggle */}
        <div className="flex items-center gap-3 sm:col-span-2">
          <input
            id="sameSpacing"
            type="checkbox"
            checked={sameSpacing}
            onChange={(e) => setSameSpacing(e.target.checked)}
            className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
          />
          <label htmlFor="sameSpacing" className="text-sm font-medium text-gray-700">
            Same spacing in both directions
          </label>
        </div>

        {/* Second direction spacing */}
        {!sameSpacing && (
          <div>
            <label htmlFor="spacingY" className="block text-sm font-medium text-gray-700 mb-1">
              Grid Spacing (width direction) &mdash; on center
            </label>
            <select id="spacingY" value={spacingY} onChange={(e) => setSpacingY(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
              {SPACING_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}&quot; o.c.</option>
              ))}
            </select>
          </div>
        )}

        {/* Overlap */}
        <div>
          <label htmlFor="overlap" className="block text-sm font-medium text-gray-700 mb-1">Rebar Overlap Length (inches)</label>
          <input id="overlap" type="number" min={0} max={60} step={1} value={overlapLength} onChange={(e) => setOverlapLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>

        {/* Edge Setback */}
        <div>
          <label htmlFor="setback" className="block text-sm font-medium text-gray-700 mb-1">Edge Setback from Form (inches)</label>
          <input id="setback" type="number" min={0} max={12} step={0.5} value={edgeSetback} onChange={(e) => setEdgeSetback(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Bars Along Length</p>
            <p className="text-2xl font-bold text-brand-blue">{barsAlongLength}</p>
            <p className="text-sm text-gray-500">spaced {spacingX}&quot; o.c. across width</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Bars Along Width</p>
            <p className="text-2xl font-bold text-brand-blue">{barsAlongWidth}</p>
            <p className="text-sm text-gray-500">spaced {effectiveSpacingY}&quot; o.c. across length</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Linear Feet</p>
            <p className="text-2xl font-bold text-brand-blue">{totalLinearFeet.toFixed(1)}</p>
            <p className="text-sm text-gray-500">of {rebarSize} rebar</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Weight</p>
            <p className="text-2xl font-bold text-brand-orange">{totalWeight.toFixed(1)}</p>
            <p className="text-sm text-gray-500">lbs ({weightPerFt} lb/ft)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">20ft Bars Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{totalBarsNeeded}</p>
            <p className="text-sm text-gray-500">with {overlapLength}&quot; overlap</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Tie Wires</p>
            <p className="text-2xl font-bold text-brand-blue">{tieWires}</p>
            <p className="text-sm text-gray-500">1 per intersection</p>
          </div>
        </div>

        {/* Chairs row */}
        <div className="mt-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 max-w-xs mx-auto">
            <p className="text-sm text-gray-600">Chairs / Supports</p>
            <p className="text-2xl font-bold text-brand-blue">{chairs}</p>
            <p className="text-sm text-gray-500">1 per 4 sq ft ({slabArea.toFixed(0)} sq ft slab)</p>
          </div>
        </div>
      </div>

      {/* Grid Pattern Summary */}
      <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-brand-blue mb-3">Grid Pattern Summary</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Slab:</span> {length} ft x {width} ft ({slabArea.toFixed(0)} sq ft)
          </p>
          <p>
            <span className="font-semibold">Rebar:</span> {rebarSize} ({REBAR_DATA[rebarSize].diameter} diameter)
          </p>
          <p>
            <span className="font-semibold">Grid:</span>{" "}
            {sameSpacing
              ? `${spacingX}" x ${spacingX}" on center (both directions)`
              : `${spacingX}" o.c. (length dir) x ${effectiveSpacingY}" o.c. (width dir)`}
          </p>
          <p>
            <span className="font-semibold">Edge setback:</span> {edgeSetback}&quot; from forms on all sides
          </p>
          <p>
            <span className="font-semibold">Effective rebar area:</span> {effectiveLengthFt.toFixed(2)} ft x {effectiveWidthFt.toFixed(2)} ft
          </p>
          <p>
            <span className="font-semibold">Layout:</span> {barsAlongLength} bars running {effectiveLengthFt.toFixed(1)} ft (length) + {barsAlongWidth} bars running {effectiveWidthFt.toFixed(1)} ft (width)
          </p>
          <p>
            <span className="font-semibold">Overlap:</span> {overlapLength}&quot; lap splices ({overlapFt.toFixed(1)} ft), effective bar length = {effectiveBarLength.toFixed(1)} ft per 20ft bar
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}

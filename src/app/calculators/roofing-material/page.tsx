"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";

/* ── Pitch multipliers (rise/run → area multiplier) ── */
const pitchOptions = [
  { label: "Flat", value: "flat", multiplier: 1.0 },
  { label: "1/12", value: "1/12", multiplier: 1.003 },
  { label: "2/12", value: "2/12", multiplier: 1.014 },
  { label: "3/12", value: "3/12", multiplier: 1.031 },
  { label: "4/12", value: "4/12", multiplier: 1.054 },
  { label: "5/12", value: "5/12", multiplier: 1.083 },
  { label: "6/12", value: "6/12", multiplier: 1.118 },
  { label: "7/12", value: "7/12", multiplier: 1.158 },
  { label: "8/12", value: "8/12", multiplier: 1.202 },
  { label: "9/12", value: "9/12", multiplier: 1.25 },
  { label: "10/12", value: "10/12", multiplier: 1.302 },
  { label: "11/12", value: "11/12", multiplier: 1.357 },
  { label: "12/12", value: "12/12", multiplier: 1.414 },
];

const pitchMultipliers: Record<string, number> = Object.fromEntries(
  pitchOptions.map((p) => [p.value, p.multiplier])
);

/* ── Material type definitions ── */
type MaterialType = "3tab" | "architectural" | "metal-panel" | "standing-seam";

interface MaterialConfig {
  label: string;
  bundlesPerSquare: number; // shingle bundles or panels per square
  bundleUnit: string;
  underlaymentSqFtPerRoll: number; // synthetic = 1000, felt = 400
  underlaymentLabel: string;
  nailsPerSquare: number;
  ridgeFtPerBundle: number;
  notes: string;
}

const materialConfigs: Record<MaterialType, MaterialConfig> = {
  "3tab": {
    label: "3-Tab Shingles",
    bundlesPerSquare: 3,
    bundleUnit: "bundles",
    underlaymentSqFtPerRoll: 400,
    underlaymentLabel: "15 lb felt rolls (4 sq/roll)",
    nailsPerSquare: 320,
    ridgeFtPerBundle: 25,
    notes: "Most affordable option. 20-30 year warranty typical.",
  },
  architectural: {
    label: "Architectural Shingles",
    bundlesPerSquare: 4,
    bundleUnit: "bundles",
    underlaymentSqFtPerRoll: 1000,
    underlaymentLabel: "Synthetic underlayment rolls (10 sq/roll)",
    nailsPerSquare: 320,
    ridgeFtPerBundle: 20,
    notes: "Thicker, dimensional look. 30-50 year warranty. Requires 4 bundles per square.",
  },
  "metal-panel": {
    label: "Metal Panels (Exposed Fastener)",
    bundlesPerSquare: 3.15,
    bundleUnit: "panels (3 ft wide)",
    underlaymentSqFtPerRoll: 1000,
    underlaymentLabel: "Synthetic underlayment rolls (10 sq/roll)",
    nailsPerSquare: 75,
    ridgeFtPerBundle: 10.5,
    notes: "Panels typically 3 ft x variable length. Screws used instead of nails. 40-70 year lifespan.",
  },
  "standing-seam": {
    label: "Standing Seam Metal",
    bundlesPerSquare: 6,
    bundleUnit: "panels (16-18 in wide)",
    underlaymentSqFtPerRoll: 1000,
    underlaymentLabel: "Synthetic underlayment rolls (10 sq/roll)",
    nailsPerSquare: 50,
    ridgeFtPerBundle: 10,
    notes: "Premium hidden-fastener system. 50+ year lifespan. Panels 16-18 in wide.",
  },
};

/* ── Waste factor presets ── */
type RoofComplexity = "simple" | "hip" | "complex";

const complexityOptions: { value: RoofComplexity; label: string; range: string; default: number }[] = [
  { value: "simple", label: "Simple Gable", range: "5-10%", default: 7 },
  { value: "hip", label: "Hip Roof", range: "10-15%", default: 12 },
  { value: "complex", label: "Complex (Valleys/Dormers)", range: "15-20%", default: 17 },
];

/* ── Component ── */
export default function RoofingMaterialCalculator() {
  const [footprint, setFootprint] = useState<number>(1500);
  const [pitch, setPitch] = useState<string>("6/12");
  const [materialType, setMaterialType] = useState<MaterialType>("architectural");
  const [complexity, setComplexity] = useState<RoofComplexity>("simple");
  const [wasteFactor, setWasteFactor] = useState<number>(7);
  const [ridgeLength, setRidgeLength] = useState<number>(40);
  const [perimeterOverride, setPerimeterOverride] = useState<string>("");
  const [includeIceShield, setIncludeIceShield] = useState<boolean>(false);

  const mat = materialConfigs[materialType];
  const multiplier = pitchMultipliers[pitch] ?? 1;

  /* ── Calculations ── */
  const roofArea = footprint * multiplier;
  const squares = roofArea / 100;
  const withWaste = squares * (1 + wasteFactor / 100);

  // Perimeter: user override or estimate from footprint (assume roughly rectangular 2:1)
  const estimatedPerimeter = 2 * (Math.sqrt(footprint * 2) + Math.sqrt(footprint / 2));
  const perimeter = perimeterOverride ? Number(perimeterOverride) : Math.round(estimatedPerimeter);

  const shingleBundles = Math.ceil(withWaste * mat.bundlesPerSquare);
  const underlaymentRolls = Math.ceil(roofArea / mat.underlaymentSqFtPerRoll);
  const dripEdgeFt = perimeter;
  const dripEdge10ft = Math.ceil(dripEdgeFt / 10);
  const ridgeCaps = Math.ceil(ridgeLength / mat.ridgeFtPerBundle);
  const starterStripFt = perimeter;
  const starterStripBundles = Math.ceil(starterStripFt / 100); // ~100 lin ft per bundle
  const nails = Math.ceil(withWaste * mat.nailsPerSquare);
  // Ice & water shield: 3 ft up from eave along perimeter, rolls cover ~66.7 sq ft (36 in x ~222 in)
  const iceShieldSqFt = perimeter * 3;
  const iceShieldRolls = Math.ceil(iceShieldSqFt / 66.7);

  const handleComplexityChange = (c: RoofComplexity) => {
    setComplexity(c);
    setWasteFactor(complexityOptions.find((o) => o.value === c)!.default);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="Roofing Material Calculator"
      description="Estimate all roofing materials needed: shingles, underlayment, drip edge, ridge caps, starter strip, nails, and ice & water shield. Supports 3-tab, architectural, metal panel, and standing seam."
      trade="Roofing"
      howToUse="Enter the roof footprint (the area as seen from directly above, which equals the home's floor plan area for a simple roof). Select the roof pitch — the calculator adjusts the footprint by the pitch multiplier to get actual roof surface area. Choose your material type and roof complexity to get a complete, accurate material list with waste included."
      formula="Roof Area = Footprint x Pitch Multiplier. Squares = Roof Area / 100. Materials are calculated per square with waste factor applied based on roof complexity."
    >
      {/* ── INPUTS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Footprint */}
        <div>
          <label htmlFor="footprint" className={labelClass}>
            Roof Footprint (sq ft)
          </label>
          <input
            id="footprint"
            type="number"
            min={100}
            max={100000}
            value={footprint}
            onChange={(e) => setFootprint(Number(e.target.value))}
            className={inputClass}
          />
          <p className="text-xs text-gray-500 mt-1">Area as seen from above (building footprint)</p>
        </div>

        {/* Pitch */}
        <div>
          <label htmlFor="pitch" className={labelClass}>
            Roof Pitch
          </label>
          <select
            id="pitch"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            className={inputClass}
          >
            {pitchOptions.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label} &mdash; {p.multiplier.toFixed(3)}x multiplier
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            Multiplier: <strong>{multiplier.toFixed(3)}</strong>.{" "}
            <Link href="/calculators/roof-pitch/" className="text-brand-orange hover:underline">
              Roof Pitch Calculator &rarr;
            </Link>
          </p>
        </div>

        {/* Material Type */}
        <div className="sm:col-span-2">
          <label htmlFor="materialType" className={labelClass}>
            Material Type
          </label>
          <select
            id="materialType"
            value={materialType}
            onChange={(e) => setMaterialType(e.target.value as MaterialType)}
            className={inputClass}
          >
            {(Object.entries(materialConfigs) as [MaterialType, MaterialConfig][]).map(
              ([key, cfg]) => (
                <option key={key} value={key}>
                  {cfg.label}
                </option>
              )
            )}
          </select>
          <p className="text-xs text-gray-500 mt-1">{mat.notes}</p>
        </div>
      </div>

      {/* ── ROOF COMPLEXITY (waste factor) ── */}
      <div className="mt-6">
        <p className={labelClass}>Roof Complexity (Waste Factor)</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {complexityOptions.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                complexity === opt.value
                  ? "border-brand-orange bg-orange-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="complexity"
                value={opt.value}
                checked={complexity === opt.value}
                onChange={() => handleComplexityChange(opt.value)}
                className="accent-brand-orange"
              />
              <div>
                <span className="font-medium text-gray-800">{opt.label}</span>
                <span className="block text-xs text-gray-500">Waste: {opt.range}</span>
              </div>
            </label>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-3">
          <label htmlFor="wasteFactor" className="text-sm text-gray-600 whitespace-nowrap">
            Fine-tune waste %:
          </label>
          <input
            id="wasteFactor"
            type="number"
            min={0}
            max={35}
            value={wasteFactor}
            onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-24 border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
      </div>

      {/* ── ADDITIONAL MEASUREMENTS ── */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label htmlFor="ridge" className={labelClass}>
            Ridge Length (linear ft)
          </label>
          <input
            id="ridge"
            type="number"
            min={0}
            max={1000}
            value={ridgeLength}
            onChange={(e) => setRidgeLength(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="perimeter" className={labelClass}>
            Perimeter (linear ft)
          </label>
          <input
            id="perimeter"
            type="number"
            min={0}
            max={10000}
            value={perimeterOverride || perimeter}
            onChange={(e) => setPerimeterOverride(e.target.value)}
            className={inputClass}
          />
          <p className="text-xs text-gray-500 mt-1">
            {perimeterOverride ? "Custom value" : `Estimated from footprint (~${perimeter} ft)`}
          </p>
        </div>
        <div className="flex items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeIceShield}
              onChange={(e) => setIncludeIceShield(e.target.checked)}
              className="w-4 h-4 accent-brand-orange"
            />
            <span className="text-sm text-gray-700">Include ice &amp; water shield</span>
          </label>
          <p className="text-xs text-gray-500 ml-2">(cold climates)</p>
        </div>
      </div>

      {/* ── RESULTS ── */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-brand-blue">Complete Material List</h2>
          <button
            onClick={() => window.print()}
            className="print:hidden bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Print Results
          </button>
        </div>

        {/* Summary row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-500">Flat Footprint</p>
            <p className="text-lg font-bold text-gray-800">{footprint.toLocaleString()} sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-500">Pitch Multiplier</p>
            <p className="text-lg font-bold text-brand-orange">{multiplier.toFixed(3)}x</p>
            <p className="text-xs text-gray-500">{pitch} pitch</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-500">Actual Roof Area</p>
            <p className="text-lg font-bold text-brand-blue">{Math.round(roofArea).toLocaleString()} sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-500">Squares (with {wasteFactor}% waste)</p>
            <p className="text-lg font-bold text-brand-blue">{withWaste.toFixed(1)}</p>
            <p className="text-xs text-gray-500">{squares.toFixed(1)} before waste</p>
          </div>
        </div>

        {/* Material cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Shingles / Panels */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">
              {materialType === "3tab" || materialType === "architectural"
                ? "Shingle Bundles"
                : "Panels"}
            </p>
            <p className="text-xl font-bold text-brand-orange">{shingleBundles}</p>
            <p className="text-sm text-gray-500">
              {mat.bundlesPerSquare} {mat.bundleUnit}/square
            </p>
          </div>

          {/* Underlayment */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Underlayment Rolls</p>
            <p className="text-xl font-bold text-brand-blue">{underlaymentRolls}</p>
            <p className="text-sm text-gray-500">{mat.underlaymentLabel}</p>
          </div>

          {/* Drip Edge */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Drip Edge</p>
            <p className="text-xl font-bold text-brand-blue">{dripEdge10ft} pcs (10 ft each)</p>
            <p className="text-sm text-gray-500">{dripEdgeFt} linear ft total</p>
          </div>

          {/* Ridge Caps */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Ridge Cap Bundles</p>
            <p className="text-xl font-bold text-brand-blue">{ridgeCaps}</p>
            <p className="text-sm text-gray-500">
              1 per {mat.ridgeFtPerBundle} linear ft of ridge
            </p>
          </div>

          {/* Starter Strip */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Starter Strip</p>
            <p className="text-xl font-bold text-brand-blue">{starterStripBundles} bundles</p>
            <p className="text-sm text-gray-500">{starterStripFt} linear ft of eave/rake</p>
          </div>

          {/* Nails */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">
              {materialType.includes("metal") || materialType === "standing-seam"
                ? "Screws / Fasteners"
                : "Roofing Nails"}
            </p>
            <p className="text-xl font-bold text-brand-blue">{nails.toLocaleString()}</p>
            <p className="text-sm text-gray-500">
              ~{Math.ceil(nails / 140)} lbs ({mat.nailsPerSquare}/square)
            </p>
          </div>

          {/* Ice & Water Shield (conditional) */}
          {includeIceShield && (
            <div className="bg-white rounded-lg p-4 border border-blue-300 border-2">
              <p className="text-sm text-gray-600">Ice &amp; Water Shield</p>
              <p className="text-xl font-bold text-brand-blue">{iceShieldRolls} rolls</p>
              <p className="text-sm text-gray-500">
                {iceShieldSqFt.toLocaleString()} sq ft (3 ft from eave)
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── MATERIAL TYPE INFO ── */}
      <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6 print:hidden">
        <h3 className="text-lg font-bold text-brand-blue mb-3">
          About {mat.label}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{mat.notes}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Coverage per unit</p>
            <p className="font-medium">{mat.bundlesPerSquare} {mat.bundleUnit}/sq</p>
          </div>
          <div>
            <p className="text-gray-500">Underlayment</p>
            <p className="font-medium">{mat.underlaymentSqFtPerRoll} sq ft/roll</p>
          </div>
          <div>
            <p className="text-gray-500">Fasteners per sq</p>
            <p className="font-medium">{mat.nailsPerSquare}</p>
          </div>
          <div>
            <p className="text-gray-500">Ridge coverage</p>
            <p className="font-medium">{mat.ridgeFtPerBundle} ft/bundle</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type BeamSize = "2x8" | "2x10" | "2x12" | "3-1/8x9-1/4 LVL" | "3-1/2x9-1/4 LVL" | "3-1/2x11-7/8 LVL" | "3-1/2x14 LVL";
type Species = "douglas-fir" | "southern-pine" | "spruce-pine-fir" | "hem-fir";
type LoadType = "floor" | "roof" | "deck";

interface SpanEntry {
  maxSpan: number; // feet
  fb: number; // allowable bending stress psi
}

/**
 * Simplified IRC-based span table data.
 * Max spans in feet for single-ply beams at 40 psf live / 10 psf dead (floor),
 * 20 psf live / 10 psf dead (roof), 40 psf live / 10 psf dead (deck).
 * Tributary width assumed 6 ft for base table. Adjusted by ratio.
 */
const BASE_SPANS: Record<Species, Record<string, { floor: number; roof: number; deck: number }>> = {
  "douglas-fir": {
    "2x8": { floor: 7.5, roof: 9.5, deck: 7.0 },
    "2x10": { floor: 9.5, roof: 12.0, deck: 9.0 },
    "2x12": { floor: 11.5, roof: 14.5, deck: 11.0 },
    "3-1/8x9-1/4 LVL": { floor: 12.0, roof: 15.0, deck: 11.5 },
    "3-1/2x9-1/4 LVL": { floor: 13.0, roof: 16.0, deck: 12.5 },
    "3-1/2x11-7/8 LVL": { floor: 16.0, roof: 20.0, deck: 15.5 },
    "3-1/2x14 LVL": { floor: 19.0, roof: 23.5, deck: 18.5 },
  },
  "southern-pine": {
    "2x8": { floor: 8.0, roof: 10.0, deck: 7.5 },
    "2x10": { floor: 10.0, roof: 12.5, deck: 9.5 },
    "2x12": { floor: 12.0, roof: 15.0, deck: 11.5 },
    "3-1/8x9-1/4 LVL": { floor: 12.0, roof: 15.0, deck: 11.5 },
    "3-1/2x9-1/4 LVL": { floor: 13.0, roof: 16.0, deck: 12.5 },
    "3-1/2x11-7/8 LVL": { floor: 16.0, roof: 20.0, deck: 15.5 },
    "3-1/2x14 LVL": { floor: 19.0, roof: 23.5, deck: 18.5 },
  },
  "spruce-pine-fir": {
    "2x8": { floor: 7.0, roof: 8.5, deck: 6.5 },
    "2x10": { floor: 8.5, roof: 11.0, deck: 8.0 },
    "2x12": { floor: 10.5, roof: 13.0, deck: 10.0 },
    "3-1/8x9-1/4 LVL": { floor: 12.0, roof: 15.0, deck: 11.5 },
    "3-1/2x9-1/4 LVL": { floor: 13.0, roof: 16.0, deck: 12.5 },
    "3-1/2x11-7/8 LVL": { floor: 16.0, roof: 20.0, deck: 15.5 },
    "3-1/2x14 LVL": { floor: 19.0, roof: 23.5, deck: 18.5 },
  },
  "hem-fir": {
    "2x8": { floor: 7.0, roof: 9.0, deck: 6.5 },
    "2x10": { floor: 9.0, roof: 11.5, deck: 8.5 },
    "2x12": { floor: 11.0, roof: 14.0, deck: 10.5 },
    "3-1/8x9-1/4 LVL": { floor: 12.0, roof: 15.0, deck: 11.5 },
    "3-1/2x9-1/4 LVL": { floor: 13.0, roof: 16.0, deck: 12.5 },
    "3-1/2x11-7/8 LVL": { floor: 16.0, roof: 20.0, deck: 15.5 },
    "3-1/2x14 LVL": { floor: 19.0, roof: 23.5, deck: 18.5 },
  },
};

const BEAM_SIZES: BeamSize[] = [
  "2x8",
  "2x10",
  "2x12",
  "3-1/8x9-1/4 LVL",
  "3-1/2x9-1/4 LVL",
  "3-1/2x11-7/8 LVL",
  "3-1/2x14 LVL",
];

const SPECIES_OPTIONS: { value: Species; label: string }[] = [
  { value: "douglas-fir", label: "Douglas Fir-Larch #2" },
  { value: "southern-pine", label: "Southern Pine #2" },
  { value: "spruce-pine-fir", label: "Spruce-Pine-Fir #2" },
  { value: "hem-fir", label: "Hem-Fir #2" },
];

const LOAD_TYPES: { value: LoadType; label: string; live: number; dead: number }[] = [
  { value: "floor", label: "Floor (40 psf live + 10 psf dead)", live: 40, dead: 10 },
  { value: "roof", label: "Roof (20 psf live + 10 psf dead)", live: 20, dead: 10 },
  { value: "deck", label: "Deck (40 psf live + 10 psf dead)", live: 40, dead: 10 },
];

export default function BeamSpanCalculator() {
  const [species, setSpecies] = useState<Species>("douglas-fir");
  const [beamSize, setBeamSize] = useState<BeamSize>("2x10");
  const [loadType, setLoadType] = useState<LoadType>("floor");
  const [tributaryWidth, setTributaryWidth] = useState<number>(6);
  const [plies, setPlies] = useState<number>(2);

  // Look up base span (for 6 ft tributary width, single ply)
  const baseLookup = BASE_SPANS[species][beamSize];
  const baseSpan = baseLookup ? baseLookup[loadType] : 0;

  // Adjust for tributary width (base is 6 ft)
  const tributaryFactor = tributaryWidth > 0 ? Math.sqrt(6 / tributaryWidth) : 1;

  // Adjust for number of plies (strength roughly proportional to plies)
  const plyFactor = Math.sqrt(plies);

  const maxAllowableSpan = baseSpan * tributaryFactor * plyFactor;

  // Load per linear foot
  const loadInfo = LOAD_TYPES.find((l) => l.value === loadType)!;
  const totalPsf = loadInfo.live + loadInfo.dead;
  const loadPerLinFt = totalPsf * tributaryWidth;

  // Recommended beam size: first beam that exceeds the entered span
  const recommendedBeam = BEAM_SIZES.find((size) => {
    const lookup = BASE_SPANS[species][size];
    if (!lookup) return false;
    const span = lookup[loadType] * tributaryFactor * plyFactor;
    return span >= maxAllowableSpan;
  });

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="Beam Span Calculator"
      description="Estimate maximum allowable beam spans based on simplified IRC residential span tables. Select lumber species, beam size, load type, and tributary width to size your beam correctly."
      trade="Carpentry"
      howToUse="Choose the lumber species and grade, beam size, number of plies (laminations), and the load type (floor, roof, or deck). Enter the tributary width — the distance between beams that defines how much load each beam carries. The calculator shows the maximum allowable span and the load per linear foot."
      formula="Max Span = Base Table Span x sqrt(6 / Tributary Width) x sqrt(Plies). Load per linear foot = Total PSF x Tributary Width. Base spans derived from IRC residential beam span tables for common lumber species and grades."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="species" className={labelClass}>
            Lumber Species / Material
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
          <label htmlFor="beamSize" className={labelClass}>
            Beam Size
          </label>
          <select
            id="beamSize"
            value={beamSize}
            onChange={(e) => setBeamSize(e.target.value as BeamSize)}
            className={inputClass}
          >
            {BEAM_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="loadType" className={labelClass}>
            Load Type
          </label>
          <select
            id="loadType"
            value={loadType}
            onChange={(e) => setLoadType(e.target.value as LoadType)}
            className={inputClass}
          >
            {LOAD_TYPES.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="plies" className={labelClass}>
            Number of Plies
          </label>
          <select
            id="plies"
            value={plies}
            onChange={(e) => setPlies(Number(e.target.value))}
            className={inputClass}
          >
            <option value={1}>Single (1-ply)</option>
            <option value={2}>Double (2-ply)</option>
            <option value={3}>Triple (3-ply)</option>
          </select>
        </div>

        <div>
          <label htmlFor="tributaryWidth" className={labelClass}>
            Tributary Width (ft)
          </label>
          <input
            id="tributaryWidth"
            type="number"
            min={1}
            max={20}
            step={0.5}
            value={tributaryWidth}
            onChange={(e) => setTributaryWidth(Number(e.target.value))}
            className={inputClass}
          />
          <p className="text-xs text-gray-500 mt-1">
            Distance between beams (typically 4-8 ft)
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Max Allowable Span</p>
            <p className="text-2xl font-bold text-brand-blue">
              {maxAllowableSpan.toFixed(1)}
            </p>
            <p className="text-sm text-gray-500">feet</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Load per Linear Foot</p>
            <p className="text-2xl font-bold text-brand-orange">
              {loadPerLinFt.toFixed(0)}
            </p>
            <p className="text-sm text-gray-500">lbs/ft</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Load (PSF)</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totalPsf}
            </p>
            <p className="text-sm text-gray-500">psf (live + dead)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <h3 className="text-lg font-bold text-brand-blue mb-3">
          Max Span by Beam Size ({plies}-ply, {tributaryWidth} ft tributary)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="px-3 py-2 text-left rounded-tl-lg">
                  Beam Size
                </th>
                <th className="px-3 py-2 text-right">Floor</th>
                <th className="px-3 py-2 text-right">Roof</th>
                <th className="px-3 py-2 text-right rounded-tr-lg">Deck</th>
              </tr>
            </thead>
            <tbody>
              {BEAM_SIZES.map((size, i) => {
                const lookup = BASE_SPANS[species][size];
                if (!lookup) return null;
                return (
                  <tr
                    key={size}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${
                      size === beamSize ? "ring-2 ring-brand-orange" : ""
                    }`}
                  >
                    <td className="px-3 py-2 font-medium">{size}</td>
                    <td className="px-3 py-2 text-right">
                      {(lookup.floor * tributaryFactor * plyFactor).toFixed(1)} ft
                    </td>
                    <td className="px-3 py-2 text-right">
                      {(lookup.roof * tributaryFactor * plyFactor).toFixed(1)} ft
                    </td>
                    <td className="px-3 py-2 text-right">
                      {(lookup.deck * tributaryFactor * plyFactor).toFixed(1)} ft
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </CalculatorLayout>
  );
}

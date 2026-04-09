"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const pierDiameters: Record<string, { label: string; diameterIn: number }> = {
  "8": { label: '8" Sonotube', diameterIn: 8 },
  "10": { label: '10" Sonotube', diameterIn: 10 },
  "12": { label: '12" Sonotube', diameterIn: 12 },
  "14": { label: '14" Sonotube', diameterIn: 14 },
  "16": { label: '16" Sonotube', diameterIn: 16 },
};

export default function SonotubeCalculator() {
  const [pierDiameter, setPierDiameter] = useState<string>("12");
  const [pierDepthFt, setPierDepthFt] = useState<number>(4);
  const [pierDepthIn, setPierDepthIn] = useState<number>(0);
  const [numPiers, setNumPiers] = useState<number>(6);
  const [includeRebar, setIncludeRebar] = useState<boolean>(true);
  const [rebarPerPier, setRebarPerPier] = useState<number>(2);
  const [includeJBolts, setIncludeJBolts] = useState<boolean>(true);

  const diameter = pierDiameters[pierDiameter];
  const radiusIn = diameter.diameterIn / 2;
  const radiusFt = radiusIn / 12;

  // Total depth in feet
  const totalDepthFt = pierDepthFt + pierDepthIn / 12;

  // Volume per pier: pi * r^2 * h (in cubic feet)
  const volumePerPierCuFt = Math.PI * radiusFt * radiusFt * totalDepthFt;

  // Total volume
  const totalVolumeCuFt = volumePerPierCuFt * numPiers;

  // Cubic yards
  const totalVolumeCuYd = totalVolumeCuFt / 27;

  // 80 lb bags of concrete: 1 bag yields ~0.6 cu ft
  const yieldPerBag80lb = 0.6;
  const bags80lb = Math.ceil(totalVolumeCuFt / yieldPerBag80lb);

  // 60 lb bags: yields ~0.45 cu ft
  const yieldPerBag60lb = 0.45;
  const bags60lb = Math.ceil(totalVolumeCuFt / yieldPerBag60lb);

  // Weight of concrete (~150 lbs per cu ft)
  const totalWeightLbs = totalVolumeCuFt * 150;

  // Rebar: each piece extends from ~3" above base to ~3" below top
  const rebarLengthPerPiece = totalDepthFt - 0.5; // ft, accounting for clearance
  const totalRebarPieces = includeRebar ? numPiers * rebarPerPier : 0;
  const totalRebarLinearFt = totalRebarPieces * Math.max(0, rebarLengthPerPiece);
  // Standard rebar comes in 20 ft lengths
  const rebarSticksNeeded = Math.ceil(totalRebarLinearFt / 20);

  // J-bolts: 1 per pier
  const totalJBolts = includeJBolts ? numPiers : 0;

  // Sonotube lengths (sold in 4 ft and 12 ft lengths typically)
  const sonotubesNeeded = numPiers;

  return (
    <CalculatorLayout
      title="Sonotube & Concrete Pier Calculator"
      description="Calculate concrete volume, bag count, rebar, and J-bolt requirements for sonotube pier foundations. Supports common pier diameters from 8 to 16 inches with accurate volume calculations using the cylinder formula."
      trade="Concrete"
      howToUse="Select your sonotube diameter, enter the pier depth in feet and inches, and set the number of piers. Toggle rebar and J-bolt options as needed. The calculator uses the cylinder volume formula (pi x radius squared x height) to determine concrete needs per pier and total, then converts to 80 lb and 60 lb bag counts. Rebar estimates assume vertical bars extending the full depth with 3 inches of clearance at top and bottom."
      formula="Volume per Pier = pi x (Diameter/2)^2 x Depth. Total Volume = Volume per Pier x Number of Piers. 80 lb Bags = Total Cu Ft / 0.6. 60 lb Bags = Total Cu Ft / 0.45. Rebar Length = Pier Depth - 6 inches clearance."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="pierDiameter" className="block text-sm font-medium text-gray-700 mb-1">
            Pier Diameter
          </label>
          <select
            id="pierDiameter"
            value={pierDiameter}
            onChange={(e) => setPierDiameter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {Object.entries(pierDiameters).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="numPiers" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Piers
          </label>
          <input
            id="numPiers"
            type="number"
            min={1}
            max={100}
            value={numPiers}
            onChange={(e) => setNumPiers(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="pierDepthFt" className="block text-sm font-medium text-gray-700 mb-1">
            Pier Depth - Feet
          </label>
          <input
            id="pierDepthFt"
            type="number"
            min={1}
            max={20}
            value={pierDepthFt}
            onChange={(e) => setPierDepthFt(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="pierDepthIn" className="block text-sm font-medium text-gray-700 mb-1">
            Pier Depth - Inches
          </label>
          <input
            id="pierDepthIn"
            type="number"
            min={0}
            max={11}
            value={pierDepthIn}
            onChange={(e) => setPierDepthIn(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="includeRebar" className="block text-sm font-medium text-gray-700 mb-1">
            Include Rebar
          </label>
          <select
            id="includeRebar"
            value={includeRebar ? "yes" : "no"}
            onChange={(e) => setIncludeRebar(e.target.value === "yes")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {includeRebar && (
          <div>
            <label htmlFor="rebarPerPier" className="block text-sm font-medium text-gray-700 mb-1">
              Rebar Pieces per Pier
            </label>
            <select
              id="rebarPerPier"
              value={rebarPerPier}
              onChange={(e) => setRebarPerPier(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            >
              <option value={1}>1 (small piers)</option>
              <option value={2}>2 (standard)</option>
              <option value={3}>3 (heavy load)</option>
              <option value={4}>4 (large piers)</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="includeJBolts" className="block text-sm font-medium text-gray-700 mb-1">
            Include J-Bolts
          </label>
          <select
            id="includeJBolts"
            value={includeJBolts ? "yes" : "no"}
            onChange={(e) => setIncludeJBolts(e.target.value === "yes")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="yes">Yes (1 per pier)</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Concrete Pier Estimate</h2>

        <h3 className="text-md font-semibold text-gray-700 mb-3">Concrete Volume</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Volume per Pier</p>
            <p className="text-2xl font-bold text-brand-blue">{volumePerPierCuFt.toFixed(2)} cu ft</p>
            <p className="text-sm text-gray-500">
              {diameter.diameterIn}&quot; x {totalDepthFt.toFixed(1)} ft deep
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Volume</p>
            <p className="text-2xl font-bold text-brand-orange">{totalVolumeCuFt.toFixed(2)} cu ft</p>
            <p className="text-sm text-gray-500">{totalVolumeCuYd.toFixed(2)} cu yd</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Weight</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totalWeightLbs.toLocaleString(undefined, { maximumFractionDigits: 0 })} lbs
            </p>
            <p className="text-sm text-gray-500">~150 lbs/cu ft</p>
          </div>
        </div>

        <h3 className="text-md font-semibold text-gray-700 mb-3">Bags of Concrete</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">80 lb Bags</p>
            <p className="text-2xl font-bold text-brand-blue">{bags80lb}</p>
            <p className="text-sm text-gray-500">0.6 cu ft per bag</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">60 lb Bags</p>
            <p className="text-2xl font-bold text-brand-orange">{bags60lb}</p>
            <p className="text-sm text-gray-500">0.45 cu ft per bag</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sonotubes</p>
            <p className="text-2xl font-bold text-brand-blue">{sonotubesNeeded}</p>
            <p className="text-sm text-gray-500">{diameter.diameterIn}&quot; diameter</p>
          </div>
        </div>

        <h3 className="text-md font-semibold text-gray-700 mb-3">Hardware</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {includeRebar && (
            <>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Rebar Pieces</p>
                <p className="text-2xl font-bold text-brand-blue">{totalRebarPieces}</p>
                <p className="text-sm text-gray-500">
                  {rebarPerPier} per pier, {rebarLengthPerPiece.toFixed(1)} ft each
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Rebar Total Linear Ft</p>
                <p className="text-2xl font-bold text-brand-orange">
                  {totalRebarLinearFt.toFixed(1)} ft
                </p>
                <p className="text-sm text-gray-500">
                  {rebarSticksNeeded} x 20 ft stick{rebarSticksNeeded !== 1 ? "s" : ""}
                </p>
              </div>
            </>
          )}
          {includeJBolts && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">J-Bolts</p>
              <p className="text-2xl font-bold text-brand-blue">{totalJBolts}</p>
              <p className="text-sm text-gray-500">1 per pier</p>
            </div>
          )}
          {!includeRebar && !includeJBolts && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Hardware</p>
              <p className="text-2xl font-bold text-gray-400">None</p>
              <p className="text-sm text-gray-500">no rebar or J-bolts selected</p>
            </div>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}

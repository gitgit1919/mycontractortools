"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type ApplicationType = "residential" | "commercial" | "overlay";
type AreaInputMode = "dimensions" | "sqft";

const ASPHALT_DENSITY_LBS_PER_CF = 145;
const LBS_PER_TON = 2000;
const TONS_PER_TRUCK = 25;

const THICKNESS_OPTIONS = [
  { value: 1.5, label: '1.5" — Overlay / Thin Coat' },
  { value: 2, label: '2" — Standard Residential Driveway' },
  { value: 2.5, label: '2.5" — Heavy Residential Use' },
  { value: 3, label: '3" — Light Commercial / Parking Lot' },
  { value: 4, label: '4" — Heavy Commercial / Truck Traffic' },
];

export default function AsphaltDrivewayCalculator() {
  const [areaMode, setAreaMode] = useState<AreaInputMode>("dimensions");
  const [length, setLength] = useState<number>(40);
  const [width, setWidth] = useState<number>(12);
  const [sqft, setSqft] = useState<number>(480);
  const [thickness, setThickness] = useState<number>(2);
  const [applicationType, setApplicationType] = useState<ApplicationType>("residential");
  const [pricePerSqFt, setPricePerSqFt] = useState<number>(5);
  const [wasteFactor, setWasteFactor] = useState<number>(5);

  // Area calculation
  const area = areaMode === "dimensions" ? length * width : sqft;

  // Volume in cubic feet: area (sq ft) * thickness (inches -> feet)
  const volumeCuFt = area * (thickness / 12);

  // Weight and tons
  const weightLbs = volumeCuFt * ASPHALT_DENSITY_LBS_PER_CF;
  const tonsNeeded = weightLbs / LBS_PER_TON;
  const tonsWithWaste = tonsNeeded * (1 + wasteFactor / 100);
  const truckLoads = tonsWithWaste / TONS_PER_TRUCK;

  // Cost estimate
  const costLow = area * (applicationType === "commercial" ? 2 : 3);
  const costHigh = area * (applicationType === "commercial" ? 5 : 7);
  const costCustom = area * pricePerSqFt;

  // Subbase recommendation
  const gravelBaseInches = applicationType === "overlay" ? 0 : applicationType === "commercial" ? 8 : 6;
  const gravelBaseCuFt = area * (gravelBaseInches / 12);
  const gravelBaseTons = (gravelBaseCuFt * 100) / LBS_PER_TON; // gravel ~100 lbs/cf

  return (
    <CalculatorLayout
      title="Asphalt / Driveway Calculator"
      description="Calculate how much asphalt you need for driveways, parking lots, and resurfacing projects. Get tonnage, truck loads, cost estimates, and gravel subbase recommendations."
      trade="General Contracting"
      howToUse="Start by entering the area of your paving project using either length and width in feet, or total square footage directly. Select the asphalt thickness based on your application type — 2 inches is standard for residential driveways, while 3-4 inches is typical for commercial parking lots. Choose your application type to get accurate cost estimates and subbase recommendations. Adjust the waste factor if needed (5% is standard for asphalt). The calculator will show you total asphalt tonnage, truck loads needed, cost range, and gravel base requirements."
      formula="Volume (cu ft) = Area (sq ft) x Thickness (in) / 12. Weight (lbs) = Volume x 145 lbs/cu ft. Tons = Weight / 2,000. Truck Loads = Tons / 25 tons per truck."
    >
      {/* Area Input Mode */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Area Input Method</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="areaMode"
              value="dimensions"
              checked={areaMode === "dimensions"}
              onChange={() => setAreaMode("dimensions")}
              className="text-brand-orange focus:ring-brand-orange"
            />
            <span className="text-sm text-gray-700">Length x Width</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="areaMode"
              value="sqft"
              checked={areaMode === "sqft"}
              onChange={() => setAreaMode("sqft")}
              className="text-brand-orange focus:ring-brand-orange"
            />
            <span className="text-sm text-gray-700">Enter Sq Ft Directly</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Area Inputs */}
        {areaMode === "dimensions" ? (
          <>
            <div>
              <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Length (feet)</label>
              <input id="length" type="number" min={1} step={0.5} value={length} onChange={(e) => setLength(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Width (feet)</label>
              <input id="width" type="number" min={1} step={0.5} value={width} onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
          </>
        ) : (
          <div>
            <label htmlFor="sqft" className="block text-sm font-medium text-gray-700 mb-1">Total Area (sq ft)</label>
            <input id="sqft" type="number" min={1} step={1} value={sqft} onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          </div>
        )}

        {/* Thickness */}
        <div>
          <label htmlFor="thickness" className="block text-sm font-medium text-gray-700 mb-1">Asphalt Thickness</label>
          <select id="thickness" value={thickness} onChange={(e) => setThickness(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {THICKNESS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Application Type */}
        <div>
          <label htmlFor="appType" className="block text-sm font-medium text-gray-700 mb-1">Application Type</label>
          <select id="appType" value={applicationType} onChange={(e) => setApplicationType(e.target.value as ApplicationType)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="residential">Residential Driveway</option>
            <option value="commercial">Commercial Parking Lot</option>
            <option value="overlay">Overlay / Resurfacing</option>
          </select>
        </div>

        {/* Price per Sq Ft */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price per Sq Ft ($)
            <span className="text-xs text-gray-500 ml-1">
              ({applicationType === "commercial" ? "$2-$5 typical" : "$3-$7 typical"})
            </span>
          </label>
          <input id="price" type="number" min={0.5} max={20} step={0.25} value={pricePerSqFt} onChange={(e) => setPricePerSqFt(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>

        {/* Waste Factor */}
        <div>
          <label htmlFor="waste" className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
          <input id="waste" type="number" min={0} max={20} value={wasteFactor} onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Asphalt Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Area</p>
            <p className="text-2xl font-bold text-brand-blue">{area.toLocaleString()}</p>
            <p className="text-sm text-gray-500">Square Feet</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Volume</p>
            <p className="text-2xl font-bold text-brand-blue">{volumeCuFt.toFixed(1)}</p>
            <p className="text-sm text-gray-500">Cubic Feet</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Asphalt Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{tonsWithWaste.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Tons (with {wasteFactor}% waste)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Truck Loads</p>
            <p className="text-2xl font-bold text-brand-blue">{truckLoads < 1 ? truckLoads.toFixed(2) : Math.ceil(truckLoads)}</p>
            <p className="text-sm text-gray-500">@ 25 tons per truck</p>
          </div>
        </div>
      </div>

      {/* Cost Estimate */}
      <div className="mt-6 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Cost Estimate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Low Estimate</p>
            <p className="text-2xl font-bold text-brand-blue">${costLow.toLocaleString()}</p>
            <p className="text-sm text-gray-500">${applicationType === "commercial" ? "2" : "3"}/sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Your Estimate</p>
            <p className="text-2xl font-bold text-brand-orange">${costCustom.toLocaleString()}</p>
            <p className="text-sm text-gray-500">${pricePerSqFt}/sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">High Estimate</p>
            <p className="text-2xl font-bold text-brand-blue">${costHigh.toLocaleString()}</p>
            <p className="text-sm text-gray-500">${applicationType === "commercial" ? "5" : "7"}/sq ft</p>
          </div>
        </div>
      </div>

      {/* Subbase Recommendation */}
      {applicationType !== "overlay" && (
        <div className="mt-6 bg-brand-gray rounded-xl p-6">
          <h2 className="text-xl font-bold text-brand-blue mb-4">Gravel Subbase Recommendation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Base Thickness</p>
              <p className="text-2xl font-bold text-brand-blue">{gravelBaseInches}&quot;</p>
              <p className="text-sm text-gray-500">{applicationType === "commercial" ? "Commercial standard" : "Residential standard"}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Gravel Volume</p>
              <p className="text-2xl font-bold text-brand-blue">{(gravelBaseCuFt / 27).toFixed(1)}</p>
              <p className="text-sm text-gray-500">Cubic Yards</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Gravel Weight</p>
              <p className="text-2xl font-bold text-brand-orange">{gravelBaseTons.toFixed(1)}</p>
              <p className="text-sm text-gray-500">Tons (approx)</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            A compacted gravel base (typically crushed limestone or recycled concrete) is essential for new asphalt installations. Overlay/resurfacing projects use the existing surface as a base.
          </p>
        </div>
      )}

      {applicationType === "overlay" && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
          <p className="font-semibold mb-1">Overlay Note</p>
          <p>Resurfacing projects use the existing pavement as a base. No new gravel subbase is needed, but the existing surface should be cleaned, repaired, and tack-coated before the overlay is applied.</p>
        </div>
      )}
    </CalculatorLayout>
  );
}

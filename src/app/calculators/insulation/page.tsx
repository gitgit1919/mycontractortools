"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

/* ------------------------------------------------------------------ */
/*  Coverage data per package by insulation type, R-value, spacing     */
/* ------------------------------------------------------------------ */

interface CoverageEntry {
  label: string;
  sqftPer: number; // sq ft per package/bag/sheet/kit
  thickness: string;
  unit: string; // "batts", "bags", "sheets", "kits"
  blownIn?: boolean;
  settledThickness?: string;
}

type CoverageMap = Record<string, Record<string, CoverageEntry>>;

// key format: "type" -> "Rvalue-spacing" -> entry
const coverageData: CoverageMap = {
  fiberglass_batts: {
    "R-13-16": { label: "R-13 Fiberglass Batts (16\" OC)", sqftPer: 40, thickness: "3.5\"", unit: "bags (8 batts)" },
    "R-13-24": { label: "R-13 Fiberglass Batts (24\" OC)", sqftPer: 40, thickness: "3.5\"", unit: "bags (6 batts)" },
    "R-15-16": { label: "R-15 Fiberglass Batts (16\" OC)", sqftPer: 40, thickness: "3.5\"", unit: "bags (8 batts)" },
    "R-15-24": { label: "R-15 Fiberglass Batts (24\" OC)", sqftPer: 40, thickness: "3.5\"", unit: "bags (6 batts)" },
    "R-19-16": { label: "R-19 Fiberglass Batts (16\" OC)", sqftPer: 48.96, thickness: "6.25\"", unit: "bags (8 batts)" },
    "R-19-24": { label: "R-19 Fiberglass Batts (24\" OC)", sqftPer: 48.96, thickness: "6.25\"", unit: "bags (6 batts)" },
    "R-21-16": { label: "R-21 Fiberglass Batts (16\" OC)", sqftPer: 48.96, thickness: "5.5\"", unit: "bags (8 batts)" },
    "R-21-24": { label: "R-21 Fiberglass Batts (24\" OC)", sqftPer: 48.96, thickness: "5.5\"", unit: "bags (6 batts)" },
    "R-25-16": { label: "R-25 Fiberglass Batts (16\" OC)", sqftPer: 48.96, thickness: "8\"", unit: "bags (8 batts)" },
    "R-25-24": { label: "R-25 Fiberglass Batts (24\" OC)", sqftPer: 48.96, thickness: "8\"", unit: "bags (6 batts)" },
    "R-30-16": { label: "R-30 Fiberglass Batts (16\" OC)", sqftPer: 31.25, thickness: "9.5\"", unit: "bags (5 batts)" },
    "R-30-24": { label: "R-30 Fiberglass Batts (24\" OC)", sqftPer: 42.67, thickness: "9.5\"", unit: "bags (4 batts)" },
    "R-38-16": { label: "R-38 Fiberglass Batts (16\" OC)", sqftPer: 42.67, thickness: "12\"", unit: "bags (4 batts)" },
    "R-38-24": { label: "R-38 Fiberglass Batts (24\" OC)", sqftPer: 42.67, thickness: "12\"", unit: "bags (3 batts)" },
    "R-49-16": { label: "R-49 Fiberglass Batts (16\" OC)", sqftPer: 42.67, thickness: "15.5\"", unit: "rolls" },
    "R-49-24": { label: "R-49 Fiberglass Batts (24\" OC)", sqftPer: 42.67, thickness: "15.5\"", unit: "rolls" },
    "R-60-16": { label: "R-60 Fiberglass Batts (16\" OC)", sqftPer: 32, thickness: "19.5\"", unit: "rolls" },
    "R-60-24": { label: "R-60 Fiberglass Batts (24\" OC)", sqftPer: 32, thickness: "19.5\"", unit: "rolls" },
  },
  blown_fiberglass: {
    "R-13": { label: "Blown-In Fiberglass R-13", sqftPer: 40, thickness: "5.3\"", unit: "bags", blownIn: true, settledThickness: "5.7\"" },
    "R-15": { label: "Blown-In Fiberglass R-15", sqftPer: 34.7, thickness: "6.1\"", unit: "bags", blownIn: true, settledThickness: "6.6\"" },
    "R-19": { label: "Blown-In Fiberglass R-19", sqftPer: 27.4, thickness: "7.7\"", unit: "bags", blownIn: true, settledThickness: "8.3\"" },
    "R-21": { label: "Blown-In Fiberglass R-21", sqftPer: 24.8, thickness: "8.5\"", unit: "bags", blownIn: true, settledThickness: "9.2\"" },
    "R-25": { label: "Blown-In Fiberglass R-25", sqftPer: 20.8, thickness: "10.1\"", unit: "bags", blownIn: true, settledThickness: "10.9\"" },
    "R-30": { label: "Blown-In Fiberglass R-30", sqftPer: 17.3, thickness: "12.2\"", unit: "bags", blownIn: true, settledThickness: "13.1\"" },
    "R-38": { label: "Blown-In Fiberglass R-38", sqftPer: 13.7, thickness: "15.4\"", unit: "bags", blownIn: true, settledThickness: "16.6\"" },
    "R-49": { label: "Blown-In Fiberglass R-49", sqftPer: 10.6, thickness: "19.8\"", unit: "bags", blownIn: true, settledThickness: "21.4\"" },
    "R-60": { label: "Blown-In Fiberglass R-60", sqftPer: 8.7, thickness: "24.3\"", unit: "bags", blownIn: true, settledThickness: "26.2\"" },
  },
  blown_cellulose: {
    "R-13": { label: "Blown-In Cellulose R-13", sqftPer: 44, thickness: "3.5\"", unit: "bags", blownIn: true, settledThickness: "4.0\"" },
    "R-15": { label: "Blown-In Cellulose R-15", sqftPer: 38, thickness: "4.1\"", unit: "bags", blownIn: true, settledThickness: "4.6\"" },
    "R-19": { label: "Blown-In Cellulose R-19", sqftPer: 30, thickness: "5.1\"", unit: "bags", blownIn: true, settledThickness: "5.8\"" },
    "R-21": { label: "Blown-In Cellulose R-21", sqftPer: 27, thickness: "5.7\"", unit: "bags", blownIn: true, settledThickness: "6.4\"" },
    "R-25": { label: "Blown-In Cellulose R-25", sqftPer: 22.7, thickness: "6.7\"", unit: "bags", blownIn: true, settledThickness: "7.6\"" },
    "R-30": { label: "Blown-In Cellulose R-30", sqftPer: 18.9, thickness: "8.1\"", unit: "bags", blownIn: true, settledThickness: "9.1\"" },
    "R-38": { label: "Blown-In Cellulose R-38", sqftPer: 14.9, thickness: "10.2\"", unit: "bags", blownIn: true, settledThickness: "11.5\"" },
    "R-49": { label: "Blown-In Cellulose R-49", sqftPer: 11.6, thickness: "13.2\"", unit: "bags", blownIn: true, settledThickness: "14.8\"" },
    "R-60": { label: "Blown-In Cellulose R-60", sqftPer: 9.4, thickness: "16.1\"", unit: "bags", blownIn: true, settledThickness: "18.1\"" },
  },
  spray_foam: {
    "R-13": { label: "Closed-Cell Spray Foam R-13", sqftPer: 200, thickness: "2\"", unit: "kits (200 bd ft)" },
    "R-15": { label: "Closed-Cell Spray Foam R-15", sqftPer: 200, thickness: "2.3\"", unit: "kits (200 bd ft)" },
    "R-19": { label: "Closed-Cell Spray Foam R-19", sqftPer: 200, thickness: "2.9\"", unit: "kits (200 bd ft)" },
    "R-21": { label: "Closed-Cell Spray Foam R-21", sqftPer: 200, thickness: "3.2\"", unit: "kits (200 bd ft)" },
    "R-25": { label: "Closed-Cell Spray Foam R-25", sqftPer: 200, thickness: "3.8\"", unit: "kits (200 bd ft)" },
    "R-30": { label: "Closed-Cell Spray Foam R-30", sqftPer: 200, thickness: "4.6\"", unit: "kits (200 bd ft)" },
    "R-38": { label: "Closed-Cell Spray Foam R-38", sqftPer: 200, thickness: "5.8\"", unit: "kits (200 bd ft)" },
    "R-49": { label: "Closed-Cell Spray Foam R-49", sqftPer: 200, thickness: "7.5\"", unit: "kits (200 bd ft)" },
    "R-60": { label: "Closed-Cell Spray Foam R-60", sqftPer: 200, thickness: "9.2\"", unit: "kits (200 bd ft)" },
  },
  rigid_foam: {
    "R-13": { label: "Rigid Foam Board R-13", sqftPer: 32, thickness: "2.5\"", unit: "sheets (4×8)" },
    "R-15": { label: "Rigid Foam Board R-15", sqftPer: 32, thickness: "3\"", unit: "sheets (4×8)" },
    "R-19": { label: "Rigid Foam Board R-19", sqftPer: 32, thickness: "3.75\"", unit: "sheets (4×8)" },
    "R-21": { label: "Rigid Foam Board R-21", sqftPer: 32, thickness: "4\"", unit: "sheets (4×8)" },
    "R-25": { label: "Rigid Foam Board R-25", sqftPer: 32, thickness: "5\"", unit: "sheets (4×8)" },
    "R-30": { label: "Rigid Foam Board R-30", sqftPer: 32, thickness: "6\"", unit: "sheets (4×8)" },
    "R-38": { label: "Rigid Foam Board R-38", sqftPer: 32, thickness: "7.5\"", unit: "sheets (4×8)" },
    "R-49": { label: "Rigid Foam Board R-49", sqftPer: 32, thickness: "9.5\"", unit: "sheets (4×8)" },
    "R-60": { label: "Rigid Foam Board R-60", sqftPer: 32, thickness: "12\"", unit: "sheets (4×8)" },
  },
};

const rValuesByApplication: Record<string, string[]> = {
  attic: ["R-30", "R-38", "R-49", "R-60"],
  walls: ["R-13", "R-15", "R-19", "R-21"],
  floor: ["R-19", "R-25", "R-30"],
  basement: ["R-13", "R-15", "R-19", "R-21"],
};

const applicationLabels: Record<string, string> = {
  attic: "Attic",
  walls: "Exterior Walls",
  floor: "Floor / Crawlspace",
  basement: "Basement Walls",
};

const insulationTypes = [
  { value: "fiberglass_batts", label: "Fiberglass Batts" },
  { value: "blown_fiberglass", label: "Blown-In Fiberglass" },
  { value: "blown_cellulose", label: "Blown-In Cellulose" },
  { value: "spray_foam", label: "Spray Foam (Closed-Cell)" },
  { value: "rigid_foam", label: "Rigid Foam Board (4x8 Sheets)" },
];

function getCoverage(
  type: string,
  rValue: string,
  spacing: string
): CoverageEntry | null {
  const map = coverageData[type];
  if (!map) return null;

  // Batts use spacing-keyed lookup; others don't
  if (type === "fiberglass_batts") {
    return map[`${rValue}-${spacing}`] || null;
  }
  return map[rValue] || null;
}

function getSprayFoamBoardFeet(netArea: number, rValue: string): number {
  // Closed-cell spray foam: ~6.5 R per inch
  const rNum = parseInt(rValue.replace("R-", ""), 10);
  const inches = rNum / 6.5;
  return Math.ceil(netArea * inches); // board feet = sq ft * inches
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function InsulationCalculator() {
  const [application, setApplication] = useState<string>("attic");
  const [areaMode, setAreaMode] = useState<string>("dimensions"); // "dimensions" or "direct"
  const [dimLength, setDimLength] = useState<number>(40);
  const [dimWidth, setDimWidth] = useState<number>(30);
  const [directSqFt, setDirectSqFt] = useState<number>(1200);
  const [spacing, setSpacing] = useState<string>("16");
  const [rValue, setRValue] = useState<string>("R-38");
  const [insulationType, setInsulationType] = useState<string>("fiberglass_batts");
  const [doors, setDoors] = useState<number>(0);
  const [windows, setWindows] = useState<number>(0);
  const [wasteFactor, setWasteFactor] = useState<number>(10);

  // Sync R-value when application changes
  const availableRValues = rValuesByApplication[application] || [];
  const effectiveRValue = availableRValues.includes(rValue)
    ? rValue
    : availableRValues[0];

  // Calculations
  const grossArea =
    areaMode === "dimensions" ? dimLength * dimWidth : directSqFt;
  const doorArea = doors * 21; // ~3x7 ft
  const windowArea = windows * 15; // ~3x5 ft
  const netArea = Math.max(grossArea - doorArea - windowArea, 0);
  const adjustedArea = netArea * (1 + wasteFactor / 100);

  const coverage = getCoverage(insulationType, effectiveRValue, spacing);

  let packagesNeeded = 0;
  let boardFeetNeeded = 0;
  let coveragePerPkg = 0;
  let unitLabel = "packages";

  if (insulationType === "spray_foam") {
    boardFeetNeeded = getSprayFoamBoardFeet(adjustedArea, effectiveRValue);
    const kitBdFt = 200;
    packagesNeeded = Math.ceil(boardFeetNeeded / kitBdFt);
    coveragePerPkg = kitBdFt;
    unitLabel = "kits (200 bd ft each)";
  } else if (coverage) {
    coveragePerPkg = coverage.sqftPer;
    packagesNeeded = Math.ceil(adjustedArea / coveragePerPkg);
    unitLabel = coverage.unit;
  }

  const isBlownIn =
    insulationType === "blown_fiberglass" ||
    insulationType === "blown_cellulose";
  const needsSpacing =
    insulationType === "fiberglass_batts";

  return (
    <CalculatorLayout
      title="Insulation Calculator"
      description="Calculate insulation materials needed for attics, walls, floors, and basements. Supports fiberglass batts, blown-in fiberglass, blown-in cellulose, spray foam, and rigid foam board with R-value recommendations by climate zone."
      trade="General Contracting"
      howToUse="Select the application (attic, walls, floor, or basement), enter the area dimensions or square footage directly, choose your target R-value and insulation type, and subtract any door or window openings. The calculator shows the number of packages, bags, sheets, or kits needed including waste factor. Refer to the climate zone table below to pick the right R-value for your region."
      formula="Net Area = Gross Area - Door Openings - Window Openings. Packages = (Net Area x (1 + Waste%)) / Coverage Per Package."
    >
      {/* --- Inputs --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Application */}
        <div>
          <label htmlFor="application" className="block text-sm font-medium text-gray-700 mb-1">
            Application
          </label>
          <select
            id="application"
            value={application}
            onChange={(e) => {
              setApplication(e.target.value);
              const newRValues = rValuesByApplication[e.target.value] || [];
              if (!newRValues.includes(rValue)) {
                setRValue(newRValues[0]);
              }
            }}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {Object.entries(applicationLabels).map(([val, label]) => (
              <option key={val} value={val}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Area input mode */}
        <div>
          <label htmlFor="areaMode" className="block text-sm font-medium text-gray-700 mb-1">
            Area Input Method
          </label>
          <select
            id="areaMode"
            value={areaMode}
            onChange={(e) => setAreaMode(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="dimensions">Enter Length x Width</option>
            <option value="direct">Enter Square Footage Directly</option>
          </select>
        </div>

        {/* Dimensions or direct sq ft */}
        {areaMode === "dimensions" ? (
          <>
            <div>
              <label htmlFor="dimLength" className="block text-sm font-medium text-gray-700 mb-1">
                Length (feet)
              </label>
              <input
                id="dimLength"
                type="number"
                min={1}
                step={0.5}
                value={dimLength}
                onChange={(e) => setDimLength(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="dimWidth" className="block text-sm font-medium text-gray-700 mb-1">
                {application === "walls" || application === "basement"
                  ? "Height (feet)"
                  : "Width (feet)"}
              </label>
              <input
                id="dimWidth"
                type="number"
                min={1}
                step={0.5}
                value={dimWidth}
                onChange={(e) => setDimWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </>
        ) : (
          <div className="sm:col-span-2">
            <label htmlFor="directSqFt" className="block text-sm font-medium text-gray-700 mb-1">
              Total Area (sq ft)
            </label>
            <input
              id="directSqFt"
              type="number"
              min={1}
              step={1}
              value={directSqFt}
              onChange={(e) => setDirectSqFt(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        {/* R-Value */}
        <div>
          <label htmlFor="rValue" className="block text-sm font-medium text-gray-700 mb-1">
            Target R-Value
          </label>
          <select
            id="rValue"
            value={effectiveRValue}
            onChange={(e) => setRValue(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {availableRValues.map((rv) => (
              <option key={rv} value={rv}>
                {rv}
              </option>
            ))}
          </select>
        </div>

        {/* Insulation Type */}
        <div>
          <label htmlFor="insulationType" className="block text-sm font-medium text-gray-700 mb-1">
            Insulation Type
          </label>
          <select
            id="insulationType"
            value={insulationType}
            onChange={(e) => setInsulationType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {insulationTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* Stud/Joist Spacing (only for batts) */}
        {needsSpacing && (
          <div>
            <label htmlFor="spacing" className="block text-sm font-medium text-gray-700 mb-1">
              Stud / Joist Spacing
            </label>
            <select
              id="spacing"
              value={spacing}
              onChange={(e) => setSpacing(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            >
              <option value="16">16&quot; On Center</option>
              <option value="24">24&quot; On Center</option>
            </select>
          </div>
        )}

        {/* Doors */}
        <div>
          <label htmlFor="doors" className="block text-sm font-medium text-gray-700 mb-1">
            Door Openings to Subtract
          </label>
          <input
            id="doors"
            type="number"
            min={0}
            max={50}
            value={doors}
            onChange={(e) => setDoors(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">~21 sq ft each (3x7 ft)</p>
        </div>

        {/* Windows */}
        <div>
          <label htmlFor="windows" className="block text-sm font-medium text-gray-700 mb-1">
            Window Openings to Subtract
          </label>
          <input
            id="windows"
            type="number"
            min={0}
            max={50}
            value={windows}
            onChange={(e) => setWindows(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">~15 sq ft each (3x5 ft)</p>
        </div>

        {/* Waste Factor */}
        <div>
          <label htmlFor="waste" className="block text-sm font-medium text-gray-700 mb-1">
            Waste Factor (%)
          </label>
          <input
            id="waste"
            type="number"
            min={0}
            max={25}
            value={wasteFactor}
            onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
      </div>

      {/* --- Results --- */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">
          Insulation Estimate
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gross Area</p>
            <p className="text-2xl font-bold text-brand-blue">
              {grossArea.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Net Area (minus openings)</p>
            <p className="text-2xl font-bold text-brand-blue">
              {netArea.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Adjusted Area (with waste)</p>
            <p className="text-2xl font-bold text-brand-blue">
              {Math.ceil(adjustedArea).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Coverage Per Package</p>
            <p className="text-2xl font-bold text-brand-blue">
              {coveragePerPkg}
            </p>
            <p className="text-sm text-gray-500">
              {insulationType === "spray_foam" ? "board ft / kit" : "sq ft / pkg"}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Packages to Buy</p>
            <p className="text-2xl font-bold text-brand-orange">
              {packagesNeeded}
            </p>
            <p className="text-sm text-gray-500">{unitLabel}</p>
          </div>
          {coverage && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Installed Thickness</p>
              <p className="text-2xl font-bold text-brand-blue">
                {coverage.thickness}
              </p>
              <p className="text-sm text-gray-500">{effectiveRValue}</p>
            </div>
          )}
          {insulationType === "spray_foam" && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Total Board Feet</p>
              <p className="text-2xl font-bold text-brand-blue">
                {boardFeetNeeded.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">board ft needed</p>
            </div>
          )}
        </div>

        {/* Blown-in notes */}
        {isBlownIn && coverage && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            <p className="font-semibold mb-1">Blown-In Insulation Notes</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Approximate settled thickness:{" "}
                <span className="font-medium">
                  {coverage.settledThickness}
                </span>
              </li>
              <li>
                A blowing machine is required. Most home improvement stores offer free machine rental with purchase of 10+ bags.
              </li>
              <li>
                Install depth markers before blowing to ensure even coverage at the target thickness.
              </li>
            </ul>
          </div>
        )}

        {/* Spray foam note */}
        {insulationType === "spray_foam" && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            <p className="font-semibold mb-1">Spray Foam Notes</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Board feet = square feet x thickness in inches. Each kit covers approximately 200 board feet at 1&quot; thickness.
              </li>
              <li>
                Closed-cell spray foam provides approximately R-6.5 per inch.
              </li>
              <li>
                Professional installation is recommended for large projects. DIY kits are available for smaller areas.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* --- Climate Zone Recommendation --- */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-brand-blue mb-4">
          Climate Zone Recommendations
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          Select R-values based on your climate zone per IRC 2021. Higher
          climate zone numbers indicate colder climates requiring more
          insulation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">
              Zone 1-3 (Hot / Mixed)
            </p>
            <p className="text-sm text-green-800">
              {application === "attic" && "Attic: R-30 to R-49"}
              {application === "walls" && "Walls: R-13 to R-15"}
              {application === "floor" && "Floor: R-13"}
              {application === "basement" && "Basement Walls: R-13"}
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="font-semibold text-yellow-900 mb-1">
              Zone 4-5 (Mixed / Cool)
            </p>
            <p className="text-sm text-yellow-800">
              {application === "attic" && "Attic: R-38 to R-60"}
              {application === "walls" && "Walls: R-15 to R-21"}
              {application === "floor" && "Floor: R-19 to R-25"}
              {application === "basement" && "Basement Walls: R-15 to R-21"}
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              Zone 6-7 (Cold / Very Cold)
            </p>
            <p className="text-sm text-blue-800">
              {application === "attic" && "Attic: R-49 to R-60"}
              {application === "walls" && "Walls: R-19 to R-21"}
              {application === "floor" && "Floor: R-25 to R-30"}
              {application === "basement" && "Basement Walls: R-19 to R-21"}
            </p>
          </div>
        </div>
      </div>

      {/* --- R-Value Reference Table --- */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-brand-blue mb-4">
          R-Value Reference Table (IRC 2021)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="px-4 py-3 text-left rounded-tl-lg">
                  Climate Zone
                </th>
                <th className="px-4 py-3 text-left">Attic</th>
                <th className="px-4 py-3 text-left">Exterior Walls</th>
                <th className="px-4 py-3 text-left">Floor</th>
                <th className="px-4 py-3 text-left rounded-tr-lg">
                  Basement Walls
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50 border-b border-gray-200">
                <td className="px-4 py-3 font-medium">Zone 1-3</td>
                <td className="px-4 py-3">R-30 to R-49</td>
                <td className="px-4 py-3">R-13 to R-15</td>
                <td className="px-4 py-3">R-13</td>
                <td className="px-4 py-3">R-13</td>
              </tr>
              <tr className="bg-yellow-50 border-b border-gray-200">
                <td className="px-4 py-3 font-medium">Zone 4-5</td>
                <td className="px-4 py-3">R-38 to R-60</td>
                <td className="px-4 py-3">R-15 to R-21</td>
                <td className="px-4 py-3">R-19 to R-25</td>
                <td className="px-4 py-3">R-15 to R-21</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-4 py-3 font-medium">Zone 6-7</td>
                <td className="px-4 py-3">R-49 to R-60</td>
                <td className="px-4 py-3">R-19 to R-21</td>
                <td className="px-4 py-3">R-25 to R-30</td>
                <td className="px-4 py-3">R-19 to R-21</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </CalculatorLayout>
  );
}

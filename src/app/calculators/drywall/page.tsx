"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function DrywallCalculator() {
  const [length, setLength] = useState<number>(40);
  const [width, setWidth] = useState<number>(30);
  const [ceilingHeight, setCeilingHeight] = useState<number>(8);
  const [doCeiling, setDoCeiling] = useState<boolean>(true);
  const [doors, setDoors] = useState<number>(5);
  const [windows, setWindows] = useState<number>(6);
  const [sheetSize, setSheetSize] = useState<string>("4x8");
  const [wasteFactor, setWasteFactor] = useState<number>(10);

  const doorArea = doors * 21; // ~3x7 ft
  const windowArea = windows * 15; // ~3x5 ft
  const wallArea = 2 * (length + width) * ceilingHeight - doorArea - windowArea;
  const ceilingArea = doCeiling ? length * width : 0;
  const totalSqFt = Math.max(wallArea + ceilingArea, 0);

  const sheetSqFt = sheetSize === "4x8" ? 32 : sheetSize === "4x10" ? 40 : 48;
  const sheetsNeeded = Math.ceil(totalSqFt * (1 + wasteFactor / 100) / sheetSqFt);

  const jointTapeRolls = Math.ceil(totalSqFt / 475); // 500 ft roll covers ~475 sq ft
  const jointCompound = (totalSqFt / 100 * 3.5).toFixed(1); // ~3.5 lbs per 100 sq ft per coat, 3 coats
  const screws = Math.ceil(totalSqFt * 0.32); // ~1 screw per 3 sq ft, both field & edge

  return (
    <CalculatorLayout
      title="Drywall Calculator"
      description="Calculate the number of drywall sheets, joint compound, tape, and screws needed for your project. Accounts for doors, windows, and waste."
      trade="General Contracting"
      howToUse="Enter the room dimensions including ceiling height. Specify the number of doors and windows to subtract their area from the wall total. Choose your sheet size (4x8, 4x10, or 4x12) and waste factor. The calculator provides a complete materials list for hanging and finishing drywall."
      formula="Wall Area = 2 × (Length + Width) × Ceiling Height - Door Openings - Window Openings. Sheets = Total Sq Ft × (1 + Waste%) / Sheet Sq Ft."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Room Length (feet)</label>
          <input id="length" type="number" min={1} step={0.5} value={length} onChange={(e) => setLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Room Width (feet)</label>
          <input id="width" type="number" min={1} step={0.5} value={width} onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="ceilingHeight" className="block text-sm font-medium text-gray-700 mb-1">Ceiling Height (feet)</label>
          <input id="ceilingHeight" type="number" min={6} max={20} step={0.5} value={ceilingHeight} onChange={(e) => setCeilingHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="sheetSize" className="block text-sm font-medium text-gray-700 mb-1">Sheet Size</label>
          <select id="sheetSize" value={sheetSize} onChange={(e) => setSheetSize(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="4x8">4&apos; × 8&apos; (32 sq ft)</option>
            <option value="4x10">4&apos; × 10&apos; (40 sq ft)</option>
            <option value="4x12">4&apos; × 12&apos; (48 sq ft)</option>
          </select>
        </div>
        <div>
          <label htmlFor="doors" className="block text-sm font-medium text-gray-700 mb-1">Number of Doors</label>
          <input id="doors" type="number" min={0} max={50} value={doors} onChange={(e) => setDoors(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="windows" className="block text-sm font-medium text-gray-700 mb-1">Number of Windows</label>
          <input id="windows" type="number" min={0} max={50} value={windows} onChange={(e) => setWindows(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div className="flex items-center gap-3">
          <input id="doCeiling" type="checkbox" checked={doCeiling} onChange={(e) => setDoCeiling(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
          <label htmlFor="doCeiling" className="text-sm font-medium text-gray-700">Include Ceiling</label>
        </div>
        <div>
          <label htmlFor="waste" className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
          <input id="waste" type="number" min={5} max={25} value={wasteFactor} onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Material List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Area</p>
            <p className="text-2xl font-bold text-brand-blue">{totalSqFt.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Drywall Sheets</p>
            <p className="text-2xl font-bold text-brand-orange">{sheetsNeeded}</p>
            <p className="text-sm text-gray-500">{sheetSize} sheets</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Joint Tape</p>
            <p className="text-2xl font-bold text-brand-blue">{jointTapeRolls}</p>
            <p className="text-sm text-gray-500">500 ft rolls</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Joint Compound</p>
            <p className="text-2xl font-bold text-brand-blue">{jointCompound}</p>
            <p className="text-sm text-gray-500">lbs (3 coats)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Drywall Screws</p>
            <p className="text-2xl font-bold text-brand-blue">{screws.toLocaleString()}</p>
            <p className="text-sm text-gray-500">~{Math.ceil(screws / 200)} lbs</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

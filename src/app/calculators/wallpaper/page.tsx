"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const rollSizes: Record<string, { label: string; widthIn: number; lengthFt: number }> = {
  us: { label: "US Standard (20.5\" x 33 ft)", widthIn: 20.5, lengthFt: 33 },
  euro: { label: "Euro Standard (21\" x 33 ft)", widthIn: 21, lengthFt: 33 },
  uswide: { label: "US Wide (27\" x 27 ft)", widthIn: 27, lengthFt: 27 },
  eurowide: { label: "Euro Wide (28\" x 33 ft)", widthIn: 28, lengthFt: 33 },
};

export default function WallpaperCalculator() {
  const [inputMode, setInputMode] = useState<"perimeter" | "walls">("perimeter");
  const [perimeter, setPerimeter] = useState<number>(56);
  const [wall1, setWall1] = useState<number>(14);
  const [wall2, setWall2] = useState<number>(14);
  const [wall3, setWall3] = useState<number>(14);
  const [wall4, setWall4] = useState<number>(14);
  const [wallHeight, setWallHeight] = useState<number>(8);
  const [numDoors, setNumDoors] = useState<number>(2);
  const [numWindows, setNumWindows] = useState<number>(3);
  const [doorArea, setDoorArea] = useState<number>(21); // 3x7 standard
  const [windowArea, setWindowArea] = useState<number>(12); // 3x4 average
  const [rollSize, setRollSize] = useState<string>("us");
  const [patternRepeat, setPatternRepeat] = useState<number>(0);

  const roll = rollSizes[rollSize];

  // Total perimeter
  const totalPerimeter =
    inputMode === "perimeter" ? perimeter : wall1 + wall2 + wall3 + wall4;

  // Gross wall area
  const grossWallArea = totalPerimeter * wallHeight;

  // Subtract doors and windows
  const totalDoorArea = numDoors * doorArea;
  const totalWindowArea = numWindows * windowArea;
  const netWallArea = Math.max(0, grossWallArea - totalDoorArea - totalWindowArea);

  // Roll dimensions
  const rollWidthFt = roll.widthIn / 12;
  const rollAreaSqFt = rollWidthFt * roll.lengthFt;

  // Strips per roll (based on wall height and pattern repeat)
  const stripHeight = wallHeight;
  let effectiveStripHeight = stripHeight;

  if (patternRepeat > 0) {
    const patternRepeatFt = patternRepeat / 12;
    // Each strip needs to be cut to the next full pattern repeat above wall height
    effectiveStripHeight = Math.ceil(stripHeight / patternRepeatFt) * patternRepeatFt;
  }

  const stripsPerRoll = Math.floor(roll.lengthFt / effectiveStripHeight);
  const usableAreaPerRoll = stripsPerRoll > 0 ? stripsPerRoll * rollWidthFt * wallHeight : 0;

  // Waste per roll from pattern matching
  const wastePerRoll = rollAreaSqFt - usableAreaPerRoll;

  // Total strips needed
  const totalStripsNeeded = Math.ceil(totalPerimeter / rollWidthFt);

  // Rolls needed
  const rollsNeeded =
    stripsPerRoll > 0 ? Math.ceil(totalStripsNeeded / stripsPerRoll) : 0;

  // Effective coverage
  const effectiveCoverage = rollsNeeded * usableAreaPerRoll;

  // Total waste
  const totalWaste = rollsNeeded * rollAreaSqFt - netWallArea;

  return (
    <CalculatorLayout
      title="Wallpaper Calculator"
      description="Calculate the number of wallpaper rolls needed for your room. Accounts for room dimensions, wall height, doors, windows, roll size, and pattern repeat waste for an accurate material estimate."
      trade="Painting"
      howToUse="Enter your room perimeter or individual wall lengths, then set the wall height. Subtract doors and windows by entering their count and average sizes. Select your wallpaper roll size (US or European standard) and enter the pattern repeat length if your wallpaper has a repeating design. The calculator accounts for waste from pattern matching and gives you an accurate roll count."
      formula="Net Wall Area = (Perimeter x Height) - Door Area - Window Area. Strips Needed = Perimeter / Roll Width. Effective Strip Height = ceil(Wall Height / Pattern Repeat) x Pattern Repeat. Strips per Roll = floor(Roll Length / Effective Strip Height). Rolls Needed = ceil(Total Strips / Strips per Roll)."
    >
      {/* Input Mode Toggle */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Input Method</label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setInputMode("perimeter")}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${
              inputMode === "perimeter"
                ? "bg-brand-blue text-white border-brand-blue"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Room Perimeter
          </button>
          <button
            type="button"
            onClick={() => setInputMode("walls")}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${
              inputMode === "walls"
                ? "bg-brand-blue text-white border-brand-blue"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Individual Walls
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {inputMode === "perimeter" ? (
          <div>
            <label htmlFor="perimeter" className="block text-sm font-medium text-gray-700 mb-1">
              Room Perimeter (ft)
            </label>
            <input
              id="perimeter"
              type="number"
              min={1}
              max={500}
              value={perimeter}
              onChange={(e) => setPerimeter(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Total distance around all walls</p>
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="wall1" className="block text-sm font-medium text-gray-700 mb-1">
                Wall 1 Length (ft)
              </label>
              <input
                id="wall1"
                type="number"
                min={0}
                max={200}
                value={wall1}
                onChange={(e) => setWall1(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="wall2" className="block text-sm font-medium text-gray-700 mb-1">
                Wall 2 Length (ft)
              </label>
              <input
                id="wall2"
                type="number"
                min={0}
                max={200}
                value={wall2}
                onChange={(e) => setWall2(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="wall3" className="block text-sm font-medium text-gray-700 mb-1">
                Wall 3 Length (ft)
              </label>
              <input
                id="wall3"
                type="number"
                min={0}
                max={200}
                value={wall3}
                onChange={(e) => setWall3(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="wall4" className="block text-sm font-medium text-gray-700 mb-1">
                Wall 4 Length (ft)
              </label>
              <input
                id="wall4"
                type="number"
                min={0}
                max={200}
                value={wall4}
                onChange={(e) => setWall4(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="wallHeight" className="block text-sm font-medium text-gray-700 mb-1">
            Wall Height (ft)
          </label>
          <input
            id="wallHeight"
            type="number"
            min={4}
            max={20}
            step={0.25}
            value={wallHeight}
            onChange={(e) => setWallHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="rollSize" className="block text-sm font-medium text-gray-700 mb-1">
            Wallpaper Roll Size
          </label>
          <select
            id="rollSize"
            value={rollSize}
            onChange={(e) => setRollSize(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {Object.entries(rollSizes).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="patternRepeat" className="block text-sm font-medium text-gray-700 mb-1">
            Pattern Repeat (inches)
          </label>
          <input
            id="patternRepeat"
            type="number"
            min={0}
            max={36}
            step={0.5}
            value={patternRepeat}
            onChange={(e) => setPatternRepeat(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">0 for no pattern; check wallpaper specs for repeat length</p>
        </div>

        <div>
          <label htmlFor="numDoors" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Doors
          </label>
          <input
            id="numDoors"
            type="number"
            min={0}
            max={20}
            value={numDoors}
            onChange={(e) => setNumDoors(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="doorArea" className="block text-sm font-medium text-gray-700 mb-1">
            Avg Door Area (sq ft)
          </label>
          <input
            id="doorArea"
            type="number"
            min={0}
            max={50}
            step={0.5}
            value={doorArea}
            onChange={(e) => setDoorArea(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Standard door: 21 sq ft (3 ft x 7 ft)</p>
        </div>

        <div>
          <label htmlFor="numWindows" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Windows
          </label>
          <input
            id="numWindows"
            type="number"
            min={0}
            max={20}
            value={numWindows}
            onChange={(e) => setNumWindows(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="windowArea" className="block text-sm font-medium text-gray-700 mb-1">
            Avg Window Area (sq ft)
          </label>
          <input
            id="windowArea"
            type="number"
            min={0}
            max={50}
            step={0.5}
            value={windowArea}
            onChange={(e) => setWindowArea(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Standard window: 12 sq ft (3 ft x 4 ft)</p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Wallpaper Estimate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gross Wall Area</p>
            <p className="text-2xl font-bold text-brand-blue">{grossWallArea.toFixed(0)} sq ft</p>
            <p className="text-sm text-gray-500">{totalPerimeter} ft perimeter x {wallHeight} ft high</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Net Wall Area</p>
            <p className="text-2xl font-bold text-brand-orange">{netWallArea.toFixed(0)} sq ft</p>
            <p className="text-sm text-gray-500">
              minus {numDoors} door{numDoors !== 1 ? "s" : ""} &amp; {numWindows} window{numWindows !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Rolls Needed</p>
            <p className="text-2xl font-bold text-brand-blue">{rollsNeeded}</p>
            <p className="text-sm text-gray-500">{roll.label.split("(")[0].trim()}</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Usable Area per Roll</p>
            <p className="text-2xl font-bold text-brand-orange">{usableAreaPerRoll.toFixed(1)} sq ft</p>
            <p className="text-sm text-gray-500">
              {stripsPerRoll} strip{stripsPerRoll !== 1 ? "s" : ""} per roll
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Strips</p>
            <p className="text-2xl font-bold text-brand-blue">{totalStripsNeeded}</p>
            <p className="text-sm text-gray-500">{rollWidthFt.toFixed(2)} ft wide each</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Waste from Pattern Match</p>
            <p className="text-2xl font-bold text-brand-orange">
              {totalWaste > 0 ? totalWaste.toFixed(0) : "0"} sq ft
            </p>
            <p className="text-sm text-gray-500">
              {patternRepeat > 0
                ? `${patternRepeat}" repeat adds waste`
                : "no pattern repeat"}
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

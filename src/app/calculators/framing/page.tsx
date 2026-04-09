"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type HeightOption = "8" | "9" | "10" | "custom";
type StudSpacing = 16 | 24;
type HeaderSize = "2x6" | "2x8" | "2x10" | "2x12";

function getHeaderSize(spanInches: number): HeaderSize {
  if (spanInches <= 48) return "2x6";
  if (spanInches <= 72) return "2x8";
  if (spanInches <= 96) return "2x10";
  return "2x12";
}

function getPrecut(heightFt: number): string {
  if (heightFt === 8) return '92-5/8"';
  if (heightFt === 9) return '104-5/8"';
  if (heightFt === 10) return '116-5/8"';
  return `${(heightFt * 12 - 3.375).toFixed(1)}"`;
}

export default function FramingCalculator() {
  const [wallLength, setWallLength] = useState<number>(20);
  const [heightOption, setHeightOption] = useState<HeightOption>("8");
  const [customHeight, setCustomHeight] = useState<number>(8);
  const [studSpacing, setStudSpacing] = useState<StudSpacing>(16);
  const [numDoors, setNumDoors] = useState<number>(1);
  const [doorWidth, setDoorWidth] = useState<number>(36);
  const [doorHeight, setDoorHeight] = useState<number>(80);
  const [numWindows, setNumWindows] = useState<number>(2);
  const [windowWidth, setWindowWidth] = useState<number>(36);
  const [windowHeight, setWindowHeight] = useState<number>(48);
  const [corners, setCorners] = useState<number>(0);
  const [includeDoubleTop, setIncludeDoubleTop] = useState<boolean>(true);

  const wallHeightFt = heightOption === "custom" ? customHeight : Number(heightOption);
  const wallLengthIn = wallLength * 12;
  const wallHeightIn = wallHeightFt * 12;

  // --- Stud count ---
  // Base studs along wall
  const baseStuds = Math.floor(wallLengthIn / studSpacing) + 1;

  // Opening studs: each door/window gets 2 king studs + 2 jack studs = 4 per opening
  const kingStudsDoors = numDoors * 2;
  const jackStudsDoors = numDoors * 2;
  const kingStudsWindows = numWindows * 2;
  const jackStudsWindows = numWindows * 2;

  // Cripple studs above/below openings
  // Cripples above doors: span / spacing (rounded up)
  const cripplesAboveDoors = numDoors * Math.max(0, Math.ceil(doorWidth / studSpacing) - 1);
  // Cripples above windows: span / spacing
  const cripplesAboveWindows = numWindows * Math.max(0, Math.ceil(windowWidth / studSpacing) - 1);
  // Cripples below windows (sill cripples)
  const cripplesBelowWindows = numWindows * Math.max(0, Math.ceil(windowWidth / studSpacing) - 1);

  // Studs displaced by openings (subtract studs that fall within openings from base count)
  const doorDisplaced = numDoors * Math.max(0, Math.ceil(doorWidth / studSpacing) - 1);
  const windowDisplaced = numWindows * Math.max(0, Math.ceil(windowWidth / studSpacing) - 1);
  const displacedStuds = doorDisplaced + windowDisplaced;

  // Corner posts: 3 studs per corner
  const cornerStuds = corners * 3;

  const totalStuds =
    baseStuds -
    displacedStuds +
    kingStudsDoors +
    jackStudsDoors +
    kingStudsWindows +
    jackStudsWindows +
    cripplesAboveDoors +
    cripplesAboveWindows +
    cripplesBelowWindows +
    cornerStuds;

  // --- Plates ---
  const solePlateLf = wallLength;
  const topPlateLf = wallLength;
  const doubleTopPlateLf = includeDoubleTop ? wallLength : 0;
  const totalPlateLf = solePlateLf + topPlateLf + doubleTopPlateLf;
  const plateCount = includeDoubleTop ? 3 : 2;

  // --- Headers ---
  // Each opening needs a header. Header length = opening width + 6" (3" bearing each side)
  const doorHeaderLength = (doorWidth + 6) / 12;
  const windowHeaderLength = (windowWidth + 6) / 12;
  const doorHeaderSize = getHeaderSize(doorWidth);
  const windowHeaderSize = getHeaderSize(windowWidth);
  // Headers are doubled (2 pieces per header)
  const totalDoorHeaderLf = numDoors * doorHeaderLength * 2;
  const totalWindowHeaderLf = numWindows * windowHeaderLength * 2;
  const totalHeaderLf = totalDoorHeaderLf + totalWindowHeaderLf;

  // --- Sheathing ---
  const wallAreaSqFt = wallLength * wallHeightFt;
  const doorAreaSqFt = numDoors * (doorWidth / 12) * (doorHeight / 12);
  const windowAreaSqFt = numWindows * (windowWidth / 12) * (windowHeight / 12);
  const netWallArea = wallAreaSqFt - doorAreaSqFt - windowAreaSqFt;
  const sheathingSheetArea = 32; // 4x8 = 32 sq ft
  const sheathingSheets = Math.ceil((netWallArea * 1.1) / sheathingSheetArea); // 10% waste

  // --- Nails ---
  // Rough estimate: ~16 nails per stud (toe-nailing + connections), ~12 per LF of plate, ~32 per sheet of sheathing
  const nailsForStuds = totalStuds * 16;
  const nailsForPlates = Math.ceil(totalPlateLf * 12);
  const nailsForSheathing = sheathingSheets * 32;
  const totalNails = nailsForStuds + nailsForPlates + nailsForSheathing;
  const nailsPerPound = 50; // ~50 16d nails per pound
  const nailPounds = Math.ceil(totalNails / nailsPerPound);

  // --- Board feet ---
  // 2x4 stud: 1.5" x 3.5" actual. Board foot = (nominal width x nominal thickness x length) / 12
  // For a 2x4 stud at wall height: BF = (2 * 4 * heightFt) / 12 = (8 * heightFt) / 12
  const studBf = (2 * 4 * wallHeightFt) / 12;
  const totalStudBf = totalStuds * studBf;
  // Plates: 2x4
  const plateBf = (2 * 4 * totalPlateLf) / 12;
  // Headers: various sizes
  const doorHeaderDepth = Number(doorHeaderSize.split("x")[1]);
  const windowHeaderDepth = Number(windowHeaderSize.split("x")[1]);
  const doorHeaderBf = (2 * doorHeaderDepth * totalDoorHeaderLf) / 12;
  const windowHeaderBf = (2 * windowHeaderDepth * totalWindowHeaderLf) / 12;
  const totalBoardFeet = totalStudBf + plateBf + doorHeaderBf + windowHeaderBf;

  // Precut stud length
  const precutLabel = getPrecut(wallHeightFt);

  return (
    <CalculatorLayout
      title="Wall Framing Calculator"
      description="Estimate studs, plates, headers, sheathing, nails, and total board feet for wood-framed wall construction. Accounts for doors, windows, corners, and standard framing practices."
      trade="Carpentry"
      howToUse="Enter the wall length and select a wall height (8, 9, or 10 ft presets, or enter a custom height). Choose stud spacing (16 in. OC is standard residential, 24 in. OC for non-load-bearing). Add door and window counts with their rough opening sizes. Specify corner posts if the wall includes corners. The calculator provides a full material breakdown including studs, plates, headers, sheathing sheets, nails, and total board feet."
      formula="Base studs = (wall length in inches / stud spacing) + 1. Each opening adds 2 king studs + 2 jack studs, plus cripple studs above (and below windows). Displaced studs within openings are subtracted. Corner posts = 3 studs per corner. Plates = wall length x number of plates (sole + top + optional double top). Headers = (opening width + 6 in.) x 2 pieces. Sheathing = net wall area / 32 sq ft per sheet + 10% waste."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Wall Length */}
        <div>
          <label htmlFor="wallLength" className="block text-sm font-medium text-gray-700 mb-1">Wall Length (ft)</label>
          <input id="wallLength" type="number" min={1} max={200} value={wallLength} onChange={(e) => setWallLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>

        {/* Wall Height */}
        <div>
          <label htmlFor="heightOption" className="block text-sm font-medium text-gray-700 mb-1">Wall Height</label>
          <select id="heightOption" value={heightOption} onChange={(e) => setHeightOption(e.target.value as HeightOption)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="8">8 ft (standard)</option>
            <option value="9">9 ft</option>
            <option value="10">10 ft</option>
            <option value="custom">Custom</option>
          </select>
          {heightOption === "custom" && (
            <input id="customHeight" type="number" min={4} max={20} step={0.5} value={customHeight} onChange={(e) => setCustomHeight(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              placeholder="Enter height in feet" />
          )}
        </div>

        {/* Stud Spacing */}
        <div>
          <label htmlFor="studSpacing" className="block text-sm font-medium text-gray-700 mb-1">Stud Spacing</label>
          <select id="studSpacing" value={studSpacing} onChange={(e) => setStudSpacing(Number(e.target.value) as StudSpacing)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value={16}>16&quot; on center (standard)</option>
            <option value={24}>24&quot; on center</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">16&quot; OC for load-bearing walls; 24&quot; OC for non-load-bearing</p>
        </div>

        {/* Double Top Plate */}
        <div>
          <label htmlFor="doubleTop" className="block text-sm font-medium text-gray-700 mb-1">Double Top Plate</label>
          <select id="doubleTop" value={includeDoubleTop ? "yes" : "no"} onChange={(e) => setIncludeDoubleTop(e.target.value === "yes")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="yes">Yes (standard for load-bearing)</option>
            <option value="no">No (single top plate)</option>
          </select>
        </div>

        {/* Number of Doors */}
        <div>
          <label htmlFor="numDoors" className="block text-sm font-medium text-gray-700 mb-1">Number of Doors</label>
          <input id="numDoors" type="number" min={0} max={20} value={numDoors} onChange={(e) => setNumDoors(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>

        {/* Door Rough Opening */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Door Rough Opening (in.)</label>
          <div className="flex gap-2">
            <div className="flex-1">
              <input id="doorWidth" type="number" min={24} max={72} value={doorWidth} onChange={(e) => setDoorWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
              <p className="text-xs text-gray-500 mt-1">Width (default 36&quot;)</p>
            </div>
            <div className="flex-1">
              <input id="doorHeight" type="number" min={60} max={120} value={doorHeight} onChange={(e) => setDoorHeight(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
              <p className="text-xs text-gray-500 mt-1">Height (default 80&quot;)</p>
            </div>
          </div>
        </div>

        {/* Number of Windows */}
        <div>
          <label htmlFor="numWindows" className="block text-sm font-medium text-gray-700 mb-1">Number of Windows</label>
          <input id="numWindows" type="number" min={0} max={20} value={numWindows} onChange={(e) => setNumWindows(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>

        {/* Window Rough Opening */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Window Rough Opening (in.)</label>
          <div className="flex gap-2">
            <div className="flex-1">
              <input id="windowWidth" type="number" min={12} max={96} value={windowWidth} onChange={(e) => setWindowWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
              <p className="text-xs text-gray-500 mt-1">Width (default 36&quot;)</p>
            </div>
            <div className="flex-1">
              <input id="windowHeight" type="number" min={12} max={96} value={windowHeight} onChange={(e) => setWindowHeight(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
              <p className="text-xs text-gray-500 mt-1">Height (default 48&quot;)</p>
            </div>
          </div>
        </div>

        {/* Corners */}
        <div>
          <label htmlFor="corners" className="block text-sm font-medium text-gray-700 mb-1">Corner Posts</label>
          <input id="corners" type="number" min={0} max={10} value={corners} onChange={(e) => setCorners(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">3-stud corners (standard). Enter number of corners on this wall.</p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Framing Material List</h2>

        {/* Studs */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Studs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Total 2x4 Studs</p>
            <p className="text-xl font-bold text-brand-orange">{totalStuds}</p>
            <p className="text-sm text-gray-500">Precut {precutLabel} for {wallHeightFt} ft walls</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Base Layout Studs</p>
            <p className="text-xl font-bold text-brand-blue">{baseStuds - displacedStuds}</p>
            <p className="text-sm text-gray-500">{studSpacing}&quot; OC ({baseStuds} total minus {displacedStuds} displaced)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">King Studs</p>
            <p className="text-xl font-bold text-brand-blue">{kingStudsDoors + kingStudsWindows}</p>
            <p className="text-sm text-gray-500">{kingStudsDoors} for doors + {kingStudsWindows} for windows</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Jack (Trimmer) Studs</p>
            <p className="text-xl font-bold text-brand-blue">{jackStudsDoors + jackStudsWindows}</p>
            <p className="text-sm text-gray-500">{jackStudsDoors} for doors + {jackStudsWindows} for windows</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Cripple Studs</p>
            <p className="text-xl font-bold text-brand-blue">{cripplesAboveDoors + cripplesAboveWindows + cripplesBelowWindows}</p>
            <p className="text-sm text-gray-500">{cripplesAboveDoors} above doors, {cripplesAboveWindows} above + {cripplesBelowWindows} below windows</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Corner Post Studs</p>
            <p className="text-xl font-bold text-brand-blue">{cornerStuds}</p>
            <p className="text-sm text-gray-500">{corners} corner{corners !== 1 ? "s" : ""} x 3 studs each</p>
          </div>
        </div>

        {/* Plates */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Plates (2x4)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Sole (Bottom) Plate</p>
            <p className="text-xl font-bold text-brand-blue">{solePlateLf} linear ft</p>
            <p className="text-sm text-gray-500">1 plate x {wallLength} ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Top Plate{includeDoubleTop ? "s (double)" : ""}</p>
            <p className="text-xl font-bold text-brand-blue">{topPlateLf + doubleTopPlateLf} linear ft</p>
            <p className="text-sm text-gray-500">{includeDoubleTop ? "2" : "1"} plate{includeDoubleTop ? "s" : ""} x {wallLength} ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Total Plate Material</p>
            <p className="text-xl font-bold text-brand-orange">{totalPlateLf} linear ft</p>
            <p className="text-sm text-gray-500">{plateCount} plates total</p>
          </div>
        </div>

        {/* Headers */}
        {(numDoors > 0 || numWindows > 0) && (
          <>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Headers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {numDoors > 0 && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Door Headers ({doorHeaderSize})</p>
                  <p className="text-xl font-bold text-brand-blue">{totalDoorHeaderLf.toFixed(1)} linear ft</p>
                  <p className="text-sm text-gray-500">{numDoors} header{numDoors > 1 ? "s" : ""} x {doorHeaderLength.toFixed(1)} ft x 2 pieces</p>
                </div>
              )}
              {numWindows > 0 && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Window Headers ({windowHeaderSize})</p>
                  <p className="text-xl font-bold text-brand-blue">{totalWindowHeaderLf.toFixed(1)} linear ft</p>
                  <p className="text-sm text-gray-500">{numWindows} header{numWindows > 1 ? "s" : ""} x {windowHeaderLength.toFixed(1)} ft x 2 pieces</p>
                </div>
              )}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Total Header Material</p>
                <p className="text-xl font-bold text-brand-orange">{totalHeaderLf.toFixed(1)} linear ft</p>
                <p className="text-sm text-gray-500">Doubled headers for all openings</p>
              </div>
            </div>
          </>
        )}

        {/* Sheathing */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Sheathing (4x8 OSB/Plywood)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Gross Wall Area</p>
            <p className="text-xl font-bold text-brand-blue">{wallAreaSqFt.toLocaleString()} sq ft</p>
            <p className="text-sm text-gray-500">{wallLength} ft x {wallHeightFt} ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Net Wall Area</p>
            <p className="text-xl font-bold text-brand-blue">{netWallArea.toFixed(0)} sq ft</p>
            <p className="text-sm text-gray-500">Minus {(doorAreaSqFt + windowAreaSqFt).toFixed(0)} sq ft of openings</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">4x8 Sheets Needed</p>
            <p className="text-xl font-bold text-brand-orange">{sheathingSheets}</p>
            <p className="text-sm text-gray-500">Includes 10% waste factor</p>
          </div>
        </div>

        {/* Nails */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Fasteners (16d Framing Nails)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Estimated Nails</p>
            <p className="text-xl font-bold text-brand-blue">{totalNails.toLocaleString()}</p>
            <p className="text-sm text-gray-500">16d common nails</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Nails by Weight</p>
            <p className="text-xl font-bold text-brand-orange">{nailPounds} lbs</p>
            <p className="text-sm text-gray-500">~50 nails per pound</p>
          </div>
        </div>

        {/* Board Feet Summary */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Total Lumber</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Stud Lumber</p>
            <p className="text-xl font-bold text-brand-blue">{totalStudBf.toFixed(0)} board ft</p>
            <p className="text-sm text-gray-500">{totalStuds} studs x {studBf.toFixed(1)} BF each</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Plate Lumber</p>
            <p className="text-xl font-bold text-brand-blue">{plateBf.toFixed(0)} board ft</p>
            <p className="text-sm text-gray-500">{totalPlateLf} linear ft of 2x4</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Header Lumber</p>
            <p className="text-xl font-bold text-brand-blue">{(doorHeaderBf + windowHeaderBf).toFixed(0)} board ft</p>
            <p className="text-sm text-gray-500">{totalHeaderLf.toFixed(1)} linear ft total</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 sm:col-span-2 lg:col-span-3">
            <p className="text-sm text-gray-600">Total Board Feet</p>
            <p className="text-2xl font-bold text-brand-orange">{totalBoardFeet.toFixed(0)} board ft</p>
            <p className="text-sm text-gray-500">All lumber combined (studs + plates + headers)</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

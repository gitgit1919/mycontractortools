"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type DrywallType = "regular" | "moisture" | "firerated";

interface Room {
  id: number;
  label: string;
  length: number;
  width: number;
  ceilingHeight: number;
  doCeiling: boolean;
  doors: number;
  windows: number;
  outsideCorners: number;
}

function createRoom(id: number): Room {
  return {
    id,
    label: id === 1 ? "Room 1" : `Room ${id}`,
    length: 12,
    width: 10,
    ceilingHeight: 8,
    doCeiling: true,
    doors: 1,
    windows: 1,
    outsideCorners: 0,
  };
}

const drywallTypeLabels: Record<DrywallType, string> = {
  regular: '1/2" Regular',
  moisture: '1/2" Moisture-Resistant (Green Board)',
  firerated: '5/8" Fire-Rated (Type X)',
};

const drywallPriceRange: Record<DrywallType, [number, number]> = {
  regular: [12, 15],
  moisture: [14, 18],
  firerated: [15, 18],
};

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

export default function DrywallCalculator() {
  const [rooms, setRooms] = useState<Room[]>([createRoom(1)]);
  const [nextId, setNextId] = useState<number>(2);
  const [sheetSize, setSheetSize] = useState<string>("4x8");
  const [wasteFactor, setWasteFactor] = useState<number>(10);
  const [drywallType, setDrywallType] = useState<DrywallType>("regular");
  const [cornerBeadLength, setCornerBeadLength] = useState<number>(8);

  const updateRoom = (id: number, updates: Partial<Room>) => {
    setRooms((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...updates } : r))
    );
  };

  const addRoom = () => {
    const r = createRoom(nextId);
    setNextId((n) => n + 1);
    setRooms((prev) => [...prev, r]);
  };

  const removeRoom = (id: number) => {
    setRooms((prev) => prev.filter((r) => r.id !== id));
  };

  const sheetSqFt = sheetSize === "4x8" ? 32 : sheetSize === "4x10" ? 40 : 48;

  const results = useMemo(() => {
    const roomResults = rooms.map((room) => {
      const doorArea = room.doors * 21; // ~3x7 ft
      const windowArea = room.windows * 15; // ~3x5 ft
      const wallArea =
        2 * (room.length + room.width) * room.ceilingHeight -
        doorArea -
        windowArea;
      const ceilingArea = room.doCeiling ? room.length * room.width : 0;
      const totalSqFt = Math.max(wallArea + ceilingArea, 0);

      // Inside corners: rectangular room = 4 vertical inside corners
      const insideCornerLinearFt = 4 * room.ceilingHeight;
      // Outside corners from user input
      const outsideCornerLinearFt = room.outsideCorners * room.ceilingHeight;

      return {
        id: room.id,
        label: room.label,
        wallArea: Math.max(wallArea, 0),
        ceilingArea,
        totalSqFt,
        insideCornerLinearFt,
        outsideCornerLinearFt,
      };
    });

    const totalSqFt = roomResults.reduce((sum, r) => sum + r.totalSqFt, 0);
    const totalSqFtWithWaste = totalSqFt * (1 + wasteFactor / 100);
    const sheetsNeeded = Math.ceil(totalSqFtWithWaste / sheetSqFt);

    // Joint tape: ~1 linear ft of tape per 1 sq ft of drywall
    // (accounts for all seams, butt joints, and inside corners)
    // 500 ft paper roll
    const totalLinearFtTape = totalSqFt;
    const paperTapeRolls = Math.ceil(totalLinearFtTape / 500);
    const meshTapeRolls = Math.ceil(totalLinearFtTape / 300);

    // Joint compound: 4.5 gal bucket (~58 lbs) covers ~460 sq ft for 3 coats
    const compoundBuckets = Math.ceil(totalSqFt / 460);
    // Setting-type compound for first coat: ~1 bag per 1000 sq ft
    const settingCompoundBags = Math.ceil(totalSqFt / 1000);

    // Screws: ~1 screw per 3 sq ft for field + edge combined = ~0.32 per sq ft
    // Using the area with waste factor for cutting waste on edges
    const totalScrews = Math.ceil(totalSqFt * 0.32);
    // 1 lb box = ~200 screws (1-5/8" coarse thread)
    const screwBoxes = Math.ceil(totalScrews / 200);

    // Corner bead
    const totalInsideCornerFt = roomResults.reduce(
      (sum, r) => sum + r.insideCornerLinearFt,
      0
    );
    const totalOutsideCornerFt = roomResults.reduce(
      (sum, r) => sum + r.outsideCornerLinearFt,
      0
    );
    const insideCornerBeadPcs = Math.ceil(
      totalInsideCornerFt / cornerBeadLength
    );
    const outsideCornerBeadPcs = Math.ceil(
      totalOutsideCornerFt / cornerBeadLength
    );

    // Cost estimates
    const [priceLow, priceHigh] = drywallPriceRange[drywallType];
    const sheetCostLow = sheetsNeeded * priceLow;
    const sheetCostHigh = sheetsNeeded * priceHigh;
    // Compound: ~$18 per 4.5 gal bucket
    const compoundCost = compoundBuckets * 18;
    // Setting compound: ~$12 per bag
    const settingCompoundCost = settingCompoundBags * 12;
    // Paper tape: ~$5 per roll
    const tapeCost = paperTapeRolls * 5;
    // Screws: ~$8 per 1 lb box
    const screwCost = screwBoxes * 8;
    // Corner bead: ~$4 per piece
    const cornerBeadCost =
      (insideCornerBeadPcs + outsideCornerBeadPcs) * 4;

    const totalCostLow =
      sheetCostLow +
      compoundCost +
      settingCompoundCost +
      tapeCost +
      screwCost +
      cornerBeadCost;
    const totalCostHigh =
      sheetCostHigh +
      compoundCost +
      settingCompoundCost +
      tapeCost +
      screwCost +
      cornerBeadCost;

    return {
      roomResults,
      totalSqFt,
      sheetsNeeded,
      paperTapeRolls,
      meshTapeRolls,
      compoundBuckets,
      settingCompoundBags,
      totalScrews,
      screwBoxes,
      totalInsideCornerFt,
      totalOutsideCornerFt,
      insideCornerBeadPcs,
      outsideCornerBeadPcs,
      totalCostLow,
      totalCostHigh,
    };
  }, [rooms, wasteFactor, sheetSqFt, drywallType, cornerBeadLength]);

  return (
    <CalculatorLayout
      title="Drywall Calculator"
      description="Calculate drywall sheets, joint compound (in buckets), tape, screws, and corner bead for single or multi-room projects. Includes material cost estimates and practical purchasing units."
      trade="General Contracting"
      howToUse="Enter dimensions for each room including ceiling height, doors, and windows. Add multiple rooms for whole-house estimates. Choose your drywall type and sheet size. The calculator provides a complete material list in the units you actually buy at the supply house — buckets, boxes, and rolls."
      formula="Wall Area = 2 x (Length + Width) x Ceiling Height - Door Openings - Window Openings. Sheets = Total Sq Ft x (1 + Waste%) / Sheet Sq Ft. Compound = Total Sq Ft / 460 sq ft per 4.5-gal bucket (3 coats). Screws = Total Sq Ft x 0.32, sold in 1-lb boxes (~200 screws)."
    >
      {/* Global Settings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div>
          <label htmlFor="drywallType" className={labelClass}>
            Drywall Type
          </label>
          <select
            id="drywallType"
            value={drywallType}
            onChange={(e) => setDrywallType(e.target.value as DrywallType)}
            className={inputClass}
          >
            {(Object.keys(drywallTypeLabels) as DrywallType[]).map((key) => (
              <option key={key} value={key}>
                {drywallTypeLabels[key]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sheetSize" className={labelClass}>
            Sheet Size
          </label>
          <select
            id="sheetSize"
            value={sheetSize}
            onChange={(e) => setSheetSize(e.target.value)}
            className={inputClass}
          >
            <option value="4x8">4&apos; x 8&apos; (32 sq ft)</option>
            <option value="4x10">4&apos; x 10&apos; (40 sq ft)</option>
            <option value="4x12">4&apos; x 12&apos; (48 sq ft)</option>
          </select>
        </div>
        <div>
          <label htmlFor="waste" className={labelClass}>
            Waste Factor (%)
          </label>
          <input
            id="waste"
            type="number"
            min={5}
            max={25}
            value={wasteFactor}
            onChange={(e) => setWasteFactor(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cornerBeadLen" className={labelClass}>
            Corner Bead Length (ft)
          </label>
          <select
            id="cornerBeadLen"
            value={cornerBeadLength}
            onChange={(e) => setCornerBeadLength(Number(e.target.value))}
            className={inputClass}
          >
            <option value={8}>8 ft</option>
            <option value={10}>10 ft</option>
          </select>
        </div>
      </div>

      {/* Room Sections */}
      {rooms.map((room) => (
        <div
          key={room.id}
          className="mb-6 border border-gray-200 rounded-xl p-5 bg-gray-50"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex-1">
              <label htmlFor={`label-${room.id}`} className={labelClass}>
                Room Name
              </label>
              <input
                id={`label-${room.id}`}
                type="text"
                value={room.label}
                onChange={(e) =>
                  updateRoom(room.id, { label: e.target.value })
                }
                className={inputClass}
                placeholder="e.g. Kitchen, Bedroom 1"
              />
            </div>
            {rooms.length > 1 && (
              <button
                type="button"
                onClick={() => removeRoom(room.id)}
                className="self-start sm:self-end text-sm text-red-600 hover:text-red-800 font-medium mt-1"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor={`length-${room.id}`} className={labelClass}>
                Room Length (feet)
              </label>
              <input
                id={`length-${room.id}`}
                type="number"
                min={1}
                step={0.5}
                value={room.length}
                onChange={(e) =>
                  updateRoom(room.id, { length: Number(e.target.value) })
                }
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`width-${room.id}`} className={labelClass}>
                Room Width (feet)
              </label>
              <input
                id={`width-${room.id}`}
                type="number"
                min={1}
                step={0.5}
                value={room.width}
                onChange={(e) =>
                  updateRoom(room.id, { width: Number(e.target.value) })
                }
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor={`ceilingHeight-${room.id}`}
                className={labelClass}
              >
                Ceiling Height (feet)
              </label>
              <input
                id={`ceilingHeight-${room.id}`}
                type="number"
                min={6}
                max={20}
                step={0.5}
                value={room.ceilingHeight}
                onChange={(e) =>
                  updateRoom(room.id, {
                    ceilingHeight: Number(e.target.value),
                  })
                }
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`doors-${room.id}`} className={labelClass}>
                Number of Doors
              </label>
              <input
                id={`doors-${room.id}`}
                type="number"
                min={0}
                max={20}
                value={room.doors}
                onChange={(e) =>
                  updateRoom(room.id, { doors: Number(e.target.value) })
                }
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`windows-${room.id}`} className={labelClass}>
                Number of Windows
              </label>
              <input
                id={`windows-${room.id}`}
                type="number"
                min={0}
                max={20}
                value={room.windows}
                onChange={(e) =>
                  updateRoom(room.id, { windows: Number(e.target.value) })
                }
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor={`outsideCorners-${room.id}`}
                className={labelClass}
              >
                Outside Corners
              </label>
              <input
                id={`outsideCorners-${room.id}`}
                type="number"
                min={0}
                max={20}
                value={room.outsideCorners}
                onChange={(e) =>
                  updateRoom(room.id, {
                    outsideCorners: Number(e.target.value),
                  })
                }
                className={inputClass}
              />
              <p className="text-xs text-gray-500 mt-1">
                Common in hallways, soffits, and additions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <input
              id={`doCeiling-${room.id}`}
              type="checkbox"
              checked={room.doCeiling}
              onChange={(e) =>
                updateRoom(room.id, { doCeiling: e.target.checked })
              }
              className="w-5 h-5 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
            />
            <label
              htmlFor={`doCeiling-${room.id}`}
              className="text-sm font-medium text-gray-700"
            >
              Include Ceiling
            </label>
          </div>

          {/* Per-room subtotals */}
          {rooms.length > 1 && (
            <div className="mt-3 text-sm text-gray-600 flex gap-4 flex-wrap">
              <span>
                Walls:{" "}
                {results.roomResults
                  .find((r) => r.id === room.id)
                  ?.wallArea.toLocaleString() ?? 0}{" "}
                sq ft
              </span>
              <span>
                Ceiling:{" "}
                {results.roomResults
                  .find((r) => r.id === room.id)
                  ?.ceilingArea.toLocaleString() ?? 0}{" "}
                sq ft
              </span>
              <span>
                Total:{" "}
                {results.roomResults
                  .find((r) => r.id === room.id)
                  ?.totalSqFt.toLocaleString() ?? 0}{" "}
                sq ft
              </span>
            </div>
          )}
        </div>
      ))}

      {/* Add Room Button */}
      <div className="mb-8">
        <button
          type="button"
          onClick={addRoom}
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-dashed border-brand-orange text-brand-orange rounded-lg hover:bg-orange-50 font-medium transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Room
        </button>
      </div>

      {/* Results */}
      <div className="bg-brand-gray rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-brand-blue">
            Material List
            {rooms.length > 1 && (
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({rooms.length} rooms combined)
              </span>
            )}
          </h2>
          <button
            onClick={() => window.print()}
            className="print:hidden text-sm text-brand-orange hover:underline flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print Material List
          </button>
        </div>

        {/* Area & Sheets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Area</p>
            <p className="text-2xl font-bold text-brand-blue">
              {results.totalSqFt.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Drywall Sheets</p>
            <p className="text-2xl font-bold text-brand-orange">
              {results.sheetsNeeded}
            </p>
            <p className="text-sm text-gray-500">
              {sheetSize} {drywallTypeLabels[drywallType]}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sheets Include</p>
            <p className="text-2xl font-bold text-brand-blue">
              {wasteFactor}%
            </p>
            <p className="text-sm text-gray-500">waste factor</p>
          </div>
        </div>

        {/* Finishing Materials */}
        <h3 className="text-lg font-semibold text-brand-blue mt-6 mb-3">
          Finishing Materials
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">
              All-Purpose Joint Compound
            </p>
            <p className="text-2xl font-bold text-brand-blue">
              {results.compoundBuckets}
            </p>
            <p className="text-sm text-gray-500">
              bucket{results.compoundBuckets !== 1 ? "s" : ""} (4.5 gal / ~58
              lbs each)
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Covers taping, fill, and finish coats
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">
              Setting-Type Compound
            </p>
            <p className="text-2xl font-bold text-brand-blue">
              {results.settingCompoundBags}
            </p>
            <p className="text-sm text-gray-500">
              bag{results.settingCompoundBags !== 1 ? "s" : ""} (18 lb)
            </p>
            <p className="text-xs text-gray-400 mt-1">
              For first/embed coat &mdash; sets chemically, won&apos;t shrink
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Drywall Screws</p>
            <p className="text-2xl font-bold text-brand-blue">
              {results.screwBoxes}
            </p>
            <p className="text-sm text-gray-500">
              box{results.screwBoxes !== 1 ? "es" : ""} (1 lb / ~200 screws)
            </p>
            <p className="text-xs text-gray-400 mt-1">
              1-5/8&quot; coarse thread for{" "}
              {drywallType === "firerated" ? '5/8"' : '1/2"'} drywall
            </p>
          </div>
        </div>

        {/* Tape */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Paper Tape</p>
            <p className="text-2xl font-bold text-brand-blue">
              {results.paperTapeRolls}
            </p>
            <p className="text-sm text-gray-500">
              roll{results.paperTapeRolls !== 1 ? "s" : ""} (500 ft each)
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Standard &mdash; use with all-purpose compound
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">
              OR Fiberglass Mesh Tape
            </p>
            <p className="text-2xl font-bold text-brand-blue">
              {results.meshTapeRolls}
            </p>
            <p className="text-sm text-gray-500">
              roll{results.meshTapeRolls !== 1 ? "s" : ""} (300 ft each)
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Self-adhesive &mdash; must use with setting-type compound
            </p>
          </div>
        </div>

        {/* Corner Bead */}
        {(results.insideCornerBeadPcs > 0 ||
          results.outsideCornerBeadPcs > 0) && (
          <>
            <h3 className="text-lg font-semibold text-brand-blue mt-6 mb-3">
              Corner Bead
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {results.insideCornerBeadPcs > 0 && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">
                    Inside Corner Bead (Paper-Faced)
                  </p>
                  <p className="text-2xl font-bold text-brand-blue">
                    {results.insideCornerBeadPcs}
                  </p>
                  <p className="text-sm text-gray-500">
                    piece{results.insideCornerBeadPcs !== 1 ? "s" : ""} (
                    {cornerBeadLength} ft each)
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {Math.round(results.totalInsideCornerFt)} linear ft total
                  </p>
                </div>
              )}
              {results.outsideCornerBeadPcs > 0 && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">
                    Outside Corner Bead (Metal)
                  </p>
                  <p className="text-2xl font-bold text-brand-blue">
                    {results.outsideCornerBeadPcs}
                  </p>
                  <p className="text-sm text-gray-500">
                    piece{results.outsideCornerBeadPcs !== 1 ? "s" : ""} (
                    {cornerBeadLength} ft each)
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {Math.round(results.totalOutsideCornerFt)} linear ft total
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Cost Estimate */}
        <h3 className="text-lg font-semibold text-brand-blue mt-6 mb-3">
          Estimated Material Cost
        </h3>
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Materials</p>
              <p className="text-3xl font-bold text-brand-orange">
                ${results.totalCostLow.toLocaleString()} &ndash; $
                {results.totalCostHigh.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Based on typical supply house pricing for{" "}
                {drywallTypeLabels[drywallType]}
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-600">
            <div>
              <span className="font-medium">Sheets:</span> $
              {(results.sheetsNeeded * drywallPriceRange[drywallType][0]).toLocaleString()}
              &ndash;$
              {(results.sheetsNeeded * drywallPriceRange[drywallType][1]).toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Compound:</span> ~$
              {(results.compoundBuckets * 18 + results.settingCompoundBags * 12).toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Tape:</span> ~$
              {(results.paperTapeRolls * 5).toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Screws:</span> ~$
              {(results.screwBoxes * 8).toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Corner Bead:</span> ~$
              {((results.insideCornerBeadPcs + results.outsideCornerBeadPcs) * 4).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Per-Room Breakdown */}
        {rooms.length > 1 && (
          <>
            <h3 className="text-lg font-semibold text-brand-blue mt-6 mb-3">
              Per-Room Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium text-gray-700">
                      Room
                    </th>
                    <th className="text-right px-4 py-2 font-medium text-gray-700">
                      Walls
                    </th>
                    <th className="text-right px-4 py-2 font-medium text-gray-700">
                      Ceiling
                    </th>
                    <th className="text-right px-4 py-2 font-medium text-gray-700">
                      Total
                    </th>
                    <th className="text-right px-4 py-2 font-medium text-gray-700">
                      Sheets
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.roomResults.map((r) => {
                    const roomSheets = Math.ceil(
                      r.totalSqFt * (1 + wasteFactor / 100) / sheetSqFt
                    );
                    return (
                      <tr key={r.id} className="border-t border-gray-200">
                        <td className="px-4 py-2 font-medium">{r.label}</td>
                        <td className="px-4 py-2 text-right">
                          {r.wallArea.toLocaleString()} sq ft
                        </td>
                        <td className="px-4 py-2 text-right">
                          {r.ceilingArea.toLocaleString()} sq ft
                        </td>
                        <td className="px-4 py-2 text-right">
                          {r.totalSqFt.toLocaleString()} sq ft
                        </td>
                        <td className="px-4 py-2 text-right font-medium text-brand-orange">
                          {roomSheets}
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="border-t-2 border-gray-300 font-bold">
                    <td className="px-4 py-2">Total</td>
                    <td className="px-4 py-2 text-right">
                      {results.roomResults
                        .reduce((s, r) => s + r.wallArea, 0)
                        .toLocaleString()}{" "}
                      sq ft
                    </td>
                    <td className="px-4 py-2 text-right">
                      {results.roomResults
                        .reduce((s, r) => s + r.ceilingArea, 0)
                        .toLocaleString()}{" "}
                      sq ft
                    </td>
                    <td className="px-4 py-2 text-right">
                      {results.totalSqFt.toLocaleString()} sq ft
                    </td>
                    <td className="px-4 py-2 text-right text-brand-orange">
                      {results.sheetsNeeded}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Print Results Button */}
        <div className="mt-6 text-center print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print Material List
          </button>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">
          Pro Tips from the Field
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5" aria-hidden="true">
                &#128736;
              </span>
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Hang Sheets Horizontally
                </p>
                <p className="text-sm text-gray-600">
                  Hang sheets horizontally on walls to reduce visible seams. The
                  tapered long edges create a shallow channel that&apos;s much
                  easier to finish flat than butt joints.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5" aria-hidden="true">
                &#128293;
              </span>
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Fire Code Requirements
                </p>
                <p className="text-sm text-gray-600">
                  Use 5/8&quot; Type X on garage walls and ceilings adjacent to
                  living spaces per fire code (IRC R302.6). Check local codes
                  for additional requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5" aria-hidden="true">
                &#128167;
              </span>
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Moisture-Resistant Board
                </p>
                <p className="text-sm text-gray-600">
                  Green board is required in bathrooms but NOT in shower
                  surrounds — use cement board or Kerdi membrane in wet areas.
                  Green board handles humidity, not direct water.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5" aria-hidden="true">
                &#128230;
              </span>
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Order Extra Material
                </p>
                <p className="text-sm text-gray-600">
                  Order 10-15% extra — cutting around outlets, fixtures, and odd
                  angles creates waste. Running short mid-job costs more in
                  downtime than a few extra sheets.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5" aria-hidden="true">
                &#9881;
              </span>
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Screw Spacing Matters
                </p>
                <p className="text-sm text-gray-600">
                  Field screws every 16&quot; on ceilings, 12&quot; on walls.
                  Edge screws every 8&quot; on ceilings, 12&quot; on walls. Keep
                  screws 3/8&quot; from edges to avoid crumbling.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5" aria-hidden="true">
                &#128218;
              </span>
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Setting Compound for First Coat
                </p>
                <p className="text-sm text-gray-600">
                  Use setting-type (hot mud) for embedding tape — it sets
                  chemically and won&apos;t shrink or bubble. Switch to
                  all-purpose for fill and finish coats for easier sanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

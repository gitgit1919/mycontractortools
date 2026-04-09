"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

interface Room {
  id: number;
  name: string;
  length: number;
  width: number;
}

let nextRoomId = 2;

export default function CarpetCalculator() {
  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, name: "Room 1", length: 12, width: 10 },
  ]);
  const [rollWidth, setRollWidth] = useState<12 | 15>(12);
  const [seamDirection, setSeamDirection] = useState<"length" | "width">("length");
  const [wasteFactor, setWasteFactor] = useState<number>(10);
  const [includePadding, setIncludePadding] = useState<boolean>(true);
  const [pricePerSqFt, setPricePerSqFt] = useState<string>("");

  function addRoom() {
    const num = rooms.length + 1;
    setRooms([...rooms, { id: nextRoomId++, name: `Room ${num}`, length: 12, width: 10 }]);
  }

  function removeRoom(id: number) {
    if (rooms.length <= 1) return;
    setRooms(rooms.filter((r) => r.id !== id));
  }

  function updateRoom(id: number, field: keyof Omit<Room, "id">, value: string | number) {
    setRooms(rooms.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  // --- Calculations per room ---
  const roomResults = rooms.map((room) => {
    const areaSqFt = room.length * room.width;

    // Determine carpet run direction: seam runs parallel to seamDirection
    // Roll covers rollWidth in the perpendicular direction
    const runLength = seamDirection === "length" ? room.length : room.width;
    const crossDimension = seamDirection === "length" ? room.width : room.length;

    // Number of strips needed to cover the cross-dimension
    const stripsNeeded = Math.ceil(crossDimension / rollWidth);

    // Linear feet from roll = strips * run length
    const linearFeetFromRoll = stripsNeeded * runLength;

    // Seam info: seams occur where strips meet
    const numberOfSeams = Math.max(0, stripsNeeded - 1);
    // Each seam runs along the run length
    const seamLengthFt = numberOfSeams * runLength;

    return {
      ...room,
      areaSqFt,
      stripsNeeded,
      linearFeetFromRoll,
      numberOfSeams,
      seamLengthFt,
    };
  });

  // --- Totals ---
  const totalAreaSqFt = roomResults.reduce((sum, r) => sum + r.areaSqFt, 0);
  const totalAreaWithWaste = totalAreaSqFt * (1 + wasteFactor / 100);
  const totalSqYards = totalAreaWithWaste / 9;
  const totalLinearFeet = roomResults.reduce((sum, r) => sum + r.linearFeetFromRoll, 0);
  const totalLinearFeetWithWaste = totalLinearFeet * (1 + wasteFactor / 100);
  const totalSeamLength = roomResults.reduce((sum, r) => sum + r.seamLengthFt, 0);
  const paddingSqFt = includePadding ? totalAreaWithWaste : 0;

  const price = parseFloat(pricePerSqFt);
  const hasCost = !isNaN(price) && price > 0;
  const carpetCost = hasCost ? totalAreaWithWaste * price : 0;
  const paddingCostEstimate = includePadding ? totalAreaWithWaste * 0.5 : 0; // ~$0.50/sqft typical padding
  const totalCost = carpetCost + (hasCost ? paddingCostEstimate : 0);

  return (
    <CalculatorLayout
      title="Carpet Calculator"
      description="Calculate the exact amount of carpet, padding, and linear footage you need from the roll. Supports multiple rooms, seam placement, and both 12-foot and 15-foot roll widths — so you order the right amount and minimize waste."
      trade="Flooring"
      howToUse="Add each room with its length and width in feet. Select your carpet roll width (12 ft is standard; 15 ft reduces seams in wider rooms). Choose the seam direction — running seams along the longer dimension usually looks best and reduces visibility. Adjust the waste factor for irregularly shaped rooms or pattern-match carpet. Toggle padding on or off. Optionally enter a price per square foot to get a cost estimate."
      formula="Total Area = Sum of (Length × Width) per room. Sq Yards = Total Area × (1 + Waste%) / 9. Linear Feet from Roll = Strips × Run Length per room, where Strips = ceil(Cross Dimension / Roll Width). Seam Length = (Strips − 1) × Run Length."
    >
      {/* --- Room Inputs --- */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-bold text-brand-blue">Room Dimensions</h2>
        {rooms.map((room, idx) => (
          <div key={room.id} className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto] gap-3 items-end bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Room Name</label>
              <input
                type="text"
                value={room.name}
                onChange={(e) => updateRoom(room.id, "name", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Length (ft)</label>
              <input
                type="number"
                min={1}
                step={0.5}
                value={room.length}
                onChange={(e) => updateRoom(room.id, "length", Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Width (ft)</label>
              <input
                type="number"
                min={1}
                step={0.5}
                value={room.width}
                onChange={(e) => updateRoom(room.id, "width", Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              {rooms.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRoom(room.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-2"
                  aria-label={`Remove ${room.name}`}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addRoom}
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-orange hover:text-orange-600 transition-colors"
        >
          <span className="text-lg leading-none">+</span> Add Room
        </button>
      </div>

      {/* --- Options --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="rollWidth" className="block text-sm font-medium text-gray-700 mb-1">Carpet Roll Width</label>
          <select
            id="rollWidth"
            value={rollWidth}
            onChange={(e) => setRollWidth(Number(e.target.value) as 12 | 15)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={12}>12 ft (Standard)</option>
            <option value={15}>15 ft</option>
          </select>
        </div>
        <div>
          <label htmlFor="seamDirection" className="block text-sm font-medium text-gray-700 mb-1">Seam Direction</label>
          <select
            id="seamDirection"
            value={seamDirection}
            onChange={(e) => setSeamDirection(e.target.value as "length" | "width")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="length">Along Room Length</option>
            <option value="width">Along Room Width</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">Seams run parallel to this direction. Roll covers {rollWidth} ft in the perpendicular direction.</p>
        </div>
        <div>
          <label htmlFor="wasteFactor" className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
          <input
            id="wasteFactor"
            type="number"
            min={0}
            max={30}
            value={wasteFactor}
            onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">10% is standard. Use 15% for patterned carpet or irregular rooms.</p>
        </div>
        <div>
          <label htmlFor="padding" className="block text-sm font-medium text-gray-700 mb-1">Include Padding</label>
          <select
            id="padding"
            value={includePadding ? "yes" : "no"}
            onChange={(e) => setIncludePadding(e.target.value === "yes")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="pricePerSqFt" className="block text-sm font-medium text-gray-700 mb-1">Price Per Sq Ft ($) <span className="text-gray-400 font-normal">— optional</span></label>
          <input
            id="pricePerSqFt"
            type="number"
            min={0}
            step={0.25}
            value={pricePerSqFt}
            onChange={(e) => setPricePerSqFt(e.target.value)}
            placeholder="e.g. 3.50"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
      </div>

      {/* --- Per-Room Breakdown --- */}
      {rooms.length > 1 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-brand-blue mb-3">Per-Room Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-3 py-2 text-gray-600 font-medium">Room</th>
                  <th className="text-right px-3 py-2 text-gray-600 font-medium">Sq Ft</th>
                  <th className="text-right px-3 py-2 text-gray-600 font-medium">Strips</th>
                  <th className="text-right px-3 py-2 text-gray-600 font-medium">Linear Ft</th>
                  <th className="text-right px-3 py-2 text-gray-600 font-medium">Seams</th>
                  <th className="text-right px-3 py-2 text-gray-600 font-medium">Seam Ft</th>
                </tr>
              </thead>
              <tbody>
                {roomResults.map((r) => (
                  <tr key={r.id} className="border-t border-gray-200">
                    <td className="px-3 py-2 text-gray-800">{r.name}</td>
                    <td className="px-3 py-2 text-right text-gray-800">{r.areaSqFt.toLocaleString()}</td>
                    <td className="px-3 py-2 text-right text-gray-800">{r.stripsNeeded}</td>
                    <td className="px-3 py-2 text-right text-gray-800">{r.linearFeetFromRoll.toLocaleString()}</td>
                    <td className="px-3 py-2 text-right text-gray-800">{r.numberOfSeams}</td>
                    <td className="px-3 py-2 text-right text-gray-800">{r.seamLengthFt.toLocaleString()} ft</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- Results --- */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Carpet Estimate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Area</p>
            <p className="text-2xl font-bold text-brand-blue">{Math.ceil(totalAreaWithWaste).toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft (incl. {wasteFactor}% waste)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Carpet to Order</p>
            <p className="text-2xl font-bold text-brand-orange">{totalSqYards.toFixed(1)}</p>
            <p className="text-sm text-gray-500">sq yards</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Linear Feet from Roll</p>
            <p className="text-2xl font-bold text-brand-blue">{Math.ceil(totalLinearFeetWithWaste).toLocaleString()}</p>
            <p className="text-sm text-gray-500">from {rollWidth} ft wide roll</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Seam Length</p>
            <p className="text-2xl font-bold text-brand-blue">{totalSeamLength.toLocaleString()}</p>
            <p className="text-sm text-gray-500">linear feet of seams</p>
          </div>
          {includePadding && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Padding Needed</p>
              <p className="text-2xl font-bold text-brand-blue">{Math.ceil(paddingSqFt).toLocaleString()}</p>
              <p className="text-sm text-gray-500">sq ft</p>
            </div>
          )}
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Seam Count</p>
            <p className="text-2xl font-bold text-brand-blue">{roomResults.reduce((sum, r) => sum + r.numberOfSeams, 0)}</p>
            <p className="text-sm text-gray-500">across all rooms</p>
          </div>
        </div>

        {hasCost && (
          <div className="mt-4 bg-white rounded-lg p-4 text-center border-2 border-brand-orange">
            <p className="text-sm text-gray-600">Estimated Total Cost</p>
            <p className="text-3xl font-bold text-brand-orange">
              ${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-gray-500">
              carpet ${carpetCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              {includePadding && ` + padding ~$${paddingCostEstimate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            </p>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

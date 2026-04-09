"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type Mode = "boardfoot" | "lumberlist";

interface LumberRow {
  id: number;
  quantity: number;
  nominalSize: string;
  length: number;
  pricePerLinFt: string;
}

const NOMINAL_SIZES: Record<string, { label: string; thickIn: number; widthIn: number; actualLabel: string }> = {
  "2x4":  { label: "2x4",  thickIn: 1.5,  widthIn: 3.5,   actualLabel: '1.5" x 3.5"' },
  "2x6":  { label: "2x6",  thickIn: 1.5,  widthIn: 5.5,   actualLabel: '1.5" x 5.5"' },
  "2x8":  { label: "2x8",  thickIn: 1.5,  widthIn: 7.25,  actualLabel: '1.5" x 7.25"' },
  "2x10": { label: "2x10", thickIn: 1.5,  widthIn: 9.25,  actualLabel: '1.5" x 9.25"' },
  "2x12": { label: "2x12", thickIn: 1.5,  widthIn: 11.25, actualLabel: '1.5" x 11.25"' },
  "4x4":  { label: "4x4",  thickIn: 3.5,  widthIn: 3.5,   actualLabel: '3.5" x 3.5"' },
  "6x6":  { label: "6x6",  thickIn: 5.5,  widthIn: 5.5,   actualLabel: '5.5" x 5.5"' },
};

const LENGTH_OPTIONS = [8, 10, 12, 14, 16, 20];

let nextRowId = 1;

function createRow(): LumberRow {
  return { id: nextRowId++, quantity: 1, nominalSize: "2x4", length: 8, pricePerLinFt: "" };
}

export default function BoardFootCalculator() {
  const [mode, setMode] = useState<Mode>("boardfoot");

  // Board Foot mode state
  const [thickness, setThickness] = useState<string>("2");
  const [width, setWidth] = useState<string>("6");
  const [length, setLength] = useState<string>("8");
  const [pieces, setPieces] = useState<string>("1");
  const [pricePerBf, setPricePerBf] = useState<string>("");

  // Lumber List mode state
  const [rows, setRows] = useState<LumberRow[]>([createRow()]);

  // --- Board Foot Mode calculations ---
  const thicknessNum = parseFloat(thickness) || 0;
  const widthNum = parseFloat(width) || 0;
  const lengthNum = parseFloat(length) || 0;
  const piecesNum = parseInt(pieces) || 0;
  const priceNum = parseFloat(pricePerBf) || 0;

  const bfPerPiece = (thicknessNum * widthNum * lengthNum) / 12;
  const totalBf = bfPerPiece * piecesNum;
  const totalCost = priceNum > 0 ? totalBf * priceNum : 0;

  // --- Lumber List Mode calculations ---
  const listResults = rows.map((row) => {
    const size = NOMINAL_SIZES[row.nominalSize];
    if (!size) return { boardFeet: 0, linearFeet: 0, cost: 0 };
    const bf = (size.thickIn * size.widthIn * row.length) / 12;
    const totalRowBf = bf * row.quantity;
    const totalRowLf = row.length * row.quantity;
    const price = parseFloat(row.pricePerLinFt) || 0;
    const totalRowCost = price > 0 ? totalRowLf * price : 0;
    return { boardFeet: totalRowBf, linearFeet: totalRowLf, cost: totalRowCost };
  });

  const listTotalBf = listResults.reduce((s, r) => s + r.boardFeet, 0);
  const listTotalLf = listResults.reduce((s, r) => s + r.linearFeet, 0);
  const listTotalPieces = rows.reduce((s, r) => s + r.quantity, 0);
  const listTotalCost = listResults.reduce((s, r) => s + r.cost, 0);

  function updateRow(id: number, field: keyof LumberRow, value: string | number) {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  }

  function addRow() {
    setRows((prev) => [...prev, createRow()]);
  }

  function removeRow(id: number) {
    setRows((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== id) : prev));
  }

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="Board Foot & Lumber Calculator"
      description="Calculate board feet for custom lumber dimensions or build a full lumber list with quantities, sizes, and costs. Essential for framing, decking, and woodworking projects."
      trade="General Contracting"
      howToUse="Choose Board Foot Calculator to find board feet for custom thickness, width, and length. Choose Lumber List Calculator to plan a full material list with standard nominal sizes, quantities, and optional pricing. Board feet are calculated using nominal dimensions: BF = (Thickness x Width x Length) / 12."
      formula="Board Feet (BF) = (Thickness in inches x Width in inches x Length in feet) / 12. For example, a 2x6x8 board = (2 x 6 x 8) / 12 = 8 board feet."
    >
      {/* Mode Toggle */}
      <div className="mb-6">
        <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
          <button
            type="button"
            onClick={() => setMode("boardfoot")}
            className={`px-5 py-2.5 text-sm font-medium transition-colors ${
              mode === "boardfoot"
                ? "bg-brand-blue text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Board Foot Calculator
          </button>
          <button
            type="button"
            onClick={() => setMode("lumberlist")}
            className={`px-5 py-2.5 text-sm font-medium transition-colors ${
              mode === "lumberlist"
                ? "bg-brand-blue text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Lumber List Calculator
          </button>
        </div>
      </div>

      {/* ===================== BOARD FOOT MODE ===================== */}
      {mode === "boardfoot" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="bf-thickness" className={labelClass}>
                Thickness (inches)
              </label>
              <input
                id="bf-thickness"
                type="number"
                min={0.25}
                step={0.25}
                value={thickness}
                onChange={(e) => setThickness(e.target.value)}
                className={inputClass}
                placeholder="e.g. 2"
              />
              <p className="text-xs text-gray-500 mt-1">Nominal or actual (e.g. 1, 1.5, 2)</p>
            </div>
            <div>
              <label htmlFor="bf-width" className={labelClass}>
                Width (inches)
              </label>
              <input
                id="bf-width"
                type="number"
                min={0.5}
                step={0.25}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className={inputClass}
                placeholder="e.g. 6"
              />
              <p className="text-xs text-gray-500 mt-1">Nominal or actual (e.g. 4, 5.5, 6)</p>
            </div>
            <div>
              <label htmlFor="bf-length" className={labelClass}>
                Length (feet)
              </label>
              <input
                id="bf-length"
                type="number"
                min={1}
                step={1}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className={inputClass}
                placeholder="e.g. 8"
              />
            </div>
            <div>
              <label htmlFor="bf-pieces" className={labelClass}>
                Number of Pieces
              </label>
              <input
                id="bf-pieces"
                type="number"
                min={1}
                step={1}
                value={pieces}
                onChange={(e) => setPieces(e.target.value)}
                className={inputClass}
                placeholder="1"
              />
            </div>
            <div>
              <label htmlFor="bf-price" className={labelClass}>
                Price per Board Foot ($) <span className="text-gray-400 font-normal">optional</span>
              </label>
              <input
                id="bf-price"
                type="number"
                min={0}
                step={0.01}
                value={pricePerBf}
                onChange={(e) => setPricePerBf(e.target.value)}
                className={inputClass}
                placeholder="e.g. 5.50"
              />
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 bg-brand-gray rounded-xl p-6">
            <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Per Piece</p>
                <p className="text-2xl font-bold text-brand-blue">{bfPerPiece.toFixed(2)}</p>
                <p className="text-sm text-gray-500">Board Feet</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Total ({piecesNum} piece{piecesNum !== 1 ? "s" : ""})</p>
                <p className="text-2xl font-bold text-brand-orange">{totalBf.toFixed(2)}</p>
                <p className="text-sm text-gray-500">Board Feet</p>
              </div>
              {priceNum > 0 && (
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-sm text-gray-600">Estimated Cost</p>
                  <p className="text-2xl font-bold text-green-700">
                    ${totalCost.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">at ${priceNum.toFixed(2)}/BF</p>
                </div>
              )}
            </div>
          </div>

          {/* Reference table */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Common Nominal vs Actual Sizes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-2">Nominal</th>
                    <th className="px-4 py-2">Actual</th>
                    <th className="px-4 py-2">BF per 8&apos; board</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(NOMINAL_SIZES).map((s) => {
                    const bf8 = (parseFloat(s.label.split("x")[0]) * parseFloat(s.label.split("x")[1]) * 8) / 12;
                    return (
                      <tr key={s.label} className="border-t border-gray-200">
                        <td className="px-4 py-2 font-medium">{s.label}</td>
                        <td className="px-4 py-2 text-gray-600">{s.actualLabel}</td>
                        <td className="px-4 py-2 text-gray-600">{bf8.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* ===================== LUMBER LIST MODE ===================== */}
      {mode === "lumberlist" && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-3 py-2">Qty</th>
                  <th className="px-3 py-2">Nominal Size</th>
                  <th className="px-3 py-2">Length (ft)</th>
                  <th className="px-3 py-2">$/Lin Ft <span className="font-normal text-gray-400">(opt)</span></th>
                  <th className="px-3 py-2 text-right">Board Feet</th>
                  <th className="px-3 py-2 text-right">Linear Feet</th>
                  <th className="px-3 py-2 text-right">Cost</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => {
                  const res = listResults[idx];
                  return (
                    <tr key={row.id} className="border-t border-gray-200 align-top">
                      <td className="px-3 py-2">
                        <input
                          type="number"
                          min={1}
                          value={row.quantity}
                          onChange={(e) => updateRow(row.id, "quantity", parseInt(e.target.value) || 1)}
                          className="w-16 border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <select
                          value={row.nominalSize}
                          onChange={(e) => updateRow(row.id, "nominalSize", e.target.value)}
                          className="w-24 border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        >
                          {Object.keys(NOMINAL_SIZES).map((k) => (
                            <option key={k} value={k}>{k}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-3 py-2">
                        <select
                          value={row.length}
                          onChange={(e) => updateRow(row.id, "length", parseInt(e.target.value))}
                          className="w-20 border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        >
                          {LENGTH_OPTIONS.map((l) => (
                            <option key={l} value={l}>{l}&apos;</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="number"
                          min={0}
                          step={0.01}
                          value={row.pricePerLinFt}
                          onChange={(e) => updateRow(row.id, "pricePerLinFt", e.target.value)}
                          placeholder="0.00"
                          className="w-20 border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                      </td>
                      <td className="px-3 py-2 text-right font-medium">{res.boardFeet.toFixed(2)}</td>
                      <td className="px-3 py-2 text-right">{res.linearFeet}</td>
                      <td className="px-3 py-2 text-right">
                        {res.cost > 0 ? `$${res.cost.toFixed(2)}` : "\u2014"}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <button
                          type="button"
                          onClick={() => removeRow(row.id)}
                          className="text-red-500 hover:text-red-700 text-lg leading-none font-bold"
                          title="Remove row"
                          aria-label="Remove row"
                        >
                          &times;
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            onClick={addRow}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-orange transition-colors"
          >
            <span className="text-lg leading-none">+</span> Add Row
          </button>

          {/* Totals */}
          <div className="mt-8 bg-brand-gray rounded-xl p-6">
            <h2 className="text-xl font-bold text-brand-blue mb-4">Lumber List Totals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Total Pieces</p>
                <p className="text-2xl font-bold text-brand-blue">{listTotalPieces}</p>
                <p className="text-sm text-gray-500">pieces</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Total Board Feet</p>
                <p className="text-2xl font-bold text-brand-orange">{listTotalBf.toFixed(2)}</p>
                <p className="text-sm text-gray-500">BF</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Total Linear Feet</p>
                <p className="text-2xl font-bold text-brand-blue">{listTotalLf}</p>
                <p className="text-sm text-gray-500">Lin Ft</p>
              </div>
              {listTotalCost > 0 && (
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-sm text-gray-600">Estimated Cost</p>
                  <p className="text-2xl font-bold text-green-700">${listTotalCost.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">total</p>
                </div>
              )}
            </div>
          </div>

          {/* Size reference */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Nominal vs Actual Size Reference</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-600">
              {Object.values(NOMINAL_SIZES).map((s) => (
                <div key={s.label} className="bg-gray-50 rounded px-3 py-1.5">
                  <span className="font-medium text-gray-800">{s.label}</span> = {s.actualLabel}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </CalculatorLayout>
  );
}

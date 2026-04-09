"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type ShapeType = "rectangle" | "triangle" | "circle" | "trapezoid" | "l-shaped";
type UnitType = "feet" | "inches" | "meters";

interface Section {
  id: number;
  shape: ShapeType;
  label: string;
  /* Rectangle */
  length: number;
  width: number;
  /* Triangle */
  base: number;
  triHeight: number;
  /* Circle */
  diameter: number;
  useRadius: boolean;
  radius: number;
  /* Trapezoid */
  side1: number;
  side2: number;
  trapHeight: number;
  /* L-shaped */
  mainLength: number;
  mainWidth: number;
  extLength: number;
  extWidth: number;
}

function defaultSection(id: number): Section {
  return {
    id,
    shape: "rectangle",
    label: `Area ${id}`,
    length: 10,
    width: 12,
    base: 10,
    triHeight: 8,
    diameter: 10,
    useRadius: false,
    radius: 5,
    side1: 10,
    side2: 14,
    trapHeight: 8,
    mainLength: 15,
    mainWidth: 10,
    extLength: 8,
    extWidth: 6,
  };
}

function toFeet(value: number, unit: UnitType): number {
  if (unit === "inches") return value / 12;
  if (unit === "meters") return value * 3.28084;
  return value;
}

function calcSectionSqFt(s: Section, unit: UnitType): number {
  switch (s.shape) {
    case "rectangle": {
      const l = toFeet(s.length, unit);
      const w = toFeet(s.width, unit);
      return l * w;
    }
    case "triangle": {
      const b = toFeet(s.base, unit);
      const h = toFeet(s.triHeight, unit);
      return 0.5 * b * h;
    }
    case "circle": {
      const r = s.useRadius
        ? toFeet(s.radius, unit)
        : toFeet(s.diameter, unit) / 2;
      return Math.PI * r * r;
    }
    case "trapezoid": {
      const a = toFeet(s.side1, unit);
      const b = toFeet(s.side2, unit);
      const h = toFeet(s.trapHeight, unit);
      return 0.5 * (a + b) * h;
    }
    case "l-shaped": {
      const ml = toFeet(s.mainLength, unit);
      const mw = toFeet(s.mainWidth, unit);
      const el = toFeet(s.extLength, unit);
      const ew = toFeet(s.extWidth, unit);
      return ml * mw + el * ew;
    }
    default:
      return 0;
  }
}

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";
const selectClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";

export default function SquareFootageCalculator() {
  const [sections, setSections] = useState<Section[]>([defaultSection(1)]);
  const [unit, setUnit] = useState<UnitType>("feet");
  const [costPerSqFt, setCostPerSqFt] = useState<number>(0);
  let nextId = sections.length > 0 ? Math.max(...sections.map((s) => s.id)) + 1 : 1;

  function updateSection(id: number, changes: Partial<Section>) {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...changes } : s))
    );
  }

  function addSection() {
    setSections((prev) => [...prev, defaultSection(nextId)]);
  }

  function removeSection(id: number) {
    setSections((prev) => prev.filter((s) => s.id !== id));
  }

  const sectionResults = sections.map((s) => ({
    id: s.id,
    label: s.label,
    sqFt: calcSectionSqFt(s, unit),
  }));

  const totalSqFt = sectionResults.reduce((sum, r) => sum + r.sqFt, 0);
  const totalSqYards = totalSqFt / 9;
  const totalSqMeters = totalSqFt * 0.092903;
  const totalAcres = totalSqFt / 43560;
  const totalCost = costPerSqFt > 0 ? totalSqFt * costPerSqFt : 0;

  const unitLabel = unit === "feet" ? "ft" : unit === "inches" ? "in" : "m";

  return (
    <CalculatorLayout
      title="Square Footage Calculator"
      description="Calculate the area of any space by combining rectangles, triangles, circles, trapezoids, and L-shaped rooms. Get instant conversions and cost estimates."
      trade="General Contracting"
      howToUse="Choose a shape for each area section and enter the dimensions. Use the unit toggle to switch between feet, inches, and meters. Add multiple sections to calculate the total area of complex spaces. Enter a price per square foot to estimate project costs for flooring, painting, or other materials."
      formula="Rectangle: L x W. Triangle: 0.5 x Base x Height. Circle: pi x r squared. Trapezoid: 0.5 x (Side1 + Side2) x Height. L-Shaped: (Main L x W) + (Extension L x W)."
    >
      {/* Unit Toggle */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className={labelClass}>Units:</span>
        {(["feet", "inches", "meters"] as UnitType[]).map((u) => (
          <button
            key={u}
            onClick={() => setUnit(u)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              unit === u
                ? "bg-brand-blue text-white border-brand-blue"
                : "bg-white text-gray-700 border-gray-300 hover:border-brand-orange"
            }`}
          >
            {u.charAt(0).toUpperCase() + u.slice(1)}
          </button>
        ))}
      </div>

      {/* Sections */}
      {sections.map((section, idx) => (
        <div
          key={section.id}
          className="mb-6 border border-gray-200 rounded-xl p-5 bg-gray-50"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <input
              type="text"
              value={section.label}
              onChange={(e) =>
                updateSection(section.id, { label: e.target.value })
              }
              className="text-lg font-semibold text-brand-blue bg-transparent border-b border-dashed border-gray-400 focus:border-brand-orange focus:outline-none px-1 py-0.5"
            />
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {calcSectionSqFt(section, unit).toFixed(2)} sq ft
              </span>
              {sections.length > 1 && (
                <button
                  onClick={() => removeSection(section.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className={labelClass}>Shape</label>
            <select
              value={section.shape}
              onChange={(e) =>
                updateSection(section.id, {
                  shape: e.target.value as ShapeType,
                })
              }
              className={`${selectClass} sm:w-64`}
            >
              <option value="rectangle">Rectangle / Square</option>
              <option value="triangle">Triangle</option>
              <option value="circle">Circle</option>
              <option value="trapezoid">Trapezoid</option>
              <option value="l-shaped">L-Shaped Room</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.shape === "rectangle" && (
              <>
                <div>
                  <label className={labelClass}>Length ({unitLabel})</label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.length}
                    onChange={(e) =>
                      updateSection(section.id, {
                        length: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Width ({unitLabel})</label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.width}
                    onChange={(e) =>
                      updateSection(section.id, {
                        width: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </>
            )}

            {section.shape === "triangle" && (
              <>
                <div>
                  <label className={labelClass}>Base ({unitLabel})</label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.base}
                    onChange={(e) =>
                      updateSection(section.id, {
                        base: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Height ({unitLabel})</label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.triHeight}
                    onChange={(e) =>
                      updateSection(section.id, {
                        triHeight: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </>
            )}

            {section.shape === "circle" && (
              <>
                <div className="sm:col-span-2 flex items-center gap-3 mb-1">
                  <label className="text-sm font-medium text-gray-700">
                    Measure by:
                  </label>
                  <button
                    onClick={() =>
                      updateSection(section.id, { useRadius: false })
                    }
                    className={`px-3 py-1 rounded text-sm border transition-colors ${
                      !section.useRadius
                        ? "bg-brand-blue text-white border-brand-blue"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    Diameter
                  </button>
                  <button
                    onClick={() =>
                      updateSection(section.id, { useRadius: true })
                    }
                    className={`px-3 py-1 rounded text-sm border transition-colors ${
                      section.useRadius
                        ? "bg-brand-blue text-white border-brand-blue"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    Radius
                  </button>
                </div>
                {section.useRadius ? (
                  <div>
                    <label className={labelClass}>Radius ({unitLabel})</label>
                    <input
                      type="number"
                      min={0}
                      step={0.1}
                      value={section.radius}
                      onChange={(e) =>
                        updateSection(section.id, {
                          radius: Number(e.target.value),
                        })
                      }
                      className={inputClass}
                    />
                  </div>
                ) : (
                  <div>
                    <label className={labelClass}>
                      Diameter ({unitLabel})
                    </label>
                    <input
                      type="number"
                      min={0}
                      step={0.1}
                      value={section.diameter}
                      onChange={(e) =>
                        updateSection(section.id, {
                          diameter: Number(e.target.value),
                        })
                      }
                      className={inputClass}
                    />
                  </div>
                )}
              </>
            )}

            {section.shape === "trapezoid" && (
              <>
                <div>
                  <label className={labelClass}>
                    Parallel Side 1 ({unitLabel})
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.side1}
                    onChange={(e) =>
                      updateSection(section.id, {
                        side1: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Parallel Side 2 ({unitLabel})
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.side2}
                    onChange={(e) =>
                      updateSection(section.id, {
                        side2: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Height ({unitLabel})</label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.trapHeight}
                    onChange={(e) =>
                      updateSection(section.id, {
                        trapHeight: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </>
            )}

            {section.shape === "l-shaped" && (
              <>
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-gray-500 mb-2">
                    Main Rectangle
                  </p>
                </div>
                <div>
                  <label className={labelClass}>
                    Main Length ({unitLabel})
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.mainLength}
                    onChange={(e) =>
                      updateSection(section.id, {
                        mainLength: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Main Width ({unitLabel})</label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.mainWidth}
                    onChange={(e) =>
                      updateSection(section.id, {
                        mainWidth: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2 mt-2">
                  <p className="text-sm font-medium text-gray-500 mb-2">
                    Extension Rectangle
                  </p>
                </div>
                <div>
                  <label className={labelClass}>
                    Extension Length ({unitLabel})
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.extLength}
                    onChange={(e) =>
                      updateSection(section.id, {
                        extLength: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Extension Width ({unitLabel})
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={section.extWidth}
                    onChange={(e) =>
                      updateSection(section.id, {
                        extWidth: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      {/* Add Section Button */}
      <button
        onClick={addSection}
        className="mb-6 w-full sm:w-auto px-6 py-2.5 rounded-lg border-2 border-dashed border-gray-300 text-gray-600 hover:border-brand-orange hover:text-brand-orange transition-colors font-medium text-sm"
      >
        + Add Another Area
      </button>

      {/* Cost Estimator */}
      <div className="mb-6">
        <label className={labelClass}>Price per Sq Ft ($) — optional</label>
        <input
          type="number"
          min={0}
          step={0.01}
          value={costPerSqFt || ""}
          onChange={(e) => setCostPerSqFt(Number(e.target.value))}
          placeholder="e.g. 3.50"
          className={`${inputClass} sm:w-64`}
        />
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>

        {/* Per-section breakdown when multiple sections */}
        {sections.length > 1 && (
          <div className="mb-4 space-y-1">
            {sectionResults.map((r) => (
              <div
                key={r.id}
                className="flex justify-between text-sm text-gray-700 bg-white rounded px-3 py-1.5 border border-gray-100"
              >
                <span>{r.label}</span>
                <span className="font-medium">{r.sqFt.toFixed(2)} sq ft</span>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Area</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totalSqFt.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Square Feet</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Area</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totalSqYards.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Square Yards</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Area</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totalSqMeters.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Square Meters</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Area</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totalAcres.toFixed(4)}
            </p>
            <p className="text-sm text-gray-500">Acres</p>
          </div>
        </div>

        {totalCost > 0 && (
          <div className="mt-4">
            <div className="bg-white rounded-lg p-4 text-center border-2 border-brand-orange">
              <p className="text-sm text-gray-600">Estimated Cost</p>
              <p className="text-2xl font-bold text-brand-orange">
                ${totalCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-gray-500">
                at ${costPerSqFt.toFixed(2)} / sq ft
              </p>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

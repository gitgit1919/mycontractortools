"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type ShapeType = "slab" | "footing" | "column" | "wall" | "stairs";

interface Section {
  id: number;
  label: string;
  shape: ShapeType;
  length: number;
  width: number;
  depth: number;
  diameter: number;
  height: number;
  quantity: number;
  numSteps: number;
  stepRise: number;
  stepRun: number;
  stairWidth: number;
}

function createSection(id: number): Section {
  return {
    id,
    label: `Section ${id}`,
    shape: "slab",
    length: 20,
    width: 20,
    depth: 4,
    diameter: 12,
    height: 36,
    quantity: 1,
    numSteps: 4,
    stepRise: 7,
    stepRun: 11,
    stairWidth: 36,
  };
}

function calcCubicFeet(s: Section): number {
  switch (s.shape) {
    case "slab":
      return s.length * s.width * (s.depth / 12) * s.quantity;
    case "footing":
      return s.length * s.width * (s.depth / 12) * s.quantity;
    case "column": {
      const radiusFt = s.diameter / 24;
      return Math.PI * radiusFt * radiusFt * (s.height / 12) * s.quantity;
    }
    case "wall":
      return s.length * s.height * (s.depth / 12) * s.quantity;
    case "stairs": {
      const riseInFt = s.stepRise / 12;
      const runInFt = s.stepRun / 12;
      const widthInFt = s.stairWidth / 12;
      let totalCf = 0;
      for (let i = 1; i <= s.numSteps; i++) {
        totalCf += widthInFt * runInFt * (riseInFt * i);
      }
      return totalCf * s.quantity;
    }
    default:
      return 0;
  }
}

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

const shapeLabels: Record<ShapeType, string> = {
  slab: "Slab / Patio / Floor",
  footing: "Footing (Rectangular)",
  column: "Column / Sonotube (Cylindrical)",
  wall: "Wall",
  stairs: "Stairs",
};

export default function ConcreteVolumeCalculator() {
  const [sections, setSections] = useState<Section[]>([createSection(1)]);
  const [wasteFactor, setWasteFactor] = useState<number>(10);
  const [pricePerYard, setPricePerYard] = useState<number>(165);
  const [showCost, setShowCost] = useState<boolean>(false);
  const [nextId, setNextId] = useState<number>(2);

  const updateSection = (id: number, updates: Partial<Section>) => {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
  };

  const addSection = () => {
    const s = createSection(nextId);
    setNextId((n) => n + 1);
    setSections((prev) => [...prev, s]);
  };

  const removeSection = (id: number) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
  };

  const totals = useMemo(() => {
    const sectionResults = sections.map((s) => {
      const cf = calcCubicFeet(s);
      return { id: s.id, label: s.label, cubicFeet: cf };
    });
    const totalCubicFeet = sectionResults.reduce(
      (sum, r) => sum + r.cubicFeet,
      0
    );
    const cubicYards = totalCubicFeet / 27;
    const withWaste = cubicYards * (1 + wasteFactor / 100);
    const totalCfWithWaste = totalCubicFeet * (1 + wasteFactor / 100);
    const bags80lb = Math.ceil(totalCfWithWaste / 0.6);
    const bags60lb = Math.ceil(totalCfWithWaste / 0.45);
    const cost = withWaste * pricePerYard;
    return {
      sectionResults,
      totalCubicFeet,
      cubicYards,
      withWaste,
      bags80lb,
      bags60lb,
      cost,
    };
  }, [sections, wasteFactor, pricePerYard]);

  return (
    <CalculatorLayout
      title="Concrete Volume Calculator"
      description="Calculate how much concrete you need for slabs, footings, columns, walls, and stairs. Supports multiple pour sections, bag counts, cost estimates, and adjustable waste factors."
      trade="General Contracting"
      howToUse="Select the shape of each pour section. For slabs and footings, enter length and width in feet and depth in inches. For columns/sonotubes, enter diameter and height in inches. For walls, enter length and height in feet and thickness in inches. For stairs, enter the number of steps, rise, run, and width. Add multiple sections for combined pours. Adjust the waste factor (10% is standard) and optionally enter a price per cubic yard for cost estimates."
      formula="Slab/Footing: Cu Ft = L x W x (Depth/12). Column: Cu Ft = pi x (D/24)^2 x (H/12). Wall: Cu Ft = L x H x (Thickness/12). Stairs: Sum of each step = Width x Run x (Rise x step#). Cubic Yards = Cu Ft / 27. 80lb bag = 0.6 cu ft, 60lb bag = 0.45 cu ft."
    >
      {/* Sections */}
      {sections.map((section, idx) => (
        <div
          key={section.id}
          className="mb-6 border border-gray-200 rounded-xl p-5 bg-gray-50"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex-1">
              <label
                htmlFor={`label-${section.id}`}
                className={labelClass}
              >
                Section Name
              </label>
              <input
                id={`label-${section.id}`}
                type="text"
                value={section.label}
                onChange={(e) =>
                  updateSection(section.id, { label: e.target.value })
                }
                className={inputClass}
                placeholder="e.g. Garage Slab"
              />
            </div>
            {sections.length > 1 && (
              <button
                type="button"
                onClick={() => removeSection(section.id)}
                className="self-start sm:self-end text-sm text-red-600 hover:text-red-800 font-medium mt-1"
              >
                Remove
              </button>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor={`shape-${section.id}`} className={labelClass}>
              Shape
            </label>
            <select
              id={`shape-${section.id}`}
              value={section.shape}
              onChange={(e) =>
                updateSection(section.id, {
                  shape: e.target.value as ShapeType,
                })
              }
              className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            >
              {(Object.keys(shapeLabels) as ShapeType[]).map((key) => (
                <option key={key} value={key}>
                  {shapeLabels[key]}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Slab fields */}
            {section.shape === "slab" && (
              <>
                <div>
                  <label htmlFor={`length-${section.id}`} className={labelClass}>
                    Length (feet)
                  </label>
                  <input
                    id={`length-${section.id}`}
                    type="number"
                    min={0.1}
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
                  <label htmlFor={`width-${section.id}`} className={labelClass}>
                    Width (feet)
                  </label>
                  <input
                    id={`width-${section.id}`}
                    type="number"
                    min={0.1}
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
                <div>
                  <label htmlFor={`depth-${section.id}`} className={labelClass}>
                    Thickness (inches)
                  </label>
                  <input
                    id={`depth-${section.id}`}
                    type="number"
                    min={1}
                    max={120}
                    value={section.depth}
                    onChange={(e) =>
                      updateSection(section.id, {
                        depth: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </>
            )}

            {/* Footing fields */}
            {section.shape === "footing" && (
              <>
                <div>
                  <label htmlFor={`length-${section.id}`} className={labelClass}>
                    Length (feet)
                  </label>
                  <input
                    id={`length-${section.id}`}
                    type="number"
                    min={0.1}
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
                  <label htmlFor={`width-${section.id}`} className={labelClass}>
                    Width (feet)
                  </label>
                  <input
                    id={`width-${section.id}`}
                    type="number"
                    min={0.1}
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
                <div>
                  <label htmlFor={`depth-${section.id}`} className={labelClass}>
                    Depth (inches)
                  </label>
                  <input
                    id={`depth-${section.id}`}
                    type="number"
                    min={1}
                    max={120}
                    value={section.depth}
                    onChange={(e) =>
                      updateSection(section.id, {
                        depth: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </>
            )}

            {/* Column fields */}
            {section.shape === "column" && (
              <>
                <div>
                  <label
                    htmlFor={`diameter-${section.id}`}
                    className={labelClass}
                  >
                    Diameter (inches)
                  </label>
                  <input
                    id={`diameter-${section.id}`}
                    type="number"
                    min={4}
                    max={120}
                    value={section.diameter}
                    onChange={(e) =>
                      updateSection(section.id, {
                        diameter: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`height-${section.id}`}
                    className={labelClass}
                  >
                    Height (inches)
                  </label>
                  <input
                    id={`height-${section.id}`}
                    type="number"
                    min={1}
                    max={600}
                    value={section.height}
                    onChange={(e) =>
                      updateSection(section.id, {
                        height: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`qty-${section.id}`}
                    className={labelClass}
                  >
                    Number of Columns
                  </label>
                  <input
                    id={`qty-${section.id}`}
                    type="number"
                    min={1}
                    max={500}
                    value={section.quantity}
                    onChange={(e) =>
                      updateSection(section.id, {
                        quantity: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </>
            )}

            {/* Wall fields */}
            {section.shape === "wall" && (
              <>
                <div>
                  <label htmlFor={`length-${section.id}`} className={labelClass}>
                    Length (feet)
                  </label>
                  <input
                    id={`length-${section.id}`}
                    type="number"
                    min={0.1}
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
                  <label htmlFor={`height-${section.id}`} className={labelClass}>
                    Height (feet)
                  </label>
                  <input
                    id={`height-${section.id}`}
                    type="number"
                    min={0.1}
                    step={0.1}
                    value={section.height}
                    onChange={(e) =>
                      updateSection(section.id, {
                        height: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor={`depth-${section.id}`} className={labelClass}>
                    Thickness (inches)
                  </label>
                  <input
                    id={`depth-${section.id}`}
                    type="number"
                    min={1}
                    max={120}
                    value={section.depth}
                    onChange={(e) =>
                      updateSection(section.id, {
                        depth: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </>
            )}

            {/* Stairs fields */}
            {section.shape === "stairs" && (
              <>
                <div>
                  <label
                    htmlFor={`numSteps-${section.id}`}
                    className={labelClass}
                  >
                    Number of Steps
                  </label>
                  <input
                    id={`numSteps-${section.id}`}
                    type="number"
                    min={1}
                    max={50}
                    value={section.numSteps}
                    onChange={(e) =>
                      updateSection(section.id, {
                        numSteps: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`stepRise-${section.id}`}
                    className={labelClass}
                  >
                    Riser Height (inches)
                  </label>
                  <input
                    id={`stepRise-${section.id}`}
                    type="number"
                    min={4}
                    max={12}
                    step={0.25}
                    value={section.stepRise}
                    onChange={(e) =>
                      updateSection(section.id, {
                        stepRise: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`stepRun-${section.id}`}
                    className={labelClass}
                  >
                    Tread Depth (inches)
                  </label>
                  <input
                    id={`stepRun-${section.id}`}
                    type="number"
                    min={8}
                    max={24}
                    step={0.25}
                    value={section.stepRun}
                    onChange={(e) =>
                      updateSection(section.id, {
                        stepRun: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`stairWidth-${section.id}`}
                    className={labelClass}
                  >
                    Stair Width (inches)
                  </label>
                  <input
                    id={`stairWidth-${section.id}`}
                    type="number"
                    min={12}
                    max={120}
                    value={section.stairWidth}
                    onChange={(e) =>
                      updateSection(section.id, {
                        stairWidth: Number(e.target.value),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </>
            )}
          </div>

          {/* Per-section subtotal */}
          {sections.length > 1 && (
            <div className="mt-3 text-sm text-gray-500">
              Section volume:{" "}
              {(
                calcCubicFeet(section) / 27
              ).toFixed(2)}{" "}
              cu yd (
              {calcCubicFeet(section).toFixed(1)} cu ft)
            </div>
          )}
        </div>
      ))}

      {/* Add section button */}
      <div className="mb-6">
        <button
          type="button"
          onClick={addSection}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-dashed border-gray-300 text-gray-600 hover:border-brand-orange hover:text-brand-orange transition-colors text-sm font-medium"
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Another Section
        </button>
      </div>

      {/* Global settings */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 border border-gray-200 rounded-xl p-5 bg-gray-50">
        <div>
          <label htmlFor="waste" className={labelClass}>
            Waste Factor (%)
          </label>
          <input
            id="waste"
            type="number"
            min={0}
            max={30}
            value={wasteFactor}
            onChange={(e) => setWasteFactor(Number(e.target.value))}
            className={inputClass}
          />
          <p className="text-xs text-gray-400 mt-1">
            10% is standard for most pours
          </p>
        </div>
        <div>
          <label htmlFor="showCost" className={labelClass}>
            Cost Estimate
          </label>
          <div className="flex items-center gap-3 mt-1">
            <button
              type="button"
              role="switch"
              aria-checked={showCost}
              onClick={() => setShowCost(!showCost)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showCost ? "bg-brand-orange" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showCost ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm text-gray-600">
              {showCost ? "On" : "Off"}
            </span>
          </div>
        </div>
        {showCost && (
          <div>
            <label htmlFor="price" className={labelClass}>
              Price per Cubic Yard ($)
            </label>
            <input
              id="price"
              type="number"
              min={0}
              step={5}
              value={pricePerYard}
              onChange={(e) => setPricePerYard(Number(e.target.value))}
              className={inputClass}
            />
            <p className="text-xs text-gray-400 mt-1">
              Ready-mix avg ~$165/yd in 2026
            </p>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>

        {/* Per-section breakdown when multiple sections */}
        {sections.length > 1 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Section Breakdown
            </h3>
            <div className="space-y-1">
              {totals.sectionResults.map((r) => (
                <div
                  key={r.id}
                  className="flex justify-between text-sm text-gray-600 bg-white rounded px-3 py-1.5 border border-gray-100"
                >
                  <span>{r.label}</span>
                  <span className="font-medium">
                    {(r.cubicFeet / 27).toFixed(2)} cu yd
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Volume</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totals.cubicYards.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Cubic Yards</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">
              With {wasteFactor}% Waste
            </p>
            <p className="text-2xl font-bold text-brand-orange">
              {totals.withWaste.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Cubic Yards to Order</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">60 lb Bags</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totals.bags60lb}
            </p>
            <p className="text-sm text-gray-500">bags needed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">80 lb Bags</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totals.bags80lb}
            </p>
            <p className="text-sm text-gray-500">bags needed</p>
          </div>
        </div>

        {/* Cost estimate row */}
        {showCost && (
          <div className="mt-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">
                Estimated Ready-Mix Cost
              </p>
              <p className="text-2xl font-bold text-green-700">
                ${totals.cost.toFixed(0)}
              </p>
              <p className="text-sm text-gray-500">
                at ${pricePerYard}/yd &mdash; {totals.withWaste.toFixed(2)} yards
              </p>
            </div>
          </div>
        )}

        {/* Delivery note */}
        {totals.withWaste < 1 && totals.withWaste > 0 && (
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
            <strong>Small pour tip:</strong> Most ready-mix companies have a
            minimum delivery of 1 cubic yard, and short-load fees can be $50
            &ndash; $100+. For pours under 1 yard, mixing your own bags is
            usually more economical. You would need approximately{" "}
            <strong>{totals.bags80lb} (80 lb)</strong> or{" "}
            <strong>{totals.bags60lb} (60 lb)</strong> bags.
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

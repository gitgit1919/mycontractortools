"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const WIRE_SIZES = [
  "14", "12", "10", "8", "6", "4", "3", "2", "1",
  "1/0", "2/0", "3/0", "4/0",
] as const;

type WireSize = (typeof WIRE_SIZES)[number];

/** Copper resistance in ohms per 1000 ft at 75 deg C */
const COPPER_RESISTANCE: Record<WireSize, number> = {
  "14": 3.14,
  "12": 1.98,
  "10": 1.24,
  "8": 0.778,
  "6": 0.491,
  "4": 0.308,
  "3": 0.245,
  "2": 0.194,
  "1": 0.154,
  "1/0": 0.122,
  "2/0": 0.0967,
  "3/0": 0.0766,
  "4/0": 0.0608,
};

const ALUMINUM_FACTOR = 1.61;

function getResistance(size: WireSize, material: "copper" | "aluminum"): number {
  const base = COPPER_RESISTANCE[size];
  return material === "aluminum" ? base * ALUMINUM_FACTOR : base;
}

function calcVoltageDrop(
  amps: number,
  resistance: number,
  distance: number,
  phase: "single" | "three"
): number {
  const multiplier = phase === "three" ? Math.sqrt(3) : 2;
  return multiplier * amps * resistance * distance / 1000;
}

export default function VoltageDropCalculator() {
  const [voltage, setVoltage] = useState<number>(240);
  const [phase, setPhase] = useState<"single" | "three">("single");
  const [material, setMaterial] = useState<"copper" | "aluminum">("copper");
  const [wireSize, setWireSize] = useState<WireSize>("12");
  const [distance, setDistance] = useState<number>(100);
  const [amps, setAmps] = useState<number>(20);
  const [powerFactor, setPowerFactor] = useState<number>(1.0);

  // Calculate voltage drop
  const resistance = getResistance(wireSize, material);
  const effectiveAmps = amps * powerFactor;
  const vd = calcVoltageDrop(effectiveAmps, resistance, distance, phase);
  const vdPercent = (vd / voltage) * 100;
  const voltageAtLoad = voltage - vd;
  const powerLoss = phase === "three"
    ? Math.sqrt(3) * vd * amps
    : 2 * (effectiveAmps * effectiveAmps * resistance * distance / 1000);

  // Pass / Fail
  const passBranch = vdPercent <= 3;
  const passTotal = vdPercent <= 5;

  // Recommend minimum wire size for under 3%
  const maxAllowedDrop = voltage * 0.03;
  const recommendedSize: WireSize | "Larger than 4/0 needed" = (() => {
    for (const size of WIRE_SIZES) {
      const r = getResistance(size, material);
      const drop = calcVoltageDrop(effectiveAmps, r, distance, phase);
      if (drop <= maxAllowedDrop) return size;
    }
    return "Larger than 4/0 needed";
  })();

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="Voltage Drop Calculator"
      description="Calculate voltage drop for electrical circuits per NEC recommendations. Determine if your wire size is adequate for the run distance and load, and find the minimum wire size to stay within code limits."
      trade="Electrical"
      howToUse="Select the system voltage, phase, wire material, and wire gauge. Enter the one-way wire distance in feet and the load current in amps. Adjust the power factor if you are feeding motor loads (typically 0.85). The calculator shows the voltage drop, percentage, whether it passes NEC guidelines, and recommends the minimum wire size needed to keep voltage drop under 3%."
      formula="Single-phase: VD = 2 x I x R x L / 1000. Three-phase: VD = sqrt(3) x I x R x L / 1000. VD% = (VD / Source Voltage) x 100. NEC recommends max 3% for branch circuits, 5% total including feeder."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* System Voltage */}
        <div>
          <label htmlFor="voltage" className={labelClass}>
            System Voltage
          </label>
          <select
            id="voltage"
            value={voltage}
            onChange={(e) => setVoltage(Number(e.target.value))}
            className={inputClass}
          >
            <option value={120}>120V</option>
            <option value={208}>208V</option>
            <option value={240}>240V</option>
            <option value={277}>277V</option>
            <option value={480}>480V</option>
          </select>
        </div>

        {/* Phase */}
        <div>
          <label htmlFor="phase" className={labelClass}>
            Phase
          </label>
          <select
            id="phase"
            value={phase}
            onChange={(e) => setPhase(e.target.value as "single" | "three")}
            className={inputClass}
          >
            <option value="single">Single-phase</option>
            <option value="three">Three-phase</option>
          </select>
        </div>

        {/* Wire Material */}
        <div>
          <label htmlFor="material" className={labelClass}>
            Wire Material
          </label>
          <select
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value as "copper" | "aluminum")}
            className={inputClass}
          >
            <option value="copper">Copper</option>
            <option value="aluminum">Aluminum</option>
          </select>
        </div>

        {/* Wire Size */}
        <div>
          <label htmlFor="wireSize" className={labelClass}>
            Wire Size (AWG)
          </label>
          <select
            id="wireSize"
            value={wireSize}
            onChange={(e) => setWireSize(e.target.value as WireSize)}
            className={inputClass}
          >
            {WIRE_SIZES.map((size) => (
              <option key={size} value={size}>
                {size} AWG
              </option>
            ))}
          </select>
        </div>

        {/* One-way Distance */}
        <div>
          <label htmlFor="distance" className={labelClass}>
            One-way Wire Distance (feet)
          </label>
          <input
            id="distance"
            type="number"
            min={1}
            max={10000}
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        {/* Load in Amps */}
        <div>
          <label htmlFor="amps" className={labelClass}>
            Load (amps)
          </label>
          <input
            id="amps"
            type="number"
            min={0.1}
            step={0.1}
            max={1000}
            value={amps}
            onChange={(e) => setAmps(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        {/* Power Factor */}
        <div>
          <label htmlFor="pf" className={labelClass}>
            Power Factor
          </label>
          <input
            id="pf"
            type="number"
            min={0.1}
            max={1.0}
            step={0.01}
            value={powerFactor}
            onChange={(e) => setPowerFactor(Number(e.target.value))}
            className={inputClass}
          />
          <p className="text-xs text-gray-500 mt-1">
            1.0 for resistive loads, 0.85 for motors
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Voltage Drop</p>
            <p className="text-2xl font-bold text-brand-blue">
              {vd.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">volts</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Voltage Drop %</p>
            <p className="text-2xl font-bold text-brand-blue">
              {vdPercent.toFixed(2)}%
            </p>
            <p className="text-sm text-gray-500">of source voltage</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Voltage at Load</p>
            <p className="text-2xl font-bold text-brand-blue">
              {voltageAtLoad.toFixed(1)}V
            </p>
            <p className="text-sm text-gray-500">delivered</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Pass/Fail Branch */}
          <div
            className={`rounded-lg p-4 text-center border ${
              passBranch
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            <p className="text-sm text-gray-600">Branch Circuit (3%)</p>
            <p
              className={`text-2xl font-bold ${
                passBranch ? "text-green-700" : "text-red-700"
              }`}
            >
              {passBranch ? "PASS" : "FAIL"}
            </p>
            <p className="text-sm text-gray-500">
              NEC recommends max 3%
            </p>
          </div>

          {/* Pass/Fail Total */}
          <div
            className={`rounded-lg p-4 text-center border ${
              passTotal
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            <p className="text-sm text-gray-600">Total Circuit (5%)</p>
            <p
              className={`text-2xl font-bold ${
                passTotal ? "text-green-700" : "text-red-700"
              }`}
            >
              {passTotal ? "PASS" : "FAIL"}
            </p>
            <p className="text-sm text-gray-500">
              NEC recommends max 5% total
            </p>
          </div>

          {/* Power Loss */}
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Power Loss</p>
            <p className="text-2xl font-bold text-brand-orange">
              {powerLoss.toFixed(1)}
            </p>
            <p className="text-sm text-gray-500">watts</p>
          </div>
        </div>

        {/* Recommended Wire Size */}
        <div className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">
            Minimum Wire Size for Under 3% Drop
          </p>
          <p className="text-lg font-bold text-brand-blue">
            {typeof recommendedSize === "string" && recommendedSize.includes("Larger")
              ? recommendedSize
              : `${recommendedSize} AWG ${material === "copper" ? "Copper" : "Aluminum"}`}
          </p>
          {recommendedSize === wireSize && (
            <p className="text-xs text-green-600 mt-1">
              Your selected wire size meets the 3% recommendation.
            </p>
          )}
          {typeof recommendedSize === "string" &&
            !recommendedSize.includes("Larger") &&
            recommendedSize !== wireSize &&
            WIRE_SIZES.indexOf(recommendedSize as typeof wireSize) < WIRE_SIZES.indexOf(wireSize) && (
              <p className="text-xs text-green-600 mt-1">
                Your selected wire exceeds the minimum recommendation.
              </p>
            )}
        </div>
      </div>
    </CalculatorLayout>
  );
}

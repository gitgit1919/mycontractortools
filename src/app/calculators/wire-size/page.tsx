"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type WireMaterial = "copper" | "aluminum";
type Phase = "single" | "three";

interface WireEntry {
  awg: string;
  area_cmil: number;
  ampacity_cu_75: number;
  ampacity_al_75: number;
  conduit: string;
}

// NEC Table 310.16 (75°C column) with approximate circular mil areas and conduit sizes
const WIRE_TABLE: WireEntry[] = [
  { awg: "14", area_cmil: 4110, ampacity_cu_75: 20, ampacity_al_75: 0, conduit: '1/2"' },
  { awg: "12", area_cmil: 6530, ampacity_cu_75: 25, ampacity_al_75: 20, conduit: '1/2"' },
  { awg: "10", area_cmil: 10380, ampacity_cu_75: 35, ampacity_al_75: 30, conduit: '1/2"' },
  { awg: "8", area_cmil: 16510, ampacity_cu_75: 50, ampacity_al_75: 40, conduit: '1/2"' },
  { awg: "6", area_cmil: 26240, ampacity_cu_75: 65, ampacity_al_75: 50, conduit: '3/4"' },
  { awg: "4", area_cmil: 41740, ampacity_cu_75: 85, ampacity_al_75: 65, conduit: '1"' },
  { awg: "3", area_cmil: 52620, ampacity_cu_75: 100, ampacity_al_75: 75, conduit: '1"' },
  { awg: "2", area_cmil: 66360, ampacity_cu_75: 115, ampacity_al_75: 90, conduit: '1"' },
  { awg: "1", area_cmil: 83690, ampacity_cu_75: 130, ampacity_al_75: 100, conduit: '1-1/4"' },
  { awg: "1/0", area_cmil: 105600, ampacity_cu_75: 150, ampacity_al_75: 120, conduit: '1-1/4"' },
  { awg: "2/0", area_cmil: 133100, ampacity_cu_75: 175, ampacity_al_75: 135, conduit: '1-1/2"' },
  { awg: "3/0", area_cmil: 167800, ampacity_cu_75: 200, ampacity_al_75: 155, conduit: '1-1/2"' },
  { awg: "4/0", area_cmil: 211600, ampacity_cu_75: 230, ampacity_al_75: 180, conduit: '2"' },
  { awg: "250", area_cmil: 250000, ampacity_cu_75: 255, ampacity_al_75: 205, conduit: '2"' },
  { awg: "300", area_cmil: 300000, ampacity_cu_75: 285, ampacity_al_75: 230, conduit: '2"' },
  { awg: "350", area_cmil: 350000, ampacity_cu_75: 310, ampacity_al_75: 250, conduit: '2-1/2"' },
  { awg: "500", area_cmil: 500000, ampacity_cu_75: 380, ampacity_al_75: 310, conduit: '3"' },
];

// Resistivity: ohms per circular mil foot
const RESISTIVITY: Record<WireMaterial, number> = {
  copper: 10.4,
  aluminum: 17.0,
};

export default function WireSizeCalculator() {
  const [amperage, setAmperage] = useState<number>(30);
  const [distance, setDistance] = useState<number>(100);
  const [voltage, setVoltage] = useState<number>(240);
  const [phase, setPhase] = useState<Phase>("single");
  const [material, setMaterial] = useState<WireMaterial>("copper");
  const [maxVoltageDrop, setMaxVoltageDrop] = useState<number>(3);

  // Voltage drop formula: VD = (K x I x L) / cmil
  // For single phase: K = 2 x resistivity (round trip)
  // For three phase: K = 1.732 x resistivity
  const K = phase === "single" ? 2 * RESISTIVITY[material] : 1.732 * RESISTIVITY[material];
  const allowableVD = (maxVoltageDrop / 100) * voltage;

  // Minimum circular mil area needed
  const minCmil = (K * amperage * distance) / allowableVD;

  // Find smallest wire that meets BOTH voltage drop AND ampacity requirements
  const selectedWire = WIRE_TABLE.find((w) => {
    const ampacityOk =
      material === "copper"
        ? w.ampacity_cu_75 >= amperage
        : w.ampacity_al_75 >= amperage;
    const vdOk = w.area_cmil >= minCmil;
    return ampacityOk && vdOk;
  });

  // Calculate actual voltage drop at selected wire size
  const actualVD = selectedWire
    ? (K * amperage * distance) / selectedWire.area_cmil
    : 0;
  const actualVDPercent = selectedWire ? (actualVD / voltage) * 100 : 0;

  // Also find wire by ampacity only (for comparison)
  const ampacityWire = WIRE_TABLE.find((w) =>
    material === "copper"
      ? w.ampacity_cu_75 >= amperage
      : w.ampacity_al_75 >= amperage
  );

  // Find wire by voltage drop only
  const vdWire = WIRE_TABLE.find((w) => w.area_cmil >= minCmil);

  return (
    <CalculatorLayout
      title="Wire Size Calculator"
      description="Determine the minimum wire gauge (AWG) for your electrical circuit based on amperage, distance, voltage, and allowable voltage drop. References NEC ampacity tables for copper and aluminum conductors."
      trade="Electrical"
      howToUse="Enter the circuit amperage, one-way wire distance in feet, system voltage, phase type, conductor material, and your maximum acceptable voltage drop percentage. The calculator selects the smallest wire size that satisfies both NEC ampacity requirements and your voltage drop limit."
      formula="Voltage Drop = (K x I x D) / cmil. Where K = 2 x resistivity (single phase) or 1.732 x resistivity (three phase). Copper resistivity = 10.4 ohm-cmil/ft. Aluminum = 17.0 ohm-cmil/ft. Wire must also meet NEC Table 310.16 ampacity at 75C."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="amperage" className="block text-sm font-medium text-gray-700 mb-1">
            Amperage (amps)
          </label>
          <input
            id="amperage"
            type="number"
            min={1}
            step={1}
            value={amperage}
            onChange={(e) => setAmperage(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">
            One-Way Distance (feet)
          </label>
          <input
            id="distance"
            type="number"
            min={1}
            step={1}
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="voltage" className="block text-sm font-medium text-gray-700 mb-1">
            System Voltage
          </label>
          <select
            id="voltage"
            value={voltage}
            onChange={(e) => setVoltage(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={120}>120V</option>
            <option value={208}>208V</option>
            <option value={240}>240V</option>
            <option value={277}>277V</option>
            <option value={480}>480V</option>
          </select>
        </div>

        <div>
          <label htmlFor="phase" className="block text-sm font-medium text-gray-700 mb-1">
            Phase
          </label>
          <select
            id="phase"
            value={phase}
            onChange={(e) => setPhase(e.target.value as Phase)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="single">Single Phase</option>
            <option value="three">Three Phase</option>
          </select>
        </div>

        <div>
          <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">
            Conductor Material
          </label>
          <select
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value as WireMaterial)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="copper">Copper</option>
            <option value="aluminum">Aluminum</option>
          </select>
        </div>

        <div>
          <label htmlFor="maxVoltageDrop" className="block text-sm font-medium text-gray-700 mb-1">
            Max Voltage Drop (%)
          </label>
          <select
            id="maxVoltageDrop"
            value={maxVoltageDrop}
            onChange={(e) => setMaxVoltageDrop(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={2}>2% (branch circuits recommended)</option>
            <option value={3}>3% (NEC recommendation)</option>
            <option value={5}>5% (total circuit + feeder)</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>

        {selectedWire ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Recommended Wire Size</p>
              <p className="text-2xl font-bold text-brand-orange">{selectedWire.awg} AWG</p>
              <p className="text-sm text-gray-500">{material === "copper" ? "Copper" : "Aluminum"}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Actual Voltage Drop</p>
              <p className="text-2xl font-bold text-brand-blue">{actualVD.toFixed(2)}V</p>
              <p className="text-sm text-gray-500">{actualVDPercent.toFixed(2)}%</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Conduit Size (min.)</p>
              <p className="text-2xl font-bold text-brand-blue">{selectedWire.conduit}</p>
              <p className="text-sm text-gray-500">EMT</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Wire Ampacity (75&deg;C)</p>
              <p className="text-2xl font-bold text-brand-blue">
                {material === "copper"
                  ? selectedWire.ampacity_cu_75
                  : selectedWire.ampacity_al_75}A
              </p>
              <p className="text-sm text-gray-500">NEC 310.16</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Min. by Ampacity Only</p>
              <p className="text-2xl font-bold text-brand-blue">{ampacityWire?.awg ?? "N/A"} AWG</p>
              <p className="text-sm text-gray-500">NEC table</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Min. by Voltage Drop Only</p>
              <p className="text-2xl font-bold text-brand-blue">{vdWire?.awg ?? "N/A"} AWG</p>
              <p className="text-sm text-gray-500">{maxVoltageDrop}% max</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-6 text-center border border-red-200">
            <p className="text-lg font-bold text-red-600">No standard wire size found</p>
            <p className="text-sm text-gray-600 mt-2">
              The combination of amperage, distance, and voltage drop requires a conductor larger than 500 kcmil.
              Consider increasing voltage, reducing distance, or using parallel conductors.
            </p>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

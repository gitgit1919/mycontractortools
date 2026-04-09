"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function ElectricalLoadCalculator() {
  const [squareFootage, setSquareFootage] = useState<number>(2000);
  const [smallAppliances, setSmallAppliances] = useState<number>(2);
  const [laundry, setLaundry] = useState<number>(1500);
  const [acUnit, setAcUnit] = useState<number>(5000);
  const [waterHeater, setWaterHeater] = useState<number>(4500);
  const [dryer, setDryer] = useState<number>(5000);
  const [range, setRange] = useState<number>(12000);
  const [additionalLoads, setAdditionalLoads] = useState<number>(0);

  // NEC Article 220 simplified calculation
  const generalLighting = squareFootage * 3; // 3 VA per sq ft
  const smallApplianceCircuits = smallAppliances * 1500;
  const totalGeneral = generalLighting + smallApplianceCircuits + laundry;
  const first10k = Math.min(totalGeneral, 10000);
  const remainder = Math.max(totalGeneral - 10000, 0);
  const demandGeneral = first10k * 1.0 + remainder * 0.4;

  const acOrHeat = acUnit; // NEC says use the larger of AC or heat
  const applianceTotal = waterHeater + dryer + range + additionalLoads;
  const totalVA = Math.round(demandGeneral + acOrHeat + applianceTotal);
  const amps240 = (totalVA / 240).toFixed(0);

  let panelSize = 100;
  if (Number(amps240) > 80) panelSize = 100;
  if (Number(amps240) > 100) panelSize = 150;
  if (Number(amps240) > 150) panelSize = 200;
  if (Number(amps240) > 200) panelSize = 400;

  return (
    <CalculatorLayout
      title="Electrical Load Calculator"
      description="Calculate the total electrical demand for a residential service using NEC Article 220 standard calculation methods. Determine the right panel size for your project."
      trade="Electrical"
      howToUse="Enter the home's square footage for the general lighting load (3 VA per sq ft per NEC). Add the number of small appliance circuits (minimum 2 per NEC), laundry circuit wattage, and the wattage of major appliances. The calculator applies NEC demand factors to determine total service load and recommends a panel size."
      formula="General Lighting = Sq Ft × 3 VA. First 10,000 VA at 100%, remainder at 40%. Add AC/Heat (larger of the two at 100%), plus appliances. Total Amps = Total VA / 240V."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sqft" className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
          <input id="sqft" type="number" min={100} max={50000} value={squareFootage} onChange={(e) => setSquareFootage(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="smallAppliances" className="block text-sm font-medium text-gray-700 mb-1">Small Appliance Circuits</label>
          <input id="smallAppliances" type="number" min={2} max={20} value={smallAppliances} onChange={(e) => setSmallAppliances(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="laundry" className="block text-sm font-medium text-gray-700 mb-1">Laundry Circuit (watts)</label>
          <input id="laundry" type="number" min={0} max={10000} value={laundry} onChange={(e) => setLaundry(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="ac" className="block text-sm font-medium text-gray-700 mb-1">A/C or Heat Pump (watts)</label>
          <input id="ac" type="number" min={0} max={50000} value={acUnit} onChange={(e) => setAcUnit(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="waterHeater" className="block text-sm font-medium text-gray-700 mb-1">Water Heater (watts)</label>
          <input id="waterHeater" type="number" min={0} max={20000} value={waterHeater} onChange={(e) => setWaterHeater(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="dryer" className="block text-sm font-medium text-gray-700 mb-1">Electric Dryer (watts)</label>
          <input id="dryer" type="number" min={0} max={10000} value={dryer} onChange={(e) => setDryer(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="range" className="block text-sm font-medium text-gray-700 mb-1">Electric Range/Oven (watts)</label>
          <input id="range" type="number" min={0} max={20000} value={range} onChange={(e) => setRange(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="additional" className="block text-sm font-medium text-gray-700 mb-1">Additional Loads (watts)</label>
          <input id="additional" type="number" min={0} max={100000} value={additionalLoads} onChange={(e) => setAdditionalLoads(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">EV charger, hot tub, pool pump, etc.</p>
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Demand</p>
            <p className="text-2xl font-bold text-brand-blue">{totalVA.toLocaleString()}</p>
            <p className="text-sm text-gray-500">VA</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Service Amps</p>
            <p className="text-2xl font-bold text-brand-blue">{amps240}</p>
            <p className="text-sm text-gray-500">Amps @ 240V</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Recommended Panel</p>
            <p className="text-2xl font-bold text-brand-orange">{panelSize}A</p>
            <p className="text-sm text-gray-500">Service Panel</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

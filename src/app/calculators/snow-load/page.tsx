"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type RoofType = "flat" | "gable" | "hip";
type Exposure = "sheltered" | "partially" | "fully";

const EXPOSURE_FACTORS: Record<Exposure, Record<RoofType, number>> = {
  sheltered: { flat: 1.2, gable: 1.2, hip: 1.1 },
  partially: { flat: 1.0, gable: 1.0, hip: 1.0 },
  fully: { flat: 0.8, gable: 0.8, hip: 0.8 },
};

const THERMAL_FACTORS: Record<string, number> = {
  heated: 1.0,
  unheated_enclosed: 1.1,
  unheated_open: 1.2,
  freezer: 1.3,
  continuously_heated_greenhouse: 0.85,
};

const IMPORTANCE_FACTORS: Record<string, number> = {
  low: 0.8,
  normal: 1.0,
  substantial: 1.1,
  essential: 1.2,
};

function getSlopeFactorCs(pitch: number, roofType: RoofType): number {
  if (roofType === "flat") return 1.0;
  if (pitch <= 5) return 1.0;
  if (pitch >= 70) return 0.0;
  return 1.0 - (pitch - 5) / 65;
}

export default function SnowLoadCalculator() {
  const [groundSnowLoad, setGroundSnowLoad] = useState<number>(40);
  const [roofType, setRoofType] = useState<RoofType>("gable");
  const [roofPitch, setRoofPitch] = useState<number>(6);
  const [exposure, setExposure] = useState<Exposure>("partially");
  const [thermalFactor, setThermalFactor] = useState<string>("heated");
  const [importanceFactor, setImportanceFactor] = useState<string>("normal");

  const pitchAngle = Math.atan(roofPitch / 12) * (180 / Math.PI);
  const Ce = EXPOSURE_FACTORS[exposure][roofType];
  const Ct = THERMAL_FACTORS[thermalFactor];
  const Is = IMPORTANCE_FACTORS[importanceFactor];
  const Cs = getSlopeFactorCs(pitchAngle, roofType);

  const flatRoofSnowLoad = 0.7 * Ce * Ct * Is * groundSnowLoad;
  const slopedRoofSnowLoad = Cs * flatRoofSnowLoad;
  const minSnowLoad = Math.max(Is * groundSnowLoad * 0.2, Is * 20);

  const designSnowLoad = Math.max(slopedRoofSnowLoad, minSnowLoad);

  return (
    <CalculatorLayout
      title="Snow Load Calculator"
      description="Calculate roof snow loads based on ASCE 7 standards. Determine flat roof and sloped roof snow loads using ground snow load, exposure, thermal conditions, and building importance."
      trade="Roofing"
      howToUse="Enter your local ground snow load (pg) in pounds per square foot. Select your roof type and enter the pitch as rise over 12 inches of run. Choose exposure, thermal, and importance categories. The calculator applies ASCE 7 coefficients to determine flat roof snow load and adjusts for slope."
      formula="Flat roof snow load: pf = 0.7 x Ce x Ct x Is x pg. Sloped roof snow load: ps = Cs x pf. Where Ce = exposure factor, Ct = thermal factor, Is = importance factor, Cs = slope factor, pg = ground snow load (psf)."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="groundSnowLoad" className="block text-sm font-medium text-gray-700 mb-1">
            Ground Snow Load, pg (psf)
          </label>
          <input
            id="groundSnowLoad"
            type="number"
            min={0}
            step={1}
            value={groundSnowLoad}
            onChange={(e) => setGroundSnowLoad(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="roofType" className="block text-sm font-medium text-gray-700 mb-1">
            Roof Type
          </label>
          <select
            id="roofType"
            value={roofType}
            onChange={(e) => setRoofType(e.target.value as RoofType)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="flat">Flat</option>
            <option value="gable">Gable</option>
            <option value="hip">Hip</option>
          </select>
        </div>

        <div>
          <label htmlFor="roofPitch" className="block text-sm font-medium text-gray-700 mb-1">
            Roof Pitch (rise per 12&quot; run)
          </label>
          <input
            id="roofPitch"
            type="number"
            min={0}
            max={24}
            step={0.5}
            value={roofPitch}
            onChange={(e) => setRoofPitch(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="exposure" className="block text-sm font-medium text-gray-700 mb-1">
            Exposure Category
          </label>
          <select
            id="exposure"
            value={exposure}
            onChange={(e) => setExposure(e.target.value as Exposure)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="sheltered">Sheltered</option>
            <option value="partially">Partially Exposed</option>
            <option value="fully">Fully Exposed</option>
          </select>
        </div>

        <div>
          <label htmlFor="thermalFactor" className="block text-sm font-medium text-gray-700 mb-1">
            Thermal Condition (Ct)
          </label>
          <select
            id="thermalFactor"
            value={thermalFactor}
            onChange={(e) => setThermalFactor(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="heated">Heated Structure (1.0)</option>
            <option value="unheated_enclosed">Unheated, Enclosed (1.1)</option>
            <option value="unheated_open">Unheated, Open Air (1.2)</option>
            <option value="freezer">Freezer Building (1.3)</option>
            <option value="continuously_heated_greenhouse">Cont. Heated Greenhouse (0.85)</option>
          </select>
        </div>

        <div>
          <label htmlFor="importanceFactor" className="block text-sm font-medium text-gray-700 mb-1">
            Importance Factor (Is)
          </label>
          <select
            id="importanceFactor"
            value={importanceFactor}
            onChange={(e) => setImportanceFactor(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="low">Category I - Low Risk (0.8)</option>
            <option value="normal">Category II - Normal (1.0)</option>
            <option value="substantial">Category III - Substantial (1.1)</option>
            <option value="essential">Category IV - Essential (1.2)</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Flat Roof Snow Load (pf)</p>
            <p className="text-2xl font-bold text-brand-blue">{flatRoofSnowLoad.toFixed(1)}</p>
            <p className="text-sm text-gray-500">psf</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sloped Roof Snow Load (ps)</p>
            <p className="text-2xl font-bold text-brand-orange">{slopedRoofSnowLoad.toFixed(1)}</p>
            <p className="text-sm text-gray-500">psf</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Design Snow Load</p>
            <p className="text-2xl font-bold text-brand-blue">{designSnowLoad.toFixed(1)}</p>
            <p className="text-sm text-gray-500">psf (governs)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Pitch Angle</p>
            <p className="text-2xl font-bold text-brand-blue">{pitchAngle.toFixed(1)}&deg;</p>
            <p className="text-sm text-gray-500">degrees</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Slope Factor (Cs)</p>
            <p className="text-2xl font-bold text-brand-blue">{Cs.toFixed(3)}</p>
            <p className="text-sm text-gray-500">coefficient</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Exposure Factor (Ce)</p>
            <p className="text-2xl font-bold text-brand-blue">{Ce.toFixed(2)}</p>
            <p className="text-sm text-gray-500">coefficient</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

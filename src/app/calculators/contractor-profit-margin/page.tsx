"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function ContractorProfitMarginCalculator() {
  const [materialCost, setMaterialCost] = useState<number>(5000);
  const [laborCost, setLaborCost] = useState<number>(8000);
  const [subcontractors, setSubcontractors] = useState<number>(0);
  const [permits, setPermits] = useState<number>(500);
  const [equipment, setEquipment] = useState<number>(300);
  const [overhead, setOverhead] = useState<number>(1200);
  const [targetMargin, setTargetMargin] = useState<number>(20);

  const totalCost = materialCost + laborCost + subcontractors + permits + equipment + overhead;
  const markup = targetMargin / (100 - targetMargin) * 100;
  const bidPrice = totalCost / (1 - targetMargin / 100);
  const profit = bidPrice - totalCost;

  // Breakeven and sensitivity
  const breakeven = totalCost;
  const at10 = totalCost / (1 - 10 / 100);
  const at15 = totalCost / (1 - 15 / 100);
  const at25 = totalCost / (1 - 25 / 100);
  const at30 = totalCost / (1 - 30 / 100);

  return (
    <CalculatorLayout
      title="Contractor Profit Margin Calculator"
      description="Calculate the right bid price for any job based on your costs and target profit margin. See the difference between markup and margin, and find the bid price that hits your profit goal."
      trade="Business"
      howToUse="Enter all job costs: materials, labor, subcontractors, permits, equipment rental, and overhead allocation. Set your target profit margin (the percentage of the final bid price that is profit). The calculator computes the correct bid price, markup percentage, and total profit. Industry standard margins range from 10% for competitive bids to 30% for specialty work."
      formula="Bid Price = Total Costs / (1 - Target Margin%). Markup% = Margin% / (100% - Margin%). Profit = Bid Price - Total Costs."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="materials" className="block text-sm font-medium text-gray-700 mb-1">Material Costs ($)</label>
          <input id="materials" type="number" min={0} step={100} value={materialCost} onChange={(e) => setMaterialCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="labor" className="block text-sm font-medium text-gray-700 mb-1">Labor Costs ($)</label>
          <input id="labor" type="number" min={0} step={100} value={laborCost} onChange={(e) => setLaborCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="subs" className="block text-sm font-medium text-gray-700 mb-1">Subcontractor Costs ($)</label>
          <input id="subs" type="number" min={0} step={100} value={subcontractors} onChange={(e) => setSubcontractors(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="permits" className="block text-sm font-medium text-gray-700 mb-1">Permits & Fees ($)</label>
          <input id="permits" type="number" min={0} step={50} value={permits} onChange={(e) => setPermits(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="equipment" className="block text-sm font-medium text-gray-700 mb-1">Equipment Rental ($)</label>
          <input id="equipment" type="number" min={0} step={50} value={equipment} onChange={(e) => setEquipment(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="overhead" className="block text-sm font-medium text-gray-700 mb-1">Overhead Allocation ($)</label>
          <input id="overhead" type="number" min={0} step={100} value={overhead} onChange={(e) => setOverhead(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Insurance, office, vehicle, etc.</p>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="margin" className="block text-sm font-medium text-gray-700 mb-1">Target Profit Margin (%)</label>
          <input id="margin" type="range" min={5} max={50} step={1} value={targetMargin} onChange={(e) => setTargetMargin(Number(e.target.value))}
            className="w-full accent-orange-500" />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>5%</span>
            <span className="font-bold text-brand-orange">{targetMargin}%</span>
            <span>50%</span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Job Cost</p>
            <p className="text-2xl font-bold text-brand-blue">${totalCost.toLocaleString()}</p>
            <p className="text-sm text-gray-500">all costs</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Bid Price</p>
            <p className="text-2xl font-bold text-brand-orange">${Math.round(bidPrice).toLocaleString()}</p>
            <p className="text-sm text-gray-500">{markup.toFixed(1)}% markup</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Profit</p>
            <p className="text-2xl font-bold text-green-600">${Math.round(profit).toLocaleString()}</p>
            <p className="text-sm text-gray-500">{targetMargin}% margin</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Breakeven</p>
            <p className="text-2xl font-bold text-brand-blue">${breakeven.toLocaleString()}</p>
            <p className="text-sm text-gray-500">minimum bid</p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-brand-blue mt-6 mb-3">Bid Price at Different Margins</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "10%", value: at10 },
            { label: "15%", value: at15 },
            { label: "25%", value: at25 },
            { label: "30%", value: at30 },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-lg p-3 text-center border border-gray-200">
              <p className="text-sm text-gray-600">{item.label} margin</p>
              <p className="text-lg font-bold text-brand-blue">${Math.round(item.value).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </CalculatorLayout>
  );
}

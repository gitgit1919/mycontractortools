"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function HourlyRateCalculator() {
  const [targetIncome, setTargetIncome] = useState<number>(100000);
  const [weeksOff, setWeeksOff] = useState<number>(3);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [billablePercent, setBillablePercent] = useState<number>(65);
  const [insurance, setInsurance] = useState<number>(800);
  const [vehicleCost, setVehicleCost] = useState<number>(600);
  const [toolsEquipment, setToolsEquipment] = useState<number>(300);
  const [otherOverhead, setOtherOverhead] = useState<number>(400);
  const [taxRate, setTaxRate] = useState<number>(30);

  const workingWeeks = 52 - weeksOff;
  const totalHours = workingWeeks * hoursPerWeek;
  const billableHours = totalHours * (billablePercent / 100);
  const monthlyOverhead = insurance + vehicleCost + toolsEquipment + otherOverhead;
  const annualOverhead = monthlyOverhead * 12;

  // Gross needed = (target income + overhead) / (1 - tax rate)
  const grossNeeded = (targetIncome + annualOverhead) / (1 - taxRate / 100);
  const hourlyRate = billableHours > 0 ? grossNeeded / billableHours : 0;

  const dailyRate = hourlyRate * 8;
  const weeklyRevenue = hourlyRate * (hoursPerWeek * billablePercent / 100);
  const monthlyRevenue = grossNeeded / 12;

  return (
    <CalculatorLayout
      title="Hourly Rate Calculator"
      description="Calculate what you need to charge per hour as a contractor to hit your income goal after taxes, overhead, and non-billable time. Stop undercharging for your work."
      trade="Business"
      howToUse="Enter your desired annual take-home income, then adjust for time off, billable hours percentage (typically 60-70% — the rest goes to estimates, travel, admin), monthly overhead costs, and your estimated tax rate. The calculator works backwards to find the hourly rate that actually delivers your target income."
      formula="Gross Needed = (Target Income + Annual Overhead) / (1 - Tax Rate). Hourly Rate = Gross Needed / Annual Billable Hours. Billable Hours = Working Weeks × Hours/Week × Billable%."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="sm:col-span-2">
          <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">Target Annual Take-Home ($)</label>
          <input id="target" type="number" min={10000} step={5000} value={targetIncome} onChange={(e) => setTargetIncome(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="weeksOff" className="block text-sm font-medium text-gray-700 mb-1">Weeks Off Per Year</label>
          <input id="weeksOff" type="number" min={0} max={20} value={weeksOff} onChange={(e) => setWeeksOff(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">Hours Per Week</label>
          <input id="hours" type="number" min={10} max={80} value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="billable" className="block text-sm font-medium text-gray-700 mb-1">Billable Time: {billablePercent}%</label>
          <input id="billable" type="range" min={30} max={90} step={5} value={billablePercent} onChange={(e) => setBillablePercent(Number(e.target.value))}
            className="w-full accent-orange-500" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>30% (lots of admin/travel)</span>
            <span>90% (mostly field work)</span>
          </div>
        </div>

        <div className="sm:col-span-2 border-t pt-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">Monthly Overhead</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">Insurance ($/mo)</label>
              <input id="insurance" type="number" min={0} step={50} value={insurance} onChange={(e) => setInsurance(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">Vehicle ($/mo)</label>
              <input id="vehicle" type="number" min={0} step={50} value={vehicleCost} onChange={(e) => setVehicleCost(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="tools" className="block text-sm font-medium text-gray-700 mb-1">Tools & Equipment ($/mo)</label>
              <input id="tools" type="number" min={0} step={50} value={toolsEquipment} onChange={(e) => setToolsEquipment(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="other" className="block text-sm font-medium text-gray-700 mb-1">Other Overhead ($/mo)</label>
              <input id="other" type="number" min={0} step={50} value={otherOverhead} onChange={(e) => setOtherOverhead(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="tax" className="block text-sm font-medium text-gray-700 mb-1">Estimated Tax Rate (%)</label>
          <input id="tax" type="number" min={10} max={50} value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">SE tax + income tax (25-35% typical)</p>
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Your Rate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Charge Per Hour</p>
            <p className="text-2xl font-bold text-brand-orange">${hourlyRate.toFixed(0)}</p>
            <p className="text-sm text-gray-500">minimum rate</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Daily Rate (8 hrs)</p>
            <p className="text-2xl font-bold text-brand-blue">${dailyRate.toFixed(0)}</p>
            <p className="text-sm text-gray-500">full day</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Weekly Revenue</p>
            <p className="text-2xl font-bold text-brand-blue">${Math.round(weeklyRevenue).toLocaleString()}</p>
            <p className="text-sm text-gray-500">target</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Monthly Revenue</p>
            <p className="text-2xl font-bold text-brand-blue">${Math.round(monthlyRevenue).toLocaleString()}</p>
            <p className="text-sm text-gray-500">gross needed</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Billable Hours/Year</p>
            <p className="text-xl font-bold text-brand-blue">{Math.round(billableHours).toLocaleString()}</p>
            <p className="text-sm text-gray-500">of {totalHours.toLocaleString()} total</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Annual Overhead</p>
            <p className="text-xl font-bold text-brand-blue">${annualOverhead.toLocaleString()}</p>
            <p className="text-sm text-gray-500">${monthlyOverhead.toLocaleString()}/mo</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gross Revenue Needed</p>
            <p className="text-xl font-bold text-brand-blue">${Math.round(grossNeeded).toLocaleString()}</p>
            <p className="text-sm text-gray-500">before taxes</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

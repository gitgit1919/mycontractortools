"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function SelfEmploymentTaxCalculator() {
  const [grossIncome, setGrossIncome] = useState<number>(120000);
  const [businessExpenses, setBusinessExpenses] = useState<number>(35000);
  const [filingStatus, setFilingStatus] = useState<string>("single");
  const [otherIncome, setOtherIncome] = useState<number>(0);

  const netProfit = grossIncome - businessExpenses;
  const seBase = netProfit * 0.9235; // 92.35% of net earnings

  // 2024 SE tax rates
  const socialSecurityCap = 168600;
  const socialSecurityRate = 0.124;
  const medicareRate = 0.029;
  const additionalMedicareThreshold = filingStatus === "married" ? 250000 : 200000;

  const socialSecurityTax = Math.min(seBase, socialSecurityCap) * socialSecurityRate;
  const medicareTax = seBase * medicareRate;
  const additionalMedicare = Math.max(seBase - additionalMedicareThreshold, 0) * 0.009;
  const totalSE = socialSecurityTax + medicareTax + additionalMedicare;

  // Deductible half of SE tax
  const seDeduction = totalSE / 2;

  // Simplified federal income tax estimate (2024 brackets, single)
  const taxableIncome = Math.max(netProfit + otherIncome - seDeduction - (filingStatus === "married" ? 29200 : 14600), 0);

  let incomeTax = 0;
  const brackets = filingStatus === "married"
    ? [
        { limit: 23200, rate: 0.10 },
        { limit: 94300, rate: 0.12 },
        { limit: 201050, rate: 0.22 },
        { limit: 383900, rate: 0.24 },
        { limit: 487450, rate: 0.32 },
        { limit: 731200, rate: 0.35 },
        { limit: Infinity, rate: 0.37 },
      ]
    : [
        { limit: 11600, rate: 0.10 },
        { limit: 47150, rate: 0.12 },
        { limit: 100525, rate: 0.22 },
        { limit: 191950, rate: 0.24 },
        { limit: 243725, rate: 0.32 },
        { limit: 609350, rate: 0.35 },
        { limit: Infinity, rate: 0.37 },
      ];

  let remainingIncome = taxableIncome;
  let prevLimit = 0;
  for (const bracket of brackets) {
    const taxableInBracket = Math.min(remainingIncome, bracket.limit - prevLimit);
    if (taxableInBracket <= 0) break;
    incomeTax += taxableInBracket * bracket.rate;
    remainingIncome -= taxableInBracket;
    prevLimit = bracket.limit;
  }

  const totalTax = totalSE + incomeTax;
  const effectiveRate = netProfit > 0 ? (totalTax / netProfit) * 100 : 0;
  const takeHome = netProfit - totalTax;
  const quarterlyPayment = totalTax / 4;

  return (
    <CalculatorLayout
      title="Self-Employment Tax Calculator"
      description="Estimate your self-employment tax (Social Security + Medicare) and federal income tax as an independent contractor or sole proprietor. Plan your quarterly estimated payments."
      trade="Business"
      howToUse="Enter your gross business income and deductible business expenses (tools, materials, vehicle, insurance, etc.). The calculator computes self-employment tax using the 92.35% base, applies the SE tax deduction, and estimates federal income tax. Use this to plan quarterly estimated payments and understand your true take-home pay."
      formula="SE Base = Net Profit × 92.35%. SE Tax = (SS at 12.4% up to cap) + (Medicare at 2.9%). Deduction = SE Tax / 2. Quarterly Payment = Total Tax / 4."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="gross" className="block text-sm font-medium text-gray-700 mb-1">Gross Business Income ($)</label>
          <input id="gross" type="number" min={0} step={1000} value={grossIncome} onChange={(e) => setGrossIncome(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="expenses" className="block text-sm font-medium text-gray-700 mb-1">Business Expenses ($)</label>
          <input id="expenses" type="number" min={0} step={500} value={businessExpenses} onChange={(e) => setBusinessExpenses(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Materials, tools, vehicle, insurance, etc.</p>
        </div>
        <div>
          <label htmlFor="filing" className="block text-sm font-medium text-gray-700 mb-1">Filing Status</label>
          <select id="filing" value={filingStatus} onChange={(e) => setFilingStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
          </select>
        </div>
        <div>
          <label htmlFor="other" className="block text-sm font-medium text-gray-700 mb-1">Other Income ($)</label>
          <input id="other" type="number" min={0} step={1000} value={otherIncome} onChange={(e) => setOtherIncome(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">W-2 wages, interest, etc.</p>
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Tax Estimate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Net Profit</p>
            <p className="text-2xl font-bold text-brand-blue">${netProfit.toLocaleString()}</p>
            <p className="text-sm text-gray-500">Schedule C</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Self-Employment Tax</p>
            <p className="text-2xl font-bold text-red-600">${Math.round(totalSE).toLocaleString()}</p>
            <p className="text-sm text-gray-500">SS + Medicare</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Federal Income Tax</p>
            <p className="text-2xl font-bold text-red-600">${Math.round(incomeTax).toLocaleString()}</p>
            <p className="text-sm text-gray-500">estimated</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Tax</p>
            <p className="text-2xl font-bold text-brand-orange">${Math.round(totalTax).toLocaleString()}</p>
            <p className="text-sm text-gray-500">{effectiveRate.toFixed(1)}% effective rate</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Take-Home Pay</p>
            <p className="text-2xl font-bold text-green-600">${Math.round(takeHome).toLocaleString()}</p>
            <p className="text-sm text-gray-500">${Math.round(takeHome / 12).toLocaleString()}/month</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Quarterly Payment</p>
            <p className="text-2xl font-bold text-brand-blue">${Math.round(quarterlyPayment).toLocaleString()}</p>
            <p className="text-sm text-gray-500">due Apr, Jun, Sep, Jan</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

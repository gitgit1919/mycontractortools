"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

// 2025 figures
const SOCIAL_SECURITY_CAP_2025 = 176100;
const SOCIAL_SECURITY_RATE = 0.124;
const MEDICARE_RATE = 0.029;
const ADDITIONAL_MEDICARE_RATE = 0.009;
const STANDARD_DEDUCTION_SINGLE_2025 = 15000;
const STANDARD_DEDUCTION_MARRIED_2025 = 30000;

const BRACKETS_2025_SINGLE = [
  { limit: 11925, rate: 0.10 },
  { limit: 48475, rate: 0.12 },
  { limit: 103350, rate: 0.22 },
  { limit: 197300, rate: 0.24 },
  { limit: 250525, rate: 0.32 },
  { limit: 626350, rate: 0.35 },
  { limit: Infinity, rate: 0.37 },
];

const BRACKETS_2025_MARRIED = [
  { limit: 23850, rate: 0.10 },
  { limit: 96950, rate: 0.12 },
  { limit: 206700, rate: 0.22 },
  { limit: 394600, rate: 0.24 },
  { limit: 501050, rate: 0.32 },
  { limit: 751600, rate: 0.35 },
  { limit: Infinity, rate: 0.37 },
];

function computeIncomeTax(
  taxableIncome: number,
  brackets: { limit: number; rate: number }[]
): number {
  let tax = 0;
  let remaining = Math.max(taxableIncome, 0);
  let prevLimit = 0;
  for (const b of brackets) {
    const slice = Math.min(remaining, b.limit - prevLimit);
    if (slice <= 0) break;
    tax += slice * b.rate;
    remaining -= slice;
    prevLimit = b.limit;
  }
  return tax;
}

export default function SelfEmploymentTaxCalculator() {
  const [grossIncome, setGrossIncome] = useState<number>(150000);
  const [businessExpenses, setBusinessExpenses] = useState<number>(40000);
  const [filingStatus, setFilingStatus] = useState<string>("single");
  const [otherIncome, setOtherIncome] = useState<number>(0);
  const [stateTaxRate, setStateTaxRate] = useState<number>(0);
  const [retirementContribution, setRetirementContribution] = useState<number>(0);
  const [reasonableSalary, setReasonableSalary] = useState<number>(60000);

  const result = useMemo(() => {
    const isMarried = filingStatus === "married";
    const brackets = isMarried ? BRACKETS_2025_MARRIED : BRACKETS_2025_SINGLE;
    const standardDeduction = isMarried
      ? STANDARD_DEDUCTION_MARRIED_2025
      : STANDARD_DEDUCTION_SINGLE_2025;
    const additionalMedicareThreshold = isMarried ? 250000 : 200000;

    const netProfit = Math.max(grossIncome - businessExpenses, 0);

    // ===== SOLE PROPRIETOR / LLC PATH =====
    const seBase = netProfit * 0.9235;
    const sp_socialSecurity =
      Math.min(seBase, SOCIAL_SECURITY_CAP_2025) * SOCIAL_SECURITY_RATE;
    const sp_medicare = seBase * MEDICARE_RATE;
    const sp_additionalMedicare =
      Math.max(seBase - additionalMedicareThreshold, 0) * ADDITIONAL_MEDICARE_RATE;
    const sp_totalSE = sp_socialSecurity + sp_medicare + sp_additionalMedicare;
    const sp_seDeduction = sp_totalSE / 2;

    const sp_taxableIncome = Math.max(
      netProfit + otherIncome - sp_seDeduction - retirementContribution - standardDeduction,
      0
    );
    const sp_federalIncomeTax = computeIncomeTax(sp_taxableIncome, brackets);
    const sp_stateTax = sp_taxableIncome * (stateTaxRate / 100);
    const sp_totalTax = sp_totalSE + sp_federalIncomeTax + sp_stateTax;
    const sp_takeHome = netProfit - sp_totalTax - retirementContribution;
    const sp_effectiveRate = netProfit > 0 ? (sp_totalTax / netProfit) * 100 : 0;
    const sp_quarterlyPayment = (sp_totalSE + sp_federalIncomeTax + sp_stateTax) / 4;

    // ===== S-CORPORATION PATH =====
    // S-Corp pays the owner W-2 wages (subject to FICA), the rest passes through as
    // distributions (NOT subject to SE tax). IRS requires "reasonable compensation."
    const sCorpSalary = Math.min(reasonableSalary, netProfit);
    const sCorpDistribution = Math.max(netProfit - sCorpSalary, 0);

    // FICA on the W-2 portion (employer + employee halves both fall on the owner)
    const sc_employeeFICA =
      Math.min(sCorpSalary, SOCIAL_SECURITY_CAP_2025) * 0.062 +
      sCorpSalary * 0.0145;
    const sc_employerFICA =
      Math.min(sCorpSalary, SOCIAL_SECURITY_CAP_2025) * 0.062 +
      sCorpSalary * 0.0145;
    const sc_totalFICA = sc_employeeFICA + sc_employerFICA;

    // Federal income tax — owner's salary + distribution flow through to personal return
    const sc_taxableIncome = Math.max(
      sCorpSalary + sCorpDistribution + otherIncome - retirementContribution - standardDeduction,
      0
    );
    const sc_federalIncomeTax = computeIncomeTax(sc_taxableIncome, brackets);
    const sc_stateTax = sc_taxableIncome * (stateTaxRate / 100);
    const sc_totalTax = sc_totalFICA + sc_federalIncomeTax + sc_stateTax;
    // Add back ~$1,500/yr extra admin (payroll service, tax prep, state fees)
    const sCorpExtraCost = 1500;
    const sc_takeHome =
      netProfit - sc_totalTax - retirementContribution - sCorpExtraCost;

    const sCorpSavings = sc_takeHome - sp_takeHome;

    return {
      netProfit,
      // Sole prop
      sp_totalSE,
      sp_federalIncomeTax,
      sp_stateTax,
      sp_totalTax,
      sp_takeHome,
      sp_effectiveRate,
      sp_quarterlyPayment,
      // S-Corp
      sCorpSalary,
      sCorpDistribution,
      sc_totalFICA,
      sc_federalIncomeTax,
      sc_stateTax,
      sc_totalTax,
      sc_takeHome,
      sCorpExtraCost,
      sCorpSavings,
    };
  }, [
    grossIncome,
    businessExpenses,
    filingStatus,
    otherIncome,
    stateTaxRate,
    retirementContribution,
    reasonableSalary,
  ]);

  return (
    <CalculatorLayout
      title="Self-Employment Tax Calculator"
      description="Estimate self-employment tax (Social Security + Medicare), federal income tax, and state tax as an independent contractor. Includes a side-by-side S-Corp comparison so you can see if electing S-Corp status would actually save you money."
      trade="Business"
      howToUse="Enter your gross business income and deductible expenses. The calculator computes your sole-proprietor / single-member LLC tax bill using 2025 brackets, then runs a side-by-side S-Corp scenario based on the &lsquo;reasonable salary&rsquo; you&apos;d pay yourself. The S-Corp comparison estimates the FICA savings minus the extra admin cost so you know if the election is worth it."
      formula="SE Base = Net Profit × 92.35%. SE Tax = (12.4% Social Security up to $176,100 cap) + (2.9% Medicare). S-Corp FICA = 15.3% on W-2 salary only; distributions are NOT subject to SE tax. S-Corp Savings = Sole Prop Take-Home − S-Corp Take-Home − ~$1,500/yr admin overhead."
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
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State Income Tax Rate (%)</label>
          <input id="state" type="number" min={0} max={15} step={0.5} value={stateTaxRate} onChange={(e) => setStateTaxRate(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">0 if you live in TX, FL, NV, WA, etc.</p>
        </div>
        <div>
          <label htmlFor="retirement" className="block text-sm font-medium text-gray-700 mb-1">Retirement Contribution ($)</label>
          <input id="retirement" type="number" min={0} step={500} value={retirementContribution} onChange={(e) => setRetirementContribution(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">SEP-IRA / Solo 401(k) — reduces taxable income</p>
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Your Tax Estimate (Sole Prop / Single-Member LLC)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Net Profit</p>
            <p className="text-2xl font-bold text-brand-blue">${result.netProfit.toLocaleString()}</p>
            <p className="text-sm text-gray-500">Schedule C</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Self-Employment Tax</p>
            <p className="text-2xl font-bold text-red-600">${Math.round(result.sp_totalSE).toLocaleString()}</p>
            <p className="text-sm text-gray-500">SS + Medicare</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Federal Income Tax</p>
            <p className="text-2xl font-bold text-red-600">${Math.round(result.sp_federalIncomeTax).toLocaleString()}</p>
            <p className="text-sm text-gray-500">2025 brackets</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">State Income Tax</p>
            <p className="text-2xl font-bold text-red-600">${Math.round(result.sp_stateTax).toLocaleString()}</p>
            <p className="text-sm text-gray-500">{stateTaxRate}% rate</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Tax Owed</p>
            <p className="text-2xl font-bold text-brand-orange">${Math.round(result.sp_totalTax).toLocaleString()}</p>
            <p className="text-sm text-gray-500">{result.sp_effectiveRate.toFixed(1)}% effective</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border-2 border-green-500">
            <p className="text-sm text-gray-600">Take-Home Pay</p>
            <p className="text-3xl font-bold text-green-600">${Math.round(result.sp_takeHome).toLocaleString()}</p>
            <p className="text-sm text-gray-500">${Math.round(result.sp_takeHome / 12).toLocaleString()}/month</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Quarterly Payment</p>
            <p className="text-2xl font-bold text-brand-blue">${Math.round(result.sp_quarterlyPayment).toLocaleString()}</p>
            <p className="text-sm text-gray-500">Apr/Jun/Sep/Jan</p>
          </div>
        </div>
      </div>

      {/* S-CORP COMPARISON */}
      <div className="mt-6 bg-white border-2 border-brand-blue rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-2">
          Should You Elect S-Corp Status?
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          An S-Corp election can save self-employment tax once your net profit
          exceeds roughly $50K&ndash;$80K. You pay yourself a &ldquo;reasonable
          salary&rdquo; (subject to FICA), and the rest comes through as
          distributions that <strong>aren&apos;t subject to SE tax</strong>. The
          tradeoff: you owe payroll filings, an extra tax return (Form 1120-S),
          and roughly $1,500&ndash;$2,500/yr in extra admin.
        </p>

        <div className="mb-4">
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
            Your Reasonable W-2 Salary ($)
          </label>
          <input
            id="salary"
            type="number"
            min={0}
            step={5000}
            value={reasonableSalary}
            onChange={(e) => setReasonableSalary(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            IRS requires this match what you&apos;d pay an employee doing your
            role &mdash; typically 40&ndash;60% of net profit. Too low triggers
            audits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-gray-700 mb-2">Sole Prop / LLC</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1 text-gray-600">SE Tax</td>
                  <td className="py-1 text-right font-medium">${Math.round(result.sp_totalSE).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Federal Income Tax</td>
                  <td className="py-1 text-right font-medium">${Math.round(result.sp_federalIncomeTax).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">State Tax</td>
                  <td className="py-1 text-right font-medium">${Math.round(result.sp_stateTax).toLocaleString()}</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="py-1 font-semibold">Take-Home</td>
                  <td className="py-1 text-right font-bold text-green-600">${Math.round(result.sp_takeHome).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className={`rounded-lg p-4 border-2 ${
              result.sCorpSavings > 0
                ? "bg-green-50 border-green-500"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <h3 className="font-bold text-gray-700 mb-2">S-Corp Election</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1 text-gray-600">FICA on Salary</td>
                  <td className="py-1 text-right font-medium">${Math.round(result.sc_totalFICA).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Federal Income Tax</td>
                  <td className="py-1 text-right font-medium">${Math.round(result.sc_federalIncomeTax).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">State Tax</td>
                  <td className="py-1 text-right font-medium">${Math.round(result.sc_stateTax).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Extra Admin</td>
                  <td className="py-1 text-right font-medium">${result.sCorpExtraCost.toLocaleString()}</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="py-1 font-semibold">Take-Home</td>
                  <td className="py-1 text-right font-bold text-green-600">${Math.round(result.sc_takeHome).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          className={`mt-4 rounded-lg p-4 ${
            result.sCorpSavings > 0
              ? "bg-green-100 border border-green-300"
              : "bg-amber-50 border border-amber-300"
          }`}
        >
          {result.sCorpSavings > 0 ? (
            <p className="text-sm text-green-900">
              <strong>S-Corp wins by ${Math.round(result.sCorpSavings).toLocaleString()}/year.</strong>{" "}
              At your income, electing S-Corp status would put roughly{" "}
              <strong>${Math.round(result.sCorpSavings).toLocaleString()}</strong>{" "}
              extra in your pocket after admin costs. Talk to a CPA before
              filing Form 2553 &mdash; the salary must be defensible.
            </p>
          ) : (
            <p className="text-sm text-amber-900">
              <strong>Stay sole prop / LLC.</strong> At your current income, an
              S-Corp election would actually <em>cost</em> you about{" "}
              ${Math.abs(Math.round(result.sCorpSavings)).toLocaleString()}/year
              after the extra admin overhead. Revisit this when net profit
              clears ~$80K.
            </p>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}

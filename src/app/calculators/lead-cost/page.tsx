"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const SOURCE_PRICING = [
  { name: "Google Local Services Ads", typical: "$25–$50" },
  { name: "Google Search Ads", typical: "$20–$80 per click" },
  { name: "HomeAdvisor / Angi", typical: "$15–$80" },
  { name: "Thumbtack", typical: "$10–$50" },
  { name: "Facebook Ads", typical: "$8–$40" },
  { name: "Yelp Ads", typical: "$30–$100" },
];

export default function LeadCostCalculator() {
  const [avgJobValue, setAvgJobValue] = useState<number>(4500);
  const [profitMargin, setProfitMargin] = useState<number>(25);
  const [closeRate, setCloseRate] = useState<number>(20);
  const [marketingProfitShare, setMarketingProfitShare] = useState<number>(15);
  const [actualLeadCost, setActualLeadCost] = useState<number>(40);

  const result = useMemo(() => {
    const profitPerJob = avgJobValue * (profitMargin / 100);
    const marketingBudget = profitPerJob * (marketingProfitShare / 100);

    // Max CAC = how much you can spend per closed customer
    const maxCAC = marketingBudget;

    // Max cost per lead = max CAC × close rate (close rate as decimal)
    // Because if 1-in-X leads closes, each lead is worth (profit_per_close × close_rate)
    const closeRateDecimal = closeRate / 100;
    const maxCostPerLead = maxCAC * closeRateDecimal;

    // Reality at the actual lead cost the user is paying
    const leadsPerCustomer = closeRateDecimal > 0 ? 1 / closeRateDecimal : 0;
    const actualCAC = actualLeadCost * leadsPerCustomer;
    const profitAfterMarketing = profitPerJob - actualCAC;
    const actualMarketingShare =
      profitPerJob > 0 ? (actualCAC / profitPerJob) * 100 : 0;
    const isProfitable = profitAfterMarketing > 0;

    // Annual scenarios
    const monthlyAdSpend = 1000;
    const leadsAtMonthlyBudget =
      actualLeadCost > 0 ? monthlyAdSpend / actualLeadCost : 0;
    const customersPerMonth = leadsAtMonthlyBudget * closeRateDecimal;
    const monthlyRevenue = customersPerMonth * avgJobValue;
    const monthlyProfit = customersPerMonth * profitAfterMarketing;
    const annualProfit = monthlyProfit * 12;

    return {
      profitPerJob,
      marketingBudget,
      maxCAC,
      maxCostPerLead,
      leadsPerCustomer,
      actualCAC,
      profitAfterMarketing,
      actualMarketingShare,
      isProfitable,
      monthlyAdSpend,
      leadsAtMonthlyBudget,
      customersPerMonth,
      monthlyRevenue,
      monthlyProfit,
      annualProfit,
    };
  }, [avgJobValue, profitMargin, closeRate, marketingProfitShare, actualLeadCost]);

  return (
    <CalculatorLayout
      title="Max Lead Cost Calculator"
      description="Figure out the most you can afford to pay for a lead based on your close rate, average job size, and target marketing spend. Stop overpaying for HomeAdvisor, Angi, Google LSA, and Thumbtack leads."
      trade="Business"
      howToUse="Enter your average job value and profit margin, your historical close rate (1 in X leads converts), and what percentage of profit you&apos;re willing to invest in marketing. The calculator works backward to find the most you can afford to pay per lead. Then compare it to what you&apos;re actually paying."
      formula="Profit Per Job = Job Value × Margin%. Marketing Budget = Profit × Marketing Share%. Max Cost Per Lead = Marketing Budget × Close Rate%. Customer Acquisition Cost (CAC) = Lead Cost ÷ Close Rate%."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="job" className="block text-sm font-medium text-gray-700 mb-1">Average Job Value ($)</label>
          <input id="job" type="number" min={0} step={100} value={avgJobValue} onChange={(e) => setAvgJobValue(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="margin" className="block text-sm font-medium text-gray-700 mb-1">Profit Margin per Job (%)</label>
          <input id="margin" type="number" min={0} max={80} step={1} value={profitMargin} onChange={(e) => setProfitMargin(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">After materials, labor, overhead</p>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="close" className="block text-sm font-medium text-gray-700 mb-1">Close Rate: {closeRate}% (1 in {(100 / closeRate).toFixed(1)})</label>
          <input id="close" type="range" min={5} max={75} step={1} value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))}
            className="w-full accent-orange-500" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5% (cold leads)</span>
            <span>75% (referrals)</span>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="share" className="block text-sm font-medium text-gray-700 mb-1">Marketing Spend as % of Profit: {marketingProfitShare}%</label>
          <input id="share" type="range" min={5} max={50} step={1} value={marketingProfitShare} onChange={(e) => setMarketingProfitShare(Number(e.target.value))}
            className="w-full accent-orange-500" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5% (lean)</span>
            <span>15% typical</span>
            <span>50% (growth mode)</span>
          </div>
        </div>
        <div className="sm:col-span-2 border-t pt-4">
          <label htmlFor="actual" className="block text-sm font-medium text-gray-700 mb-1">What You&apos;re Actually Paying Per Lead ($)</label>
          <input id="actual" type="number" min={0} step={5} value={actualLeadCost} onChange={(e) => setActualLeadCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">From HomeAdvisor, LSA, Google Ads, Thumbtack, etc.</p>
        </div>
      </div>

      {/* MAX LEAD COST RESULT */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">The Numbers You Can Afford</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Profit Per Job</p>
            <p className="text-xl font-bold text-brand-blue">${result.profitPerJob.toFixed(0)}</p>
            <p className="text-xs text-gray-500">{profitMargin}% of ${avgJobValue}</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Max Marketing per Job</p>
            <p className="text-xl font-bold text-brand-blue">${result.marketingBudget.toFixed(0)}</p>
            <p className="text-xs text-gray-500">{marketingProfitShare}% of profit</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Leads Per Customer</p>
            <p className="text-xl font-bold text-brand-blue">{result.leadsPerCustomer.toFixed(1)}</p>
            <p className="text-xs text-gray-500">at {closeRate}% close rate</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border-2 border-brand-orange">
            <p className="text-sm text-gray-600">Max Cost Per Lead</p>
            <p className="text-3xl font-bold text-brand-orange">${result.maxCostPerLead.toFixed(0)}</p>
            <p className="text-xs text-gray-500">never pay more</p>
          </div>
        </div>
      </div>

      {/* REALITY CHECK */}
      <div
        className={`mt-6 rounded-xl p-6 border-2 ${
          result.isProfitable
            ? "bg-green-50 border-green-500"
            : "bg-red-50 border-red-500"
        }`}
      >
        <h2 className="text-xl font-bold text-brand-blue mb-3">
          Reality Check: Paying ${actualLeadCost}/Lead
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Actual CAC</p>
            <p className="text-2xl font-bold text-brand-blue">${result.actualCAC.toFixed(0)}</p>
            <p className="text-xs text-gray-500">cost per closed customer</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Marketing as % of Profit</p>
            <p className="text-2xl font-bold text-brand-blue">{result.actualMarketingShare.toFixed(0)}%</p>
            <p className="text-xs text-gray-500">target was {marketingProfitShare}%</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Profit After Marketing</p>
            <p className={`text-2xl font-bold ${result.isProfitable ? "text-green-600" : "text-red-600"}`}>
              ${result.profitAfterMarketing.toFixed(0)}
            </p>
            <p className="text-xs text-gray-500">per closed job</p>
          </div>
        </div>
        {result.isProfitable ? (
          <p className="text-sm text-green-900">
            <strong>You&apos;re in the green.</strong> At ${actualLeadCost}/lead and a{" "}
            {closeRate}% close rate, each closed job nets you{" "}
            ${result.profitAfterMarketing.toFixed(0)} after marketing &mdash; that&apos;s{" "}
            {result.actualMarketingShare.toFixed(0)}% of profit going to marketing
            (your target was {marketingProfitShare}%).
            {result.actualMarketingShare < marketingProfitShare * 0.7 &&
              " You have room to outbid competitors and capture more leads if you want to grow faster."}
          </p>
        ) : (
          <p className="text-sm text-red-900">
            <strong>You&apos;re losing money on every lead.</strong> Paying $
            {actualLeadCost} for a lead with only a {closeRate}% close rate means
            each closed customer costs you ${result.actualCAC.toFixed(0)} to acquire,
            which is more than the ${result.profitPerJob.toFixed(0)} profit you make
            per job. Either raise your close rate, raise your average job value, or
            stop paying for these leads.
          </p>
        )}
      </div>

      {/* MONTHLY BUDGET PROJECTION */}
      <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-3">
          What ${result.monthlyAdSpend.toLocaleString()}/month in Ad Spend Looks Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-brand-gray rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600">Leads / Month</p>
            <p className="text-xl font-bold text-brand-blue">{result.leadsAtMonthlyBudget.toFixed(0)}</p>
          </div>
          <div className="bg-brand-gray rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600">Customers / Month</p>
            <p className="text-xl font-bold text-brand-blue">{result.customersPerMonth.toFixed(1)}</p>
          </div>
          <div className="bg-brand-gray rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600">Revenue / Month</p>
            <p className="text-xl font-bold text-brand-blue">${Math.round(result.monthlyRevenue).toLocaleString()}</p>
          </div>
          <div className="bg-brand-gray rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600">Profit / Year</p>
            <p className={`text-xl font-bold ${result.annualProfit >= 0 ? "text-green-600" : "text-red-600"}`}>
              ${Math.round(result.annualProfit).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* SOURCE PRICING REFERENCE */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-base font-bold text-brand-blue mb-3">
          Typical Lead Costs by Source (2026)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {SOURCE_PRICING.map((source) => {
            const lowEnd = parseInt(
              source.typical.replace(/[^0-9]/g, "").slice(0, 2)
            );
            const affordable = lowEnd <= result.maxCostPerLead;
            return (
              <div
                key={source.name}
                className={`flex justify-between items-center rounded-lg p-2 ${
                  affordable ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <span className="font-medium text-gray-700">{source.name}</span>
                <span className="text-gray-600">{source.typical}</span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-gray-600 mt-3">
          Sources highlighted green are at or below your max affordable lead
          cost (${result.maxCostPerLead.toFixed(0)}). Red sources require a
          higher close rate or job value to be profitable.
        </p>
      </div>
    </CalculatorLayout>
  );
}

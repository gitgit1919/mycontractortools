"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function BalusterCalculator() {
  const [railingLength, setRailingLength] = useState<number>(20);
  const [balusterWidth, setBalusterWidth] = useState<number>(1.5);
  const [maxSpacing, setMaxSpacing] = useState<number>(4);
  const [numPosts, setNumPosts] = useState<number>(3);
  const [postWidth, setPostWidth] = useState<number>(3.5);
  const [railingHeight, setRailingHeight] = useState<number>(36);

  // Convert railing length to inches
  const railingLengthIn = railingLength * 12;

  // Total width consumed by posts
  const totalPostWidth = numPosts * postWidth;

  // Usable railing length (between posts) in inches
  const usableLength = railingLengthIn - totalPostWidth;

  // Number of sections between posts
  const numSections = Math.max(1, numPosts - 1);

  // If there are fewer than 2 posts, treat entire length as one section
  const sectionLengths = numPosts >= 2
    ? Array.from({ length: numSections }, () => usableLength / numSections)
    : [usableLength];

  // For each section, calculate balusters needed
  // The spacing between balusters must be <= maxSpacing
  // In a section: (numBalusters * balusterWidth) + ((numBalusters + 1) * spacing) = sectionLength
  // We need spacing <= maxSpacing
  // numBalusters = ceil((sectionLength - maxSpacing) / (balusterWidth + maxSpacing))

  const calcBalustersForSection = (sectionLen: number) => {
    if (sectionLen <= 0) return { count: 0, spacing: 0 };
    // Minimum balusters to keep gap <= maxSpacing
    const minBalusters = Math.ceil(
      (sectionLen - maxSpacing) / (balusterWidth + maxSpacing)
    );
    const count = Math.max(1, minBalusters);
    // Actual spacing with this count
    const totalBalusterWidth = count * balusterWidth;
    const totalGaps = count + 1;
    const actualSpacing = (sectionLen - totalBalusterWidth) / totalGaps;
    return { count, spacing: actualSpacing };
  };

  const sectionResults = sectionLengths.map((len) => calcBalustersForSection(len));
  const totalBalusters = sectionResults.reduce((sum, s) => sum + s.count, 0);
  const avgSpacing = sectionResults.length > 0 ? sectionResults[0].spacing : 0;

  // Code compliance: 4" sphere rule
  const maxGap = Math.max(...sectionResults.map((s) => s.spacing));
  const isCodeCompliant = maxGap <= 4;

  // Materials summary
  const balusterLengthEach = railingHeight; // inches
  const totalBalusterLinearFt = (totalBalusters * balusterLengthEach) / 12;
  const topRailLinearFt = railingLength;
  const bottomRailLinearFt = railingLength;

  return (
    <CalculatorLayout
      title="Baluster & Spindle Calculator"
      description="Calculate the number of balusters or spindles for your railing project. Automatically determines even spacing that meets IRC building code requirements, including the 4-inch sphere rule."
      trade="Carpentry"
      howToUse="Enter your total railing length in feet, the width of each baluster, the maximum allowed spacing (4 inches per IRC code), and the number and width of posts. The calculator determines how many balusters you need per section, the actual spacing between them, and checks compliance with the 4-inch sphere rule. It also provides a total materials list."
      formula="Balusters per Section = ceil((Section Length - Max Spacing) / (Baluster Width + Max Spacing)). Actual Spacing = (Section Length - (Balusters x Baluster Width)) / (Balusters + 1). 4-inch Sphere Rule: no gap wider than 4 inches between balusters."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="railingLength" className="block text-sm font-medium text-gray-700 mb-1">
            Total Railing Length (ft)
          </label>
          <input
            id="railingLength"
            type="number"
            min={1}
            max={200}
            step={0.5}
            value={railingLength}
            onChange={(e) => setRailingLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="balusterWidth" className="block text-sm font-medium text-gray-700 mb-1">
            Baluster Width (inches)
          </label>
          <input
            id="balusterWidth"
            type="number"
            min={0.5}
            max={4}
            step={0.25}
            value={balusterWidth}
            onChange={(e) => setBalusterWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Common: 1.25&quot; (square), 1.5&quot; (turned)</p>
        </div>

        <div>
          <label htmlFor="maxSpacing" className="block text-sm font-medium text-gray-700 mb-1">
            Max Spacing Between Balusters (inches)
          </label>
          <input
            id="maxSpacing"
            type="number"
            min={1}
            max={6}
            step={0.25}
            value={maxSpacing}
            onChange={(e) => setMaxSpacing(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">IRC code max: 4&quot; (no 4&quot; sphere can pass)</p>
        </div>

        <div>
          <label htmlFor="numPosts" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Posts
          </label>
          <input
            id="numPosts"
            type="number"
            min={2}
            max={30}
            value={numPosts}
            onChange={(e) => setNumPosts(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Including start and end posts</p>
        </div>

        <div>
          <label htmlFor="postWidth" className="block text-sm font-medium text-gray-700 mb-1">
            Post Width (inches)
          </label>
          <input
            id="postWidth"
            type="number"
            min={1}
            max={8}
            step={0.25}
            value={postWidth}
            onChange={(e) => setPostWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Standard: 3.5&quot; (4x4 nominal)</p>
        </div>

        <div>
          <label htmlFor="railingHeight" className="block text-sm font-medium text-gray-700 mb-1">
            Railing Height (inches)
          </label>
          <input
            id="railingHeight"
            type="number"
            min={24}
            max={48}
            value={railingHeight}
            onChange={(e) => setRailingHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">IRC minimum: 36&quot; (deck), 34&quot; (stair)</p>
        </div>
      </div>

      {/* Code Compliance */}
      {totalBalusters > 0 && (
        <div className="mt-6">
          {isCodeCompliant ? (
            <div className="bg-green-50 border border-green-300 rounded-lg p-4">
              <p className="text-green-800 font-semibold">
                IRC Code Compliant &mdash; Spacing of {avgSpacing.toFixed(2)}&quot; meets the 4&quot;
                sphere rule.
              </p>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-300 rounded-lg p-4">
              <h3 className="text-red-800 font-semibold mb-2">Code Violation</h3>
              <p className="text-red-700 text-sm">
                Maximum gap of {maxGap.toFixed(2)}&quot; exceeds the IRC 4&quot; sphere rule. A
                4&quot; sphere must not be able to pass between balusters. Reduce the max spacing
                setting or add more balusters.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Baluster Estimate</h2>

        <h3 className="text-md font-semibold text-gray-700 mb-3">Spacing Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Balusters</p>
            <p className="text-2xl font-bold text-brand-blue">{totalBalusters}</p>
            <p className="text-sm text-gray-500">across {numSections} section{numSections !== 1 ? "s" : ""}</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Actual Spacing</p>
            <p className="text-2xl font-bold text-brand-orange">{avgSpacing.toFixed(2)}&quot;</p>
            <p className="text-sm text-gray-500">between balusters</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Balusters per Section</p>
            <p className="text-2xl font-bold text-brand-blue">
              {sectionResults.length > 0 ? sectionResults[0].count : 0}
            </p>
            <p className="text-sm text-gray-500">evenly distributed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Number of Posts</p>
            <p className="text-2xl font-bold text-brand-orange">{numPosts}</p>
            <p className="text-sm text-gray-500">{postWidth}&quot; wide each</p>
          </div>
        </div>

        <h3 className="text-md font-semibold text-gray-700 mb-3">Total Materials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Balusters</p>
            <p className="text-2xl font-bold text-brand-blue">{totalBalusters}</p>
            <p className="text-sm text-gray-500">
              each {railingHeight}&quot; long
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Baluster Linear Feet</p>
            <p className="text-2xl font-bold text-brand-orange">
              {totalBalusterLinearFt.toFixed(1)} ft
            </p>
            <p className="text-sm text-gray-500">total baluster stock</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Top &amp; Bottom Rails</p>
            <p className="text-2xl font-bold text-brand-blue">
              {(topRailLinearFt + bottomRailLinearFt).toFixed(1)} ft
            </p>
            <p className="text-sm text-gray-500">
              {topRailLinearFt} ft top + {bottomRailLinearFt} ft bottom
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

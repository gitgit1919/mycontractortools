"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Calculator {
  name: string;
  href: string;
  description: string;
  icon: string;
  category: string;
  tags: string[];
}

const allCalculators: Calculator[] = [
  {
    name: "HVAC Load Calculator",
    href: "/calculators/hvac-load/",
    description: "Calculate heating and cooling loads for residential and commercial buildings.",
    icon: "🌡️",
    category: "HVAC",
    tags: ["hvac", "heating", "cooling", "btu", "tonnage", "load", "air conditioning", "furnace"],
  },
  {
    name: "Electrical Load Calculator",
    href: "/calculators/electrical-load/",
    description: "Determine total electrical load and service panel size requirements.",
    icon: "⚡",
    category: "Electrical",
    tags: ["electrical", "load", "panel", "amps", "watts", "service", "breaker", "circuit"],
  },
  {
    name: "Plumbing Pipe Sizing",
    href: "/calculators/plumbing-pipe-sizing/",
    description: "Find the right pipe diameter based on fixture units and flow rates.",
    icon: "🔧",
    category: "Plumbing",
    tags: ["plumbing", "pipe", "diameter", "flow", "fixture", "water", "sizing", "gpm"],
  },
  {
    name: "Concrete Volume Calculator",
    href: "/calculators/concrete-volume/",
    description: "Calculate cubic yards of concrete for slabs, footings, and columns.",
    icon: "🏗️",
    category: "General",
    tags: ["concrete", "volume", "cubic yards", "slab", "footing", "column", "pour", "cement"],
  },
  {
    name: "Roofing Material Calculator",
    href: "/calculators/roofing-material/",
    description: "Estimate shingles, underlayment, and materials by roof area and pitch.",
    icon: "🏠",
    category: "Roofing",
    tags: ["roofing", "shingles", "material", "pitch", "square", "underlayment", "ridge", "area"],
  },
  {
    name: "Landscaping Material Calculator",
    href: "/calculators/landscaping-material/",
    description: "Calculate cubic yards of mulch, gravel, topsoil, and other materials.",
    icon: "🌿",
    category: "Landscaping",
    tags: ["landscaping", "mulch", "gravel", "topsoil", "cubic yards", "material", "soil", "rock"],
  },
  {
    name: "Drywall Calculator",
    href: "/calculators/drywall/",
    description: "Estimate sheets of drywall, joint compound, tape, and screws needed.",
    icon: "🪵",
    category: "General",
    tags: ["drywall", "sheetrock", "gypsum", "tape", "mud", "joint compound", "screws", "sheets"],
  },
  {
    name: "Paint Coverage Calculator",
    href: "/calculators/paint-coverage/",
    description: "Calculate gallons of paint needed based on surface area and coats.",
    icon: "🎨",
    category: "Painting",
    tags: ["paint", "coverage", "gallons", "coats", "wall", "ceiling", "trim", "primer"],
  },
  {
    name: "Profit Margin Calculator",
    href: "/calculators/contractor-profit-margin/",
    description: "Calculate gross and net profit margins for jobs and your overall business.",
    icon: "📊",
    category: "Business",
    tags: ["profit", "margin", "markup", "bid", "cost", "revenue", "business", "pricing"],
  },
  {
    name: "Self-Employment Tax Calculator",
    href: "/calculators/self-employment-tax/",
    description: "Estimate your self-employment tax, including Social Security and Medicare.",
    icon: "📋",
    category: "Business",
    tags: ["tax", "self-employment", "social security", "medicare", "quarterly", "income", "1099", "irs"],
  },
  {
    name: "Hourly Rate Calculator",
    href: "/calculators/hourly-rate/",
    description: "Figure out what to charge per hour based on your costs and income goals.",
    icon: "💰",
    category: "Business",
    tags: ["hourly rate", "charge", "pricing", "overhead", "billable", "income", "daily rate"],
  },
  {
    name: "Software Quiz — Which Software Should I Use?",
    href: "/calculators/software-quiz/",
    description: "Answer 5 questions about your trade, team, and priorities — get a personalized software recommendation in 60 seconds.",
    icon: "🧭",
    category: "Business",
    tags: ["software", "quiz", "recommendation", "FSM", "field service", "which software", "compare"],
  },
  {
    name: "Software Cost Calculator (TCO)",
    href: "/calculators/software-cost/",
    description: "Calculate the real total cost of contractor software — including hidden onboarding fees, per-user costs, and payment processing.",
    icon: "📊",
    category: "Business",
    tags: ["software", "cost", "TCO", "total cost", "pricing", "compare", "onboarding", "hidden fees"],
  },
  {
    name: "Stair Calculator",
    href: "/calculators/stair/",
    description: "Calculate risers, treads, stringer length, and stair angle with IRC code compliance checking.",
    icon: "🪜",
    category: "Carpentry",
    tags: ["stair", "riser", "tread", "stringer", "steps", "staircase", "rise", "run", "carpenter"],
  },
  {
    name: "Fence Calculator",
    href: "/calculators/fence/",
    description: "Estimate posts, rails, pickets, concrete, and cost for wood, vinyl, or chain link fences.",
    icon: "🏡",
    category: "General",
    tags: ["fence", "post", "picket", "rail", "privacy", "chain link", "vinyl", "wood fence"],
  },
  {
    name: "Tile & Flooring Calculator",
    href: "/calculators/tile-flooring/",
    description: "Calculate tiles, grout, thinset, and cost for any tile size, pattern, and room dimensions.",
    icon: "🔲",
    category: "Flooring",
    tags: ["tile", "flooring", "grout", "thinset", "ceramic", "porcelain", "floor", "bathroom", "kitchen"],
  },
  {
    name: "Rebar Calculator",
    href: "/calculators/rebar/",
    description: "Calculate rebar quantity, weight, tie wires, and chairs for concrete slab reinforcement.",
    icon: "🔩",
    category: "Concrete",
    tags: ["rebar", "reinforcement", "steel", "grid", "slab", "concrete", "tie wire", "bar"],
  },
  {
    name: "Voltage Drop Calculator",
    href: "/calculators/voltage-drop/",
    description: "Calculate voltage drop, wire sizing, and NEC compliance for electrical circuits.",
    icon: "🔌",
    category: "Electrical",
    tags: ["voltage drop", "wire size", "awg", "nec", "electrical", "copper", "aluminum", "circuit"],
  },
  {
    name: "Deck Calculator",
    href: "/calculators/deck/",
    description: "Estimate deck boards, joists, posts, railing, and cost by material type.",
    icon: "🪵",
    category: "Carpentry",
    tags: ["deck", "decking", "joist", "railing", "baluster", "composite", "trex", "cedar", "pressure treated"],
  },
  {
    name: "Gravel & Aggregate Calculator",
    href: "/calculators/gravel/",
    description: "Calculate tons of gravel, crushed stone, sand, or topsoil by area and depth.",
    icon: "🪨",
    category: "Landscaping",
    tags: ["gravel", "aggregate", "crushed stone", "sand", "topsoil", "fill", "road base", "pea gravel"],
  },
  {
    name: "Brick Calculator",
    href: "/calculators/brick/",
    description: "Estimate bricks, mortar bags, sand, and wall ties for masonry wall construction.",
    icon: "🧱",
    category: "Masonry",
    tags: ["brick", "mortar", "masonry", "wall", "veneer", "bond", "joint", "sand"],
  },
  {
    name: "Board Foot & Lumber Calculator",
    href: "/calculators/board-foot/",
    description: "Calculate board feet, linear feet, and cost for lumber orders and material lists.",
    icon: "📏",
    category: "Carpentry",
    tags: ["board foot", "lumber", "wood", "2x4", "2x6", "linear feet", "timber", "hardwood"],
  },
  {
    name: "Paver Calculator",
    href: "/calculators/paver/",
    description: "Estimate pavers, base gravel, sand, and polymeric sand for patios and walkways.",
    icon: "🧊",
    category: "Landscaping",
    tags: ["paver", "patio", "walkway", "brick", "sand", "base", "polymeric", "herringbone"],
  },
  {
    name: "Concrete Block (CMU) Calculator",
    href: "/calculators/concrete-block/",
    description: "Calculate blocks, mortar, rebar, and grout for masonry walls with bond beams.",
    icon: "🏢",
    category: "Masonry",
    tags: ["concrete block", "cmu", "masonry", "mortar", "grout", "rebar", "block wall"],
  },
  {
    name: "Insulation Calculator",
    href: "/calculators/insulation/",
    description: "Estimate insulation batts, bags, or sheets by R-value, area, and insulation type.",
    icon: "🧤",
    category: "General",
    tags: ["insulation", "r-value", "fiberglass", "cellulose", "spray foam", "attic", "wall", "batt"],
  },
  {
    name: "Carpet Calculator",
    href: "/calculators/carpet/",
    description: "Calculate carpet in square yards, seam length, padding, and cost for rooms.",
    icon: "🟫",
    category: "Flooring",
    tags: ["carpet", "flooring", "square yards", "padding", "seam", "roll", "installation"],
  },
  {
    name: "Asphalt Calculator",
    href: "/calculators/asphalt/",
    description: "Estimate tons of asphalt for driveways, parking lots, and overlays.",
    icon: "🛣️",
    category: "Paving",
    tags: ["asphalt", "driveway", "parking lot", "paving", "hot mix", "overlay", "blacktop"],
  },
  {
    name: "Square Footage Calculator",
    href: "/calculators/square-footage/",
    description: "Calculate area for rectangles, circles, triangles, and L-shaped rooms with unit conversions.",
    icon: "📐",
    category: "General",
    tags: ["square footage", "area", "sq ft", "square yards", "square meters", "room size", "floor area"],
  },
  {
    name: "Wall Framing Calculator",
    href: "/calculators/framing/",
    description: "Calculate studs, plates, headers, sheathing, and nails for wall framing.",
    icon: "🪚",
    category: "Carpentry",
    tags: ["framing", "stud", "wall", "plate", "header", "sheathing", "2x4", "carpenter", "lumber"],
  },
  {
    name: "Siding Calculator",
    href: "/calculators/siding/",
    description: "Estimate siding panels, trim, starter strip, and accessories by wall area.",
    icon: "🏘️",
    category: "General",
    tags: ["siding", "vinyl", "hardie", "fiber cement", "lap", "board and batten", "j-channel"],
  },
  {
    name: "Retaining Wall Calculator",
    href: "/calculators/retaining-wall/",
    description: "Calculate blocks, cap stones, drainage gravel, geogrid, and drain pipe for retaining walls.",
    icon: "🧱",
    category: "Landscaping",
    tags: ["retaining wall", "block", "drainage", "geogrid", "gravel", "landscape", "wall"],
  },
  {
    name: "Roof Pitch Calculator",
    href: "/calculators/roof-pitch/",
    description: "Calculate roof pitch, angle, slope percentage, and area multiplier from rise and run measurements.",
    icon: "📐",
    category: "Roofing",
    tags: ["roof pitch", "slope", "angle", "rise", "run", "rafter", "12:12", "pitch factor"],
  },
  {
    name: "CFM & Airflow Calculator",
    href: "/calculators/cfm-airflow/",
    description: "Calculate required CFM, air changes per hour, and duct velocity for ventilation systems.",
    icon: "💨",
    category: "HVAC",
    tags: ["cfm", "airflow", "ventilation", "duct", "air changes", "ach", "exhaust", "fpm"],
  },
  {
    name: "Beam Span Calculator",
    href: "/calculators/beam-span/",
    description: "Determine maximum beam span by species, size, and load for floor, roof, and deck beams.",
    icon: "🪵",
    category: "Carpentry",
    tags: ["beam", "span", "lumber", "lvl", "header", "load", "floor", "deck"],
  },
  {
    name: "Floor Joist Span Calculator",
    href: "/calculators/floor-joist/",
    description: "Calculate maximum joist span per IRC tables by size, spacing, species, and live load.",
    icon: "📏",
    category: "Carpentry",
    tags: ["floor joist", "span", "2x10", "2x12", "deflection", "spacing", "lumber"],
  },
  {
    name: "French Drain Calculator",
    href: "/calculators/french-drain/",
    description: "Estimate gravel, pipe, landscape fabric, and cost for French drain installation.",
    icon: "🌧️",
    category: "Landscaping",
    tags: ["french drain", "drainage", "gravel", "pipe", "trench", "perforated", "water"],
  },
  {
    name: "Concrete Driveway Cost Calculator",
    href: "/calculators/concrete-driveway/",
    description: "Estimate concrete, reinforcement, and total cost for driveway projects by size and finish type.",
    icon: "🚗",
    category: "Concrete",
    tags: ["driveway", "concrete", "cost", "stamped", "broom finish", "exposed aggregate", "reinforcement"],
  },
  {
    name: "Plywood & Sheathing Calculator",
    href: "/calculators/plywood/",
    description: "Calculate number of plywood sheets, weight, and cost by area and thickness.",
    icon: "🪵",
    category: "Carpentry",
    tags: ["plywood", "sheathing", "osb", "4x8", "sheets", "subfloor", "roof deck"],
  },
  {
    name: "Sand Calculator",
    href: "/calculators/sand/",
    description: "Calculate cubic yards and tons of sand needed for play areas, masonry, pavers, and fill.",
    icon: "🏖️",
    category: "General",
    tags: ["sand", "fill", "play sand", "masonry sand", "paver base", "cubic yards", "tons"],
  },
  {
    name: "Wallpaper Calculator",
    href: "/calculators/wallpaper/",
    description: "Calculate rolls of wallpaper needed with pattern repeat matching and waste factor.",
    icon: "🎨",
    category: "Painting",
    tags: ["wallpaper", "rolls", "pattern repeat", "wall covering", "paste", "hanging"],
  },
  {
    name: "Baluster & Spindle Calculator",
    href: "/calculators/baluster/",
    description: "Calculate baluster quantity and spacing for railings with IRC 4-inch sphere rule compliance.",
    icon: "🪜",
    category: "Carpentry",
    tags: ["baluster", "spindle", "railing", "spacing", "4 inch rule", "deck", "stair"],
  },
  {
    name: "Mortar Calculator",
    href: "/calculators/mortar/",
    description: "Estimate bags of mortar mix and sand for brick or block walls by joint thickness.",
    icon: "🧱",
    category: "Masonry",
    tags: ["mortar", "type n", "type s", "joint", "brick", "block", "masonry", "sand"],
  },
  {
    name: "Sonotube & Concrete Pier Calculator",
    href: "/calculators/sonotube/",
    description: "Calculate concrete volume, bag count, and rebar for cylindrical piers and footings.",
    icon: "🔩",
    category: "Concrete",
    tags: ["sonotube", "pier", "footing", "column", "cylindrical", "post foundation", "deck pier"],
  },
  {
    name: "Snow Load Calculator",
    href: "/calculators/snow-load/",
    description: "Calculate roof snow loads using ASCE 7 factors for exposure, thermal, and slope conditions.",
    icon: "❄️",
    category: "Roofing",
    tags: ["snow load", "roof", "asce 7", "ground snow", "drift", "exposure", "thermal"],
  },
  {
    name: "Rafter Length Calculator",
    href: "/calculators/rafter/",
    description: "Calculate rafter length, ridge height, birdsmouth cut, and tail cut for common and hip rafters.",
    icon: "📐",
    category: "Carpentry",
    tags: ["rafter", "roof framing", "birdsmouth", "ridge", "overhang", "hip rafter", "span"],
  },
  {
    name: "Miter Angle Calculator",
    href: "/calculators/miter-angle/",
    description: "Calculate miter and bevel angles for corners, polygons, and crown molding compound cuts.",
    icon: "🪚",
    category: "Carpentry",
    tags: ["miter", "bevel", "angle", "crown molding", "trim", "compound cut", "corner"],
  },
  {
    name: "Wire Size Calculator",
    href: "/calculators/wire-size/",
    description: "Determine minimum wire gauge by amperage, distance, and voltage with NEC ampacity tables.",
    icon: "🔌",
    category: "Electrical",
    tags: ["wire size", "awg", "ampacity", "nec", "conduit", "copper", "aluminum", "gauge"],
  },
  {
    name: "Gutter & Downspout Calculator",
    href: "/calculators/gutter/",
    description: "Calculate gutters, downspouts, hangers, and accessories by roof area and rainfall intensity.",
    icon: "🌧️",
    category: "Roofing",
    tags: ["gutter", "downspout", "rain", "drainage", "fascia", "hanger", "5 inch", "6 inch"],
  },
  {
    name: "Concrete Steps Calculator",
    href: "/calculators/concrete-steps/",
    description: "Calculate concrete volume, form boards, and IRC code compliance for concrete stairs.",
    icon: "🪜",
    category: "Concrete",
    tags: ["concrete steps", "stairs", "riser", "tread", "form", "pour", "landing"],
  },
  {
    name: "Markup vs Margin Calculator",
    href: "/calculators/markup-margin/",
    description: "Convert between markup and profit margin percentages. The #1 pricing mistake contractors make.",
    icon: "💲",
    category: "Business",
    tags: ["markup", "margin", "profit", "pricing", "selling price", "percentage", "bid"],
  },
  {
    name: "Unit Converter",
    href: "/calculators/unit-converter/",
    description: "Convert between construction units — feet, meters, inches, yards, gallons, liters, and more.",
    icon: "🔄",
    category: "General",
    tags: ["unit", "converter", "feet", "meters", "inches", "yards", "gallons", "liters", "conversion"],
  },
];

const categories = ["All", ...Array.from(new Set(allCalculators.map((c) => c.category)))];

export default function CalculatorsIndex() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allCalculators.filter((calc) => {
      const matchesCategory = activeCategory === "All" || calc.category === activeCategory;
      if (!q) return matchesCategory;
      const matchesSearch =
        calc.name.toLowerCase().includes(q) ||
        calc.description.toLowerCase().includes(q) ||
        calc.tags.some((tag) => tag.includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Calculators</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          Free Contractor Calculators
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          All of our trade-specific and business calculators in one place. Search by name, trade, or keyword.
        </p>
      </header>

      {/* Search and filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search calculators... (e.g., concrete, BTU, profit, pipe)"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-gray-900"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-brand-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg mb-2">No calculators match your search.</p>
          <p className="text-sm">Try a different keyword or clear the filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-orange hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0" aria-hidden="true">{calc.icon}</span>
                <div>
                  <h2 className="font-semibold text-brand-blue group-hover:text-brand-orange transition-colors mb-1">
                    {calc.name}
                  </h2>
                  <p className="text-sm text-gray-600">{calc.description}</p>
                  <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {calc.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <p className="text-center text-sm text-gray-400 mt-8">
        {allCalculators.length} calculators available. More coming soon.
      </p>
    </div>
  );
}

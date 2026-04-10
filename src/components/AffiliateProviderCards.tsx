import { getTrialUrl } from "@/lib/trialUrls";

/**
 * Reusable card grid for affiliate-ready provider recommendations.
 *
 * Drop into startup guide LLC, insurance, hosting, or payroll sections
 * to surface relevant vendor CTAs without rewriting the same JSX in
 * every guide. URLs come from the central trialUrls registry, so
 * swapping in real affiliate links is a one-file change.
 */

type Category = "llc" | "insurance" | "hosting" | "payroll";

interface ProviderCard {
  name: string;
  positioning: string;
  bestFor: string;
  recommended?: boolean;
  recommendedLabel?: string;
}

const PROVIDERS: Record<Category, ProviderCard[]> = {
  llc: [
    {
      name: "Northwest Registered Agent",
      positioning:
        "Privacy-focused LLC formation. Uses their address as your registered agent so your home address stays off public records. $39 + state fee. No surprise upsells.",
      bestFor: "Most contractors who want privacy and a clean experience",
      recommended: true,
      recommendedLabel: "Best for most contractors",
    },
    {
      name: "ZenBusiness",
      positioning:
        "$0 + state fee on the Starter plan. Slick interface and a year of registered agent free. Watch for upsells at checkout — the value plans cost more.",
      bestFor: "Budget-conscious filers who can ignore upsells",
    },
    {
      name: "LegalZoom",
      positioning:
        "Most recognized name in online legal services. Strong attorney consultation add-ons if you want extra hand-holding. Pricier than competitors at $0–$299 plus state fee.",
      bestFor: "Contractors who want a recognizable brand and optional legal help",
    },
  ],

  insurance: [
    {
      name: "NEXT Insurance",
      positioning:
        "Online-first carrier built for small contractors. Instant quote, instant certificates, monthly billing. Strong fit for solo and small crew operations.",
      bestFor: "Solo contractors and small crews who want instant quotes",
      recommended: true,
      recommendedLabel: "Best for fast online quotes",
    },
    {
      name: "Hiscox",
      positioning:
        "Established commercial insurer with deep contractor experience. Strong general liability and professional liability options. Often more competitive on larger payrolls.",
      bestFor: "Established contractors with payroll above $250K",
    },
    {
      name: "Simply Business",
      positioning:
        "Insurance marketplace that quotes you across multiple carriers in one application. Good way to comparison-shop without filling out 5 separate forms.",
      bestFor: "Contractors who want to compare multiple carriers fast",
    },
    {
      name: "Thimble",
      positioning:
        "On-demand and short-term policies (by the hour, day, week, or month). Useful for one-off jobs, rented equipment, or covering a sub for a single project.",
      bestFor: "Contractors needing short-term or job-specific coverage",
    },
  ],

  hosting: [
    {
      name: "Squarespace",
      positioning:
        "Polished templates with hosting included. The fastest path to a professional contractor site. $16–$33/month, no code required.",
      bestFor: "Contractors who want a professional site live in an afternoon",
      recommended: true,
      recommendedLabel: "Fastest to launch",
    },
    {
      name: "Wix",
      positioning:
        "Drag-and-drop builder with the most flexible design control of any all-in-one option. Free tier available; $17–$36/month for premium plans with custom domain.",
      bestFor: "Contractors who want maximum design control without coding",
    },
    {
      name: "Bluehost",
      positioning:
        "WordPress hosting recommended by WordPress.org. ~$3–$10/month with free first-year domain. Best long-term SEO foundation if you plan to invest in content.",
      bestFor: "Contractors planning serious SEO and content marketing",
    },
    {
      name: "SiteGround",
      positioning:
        "Premium WordPress hosting with faster speeds and better support than budget hosts. $3–$8/month introductory. Worth it if your site is mission-critical.",
      bestFor: "Contractors who already run WordPress and want it faster",
    },
  ],

  payroll: [
    {
      name: "Gusto",
      positioning:
        "Full-service payroll with auto tax filing, workers comp integration, contractor 1099 payments, and benefits. ~$40/month + $6/employee. The simplest way to run payroll without a bookkeeper.",
      bestFor: "Contractors hiring their first 1–10 employees",
      recommended: true,
      recommendedLabel: "Best payroll for small contractors",
    },
    {
      name: "QuickBooks",
      positioning:
        "Industry-standard accounting software. Most CPAs already work in it, which saves hours at tax time. Add QuickBooks Payroll if you want one vendor for both. $30–$200/month.",
      bestFor: "Contractors who want one vendor their CPA already knows",
    },
    {
      name: "FreshBooks",
      positioning:
        "Easier-to-use accounting alternative to QuickBooks. Strong invoicing, time tracking, and expense capture. Better for solo operators and small crews. $19–$60/month.",
      bestFor: "Solo contractors who hate QuickBooks complexity",
    },
    {
      name: "Wave",
      positioning:
        "Free accounting and invoicing. Pay only for payment processing or payroll add-ons. Genuinely free for the books — limited features but unbeatable price for solos.",
      bestFor: "Cash-tight solos needing invoicing and basic books",
    },
  ],
};

const CATEGORY_HEADINGS: Record<Category, string> = {
  llc: "Which LLC Formation Service Should You Use?",
  insurance: "Where to Get Contractor Insurance Quotes",
  hosting: "Which Website Builder Should You Use?",
  payroll: "Payroll & Accounting Tools for Your First Hire",
};

const CATEGORY_INTROS: Record<Category, string> = {
  llc:
    "If you'd rather not deal with the state filing portal, these formation services handle the paperwork and act as your registered agent. DIY is fine too — every state lets you file directly online for the state fee alone.",
  insurance:
    "General liability is non-negotiable. Get quotes from at least two of these before you bind a policy — premiums vary widely between carriers for the same coverage.",
  hosting:
    "Two paths: an all-in-one builder (fastest) or WordPress on shared hosting (more flexible, better long-term SEO). Both work for contractors. Pick by how much control you want.",
  payroll:
    "The day you hire your first W-2 employee, you need payroll software. Pair it with accounting from day one so the books stay clean.",
};

interface AffiliateProviderCardsProps {
  category: Category;
  heading?: string;
  intro?: string;
}

export default function AffiliateProviderCards({
  category,
  heading,
  intro,
}: AffiliateProviderCardsProps) {
  const providers = PROVIDERS[category];

  return (
    <>
      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        {heading ?? CATEGORY_HEADINGS[category]}
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        {intro ?? CATEGORY_INTROS[category]}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {providers.map((provider) => {
          const url = getTrialUrl(provider.name);
          if (!url) return null;

          return (
            <div
              key={provider.name}
              className={
                provider.recommended
                  ? "bg-white border-2 border-green-500 rounded-xl p-5 relative"
                  : "bg-white border border-gray-200 rounded-xl p-5"
              }
            >
              {provider.recommended && provider.recommendedLabel && (
                <span className="absolute -top-3 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {provider.recommendedLabel}
                </span>
              )}
              <h4
                className={
                  provider.recommended
                    ? "font-bold text-brand-blue mb-1 mt-2"
                    : "font-bold text-brand-blue mb-1"
                }
              >
                {provider.name}
              </h4>
              <p className="text-sm text-gray-700 mb-2">{provider.positioning}</p>
              <p className="text-xs text-gray-600 mb-3">
                <strong>Best for:</strong> {provider.bestFor}
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
              >
                Visit {provider.name} &rarr;
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

/**
 * Central registry of every software vendor's trial/landing URL.
 *
 * Currently these point at vendor homepages. When affiliate programs are
 * approved, swap the values here for the tracked link from
 * `affiliate-tracking.md` and every CTA across the site updates at once.
 *
 * Keep keys exactly matching the product `name` strings used in review
 * pages and alternatives pages.
 */
export const trialUrls: Record<string, string> = {
  // Tier 1 — top FSM platforms
  Jobber: "https://getjobber.com",
  "Housecall Pro": "https://www.housecallpro.com",
  ServiceTitan: "https://www.servicetitan.com",
  FieldPulse: "https://www.fieldpulse.com",
  FieldEdge: "https://www.fieldedge.com",
  Workiz: "https://www.workiz.com",
  ServiceM8: "https://www.servicem8.com",
  "Service Fusion": "https://www.servicefusion.com",
  Kickserv: "https://www.kickserv.com",
  mHelpDesk: "https://www.mhelpdesk.com",
  Tradify: "https://www.tradifyhq.com",

  // GC / construction management
  Buildertrend: "https://www.buildertrend.com",
  "Contractor Foreman": "https://www.contractorforeman.com",
  Procore: "https://www.procore.com",
  "Houzz Pro": "https://pro.houzz.com",
  Fieldwire: "https://www.fieldwire.com",
  CompanyCam: "https://www.companycam.com",

  // Trade-specific
  JobNimbus: "https://www.jobnimbus.com",
  AccuLynx: "https://www.acculynx.com",
  Roofr: "https://www.roofr.com",
  GorillaDesk: "https://www.gorilladesk.com",
  PaintScout: "https://www.paintscout.com",
  "Aurora Solar": "https://www.aurorasolar.com",
  Maidily: "https://www.maidily.com",
  Aspire: "https://www.youraspire.com",

  // Accounting / payroll
  QuickBooks: "https://quickbooks.intuit.com",
  FreshBooks: "https://www.freshbooks.com",
  Xero: "https://www.xero.com",
  Wave: "https://www.waveapps.com",
  Gusto: "https://gusto.com",

  // LLC formation
  "Northwest Registered Agent": "https://www.northwestregisteredagent.com",
  ZenBusiness: "https://www.zenbusiness.com",
  LegalZoom: "https://www.legalzoom.com",

  // Insurance
  "NEXT Insurance": "https://www.nextinsurance.com",
  Hiscox: "https://www.hiscox.com",
  "Simply Business": "https://www.simplybusiness.com",
  Thimble: "https://www.thimble.com",

  // Website / hosting
  Squarespace: "https://www.squarespace.com",
  Wix: "https://www.wix.com",
  Bluehost: "https://www.bluehost.com",
  SiteGround: "https://www.siteground.com",

  // Misc
  "Monday.com": "https://monday.com",
};

/**
 * Helper: returns the trial URL for a product name, or null if not registered.
 * Use this in CTA buttons so we never render a broken link.
 */
export function getTrialUrl(name: string): string | null {
  return trialUrls[name] ?? null;
}

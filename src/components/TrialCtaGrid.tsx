import { getTrialUrl } from "@/lib/trialUrls";

interface TrialCtaGridProps {
  /** Product names in display order. Names without a registered trial URL are skipped. */
  names: string[];
  /** Optional heading override. */
  heading?: string;
  /** Optional sub-line under the heading. */
  description?: string;
}

/**
 * Equal-weight grid of "Visit X — Start Free Trial" buttons. Used on
 * "alternatives" pages so every recommended product has a clickable
 * trial CTA. URLs come from `src/lib/trialUrls.ts` so swapping in
 * affiliate tracking links later is a one-file change.
 */
export default function TrialCtaGrid({ names, heading, description }: TrialCtaGridProps) {
  const valid = names.filter((n) => getTrialUrl(n));
  if (valid.length === 0) return null;

  return (
    <section className="mb-10 bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold text-brand-blue mb-1">
        {heading ?? "Try these tools free"}
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        {description ??
          "Every option below offers a free trial or demo. We earn a commission if you sign up — but that does not change our recommendations."}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {valid.map((name) => (
          <a
            key={name}
            href={getTrialUrl(name)!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between gap-2 bg-brand-orange text-white font-medium text-sm px-4 py-3 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            <span>Visit {name}</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}

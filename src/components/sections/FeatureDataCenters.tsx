import Link from "next/link";

// Section 6 — Feature 3: Geographically Diverse Data Centers (issue #49).
// Supports the sovereignty/governance positioning — deliberately NOT a
// headline claim (smaller type, no gradient/glow treatment used elsewhere on
// the page), framed on infrastructure jurisdiction and data governance, never
// on model origin or GPU-partner relationships. Competitive bar is DeepInfra
// ("secure US-based data centers" + SOC 2/ISO 27001), not GMI Cloud, per
// CLAUDE.md → "Feature 3 — Geographically Diverse Data Centers (Section 6)".
export function FeatureDataCenters() {
  return (
    <section
      aria-labelledby="feature-data-centers-heading"
      className="px-6 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-xs font-semibold text-slate-400">
            Feature 3
          </p>
          <h2
            id="feature-data-centers-heading"
            className="mt-2 text-xl font-semibold text-white sm:text-2xl"
          >
            Data centers across multiple jurisdictions
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Aurora runs open-weight models from data centers in multiple
            jurisdictions, with access controls you can verify. Contact us
            to discuss data residency and access requirements.
          </p>
          <Link
            href="/contact?interest=Talk+to+an+engineer"
            className="mt-4 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
          >
            Ask about data residency
          </Link>
        </div>
      </div>
    </section>
  );
}

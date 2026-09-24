import Link from "next/link";

// Section 7 — Feature 4: High-Throughput Storage (issue #50). Least
// differentiated vs. competitors — mentioned last, kept brief per CLAUDE.md
// → "Feature 4 — High-Throughput Storage (Section 7)".
// Given the same small bordered-card treatment as Feature 3 (rather than
// bare text) after the Brand agent review (three-agent review loop, Epic
// #43) read the bare-text version as an unfinished stub next to Features
// 1–2's fuller layout — the card makes the brevity read as deliberate.
export function FeatureStorage() {
  return (
    <section
      aria-labelledby="feature-storage-heading"
      className="px-6 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-xs font-semibold text-slate-400">Feature 4</p>
          <h2
            id="feature-storage-heading"
            className="mt-2 text-xl font-semibold text-white sm:text-2xl"
          >
            High-throughput storage
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Lower-cost storage for agent workloads.
          </p>
          <Link
            href="/contact?interest=Talk+to+an+engineer"
            className="mt-4 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
          >
            Talk to an engineer
          </Link>
        </div>
      </div>
    </section>
  );
}

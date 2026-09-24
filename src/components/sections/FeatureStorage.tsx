import Link from "next/link";

// Section 7 — Feature 4: High-Throughput Storage (issue #50). Least
// differentiated vs. competitors — mentioned last, kept brief per CLAUDE.md
// → "Feature 4 — High-Throughput Storage (Section 7)".
export function FeatureStorage() {
  return (
    <section
      aria-labelledby="feature-storage-heading"
      className="px-6 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
          <p className="text-xs font-semibold text-slate-400 sm:text-right">
            Feature 4
          </p>
          <div>
            <h2
              id="feature-storage-heading"
              className="text-xl font-semibold text-white"
            >
              High-throughput storage
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Lower-cost storage for agent workloads.{" "}
              <Link
                href="/contact?interest=Talk+to+an+engineer"
                className="font-medium text-violet-400 hover:text-violet-300"
              >
                Talk to an engineer
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

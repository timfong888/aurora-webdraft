// ─── Performance Metrics ──────────────────────────────────────────────────────
// Placeholder numbers — AC #9 permits placeholders. Figures are AI-drafted to
// fit Aurora's reserved/optimization messaging and are flagged [revised] until
// real benchmarks land.
const STATS = [
  {
    value: "3.5×",
    label: "More useful work per reserved GPU",
    detail: "Complexity-based routing inside your reservation",
  },
  {
    value: "60%",
    label: "Lower effective cost per useful token",
    detail: "Frontier models only where a request needs them",
  },
  {
    value: "0%",
    label: "Budget variance vs. plan",
    detail: "Spend reserved in advance, rate-limited to stay flat",
  },
  {
    value: "99.9%",
    label: "Capacity availability",
    detail: "Owned GPUs — online through the Blackwell crunch",
  },
];

export function PerformanceStats() {
  return (
    <section
      className="border-y border-white/10 bg-slate-900 px-6 py-16 sm:px-8"
      aria-labelledby="performance-stats-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="performance-stats-heading"
          className="mb-12 text-center text-sm font-semibold uppercase tracking-widest text-violet-400"
        >
          Reserved capacity, measured in outcomes{" "}
          <span className="text-slate-500">[revised]</span>
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium text-slate-200">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">{stat.detail}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PerformanceStats } from "@/components/PerformanceStats";

// ─── Social Proof ────────────────────────────────────────────────────────────
const LOGOS = [
  "Actively", "Astrocade", "Nura", "Qualitate", "[ Your company ]",
];

// ─── Pillars ─────────────────────────────────────────────────────────────────
const PILLARS = [
  {
    label: "Predictable Cost",
    headline: "A fixed monthly cost, not a bill that grows with every request.",
    features: [
      "Reserve capacity at a fixed monthly price",
      "Rate-limiting inside the reservation keeps spend flat",
      "Aurora owns the DC and GPUs — holds cost fixed where routers can't",
    ],
    benefit: "Forecastable spend and protected margins even as agentic consumption explodes.",
    cta: { label: "See Pricing", href: "/pricing" },
    icon: "◈",
  },
  {
    label: "Token Optimization",
    headline: "More useful work per GPU.",
    features: [
      "Complexity-based multi-model routing inside your reservation",
      "Run fine-tuned open-source models — bring your LoRA",
      "Frontier models only where a request truly needs them",
    ],
    benefit: "Lower effective cost per useful token; the right model for each step of an agent loop.",
    cta: { label: "See How It Works", href: "/products" },
    icon: "◎",
  },
  {
    label: "Production-Ready Capacity",
    headline: "Built for production scale, not experiments.",
    features: [
      "Owned GPU capacity — available now through the Blackwell crunch",
      "Managed serving — zero infra ops burden",
      "Latency control when others are booked out",
    ],
    benefit: "Capacity when you need it, performance you can rely on.",
    cta: { label: "Check Availability", href: "/contact" },
    icon: "◉",
  },
];

// ─── Alternatives ─────────────────────────────────────────────────────────────
const ALTERNATIVES = [
  {
    name: "Per-token APIs",
    examples: "OpenAI, Anthropic",
    limitation: "Bill scales with every agent request — success becomes a runaway cost",
    aurora: "Fixed reserved cost regardless of token volume",
  },
  {
    name: "Router-style services",
    examples: "LiteLLM, OpenRouter",
    limitation: "Still per-token and variable — optimize price, not volume",
    aurora: "Optimization built into the serving layer on top of your reservation",
  },
  {
    name: "Raw GPU neoclouds",
    examples: "Lambda, Together, RunPod",
    limitation: "You carry the ops burden and self-optimize routing",
    aurora: "Managed serving + complexity routing built in",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col bg-slate-950 text-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-8 lg:px-12">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.25),transparent)]"
        />
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
            The Token Optimization Cloud
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Per-token pricing hands every agent{" "}
            <span className="text-violet-400">an unlimited credit card.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Reserve your capacity and Aurora optimizes every token against it —
            full agentic throughput at a fixed, predictable cost, instead of a
            per-token bill with no ceiling.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-violet-600 px-8 text-white hover:bg-violet-500"
              )}
            >
              Reserve Capacity
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "border border-white/20 bg-white/5 px-8 text-white hover:bg-white/10"
              )}
            >
              Talk to Us
            </Link>
          </div>

          {/* Partner / credential badge */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-emerald-400" fill="currentColor" aria-hidden="true">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
              <span className="text-xs font-semibold text-slate-300">NVIDIA Partner</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-violet-400" fill="currentColor" aria-hidden="true">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs font-semibold text-slate-300">Blackwell Ready</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="text-xs font-semibold text-slate-300">Norway · Canada · Texas · New York</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-slate-900/50 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            Trusted by AI teams putting agentic workloads into production
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-slate-400"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Agentic AI maxes tokens by default.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Multi-step reasoning, tool loops, and agent fan-out consume tokens
            with no natural ceiling. Per-token prices are falling — but agentic
            consumption is rising faster. So total spend climbs for every team
            with real production workloads.
          </p>
          <div className="mt-8 rounded-xl border border-red-500/20 bg-red-500/5 px-6 py-5">
            <p className="text-base font-medium text-red-300">
              Cheaper tokens don&apos;t save you when you consume them faster than
              they get cheap.
            </p>
          </div>
        </div>
      </section>

      {/* ── Proof Bar ─────────────────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-slate-900 px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                The math
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                max(tokens) has no upper bound.
                <br />
                Your budget does.
              </h2>
              <p className="mt-4 text-slate-300">
                Token maxing is <span className="font-mono font-bold text-red-400">O(N)</span>.
                Optimization is <span className="font-mono font-bold text-emerald-400">O(1)</span>.
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Under per-token pricing, every new agent capability, every
                longer reasoning chain, every fan-out adds directly to your
                bill. Aurora decouples capability from cost.
              </p>
            </div>
            {/* Chart */}
            <div className="rounded-xl border border-white/10 bg-slate-950 p-6">
              <svg viewBox="0 0 300 180" className="w-full" aria-label="Token maxing O(N) vs Aurora O(1) chart">
                <defs>
                  <linearGradient id="redGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[40, 80, 120, 160].map((y) => (
                  <line key={y} x1="40" y1={y} x2="280" y2={y} stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                ))}
                {/* Budget ceiling */}
                <line x1="40" y1="60" x2="280" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 3" />
                <text x="284" y="64" fontSize="9" fill="#94a3b8">Budget</text>
                {/* Axes */}
                <line x1="40" y1="160" x2="280" y2="160" stroke="#475569" strokeWidth="1.5" />
                <line x1="40" y1="20" x2="40" y2="160" stroke="#475569" strokeWidth="1.5" />
                {/* Axis labels */}
                <text x="155" y="176" fontSize="9" fill="#64748b" textAnchor="middle">Agent usage / time →</text>
                <text x="12" y="95" fontSize="9" fill="#64748b" textAnchor="middle" transform="rotate(-90,12,95)">Cost →</text>
                {/* Red area fill under rising line */}
                <polygon points="40,155 280,30 280,160 40,160" fill="url(#redGrad)" />
                {/* Red rising line — Token Maxing O(N) */}
                <polyline points="40,155 100,120 160,80 220,45 280,20" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinejoin="round" />
                {/* Green flat line — Aurora O(1) */}
                <line x1="40" y1="100" x2="280" y2="100" stroke="#10b981" strokeWidth="2.5" />
                {/* Labels */}
                <text x="170" y="28" fontSize="9" fill="#ef4444" fontWeight="bold">Token Maxing — O(N)</text>
                <text x="170" y="95" fontSize="9" fill="#10b981" fontWeight="bold">Aurora reserved — O(1)</text>
                {/* Dots */}
                <circle cx="280" cy="20" r="3" fill="#ef4444" />
                <circle cx="280" cy="100" r="3" fill="#10b981" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars ───────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How Aurora holds the line
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.label}
                className="flex flex-col rounded-xl border border-white/10 bg-slate-900 p-6"
              >
                <span className="mb-3 text-2xl text-violet-400" aria-hidden="true">
                  {pillar.icon}
                </span>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
                  {pillar.label}
                </p>
                <h3 className="mb-4 text-lg font-semibold leading-snug text-white">
                  {pillar.headline}
                </h3>
                <ul className="mb-4 flex-1 space-y-2">
                  {pillar.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mb-5 text-sm text-slate-400">{pillar.benefit}</p>
                <Link
                  href={pillar.cta.href}
                  className="text-sm font-medium text-violet-400 hover:text-violet-300"
                >
                  {pillar.cta.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Performance Metrics ───────────────────────────────────────────── */}
      <PerformanceStats />

      {/* ── Finance / ROI ─────────────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-slate-900 px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
                For Finance
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Token maxing isn&apos;t a budget overrun — it&apos;s a broken cost structure.
              </h2>
              <p className="mt-5 text-slate-300">
                AI inference is becoming your largest variable COGS line. Gross
                margin erodes exactly as you scale. Per-token billing hands
                every capability improvement directly to your cloud provider.
              </p>
              <p className="mt-4 text-slate-300">
                Aurora converts variable, uncapped COGS into a fixed reserved
                cost — predictable gross margin, defensible unit economics, no
                budget variance at board time.
              </p>
              <p className="mt-6 rounded-lg border border-violet-500/30 bg-violet-500/10 px-5 py-4 text-sm font-medium text-violet-200">
                Optimization fixes the unit economics.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "Cost per request", desc: "Fixed, not variable" },
                { metric: "Gross margin %", desc: "Protected as you scale" },
                { metric: "$/customer", desc: "Predictable unit economics" },
                { metric: "Budget variance", desc: "Zero — reserved in advance" },
              ].map((item) => (
                <div
                  key={item.metric}
                  className="rounded-lg border border-white/10 bg-slate-950 p-4"
                >
                  <p className="text-sm font-semibold text-white">{item.metric}</p>
                  <p className="mt-1 text-xs text-emerald-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Aurora ────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why not just use what you already have?
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-slate-900">
                  <th className="px-5 py-4 text-left font-semibold text-slate-300">Alternative</th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-300">The problem</th>
                  <th className="px-5 py-4 text-left font-semibold text-emerald-400">Aurora</th>
                </tr>
              </thead>
              <tbody>
                {ALTERNATIVES.map((row, i) => (
                  <tr
                    key={row.name}
                    className={cn(
                      "border-b border-white/10 last:border-0",
                      i % 2 === 0 ? "bg-slate-950" : "bg-slate-900/50"
                    )}
                  >
                    <td className="px-5 py-4">
                      <p className="font-medium text-white">{row.name}</p>
                      <p className="text-xs text-slate-500">{row.examples}</p>
                    </td>
                    <td className="px-5 py-4 text-slate-400">{row.limitation}</td>
                    <td className="px-5 py-4 text-slate-200">{row.aurora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            Only Aurora owns the hardware — so only Aurora can sell a fixed cost.
            Routers and resellers can&apos;t escape per-token billing.
          </p>
        </div>
      </section>

      {/* ── CTA Strip ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-20 sm:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(124,58,237,0.2),transparent)]"
        />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Beyond Token Maxing: The Path to Profitable AI
          </h2>
          <p className="mt-4 text-slate-300">
            An evening on the economics of agentic AI — for the engineers
            building it and the finance leaders funding it.
          </p>
          <p className="mt-2 text-sm font-medium text-violet-400">
            June 30, 2026 · Frontier Tower, San Francisco
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-violet-600 px-8 text-white hover:bg-violet-500"
              )}
            >
              Reserve Your Spot
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "border border-white/20 bg-white/5 px-8 text-white hover:bg-white/10"
              )}
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 px-6 py-12 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Product</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/products" className="hover:text-white">Inference</Link></li>
                <li><Link href="/products" className="hover:text-white">GPU Access</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Developers</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/docs" className="hover:text-white">API Reference</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Company</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/company" className="hover:text-white">About</Link></li>
                <li><Link href="/customers" className="hover:text-white">Customers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Newsletter</p>
              <p className="text-sm text-slate-400">Updates on token optimization and agentic AI economics.</p>
              <Link href="/contact" className="mt-3 inline-block text-sm font-medium text-violet-400 hover:text-violet-300">
                Stay in touch →
              </Link>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-sm font-bold text-white">
              <span className="text-violet-400">▲</span> Aurora
            </p>
            <p className="text-xs text-slate-500">© 2026 Aurora. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

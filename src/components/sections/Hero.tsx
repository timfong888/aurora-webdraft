import Link from "next/link";
import Image from "next/image";

// Section 2 — Hero, MVP v1 (9/28).
// Stacked composition: eyebrow, headline, subhead with a cycling persona word,
// one CTA, then a mock of Aurora's tile workspace with one agent per
// department. The tile whose department is showing in the subhead glows.
//
// The tile activity text is illustrative placeholder content — replace with
// real product output before this ships to production.

const PERSONAS = ["marketing", "sales ops", "product", "devops", "finance"];

type Tile = {
  path: string;
  dot: string;
  lines: { text: string; tone?: "bright" | "teal" }[];
  status: string;
  statusDot: string;
  delay: string;
};

const TILES: Tile[] = [
  {
    path: "agents/marketing",
    dot: "bg-amber",
    lines: [
      { text: "draft launch email v3", tone: "bright" },
      { text: "→ 2 variants · tone: plain" },
      { text: "→ awaiting review" },
    ],
    status: "running · 12 tasks · 2m ago",
    statusDot: "bg-teal",
    delay: "",
  },
  {
    path: "agents/sales-ops",
    dot: "bg-amber",
    lines: [
      { text: "sync leads → CRM", tone: "bright" },
      { text: "→ 214 rows · 9 deduped" },
      { text: "→ next run 06:00 UTC" },
    ],
    status: "running · 38 tasks · 40s ago",
    statusDot: "bg-teal",
    delay: "tile-d2",
  },
  {
    path: "agents/product",
    dot: "bg-teal",
    lines: [
      { text: "spec: billing-v2.md", tone: "bright" },
      { text: "→ 3 open questions" },
      { text: "→ linked 6 issues" },
    ],
    status: "review · 7 tasks · 11m ago",
    statusDot: "bg-amber",
    delay: "tile-d3",
  },
  {
    path: "agents/devops",
    dot: "bg-teal",
    lines: [
      { text: "deploy prod-01", tone: "bright" },
      { text: "→ tests 212 passed · 0 failed" },
      { text: "→ live · prod-01.aurora.run", tone: "teal" },
    ],
    status: "done · 1,024 tasks · 3m ago",
    statusDot: "bg-teal",
    delay: "tile-d4",
  },
  {
    path: "agents/finance",
    dot: "bg-faint",
    lines: [
      { text: "close: September invoices", tone: "bright" },
      { text: "→ 3 flagged for review" },
      { text: "→ storage: segregated · 12 GB" },
    ],
    status: "queued · 5 tasks · 1h ago",
    statusDot: "bg-faint",
    delay: "tile-d5",
  },
];

const RAIL = [
  { name: "marketing", dot: "bg-amber" },
  { name: "sales-ops", dot: "bg-amber" },
  { name: "product", dot: "bg-teal" },
  { name: "devops", dot: "bg-teal" },
  { name: "finance", dot: "bg-faint" },
];

function AuroraSweep() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 760"
      className="pointer-events-none absolute left-1/2 top-0 h-[760px] w-[1440px] -translate-x-1/2"
    >
      <defs>
        <filter id="aur-soft" x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="52" />
        </filter>
        <linearGradient id="aur-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2FE0B4" stopOpacity="0" />
          <stop offset="0.3" stopColor="#2FE0B4" stopOpacity="0.55" />
          <stop offset="0.7" stopColor="#2F7BE0" stopOpacity="0.5" />
          <stop offset="1" stopColor="#2F7BE0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M-80 330 C 260 200, 560 400, 880 250 S 1300 120, 1540 260"
        stroke="url(#aur-grad)"
        strokeWidth="150"
        fill="none"
        filter="url(#aur-soft)"
      />
    </svg>
  );
}

function TileHeader({ path, dot }: { path: string; dot: string }) {
  return (
    <div className="flex h-[34px] shrink-0 items-center gap-2 border-b border-line bg-surface-2 px-2.5 font-mono text-xs text-cream">
      <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
      {path}
      <span className="ml-auto tracking-[0.15em] text-faint" aria-hidden="true">
        &gt;_ ⧉ ···
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-label="Hero"
      id="top"
      className="relative flex flex-col items-center overflow-hidden border-b border-line px-6 pt-20 sm:px-10 lg:px-16"
    >
      <div className="hero-grid absolute inset-0 opacity-55" aria-hidden="true" />
      <AuroraSweep />

      <div className="relative z-10 flex max-w-[860px] flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_0_4px_rgba(95,212,193,0.18)]" />
          <span className="eyebrow">Agent Cloud</span>
        </div>
        <h1 className="font-display text-5xl font-medium leading-[1.04] tracking-[-0.02em] text-cream sm:text-6xl lg:text-[68px]">
          Where your agents work in the cloud.
        </h1>
        <p className="max-w-[640px] text-lg leading-relaxed text-dim sm:text-xl">
          Secure workspaces with compute and storage so{" "}
          <span className="cyc" aria-label="marketing, sales ops, product, devops, finance">
            {PERSONAS.map((p) => (
              <span key={p} aria-hidden="true">
                {p}
              </span>
            ))}
          </span>{" "}
          can prompt agents that build, run and ship.
        </p>
        <div className="mt-2">
          <Link
            href="/contact?interest=Start+for+Free"
            className="btn-primary px-[30px] py-4 text-base"
          >
            Start for Free
          </Link>
        </div>
      </div>

      {/* Tile workspace — modeled on the product's own tile UI */}
      <div
        className="relative z-10 -mb-px mt-16 flex w-full max-w-[1312px] flex-col overflow-hidden rounded-t-2xl border border-b-0 border-line bg-ink shadow-[0_-20px_80px_rgba(47,224,180,0.06)]"
        aria-label="Illustration of an Aurora workspace with one agent tile per department"
      >
        <div className="flex h-11 shrink-0 items-center gap-4 border-b border-line bg-surface px-4">
          <Image src="/aurora-logo.png" alt="" width={54} height={20} className="h-5 w-auto" />
          <div className="flex gap-1 text-[13px]">
            <span className="px-3 py-1.5 text-dim">Home</span>
            <span className="-mb-px rounded-t-md border border-b-ink border-line bg-ink px-3 py-1.5 text-cream">
              Agents
            </span>
            <span className="px-3 py-1.5 text-dim">Backoffice</span>
            <span className="px-2.5 py-1.5 text-faint">+</span>
          </div>
          <div className="ml-auto hidden gap-2 sm:flex">
            <span className="tag tag-teal">● docs</span>
            <span className="tag">RBAC on</span>
          </div>
        </div>

        <div className="flex min-h-[380px]">
          <div className="hidden w-[200px] shrink-0 flex-col gap-0.5 border-r border-line bg-surface px-2 py-3 lg:flex">
            <span className="px-2 pb-2 text-[11px] text-faint">+ folder</span>
            <span className="px-2 pb-1 pt-1.5 text-[11px] uppercase tracking-[0.1em] text-faint">
              Workspace <span className="text-amber">5</span>
            </span>
            {RAIL.map((r) => (
              <span
                key={r.name}
                className="flex items-center gap-2 rounded-md px-2 py-[5px] font-mono text-xs text-dim"
              >
                <span className={`h-2 w-2 rounded-full ${r.dot}`} />
                {r.name}
              </span>
            ))}
            <span className="px-2 pb-1 pt-3 text-[11px] uppercase tracking-[0.1em] text-faint">
              Backoffice <span className="text-amber">2</span>
            </span>
            {["billing", "usage-stats"].map((n) => (
              <span
                key={n}
                className="flex items-center gap-2 rounded-md px-2 py-[5px] font-mono text-xs text-faint"
              >
                <span className="h-2 w-2 rounded-full bg-faint" />
                {n}
              </span>
            ))}
          </div>

          <div className="grid flex-1 grid-cols-1 gap-3 p-3.5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {TILES.map((t) => (
              <div key={t.path} className={`tile tile-live ${t.delay}`}>
                <TileHeader path={t.path} dot={t.dot} />
                <div className="flex flex-1 flex-col gap-1.5 p-3 font-mono text-xs leading-relaxed text-dim">
                  {t.lines.map((l) => (
                    <span
                      key={l.text}
                      className={
                        l.tone === "bright" ? "text-cream" : l.tone === "teal" ? "text-teal" : ""
                      }
                    >
                      {l.text}
                    </span>
                  ))}
                  <span className="mt-auto flex items-center gap-2 text-[11px] text-faint">
                    <span className={`h-1.5 w-1.5 rounded-full ${t.statusDot}`} />
                    {t.status}
                  </span>
                </div>
              </div>
            ))}
            <div className="tile border-dashed">
              <TileHeader path="shell" dot="bg-faint" />
              <div className="flex flex-1 flex-col gap-1.5 p-3 font-mono text-xs leading-relaxed text-dim">
                <span>
                  <span className="text-faint">$</span> aurora{" "}
                  <span className="text-amber">[actual command goes here]</span>
                </span>
                <span className="mt-auto flex items-center gap-2">
                  <span className="text-faint">&gt;</span>
                  <span className="h-[13px] w-[7px] bg-teal" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

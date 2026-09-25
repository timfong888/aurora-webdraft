import Link from "next/link";

// Section 3 — Primary Use Case (issue #46). Replaces the old "Social proof
// bar." This is the primary conversion narrative and the primary SEO angle
// ("alternative to Together AI, Fireworks AI, Baseten"), so the competitor
// names and the switch narrative are rendered as real crawlable text — never
// baked into an image. Copy source: CLAUDE.md → "Primary Use Case (Section 3)".
const ALTERNATIVES = ["Together AI", "Fireworks AI", "Baseten"];

export function PrimaryUseCase() {
  return (
    <section
      aria-label="Switch from Together AI, Fireworks AI, or Baseten"
      className="border-y border-white/10 bg-slate-900 px-6 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-violet-400">
          Already on {ALTERNATIVES.join(", ")}?
        </p>
        {/* [revised] Headline phrasing is new; the underlying claim is
            verbatim from CLAUDE.md's Primary Use Case section. */}
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Switch to Aurora. Same open-weight models, agent-native workspace.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Aurora is the nimble, agent-native alternative to Together AI,
          Fireworks AI, and Baseten — the same open-weight models you already
          run, on a workspace built for agents from the ground up.
        </p>
        <div className="mt-8">
          <Link
            href="/contact?interest=Start+now"
            className="text-sm font-medium text-violet-400 hover:text-violet-300"
          >
            See how the switch works
          </Link>
        </div>
      </div>
    </section>
  );
}

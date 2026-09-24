import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Section 5 — Feature 2: Secure Agent Workspaces (issue #48). The
// differentiator, not the traffic driver — this is the "Agent Cloud"
// category claim. Names the actual capability rather than asserting the
// category alone (Modal and GMI Cloud both already contest generic "agent"
// language — see CLAUDE.md → "Competitive Reference").
// Copy source: CLAUDE.md → "Feature 2 — Secure Agent Workspaces (Section 5)".
const FEATURES = [
  "Secure, full-RBAC agent environments with API access inside the workspace",
  "Dedicated, segregated compute and storage for agents to build and deploy",
  "Sandboxes for agentic workloads",
  "Hosted deployment environments to build and ship to production",
];

export function FeatureAgentWorkspace() {
  return (
    <>
      {/* Visual divider — separates the inference lead-gen section (Feature 1)
          from the differentiator (Feature 2), per #48's AC. */}
      <div className="border-t border-white/10 bg-slate-900" aria-hidden="true" />

      <section
        id="agent-workspace"
        aria-labelledby="feature-agent-workspace-heading"
        className="border-b border-white/10 bg-slate-900 px-6 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-violet-400">
              Feature 2, the Agent Cloud category claim
            </p>
            <h2
              id="feature-agent-workspace-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Secure agent workspaces
            </h2>
            <p className="mt-4 text-slate-300">
              Persisted, secure compute where agents build, run, and ship —
              not raw GPU rental.
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 rounded-lg border border-white/10 bg-slate-950 p-4 text-sm text-slate-300"
              >
                <span className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact?interest=Start+now"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-violet-600 px-8 text-white hover:bg-violet-500"
              )}
            >
              Start now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

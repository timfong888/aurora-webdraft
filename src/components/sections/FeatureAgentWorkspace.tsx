// Section 5 — Secure Agent Workspaces, MVP v1.
const BULLETS = [
  "Full-RBAC agent environments, not shared tenancy",
  "Hosted deployment — build and ship without leaving the workspace",
  "Production-ready compute and storage for every agent",
];

const CAPABILITIES = [
  "API access within the workspace",
  "Sandboxes for agentic workloads",
  "Deploy straight to production",
];

export function FeatureAgentWorkspace() {
  return (
    <section
      id="agent-workspace"
      aria-labelledby="workspace-heading"
      className="scroll-mt-20 border-b border-line bg-surface px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-1 flex-col gap-4 rounded-[14px] border border-line bg-surface p-7">
          <div className="flex gap-2.5">
            <div className="flex flex-1 flex-col gap-2 rounded-[10px] bg-surface-2 p-4">
              <span className="text-xs text-faint">Compute</span>
              <span className="text-[15px] text-cream">Segregated · dedicated</span>
            </div>
            <div className="flex flex-1 flex-col gap-2 rounded-[10px] bg-surface-2 p-4">
              <span className="text-xs text-faint">Storage</span>
              <span className="text-[15px] text-cream">Persisted per agent</span>
            </div>
          </div>
          <ul className="flex flex-col gap-2.5 rounded-[10px] bg-surface-2 p-4" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c} className="flex items-center justify-between gap-4">
                <span className="text-sm text-cream">{c}</span>
                <span className="tag">enabled</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex max-w-[520px] flex-1 flex-col gap-4">
          <span className="eyebrow">Agent workspace</span>
          <h2
            id="workspace-heading"
            className="font-display text-3xl font-medium leading-[1.15] text-cream sm:text-[34px]"
          >
            Secure agent workspaces.
          </h2>
          <p className="text-[17px] leading-relaxed text-dim">
            Secure environments where agents build, run and ship.
          </p>
          <ul className="mt-1.5 flex flex-col gap-2.5" role="list">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-baseline gap-2.5 text-[15px] text-cream">
                <span className="text-amber" aria-hidden="true">
                  —
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

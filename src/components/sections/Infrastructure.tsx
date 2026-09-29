import Link from "next/link";

// Section 6 — Infrastructure, MVP v1 (replaces FeatureDataCenters and
// FeatureStorage). Three tiles linking to the sub-pages. Illustrations are
// original inline SVGs in the page's own palette.

function GpuIllustration() {
  return (
    <svg aria-hidden="true" width="220" height="120" viewBox="0 0 220 120" fill="none" strokeWidth="1.5">
      <rect x="46" y="18" width="128" height="84" rx="6" stroke="var(--color-line)" fill="var(--color-surface)" />
      <rect x="74" y="34" width="72" height="52" rx="3" stroke="var(--color-teal)" fill="rgba(95,212,193,0.08)" />
      <path d="M84 44h52M84 54h52M84 64h52M84 74h52" stroke="var(--color-teal)" strokeOpacity="0.5" />
      <path d="M94 34v52M110 34v52M126 34v52" stroke="var(--color-teal)" strokeOpacity="0.5" />
      <path d="M46 30h-14M46 44h-14M46 58h-14M46 72h-14M46 86h-14M174 30h14M174 44h14M174 58h14M174 72h14M174 86h14" stroke="var(--color-faint)" />
      <circle cx="60" cy="90" r="3" fill="var(--color-amber)" />
    </svg>
  );
}

function DataCenterIllustration() {
  return (
    <svg aria-hidden="true" width="220" height="120" viewBox="0 0 220 120" fill="none" strokeWidth="1.5">
      <path d="M30 100h160" stroke="var(--color-line)" />
      <rect x="42" y="40" width="34" height="60" stroke="var(--color-faint)" fill="var(--color-surface)" />
      <rect x="84" y="24" width="34" height="76" stroke="var(--color-teal)" fill="rgba(95,212,193,0.08)" />
      <rect x="126" y="52" width="34" height="48" stroke="var(--color-faint)" fill="var(--color-surface)" />
      <path d="M48 50h22M48 60h22M48 70h22M48 80h22M48 90h22" stroke="var(--color-faint)" strokeOpacity="0.6" />
      <path d="M90 34h22M90 44h22M90 54h22M90 64h22M90 74h22M90 84h22M90 94h22" stroke="var(--color-teal)" strokeOpacity="0.6" />
      <path d="M132 62h22M132 72h22M132 82h22M132 92h22" stroke="var(--color-faint)" strokeOpacity="0.6" />
      <path d="M168 100v-30l14-8" stroke="var(--color-amber)" strokeDasharray="3 3" />
      <circle cx="182" cy="62" r="3" fill="var(--color-amber)" />
    </svg>
  );
}

function WhiteLabelIllustration() {
  return (
    <svg aria-hidden="true" width="220" height="120" viewBox="0 0 220 120" fill="none" strokeWidth="1.5">
      <path d="M70 84a18 18 0 0 1 2-36 26 26 0 0 1 50-8 20 20 0 0 1 34 12 16 16 0 0 1-4 32z" stroke="var(--color-teal)" fill="rgba(95,212,193,0.08)" />
      <rect x="92" y="60" width="52" height="18" rx="3" stroke="var(--color-amber)" fill="var(--color-surface)" />
      <path d="M100 69h36" stroke="var(--color-amber)" strokeDasharray="4 3" />
      <path d="M52 100h116" stroke="var(--color-line)" />
      <path d="M30 40l10 4-10 4M180 40l10 4-10 4" stroke="var(--color-faint)" />
    </svg>
  );
}

const TILES = [
  {
    href: "/gpu-clusters",
    title: "GPU as a Service",
    desc: "Dedicated GPU clusters, rent or buy, in the region you choose.",
    art: <GpuIllustration />,
  },
  {
    href: "/data-centers",
    title: "Data Center Build Out",
    desc: "We design, deploy and operate full-stack AI data centers.",
    art: <DataCenterIllustration />,
  },
  {
    href: "/white-label",
    title: "White Label AI Cloud",
    desc: "Inference and agent workspaces under your brand or your partner’s.",
    art: <WhiteLabelIllustration />,
  },
];

export function Infrastructure() {
  return (
    <section
      id="infrastructure"
      aria-labelledby="infra-heading"
      className="scroll-mt-20 border-b border-line px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col gap-8">
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <span className="eyebrow">Infrastructure</span>
          <h2
            id="infra-heading"
            className="font-display text-3xl font-medium leading-[1.15] text-cream sm:text-[34px]"
          >
            The stack underneath, when you need it.
          </h2>
          <p className="text-[17px] leading-relaxed text-dim">
            Rent GPUs, build out a data center, or run an AI cloud under your
            own brand — in Europe, APAC and the US.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TILES.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-line bg-surface transition-colors hover:border-dim"
            >
              <div className="flex h-[168px] items-center justify-center border-b border-line bg-surface-2">
                {t.art}
              </div>
              <div className="flex flex-col gap-2 px-[22px] pb-[22px] pt-5">
                <span className="font-display text-[22px] font-medium text-cream">{t.title}</span>
                <span className="text-sm leading-relaxed text-dim">{t.desc}</span>
                <span className="mt-1.5 text-[13px] text-teal group-hover:underline">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

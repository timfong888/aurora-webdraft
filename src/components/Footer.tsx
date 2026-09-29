import Link from "next/link";
import Image from "next/image";

// Section 9 — Footer, MVP v1.
const PRODUCT_LINKS = [
  { label: "Inference", href: "/#inference" },
  { label: "Agentic Workspace", href: "/#agent-workspace" },
];

const INFRA_LINKS = [
  { label: "GPU as a Service", href: "/gpu-clusters" },
  { label: "Data Center Build Out", href: "/data-centers" },
  { label: "White Label AI Cloud", href: "/white-label" },
];

const COMPANY_LINKS = [
  { label: "Talk to an engineer", href: "/contact?interest=Talk+to+an+engineer" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-xs uppercase tracking-[0.08em] text-faint">{title}</p>
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="text-sm text-dim hover:text-cream">
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-14 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-[280px] flex-col gap-2.5">
            <Image src="/aurora-logo.png" alt="Aurora" width={81} height={30} className="h-[30px] w-auto" />
            <p className="text-sm leading-relaxed text-faint">
              Secure, persisted compute and storage where AI agents build, run,
              and ship.
            </p>
          </div>
          <div className="flex flex-wrap gap-14">
            <Column title="Product" links={PRODUCT_LINKS} />
            <Column title="Infrastructure" links={INFRA_LINKS} />
            <Column title="Company" links={COMPANY_LINKS} />
          </div>
        </div>
        <div className="flex justify-between border-t border-line pt-5 text-[13px] text-faint">
          <span>© Aurora</span>
          <span className="font-mono">Agent Cloud</span>
        </div>
      </div>
    </footer>
  );
}

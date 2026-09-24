import Link from "next/link";

// Section 9 — Footer (issue #52). Fixes #28 for footer routes: the old
// footer linked /products, /docs, /company, /customers, and /signin, none of
// which exist. Those groups are removed rather than backed by invented pages
// or invented social handles (no source for either in CLAUDE.md).
//
// White Label and Data Center build-out are second-pass sub-pages (#53/#54)
// — they link to minimal coming-soon stubs per #52's AC, not full pages.
// GPU Clusters is supposed to link to Tim's existing, already-ranking page;
// see src/app/gpu-clusters/page.tsx for why that link is a flagged stub
// instead — it could not be located in this repo or on the live deployment.
const PRODUCT_LINKS = [
  { label: "Inference", href: "/#inference" },
  { label: "Agentic Workspace", href: "/#agent-workspace" },
  { label: "GPU Clusters", href: "/gpu-clusters" },
];

const MORE_LINKS = [
  { label: "White Label", href: "/white-label" },
  { label: "Data Center Build-Out", href: "/data-centers" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold text-slate-400">
              Product
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold text-slate-400">
              More from Aurora
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              {MORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold text-slate-400">
              Company
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm font-bold text-white">
            <span className="text-violet-400">▲</span> Aurora
          </p>
          <p className="text-xs text-slate-400">© 2026 Aurora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

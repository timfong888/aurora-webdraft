import type { Metadata } from "next";
import Link from "next/link";

// Minimal stub — the full Data Center build-out page is second-pass work
// tracked in Epic #43 → issue #54 and explicitly out of scope for this pass.
// This page exists only so the footer link (#52) resolves instead of 404ing.
export const metadata: Metadata = {
  title: "Data Center Build-Out — Coming Soon",
  description: "Aurora's data center build-out program. Page coming soon.",
  alternates: { canonical: "/data-centers" },
  robots: { index: false, follow: true },
};

export default function DataCentersPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-slate-950 px-6 py-24 text-center text-white">
      <p className="text-sm font-semibold text-violet-400">
        Data Center Build-Out
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Coming soon
      </h1>
      <p className="mt-4 max-w-md text-slate-300">
        Aurora&apos;s data center build-out program has its own page in the
        works. In the meantime, talk to us directly.
      </p>
      <Link
        href="/contact?interest=Talk+to+an+engineer"
        className="mt-6 text-sm font-medium text-violet-400 hover:text-violet-300"
      >
        Talk to an engineer
      </Link>
      <Link href="/" className="mt-8 text-sm text-slate-400 hover:text-white">
        ← Back to home
      </Link>
    </main>
  );
}

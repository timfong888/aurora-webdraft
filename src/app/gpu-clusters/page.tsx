import type { Metadata } from "next";
import Link from "next/link";

// DEVIATION — flagged for Tim (see PR description). #52's AC says to link to
// the "existing" GPU Clusters page verbatim, since Tim called it out as
// already ranking and explicitly out of scope to rebuild. It could not be
// found anywhere: not in this repo at any commit on any branch (checked
// origin/main and every other branch), and a live-site check against the
// current Vercel deployment returned 404 for /gpu-clusters. Rather than
// invent a full rebuild (also out of scope) or leave the footer link dead
// (violates #52/#28), this is a minimal stub so the link resolves. If the
// real GPU Clusters page lives on a different domain/deployment, swap this
// stub for a direct link to that URL instead.
export const metadata: Metadata = {
  title: "GPU Clusters",
  description: "Aurora GPU Clusters — rent & buy. Coming soon.",
  alternates: { canonical: "/gpu-clusters" },
  robots: { index: false, follow: true },
};

export default function GpuClustersPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-slate-950 px-6 py-24 text-center text-white">
      <p className="text-sm font-semibold text-violet-400">
        GPU Clusters
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Coming soon
      </h1>
      <p className="mt-4 max-w-md text-slate-300">
        Aurora GPU clusters are available to rent or purchase. Contact us to
        discuss availability for your workload.
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

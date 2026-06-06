import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Branded 404. Renders inside the root layout, so it inherits the site
// <title> and meta description; Next.js serves it with a 404 status, so it
// is not indexed. Gives any broken or stale link a graceful recovery path
// back into the conversion funnel.
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-slate-950 px-6 py-24 text-center text-white sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.2),transparent)]"
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
        404 — Page not found
      </p>
      <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        This page hasn&apos;t shipped yet.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
        The Aurora site is still in build. Head back home, or reserve capacity
        and we&apos;ll take it from there.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contact?interest=Reserve%20capacity"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-violet-600 px-8 text-white hover:bg-violet-500"
          )}
        >
          Reserve Capacity
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "border border-white/20 bg-white/5 px-8 text-white hover:bg-white/10"
          )}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

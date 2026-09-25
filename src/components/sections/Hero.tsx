import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Section 2 — Hero (issue #45).
// Copy is verbatim from CLAUDE.md → "Hero" (canonical, synced 9/24 from the
// Website Positioning Doc). Fixes #27: the prior hero rendered three
// credential badges (NVIDIA Partner / Blackwell Ready / region list) with no
// source anywhere in the current messaging doc. None of the three is backed
// by the Agent Execution Brief or Competitive Analysis tab, so per #45's AC
// ("default to removing if unverifiable") all three are removed rather than
// kept unverified or softened.
export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden px-6 pb-24 pt-28 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.25),transparent)]"
      />
      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow — "Agent Cloud" entry frame, CLAUDE.md → "Market Category" */}
        <p className="mb-4 text-sm font-semibold text-violet-400">
          Agent Cloud
        </p>
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Where your agents work in the cloud.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Secure workspaces with compute and storage so anyone can prompt
          agents that build, run and ship.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact?interest=Start+now"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-violet-600 px-8 text-white hover:bg-violet-500"
            )}
          >
            Start now
          </Link>
          <Link
            href="/contact?interest=Talk+to+an+engineer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "border border-white/20 bg-white/5 px-8 text-white hover:bg-white/10"
            )}
          >
            Talk to an engineer
          </Link>
        </div>
      </div>
    </section>
  );
}

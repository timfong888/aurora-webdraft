import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Section 8 — Final CTA strip (issue #51). No confirmed final-CTA copy exists
// in the source doc yet — the old "Beyond Token Maxing" event CTA belongs to
// the superseded reserved-capacity positioning and is not reused. Per #51's
// AC, this uses the Hero's CTA pair and a [revised] placeholder headline
// pending Tim's sign-off on permanent copy.
export function FinalCta() {
  return (
    <section
      aria-label="Get started"
      className="relative overflow-hidden border-t border-white/10 px-6 py-20 sm:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(124,58,237,0.2),transparent)]"
      />
      <div className="mx-auto max-w-2xl text-center">
        {/* [revised] Placeholder headline — no permanent final-CTA copy has
            been provided yet. Flagged in the PR description for Tim's
            review rather than rendered in the visible copy itself (a
            literal "[revised]" tag reading as live marketing copy was
            caught by the Marketing agent review, three-agent review loop
            on Epic #43). Swap for Tim's copy once available. */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to put your agents to work?
        </h2>
        <p className="mt-4 text-slate-300">
          Secure workspaces with compute and storage so anyone can prompt
          agents that build, run and ship.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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

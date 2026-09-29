import Link from "next/link";

// Section 8 — Final CTA, MVP v1. No closing copy yet (Tim, 9/28) — headline
// and the two CTAs only.
export function FinalCta() {
  return (
    <section
      aria-label="Get started"
      className="flex flex-col items-center gap-6 border-b border-line px-6 py-20 text-center sm:px-10 lg:px-16"
    >
      <h2 className="max-w-[640px] font-display text-3xl font-medium text-cream sm:text-4xl">
        Where your agents work in the cloud.
      </h2>
      <div className="flex flex-wrap justify-center gap-3.5">
        <Link
          href="/contact?interest=Start+for+Free"
          className="btn-primary px-7 py-[15px] text-base"
        >
          Start for Free
        </Link>
        <Link
          href="/contact?interest=Talk+to+an+engineer"
          className="btn-ghost px-[26px] py-[15px] text-base"
        >
          Talk to an engineer
        </Link>
      </div>
    </section>
  );
}

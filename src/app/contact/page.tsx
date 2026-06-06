import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Reserve Capacity & Contact",
  description:
    "Reserve inference capacity, talk to the Aurora team, or RSVP to Beyond Token Maxing — June 30, 2026, Frontier Tower, San Francisco.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;

  return (
    <main className="flex flex-col bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.2),transparent)]"
        />
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Reserve Capacity
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Talk to Aurora
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Reserve your inference capacity, get a fixed-cost quote for your
              agentic workload, or RSVP to our June 30 evening on the economics
              of agentic AI.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                A fixed monthly cost, not a bill that grows with every request.
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                Owned GPU capacity — available now through the Blackwell crunch.
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                Managed serving with optimization built in — zero infra ops burden.
              </li>
            </ul>
            <p className="mt-8 text-sm text-slate-400">
              Prefer email?{" "}
              <a
                href="mailto:hello@aurora.ai"
                className="font-medium text-violet-400 hover:text-violet-300"
              >
                hello@aurora.ai
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <ContactForm defaultInterest={interest} />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 hover:text-white"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

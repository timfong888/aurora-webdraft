import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

// [revised] Copy updated alongside the homepage rebuild (Epic #43) — the
// prior copy referenced reserved-capacity pricing and a stale event RSVP,
// both superseded by the 9/24 Agent Cloud pivot (CLAUDE.md → "Messaging —
// Use This Directly"). Every homepage CTA routes here, so this page is kept
// consistent with the new positioning even though it isn't one of the 9
// section issues.
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start now or talk to an Aurora engineer about serverless open-weight inference and secure agent workspaces.",
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
            <p className="mb-3 text-sm font-semibold text-violet-400">
              Agent Cloud
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Talk to Aurora
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Start now on serverless open-weight inference, or talk to an
              engineer about secure agent workspaces for your team.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                Serverless open-weight inference — an alternative to Together
                AI, Fireworks AI, and Baseten.
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                Secure, full-RBAC agent workspaces to build, run, and ship.
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                Zero data retention — private, confidential compute.
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

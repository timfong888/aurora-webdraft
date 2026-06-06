"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitContact, type ContactState } from "@/app/contact/actions";

const INITIAL: ContactState = { status: "idle" };

const INTERESTS = [
  "Reserve capacity",
  "Talk to us",
  "RSVP — June 30 event",
] as const;

const fieldClass =
  "w-full rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500";
const labelClass = "mb-1.5 block text-sm font-medium text-slate-200";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        buttonVariants({ size: "lg" }),
        "w-full bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-60",
      )}
    >
      {pending ? "Sending…" : "Send"}
    </button>
  );
}

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [state, formAction] = useActionState(submitContact, INITIAL);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-8 text-center"
      >
        <p className="text-lg font-semibold text-emerald-300">
          {state.message ?? "Thanks — we'll be in touch shortly."}
        </p>
        <p className="mt-2 text-sm text-slate-300">
          A member of the Aurora team will follow up at the email you provided.
        </p>
      </div>
    );
  }

  const selectedInterest =
    defaultInterest && INTERESTS.includes(defaultInterest as (typeof INTERESTS)[number])
      ? defaultInterest
      : INTERESTS[0];

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === "error" && (
        <p
          role="alert"
          className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="interest" className={labelClass}>
          I&apos;m here to
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue={selectedInterest}
          className={fieldClass}
        >
          {INTERESTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Anything we should know? <span className="text-slate-500">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={fieldClass} />
      </div>

      {/* Honeypot — hidden from humans, catches bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />
    </form>
  );
}

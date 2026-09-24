import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Section 4 — Feature 1: Serverless Open-Weight Inference (issue #47).
// Leads the feature list per Tim's 9/24 traffic-intent re-rank: most homepage
// traffic searches for inference, not agents. Framed as a migration/cost-delta
// story — never a reserved-capacity or fixed-cost claim.
// Copy source: CLAUDE.md → "Feature 1 — Serverless Open-Weight Inference
// (Section 4)". Model list (DeepSeek, Qwen, GLM, Kimi) is the same set named
// in CLAUDE.md's Feature 3 section — reused here rather than inventing an
// unverified model catalog.
const MODELS = ["DeepSeek", "Qwen", "GLM", "Kimi"];

const FEATURES = [
  "Serverless open-weight endpoints — no cluster to provision or manage",
  "OpenAI/Anthropic-compatible endpoint — swap base_url, api_key, and model, no rewrite",
  "Roughly $0.10–0.90 per 1M tokens vs. $5–30 for closed-frontier models",
  "Zero data retention — private, confidential compute",
];

export function FeatureInference() {
  return (
    <section
      id="inference"
      aria-labelledby="feature-inference-heading"
      className="px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold text-violet-400">
              Feature 1
            </p>
            <h2
              id="feature-inference-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Serverless open-weight inference
            </h2>
            <p className="mt-4 text-slate-300">
              Low cost and high performance, without giving up control of
              your data.
            </p>
            <ul className="mt-6 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-slate-300">
                  <span className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact?interest=Start+now"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-violet-600 px-8 text-white hover:bg-violet-500"
                )}
              >
                Start now
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
            <p className="text-xs font-semibold text-slate-400">
              Supported open-weight models
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" role="list">
              {MODELS.map((model) => (
                <li
                  key={model}
                  className="rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {model}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-white/10 bg-slate-950 p-4">
              <p className="text-xs font-semibold text-slate-400">
                Illustrative — the 3-field swap
              </p>
              <pre className="mt-2 overflow-x-auto text-xs text-slate-300">
                <code>{`base_url = "<your Aurora endpoint>"
api_key  = "<your Aurora key>"
model    = "deepseek-v3"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

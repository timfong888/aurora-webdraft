import Link from "next/link";

// Section 4 — Serverless Open-Weight Inference, MVP v1.
// Request shape matches docs.aur.lu/docs/inference/getting-started:
// base https://ai.aur.lu/v1, Bearer AURORA_API_TOKEN, /chat/completions,
// model deepseek/deepseek-v4-flash.
const BULLETS = [
  <>
    DeepSeek, Qwen, GLM, Kimi and more —{" "}
    <Link href="/inference#models" className="text-teal hover:underline">
      see supported models
    </Link>
  </>,
  "Zero data retention · private, confidential compute",
  "Europe, APAC, and US based data centers",
];

export function FeatureInference() {
  return (
    <section
      id="inference"
      aria-labelledby="inference-heading"
      className="scroll-mt-20 border-b border-line px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex max-w-[520px] flex-1 flex-col gap-4">
          <span className="eyebrow">Inference</span>
          <h2
            id="inference-heading"
            className="font-display text-3xl font-medium leading-[1.15] text-cream sm:text-[34px]"
          >
            Serverless, open-weight inference.
          </h2>
          <p className="text-[17px] leading-relaxed text-dim">
            Open-weight models behind an OpenAI-compatible endpoint. Pay per
            token.
          </p>
          <ul className="mt-1.5 flex flex-col gap-2.5" role="list">
            {BULLETS.map((b, i) => (
              <li key={i} className="flex items-baseline gap-2.5 text-[15px] text-cream">
                <span className="text-teal" aria-hidden="true">
                  —
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-full flex-1 flex-col gap-4 rounded-[14px] border border-line bg-surface p-7">
          <pre className="overflow-x-auto rounded-[10px] bg-surface-2 p-[18px] font-mono text-[13px] leading-[1.7] text-cream">
            <span className="text-faint">$</span> curl https://ai.aur.lu/v1/chat/completions \{"\n"}
            {"  "}-H <span className="text-teal">&quot;Authorization: Bearer $AURORA_API_TOKEN&quot;</span> \{"\n"}
            {"  "}-H &quot;Content-Type: application/json&quot; \{"\n"}
            {"  "}-d &apos;{"{"}{"\n"}
            {"    "}<span className="text-teal">&quot;model&quot;</span>: <span className="text-amber">&quot;deepseek/deepseek-v4-flash&quot;</span>,{"\n"}
            {"    "}<span className="text-teal">&quot;messages&quot;</span>: [{"{"}&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Summarize this PR.&quot;{"}"}],{"\n"}
            {"    "}<span className="text-teal">&quot;stream&quot;</span>: true{"\n"}
            {"  "}{"}"}&apos;
          </pre>
          <div className="flex gap-6">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-faint">Open-weight</span>
              <span className="font-mono text-xl text-amber">$0.10–0.90</span>
              <span className="text-xs text-faint">per 1M tokens</span>
            </div>
            <div className="w-px bg-line" aria-hidden="true" />
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-faint">Closed frontier</span>
              <span className="font-mono text-xl text-dim">$5–30</span>
              <span className="text-xs text-faint">per 1M tokens</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

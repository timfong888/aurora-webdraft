// Section 3 — Primary Use Case, MVP v1.
// The switch-from-competitors narrative, one line. "Up to 25% lower cost" is
// Tim's claim (9/28) — have the pricing comparison ready before launch.
const COMPETITORS = ["Together AI", "Fireworks AI", "Baseten"];

export function PrimaryUseCase() {
  return (
    <section
      aria-label="Switch from Together AI, Fireworks AI, or Baseten"
      className="border-b border-line bg-surface px-6 py-11 sm:px-10 lg:px-16"
    >
      <p className="mx-auto max-w-[820px] text-center text-lg leading-snug text-cream sm:text-xl">
        Switching from <span className="text-amber">{COMPETITORS[0]}</span>,{" "}
        <span className="text-amber">{COMPETITORS[1]}</span>, or{" "}
        <span className="text-amber">{COMPETITORS[2]}</span>? Same open-weight
        models. Up to 25% lower cost.
      </p>
    </section>
  );
}

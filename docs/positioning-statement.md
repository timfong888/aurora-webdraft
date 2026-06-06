# Aurora Positioning Statement — Issue #3

> **Status:** Draft for Tim's approval. Per Issue #3 acceptance criteria, this copy
> stays in `docs/` and does **not** go into page code (`src/`) until Tim approves it.

## The statement (one sentence)

> **Aurora is the reserved-capacity inference cloud that owns its GPUs to sell a fixed
> monthly cost and optimizes every token inside that reservation — turning agentic AI's
> uncapped per-token bill into predictable, defensible unit economics.**

### Shorter variants (same differentiator)

- **One-liner:** Aurora is the inference cloud that sells you a fixed cost, then
  optimizes every token inside it.
- **Category tagline:** The Token Optimization Cloud — reserved capacity, fixed cost,
  optimized tokens.

## Why this is the differentiator (from Issue #2)

The competitive analysis in Issue #2 identifies two adjacent players and the gap Aurora
occupies. The differentiator is the **combination of owned hardware → fixed reserved
cost → token optimization inside the reservation** — a combination neither competitor
offers. (Source: the "Only Aurora line" and "Market Category" entries in `CLAUDE.md`,
which encode the Issue #2 finding.)

| Player | Positioning | Cost model | Gap Aurora fills |
|---|---|---|---|
| **GMI Cloud** | "AI-native inference cloud" | Per-token, variable — bill scales with every request | Aurora sells a **fixed reserved cost**, not a per-token bill |
| **Nebius** | Enterprise-focused GPU infrastructure | Raw GPU / neocloud — you carry ops and self-optimize | Aurora is **managed serving + routing**, optimization built in |
| **Aurora** | **The Token Optimization Cloud** — reserved, predictable inference for agentic workloads | **Fixed monthly reserved cost** | — |

**Only Aurora** owns the hardware → can sell a fixed cost; layers optimization on top
of the reservation → more useful throughput per reserved GPU; with capacity available
now through the Blackwell crunch.

## How it stays distinct from both competitors

- **Distinct from GMI ("AI-native inference cloud"):** GMI is still per-token and
  variable. Aurora's frame is *reserved and fixed* — the bill stops scaling with every
  request.
- **Distinct from Nebius (enterprise GPU focus):** Nebius sells raw compute that the
  customer must operate and optimize. Aurora sells *managed, optimized* serving inside
  the reservation — zero infra ops burden.

## Best-fit audience this statement targets

Mid-market AI companies putting agentic workloads into production (scaling-tier,
domain-focused) — e.g. Actively, Astrocade, Nura, Qualitate — for whom inference is
becoming the largest variable COGS line.

---

*Drafted from the Messaging Doc and competitive notes in `CLAUDE.md`. All copy is
AI-drafted and flagged `[revised]` pending Tim's approval before it enters `src/`. (by Claude)*

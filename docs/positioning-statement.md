# Aurora Positioning Statement — Issue #3

> **Status:** Draft for Tim's approval. Updated per Tim's [Issue #3 comment](https://github.com/timfong888/aurora-webdraft/issues/3):
> anchor on **reserved inference GPUs**, drop the term "fixed cost", and introduce
> **ValueMaxxing™**. The site copy in `src/` and `public/llms*.txt` was updated to match.

## The statement (one sentence)

> **Aurora is the reserved-capacity inference cloud that reserves inference GPUs to give
> you a predictable cost and optimizes every token inside that reservation —
> ValueMaxxing™, not token maxing — turning agentic AI's uncapped per-token bill into
> predictable, defensible unit economics.**

### Shorter variants (same differentiator)

- **One-liner:** Aurora reserves inference GPUs at a predictable cost, then optimizes
  every token inside the reservation — ValueMaxxing™.
- **Category tagline:** The Token Optimization Cloud — reserved inference GPUs,
  predictable cost, optimized tokens.

## The messaging nuance (Tim, Issue #3)

- **No "fixed cost".** Underlying, Aurora reserves GPUs for inference; the customer-facing
  frame is *reserved* and *predictable*, never *fixed*.
- **No time-slice constraint.** Aurora does not currently constrain by time slice — avoid
  "rate-limiting keeps spend flat". Spend tracks the reservation, not per-request volume.
- **ValueMaxxing™** is Aurora's counter-discipline to *token maxing*: optimize cost toward
  value per token (and per reserved GPU), not token volume.

## Why this is the differentiator (from Issue #2)

The competitive analysis in Issue #2 identifies two adjacent players and the gap Aurora
occupies. The differentiator is the **combination of owned hardware → reserved inference
GPUs at a predictable cost → token optimization (ValueMaxxing™) inside the reservation** —
a combination neither competitor offers. (Source: the "Only Aurora line" and "Market
Category" entries in `CLAUDE.md`, which encode the Issue #2 finding.)

| Player | Positioning | Cost model | Gap Aurora fills |
|---|---|---|---|
| **GMI Cloud** | "AI-native inference cloud" | Per-token, variable — bill scales with every request | Aurora reserves **inference GPUs at a predictable cost**, not a per-token bill |
| **Nebius** | Enterprise-focused GPU infrastructure | Raw GPU / neocloud — you carry ops and self-optimize | Aurora is **managed serving + routing**, optimization built in |
| **Aurora** | **The Token Optimization Cloud** — reserved, predictable inference for agentic workloads | **Reserved inference GPUs at a predictable cost** | — |

**Only Aurora** owns the hardware → reserves inference GPUs at a predictable cost; layers
optimization on top of the reservation (ValueMaxxing™) → more useful throughput per
reserved GPU; with capacity available now through the Blackwell crunch.

## How it stays distinct from both competitors

- **Distinct from GMI ("AI-native inference cloud"):** GMI is still per-token and
  variable. Aurora's frame is *reserved inference GPUs at a predictable cost* — the bill
  stops scaling with every request.
- **Distinct from Nebius (enterprise GPU focus):** Nebius sells raw compute that the
  customer must operate and optimize. Aurora sells *managed, optimized* serving inside
  the reservation — zero infra ops burden.

## Best-fit audience this statement targets

Mid-market AI companies putting agentic workloads into production (scaling-tier,
domain-focused) — e.g. Actively, Astrocade, Nura, Qualitate — for whom inference is
becoming the largest variable COGS line.

---

*Drafted from the Messaging Doc and competitive notes in `CLAUDE.md`. All copy is
AI-drafted and flagged `[revised]` pending Tim's approval. (by Claude)*

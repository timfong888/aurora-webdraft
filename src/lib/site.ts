// Canonical site origin. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. a custom production domain). Falls back to the Vercel preview URL,
// then the known Vercel project URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://aurora-webdraft.vercel.app")
).replace(/\/$/, "");

export const SITE_NAME = "Aurora";
// [revised] Tagline updated for the 9/24 Agent Cloud pivot (CLAUDE.md → "Market
// Category"). The prior tagline ("The Token Optimization Cloud") is retired.
export const SITE_TAGLINE = "The Agent Cloud";
// [revised] Description rewritten to drop all reserved-capacity/fixed-cost
// language (forbidden post-pivot) and lead with the two home-page pillars:
// serverless open-weight inference + secure agent workspaces.
export const SITE_DESCRIPTION =
  "Aurora is the Agent Cloud — serverless, open-weight-model inference (an alternative to Together AI, Fireworks AI, and Baseten) paired with secure, full-RBAC agent workspaces so anyone can prompt agents that build, run, and ship.";

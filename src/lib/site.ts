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
export const SITE_TAGLINE = "Full-Stack AI Infrastructure";
export const SITE_DESCRIPTION =
  "GPU clusters, AI inference, agents, storage, and edge — built, deployed, and operated by Aurora as a fully managed service.";

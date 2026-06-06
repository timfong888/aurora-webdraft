import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Only list routes that actually resolve. Add new entries here as pages ship.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-06");
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

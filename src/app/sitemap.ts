import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Only list routes that actually resolve AND are meant to be indexed. The
// white-label/data-centers/gpu-clusters stubs (issue #52) are marked
// noindex on-page and intentionally excluded here — add them once they're
// real pages.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-24");
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

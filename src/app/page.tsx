import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { PrimaryUseCase } from "@/components/sections/PrimaryUseCase";
import { FeatureInference } from "@/components/sections/FeatureInference";
import { FeatureAgentWorkspace } from "@/components/sections/FeatureAgentWorkspace";
import { FeatureDataCenters } from "@/components/sections/FeatureDataCenters";
import { FeatureStorage } from "@/components/sections/FeatureStorage";
import { FinalCta } from "@/components/sections/FinalCta";

// ─── Structured data (JSON-LD) ─────────────────────────────────────────────
// [revised] The prior "Beyond Token Maxing" Event entry is removed — that
// event and its reserved-capacity framing belong to the superseded
// positioning (CLAUDE.md → "Messaging — Use This Directly").
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      slogan: SITE_TAGLINE,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: `${SITE_NAME} — ${SITE_TAGLINE}`,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

// Homepage — a thin composition of the 9 sections defined in Epic #43.
// Nav lives in Navbar.tsx (rendered by layout), Footer in Footer.tsx.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Hero />
      <PrimaryUseCase />
      <FeatureInference />
      <FeatureAgentWorkspace />
      <FeatureDataCenters />
      <FeatureStorage />
      <FinalCta />
    </main>
  );
}

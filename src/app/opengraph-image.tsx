import { ImageResponse } from "next/og";

// [revised] Rewritten for the 9/24 Agent Cloud pivot — the prior copy
// ("The Token Optimization Cloud," "Reserve capacity," "Token maxing is
// O(N)") is the exact superseded positioning CLAUDE.md says not to use
// anywhere. Caught by the Marketing agent review (three-agent review loop,
// Epic #43) as a stale og:image:alt that would resurface old messaging on
// social shares.
export const alt =
  "Aurora — Agent Cloud. Where your agents work in the cloud.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated OG/Twitter card — no external asset required.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #2e1065, #020617)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: 44, color: "#a78bfa" }}>▲</span>
          <span style={{ fontSize: 40, fontWeight: 700 }}>Aurora</span>
          <span
            style={{
              fontSize: 22,
              color: "#a78bfa",
              marginLeft: "8px",
            }}
          >
            Agent Cloud
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            <span>Where your agents&nbsp;</span>
            <span style={{ color: "#a78bfa" }}>work in the cloud.</span>
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1" }}>
            Secure workspaces with compute and storage so anyone can prompt
            agents that build, run and ship.
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px", fontSize: 26 }}>
          <span style={{ color: "#cbd5e1", fontWeight: 700 }}>
            Serverless open-weight inference
          </span>
          <span style={{ color: "#64748b" }}>·</span>
          <span style={{ color: "#a78bfa", fontWeight: 700 }}>
            Secure agent workspaces
          </span>
        </div>
      </div>
    ),
    size,
  );
}

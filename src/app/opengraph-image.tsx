import { ImageResponse } from "next/og";

export const alt =
  "Aurora — The Token Optimization Cloud. Reserved inference for agentic workloads.";
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
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginLeft: "8px",
            }}
          >
            The Token Optimization Cloud
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
            <span>Per-token pricing hands every agent&nbsp;</span>
            <span style={{ color: "#a78bfa" }}>an unlimited credit card.</span>
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1" }}>
            Reserve inference GPUs. Optimize every token against them.
            Predictable cost.
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px", fontSize: 26 }}>
          <span style={{ color: "#f87171", fontWeight: 700 }}>
            Token maxing is O(N)
          </span>
          <span style={{ color: "#64748b" }}>·</span>
          <span style={{ color: "#34d399", fontWeight: 700 }}>
            ValueMaxxing is O(1)
          </span>
        </div>
      </div>
    ),
    size,
  );
}

import { NextResponse } from "next/server";

// ─── Feedback → GitHub Issues ──────────────────────────────────────────────
// Receives a point-and-click annotation from the on-page FeedbackWidget and
// files it as a GitHub Issue on this repo. Because every note becomes a real
// GitHub Issue, the notes are natively readable and actionable by an AI agent
// through the GitHub MCP server or the `gh` CLI (Issue #15, requirement 6).
//
// Required server env var:
//   GITHUB_FEEDBACK_TOKEN  — a fine-grained PAT with `Issues: write` on the repo
// Optional:
//   GITHUB_FEEDBACK_REPO   — `owner/repo` (defaults to timfong888/aurora-webdraft)

const DEFAULT_REPO = "timfong888/aurora-webdraft";

type FeedbackKind = "text" | "layout" | "bug";

interface FeedbackPayload {
  kind: FeedbackKind;
  note: string;
  pagePath: string;
  selector: string;
  elementText: string;
  rect: { x: number; y: number; width: number; height: number } | null;
  viewport: { width: number; height: number };
  userAgent: string;
}

const KIND_LABELS: Record<FeedbackKind, string> = {
  text: "feedback:text",
  layout: "feedback:layout",
  bug: "feedback:bug",
};

function isFeedbackPayload(value: unknown): value is FeedbackPayload {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    (v.kind === "text" || v.kind === "layout" || v.kind === "bug") &&
    typeof v.note === "string" &&
    typeof v.pagePath === "string" &&
    typeof v.selector === "string" &&
    typeof v.elementText === "string"
  );
}

function buildIssueBody(p: FeedbackPayload): string {
  const truncatedElement =
    p.elementText.length > 200
      ? `${p.elementText.slice(0, 200)}…`
      : p.elementText;

  const rect = p.rect
    ? `${Math.round(p.rect.width)}×${Math.round(p.rect.height)} at (${Math.round(
        p.rect.x,
      )}, ${Math.round(p.rect.y)})`
    : "n/a";

  return [
    `**${p.note.trim()}**`,
    "",
    "---",
    "",
    "| Field | Value |",
    "| --- | --- |",
    `| Type | \`${p.kind}\` |`,
    `| Page | \`${p.pagePath}\` |`,
    `| Element | \`${p.selector}\` |`,
    `| Element text | ${truncatedElement ? `\`${truncatedElement}\`` : "_(none)_"} |`,
    `| Bounding box | ${rect} |`,
    `| Viewport | ${p.viewport.width}×${p.viewport.height} |`,
    "",
    `_Filed from the on-page feedback widget. User agent: ${p.userAgent}_`,
    "",
    "(by Claude feedback widget)",
  ].join("\n");
}

export async function POST(request: Request) {
  const token = process.env.GITHUB_FEEDBACK_TOKEN;
  const repo = process.env.GITHUB_FEEDBACK_REPO ?? DEFAULT_REPO;

  if (!token) {
    return NextResponse.json(
      {
        error:
          "Feedback backend not configured. Set GITHUB_FEEDBACK_TOKEN to enable GitHub Issue filing.",
      },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!isFeedbackPayload(payload)) {
    return NextResponse.json(
      { error: "Malformed feedback payload." },
      { status: 400 },
    );
  }

  if (payload.note.trim().length === 0) {
    return NextResponse.json(
      { error: "Note must not be empty." },
      { status: 400 },
    );
  }

  const title = `[Feedback] ${payload.kind}: ${payload.note
    .trim()
    .slice(0, 70)
    .replace(/\s+/g, " ")}`;

  const ghResponse = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body: buildIssueBody(payload),
      labels: ["feedback", KIND_LABELS[payload.kind]],
    }),
  });

  if (!ghResponse.ok) {
    const detail = await ghResponse.text();
    return NextResponse.json(
      { error: "GitHub rejected the issue.", status: ghResponse.status, detail },
      { status: 502 },
    );
  }

  const issue = (await ghResponse.json()) as {
    number: number;
    html_url: string;
  };

  return NextResponse.json({
    ok: true,
    issueNumber: issue.number,
    issueUrl: issue.html_url,
  });
}

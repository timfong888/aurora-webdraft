"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ─── On-page point-and-click feedback widget ───────────────────────────────
// Framework-agnostic in spirit (vanilla DOM APIs + a single mounted node), this
// lets a reviewer click any element on the page, describe a text or layout
// change, and file it straight to GitHub Issues via /api/feedback (Issue #15).
//
// Disable in any environment by setting NEXT_PUBLIC_FEEDBACK_ENABLED="false".

type FeedbackKind = "text" | "layout" | "bug";

interface Target {
  selector: string;
  elementText: string;
  rect: { x: number; y: number; width: number; height: number };
}

const KIND_OPTIONS: { value: FeedbackKind; label: string }[] = [
  { value: "text", label: "Text / copy" },
  { value: "layout", label: "Layout / design" },
  { value: "bug", label: "Bug" },
];

/** Build a reasonably stable CSS selector for an element. */
function cssSelector(el: Element): string {
  if (el.id) return `#${CSS.escape(el.id)}`;

  const parts: string[] = [];
  let node: Element | null = el;
  let depth = 0;

  while (node && node.nodeType === Node.ELEMENT_NODE && depth < 5) {
    const tag = node.tagName.toLowerCase();
    if (tag === "body" || tag === "html") {
      parts.unshift(tag);
      break;
    }

    const parent: Element | null = node.parentElement;
    if (parent) {
      const sameTag = Array.from(parent.children).filter(
        (c) => c.tagName === node!.tagName,
      );
      if (sameTag.length > 1) {
        const index = sameTag.indexOf(node) + 1;
        parts.unshift(`${tag}:nth-of-type(${index})`);
      } else {
        parts.unshift(tag);
      }
    } else {
      parts.unshift(tag);
    }

    node = parent;
    depth += 1;
  }

  return parts.join(" > ");
}

function isWidgetNode(el: Element | null): boolean {
  return Boolean(el?.closest("[data-aurora-feedback]"));
}

export function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [picking, setPicking] = useState(false);
  const [target, setTarget] = useState<Target | null>(null);
  const [kind, setKind] = useState<FeedbackKind>("text");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<
    { type: "idle" | "sending" | "ok" | "error"; message?: string }
  >({ type: "idle" });

  const highlightRef = useRef<HTMLDivElement | null>(null);

  const enabled = process.env.NEXT_PUBLIC_FEEDBACK_ENABLED !== "false";

  // Position the highlight overlay on a given element.
  const moveHighlight = useCallback((el: Element | null) => {
    const box = highlightRef.current;
    if (!box) return;
    if (!el) {
      box.style.display = "none";
      return;
    }
    const r = el.getBoundingClientRect();
    box.style.display = "block";
    box.style.transform = `translate(${r.left}px, ${r.top}px)`;
    box.style.width = `${r.width}px`;
    box.style.height = `${r.height}px`;
  }, []);

  // Element-picking interactions.
  useEffect(() => {
    if (!picking) return;

    const onMove = (e: MouseEvent) => {
      const el = e.target as Element | null;
      if (isWidgetNode(el)) {
        moveHighlight(null);
        return;
      }
      moveHighlight(el);
    };

    const onClick = (e: MouseEvent) => {
      const el = e.target as Element | null;
      if (!el || isWidgetNode(el)) return;
      e.preventDefault();
      e.stopPropagation();
      const r = el.getBoundingClientRect();
      setTarget({
        selector: cssSelector(el),
        elementText: (el.textContent ?? "").trim().slice(0, 300),
        rect: { x: r.left, y: r.top, width: r.width, height: r.height },
      });
      setPicking(false);
      setOpen(true);
      moveHighlight(null);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPicking(false);
        moveHighlight(null);
      }
    };

    document.addEventListener("mousemove", onMove, true);
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey, true);
    document.body.style.cursor = "crosshair";

    return () => {
      document.removeEventListener("mousemove", onMove, true);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey, true);
      document.body.style.cursor = "";
    };
  }, [picking, moveHighlight]);

  const startPicking = () => {
    setStatus({ type: "idle" });
    setOpen(false);
    setPicking(true);
  };

  const submit = async () => {
    if (!target || note.trim().length === 0) return;
    setStatus({ type: "sending" });

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          note,
          pagePath: window.location.pathname + window.location.search,
          selector: target.selector,
          elementText: target.elementText,
          rect: target.rect,
          viewport: { width: window.innerWidth, height: window.innerHeight },
          userAgent: navigator.userAgent,
        }),
      });

      const data: { issueUrl?: string; error?: string } = await res.json();

      if (res.ok && data.issueUrl) {
        setStatus({ type: "ok", message: data.issueUrl });
        setNote("");
        setTarget(null);
      } else {
        setStatus({
          type: "error",
          message: data.error ?? "Failed to file feedback.",
        });
      }
    } catch {
      setStatus({ type: "error", message: "Network error filing feedback." });
    }
  };

  if (!enabled) return null;

  return (
    <div data-aurora-feedback>
      {/* Element highlight overlay (shown while picking) */}
      <div
        ref={highlightRef}
        aria-hidden="true"
        style={{ display: "none" }}
        className="pointer-events-none fixed left-0 top-0 z-[2147483646] rounded-sm border-2 border-violet-400 bg-violet-400/10"
      />

      {/* Picking hint banner */}
      {picking && (
        <div className="fixed inset-x-0 top-0 z-[2147483647] bg-violet-600 px-4 py-2 text-center text-sm font-medium text-white">
          Click any element to leave feedback · press{" "}
          <kbd className="rounded bg-white/20 px-1">Esc</kbd> to cancel
        </div>
      )}

      {/* Launcher button */}
      {!open && !picking && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-[2147483647] flex items-center gap-2 rounded-full bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          aria-label="Open feedback widget"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3.75h6m4.5 5.25-3.75-3H6a2.25 2.25 0 0 1-2.25-2.25V6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v9A2.25 2.25 0 0 1 18 17.25h-.75Z"
            />
          </svg>
          Feedback
        </button>
      )}

      {/* Panel */}
      {open && !picking && (
        <div
          role="dialog"
          aria-label="Leave feedback"
          className="fixed bottom-5 right-5 z-[2147483647] w-[22rem] max-w-[calc(100vw-2.5rem)] rounded-xl border border-white/10 bg-slate-900 p-4 text-white shadow-2xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold">Leave feedback</p>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setStatus({ type: "idle" });
              }}
              className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              aria-label="Close feedback widget"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Target picker */}
          <button
            type="button"
            onClick={startPicking}
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg border border-violet-500/40 bg-violet-500/10 px-3 py-2 text-sm font-medium text-violet-200 transition-colors hover:bg-violet-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
              />
            </svg>
            {target ? "Re-select element" : "Pick an element"}
          </button>

          {target && (
            <p className="mb-3 truncate rounded bg-slate-950 px-2 py-1 font-mono text-xs text-slate-400">
              {target.selector}
            </p>
          )}

          {/* Kind */}
          <label className="mb-1 block text-xs font-medium text-slate-400">
            Type of change
          </label>
          <div className="mb-3 flex gap-2">
            {KIND_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setKind(opt.value)}
                className={`flex-1 rounded-md border px-2 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  kind === opt.value
                    ? "border-violet-500 bg-violet-600 text-white"
                    : "border-white/10 bg-slate-950 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Note */}
          <label
            htmlFor="aurora-feedback-note"
            className="mb-1 block text-xs font-medium text-slate-400"
          >
            Suggested change
          </label>
          <textarea
            id="aurora-feedback-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="Describe the new text, copy, or layout change…"
            className="mb-3 w-full resize-none rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none"
          />

          {/* Submit */}
          <button
            type="button"
            onClick={submit}
            disabled={!target || note.trim().length === 0 || status.type === "sending"}
            className="w-full rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status.type === "sending" ? "Filing…" : "File as GitHub Issue"}
          </button>

          {/* Status */}
          {status.type === "ok" && status.message && (
            <p className="mt-3 text-xs text-emerald-400">
              Filed ·{" "}
              <a
                href={status.message}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-emerald-300"
              >
                view issue
              </a>
            </p>
          )}
          {status.type === "error" && (
            <p className="mt-3 text-xs text-red-400">{status.message}</p>
          )}
        </div>
      )}
    </div>
  );
}

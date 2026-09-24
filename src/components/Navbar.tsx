"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// [revised] IA rebuilt for the 9/24 Agent Cloud pivot (fixes #28 — dead routes).
// The old set (Products/Pricing/Customers/Docs/Company) pointed at pages that
// never existed. These two links are same-page anchors to the two home-page
// pillars named in CLAUDE.md → "Market Category", so they always resolve.
const NAV_LINKS = [
  { label: "Inference", href: "/#inference" },
  { label: "Agentic Workspace", href: "/#agent-workspace" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
          aria-label="Aurora home"
        >
          <span className="text-violet-400">▲</span>
          Aurora
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — "Start now" per CLAUDE.md Hero copy; never a
            procurement-style CTA ("Reserve Capacity" / "Get a Console"). */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact?interest=Start+now"
            className={cn(
              buttonVariants({ size: "default" }),
              "bg-violet-600 text-white hover:bg-violet-500 focus-visible:ring-violet-500"
            )}
          >
            Start now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-950 md:hidden"
        >
          <ul className="space-y-1 px-4 pb-4 pt-2" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-white/10 px-4 pb-4 pt-3">
            <Link
              href="/contact?interest=Start+now"
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants({ size: "default" }),
                "w-full justify-center bg-violet-600 text-white hover:bg-violet-500"
              )}
            >
              Start now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

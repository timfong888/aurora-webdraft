"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// MVP v1 nav: logo, the two home-page pillars, one primary CTA.
// "Start for Free" is the single above-the-fold CTA (Tim, 9/25).
const NAV_LINKS = [
  { label: "Inference", href: "/#inference" },
  { label: "Agentic Workspace", href: "/#agent-workspace" },
];

const CTA_HREF = "/contact?interest=Start+for+Free";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-ink/95 backdrop-blur">
      <nav
        className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center" aria-label="Aurora home">
            <Image
              src="/aurora-logo.png"
              alt="Aurora"
              width={92}
              height={34}
              priority
              className="h-[34px] w-auto"
            />
          </Link>
          <ul className="hidden items-center gap-7 md:flex" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-dim transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex">
          <Link href={CTA_HREF} className="btn-primary">
            Start for Free
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-dim hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-teal md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-line bg-ink md:hidden">
          <ul className="space-y-1 px-6 pb-4 pt-2" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base text-dim hover:text-cream"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-line px-6 pb-5 pt-4">
            <Link
              href={CTA_HREF}
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Start for Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

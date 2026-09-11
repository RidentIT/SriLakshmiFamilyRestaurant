"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, RESTAURANT } from "@/data/restaurant";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/90">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex flex-col leading-tight"
        >
          <span className="font-display text-lg font-semibold tracking-tight text-cream sm:text-xl">
            Sri Lakshmi
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold sm:text-xs">
            Family Restaurant
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-2 text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                    active ? "text-gold" : "text-cream/80"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-gold" />
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex h-11 items-center justify-center rounded-full bg-maroon px-5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-maroon-dark"
            >
              Call to Reserve
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-cream transition-colors hover:bg-white/10 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-gold/15 bg-charcoal transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex h-12 items-center rounded-lg px-3 text-base font-medium ${
                    active
                      ? "bg-gold/10 text-gold"
                      : "text-cream/80 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2 pb-3">
            <a
              href={RESTAURANT.phoneHref}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-full bg-maroon px-5 text-base font-semibold text-cream"
            >
              Call to Reserve · {RESTAURANT.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

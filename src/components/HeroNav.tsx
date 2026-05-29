"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/navigation";

export default function HeroNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-5 py-4 md:px-8">
      {/* Desktop: 3-column grid for true center alignment */}
      <div className="hidden grid-cols-3 items-center lg:grid">
        {/* Left: Wordmark */}
        <div className="justify-self-start">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-white"
          >
            Soap.
          </Link>
        </div>

        {/* Center: Nav links */}
        <div className="flex items-center justify-self-center justify-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-bold transition-all duration-200 hover:text-[#468BE6] hover:opacity-80 hover:-translate-y-px"
              style={{ color: "#FFFFFF" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA button */}
        <div className="justify-self-end">
          <Link
            href="/contact"
            className="btn-primary whitespace-nowrap text-sm font-semibold text-white"
            style={{ backgroundColor: "#468BE6", padding: "12px 28px", borderRadius: "8px" }}
          >
            Request a Demo
          </Link>
        </div>
      </div>

      {/* Mobile: flex row */}
      <div className="flex items-center justify-between lg:hidden">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          Soap.
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center text-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: "#092F64" }}
              onClick={() => setMenuOpen(false)}
            >
              Soap.
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center"
              aria-label="Close menu"
              style={{ color: "#092F64" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xl font-bold transition-colors duration-200 hover:text-[#468BE6]"
                style={{ color: "#092F64" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-4 text-lg font-semibold text-white"
              style={{ backgroundColor: "#468BE6", padding: "12px 28px", borderRadius: "8px" }}
              onClick={() => setMenuOpen(false)}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

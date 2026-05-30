"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/navigation";

export default function GlobalNav({ inline = false }: { inline?: boolean }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLight, setIsLight] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(!isHome);
  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  useEffect(() => {
    if (!isHome) {
      setIsLight(true);
      setVisible(true);
      return;
    }

    if (inline) {
      // Inline instance: always dark state, always visible
      setIsLight(false);
      setVisible(true);
      return;
    }

    // Fixed instance on home: hidden until inline nav scrolls off, then fade in white
    setVisible(false);
    setIsLight(true);

    function onScroll() {
      // Show fixed nav once user has scrolled past the inline nav area (~80px from top)
      setVisible(window.scrollY > 80);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, pathname, inline]);

  useEffect(() => { closeMenu(); }, [pathname, closeMenu]);

  useEffect(() => {
    if (!inline) {
      document.body.style.overflow = menuOpen ? "hidden" : "";
      return () => { document.body.style.overflow = ""; };
    }
  }, [menuOpen, inline]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") closeMenu(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  useEffect(() => {
    function onResize() { if (window.innerWidth >= 1024) closeMenu(); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  // Inline mode: render nav content only, no fixed positioning, no background
  if (inline) {
    return (
      <nav className="px-5 py-5 md:px-8">
        {/* Desktop */}
        <div className="hidden grid-cols-3 items-center lg:grid">
          <div className="justify-self-start">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">Soap.</Link>
          </div>
          <div className="flex items-center justify-self-center justify-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-bold text-white transition-colors duration-150 hover:bg-white/[0.08]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="justify-self-end">
            <Link
              href="/contact"
              className="btn-primary whitespace-nowrap text-sm font-semibold text-white"
              style={{ backgroundColor: "#1570EF", padding: "10px 24px", borderRadius: "8px" }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex items-center justify-between lg:hidden">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">Soap.</Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="relative flex h-10 w-10 items-center justify-center text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="flex flex-col items-center justify-center gap-[5px]">
              <span className="block h-[2px] w-5 rounded-full bg-current" style={{ transition: "transform 250ms ease-out, opacity 250ms ease-out", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
              <span className="block h-[2px] w-5 rounded-full bg-current" style={{ transition: "opacity 200ms ease-out", opacity: menuOpen ? 0 : 1 }} />
              <span className="block h-[2px] w-5 rounded-full bg-current" style={{ transition: "transform 250ms ease-out, opacity 250ms ease-out", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
            </span>
          </button>
        </div>
        {/* Mobile dropdown for inline */}
        <div
          className="lg:hidden"
          style={{
            position: "fixed", top: 64, left: 0, right: 0, bottom: 0,
            background: "radial-gradient(ellipse 80% 60% at 50% 20%, #152D54 0%, #0E172A 70%, #060D1A 100%)",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
            pointerEvents: menuOpen ? "auto" : "none",
            transition: menuOpen
              ? "opacity 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 300ms cubic-bezier(0.16, 1, 0.3, 1)"
              : "opacity 250ms cubic-bezier(0.4, 0, 0.6, 1), transform 250ms cubic-bezier(0.4, 0, 0.6, 1)",
            zIndex: 50, overflowY: "auto",
          }}
        >
          <div className="px-6 pt-8 pb-8">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="rounded-lg text-[22px] font-semibold text-white" style={{ padding: "14px 12px", transition: "background-color 150ms ease" }} onClick={closeMenu} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary block w-full text-center text-[17px] font-semibold text-white" style={{ backgroundColor: "#1570EF", padding: "16px 24px", borderRadius: "10px" }} onClick={closeMenu}>Book a Demo</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Fixed mode (layout-level, all pages)
  const textColor = isLight ? "#0E172A" : "#FFFFFF";
  const hoverBg = isLight ? "rgba(21, 112, 239, 0.08)" : "rgba(255, 255, 255, 0.08)";
  const menuBg = isLight ? "rgba(255, 255, 255, 0.98)" : "radial-gradient(ellipse 80% 60% at 50% 20%, #152D54 0%, #0E172A 70%, #060D1A 100%)";
  const menuTextColor = isLight ? "#0E172A" : "#FFFFFF";
  const menuHoverBg = isLight ? "rgba(21, 112, 239, 0.06)" : "rgba(255, 255, 255, 0.06)";

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        opacity: mounted && visible ? 1 : 0,
        transform: mounted && visible ? "translateY(0)" : "translateY(-4px)",
        pointerEvents: visible ? "auto" : "none",
        backgroundColor: isLight ? "rgba(255, 255, 255, 0.92)" : "transparent",
        backdropFilter: isLight ? "blur(12px)" : "none",
        WebkitBackdropFilter: isLight ? "blur(12px)" : "none",
        borderBottom: isLight ? "1px solid rgba(14, 23, 42, 0.06)" : "1px solid transparent",
        boxShadow: isLight ? "0 1px 3px rgba(14, 23, 42, 0.04)" : "none",
        transition: "opacity 250ms ease, transform 250ms ease, background-color 250ms ease, border-bottom-color 250ms ease, box-shadow 250ms ease, backdrop-filter 250ms ease",
      }}
    >
      <nav className="px-[44px] py-4 md:px-[56px]">
        <div className="hidden grid-cols-3 items-center lg:grid">
          <div className="justify-self-start">
            <Link href="/" className="text-2xl font-extrabold tracking-tight" style={{ color: textColor, transition: "color 300ms ease" }}>Soap.</Link>
          </div>
          <div className="flex items-center justify-self-center justify-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-bold"
                style={{ color: textColor, transition: "color 300ms ease, background-color 150ms ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = hoverBg; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="justify-self-end">
            <Link href="/contact" className="btn-primary whitespace-nowrap text-sm font-semibold text-white" style={{ backgroundColor: "#1570EF", padding: "10px 24px", borderRadius: "8px" }}>Book a Demo</Link>
          </div>
        </div>
        <div className="flex items-center justify-between lg:hidden">
          <Link href="/" className="text-2xl font-extrabold tracking-tight" style={{ color: textColor, transition: "color 300ms ease" }}>Soap.</Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="relative flex h-10 w-10 items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ color: textColor, transition: "color 300ms ease" }}
          >
            <span className="flex flex-col items-center justify-center gap-[5px]">
              <span className="block h-[2px] w-5 rounded-full bg-current" style={{ transition: "transform 250ms ease-out, opacity 250ms ease-out", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
              <span className="block h-[2px] w-5 rounded-full bg-current" style={{ transition: "opacity 200ms ease-out", opacity: menuOpen ? 0 : 1 }} />
              <span className="block h-[2px] w-5 rounded-full bg-current" style={{ transition: "transform 250ms ease-out, opacity 250ms ease-out", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
            </span>
          </button>
        </div>
      </nav>
      <div
        className="lg:hidden"
        style={{
          position: "fixed", top: 64, left: 0, right: 0, bottom: 0,
          background: menuBg,
          backdropFilter: isLight ? "blur(12px)" : "none",
          WebkitBackdropFilter: isLight ? "blur(12px)" : "none",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
          pointerEvents: menuOpen ? "auto" : "none",
          transition: menuOpen
            ? "opacity 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 300ms cubic-bezier(0.16, 1, 0.3, 1)"
            : "opacity 250ms cubic-bezier(0.4, 0, 0.6, 1), transform 250ms cubic-bezier(0.4, 0, 0.6, 1)",
          overflowY: "auto",
        }}
      >
        <div className="px-6 pt-8 pb-8">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="rounded-lg text-[22px] font-semibold" style={{ color: menuTextColor, padding: "14px 12px", transition: "background-color 150ms ease" }} onClick={closeMenu} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = menuHoverBg; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary block w-full text-center text-[17px] font-semibold text-white" style={{ backgroundColor: "#1570EF", padding: "16px 24px", borderRadius: "10px" }} onClick={closeMenu}>Book a Demo</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

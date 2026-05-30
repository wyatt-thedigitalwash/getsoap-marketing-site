"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    title: "Blog Content",
    description: "AI-drafted, human-reviewed blog posts for every location, every month.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    title: "Review Responses",
    description: "Every Google review gets a drafted response. Your team approves before it sends.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "SEO Audits",
    description: "Monthly technical audits flag issues and prioritize fixes automatically.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" />
        <path d="M8 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "GBP Posts",
    description: "Weekly Google Business Profile posts scheduled and published for every location.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="9" y1="4" x2="9" y2="10" />
        <line x1="15" y1="4" x2="15" y2="10" />
        <circle cx="8" cy="15" r="1" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    ),
  },
  {
    title: "Citation Building",
    description: "Local directory submissions across 60+ platforms, monitored for accuracy.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    title: "Website Audits",
    description: "Monthly performance, accessibility, and SEO health checks on every location site.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="7" y1="6.5" x2="7" y2="6.5" />
        <line x1="10" y1="6.5" x2="10" y2="6.5" />
        <line x1="3" y1="18" x2="8" y2="22" />
        <line x1="21" y1="18" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    title: "Schema Markup",
    description: "LocalBusiness structured data deployed and maintained on every page automatically.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: "Rank Tracking",
    description: "Weekly keyword ranking updates for every location across target search terms.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 16 8 12 12 14 20 6" />
        <polyline points="16 6 20 6 20 10" />
      </svg>
    ),
  },
];

const CARD_W_DESKTOP = 280;
const CARD_W_MOBILE = 240;
const GAP_DESKTOP = 20;
const GAP_MOBILE = 16;

export default function AutomationSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [cardsRevealed, setCardsRevealed] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const sl = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanLeft(sl > 10);
    setCanRight(sl < maxScroll - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Force scroll to first card, using rAF to beat browser scroll restoration
    requestAnimationFrame(() => {
      el.scrollLeft = 0;
    });

    el.addEventListener("scroll", updateState, { passive: true });
    updateState();

    // Mouse drag to scroll
    const scrollEl = el;
    function onMouseDown(e: MouseEvent) {
      isDragging.current = true;
      startX.current = e.pageX;
      startScroll.current = scrollEl.scrollLeft;
      scrollEl.style.cursor = "grabbing";
    }

    function onMouseMove(e: MouseEvent) {
      if (!isDragging.current) return;
      e.preventDefault();
      const dx = e.pageX - startX.current;
      scrollEl.scrollLeft = startScroll.current - dx;
    }

    function onMouseUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      scrollEl.style.cursor = "";
    }

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("scroll", updateState);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [updateState]);

  // Staggered card reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay cards 200ms after header starts animating
          setTimeout(() => setCardsRevealed(true), 200);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function scroll(dir: number) {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = window.innerWidth >= 768 ? CARD_W_DESKTOP : CARD_W_MOBILE;
    const gap = window.innerWidth >= 768 ? GAP_DESKTOP : GAP_MOBILE;
    el.scrollBy({ left: dir * (cardW + gap), behavior: "smooth" });
  }

  return (
    <section
      ref={sectionRef}
      data-bg="white"
      className="pt-[84px] pb-[84px] md:pt-[112px] md:pb-[112px]"
      style={{ backgroundColor: "#FFFFFF", overflowX: "clip" }}
    >
      {/* Header */}
      <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-16" style={{ marginBottom: 48 }} distance={20}>
        <h2 className="text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]" style={{ color: "#0E172A" }}>
          Automated execution. Human judgment.
        </h2>
        <p className="mt-4 max-w-[580px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
          Every output is AI-generated, then human-reviewed before it goes live. Volume without sacrificing quality.
        </p>
      </ScrollReveal>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="automation-carousel hide-scrollbar"
      >
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="automation-card"
            style={{
              opacity: cardsRevealed ? 1 : 0,
              transform: cardsRevealed ? "translateY(0)" : "translateY(32px)",
              transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${(i + 1) * 100}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${(i + 1) * 100}ms`,
            }}
          >
            {card.icon}
            <h3
              className="text-[17px] font-bold"
              style={{ color: "#0E172A", marginTop: 14 }}
            >
              {card.title}
            </h3>
            <p
              className="text-[14px] leading-[1.5]"
              style={{ color: "#71717A", marginTop: 8 }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mx-auto flex max-w-7xl items-center justify-start px-6 md:px-16" style={{ marginTop: 28 }}>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-[#F1F5F9]"
            style={{
              border: "1px solid #E2E8F0",
              opacity: canLeft ? 1 : 0.3,
              cursor: canLeft ? "pointer" : "default",
            }}
            aria-label="Previous"
            disabled={!canLeft}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-[#F1F5F9]"
            style={{
              border: "1px solid #E2E8F0",
              opacity: canRight ? 1 : 0.3,
              cursor: canRight ? "pointer" : "default",
            }}
            aria-label="Next"
            disabled={!canRight}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

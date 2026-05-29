"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const CARD_W_DESKTOP = 280;
const CARD_W_MOBILE = 240;
const GAP_DESKTOP = 20;
const GAP_MOBILE = 16;

const integrations = [
  { name: "Google Business Profile", desc: "GBP management and posting", color: "#4285F4" },
  { name: "Google Search Console", desc: "Ranking and traffic data", color: "#34A853" },
  { name: "Google Analytics", desc: "Traffic and conversion data", color: "#FBBC04" },
  { name: "Google Ads", desc: "Read-only ads data display", color: "#EA4335" },
  { name: "Meta Marketing", desc: "Read-only Meta ads data", color: "#1877F2" },
  { name: "Stripe", desc: "Subscription billing", color: "#635BFF" },
  { name: "Twilio", desc: "SMS for review requests", color: "#F22F46" },
  { name: "Resend", desc: "Transactional email", color: "#000000" },
];

export default function IntegrationsCarousel() {
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

    requestAnimationFrame(() => {
      el.scrollLeft = 0;
    });

    el.addEventListener("scroll", updateState, { passive: true });
    updateState();

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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      className="pb-[84px] md:pb-[112px]"
      style={{ backgroundColor: "#FFFFFF", overflowX: "clip" }}
    >
      <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-16" style={{ marginBottom: 48 }} distance={20}>
        <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>
          Integrations
        </p>
        <h2 className="mt-4 text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]" style={{ color: "#092F64" }}>
          Plays nice with the stack you already have.
        </h2>
        <p className="mt-4 max-w-[580px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
          Soap integrates with the platforms franchise systems already use. Read-only data
          sync, native API connections, secure permissions.
        </p>
      </ScrollReveal>

      <div ref={scrollRef} className="automation-carousel hide-scrollbar">
        {integrations.map((int, i) => (
          <div
            key={int.name}
            className="automation-card"
            style={{
              opacity: cardsRevealed ? 1 : 0,
              transform: cardsRevealed ? "translateY(0)" : "translateY(32px)",
              transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${(i + 1) * 100}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${(i + 1) * 100}ms`,
            }}
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[13px] font-bold text-white"
              style={{ backgroundColor: int.color }}
            >
              {int.name[0]}
            </div>
            <h3
              className="text-[17px] font-bold"
              style={{ color: "#092F64", marginTop: 14 }}
            >
              {int.name}
            </h3>
            <p
              className="text-[14px] leading-[1.5]"
              style={{ color: "#71717A", marginTop: 8 }}
            >
              {int.desc}
            </p>
          </div>
        ))}
      </div>

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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#092F64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#092F64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

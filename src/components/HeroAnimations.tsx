"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function HeroAnimations({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const headline = wrapper.querySelector("[data-hero-headline]") as HTMLElement;
    const sub = wrapper.querySelector("[data-hero-sub]") as HTMLElement;
    const ctas = wrapper.querySelector("[data-hero-ctas]") as HTMLElement;
    const mockup = wrapper.querySelector("[data-hero-mockup]") as HTMLElement;

    const els = [
      { el: headline, delay: 100 },
      { el: sub, delay: 300 },
      { el: ctas, delay: 500 },
      { el: mockup, delay: 700 },
    ];

    // Set initial hidden state
    els.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
    });
    if (mockup) mockup.style.transform = "translateY(30px)";

    // Stagger reveal
    els.forEach(({ el, delay }) => {
      if (!el) return;
      const dur = el === mockup ? "900ms" : "800ms";
      const ease = el === mockup
        ? "cubic-bezier(0.16, 1, 0.3, 1)"
        : "ease-out";

      setTimeout(() => {
        el.style.transition = `opacity ${dur} ${ease}, transform ${dur} ${ease}`;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });

    // No parallax - removed for performance
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}

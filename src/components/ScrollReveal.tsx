"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Delay in ms before animation starts after entering viewport */
  delay?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Use premium card easing instead of ease-out */
  premium?: boolean;
  /** Custom translateY distance in px */
  distance?: number;
  /** Duration in ms */
  duration?: number;
  /** HTML tag to render */
  as?: keyof HTMLElementTagNameMap;
}

export default function ScrollReveal({
  children,
  className = "",
  style,
  delay = 0,
  threshold = 0.2,
  premium = false,
  distance = 24,
  duration = 600,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = `translateY(${distance}px)`;

    const ease = premium
      ? "cubic-bezier(0.16, 1, 0.3, 1)"
      : "ease-out";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = `opacity ${duration}ms ${ease}, transform ${duration}ms ${ease}`;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, premium, distance, duration]);

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

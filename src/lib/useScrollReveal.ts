import { useEffect, useRef } from "react";

/**
 * Fires a callback once when the element enters the viewport.
 * Unobserves immediately after triggering.
 */
export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.2
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("anim-hidden", "anim-card-hidden");
          el.classList.add("anim-visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Fires a callback once when element enters viewport, for custom logic.
 */
export function useOnReveal(
  callback: () => void,
  threshold = 0.15
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [callback, threshold]);

  return ref;
}

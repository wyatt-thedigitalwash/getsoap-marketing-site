"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    q: "Is Soap right for our portfolio size?",
    a: "Soap is built for franchise systems with 10 or more locations across one or more brands. Smaller portfolios may not get the full value from the platform's multi-tenant architecture, though we are happy to discuss specific situations.",
  },
  {
    q: "How long does a typical deployment take?",
    a: "Initial deployment for a single brand takes 30 to 60 days. Multi-brand deployments are sequenced over 4 to 12 months depending on portfolio size and franchisee count. We provide a detailed deployment timeline in the proposal.",
  },
  {
    q: "Can we keep our existing vendors during deployment?",
    a: "Yes. Soap is designed to replace fragmented vendor stacks, but we can run in parallel with existing tools during the transition. We will help you wind down replaced vendors at the right pace for your franchisees.",
  },
  {
    q: "What happens to our existing websites and GBP listings?",
    a: "We migrate your existing per-location websites onto Soap's platform with full content preservation and SEO continuity. Existing Google Business Profile listings are connected to Soap, never duplicated or replaced. We handle the technical migration as part of onboarding.",
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={listRef} className="mx-auto flex max-w-[780px] flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl bg-white"
            style={{
              border: isOpen ? "1px solid rgba(21, 112, 239, 0.2)" : "1px solid #E2E8F0",
              boxShadow: "0 1px 4px rgba(14, 23, 42, 0.03)",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 400ms ease-out ${i * 80}ms, transform 400ms ease-out ${i * 80}ms, border-color 200ms ease`,
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="faq-button flex w-full items-center justify-between text-left transition-colors"
              style={{
                padding: "22px 28px",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <span
                className="text-[17px] font-semibold"
                style={{ color: "#0E172A" }}
              >
                {faq.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-4 shrink-0 transition-all duration-200"
                style={{
                  stroke: isOpen ? "#1570EF" : "#71717A",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <div
              className="faq-answer"
              style={{
                maxHeight: isOpen ? "400px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div
                style={{
                  padding: "0 28px 22px 28px",
                  borderTop: "1px solid #E2E8F0",
                }}
              >
                <p
                  className="text-[15px] leading-[1.6] md:text-[16px]"
                  style={{ color: "#1F1F1F", paddingTop: 16 }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    q: "How long does deployment take?",
    a: "A single brand with under 50 locations can be fully deployed in 4 to 6 weeks. Multi-brand rollouts follow a sequential playbook, typically one brand at a time over 8 to 12 weeks per brand.",
  },
  {
    q: "Do franchisees have to do anything?",
    a: "Very little. Soap handles website creation, SEO, GBP management, and content production. Franchisees get a dashboard to see their performance and a simple system to submit photo uploads or content requests. No technical knowledge required.",
  },
  {
    q: "What if we already have vendor relationships for some of this?",
    a: "Soap is designed to replace fragmented vendor stacks, not add to them. We handle migration from existing tools and consolidate everything into one platform. If there are specific integrations you need to keep, we build read-only data syncs so reporting stays unified.",
  },
  {
    q: "How does pricing work?",
    a: "Franchisors pay an annual enterprise license for portfolio-wide platform access. Individual franchisee locations subscribe to one of four packages based on their growth goals, ranging from $50 to $1,500 per location per month. We are happy to walk through the full pricing model on a call.",
  },
  {
    q: "Is Soap built for our size?",
    a: "Soap is built for franchise systems running 10 to 1,000+ locations across one or many brands. The platform is multi-tenant by design, meaning the data model mirrors your actual org chart: PE firm, franchisor, brand, location. It scales with your portfolio without additional infrastructure.",
  },
  {
    q: "What makes Soap different from SOCi or Scorpion?",
    a: "Vertical integration. Soap owns the SEO methodology, the automation, and the content production in-house. There is no outsourced delivery and no vendor stack underneath the platform. Most competitors are either narrow tools solving one piece of the problem or agency services repackaged as software. Soap is a true multi-tenant platform built from day one for portfolio-wide deployment.",
  },
  {
    q: "What about AI search visibility?",
    a: "Soap includes purpose-built optimization for AI search results in ChatGPT, Perplexity, and Gemini. Most franchise marketing platforms have not started here. As AI search grows, franchise locations need to appear in these results the same way they appear in Google local packs. Soap builds that into the system.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
              border: isOpen ? "1px solid rgba(70, 139, 230, 0.2)" : "1px solid #E2E8F0",
              boxShadow: "0 1px 4px rgba(9, 47, 100, 0.03)",
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
                style={{ color: "#092F64" }}
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
                  stroke: isOpen ? "#468BE6" : "#71717A",
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

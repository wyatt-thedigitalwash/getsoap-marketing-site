import { Check } from "lucide-react";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

export function PerformanceSection() {
  const blocks = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A5799" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
      ),
      heading: "Impression and view metrics",
      desc: "How many people saw each location's profile. How they found it. Search terms, photo views, profile views, all tracked per location and rolled up.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A5799" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      heading: "Call tracking and attribution",
      desc: "Every call from a GBP listing is tracked, recorded, and attributed. Corporate sees portfolio call volume. Franchisees see their own pipeline.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A5799" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
      ),
      heading: "Direction requests",
      desc: "Direction requests are a high-intent signal. Soap tracks every request and ties them to specific services, hours, and search queries.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A5799" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      heading: "Conversion attribution",
      desc: "GBP-driven leads flow into the same attribution pipeline as web leads. Corporate sees the full funnel. ROI is measurable at the location, service, and channel level.",
    },
  ];

  return (
    <section data-bg="white" className="px-6 py-[84px] md:px-16 md:py-[112px]">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>Performance</p>
            <h2 className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]" style={{ color: "#092F64" }}>
              Know what every profile is actually doing.
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
              Impressions, clicks, calls, direction requests, conversions. Soap reports GBP performance per location and rolls up across the portfolio. Real attribution, not vanity metrics.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {blocks.map((b, i) => (
            <ScrollReveal key={b.heading} delay={100 + i * 80} distance={20}>
              {b.icon}
              <h3 className="mt-4 text-[18px] font-bold" style={{ color: "#092F64" }}>{b.heading}</h3>
              <p className="mt-2 text-[14px] leading-[1.6]" style={{ color: "#1F1F1F" }}>{b.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ScaleSection() {
  const portfolioFeatures = [
    "Bulk edits with per-location review gates",
    "Brand-locked attributes (categories, services, hours framework)",
    "Multi-location post campaigns with location personalization",
    "Centralized review response policies enforced across locations",
    "Portfolio-wide compliance and policy alerts",
  ];

  const locationFeatures = [
    "Per-location override for hours, offers, events",
    "Franchisee mobile app for photo and Q&A management",
    "Local owner sign-off on responses to negative reviews",
    "Per-location reporting for the franchisee",
    "Independence within guardrails, same model as the rest of the platform",
  ];

  return (
    <section data-bg="dark" className="px-6 py-[84px] md:px-16 md:py-[112px]" style={{ backgroundColor: "#092F64" }}>
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em]" style={{ color: "#C9DBEC" }}>Built for Portfolios</p>
            <h2 className="mx-auto mt-4 max-w-[880px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[46px]">
              Managing 5 GBPs is hard. Managing 500 is impossible without Soap.
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#C9DBEC" }}>
              Multi-location GBP management is where most platforms break down. Bulk edits without context. Generic posts that look templated. No location-specific customization. Soap handles scale and specificity simultaneously.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 flex flex-col gap-12 md:flex-row md:gap-12">
          <ScrollReveal className="md:w-1/2" delay={100}>
            <p className="text-[16px] font-bold text-white">Portfolio-level operations</p>
            <ul className="mt-5 flex flex-col gap-3">
              {portfolioFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check size={16} style={{ color: "#468BE6", marginTop: 3, flexShrink: 0 }} />
                  <span className="text-[14px] leading-[1.6]" style={{ color: "#C9DBEC" }}>{f}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal className="md:w-1/2" delay={200}>
            <p className="text-[16px] font-bold text-white">Location-level autonomy</p>
            <ul className="mt-5 flex flex-col gap-3">
              {locationFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check size={16} style={{ color: "#468BE6", marginTop: 3, flexShrink: 0 }} />
                  <span className="text-[14px] leading-[1.6]" style={{ color: "#C9DBEC" }}>{f}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

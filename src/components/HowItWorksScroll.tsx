"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Shared star component ─── */
const STAR = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";
function Stars({ count, size = 10 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-px">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i <= count ? "#FBBC04" : "#E0E0E0"}>
          <path d={STAR} />
        </svg>
      ))}
    </div>
  );
}

/* ─── Visual 1: Portfolio Dashboard ─── */
function PortfolioDashboardVisual() {
  return (
    <div className="h-full overflow-hidden p-5">
      <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
        <span className="text-[11px] font-semibold" style={{ color: "#0E172A" }}>Portfolio Overview</span>
        <span className="rounded px-2 py-0.5 text-[9px] font-semibold text-white" style={{ backgroundColor: "#1570EF" }}>Generate Report</span>
      </div>
      <div className="flex gap-2" style={{ marginBottom: 14 }}>
        {[
          { label: "Active Locations", value: "847", change: "+12.3%" },
          { label: "Leads This Month", value: "3,241", change: "+8.1%" },
          { label: "Avg. Local Pack", value: "2.4", change: "+0.8" },
        ].map((k) => (
          <div key={k.label} className="flex-1 rounded-lg bg-white p-2.5" style={{ border: "1px solid #E2E8F0" }}>
            <p className="text-[9px] font-medium" style={{ color: "#71717A", marginBottom: 2 }}>{k.label}</p>
            <p className="text-[18px] font-bold leading-none" style={{ color: "#0E172A" }}>{k.value}</p>
            <p className="mt-0.5 text-[9px] font-semibold" style={{ color: "#10B981" }}>{k.change}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex border-b pb-1.5" style={{ borderColor: "#E2E8F0" }}>
          <span className="flex-1 text-[8px] font-semibold uppercase tracking-wide" style={{ color: "#71717A" }}>Brand</span>
          <span className="w-12 text-center text-[8px] font-semibold uppercase tracking-wide" style={{ color: "#71717A" }}>Locations</span>
          <span className="w-20 text-right text-[8px] font-semibold uppercase tracking-wide" style={{ color: "#71717A" }}>Leads</span>
        </div>
        {[
          { name: "Wallaby Windows", locs: "19", pct: 70 },
          { name: "ProClean", locs: "142", pct: 90 },
          { name: "BrightStar", locs: "94", pct: 55 },
        ].map((r) => (
          <div key={r.name} className="flex items-center border-b py-1.5" style={{ borderColor: "#F1F5F9" }}>
            <span className="flex-1 text-[9px] font-medium" style={{ color: "#0E172A" }}>{r.name}</span>
            <span className="w-12 text-center text-[9px]" style={{ color: "#71717A" }}>{r.locs}</span>
            <div className="flex w-20 justify-end">
              <div className="h-1 w-full rounded" style={{ backgroundColor: "#E2E8F0" }}>
                <div className="h-1 rounded" style={{ width: `${r.pct}%`, backgroundColor: "#1570EF" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Visual 2: Per-Location Websites ─── */
function PerLocationWebsiteVisual() {
  return (
    <div className="h-full overflow-hidden p-5">
      <div className="overflow-hidden rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
        <div className="flex items-center gap-2 px-2.5 py-1.5" style={{ backgroundColor: "#F1F3F4" }}>
          <div className="flex gap-1">
            <div className="h-[5px] w-[5px] rounded-full" style={{ backgroundColor: "#EF4444" }} />
            <div className="h-[5px] w-[5px] rounded-full" style={{ backgroundColor: "#F59E0B" }} />
            <div className="h-[5px] w-[5px] rounded-full" style={{ backgroundColor: "#10B981" }} />
          </div>
          <div className="ml-2 flex flex-1 items-center gap-1 rounded bg-white px-2 py-0.5">
            <svg width="8" height="8" viewBox="0 0 16 16" fill="none" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="10" height="7" rx="1" /><path d="M5 7V5a3 3 0 0 1 6 0v2" /></svg>
            <span className="text-[9px]" style={{ color: "#71717A" }}>wallabywindows.com/tampa</span>
          </div>
        </div>
        <div className="bg-white p-3.5">
          <div className="flex gap-3 border-b pb-2" style={{ borderColor: "#F1F5F9" }}>
            {["Home", "Services", "About", "Contact"].map((t) => (
              <span key={t} className="text-[8px] font-medium" style={{ color: "#71717A" }}>{t}</span>
            ))}
          </div>
          <div className="mt-2.5">
            <p className="text-[14px] font-bold" style={{ color: "#0E172A" }}>Wallaby Windows</p>
            <p className="mt-0.5 text-[9px]" style={{ color: "#71717A" }}>Tampa, FL — Window Installation &amp; Replacement</p>
            <span className="mt-2 inline-block rounded px-2.5 py-1 text-[8px] font-semibold text-white" style={{ backgroundColor: "#1570EF" }}>Get a Free Quote</span>
          </div>
          <div className="mt-2.5 flex flex-col gap-1">
            <div className="h-1 rounded" style={{ width: "85%", backgroundColor: "#F1F5F9" }} />
            <div className="h-1 rounded" style={{ width: "70%", backgroundColor: "#F1F5F9" }} />
            <div className="h-1 rounded" style={{ width: "55%", backgroundColor: "#F1F5F9" }} />
          </div>
          <div className="mt-2.5 border-t pt-2" style={{ borderColor: "#F1F5F9" }}>
            <div className="flex gap-1">
              {["Installation", "Replacement", "Repair"].map((s) => (
                <span key={s} className="rounded bg-[#F1F5F9] px-1.5 py-0.5 text-[7px] font-medium" style={{ color: "#71717A" }}>{s}</span>
              ))}
            </div>
            <div className="mt-2 h-1 rounded" style={{ width: "40%", backgroundColor: "#F1F5F9" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Visual 3: Local SEO ─── */
function LocalSeoVisual() {
  return (
    <div className="h-full overflow-hidden p-5">
      <div className="mb-2.5 flex items-center gap-1.5 rounded-full px-3 py-1.5" style={{ backgroundColor: "#F1F3F4" }}>
        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round"><circle cx="7" cy="7" r="5" /><line x1="11" y1="11" x2="14" y2="14" /></svg>
        <span className="text-[10px]" style={{ color: "#202124" }}>window replacement tampa</span>
      </div>
      <p className="border-b pb-1.5 text-[8px]" style={{ color: "#71717A", borderColor: "#F1F5F9" }}>About 1,240,000 results</p>
      <div className="mt-2 rounded-lg p-2.5" style={{ background: "rgba(21, 112, 239,0.04)", border: "1px solid rgba(21, 112, 239,0.12)" }}>
        <div className="flex items-center gap-1.5">
          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#0E172A" }}>
            <span className="text-[8px] font-bold text-white">W</span>
          </div>
          <div>
            <p className="text-[9px]" style={{ color: "#202124" }}>wallabywindows.com/tampa</p>
            <p className="text-[8px]" style={{ color: "#71717A" }}>https://wallabywindows.com/tampa</p>
          </div>
        </div>
        <p className="mt-1 text-[12px] font-medium" style={{ color: "#1A0DAB" }}>Wallaby Windows Tampa — Window Installation &amp; Repair</p>
        <div className="mt-0.5 flex items-center gap-1">
          <Stars count={5} size={10} />
          <span className="text-[9px]" style={{ color: "#71717A" }}>4.9 · 47 reviews</span>
        </div>
        <p className="mt-1 text-[9px] leading-[1.4]" style={{ color: "#4D5156" }}>Professional window installation and replacement in Tampa, FL. Free estimates, licensed and insured.</p>
      </div>
      <div className="mt-1.5 px-2.5 opacity-50">
        <p className="text-[9px]" style={{ color: "#202124" }}>genericwindowco.com</p>
        <p className="text-[11px]" style={{ color: "#1A0DAB" }}>Generic Window Company — Tampa Windows</p>
        <p className="text-[9px]" style={{ color: "#4D5156" }}>Affordable window services for residential and commercial...</p>
      </div>
      <div className="mt-1.5 px-2.5 opacity-50">
        <p className="text-[9px]" style={{ color: "#202124" }}>windowworld.com</p>
        <p className="text-[11px]" style={{ color: "#1A0DAB" }}>Window World — Replacement Windows</p>
        <p className="text-[9px]" style={{ color: "#4D5156" }}>America&apos;s largest window replacement company...</p>
      </div>
    </div>
  );
}

/* ─── Visual 4: GBP ─── */
function GbpVisual() {
  return (
    <div className="h-full overflow-hidden p-5">
      <div className="relative overflow-hidden" style={{ height: 80, backgroundColor: "#E8E8E8", borderRadius: "8px 8px 0 0" }}>
        <div className="absolute" style={{ top: "40%", left: 0, right: 0, height: 2, backgroundColor: "#C5C5C5" }} />
        <div className="absolute" style={{ top: "70%", left: 0, right: 0, height: 1.5, backgroundColor: "#C5C5C5" }} />
        <div className="absolute" style={{ top: 0, bottom: 0, left: "30%", width: 2, backgroundColor: "#C5C5C5" }} />
        <div className="absolute" style={{ top: 0, bottom: 0, left: "65%", width: 1.5, backgroundColor: "#C5C5C5" }} />
        <div className="absolute" style={{ top: "15%", left: "45%", width: "12%", height: "20%", backgroundColor: "#DCDCDC", borderRadius: 2 }} />
        <div className="absolute" style={{ top: "50%", left: "75%", width: "10%", height: "15%", backgroundColor: "#DCDCDC", borderRadius: 2 }} />
        <div className="absolute" style={{ top: "10%", left: "15%", width: "8%", height: "25%", backgroundColor: "#DCDCDC", borderRadius: 2 }} />
        <div className="absolute rounded" style={{ top: "55%", left: "40%", width: "15%", height: "18%", backgroundColor: "#C8E6C0" }} />
        <span className="absolute left-1.5 top-1.5 text-[7px] font-medium" style={{ color: "#B0B0B0" }}>Google Maps</span>
        <svg className="absolute" style={{ left: "60%", top: "20%", opacity: 0.45 }} width="12" height="18" viewBox="0 0 14 20" fill="none">
          <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
          <circle cx="7" cy="7" r="2.5" fill="white" />
        </svg>
        <svg className="absolute" style={{ left: "78%", top: "50%", opacity: 0.45 }} width="12" height="18" viewBox="0 0 14 20" fill="none">
          <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
          <circle cx="7" cy="7" r="2.5" fill="white" />
        </svg>
        <svg className="absolute" style={{ left: "35%", top: "25%", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }} width="16" height="22" viewBox="0 0 14 20" fill="none">
          <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
          <circle cx="7" cy="7" r="2.5" fill="white" />
        </svg>
      </div>
      <div className="bg-white px-3 py-2" style={{ border: "1px solid #E8EAED", borderTop: "none", borderRadius: "0 0 8px 8px" }}>
        <div className="border-b py-2" style={{ borderColor: "#E8EAED" }}>
          <p className="text-[12px] font-semibold" style={{ color: "#1A1A1A" }}>Wallaby Windows</p>
          <div className="mt-0.5 flex items-center gap-1"><Stars count={5} size={10} /><span className="text-[9px]" style={{ color: "#71717A" }}>4.9 (47)</span></div>
          <p className="mt-0.5 text-[9px]" style={{ color: "#71717A" }}>Window Installation · Tampa, FL</p>
          <p className="text-[9px] font-medium" style={{ color: "#187832" }}>Open now</p>
        </div>
        <div className="border-b py-2 opacity-50" style={{ borderColor: "#E8EAED" }}>
          <p className="text-[11px] font-medium" style={{ color: "#71717A" }}>Generic Window Co</p>
          <div className="mt-0.5 flex items-center gap-1"><Stars count={4} size={9} /><span className="text-[9px]" style={{ color: "#71717A" }}>4.2 (23)</span></div>
          <p className="text-[9px]" style={{ color: "#71717A" }}>Window Company · Tampa, FL</p>
        </div>
        <div className="py-2 opacity-50">
          <p className="text-[11px] font-medium" style={{ color: "#71717A" }}>Budget Windows LLC</p>
          <div className="mt-0.5 flex items-center gap-1"><Stars count={4} size={9} /><span className="text-[9px]" style={{ color: "#71717A" }}>3.8 (12)</span></div>
          <p className="text-[9px]" style={{ color: "#71717A" }}>Window Repair · Tampa, FL</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Step data ─── */
const steps = [
  {
    eyebrow: "DASHBOARD",
    title: "Portfolio Dashboard",
    description: "Every brand and location in one view. Performance metrics, lead tracking, and reporting rolled up for corporate and broken out for each franchisee.",
    link: { label: "Explore the Platform \u2192", href: "/platform" },
    visual: <PortfolioDashboardVisual />,
  },
  {
    eyebrow: "WEBSITES",
    title: "Per-Location Websites",
    description: "Every franchisee gets a branded, SEO-optimized website for their location. Built on Soap's infrastructure, managed through the platform, compliant with brand standards.",
    link: { label: "See how it works \u2192", href: "/platform" },
    visual: <PerLocationWebsiteVisual />,
  },
  {
    eyebrow: "LOCAL SEO",
    title: "Automated Local SEO",
    description: "Automated audits, content production, citation management, schema deployment, and local rank tracking built into every location from day one.",
    link: { label: "How Soap does SEO \u2192", href: "/seo" },
    visual: <LocalSeoVisual />,
  },
  {
    eyebrow: "GOOGLE BUSINESS PROFILE",
    title: "GBP Management at Scale",
    description: "Automated audits, post scheduling, review requests, review response drafting, and photo management across hundreds of locations.",
    link: { label: "How Soap manages GBP \u2192", href: "/google-business-profile" },
    visual: <GbpVisual />,
  },
];

/* ─── Main component ─── */
export default function HowItWorksScroll() {
  const [active, setActive] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    triggerRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-45% 0px -45% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ─── Desktop: sticky scroll ─── */
  const desktopView = (
    <div className="relative mt-14 hidden md:block" style={{ height: "300vh" }}>
      {/* Sticky frame */}
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-12 px-16">
          {/* Left: text */}
          <div className="w-[45%] shrink-0">
            <div className="relative">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="absolute inset-0"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transition: "opacity 300ms ease",
                    pointerEvents: active === i ? "auto" : "none",
                    position: i === 0 ? "relative" : "absolute",
                  }}
                >
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: "#1570EF" }}
                  >
                    {step.eyebrow}
                  </p>
                  <h3
                    className="mt-4 text-[28px] font-extrabold leading-tight tracking-[-0.02em] md:text-[32px]"
                    style={{ color: "#0E172A" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-4 max-w-[420px] text-[16px] leading-[1.6]"
                    style={{ color: "#1F1F1F" }}
                  >
                    {step.description}
                  </p>
                  <div className="mt-5">
                    <Link
                      href={step.link.href}
                      className="text-[14px] font-semibold transition-colors hover:underline"
                      style={{ color: "#1570EF" }}
                    >
                      {step.link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Progress dots */}
            <div className="mt-8 flex gap-3">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: active === i ? "#1570EF" : "#E2E8F0",
                    transition: "background-color 200ms ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="flex-1">
            <div
              className="relative overflow-hidden rounded-[18px]"
              style={{
                height: 440,
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
              }}
            >
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="absolute inset-0"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transition: "opacity 400ms ease",
                  }}
                >
                  {step.visual}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Invisible scroll triggers */}
      <div className="absolute inset-0 z-10">
        {steps.map((_, i) => (
          <div
            key={i}
            ref={(el) => { triggerRefs.current[i] = el; }}
            style={{ height: "75vh" }}
          />
        ))}
      </div>
    </div>
  );

  /* ─── Mobile: stacked cards ─── */
  const mobileView = (
    <div className="mt-10 flex flex-col gap-5 md:hidden">
      {steps.map((step) => (
        <div
          key={step.title}
          className="rounded-[18px] bg-white"
          style={{
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
            padding: 24,
          }}
        >
          <div
            className="overflow-hidden rounded-xl"
            style={{ height: 200, backgroundColor: "#F8FAFC" }}
          >
            {step.visual}
          </div>
          <h3
            className="mt-5 text-[20px] font-bold"
            style={{ color: "#0E172A" }}
          >
            {step.title}
          </h3>
          <p
            className="mt-2 text-[15px] leading-[1.6]"
            style={{ color: "#1F1F1F" }}
          >
            {step.description}
          </p>
          <div className="mt-3.5">
            <Link
              href={step.link.href}
              className="text-[14px] font-semibold transition-colors hover:underline"
              style={{ color: "#1570EF" }}
            >
              {step.link.label}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {desktopView}
      {mobileView}
    </>
  );
}

"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import Link from "next/link";

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

/* ─── Counter hook ─── */
function useCountUp(target: number, duration: number, started: boolean, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started, decimals]);
  return value;
}

/* ─── Visual 1: Portfolio Dashboard ─── */
function DashboardVisual() {
  const [counting, setCounting] = useState(false);
  const [showChange, setShowChange] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setCounting(true), 400);
          setTimeout(() => setShowChange(true), 1600);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const v1 = useCountUp(847, 1200, counting);
  const v2 = useCountUp(3241, 1200, counting);
  const v3 = useCountUp(2.4, 1200, counting, 1);

  const kpis = [
    { label: "Active Locations", value: Math.round(v1).toString(), change: "+12.3%" },
    { label: "Leads This Month", value: Math.round(v2).toLocaleString(), change: "+8.1%" },
    { label: "Avg. Local Pack", value: v3.toFixed(1), change: "+0.8" },
  ];

  return (
    <div ref={wrapperRef} className="flex h-full flex-col overflow-hidden rounded-lg bg-white" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
      <div className="flex items-center justify-between" style={{ marginBottom: 18 }}>
        <span className="text-[11px] font-semibold" style={{ color: "#092F64" }}>Portfolio Overview</span>
        <div className="flex items-center gap-2">
          <span className="rounded px-2 py-0.5 text-[8px] font-medium" style={{ color: "#71717A", backgroundColor: "#F1F5F9" }}>Last 30 Days</span>
          <span className="rounded px-2 py-0.5 text-[9px] font-semibold text-white" style={{ backgroundColor: "#468BE6" }}>Generate Report</span>
        </div>
      </div>
      <div className="flex gap-2" style={{ marginBottom: 18 }}>
        {kpis.map((k) => (
          <div key={k.label} className="flex-1 rounded-lg bg-white p-2.5" style={{ border: "1px solid #E2E8F0" }}>
            <p className="text-[9px] font-medium" style={{ color: "#71717A", marginBottom: 2 }}>{k.label}</p>
            <p className="text-[18px] font-bold leading-none" style={{ color: "#092F64" }}>{k.value}</p>
            <p className="mt-0.5 text-[9px] font-semibold" style={{ color: "#10B981", opacity: showChange ? 1 : 0, transition: "opacity 400ms ease-out" }}>{k.change}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex border-b pb-2" style={{ borderColor: "#E2E8F0" }}>
          <span className="flex-1 text-[8px] font-semibold uppercase tracking-wide" style={{ color: "#71717A" }}>Brand</span>
          <span className="w-14 text-center text-[8px] font-semibold uppercase tracking-wide" style={{ color: "#71717A" }}>Locations</span>
          <span className="w-20 text-right text-[8px] font-semibold uppercase tracking-wide" style={{ color: "#71717A" }}>Leads</span>
        </div>
        {[
          { name: "Wallaby Windows", locs: "19", pct: 70 },
          { name: "ProClean", locs: "142", pct: 90 },
          { name: "BrightStar", locs: "94", pct: 55 },
          { name: "FreshCoat", locs: "67", pct: 45 },
        ].map((r) => (
          <div key={r.name} className="flex items-center border-b py-2.5" style={{ borderColor: "#F1F5F9" }}>
            <span className="flex-1 text-[9px] font-medium" style={{ color: "#092F64" }}>{r.name}</span>
            <span className="w-14 text-center text-[9px]" style={{ color: "#71717A" }}>{r.locs}</span>
            <div className="flex w-20 justify-end">
              <div className="h-1 w-full rounded" style={{ backgroundColor: "#E2E8F0" }}>
                <div className="h-1 rounded" style={{ width: `${r.pct}%`, backgroundColor: "#468BE6" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-baseline justify-between border-t pt-3" style={{ borderColor: "#E2E8F0", marginTop: "auto" }}>
        <span className="text-[10px] font-semibold" style={{ color: "#092F64" }}>Total Portfolio Leads: 3,241</span>
        <span className="text-[9px] font-semibold" style={{ color: "#10B981" }}>+11.2% vs last month</span>
      </div>
    </div>
  );
}

/* ─── Visual 2: Per-Location Website ─── */
function WebsiteVisual() {
  return (
    <div className="flex h-full flex-col overflow-hidden" style={{ borderRadius: "8px 8px 8px 8px", border: "1px solid #E2E8F0" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2" style={{ backgroundColor: "#F1F3F4", borderRadius: "8px 8px 0 0", padding: "6px 10px" }}>
        <div className="flex gap-1">
          <div className="h-[5px] w-[5px] rounded-full" style={{ backgroundColor: "#EF4444" }} />
          <div className="h-[5px] w-[5px] rounded-full" style={{ backgroundColor: "#F59E0B" }} />
          <div className="h-[5px] w-[5px] rounded-full" style={{ backgroundColor: "#10B981" }} />
        </div>
        <div className="ml-2 flex flex-1 items-center gap-1 bg-white" style={{ borderRadius: 4, padding: "3px 8px" }}>
          <svg width="8" height="8" viewBox="0 0 16 16" fill="none" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="10" height="7" rx="1" /><path d="M5 7V5a3 3 0 0 1 6 0v2" /></svg>
          <span className="text-[9px]" style={{ color: "#71717A", fontWeight: 400 }}>wallabywindows.com/tampa</span>
        </div>
      </div>

      {/* Website content */}
      <div className="flex flex-1 flex-col overflow-hidden bg-white" style={{ borderRadius: "0 0 8px 8px" }}>
        {/* Navigation bar */}
        <div className="flex items-center justify-between" style={{ padding: "8px 16px", borderBottom: "1px solid #F1F5F9" }}>
          <span className="text-[12px] font-bold" style={{ color: "#092F64" }}>Wallaby Windows</span>
          <div className="flex" style={{ gap: 14 }}>
            {["Home", "Services", "About", "Contact"].map((t) => (
              <span key={t} className="text-[9px] font-medium" style={{ color: "#71717A" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Hero banner */}
        <div style={{ background: "linear-gradient(135deg, #E9F5FF 0%, #D6ECFD 100%)", padding: "16px 16px" }}>
          <p className="text-[13px] font-bold" style={{ color: "#092F64" }}>Window Installation &amp; Replacement</p>
          <p className="text-[9px]" style={{ color: "#71717A", marginTop: 2 }}>Tampa, FL -- Licensed &amp; Insured Since 2015</p>
          <p className="text-[10px] font-semibold" style={{ color: "#092F64", marginTop: 4 }}>(813) 555-0147</p>
          <span className="inline-block text-[9px] font-semibold text-white" style={{ backgroundColor: "#468BE6", borderRadius: 4, padding: "4px 10px", marginTop: 8 }}>Get a Free Quote</span>
        </div>

        {/* Services section */}
        <div style={{ padding: "10px 16px" }}>
          <p className="text-[7px] font-bold uppercase" style={{ color: "#71717A", letterSpacing: "0.08em", marginBottom: 6 }}>OUR SERVICES</p>
          <div className="flex" style={{ gap: 6 }}>
            {[
              { name: "Installation", desc: "New window installation for residential and commercial properties." },
              { name: "Replacement", desc: "Upgrade old windows with energy-efficient replacements." },
              { name: "Repair", desc: "Fast, affordable window repair and glass replacement." },
            ].map((s) => (
              <div key={s.name} className="flex-1" style={{ backgroundColor: "#F8FAFC", borderRadius: 6, padding: 8 }}>
                <p className="text-[9px] font-semibold" style={{ color: "#092F64" }}>{s.name}</p>
                <p className="text-[7px]" style={{ color: "#71717A", marginTop: 2, lineHeight: 1.3 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="flex items-center justify-between" style={{ padding: "8px 16px", borderTop: "1px solid #F1F5F9" }}>
          <div className="flex items-center" style={{ gap: 4 }}>
            <Stars count={5} size={8} />
            <span className="text-[8px]" style={{ color: "#71717A" }}>4.9 on Google (47 reviews)</span>
          </div>
          <span className="text-[8px] font-medium" style={{ color: "#71717A" }}>BBB Accredited</span>
        </div>

        {/* Footer hint */}
        <div style={{ backgroundColor: "#F8FAFC", padding: "6px 16px", borderTop: "1px solid #F1F5F9", marginTop: "auto" }}>
          <p className="text-[7px]" style={{ color: "#71717A" }}>&copy; 2025 Wallaby Windows Tampa</p>
          <p className="text-[7px]" style={{ color: "#71717A", marginTop: 1 }}>123 Main Street, Tampa, FL 33601</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Visual 3: Google Search Results ─── */
function SeoVisual() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
      <div className="mb-2 flex items-center gap-1.5 rounded-full px-3 py-1" style={{ backgroundColor: "#F1F3F4" }}>
        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round"><circle cx="7" cy="7" r="5" /><line x1="11" y1="11" x2="14" y2="14" /></svg>
        <span className="text-[10px]" style={{ color: "#202124" }}>window replacement tampa</span>
      </div>
      <div className="flex gap-4 border-b pb-1.5" style={{ borderColor: "#F1F5F9" }}>
        {["All", "Images", "Maps", "News"].map((t) => (
          <span key={t} className="text-[9px]" style={{ color: t === "All" ? "#468BE6" : "#71717A", borderBottom: t === "All" ? "2px solid #468BE6" : "none", paddingBottom: 3 }}>{t}</span>
        ))}
      </div>
      <p className="mt-1.5 text-[8px]" style={{ color: "#71717A" }}>About 1,240,000 results</p>
      <div className="mt-2 rounded-lg p-2.5" style={{ background: "rgba(70,139,230,0.04)", border: "1px solid rgba(70,139,230,0.12)" }}>
        <div className="flex items-center gap-1.5">
          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#092F64" }}>
            <span className="text-[8px] font-bold text-white">W</span>
          </div>
          <div>
            <p className="text-[9px]" style={{ color: "#202124" }}>wallabywindows.com/tampa</p>
            <p className="text-[8px]" style={{ color: "#71717A" }}>https://wallabywindows.com/tampa</p>
          </div>
        </div>
        <p className="mt-1 text-[12px] font-medium" style={{ color: "#1A0DAB" }}>Wallaby Windows Tampa -- Window Installation &amp; Repair</p>
        <div className="mt-0.5 flex items-center gap-1">
          <Stars count={5} size={10} />
          <span className="text-[9px]" style={{ color: "#71717A" }}>4.9 · 47 reviews</span>
        </div>
        <p className="mt-1 text-[9px] leading-[1.4]" style={{ color: "#4D5156" }}>Professional window installation and replacement in Tampa, FL. Free estimates, licensed and insured.</p>
        <div className="mt-2 flex gap-1">
          {["Services", "Free Estimate", "Reviews", "About"].map((s) => (
            <span key={s} className="rounded px-2 py-0.5 text-[8px]" style={{ color: "#1A0DAB", border: "1px solid #DADCE0" }}>{s}</span>
          ))}
        </div>
      </div>
      <div className="mt-2 flex-1 px-2.5 opacity-50">
        <p className="text-[9px]" style={{ color: "#202124" }}>genericwindowco.com</p>
        <p className="text-[11px]" style={{ color: "#1A0DAB" }}>Generic Window Company -- Tampa Windows</p>
        <p className="text-[9px]" style={{ color: "#4D5156" }}>Affordable window services for residential and commercial...</p>
      </div>
    </div>
  );
}

/* ─── Visual 4: Google Maps Local Pack ─── */
function GbpVisual() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg" style={{ border: "1px solid #E8EAED" }}>
      <div className="relative overflow-hidden" style={{ height: 100, backgroundColor: "#E8E8E8" }}>
        <div className="absolute" style={{ top: "40%", left: 0, right: 0, height: 2, backgroundColor: "#C5C5C5" }} />
        <div className="absolute" style={{ top: "70%", left: 0, right: 0, height: 1.5, backgroundColor: "#C5C5C5" }} />
        <div className="absolute" style={{ top: 0, bottom: 0, left: "30%", width: 2, backgroundColor: "#C5C5C5" }} />
        <div className="absolute" style={{ top: 0, bottom: 0, left: "65%", width: 1.5, backgroundColor: "#C5C5C5" }} />
        <div className="absolute" style={{ top: "15%", left: "45%", width: "12%", height: "20%", backgroundColor: "#DCDCDC", borderRadius: 2 }} />
        <div className="absolute" style={{ top: "50%", left: "75%", width: "10%", height: "15%", backgroundColor: "#DCDCDC", borderRadius: 2 }} />
        <div className="absolute" style={{ top: "10%", left: "15%", width: "8%", height: "25%", backgroundColor: "#DCDCDC", borderRadius: 2 }} />
        <div className="absolute rounded" style={{ top: "55%", left: "40%", width: "15%", height: "18%", backgroundColor: "#C8E6C0" }} />
        <span className="absolute left-2 top-2 text-[7px] font-medium" style={{ color: "#B0B0B0" }}>Google Maps</span>
        <span className="absolute text-[6px]" style={{ color: "#B0B0B0", top: "35%", left: "8%" }}>Main St</span>
        <span className="absolute text-[6px]" style={{ color: "#B0B0B0", top: "65%", left: "52%" }}>Oak Ave</span>
        <svg className="absolute" style={{ left: "35%", top: "22%", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }} width="16" height="22" viewBox="0 0 14 20" fill="none"><path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" /><circle cx="7" cy="7" r="2.5" fill="white" /></svg>
      </div>
      <div className="flex flex-1 flex-col bg-white px-4 py-2">
        <div className="border-b py-2.5" style={{ borderColor: "#E8EAED" }}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[12px] font-semibold" style={{ color: "#1A1A1A" }}>Wallaby Windows</p>
              <div className="mt-0.5 flex items-center gap-1"><Stars count={5} size={10} /><span className="text-[9px]" style={{ color: "#71717A" }}>4.9 (47)</span></div>
              <p className="mt-0.5 text-[9px]" style={{ color: "#71717A" }}>Window Installation · Tampa, FL</p>
              <p className="text-[9px] font-medium" style={{ color: "#187832" }}>Open now</p>
            </div>
            <div className="flex gap-3 pt-1">
              <span className="text-[9px] font-medium" style={{ color: "#1A73E8" }}>Directions</span>
              <span className="text-[9px] font-medium" style={{ color: "#1A73E8" }}>Website</span>
            </div>
          </div>
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

/* ─── Card data ─── */
const features: {
  title: string;
  subheader: string;
  description: string;
  link: { label: string; href: string };
  visual: ReactNode;
  reversed: boolean;
}[] = [
  {
    title: "The Platform",
    subheader: "Multi-tenant infrastructure for franchise systems.",
    description: "Portfolio command center for franchisors. Per-location operations for franchisees. Brand standards enforced. Mobile app for franchisees. One platform across every brand and location.",
    link: { label: "Learn more \u2192", href: "/platform" },
    visual: <DashboardVisual />,
    reversed: false,
  },
  {
    title: "Location Pages",
    subheader: "Every location, fully built out within your corporate site.",
    description: "Not separate websites. Complete location sections within your corporate domain with dedicated service pages and service area pages. One site, hundreds of ranking pages, full domain authority.",
    link: { label: "Learn more \u2192", href: "/locations" },
    visual: <WebsiteVisual />,
    reversed: true,
  },
  {
    title: "Local SEO",
    subheader: "The methodology that keeps your locations ranking.",
    description: "Automated audits, schema deployment, content production, and citation management. AI and LLM visibility optimization built in. The moat under every page Soap deploys.",
    link: { label: "Learn more \u2192", href: "/seo" },
    visual: <SeoVisual />,
    reversed: false,
  },
  {
    title: "Google Business Profile",
    subheader: "Every profile, continuously optimized.",
    description: "Automated audits, post scheduling, review management, photo uploads, and Q&A monitoring across every location. The local pack is where the leads are.",
    link: { label: "Learn more \u2192", href: "/google-business-profile" },
    visual: <GbpVisual />,
    reversed: true,
  },
];

/* ─── Animated Card ─── */
function FeatureCard({
  title,
  subheader,
  description,
  link,
  visual,
  reversed,
}: {
  title: string;
  subheader: string;
  description: string;
  link: { label: string; href: string };
  visual: ReactNode;
  reversed: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`overflow-hidden rounded-[16px] bg-white p-6 md:p-8 ${visible ? "card-hover" : ""}`}
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 4px 20px rgba(9, 47, 100, 0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Mobile layout */}
      <div className="md:hidden">
        <div
          className="feature-card-visual overflow-hidden rounded-[14px] flex items-start p-5"
          style={{
            backgroundColor: "#F1F5F9",
            border: "1px solid #E2E8F0",
            height: 220,
          }}
        >
          <div className="w-full overflow-hidden">{visual}</div>
        </div>
        <div className="pt-6">
          <Link href={link.href} className="block text-[26px] font-extrabold leading-tight tracking-[-0.02em] transition-colors hover:text-[#468BE6]" style={{ color: "#092F64" }}>{title}</Link>
          <p className="mt-2 text-[15px] font-medium leading-[1.5]" style={{ color: "#468BE6" }}>{subheader}</p>
          <p className="mt-4 text-[15px] leading-[1.6]" style={{ color: "#1F1F1F" }}>{description}</p>
          <div className="mt-6">
            <Link href={link.href} className="arrow-link text-[15px] font-semibold transition-colors hover:underline" style={{ color: "#468BE6" }}>{link.label.replace(/\s*\u2192$/, "")} <span className="arrow-icon">{"\u2192"}</span></Link>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          padding: "32px 24px",
          minHeight: 420,
          alignItems: "center",
        }}
      >
        <div className={`flex flex-col justify-center ${reversed ? "order-2" : "order-1"}`}>
          <Link href={link.href} className="block text-[28px] font-extrabold leading-tight tracking-[-0.02em] md:text-[36px] transition-colors hover:text-[#468BE6]" style={{ color: "#092F64" }}>{title}</Link>
          <p className="mt-2 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#468BE6" }}>{subheader}</p>
          <p className="mt-4 max-w-[420px] text-[15px] leading-[1.6] md:text-[16px]" style={{ color: "#1F1F1F" }}>{description}</p>
          <div className="mt-6">
            <Link href={link.href} className="arrow-link text-[15px] font-semibold transition-colors hover:underline" style={{ color: "#468BE6" }}>{link.label.replace(/\s*\u2192$/, "")} <span className="arrow-icon">{"\u2192"}</span></Link>
          </div>
        </div>
        <div
          className={`feature-card-visual overflow-hidden rounded-[14px] flex flex-col p-5 ${reversed ? "order-1" : "order-2"}`}
          style={{
            backgroundColor: "#F1F5F9",
            border: "1px solid #E2E8F0",
            height: 380,
          }}
        >
          <div className="w-full flex-1 overflow-hidden">{visual}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Export ─── */
export default function FeatureRows() {
  return (
    <div>
      {/* Section header */}
      <div className="mt-[84px] text-center md:mt-[112px]">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "#1A5799" }}
        >
          Inside the Platform
        </p>
        <h2
          className="mx-auto mt-4 max-w-[760px] text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[44px]"
          style={{ color: "#092F64" }}
        >
          Everything franchise systems actually need.
        </h2>
      </div>

      {/* Cards */}
      <div
        className="mx-auto max-w-7xl px-6 md:px-16 flex flex-col gap-6 md:gap-8"
        style={{ marginTop: 48 }}
      >
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  );
}

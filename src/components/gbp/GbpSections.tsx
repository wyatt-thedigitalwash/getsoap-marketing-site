import Link from "next/link";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import GbpAuditMockup from "./GbpAuditMockup";
import GbpPostsMockup from "./GbpPostsMockup";
import GbpPhotoMockup from "./GbpPhotoMockup";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

function CheckList({ items, iconColor = "#1570EF", textColor = "#1F1F1F", textSize = "15px" }: { items: string[]; iconColor?: string; textColor?: string; textSize?: string }) {
  return (
    <ul className="mt-6 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check size={16} style={{ color: iconColor, marginTop: 3, flexShrink: 0 }} />
          <span style={{ fontSize: textSize, color: textColor }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const whyStats = [
  { value: "44%", label: "OF LOCAL CLICKS", desc: "Local pack results capture 44% of all clicks on local-intent searches. More than organic, paid, and additional local listings combined." },
  { value: "2.7x", label: "MORE LIKELY TO TRUST", desc: "Consumers are 2.7 times more likely to consider a business reputable when they find a complete Google Business Profile. Google's own published data." },
  { value: "71%", label: "MOBILE FIRST", desc: "71% of Google Business Profile interactions happen on mobile. Local search lives on the phone." },
];

export function WhyGbpSection() {
  return (
    <section data-bg="light" className="relative px-6 py-[84px] md:px-16 md:py-[112px]" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat", mixBlendMode: "soft-light", opacity: 0.1 }} />
      <Container className="relative">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1570EF" }}>Why It Matters</p>
            <h2 className="mx-auto mt-4 max-w-[760px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]" style={{ color: "#0E172A" }}>
              For service franchises, GBP is the front door.
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
              More than half of local service searches click straight from the map pack. No website visit. No comparison shopping. The franchisee with the strongest GBP gets the call.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {whyStats.map((s, i) => (
            <ScrollReveal key={s.value} delay={150 + i * 100} distance={24} premium className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 28 }}>
              <p className="text-[44px] font-extrabold leading-none" style={{ color: "#1570EF" }}>{s.value}</p>
              <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#0E172A" }}>{s.label}</p>
              <p className="mt-2 text-[13px] leading-[1.55]" style={{ color: "#1F1F1F" }}>{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={500}>
          <p className="mt-8 text-center text-[13px] italic" style={{ color: "#71717A" }}>
            Statistics from published 2025 local search research.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export function AuditAndPostingSection() {
  const auditFeatures = [
    "Profile completeness across every required field",
    "Photo freshness and content quality",
    "Suspension and policy violation alerts",
    "Competitive position in the local pack",
  ];
  const postingFeatures = [
    "Post calendar across the entire portfolio",
    "Brand-approved templates for offers and updates",
    "Location-specific personalization",
    "Multi-location campaigns coordinated centrally",
  ];
  const photoFeatures = [
    "Mobile app for franchisee photo capture",
    "Auto-resizing and optimization for GBP requirements",
    "Categorization (interior, exterior, team, work samples)",
    "Photo performance tracking (which images drive clicks)",
  ];
  return (
    <section data-bg="white" className="px-6 py-[84px] md:px-16 md:py-[112px]">
      <Container>
        <ScrollReveal>
          <div className="mb-12 text-center md:mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1570EF" }}>Managed Capabilities</p>
            <h2 className="mx-auto mt-4 max-w-[760px] text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[44px]" style={{ color: "#0E172A" }}>Every profile, professionally managed.</h2>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Audits card */}
          <ScrollReveal threshold={0.1} distance={48} duration={800} premium>
            <div
              className="overflow-hidden rounded-[16px] bg-white p-6 md:p-8 card-hover"
              style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(14, 23, 42, 0.05)" }}
            >
              <div className="md:hidden">
                <div className="rounded-[14px] p-5" style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}>
                  <GbpAuditMockup />
                </div>
                <div className="pt-6">
                  <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em]" style={{ color: "#0E172A" }}>Continuous GBP audits.</h2>
                  <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#1570EF" }}>Issues surfaced before they hurt rankings.</p>
                  <CheckList items={auditFeatures} />
                </div>
              </div>
              <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 48, padding: "24px 24px", alignItems: "center" }}>
                <div className="flex flex-col justify-center">
                  <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] md:text-[32px]" style={{ color: "#0E172A" }}>Continuous GBP audits.</h2>
                  <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#1570EF" }}>Issues surfaced before they hurt rankings.</p>
                  <CheckList items={auditFeatures} />
                </div>
                <div className="rounded-[14px] flex flex-col p-5" style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}>
                  <div className="w-full"><GbpAuditMockup /></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Posting card */}
          <ScrollReveal threshold={0.1} distance={48} duration={800} premium>
            <div
              className="overflow-hidden rounded-[16px] bg-white p-6 md:p-8 card-hover"
              style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(14, 23, 42, 0.05)" }}
            >
              <div className="md:hidden">
                <div className="rounded-[14px] p-5" style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}>
                  <GbpPostsMockup />
                </div>
                <div className="pt-6">
                  <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em]" style={{ color: "#0E172A" }}>Automated GBP posting.</h2>
                  <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#1570EF" }}>Brand-aligned content scheduled across every location.</p>
                  <CheckList items={postingFeatures} />
                </div>
              </div>
              <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 48, padding: "24px 24px", alignItems: "center" }}>
                <div className="rounded-[14px] flex flex-col p-5 order-1" style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}>
                  <div className="w-full"><GbpPostsMockup /></div>
                </div>
                <div className="flex flex-col justify-center order-2">
                  <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] md:text-[32px]" style={{ color: "#0E172A" }}>Automated GBP posting.</h2>
                  <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#1570EF" }}>Brand-aligned content scheduled across every location.</p>
                  <CheckList items={postingFeatures} />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Photo Management card */}
          <ScrollReveal threshold={0.1} distance={48} duration={800} premium>
            <div
              className="overflow-hidden rounded-[16px] bg-white p-6 md:p-8 card-hover"
              style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(14, 23, 42, 0.05)" }}
            >
              <div className="md:hidden">
                <div className="rounded-[14px] p-5" style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}>
                  <GbpPhotoMockup />
                </div>
                <div className="pt-6">
                  <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em]" style={{ color: "#0E172A" }}>Photo management at scale.</h2>
                  <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#1570EF" }}>Fresh photos uploaded continuously across every franchisee profile.</p>
                  <CheckList items={photoFeatures} />
                </div>
              </div>
              <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 48, padding: "24px 24px", alignItems: "center" }}>
                <div className="flex flex-col justify-center">
                  <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] md:text-[32px]" style={{ color: "#0E172A" }}>Photo management at scale.</h2>
                  <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#1570EF" }}>Fresh photos uploaded continuously across every franchisee profile.</p>
                  <CheckList items={photoFeatures} />
                </div>
                <div className="rounded-[14px] flex flex-col p-5" style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}>
                  <div className="w-full"><GbpPhotoMockup /></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export function ReviewSection() {
  const cards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
      heading: "Automated review requests",
      desc: "Customers receive a request to leave a review within hours of service completion. SMS and email channels. Customizable per location and brand. Conversion-optimized timing.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      heading: "Response management",
      desc: "Every review gets a response. Positive reviews get a thank you. Negative reviews get a thoughtful, brand-aligned response within hours. AI-drafted, human-approved at the package tier you choose.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1570EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
      heading: "Reputation monitoring",
      desc: "Real-time alerts on critical reviews, sudden rating drops, or review velocity anomalies. Issues surface before they damage rankings or conversion rates.",
    },
  ];

  return (
    <section data-bg="light" className="relative px-6 py-[84px] md:px-16 md:py-[112px]" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat", mixBlendMode: "soft-light", opacity: 0.1 }} />
      <Container className="relative">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1570EF" }}>Reviews</p>
            <h2 className="mx-auto mt-4 max-w-[760px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]" style={{ color: "#0E172A" }}>
              More reviews. Better ratings. Faster responses.
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
              Reviews drive both rankings and conversions. Soap handles request automation, response management, and reputation monitoring across every franchisee. Every five-star earned. Every one-star addressed.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <ScrollReveal key={card.heading} delay={150 + i * 100} distance={24} premium className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 28 }}>
              {card.icon}
              <h3 className="mt-5 text-[18px] font-bold" style={{ color: "#0E172A" }}>{card.heading}</h3>
              <p className="mt-3 text-[14px] leading-[1.6]" style={{ color: "#1F1F1F" }}>{card.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function IntegratedSection() {
  const cards = [
    { eyebrow: "LOCATIONS", heading: "GBP and on-page work together", desc: "Every location page on the corporate site is paired with its GBP profile. NAP consistency, schema alignment, and content sync flow both ways.", href: "/locations" },
    { eyebrow: "SEO", heading: "GBP signals feed the local pack", desc: "Review velocity, post frequency, photo updates, and engagement metrics all reinforce the on-page SEO work happening simultaneously.", href: "/seo" },
    { eyebrow: "PLATFORM", heading: "Reporting across every layer", desc: "GBP performance flows into the Soap dashboards alongside web traffic, leads, and revenue attribution. One unified view of local performance.", href: "/platform" },
  ];

  return (
    <section data-bg="light" className="relative px-6 py-[84px] md:px-16 md:py-[112px]" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat", mixBlendMode: "soft-light", opacity: 0.1 }} />
      <Container className="relative">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1570EF" }}>Integrated</p>
            <h2 className="mx-auto mt-4 max-w-[800px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]" style={{ color: "#0E172A" }}>
              GBP performance reinforces every other signal.
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
              GBP is not a standalone capability. It is interwoven with on-page SEO, reviews, content, and reporting. Every part of Soap reinforces every other part.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <ScrollReveal key={card.eyebrow} delay={150 + i * 100} distance={24} premium className="flex flex-col rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 24 }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "#0E172A" }}>{card.eyebrow}</p>
              <h3 className="mt-2 text-[16px] font-bold" style={{ color: "#0E172A" }}>{card.heading}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-[1.55]" style={{ color: "#1F1F1F" }}>{card.desc}</p>
              <Link href={card.href} className="arrow-link mt-4 inline-flex items-center gap-1 text-[13px] font-semibold" style={{ color: "#1570EF" }}>
                Learn more <span className="arrow-icon">&rarr;</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

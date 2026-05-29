import type { Metadata } from "next";
import {
  Check,
  FileLock2,
  CheckCircle,
  ShieldCheck,
  LineChart,
  Building2,
  BarChart3,
  Download,
} from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import HierarchyDiagram from "@/components/platform/HierarchyDiagram";
import DashboardMockup from "@/components/platform/DashboardMockup";
import IntegrationsCarousel from "@/components/platform/IntegrationsCarousel";
import PhoneMockup from "@/components/platform/PhoneMockup";

export const metadata: Metadata = {
  title: "Platform | Soap.",
  description:
    "One platform for franchise marketing. Portfolio-level visibility for franchisors. Turnkey local marketing for franchisees.",
};

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const peFirmFeatures = [
  "Multi-brand performance dashboard with rollups across the entire portfolio",
  "Brand-level benchmarking to compare brands against each other",
  "Exec-ready reports for board reviews and LP updates",
  "Marketing ROI visibility at the portfolio level",
];

const franchisorFeatures = [
  "Brand-wide performance dashboard with per-location drill-down",
  "Brand standards enforced through locked templates and approved content",
  "Lead distribution and routing across every location in the brand",
  "Operational reporting for brand leadership",
];

const franchiseeFeatures = [
  "Branded sub-site for the franchisee's location",
  "Local performance dashboard with leads, calls, and ranking data",
  "Reviews hub for monitoring, responding, and requesting reviews",
  "Mobile app for on-the-go management from any device",
];

const brandCards = [
  {
    Icon: FileLock2,
    heading: "Locked templates",
    description:
      "Brand-approved layouts, color palettes, and component libraries deploy across every location. Franchisees customize content within fixed structural rules.",
  },
  {
    Icon: CheckCircle,
    heading: "Approved content library",
    description:
      "Corporate maintains a library of approved blog topics, photos, and offers. Franchisees pull from the library or request custom content through the platform.",
  },
  {
    Icon: ShieldCheck,
    heading: "Compliance monitoring",
    description:
      "Automated audits flag off-brand changes, missing required disclaimers, or non-compliant pages. Corporate sees compliance status across the portfolio in real time.",
  },
];

const reportBlocks = [
  {
    Icon: LineChart,
    heading: "Per-location performance",
    description:
      "Every franchisee gets a real-time dashboard showing leads, calls, rankings, review velocity, and GBP performance.",
  },
  {
    Icon: Building2,
    heading: "Per-brand rollups",
    description:
      "Franchisors see brand-level aggregates with drill-down to individual locations and side-by-side comparisons.",
  },
  {
    Icon: BarChart3,
    heading: "Portfolio reporting",
    description:
      "PE firms and multi-brand holders see the entire portfolio. Performance by brand, region, service line, or custom segment.",
  },
  {
    Icon: Download,
    heading: "Board-ready exports",
    description:
      "Generate exec-level reports in PDF or Excel. Schedule recurring delivery to stakeholders. White-label with brand assets.",
  },
];


export default function PlatformPage() {
  return (
    <>
      {/* S1: Hero */}
      <section data-bg="white" className="px-6 pt-[148px] pb-[84px] md:px-16 md:pt-[176px] md:pb-[112px]">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-[880px] text-center">
              <h1
                className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[56px]"
                style={{ color: "#092F64" }}
              >
                Built for the way franchise systems actually operate.
              </h1>
              <p
                className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.55] md:text-[19px]"
                style={{ color: "#1F1F1F" }}
              >
                The platform underneath every franchisee location, every brand standard, and every portfolio report. Built for the structural reality of franchise: portfolio visibility, brand consistency, and franchisee independence within guardrails.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="large">Book a demo</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* S2: Hierarchy */}
      <section
        data-bg="light"
        className="relative px-6 py-[84px] md:px-16 md:py-[112px]"
        style={{ backgroundColor: "#E9F5FF" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat", mixBlendMode: "soft-light", opacity: 0.1 }}
        />
        <Container className="relative">
          <ScrollReveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              {/* Left: eyebrow + heading + description */}
              <div className="md:w-1/2">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>
                  Purpose-Built Architecture
                </p>
                <h2
                  className="mt-4 text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
                  style={{ color: "#092F64" }}
                >
                  The hierarchy Soap was built around.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
                  Most local marketing platforms treat every business as a single tenant.
                  Soap is structured differently. The platform models the real hierarchy of
                  franchise systems from day one, with native permissions, dashboards, and
                  visibility scoped to each tier. Built for franchise reality, not retrofitted
                  to it.
                </p>
              </div>

              {/* Right: 3-box visual */}
              <div className="flex justify-center md:w-1/2">
                <HierarchyDiagram />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* S3 & S4: Franchisor + Franchisee View Cards */}
      <section data-bg="white" className="px-6 py-[84px] md:px-16 md:py-[112px]">
        <Container>
          <ScrollReveal>
            <div className="mb-12 text-center md:mb-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>Every Role</p>
              <h2 className="mx-auto mt-4 max-w-[760px] text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[44px]" style={{ color: "#092F64" }}>Three views. One platform.</h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-col gap-6 md:gap-8">
            {/* PE Firm View */}
            <ScrollReveal threshold={0.1} distance={48} duration={800} premium>
              <div
                className="overflow-hidden rounded-[16px] bg-white p-6 md:p-8 card-hover"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(9, 47, 100, 0.05)",
                }}
              >
                {/* Mobile */}
                <div className="md:hidden">
                  <div
                    className="rounded-[14px] p-5"
                    style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}
                  >
                    <DashboardMockup label="PE Firm Dashboard" />
                  </div>
                  <div className="pt-6">
                    <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em]" style={{ color: "#092F64" }}>Portfolio command across every brand.</h2>
                    <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#468BE6" }}>Built for operating partners managing multi-brand portfolios.</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {peFirmFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check size={16} style={{ color: "#1A5799", marginTop: 3, flexShrink: 0 }} />
                          <span className="text-[15px]" style={{ color: "#1F1F1F" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Desktop */}
                <div
                  className="hidden md:grid"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 48, padding: "24px 24px", alignItems: "center" }}
                >
                  <div className="flex flex-col justify-center">
                    <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] md:text-[32px]" style={{ color: "#092F64" }}>Portfolio command across every brand.</h2>
                    <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#468BE6" }}>Built for operating partners managing multi-brand portfolios.</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {peFirmFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check size={16} style={{ color: "#1A5799", marginTop: 3, flexShrink: 0 }} />
                          <span className="text-[15px]" style={{ color: "#1F1F1F" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="rounded-[14px] flex flex-col p-5"
                    style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}
                  >
                    <div className="w-full">
                      <DashboardMockup label="PE Firm Dashboard" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Franchisor View */}
            <ScrollReveal threshold={0.1} distance={48} duration={800} premium>
              <div
                className="overflow-hidden rounded-[16px] bg-white p-6 md:p-8 card-hover"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(9, 47, 100, 0.05)",
                }}
              >
                {/* Mobile */}
                <div className="md:hidden">
                  <div
                    className="rounded-[14px] p-5"
                    style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}
                  >
                    <DashboardMockup label="Franchisor Dashboard" />
                  </div>
                  <div className="pt-6">
                    <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em]" style={{ color: "#092F64" }}>Corporate command center.</h2>
                    <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#468BE6" }}>Built for franchisors managing every location within their brand.</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {franchisorFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check size={16} style={{ color: "#1A5799", marginTop: 3, flexShrink: 0 }} />
                          <span className="text-[15px]" style={{ color: "#1F1F1F" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Desktop */}
                <div
                  className="hidden md:grid"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 48, padding: "24px 24px", alignItems: "center" }}
                >
                  <div
                    className="rounded-[14px] flex flex-col p-5 order-1"
                    style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}
                  >
                    <div className="w-full">
                      <DashboardMockup label="Franchisor Dashboard" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center order-2">
                    <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] md:text-[32px]" style={{ color: "#092F64" }}>Corporate command center.</h2>
                    <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#468BE6" }}>Built for franchisors managing every location within their brand.</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {franchisorFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check size={16} style={{ color: "#1A5799", marginTop: 3, flexShrink: 0 }} />
                          <span className="text-[15px]" style={{ color: "#1F1F1F" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Franchisee View */}
            <ScrollReveal threshold={0.1} distance={48} duration={800} premium>
              <div
                className="overflow-hidden rounded-[16px] bg-white p-6 md:p-8 card-hover"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(9, 47, 100, 0.05)",
                }}
              >
                {/* Mobile */}
                <div className="md:hidden">
                  <div
                    className="rounded-[14px] p-5"
                    style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}
                  >
                    <DashboardMockup label="Franchisee Dashboard" />
                  </div>
                  <div className="pt-6">
                    <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em]" style={{ color: "#092F64" }}>Per-location operations.</h2>
                    <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#468BE6" }}>Built for franchisees running their own location.</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {franchiseeFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check size={16} style={{ color: "#1A5799", marginTop: 3, flexShrink: 0 }} />
                          <span className="text-[15px]" style={{ color: "#1F1F1F" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Desktop */}
                <div
                  className="hidden md:grid"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 48, padding: "24px 24px", alignItems: "center" }}
                >
                  <div className="flex flex-col justify-center">
                    <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] md:text-[32px]" style={{ color: "#092F64" }}>Per-location operations.</h2>
                    <p className="mt-3 text-[15px] font-medium leading-[1.5] md:text-[16px]" style={{ color: "#468BE6" }}>Built for franchisees running their own location.</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {franchiseeFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check size={16} style={{ color: "#1A5799", marginTop: 3, flexShrink: 0 }} />
                          <span className="text-[15px]" style={{ color: "#1F1F1F" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="rounded-[14px] flex flex-col p-5"
                    style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}
                  >
                    <div className="w-full">
                      <DashboardMockup label="Franchisee Dashboard" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* S5: Brand Standards */}
      <section data-bg="white" className="px-6 pb-[84px] md:px-16 md:pb-[112px]">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>
                Brand Standards
              </p>
              <h2
                className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
                style={{ color: "#092F64" }}
              >
                Independence within guardrails.
              </h2>
              <p
                className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] md:text-[17px]"
                style={{ color: "#1F1F1F" }}
              >
                Corporate sets the rules. Franchisees operate within them. No rogue off-brand
                sites. No inconsistent messaging. No compliance fire drills.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {brandCards.map((card, i) => (
              <ScrollReveal
                key={card.heading}
                delay={150 + i * 100}
                distance={24}
                premium
                className="rounded-xl bg-white"
                style={{ border: "1px solid #E2E8F0", padding: 32 }}
              >
                <card.Icon size={28} style={{ color: "#1A5799" }} />
                <h3 className="mt-5 text-[18px] font-bold" style={{ color: "#092F64" }}>
                  {card.heading}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6]" style={{ color: "#1F1F1F" }}>
                  {card.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S6: Mobile App */}
      <section data-bg="dark" className="px-6 py-[84px] md:px-16 md:py-[112px]" style={{ backgroundColor: "#092F64" }}>
        <Container>
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
            <ScrollReveal className="md:w-1/2">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#C9DBEC" }}>
                Mobile App
              </p>
              <h2
                className="mt-4 text-[34px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[46px]"
              >
                Franchisees live on their phones.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#C9DBEC" }}>
                The Soap mobile app gives franchisees push notifications for new leads and reviews,
                photo capture for GBP posts, quick review responses, and a snapshot of their
                location's performance. Native iOS and Android.
              </p>
              <div className="mt-6 flex gap-3">
                <div
                  className="flex items-center justify-center rounded-lg text-[13px] font-semibold text-white"
                  style={{
                    width: 140,
                    height: 48,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  App Store
                </div>
                <div
                  className="flex items-center justify-center rounded-lg text-[13px] font-semibold text-white"
                  style={{
                    width: 140,
                    height: 48,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  Google Play
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="md:w-1/2">
              <PhoneMockup />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* S7: Reporting */}
      <section data-bg="white" className="px-6 py-[84px] md:px-16 md:py-[112px]">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>
                Reporting
              </p>
              <h2
                className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
                style={{ color: "#092F64" }}
              >
                Roll up the entire portfolio.
              </h2>
              <p
                className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] md:text-[17px]"
                style={{ color: "#1F1F1F" }}
              >
                Performance flows up from location to brand to portfolio. Custom dashboards.
                Exportable reports. Board-ready in two clicks.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {reportBlocks.map((block, i) => (
              <ScrollReveal key={block.heading} delay={100 + i * 80} distance={20}>
                <block.Icon size={28} style={{ color: "#1A5799" }} />
                <h3 className="mt-4 text-[18px] font-bold" style={{ color: "#092F64" }}>
                  {block.heading}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6]" style={{ color: "#1F1F1F" }}>
                  {block.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S8: Integrations */}
      <IntegrationsCarousel />

      {/* S9: Final CTA */}
      <section data-bg="dark" className="px-6 py-16 md:px-16 md:py-24" style={{ backgroundColor: "#092F64" }}>
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <p
                className="text-[12px] font-bold uppercase tracking-[0.15em]"
                style={{ color: "#468BE6" }}
              >
                Book a Demo
              </p>
              <h2
                className="mx-auto mt-4 max-w-[720px] text-[36px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[48px]"
              >
                See Soap in your own portfolio.
              </h2>
              <p
                className="mx-auto mt-4 max-w-[600px] text-[17px] leading-[1.6]"
                style={{ color: "#C9DBEC" }}
              >
                Show us your franchise system. We will walk you through how Soap would deploy
                across your brands and locations.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="large">Book a demo</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

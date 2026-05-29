import Link from "next/link";
import {
  Check,
  Code2,
  Gauge,
  Accessibility,
  Phone,
  Send,
  Target,
  BarChart3,
  MapPinned,
  Network,
  Layers,
} from "lucide-react";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import BrandStandardsMockup from "./BrandStandardsMockup";
import DeploymentTimeline from "./DeploymentTimeline";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const serviceCards = [
  {
    Icon: MapPinned,
    heading: "Hyper-local content",
    desc: "Tampa storm damage reads differently from Phoenix monsoon. Every page written for the local market, not boilerplate.",
  },
  {
    Icon: Layers,
    heading: "Service-specific depth",
    desc: "Process, materials, pricing context, what to expect. Real depth on what customers actually search. Not thin pages.",
  },
  {
    Icon: Network,
    heading: "Internal linking architecture",
    desc: "Service pages link to area pages. Area pages link back. Topical authority compounds across the location section.",
  },
  {
    Icon: Target,
    heading: "Conversion built in",
    desc: "Service-specific CTAs. Click-to-call. Lead forms. Every page is designed to capture intent, not just rank.",
  },
];

const seoCards = [
  {
    Icon: Code2,
    heading: "Schema markup",
    desc: "LocalBusiness, Service, FAQ, and Review schema deployed on every page automatically. Google reads the structured data and rewards it with rich results.",
  },
  {
    Icon: Gauge,
    heading: "Core Web Vitals",
    desc: "Every page scores in the top tier for Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Speed is a ranking factor. We obsess over it.",
  },
  {
    Icon: Accessibility,
    heading: "ADA compliant",
    desc: "WCAG 2.1 AA compliance built in. Semantic HTML, keyboard navigation, screen reader support, sufficient color contrast. Accessibility is not optional.",
  },
];

const leadBlocks = [
  {
    Icon: Phone,
    heading: "Click-to-call everywhere",
    desc: "Mobile visitors tap to call directly. Desktop visitors see the phone number prominently. Call tracking captures every conversion.",
  },
  {
    Icon: Send,
    heading: "Embedded lead forms",
    desc: "Multi-step lead forms on every service and area page. Submissions route to the right franchisee with full attribution. No third-party embeds.",
  },
  {
    Icon: Target,
    heading: "Page-specific CTAs",
    desc: "Each page has a CTA designed for that intent. Roofing repair gets a different CTA than commercial roofing. Higher relevance, higher conversion.",
  },
  {
    Icon: BarChart3,
    heading: "Page-level attribution",
    desc: "Every lead is tagged with the page, service, area, and source. Corporate sees the full funnel. Franchisees see their own pipeline.",
  },
];

const franchisorFeatures = [
  "Locked design system (colors, fonts, layouts)",
  "Approved content library (corporate-vetted copy and imagery)",
  "Locked template structure (franchisees customize within bounds)",
  "Required pages and required content blocks",
  "Compliance monitoring across the portfolio",
  "Instant updates push to every location",
];

/* ── S3: Service Pages (card-based) ── */
export function ServicePagesSection() {
  return (
    <section data-bg="white" className="px-6 py-[84px] md:px-16 md:py-[112px]">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>
              Service Pages
            </p>
            <h2 className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]" style={{ color: "#092F64" }}>
              What makes every page rank.
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
              Every service. Every area. Every location. Built with the editorial and structural depth that wins local search.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card, i) => (
            <ScrollReveal
              key={card.heading}
              delay={150 + i * 80}
              distance={24}
              premium
              className="rounded-xl bg-white"
              style={{ border: "1px solid #E1E5EC", padding: 28, boxShadow: "0 1px 3px rgba(9, 47, 100, 0.04)" }}
            >
              <card.Icon size={28} style={{ color: "#1A5799" }} />
              <h3 className="mt-5 text-[18px] font-bold" style={{ color: "#092F64" }}>{card.heading}</h3>
              <p className="mt-3 text-[14px] leading-[1.6] md:text-[15px]" style={{ color: "#1F1F1F" }}>{card.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── S4: SEO Architecture ── */
export function SeoArchitectureSection() {
  return (
    <section data-bg="light" className="relative px-6 py-[84px] md:px-16 md:py-[112px]" style={{ backgroundColor: "#E9F5FF" }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat", mixBlendMode: "soft-light", opacity: 0.1 }} />
      <Container className="relative">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>Technical Foundation</p>
            <h2 className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]" style={{ color: "#092F64" }}>
              Optimized before you even log in.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
              Schema markup, structured data, sitemap generation, robots configuration, page speed, accessibility. Every Soap page ships with the technical SEO foundation Google rewards.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {seoCards.map((card, i) => (
            <ScrollReveal key={card.heading} delay={150 + i * 100} premium className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 28 }}>
              <card.Icon size={28} style={{ color: "#1A5799" }} />
              <h3 className="mt-5 text-[18px] font-bold" style={{ color: "#092F64" }}>{card.heading}</h3>
              <p className="mt-3 text-[14px] leading-[1.6]" style={{ color: "#1F1F1F" }}>{card.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <p className="mt-12 text-center text-[13px] font-semibold" style={{ color: "#092F64" }}>
            For the full technical and methodological depth, see the{" "}
            <Link href="/seo" className="underline decoration-transparent transition-colors hover:decoration-current">
              SEO page
            </Link>
            .
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ── S5: Built for Leads ── */
export function LeadsSection() {
  return (
    <section data-bg="dark" className="px-6 py-[84px] md:px-16 md:py-[112px]" style={{ backgroundColor: "#092F64" }}>
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em]" style={{ color: "#C9DBEC" }}>Conversion First</p>
            <h2 className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[46px]">
              Every page is built to convert.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#C9DBEC" }}>
              Ranking is half the battle. Soap pages are designed to turn visitors into leads. Click-to-call. Embedded forms. Service-specific CTAs. Lead attribution by page.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {leadBlocks.map((block, i) => (
            <ScrollReveal key={block.heading} delay={100 + i * 80} distance={20}>
              <block.Icon size={24} style={{ color: "#468BE6" }} />
              <h3 className="mt-4 text-[18px] font-bold text-white">{block.heading}</h3>
              <p className="mt-2 text-[14px] leading-[1.6]" style={{ color: "#C9DBEC" }}>{block.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── S6: Deployment at Scale ── */
export function DeploymentSection() {
  return (
    <section data-bg="white" className="px-6 py-[84px] md:px-16 md:py-[112px]">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>Deployment</p>
            <h2 className="mx-auto mt-4 max-w-[800px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]" style={{ color: "#092F64" }}>
              New franchisee. Dozens of new pages. Live in minutes.
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
              Soap deploys per-location page sets automatically. Add a franchisee. Configure their service area and offerings. Soap generates their complete location section with every service page, every area page, and full SEO architecture. Live and indexed within hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16">
          <DeploymentTimeline />
        </div>
      </Container>
    </section>
  );
}

/* ── S7: Franchisor Controls ── */
export function FranchisorControlsSection() {
  return (
    <section data-bg="light" className="relative px-6 py-[84px] md:px-16 md:py-[112px]" style={{ backgroundColor: "#E9F5FF" }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat", mixBlendMode: "soft-light", opacity: 0.1 }} />
      <Container className="relative">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
          <ScrollReveal className="md:w-1/2">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>Franchisor Controls</p>
            <h2 className="mt-4 text-[26px] font-bold leading-tight tracking-[-0.02em] md:text-[32px]" style={{ color: "#092F64" }}>
              Corporate sets the rules. Soap enforces them.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] md:text-[16px]" style={{ color: "#1F1F1F" }}>
              Franchisors define the brand system, approved content, locked templates, and compliance requirements. Soap deploys those rules across every location page. Updates push instantly across the portfolio.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {franchisorFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check size={16} style={{ color: "#1A5799", marginTop: 3, flexShrink: 0 }} />
                  <span className="text-[15px]" style={{ color: "#1F1F1F" }}>{f}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={200} className="md:w-1/2">
            <BrandStandardsMockup />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

import GlobalNav from "@/components/GlobalNav";
import DashboardPlaceholder from "@/components/DashboardPlaceholder";
import HeroAnimations from "@/components/HeroAnimations";
import ScrollReveal from "@/components/ScrollReveal";
import FeatureRows from "@/components/FeatureRows";
import AutomationSection from "@/components/AutomationSection";
import PlatformTabs from "@/components/PlatformTabs";
import FaqAccordion from "@/components/FaqAccordion";
import GuidesSection from "@/components/GuidesSection";
import IntegrationTrust from "@/components/IntegrationTrust";
import Button from "@/components/Button";
import Container from "@/components/Container";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;


export default function Home() {
  return (
    <>
      {/* ============================================= */}
      {/* Section 1: Hero                                */}
      {/* ============================================= */}
      <HeroAnimations>
        <div className="relative">
          <section
            id="hero"
            data-bg="dark"
            className="relative overflow-visible md:h-dvh"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 20%, #152D54 0%, #0E172A 70%, #060D1A 100%)",
              borderWidth: "24px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "40px",
            }}
          >
            {/* Noise texture overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: NOISE_SVG,
                backgroundRepeat: "repeat",
                mixBlendMode: "overlay",
                opacity: 0.15,
                borderRadius: "16px",
              }}
            />
            {/* Bottom fade */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, transparent 80%, rgba(6, 31, 71, 0.4) 100%)",
                borderRadius: "16px",
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:h-full">
              <GlobalNav inline />
              <div className="mx-auto max-w-7xl px-8 pt-8 pb-8 text-center md:flex md:flex-1 md:flex-col md:items-center md:justify-center md:px-16 md:pt-0 md:pb-[200px]">
                {/* Headline */}
                <h1 data-hero-headline className="text-[34px] leading-[1.05] tracking-[-0.02em] text-white md:text-[68px] xl:text-[80px]">
                  <span className="block font-extrabold">
                    Marketing infrastructure
                  </span>
                  <span className="block font-normal italic">
                    for franchise systems
                    <span style={{ color: "#1570EF" }}>.</span>
                  </span>
                </h1>

                {/* Subheadline */}
                <p
                  data-hero-sub
                  className="mx-auto mt-8 max-w-[650px] text-[17px] leading-[1.6] md:text-[19px]"
                  style={{ color: "#C9DBEC" }}
                >
                  Soap gives franchise systems unified visibility across every
                  brand and location. Per-location websites, automated local SEO,
                  Google Business Profile management, and integrated reporting in
                  one platform.
                </p>

                {/* CTAs */}
                <div data-hero-ctas className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="/contact"
                    className="btn-primary w-full text-center text-[16px] font-semibold text-white sm:w-auto"
                    style={{ backgroundColor: "#1570EF", padding: "14px 32px", borderRadius: "8px" }}
                  >
                    Book a Demo
                  </a>
                  <a
                    href="#"
                    className="btn-outline w-full text-center text-[16px] font-semibold sm:w-auto"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      color: "#FFFFFF",
                      padding: "13px 31px",
                      borderRadius: "8px",
                    }}
                  >
                    Download Our App
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard mockup */}
          <div data-hero-mockup className="mx-auto mt-8 max-w-7xl px-6 md:absolute md:bottom-0 md:left-1/2 md:z-10 md:mt-0 md:w-[90%] md:max-w-[900px] md:px-0 md:-translate-x-1/2 md:translate-y-[calc(65%-24px)]">
            <DashboardPlaceholder label="Product Demo Video" icon="play" />
          </div>
        </div>
      </HeroAnimations>

      {/* ============================================= */}
      {/* Section 2: Pain Points + Feature Cards         */}
      {/* ============================================= */}
      <section data-bg="white" className="pt-12 pb-0 md:pt-[370px] md:pb-0">
        <ScrollReveal threshold={0.2} duration={700} distance={32} premium className="px-6 md:px-16">
          <h2
            className="mx-auto max-w-[900px] text-center text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[52px]"
            style={{ color: "#0E172A" }}
          >
            <span className="block"><span className="italic" style={{ color: "#1570EF" }}>Franchisors</span> need visibility.</span>
            <span className="block"><span className="italic" style={{ color: "#1570EF" }}>Franchisees</span> need leads.</span>
            <span className="block"><span className="italic" style={{ color: "#1570EF" }}>Soap</span> delivers both.</span>
          </h2>
        </ScrollReveal>
      </section>

      {/* ============================================= */}
      {/* Feature Cards                                  */}
      {/* ============================================= */}
      <section data-bg="white" className="pb-0 md:pb-0">
        <FeatureRows />
      </section>

      {/* ============================================= */}
      {/* Section 2b: Automation                         */}
      {/* ============================================= */}
      <AutomationSection />

      {/* ============================================= */}
      {/* Section 2c: Integration Trust                  */}
      {/* ============================================= */}
      <IntegrationTrust />

      {/* ============================================= */}
      {/* Section 3: Inside the Platform                 */}
      {/* ============================================= */}
      <section
        data-bg="light"
        className="relative px-6 py-[84px] md:px-16 md:py-[112px]"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, #F8FAFC 0%, #F1F5F9 100%)",
          borderTop: "1px solid rgba(14, 23, 42, 0.06)",
        }}
      >
        {/* Noise texture overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: NOISE_SVG,
            backgroundRepeat: "repeat",
            mixBlendMode: "soft-light",
            opacity: 0.1,
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <p
              className="text-center text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#1570EF" }}
            >
              Inside the Platform
            </p>
            <h2
              className="mt-4 text-center text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
              style={{ color: "#0E172A" }}
            >
              Two views. One system.
            </h2>
            <p
              className="mx-auto mt-4 max-w-[650px] text-center text-[16px] leading-[1.6] md:text-[17px]"
              style={{ color: "#1F1F1F" }}
            >
              Soap gives franchisors portfolio-wide visibility and gives each
              franchisee a dashboard scoped to their location. Same platform,
              different views.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200} distance={20}>
            <div className="mt-12">
              <PlatformTabs />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================= */}
      {/* Section 4: Guides                              */}
      {/* ============================================= */}
      <section id="resources" data-bg="white" className="pt-[84px] pb-0 md:pt-[112px] md:pb-0">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <GuidesSection />
        </div>
      </section>

      {/* ============================================= */}
      {/* Section 5: FAQ                                 */}
      {/* ============================================= */}
      <section data-bg="white" className="px-6 pt-[84px] pb-[84px] md:px-16 md:pt-[112px] md:pb-[112px]">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2
              className="text-center text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
              style={{ color: "#0E172A" }}
            >
              What franchisors usually ask.
            </h2>
          </ScrollReveal>

          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* Section 6: Final CTA                           */}
      {/* ============================================= */}
      <section
        id="contact"
        data-bg="dark"
        className="px-6 py-16 md:px-16 md:py-24"
        style={{ backgroundColor: "#0E172A" }}
      >
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h2
                className="mx-auto max-w-[800px] text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[48px]"
              >
                Let us clean up your franchise marketing.
              </h2>
              <p
                className="mx-auto mt-4 max-w-[600px] text-[17px] leading-[1.55]"
                style={{ color: "#C9DBEC" }}
              >
                Tell us about your franchise system. We will follow up within 24
                hours with a personalized walkthrough.
              </p>
              <div className="mt-10">
                <Button href="/contact" size="large">Book a Demo</Button>
              </div>
              <p
                className="mt-6 text-[14px]"
                style={{ color: "#C9DBEC" }}
              >
                Or email Wyatt directly at{" "}
                <a
                  href="mailto:wyatt@thedigitalwash.com"
                  className="text-white underline-offset-2 transition-colors hover:underline"
                >
                  wyatt@thedigitalwash.com
                </a>
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

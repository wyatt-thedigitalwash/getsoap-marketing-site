import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  WhyGbpSection,
  AuditAndPostingSection,
  ReviewSection,
} from "@/components/gbp/GbpSections";
import { PerformanceSection, ScaleSection } from "@/components/gbp/GbpSections2";

export const metadata: Metadata = {
  title: "Google Business Profile | Soap.",
  description:
    "Manage every franchisee's Google Business Profile across the portfolio. Audits, posting, reviews, photos, and performance reporting at scale.",
};

export default function GoogleBusinessProfilePage() {
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
                The local pack is where the leads are.
              </h1>
              <p
                className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.55] md:text-[19px]"
                style={{ color: "#1F1F1F" }}
              >
                Customers searching for service in their city land on the Google
                local pack. They tap, call, and convert directly from there. Soap
                manages every franchisee's Google Business Profile across the
                portfolio. Continuously optimized. Continuously posted.
                Continuously protected.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="large">
                  Book a demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* S2: Why GBP */}
      <WhyGbpSection />

      {/* S3 & S4: Audits + Posting */}
      <AuditAndPostingSection />

      {/* S5: Reviews */}
      <ReviewSection />

      {/* S6: Scale */}
      <ScaleSection />

      {/* S7: Performance */}
      <PerformanceSection />

      {/* S8: Final CTA */}
      <section
        data-bg="dark"
        className="px-6 py-16 md:px-16 md:py-24"
        style={{ backgroundColor: "#092F64" }}
      >
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <p
                className="text-[12px] font-bold uppercase tracking-[0.15em]"
                style={{ color: "#468BE6" }}
              >
                Book a Demo
              </p>
              <h2 className="mx-auto mt-4 max-w-[720px] text-[36px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[48px]">
                See what GBP could look like across your portfolio.
              </h2>
              <p
                className="mx-auto mt-4 max-w-[600px] text-[17px] leading-[1.6]"
                style={{ color: "#C9DBEC" }}
              >
                Show us your franchise system. We will walk through how Soap
                would deploy GBP management across every location and what we
                would prioritize in the first 30 days.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="large">
                  Book a demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

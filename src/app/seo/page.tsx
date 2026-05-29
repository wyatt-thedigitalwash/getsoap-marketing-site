import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  MethodologySection,
  AuditSection,
  SchemaSection,
  ContentSection,
  AiSearchSection,
  ProofSection,
} from "@/components/seo/SeoSections";

export const metadata: Metadata = {
  title: "SEO | Soap.",
  description:
    "Proprietary local SEO methodology for franchise systems. Automated audits, schema deployment, content optimization, and AI search visibility.",
};

export default function SeoPage() {
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
                The local SEO engine running under every page.
              </h1>
              <p
                className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.55] md:text-[19px]"
                style={{ color: "#1F1F1F" }}
              >
                Soap is built on a proprietary local SEO methodology refined
                across years of franchise marketing. Automated audits, schema
                deployment, content optimization, and AI search visibility. The
                moat that keeps your locations ranking when competitors do not.
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

      {/* S2: Methodology */}
      <MethodologySection />

      {/* S3: Audits */}
      <AuditSection />

      {/* S4: Schema */}
      <SchemaSection />

      {/* S5: Content */}
      <ContentSection />

      {/* S6: AI Search */}
      <AiSearchSection />

      {/* S7: Proof */}
      <ProofSection />

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
                See the SEO engine in action.
              </h2>
              <p
                className="mx-auto mt-4 max-w-[600px] text-[17px] leading-[1.6]"
                style={{ color: "#C9DBEC" }}
              >
                Show us your franchise system. We will walk through the SEO
                methodology Soap would apply to your portfolio and the specific
                signals we would optimize at the location level.
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

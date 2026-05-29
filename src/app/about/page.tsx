import type { Metadata } from "next";
import { User } from "lucide-react";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About | Soap.",
  description:
    "Soap is built by a developer tired of watching franchises get screwed by vendors cutting corners. Real work. Real transparency.",
};

export default function AboutPage() {
  return (
    <>
      {/* S1: Hero — two-column with headshot */}
      <section data-bg="white" className="px-6 pt-[148px] pb-12 md:px-16 md:pt-[176px] md:pb-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
            {/* Left: headshot */}
            <ScrollReveal className="w-full max-w-[280px] shrink-0 md:w-[40%] md:max-w-none">
              <div
                className="flex flex-col items-center justify-center overflow-hidden rounded-xl"
                style={{
                  aspectRatio: "4 / 5",
                  backgroundColor: "#092F64",
                  boxShadow: "0 4px 20px rgba(9, 47, 100, 0.06), 0 12px 40px rgba(9, 47, 100, 0.04)",
                }}
              >
                <User size={48} style={{ color: "rgba(255,255,255,0.3)" }} />
                <span className="mt-2 text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>Headshot placeholder</span>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[16px] font-bold" style={{ color: "#092F64" }}>Wyatt Bensman</p>
                <p className="text-[14px]" style={{ color: "#71717A" }}>Founder, The Digital Wash</p>
              </div>
            </ScrollReveal>

            {/* Right: headline + body */}
            <ScrollReveal delay={150} className="md:w-[60%]">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>About</p>
              <h1
                className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[56px]"
                style={{ color: "#092F64" }}
              >
                I built Soap because no one else was going to.
              </h1>
              <p
                className="mt-6 max-w-[580px] text-[17px] leading-[1.6] md:text-[20px]"
                style={{ color: "#1F1F1F" }}
              >
                Three years building websites and managing SEO for franchise
                systems showed me the same problems over and over: vendors cutting
                corners, clients with no visibility, work that didn't translate to
                results. Soap is the platform I built to fix that.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* S2: Why Soap Exists — article column */}
      <section data-bg="white" className="px-6 pb-[84px] md:px-16 md:pb-[112px]">
        <div className="mx-auto max-w-[1100px]">
          <ScrollReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#1A5799" }}>Why Soap Exists</p>
            <h2
              className="mt-4 text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[44px]"
              style={{ color: "#092F64" }}
            >
              Real work. Real transparency.
            </h2>
            <p
              className="mt-6 text-[17px] leading-[1.65] md:text-[18px]"
              style={{ color: "#1F1F1F" }}
            >
              Most marketing platforms are built to look impressive in demos and
              underdeliver in reality. Most agencies bill premium rates for work
              the client can't see and wouldn't understand if they could. Soap is
              the opposite.
            </p>
            <p
              className="mt-5 text-[17px] leading-[1.65] md:text-[18px]"
              style={{ color: "#1F1F1F" }}
            >
              I watched the same things happen on project after project. Corporate
              sites where only the homepage indexed, leaving each location with a
              single page competing for every search in their area. Schema markup
              completely skipped. Franchisees with zero control over the copy and
              content on their own page. Google Business Profiles left untended for
              months. Reports that buried what wasn't getting done. Franchisees
              paying five times what they should be for marketing that never
              delivered.
            </p>
            <p
              className="mt-5 text-[17px] leading-[1.65] md:text-[18px]"
              style={{ color: "#1F1F1F" }}
            >
              Soap is the platform built from understanding exactly where that
              work was failing. Every capability exists because something was
              missing from how franchise marketing was actually being delivered.
            </p>
            <p
              className="mt-5 text-[17px] leading-[1.65] md:text-[18px]"
              style={{ color: "#1F1F1F" }}
            >
              I'm the developer who built it and the operator who runs it. A
              small team handles delivery alongside me, but the methodology, the
              platform, and the customer relationships are mine. If you have a
              question about how Soap actually works, you ask me, and I'll
              explain it without dressing it up.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* S3: Contact — dark CTA */}
      <section
        data-bg="dark"
        className="px-6 py-24 md:px-16 md:py-24"
        style={{ backgroundColor: "#092F64" }}
      >
        <div className="mx-auto max-w-[720px] text-center">
          <ScrollReveal>
            <p
              className="text-[12px] font-bold uppercase tracking-[0.15em]"
              style={{ color: "#468BE6" }}
            >
              Get in Touch
            </p>
            <h2
              className="mx-auto mt-4 max-w-[720px] text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
            >
              Want to see if Soap fits your portfolio?
            </h2>
            <p
              className="mx-auto mt-5 max-w-[600px] text-[17px] leading-[1.65] md:text-[18px]"
              style={{ color: "#C9DBEC" }}
            >
              Book a demo. We'll walk through how Soap would deploy across your
              franchise system. If it's the right fit, we move forward. If it's
              not, you'll know in 30 minutes.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="large">Book a demo</Button>
            </div>
            <p className="mt-5 text-[14px]" style={{ color: "#C9DBEC" }}>
              Or email me directly at{" "}
              <a
                href="mailto:wyatt@thedigitalwash.com"
                className="text-white underline-offset-2 transition-colors hover:underline"
              >
                wyatt@thedigitalwash.com
              </a>
            </p>
            <p className="mt-12 text-[14px] italic" style={{ color: "#C9DBEC" }}>
              -- Wyatt, Tampa
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

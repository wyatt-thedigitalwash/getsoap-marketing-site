import type { Metadata } from "next";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import ContactFormLight from "@/components/contact/ContactFormLight";
import ContactFaq from "@/components/contact/ContactFaq";

export const metadata: Metadata = {
  title: "Contact | Soap.",
  description:
    "Book a demo of the Soap franchise marketing platform. Talk to the founder directly.",
};

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function ContactPage() {
  return (
    <>
      {/* S1: Hero with Form */}
      <section
        data-bg="white"
        className="px-6 pt-[148px] pb-[84px] md:px-16 md:pt-[176px] md:pb-12"
      >
        <Container>
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
            {/* Left: text content */}
            <ScrollReveal className="md:w-1/2">
              <h1
                className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[56px]"
                style={{ color: "#0E172A" }}
              >
                Let us clean up your franchise marketing.
              </h1>
              <p
                className="mt-6 text-[17px] leading-[1.55] md:text-[19px]"
                style={{ color: "#1F1F1F" }}
              >
                Tell us about your franchise system. We will follow up
                within 24 hours with a personalized walkthrough of how Soap
                would deploy across your portfolio.
              </p>

              <div className="mt-12">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "#1570EF", marginBottom: 12 }}
                >
                  Or email directly
                </p>
                <a
                  href="mailto:wyatt@thedigitalwash.com"
                  className="text-[18px] font-semibold transition-colors hover:text-[#1570EF] hover:underline"
                  style={{ color: "#0E172A" }}
                >
                  wyatt@thedigitalwash.com
                </a>
                <p
                  className="mt-2 text-[13px]"
                  style={{ color: "#71717A" }}
                >
                  Wyatt Bensman, Founder. Direct line, no account managers.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal delay={150} className="md:w-1/2">
              <div
                className="contact-form-light rounded-[18px]"
                style={{ backgroundColor: "#F8FAFC", padding: "40px", border: "1px solid #E2E8F0", boxShadow: "0 8px 32px rgba(14, 23, 42, 0.08)" }}
              >
                <ContactFormLight />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* S2: What to Expect */}
      <section
        data-bg="light"
        className="relative px-6 py-[84px] md:px-16 md:py-[112px]"
        style={{ backgroundColor: "#F8FAFC" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: NOISE_SVG,
            backgroundRepeat: "repeat",
            mixBlendMode: "soft-light",
            opacity: 0.1,
          }}
        />
        <Container className="relative">
          <ScrollReveal>
            <div className="text-center">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#1570EF" }}
              >
                What to Expect
              </p>
              <h2
                className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
                style={{ color: "#0E172A" }}
              >
                Here is what happens next.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                heading: "We review your request",
                desc: "Wyatt reviews every demo request personally. No SDR layer, no auto-responder. You get a thoughtful reply within 24 hours.",
              },
              {
                num: "02",
                heading: "We schedule a walkthrough",
                desc: "A 30 to 45-minute call covering your franchise system, current marketing setup, and how Soap would deploy across your portfolio. No generic demos.",
              },
              {
                num: "03",
                heading: "We send a tailored proposal",
                desc: "If Soap is the right fit, you get a written proposal sized to your portfolio. Pricing, deployment timeline, and projected outcomes specific to your franchise system.",
              },
            ].map((card, i) => (
              <ScrollReveal
                key={card.num}
                delay={150 + i * 100}
                distance={24}
                premium
                className="rounded-xl bg-white"
                style={{ border: "1px solid #E2E8F0", padding: 28 }}
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[14px] font-bold text-white"
                  style={{ backgroundColor: "#1570EF" }}
                >
                  {card.num}
                </div>
                <h3
                  className="mt-5 text-[17px] font-bold"
                  style={{ color: "#0E172A" }}
                >
                  {card.heading}
                </h3>
                <p
                  className="mt-3 text-[14px] leading-[1.6]"
                  style={{ color: "#1F1F1F" }}
                >
                  {card.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S3: FAQ */}
      <section
        data-bg="white"
        className="px-6 py-[84px] md:px-16 md:py-[112px]"
      >
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#1570EF" }}
              >
                Quick Answers
              </p>
              <h2
                className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
                style={{ color: "#0E172A" }}
              >
                Before you write.
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-12">
            <ContactFaq />
          </div>
        </Container>
      </section>
    </>
  );
}

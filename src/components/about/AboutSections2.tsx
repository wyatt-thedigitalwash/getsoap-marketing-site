import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Section 5: Principles ────────────────────────────────────────── */

const principles = [
  {
    num: "01",
    heading: "Founder-led, by design",
    description:
      "Customers talk to the operator. No account management layers. No junior team. The person responsible for Soap is the person you work with.",
  },
  {
    num: "02",
    heading: "Productized, not custom",
    description:
      "Every package is a defined product with fixed scope and outcomes. No hourly billing. No scope creep. Customers buy a thing, not a service contract.",
  },
  {
    num: "03",
    heading: "Vertical integration",
    description:
      "SEO, content, GBP, reviews, technical work. All owned in-house. No outsourced delivery. The team that builds Soap runs the work.",
  },
  {
    num: "04",
    heading: "Transparent by default",
    description:
      "Pricing is clear. Methodology is documented. Results are reportable. No black box. Customers see exactly what Soap is doing and why.",
  },
];

export function PrinciplesSection() {
  return (
    <section data-bg="white" className="px-6 py-[84px] md:px-16 md:py-[112px]">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#1A5799" }}
            >
              Operating Principles
            </p>
            <h2
              className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
              style={{ color: "#092F64" }}
            >
              How Soap is built. How Soap is run.
            </h2>
            <p
              className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] md:text-[17px]"
              style={{ color: "#1F1F1F" }}
            >
              The same principles that made the agency work are the principles
              Soap runs on.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {principles.map((p, i) => (
            <ScrollReveal key={p.num} delay={100 + i * 80} distance={20}>
              <p
                className="text-[32px] font-extrabold"
                style={{ color: "#93BFEF" }}
              >
                {p.num}
              </p>
              <h3
                className="mt-2 text-[18px] font-bold"
                style={{ color: "#092F64" }}
              >
                {p.heading}
              </h3>
              <p
                className="mt-2 text-[14px] leading-[1.6]"
                style={{ color: "#1F1F1F" }}
              >
                {p.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Section 6: Roadmap ───────────────────────────────────────────── */

const roadmapItems = [
  {
    eyebrow: "NOW",
    heading: "Foundation",
    description:
      "Per-location pages, local SEO, GBP management, reviews, reporting. The capabilities that drive measurable revenue for franchise systems today.",
  },
  {
    eyebrow: "NEXT",
    heading: "Expansion",
    description:
      "Paid ads integration, content marketplace, advanced reporting, custom integrations. The capabilities that deepen Soap's value across enterprise portfolios.",
  },
  {
    eyebrow: "BEYOND",
    heading: "Infrastructure",
    description:
      "Soap becomes the system of record for franchise marketing across every brand, every location, every channel. The operating system PE-backed franchise portfolios run on.",
  },
];

export function RoadmapSection() {
  return (
    <section
      data-bg="dark"
      className="px-6 py-[84px] md:px-16 md:py-[112px]"
      style={{ backgroundColor: "#092F64" }}
    >
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.15em]"
              style={{ color: "#C9DBEC" }}
            >
              Where Soap Is Headed
            </p>
            <h2
              className="mx-auto mt-4 max-w-[720px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[46px]"
            >
              The first version is the beginning.
            </h2>
            <p
              className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] md:text-[17px]"
              style={{ color: "#C9DBEC" }}
            >
              Soap is launching with the foundational capabilities franchise
              systems need today. The roadmap builds toward becoming the
              operating system for franchise marketing across the next decade.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {roadmapItems.map((item, i) => (
            <ScrollReveal key={item.eyebrow} delay={150 + i * 100} distance={20}>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color: "#468BE6" }}
              >
                {item.eyebrow}
              </p>
              <h3 className="mt-3 text-[18px] font-bold text-white">
                {item.heading}
              </h3>
              <p
                className="mt-3 text-[14px] leading-[1.6]"
                style={{ color: "#C9DBEC" }}
              >
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

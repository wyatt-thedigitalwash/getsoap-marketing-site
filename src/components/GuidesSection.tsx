import ScrollReveal from "@/components/ScrollReveal";

const guides = [
  {
    pill: "Deployment",
    title: "The First 90 Days: How Soap Deploys Across a Franchise Portfolio",
    teaser:
      "A week-by-week breakdown of what happens after you sign. Brand onboarding, website deployment, franchisee activation, first audits, and the first monthly performance report. Built for franchise systems that want operational clarity before they commit.",
    href: "/resources/first-90-days",
  },
  {
    pill: "Strategy",
    title:
      "The Infrastructure Thesis: Why Franchise Portfolios Need Unified Marketing Architecture",
    teaser:
      "Fragmented vendor stacks cost more than they save. Brand consistency at scale drives exit multiples. Portfolio-wide visibility is becoming table stakes. The strategic argument for unified marketing infrastructure in PE-backed franchise systems.",
    href: "/resources/infrastructure-thesis",
  },
  {
    pill: "Operations",
    title:
      "How Soap Handles 100 Franchisees Without Losing the Plot",
    teaser:
      "The operational reality behind portfolio-wide marketing. How Soap scales SEO, content, GBP, and reviews across hundreds of locations without compromising quality. The automation engine, the human review layer, and the methodology that makes it work.",
    href: "/resources/operating-at-scale",
  },
];

export default function GuidesSection() {
  return (
    <>
      <ScrollReveal>
        <p
          className="text-center text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "#1A5799" }}
        >
          Resources
        </p>
        <h2
          className="mt-4 text-center text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
          style={{ color: "#092F64" }}
        >
          Guides for franchise operators.
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {guides.map((guide, i) => (
          <ScrollReveal
            key={guide.title}
            delay={200 + i * 100}
            distance={32}
            duration={700}
            premium
            className="guide-card flex flex-col rounded-[16px] bg-white"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 20px rgba(9, 47, 100, 0.05)",
              padding: "32px 28px",
            }}
          >
            <span
              className="self-start rounded-full text-[11px] font-semibold uppercase tracking-[0.05em]"
              style={{
                backgroundColor: "rgba(70, 139, 230, 0.08)",
                color: "#1A5799",
                padding: "4px 12px",
              }}
            >
              {guide.pill}
            </span>
            <a
              href={guide.href}
              className="block text-[20px] font-bold leading-[1.3] transition-colors hover:text-[#468BE6]"
              style={{ color: "#092F64", marginTop: 20 }}
            >
              {guide.title}
            </a>
            <p
              className="text-[14px] leading-[1.5] md:text-[15px]"
              style={{ color: "#71717A", marginTop: 10 }}
            >
              {guide.teaser}
            </p>
            <div style={{ marginTop: "auto", paddingTop: 20 }}>
              <a
                href={guide.href}
                className="arrow-link text-[14px] font-semibold transition-colors hover:underline"
                style={{ color: "#468BE6" }}
              >
                Read Guide <span className="arrow-icon">&rarr;</span>
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}

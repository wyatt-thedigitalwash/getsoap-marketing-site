import ScrollReveal from "@/components/ScrollReveal";

const guides = [
  {
    pill: "Deployment",
    title: "The First 90 Days: How Soap Deploys Across a Franchise Portfolio",
    teaser:
      "A week-by-week breakdown of what happens after you sign: brand onboarding, website deployment, franchisee activation, and the first monthly performance report.",
    href: "/resources/first-90-days",
  },
  {
    pill: "Strategy",
    title:
      "The Infrastructure Thesis: Why Franchise Portfolios Need Unified Marketing Architecture",
    teaser:
      "The strategic argument for unified marketing infrastructure in PE-backed franchise systems. Why fragmented vendor stacks cost more than they save.",
    href: "/resources/infrastructure-thesis",
  },
  {
    pill: "Operations",
    title:
      "How Soap Handles 100 Franchisees Without Losing the Plot",
    teaser:
      "How Soap scales SEO, content, GBP, and reviews across hundreds of locations without compromising quality. The automation engine and the human review layer.",
    href: "/resources/operating-at-scale",
  },
];

export default function GuidesSection() {
  return (
    <>
      <ScrollReveal>
        <p
          className="text-center text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "#1570EF" }}
        >
          Resources
        </p>
        <h2
          className="mt-4 text-center text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
          style={{ color: "#0E172A" }}
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
              boxShadow: "0 4px 20px rgba(14, 23, 42, 0.05)",
              padding: "32px 28px",
            }}
          >
            <span
              className="self-start rounded-full text-[11px] font-semibold uppercase tracking-[0.05em]"
              style={{
                backgroundColor: "rgba(21, 112, 239, 0.08)",
                color: "#1570EF",
                padding: "4px 12px",
              }}
            >
              {guide.pill}
            </span>
            <a
              href={guide.href}
              className="block text-[20px] font-bold leading-[1.3] transition-colors hover:text-[#1570EF]"
              style={{ color: "#0E172A", marginTop: 20 }}
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
                style={{ color: "#1570EF" }}
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

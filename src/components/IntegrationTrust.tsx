import ScrollReveal from "@/components/ScrollReveal";

const integrations = [
  {
    name: "Google",
    label: "Google Business Profile",
    description:
      "Direct API integration for review management, post publishing, photo uploads, and performance insights across every location.",
    color: "#71717A",
  },
  {
    name: "Ahrefs",
    label: "Ahrefs SEO Intelligence",
    description:
      "Data-driven content strategy powered by real keyword research, rank tracking, and competitive analysis.",
    color: "#FF6F00",
  },
  {
    name: "Stripe",
    label: "Stripe Billing",
    description:
      "Automated subscription management, invoicing, and payment processing for every franchisee.",
    color: "#635BFF",
  },
];

export default function IntegrationTrust() {
  return (
    <section data-bg="white" className="pt-0 pb-[84px] md:pt-0 md:pb-[112px]">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <ScrollReveal>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#1570EF" }}
          >
            Integrations
          </p>
          <h2
            className="mt-4 text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
            style={{ color: "#0E172A" }}
          >
            Built on tools you trust.
          </h2>
          <p
            className="mt-4 max-w-[600px] text-[16px] leading-[1.6] md:text-[17px]"
            style={{ color: "#1F1F1F" }}
          >
            Soap integrates with industry-leading platforms to deliver reliable,
            data-driven results for every location.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {integrations.map((item, i) => (
            <ScrollReveal
              key={item.name}
              delay={150 + i * 100}
              distance={24}
              duration={700}
              premium
            >
              <div
                className="flex h-full flex-col rounded-[16px] bg-white"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(14, 23, 42, 0.05)",
                  padding: "32px 28px",
                }}
              >
                {/* Logo placeholder */}
                <div
                  className="integration-logo flex items-center"
                  style={{ height: 40 }}
                >
                  <span
                    className="text-[22px] font-extrabold tracking-tight"
                    style={{ color: item.color }}
                  >
                    {item.name}
                  </span>
                </div>

                <p
                  className="text-[15px] font-semibold"
                  style={{ color: "#0E172A", marginTop: 16 }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[14px] leading-[1.6]"
                  style={{ color: "#1F1F1F", marginTop: 8 }}
                >
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <p
            className="mt-10 text-center text-[13px]"
            style={{ color: "#94A3B8" }}
          >
            Also integrated with Twilio, Google Analytics, and Google Search
            Console
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    heading: "Add franchisee",
    description: "Service area, services offered, contact info, photos",
  },
  {
    number: "02",
    heading: "Pages auto-generate",
    description: "Service pages, area pages, all under /locations/[city]",
  },
  {
    number: "03",
    heading: "SEO deploys",
    description: "Schema, sitemap entries, structured data, internal linking",
  },
  {
    number: "04",
    heading: "Pages go live",
    description: "Indexed at the corporate domain, ready to rank",
  },
];

export default function DeploymentTimeline() {
  return (
    <div className="relative flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-0">
      {/* Connecting line for desktop */}
      <div
        className="pointer-events-none absolute top-5 right-[calc(12.5%+20px)] left-[calc(12.5%+20px)] hidden md:block"
        style={{ height: 2, backgroundColor: "#E2E8F0" }}
      />

      {steps.map((step, i) => (
        <ScrollReveal
          key={step.number}
          delay={100 + i * 120}
          distance={16}
          className="relative flex flex-col items-center md:flex-1"
        >
          {/* Vertical line between steps on mobile */}
          {i > 0 && (
            <div
              className="absolute -top-6 left-1/2 -translate-x-1/2 md:hidden"
              style={{ width: 2, height: 16, backgroundColor: "#E2E8F0" }}
            />
          )}
          <div
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-[16px] font-bold text-white"
            style={{ backgroundColor: "#1A5799" }}
          >
            {step.number}
          </div>
          <h4
            className="mt-3 text-center text-[14px] font-bold"
            style={{ color: "#092F64" }}
          >
            {step.heading}
          </h4>
          <p
            className="mt-1 max-w-[180px] text-center text-[12px] leading-relaxed"
            style={{ color: "#71717A" }}
          >
            {step.description}
          </p>
        </ScrollReveal>
      ))}
    </div>
  );
}

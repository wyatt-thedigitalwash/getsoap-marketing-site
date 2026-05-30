import Link from "next/link";
import Button from "@/components/Button";

const allGuides = [
  {
    pill: "Deployment",
    title: "The First 90 Days: How Soap Deploys Across a Franchise Portfolio",
    href: "/resources/first-90-days",
  },
  {
    pill: "Strategy",
    title:
      "The Infrastructure Thesis: Why Franchise Portfolios Need Unified Marketing Architecture",
    href: "/resources/infrastructure-thesis",
  },
  {
    pill: "Operations",
    title: "How Soap Handles 100 Franchisees Without Losing the Plot",
    href: "/resources/operating-at-scale",
  },
];

export default function ResourceLayout({
  pill,
  title,
  publishDate,
  readTime,
  currentHref,
  children,
}: {
  pill: string;
  title: string;
  publishDate: string;
  readTime: string;
  currentHref: string;
  children: React.ReactNode;
}) {
  const related = allGuides.filter((g) => g.href !== currentHref);

  return (
    <article>
      {/* Header */}
      <div className="mx-auto max-w-[880px] px-6 md:px-16" style={{ paddingTop: 96, paddingBottom: 48 }}>
        <Link
          href="/#resources"
          className="mb-8 inline-block text-[13px] font-semibold transition-colors hover:underline"
          style={{ color: "#0E172A" }}
        >
          &larr; Back to Resources
        </Link>

        <div className="mb-6">
          <span
            className="inline-block rounded-full text-[11px] font-bold uppercase tracking-[0.05em]"
            style={{
              backgroundColor: "#F8FAFC",
              color: "#1570EF",
              padding: "6px 12px",
            }}
          >
            {pill}
          </span>
        </div>

        <h1
          className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[56px]"
          style={{ color: "#0E172A", marginBottom: 24 }}
        >
          {title}
        </h1>

        <p className="text-[14px]" style={{ color: "#71717A" }}>
          Published {publishDate} &middot; {readTime}
        </p>
      </div>

      {/* Body */}
      <div
        className="article-content mx-auto max-w-[880px] px-6 md:px-16"
        style={{ paddingBottom: 64 }}
      >
        {children}
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[880px] px-6 md:px-16">
        <hr style={{ border: "none", borderTop: "1px solid #E2E8F0", margin: "0 0 64px 0" }} />
      </div>

      {/* CTA Card */}
      <div className="mx-auto max-w-[880px] px-6 md:px-16">
        <div
          className="rounded-xl"
          style={{ backgroundColor: "#F8FAFC", padding: 32 }}
        >
          <h3
            className="text-[24px] font-bold"
            style={{ color: "#0E172A", marginBottom: 8 }}
          >
            Want to see this in your portfolio?
          </h3>
          <p
            className="text-[16px]"
            style={{ color: "#1F1F1F", marginBottom: 20 }}
          >
            Book a demo and we will walk through how Soap would deploy across
            your franchise system.
          </p>
          <Button href="/contact">Book a demo</Button>
        </div>
      </div>

      {/* Related */}
      <div
        className="mx-auto max-w-[880px] px-6 md:px-16"
        style={{ paddingTop: 64, paddingBottom: 96 }}
      >
        <p
          className="text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "#1570EF", marginBottom: 24 }}
        >
          Read Next
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {related.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-[10px] bg-white transition-all hover:shadow-md"
              style={{
                border: "1px solid #E2E8F0",
                padding: 20,
              }}
            >
              <span
                className="inline-block rounded-full text-[11px] font-bold uppercase tracking-[0.05em]"
                style={{
                  backgroundColor: "#F8FAFC",
                  color: "#1570EF",
                  padding: "4px 10px",
                  marginBottom: 12,
                }}
              >
                {guide.pill}
              </span>
              <p
                className="text-[18px] font-bold leading-[1.3] transition-colors group-hover:text-[#1570EF]"
                style={{ color: "#0E172A" }}
              >
                {guide.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

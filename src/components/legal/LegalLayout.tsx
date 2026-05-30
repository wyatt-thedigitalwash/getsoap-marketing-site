import Link from "next/link";

const legalPages = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function LegalLayout({
  title,
  lastUpdated,
  currentPath,
  children,
}: {
  title: string;
  lastUpdated: string;
  currentPath: string;
  children: React.ReactNode;
}) {
  const otherPages = legalPages.filter((p) => p.href !== currentPath);

  return (
    <article className="mx-auto max-w-[880px] px-6 md:px-16">
      {/* Header */}
      <div style={{ paddingTop: 80, paddingBottom: 48 }}>
        <p
          className="text-[11px] font-bold uppercase tracking-[0.15em]"
          style={{ color: "#1570EF" }}
        >
          Legal
        </p>
        <h1
          className="mt-4 text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
          style={{ color: "#0E172A" }}
        >
          {title}
        </h1>
        <p className="mt-4 text-[13px]" style={{ color: "#71717A" }}>
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Notice banner */}
      <div
        className="rounded-r-lg"
        style={{
          backgroundColor: "#F8FAFC",
          borderLeft: "3px solid #1570EF",
          padding: "16px 20px",
          margin: "0 0 48px 0",
        }}
      >
        <p className="text-[13px] font-medium" style={{ color: "#0E172A" }}>
          This document is a working version pending review by legal counsel.
          Final policy language will be published prior to platform launch.
        </p>
      </div>

      {/* Body content */}
      <div className="legal-content">{children}</div>

      {/* Footer nav */}
      <div style={{ paddingTop: 48, paddingBottom: 80 }}>
        <p className="text-[13px]" style={{ color: "#71717A" }}>
          View other policies:{" "}
          {otherPages.map((page, i) => (
            <span key={page.href}>
              {i > 0 && <span style={{ margin: "0 8px" }}>&middot;</span>}
              <Link
                href={page.href}
                className="font-semibold underline-offset-2 transition-colors hover:underline"
                style={{ color: "#0E172A" }}
              >
                {page.label}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}

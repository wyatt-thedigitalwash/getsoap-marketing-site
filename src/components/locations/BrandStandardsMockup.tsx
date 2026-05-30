export default function BrandStandardsMockup() {
  return (
    <div
      className="overflow-hidden rounded-xl bg-white"
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 4px 20px rgba(14, 23, 42, 0.05)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{
          borderBottom: "1px solid #E2E8F0",
          backgroundColor: "#F8FAFC",
        }}
      >
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
        </div>
        <div
          className="ml-2 flex-1 rounded px-2 py-1 text-[9px]"
          style={{ backgroundColor: "#F1F5F9", color: "#71717A" }}
        >
          app.getsoap.app/brand-standards
        </div>
      </div>

      <div className="px-5 py-4">
        {/* Header */}
        <p className="text-[14px] font-bold" style={{ color: "#0E172A" }}>
          Brand Standards &middot; Bumble Roofing
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {/* Sub-card A: Design System */}
          <div
            className="rounded-lg px-3 py-3"
            style={{ border: "1px solid #F1F5F9" }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "#0E172A" }}
            >
              Design System
            </p>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex gap-1.5">
                <div
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: "#F59E0B" }}
                />
                <div
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: "#1E3A5F" }}
                />
                <div
                  className="h-5 w-5 rounded-full"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                  }}
                />
                <div
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: "#9CA3AF" }}
                />
              </div>
              <div className="flex gap-3">
                <span className="text-[10px]" style={{ color: "#71717A" }}>
                  Inter Bold
                </span>
                <span className="text-[10px]" style={{ color: "#71717A" }}>
                  Inter Regular
                </span>
              </div>
            </div>
          </div>

          {/* Sub-card B: Approved Content */}
          <div
            className="rounded-lg px-3 py-3"
            style={{ border: "1px solid #F1F5F9" }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "#0E172A" }}
            >
              Approved Content
            </p>
            <ul className="mt-2 flex flex-col gap-1">
              <li className="text-[10px]" style={{ color: "#71717A" }}>
                12 service descriptions
              </li>
              <li className="text-[10px]" style={{ color: "#71717A" }}>
                8 hero images
              </li>
              <li className="text-[10px]" style={{ color: "#71717A" }}>
                45 blog post templates
              </li>
            </ul>
          </div>

          {/* Sub-card C: Compliance Status */}
          <div
            className="rounded-lg px-3 py-3"
            style={{ border: "1px solid #F1F5F9" }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "#0E172A" }}
            >
              Compliance Status
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "#10B981" }}
              />
              <span className="text-[10px]" style={{ color: "#71717A" }}>
                47 of 47 locations compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

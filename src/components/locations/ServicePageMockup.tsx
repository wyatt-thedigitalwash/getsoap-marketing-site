export default function ServicePageMockup() {
  return (
    <div
      className="overflow-hidden rounded-[10px] bg-white"
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 4px 20px rgba(9, 47, 100, 0.05)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{ borderBottom: "1px solid #E2E8F0", backgroundColor: "#F8FAFC" }}
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
          bumbleroofing.com/locations/tampa/services/storm-damage-restoration
        </div>
      </div>

      {/* Page content */}
      <div className="px-4 py-3">
        {/* Header bar */}
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold" style={{ color: "#092F64" }}>
            Bumble Roofing -- Tampa
          </p>
          <div className="hidden items-center gap-3 sm:flex">
            {["Home", "About", "Services", "Areas", "Contact"].map((item) => (
              <span
                key={item}
                className="text-[9px]"
                style={{ color: "#71717A" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <hr className="my-2 border-[#E2E8F0]" />

        {/* Hero area */}
        <div className="rounded-lg px-3 py-4" style={{ backgroundColor: "#F8FAFC" }}>
          <h3
            className="text-[16px] font-bold leading-tight sm:text-[18px]"
            style={{ color: "#092F64" }}
          >
            Storm Damage Restoration in Tampa, FL
          </h3>
          <p className="mt-1.5 text-[11px] leading-relaxed sm:text-[12px]" style={{ color: "#71717A" }}>
            Emergency roofing repairs after Tampa storms. Licensed, insured, locally trusted.
          </p>
          <div
            className="mt-3 inline-block rounded px-3 py-1.5 text-[10px] font-semibold text-white"
            style={{ backgroundColor: "#1A5799" }}
          >
            Get a Free Quote
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-12 rounded" style={{ backgroundColor: "#F1F5F9" }} />
          <div className="h-12 rounded" style={{ backgroundColor: "#F1F5F9" }} />
          <div className="h-12 rounded" style={{ backgroundColor: "#F1F5F9" }} />
        </div>

        {/* Footer strip */}
        <div
          className="mt-3 rounded px-2 py-1.5"
          style={{ backgroundColor: "#092F64" }}
        >
          <p className="text-[8px] text-white/60">
            Bumble Roofing Tampa &middot; Licensed &amp; Insured
          </p>
        </div>
      </div>
    </div>
  );
}

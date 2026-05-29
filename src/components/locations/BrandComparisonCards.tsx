function BrandCard({
  name,
  url,
  accent,
}: {
  name: string;
  url: string;
  accent: string;
}) {
  return (
    <div
      className="flex-1 overflow-hidden rounded-xl bg-white"
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 4px 20px rgba(9, 47, 100, 0.05)",
        minWidth: 260,
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
          {url}
        </div>
      </div>

      <div className="px-4 py-3">
        {/* Brand header bar */}
        <div className="rounded-md px-3 py-2" style={{ backgroundColor: accent }}>
          <p className="text-[11px] font-bold text-white">{name}</p>
        </div>

        {/* Hero area */}
        <div className="mt-3 rounded-lg px-3 py-4" style={{ backgroundColor: "#F8FAFC" }}>
          <div
            className="h-3 w-3/4 rounded"
            style={{ backgroundColor: "#E2E8F0" }}
          />
          <div
            className="mt-2 h-2 w-1/2 rounded"
            style={{ backgroundColor: "#E2E8F0" }}
          />
          <div
            className="mt-3 inline-block rounded px-3 py-1.5 text-[10px] font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            Get a Quote
          </div>
        </div>

        {/* Service tile placeholders */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-lg px-2 py-3"
              style={{ backgroundColor: "#F8FAFC" }}
            >
              <div
                className="h-5 w-5 rounded"
                style={{ backgroundColor: `${accent}30` }}
              />
              <div
                className="mt-1.5 h-1.5 w-10 rounded"
                style={{ backgroundColor: "#E2E8F0" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BrandComparisonCards() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-8">
      <BrandCard
        name="Bumble Roofing -- Tampa"
        url="bumbleroofing.com/locations/tampa"
        accent="#F59E0B"
      />
      <BrandCard
        name="Canopy Lawn Care -- Phoenix"
        url="canopylawncare.com/locations/phoenix"
        accent="#2D6A4F"
      />
    </div>
  );
}

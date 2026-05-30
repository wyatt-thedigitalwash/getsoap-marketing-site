const tiers = [
  { title: "PE Firm / Portfolio Holder", sub: "Portfolio-wide visibility" },
  { title: "Franchisor / Brand", sub: "Brand consistency at scale" },
  { title: "Franchisee Locations", sub: "Local performance and operations" },
];

export default function HierarchyDiagram() {
  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col items-stretch">
      {tiers.map((tier, i) => (
        <div key={tier.title} className="flex flex-col items-center">
          <div
            className="w-full rounded-xl bg-white text-center"
            style={{
              border: "1px solid #E1E5EC",
              padding: "20px 24px",
              boxShadow: "0 1px 3px rgba(14, 23, 42, 0.04)",
            }}
          >
            <p className="text-[16px] font-bold" style={{ color: "#0E172A" }}>
              {tier.title}
            </p>
            <p className="mt-1 text-[13px]" style={{ color: "#6B7585" }}>
              {tier.sub}
            </p>
          </div>
          {i < tiers.length - 1 && (
            <div
              className="mx-auto my-3"
              style={{ width: 1.5, height: 16, backgroundColor: "#CBD2DC" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function GbpPhotoMockup() {
  const tabs = ["All", "Work samples", "Team", "Exterior", "Recent uploads"];
  const captions = [
    "Roof repair, 11/12/25",
    "Team at job site",
    "Before restoration",
    "After restoration",
    "Storefront",
    "Equipment",
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 10,
        boxShadow:
          "0 4px 20px rgba(9, 47, 100, 0.06), 0 12px 40px rgba(9, 47, 100, 0.04)",
        overflow: "hidden",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          background: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 5 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E2E8F0" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E2E8F0" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E2E8F0" }} />
        </div>
        <div
          style={{
            fontSize: 10,
            color: "#71717A",
            fontFamily: "monospace",
            marginLeft: 4,
          }}
        >
          app.getsoap.app/photos
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px 18px" }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#092F64" }}>
            Photo Library · Tampa Location
          </p>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#1A5799",
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: 6,
              padding: "6px 12px",
              whiteSpace: "nowrap",
            }}
          >
            Upload
          </span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
          {tabs.map((tab, i) => (
            <span
              key={tab}
              style={{
                fontSize: 11,
                color: i === 0 ? "#1A5799" : "#71717A",
                fontWeight: i === 0 ? 600 : 400,
                paddingBottom: 6,
                borderBottom: i === 0 ? "2px solid #1A5799" : "2px solid transparent",
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
            marginTop: 14,
          }}
        >
          {captions.map((caption) => (
            <div key={caption}>
              <div
                style={{
                  aspectRatio: "4/3",
                  borderRadius: 8,
                  background: "#F1F5F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Image placeholder icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <p style={{ fontSize: 10, color: "#71717A", marginTop: 4 }}>{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

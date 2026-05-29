export default function AuditMockup() {
  const scores = [
    { label: "Technical", score: 94, color: "#10B981" },
    { label: "Content", score: 87, color: "#10B981" },
    { label: "Local", score: 91, color: "#10B981" },
    { label: "Speed", score: 76, color: "#F59E0B" },
  ];

  const actions = [
    {
      color: "#EF4444",
      text: "Missing schema on 4 service pages",
      action: { label: "Auto-fix", bg: "#10B981", type: "button" as const },
    },
    {
      color: "#F59E0B",
      text: "LCP above 2.5s on /locations/tampa/services/roof-repair",
      action: { label: "View", bg: "transparent", type: "link" as const },
    },
    {
      color: "#F59E0B",
      text: "12 internal links could be added to area pages",
      action: { label: "Queue", bg: "#468BE6", type: "button" as const },
    },
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
          app.getsoap.app/audits
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px 18px" }}>
        {/* Header */}
        <p style={{ fontSize: 14, fontWeight: 700, color: "#092F64" }}>
          Audit Results · Tampa Location · November 2025
        </p>

        {/* Score row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            marginTop: 14,
          }}
        >
          {scores.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#F8FAFC",
                borderRadius: 8,
                padding: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: s.color,
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    color: "#71717A",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.label}
                </span>
              </div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#092F64", marginTop: 4 }}>
                {s.score}/100
              </p>
            </div>
          ))}
        </div>

        {/* Action Items */}
        <div style={{ marginTop: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#71717A", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Action Items
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
            {actions.map((a) => (
              <div
                key={a.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: a.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 12, color: "#1F1F1F", lineHeight: 1.4 }}>
                    {a.text}
                  </span>
                </div>
                {a.action.type === "button" ? (
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      color: "#FFFFFF",
                      background: a.action.bg,
                      borderRadius: 4,
                      padding: "3px 8px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {a.action.label}
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      color: "#468BE6",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {a.action.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

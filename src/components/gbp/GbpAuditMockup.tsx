export default function GbpAuditMockup() {
  const stats = [
    { label: "Profiles healthy", value: "43", color: "#10B981" },
    { label: "Need attention", value: "3", color: "#F59E0B" },
    { label: "Critical issues", value: "1", color: "#EF4444" },
    { label: "Avg completeness", value: "94%", color: "#10B981" },
  ];

  const issues = [
    {
      color: "#EF4444",
      text: "Phoenix location flagged: suspended profile",
      action: "Investigate",
      actionBg: "rgba(239,68,68,0.1)",
      actionColor: "#EF4444",
    },
    {
      color: "#F59E0B",
      text: "Austin location: 6 unanswered questions",
      action: "Queue",
      actionBg: "rgba(21, 112, 239,0.1)",
      actionColor: "#1570EF",
    },
    {
      color: "#F59E0B",
      text: "Charlotte location: photos older than 90 days",
      action: "Refresh",
      actionBg: "rgba(21, 112, 239,0.1)",
      actionColor: "#1570EF",
    },
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 10,
        boxShadow:
          "0 4px 20px rgba(14, 23, 42, 0.06), 0 12px 40px rgba(14, 23, 42, 0.04)",
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
          app.getsoap.app/gbp-audits
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px 18px" }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#0E172A" }}>
          GBP Audit · Bumble Roofing · 47 locations
        </p>

        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            marginTop: 14,
          }}
        >
          {stats.map((s) => (
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
              <p style={{ fontSize: 14, fontWeight: 700, color: "#0E172A", marginTop: 4 }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Issues */}
        <div style={{ marginTop: 16 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#71717A",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Recent Issues
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
            {issues.map((item) => (
              <div
                key={item.text}
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
                      background: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 12, color: "#1F1F1F", lineHeight: 1.4 }}>
                    {item.text}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    color: item.actionColor,
                    background: item.actionBg,
                    borderRadius: 4,
                    padding: "3px 8px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {item.action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

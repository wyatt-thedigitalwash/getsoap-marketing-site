export default function GbpPostsMockup() {
  const posts = [
    {
      title: "Storm damage offer: free inspections",
      location: "Tampa · Orlando · Charlotte (3 locations)",
      time: "Today, 2:00 PM",
    },
    {
      title: "New project gallery photos",
      location: "All Bumble Roofing locations (47)",
      time: "Tomorrow, 9:00 AM",
    },
    {
      title: "Hurricane prep guide blog teaser",
      location: "Florida locations (12)",
      time: "Wed, 10:00 AM",
    },
    {
      title: "Holiday hours update",
      location: "All locations (47)",
      time: "Fri, 8:00 AM",
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
          app.getsoap.app/gbp-posts
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px 18px" }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#0E172A" }}>
          Scheduled Posts · This Week
        </p>
        <p style={{ fontSize: 12, color: "#71717A", marginTop: 6 }}>
          All locations · All brands · Next 7 days
        </p>

        {/* Post rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
          {posts.map((post) => (
            <div
              key={post.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              {/* Cobalt vertical bar */}
              <div
                style={{
                  width: 3,
                  height: 32,
                  borderRadius: 2,
                  background: "#1570EF",
                  flexShrink: 0,
                }}
              />
              {/* Calendar icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1570EF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {/* Post info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#0E172A" }}>
                  {post.title}
                </p>
                <p style={{ fontSize: 11, color: "#71717A", marginTop: 1 }}>
                  {post.location}
                </p>
              </div>
              {/* Time */}
              <span style={{ fontSize: 11, color: "#71717A", whiteSpace: "nowrap", flexShrink: 0 }}>
                {post.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

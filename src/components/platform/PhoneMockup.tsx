export default function PhoneMockup() {
  return (
    <div className="mx-auto" style={{ width: 280 }}>
      <div
        className="overflow-hidden"
        style={{
          borderRadius: 32,
          border: "4px solid #1F1F1F",
          background: "linear-gradient(180deg, #1A1F2A 0%, #2F3744 100%)",
          padding: 8,
        }}
      >
        <div className="overflow-hidden bg-white" style={{ borderRadius: 24 }}>
          {/* Status bar */}
          <div
            className="flex items-center justify-between"
            style={{ padding: "6px 16px", backgroundColor: "#F8FAFC" }}
          >
            <span className="text-[11px] font-medium" style={{ color: "#0E172A" }}>9:41</span>
            <div className="flex items-center gap-1">
              <div className="h-[3px] w-[10px] rounded-sm" style={{ backgroundColor: "#71717A" }} />
              <div className="h-[3px] w-[10px] rounded-sm" style={{ backgroundColor: "#71717A" }} />
              <div className="h-[6px] w-[12px] rounded-sm" style={{ border: "1px solid #71717A" }}>
                <div className="h-full rounded-sm" style={{ width: "70%", backgroundColor: "#10B981" }} />
              </div>
            </div>
          </div>

          {/* Header */}
          <div style={{ padding: "12px 16px", borderBottom: "1px solid #E2E8F0" }}>
            <p className="text-[16px] font-bold" style={{ color: "#0E172A" }}>Tampa Location</p>
          </div>

          {/* Stat cards */}
          <div className="flex flex-col gap-2.5" style={{ padding: "12px 16px" }}>
            {[
              { label: "42 leads this week", up: true },
              { label: "12 new reviews", up: true },
              { label: "Avg rating: 4.8", up: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-lg"
                style={{ padding: "10px 14px", backgroundColor: "#F8FAFC" }}
              >
                <span className="text-[13px] font-medium" style={{ color: "#0E172A" }}>{stat.label}</span>
                {stat.up ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                )}
              </div>
            ))}
          </div>

          {/* Notifications */}
          <div style={{ padding: "8px 16px 20px" }}>
            <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#71717A", marginBottom: 8 }}>Notifications</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2 rounded-lg" style={{ padding: "8px 10px", border: "1px solid #E2E8F0" }}>
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "#1570EF" }} />
                <p className="text-[11px]" style={{ color: "#0E172A" }}>New lead: Sarah K. from Google</p>
              </div>
              <div className="flex items-start gap-2 rounded-lg" style={{ padding: "8px 10px", border: "1px solid #E2E8F0" }}>
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "#FBBC04" }} />
                <p className="text-[11px]" style={{ color: "#0E172A" }}>New review from David M.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

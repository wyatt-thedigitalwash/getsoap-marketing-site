function PlayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

export default function DashboardPlaceholder({
  label,
  icon,
}: {
  label: string;
  icon: "play" | "image";
}) {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        aspectRatio: "16 / 10",
        backgroundColor: "#F1F5F9",
        border: "2px dashed #CBD5E1",
        borderRadius: 12,
      }}
    >
      <div className="flex flex-col items-center gap-2">
        {icon === "play" ? <PlayIcon /> : <ImageIcon />}
        <span className="text-[14px] font-semibold" style={{ color: "#94A3B8" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

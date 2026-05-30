import DashboardPlaceholder from "@/components/DashboardPlaceholder";

export default function DashboardMockup({ label }: { label: string }) {
  return (
    <div
      className="rounded-2xl"
      style={{
        boxShadow:
          "0 4px 20px rgba(14, 23, 42, 0.06), 0 12px 40px rgba(14, 23, 42, 0.04)",
      }}
    >
      <DashboardPlaceholder label={label} icon="image" />
    </div>
  );
}

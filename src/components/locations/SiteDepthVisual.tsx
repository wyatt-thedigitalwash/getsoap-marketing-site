const box = "w-full rounded-xl bg-white text-center";
const boxStyle = {
  border: "1px solid #E1E5EC",
  padding: "16px 20px",
  boxShadow: "0 1px 3px rgba(14, 23, 42, 0.04)",
};
const connector = "mx-auto my-2";
const connectorStyle = { width: 1.5, height: 16, backgroundColor: "#CBD2DC" };
const label = "text-[11px] font-medium uppercase tracking-[0.08em]";
const mono = "font-mono";

export default function SiteDepthVisual() {
  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col items-stretch">
      {/* Box 1: Corporate root */}
      <div className={box} style={boxStyle}>
        <p className={`${mono} text-[16px] font-bold`} style={{ color: "#0E172A" }}>bumbleroofing.com</p>
        <p className={`mt-1 ${label}`} style={{ color: "#71717A" }}>Corporate Site</p>
      </div>

      <div className={connector} style={connectorStyle} />

      {/* Box 2: /locations */}
      <div className={box} style={boxStyle}>
        <p className={`${mono} text-[14px] font-semibold`} style={{ color: "#0E172A" }}>/locations</p>
        <p className={`mt-1 ${label}`} style={{ color: "#71717A" }}>Franchisee Directory</p>
      </div>

      <div className={connector} style={connectorStyle} />

      {/* Box 3: /locations/tampa */}
      <div className={box} style={boxStyle}>
        <p className={`${mono} text-[14px] font-semibold`} style={{ color: "#0E172A" }}>/locations/tampa</p>
        <p className={`mt-1 ${label}`} style={{ color: "#71717A" }}>Per-Location Section</p>
      </div>

      <div className={connector} style={connectorStyle} />

      {/* Box 4: Services + Areas side by side */}
      <div className="flex gap-2">
        {/* Services */}
        <div className="flex-1 rounded-lg bg-white" style={{ border: "1px solid #E1E5EC", padding: 12 }}>
          <p className="text-[10px] font-medium uppercase tracking-[0.06em]" style={{ color: "#71717A", marginBottom: 8 }}>Services</p>
          <div className="flex flex-col gap-1">
            <p className={`${mono} text-[11px]`} style={{ color: "#0E172A" }}>/services/storm-damage-restoration</p>
            <p className={`${mono} text-[11px]`} style={{ color: "#0E172A" }}>/services/roof-replacement</p>
            <p className={`${mono} text-[11px]`} style={{ color: "#0E172A" }}>/services/roof-repair</p>
            <p className={`${mono} text-[11px]`} style={{ color: "#0E172A" }}>/services/commercial-roofing</p>
          </div>
        </div>
        {/* Areas */}
        <div className="flex-1 rounded-lg bg-white" style={{ border: "1px solid #E1E5EC", padding: 12 }}>
          <p className="text-[10px] font-medium uppercase tracking-[0.06em]" style={{ color: "#71717A", marginBottom: 8 }}>Areas</p>
          <div className="flex flex-col gap-1">
            <p className={`${mono} text-[11px]`} style={{ color: "#0E172A" }}>/areas/downtown</p>
            <p className={`${mono} text-[11px]`} style={{ color: "#0E172A" }}>/areas/brandon</p>
            <p className={`${mono} text-[11px]`} style={{ color: "#0E172A" }}>/areas/wesley-chapel</p>
            <p className={`${mono} text-[11px]`} style={{ color: "#0E172A" }}>/areas/riverview</p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[12px] italic" style={{ color: "#71717A" }}>
        Same structure deployed across every location.
      </p>
    </div>
  );
}

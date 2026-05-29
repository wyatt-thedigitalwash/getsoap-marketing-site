import { FileText } from "lucide-react";

const locationPaths = [
  "/locations/tampa",
  "/locations/orlando",
  "/locations/charlotte",
  "/locations/austin",
];

const tampaServices = [
  "/locations/tampa/services/storm-damage-restoration",
  "/locations/tampa/services/roof-replacement",
  "/locations/tampa/services/roof-repair",
  "/locations/tampa/services/commercial-roofing",
];

const tampaAreas = [
  "/locations/tampa/areas/downtown",
  "/locations/tampa/areas/brandon",
  "/locations/tampa/areas/wesley-chapel",
  "/locations/tampa/areas/riverview",
];

function VerticalLine({ height = 24 }: { height?: number }) {
  return (
    <div
      className="mx-auto"
      style={{
        width: 2,
        height,
        backgroundColor: "#E2E8F0",
      }}
    />
  );
}

function PathNode({
  label,
  highlighted,
}: {
  label: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-1.5 rounded-lg px-2.5 py-2"
      style={{
        backgroundColor: highlighted ? "rgba(26, 87, 153, 0.06)" : "#FFFFFF",
        border: `1px solid ${highlighted ? "#1A5799" : "#E2E8F0"}`,
      }}
    >
      <FileText
        size={12}
        style={{ color: "#1A5799", flexShrink: 0 }}
      />
      <span
        className="whitespace-nowrap font-mono text-[13px] font-medium"
        style={{ color: "#092F64" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function SitemapTree() {
  return (
    <div className="flex flex-col items-center overflow-x-auto">
      {/* Top node: Corporate Site */}
      <div
        className="rounded-xl bg-white px-4 py-3"
        style={{ border: "1px solid #E2E8F0" }}
      >
        <p className="font-mono text-[14px] font-bold" style={{ color: "#092F64" }}>
          bumbleroofing.com
        </p>
        <p className="mt-0.5 text-[11px] font-medium" style={{ color: "#71717A" }}>
          Corporate Site
        </p>
      </div>

      <VerticalLine />

      {/* Top-level branches: /about, /services, /locations */}
      <div className="flex flex-wrap items-start justify-center gap-3">
        <PathNode label="/about" />
        <PathNode label="/services" />
        <div className="flex flex-col items-center">
          <PathNode label="/locations" highlighted />

          <VerticalLine height={16} />

          {/* Location sub-paths */}
          <div className="flex flex-col items-center gap-1.5">
            {locationPaths.map((path) => (
              <div key={path} className="flex flex-col items-center">
                <PathNode label={path} highlighted />
              </div>
            ))}
            <div
              className="rounded-full px-3 py-1 text-[11px] font-semibold"
              style={{ backgroundColor: "rgba(26, 87, 153, 0.08)", color: "#1A5799" }}
            >
              + 43 more
            </div>
          </div>

          <VerticalLine height={16} />

          {/* Expanded Tampa sub-pages */}
          <div
            className="rounded-xl px-4 py-4"
            style={{ border: "1px solid #E2E8F0", backgroundColor: "#FFFFFF" }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "#1A5799" }}
            >
              /locations/tampa
            </p>

            <div className="mt-3 flex flex-col gap-4 md:flex-row md:gap-8">
              {/* Services group */}
              <div className="flex flex-col gap-1.5">
                <p
                  className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "#71717A" }}
                >
                  Services
                </p>
                {tampaServices.map((path) => (
                  <div key={path} className="flex items-center gap-1.5">
                    <FileText size={11} style={{ color: "#1A5799", flexShrink: 0 }} />
                    <span
                      className="whitespace-nowrap font-mono text-[11px] font-medium md:text-[12px]"
                      style={{ color: "#092F64" }}
                    >
                      {path}
                    </span>
                  </div>
                ))}
              </div>

              {/* Areas group */}
              <div className="flex flex-col gap-1.5">
                <p
                  className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "#71717A" }}
                >
                  Areas
                </p>
                {tampaAreas.map((path) => (
                  <div key={path} className="flex items-center gap-1.5">
                    <FileText size={11} style={{ color: "#1A5799", flexShrink: 0 }} />
                    <span
                      className="whitespace-nowrap font-mono text-[11px] font-medium md:text-[12px]"
                      style={{ color: "#092F64" }}
                    >
                      {path}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

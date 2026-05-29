import { User } from "lucide-react";

export default function FounderPhoto() {
  return (
    <div
      className="flex flex-col items-center justify-center overflow-hidden rounded-xl"
      style={{
        aspectRatio: "4 / 5",
        backgroundColor: "#092F64",
        boxShadow:
          "0 4px 20px rgba(9, 47, 100, 0.06), 0 12px 40px rgba(9, 47, 100, 0.04)",
      }}
    >
      <User size={48} style={{ color: "rgba(255,255,255,0.3)" }} />
      <p
        className="mt-3 text-[12px]"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        Founder photo
      </p>
    </div>
  );
}

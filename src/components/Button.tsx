import Link from "next/link";

export default function Button({
  href,
  children,
  size = "default",
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  size?: "default" | "large";
  variant?: "primary" | "outline";
}) {
  const base = "inline-block font-semibold text-center btn-primary";
  const sizeStyles =
    size === "large"
      ? { padding: "14px 32px", fontSize: 16 }
      : { padding: "12px 28px", fontSize: 14 };

  if (variant === "outline") {
    return (
      <Link
        href={href}
        className="btn-outline inline-block text-center font-semibold"
        style={{
          ...sizeStyles,
          borderRadius: 8,
          border: "1px solid rgba(14, 23, 42, 0.25)",
          color: "#0E172A",
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={base}
      style={{
        ...sizeStyles,
        borderRadius: 8,
        backgroundColor: "#1570EF",
        color: "#FFFFFF",
      }}
    >
      {children}
    </Link>
  );
}

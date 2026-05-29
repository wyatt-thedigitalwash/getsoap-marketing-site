import Link from "next/link";
import { PRODUCT_LINKS } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="w-full bg-[#092F64]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }} />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-white"
          >
            Soap.
          </Link>
          <div className="flex flex-col gap-10 md:flex-row md:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                Product
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                Company
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/60 transition-colors hover:text-white/90"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/60 transition-colors hover:text-white/90"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://thedigitalwash.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition-colors hover:text-white/90"
                  >
                    The Digital Wash
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-t border-white/15" />
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-white/50 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} The Digital Wash LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="text-white/50 transition-colors hover:text-white/80">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/50 transition-colors hover:text-white/80">
              Terms
            </Link>
            <Link href="/cookies" className="text-white/50 transition-colors hover:text-white/80">
              Cookies
            </Link>
            <span className="text-white/30">|</span>
            <span className="text-white/50">
              Built by{" "}
              <a
                href="https://thedigitalwash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline underline-offset-2 transition-colors hover:text-white"
              >
                The Digital Wash
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Layers, Repeat, Wrench, Check } from "lucide-react";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import FounderPhoto from "./FounderPhoto";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/* ── Section 2: Story ─────────────────────────────────────────────── */

export function StorySection() {
  return (
    <section
      data-bg="light"
      className="relative px-6 py-[84px] md:px-16 md:py-[112px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: NOISE_SVG,
          backgroundRepeat: "repeat",
          mixBlendMode: "soft-light",
          opacity: 0.1,
        }}
      />
      <Container className="relative">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <ScrollReveal className="md:w-[40%]">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#1570EF" }}
            >
              The Parent Company
            </p>
            <h2
              className="mt-4 text-[34px] font-extrabold tracking-[-0.02em] md:text-[46px]"
              style={{ color: "#0E172A" }}
            >
              The Digital Wash.
            </h2>
            <p
              className="mt-4 text-[13px] font-medium"
              style={{ color: "#0E172A" }}
            >
              Tampa, FL · Agency since 2023
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150} className="md:w-[60%]">
            <div className="flex flex-col gap-4">
              <p
                className="text-[18px] leading-[1.65]"
                style={{ color: "#1F1F1F" }}
              >
                The Digital Wash is a digital marketing and web design agency
                based in Tampa, Florida. The agency has spent years building
                websites, running local SEO, and managing Google Business
                Profiles for multi-location service businesses. Roofers. Window
                installers. Restoration companies. Cleaning franchises. Service
                businesses that live or die by local search.
              </p>
              <p
                className="text-[18px] leading-[1.65]"
                style={{ color: "#1F1F1F" }}
              >
                Over time, a pattern emerged. Every franchise system was solving
                the same problems with different vendors. Every franchisee was
                paying too much for inconsistent results. Corporate had no
                visibility. Franchisees had no leads. The marketing technology
                built for SMBs did not fit the structural reality of franchise
                systems.
              </p>
              <p
                className="text-[18px] leading-[1.65]"
                style={{ color: "#1F1F1F" }}
              >
                Soap is the platform that came out of that work. It is not a
                pivot from agency to software. It is the agency methodology,
                productized for portfolio-wide deployment. The same operating
                principles that worked for single-location service businesses,
                restructured for the multi-tenant reality of franchise.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

/* ── Section 3: Why Soap ──────────────────────────────────────────── */

const whySoapCards = [
  {
    Icon: Layers,
    heading: "Multi-tenant by design",
    description:
      "Franchise systems have hierarchy. Portfolio, brand, location. Soap models that structure natively. Most platforms treat every account as flat. Franchise systems are not flat.",
  },
  {
    Icon: Repeat,
    heading: "Productized, not custom",
    description:
      "Agency work is custom. Soap is a product. Same delivery, same quality, same outcomes across every franchisee. Custom work does not scale. Productization does.",
  },
  {
    Icon: Wrench,
    heading: "Owned methodology",
    description:
      "The SEO methodology, content production, GBP workflows, and audits are all built in-house. Not outsourced. Not white-labeled from a third party. The same team that builds Soap runs the work.",
  },
];

export function WhySoapSection() {
  return (
    <section data-bg="white" className="px-6 py-[84px] md:px-16 md:py-[112px]">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#1570EF" }}
            >
              Origin
            </p>
            <h2
              className="mx-auto mt-4 max-w-[800px] text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
              style={{ color: "#0E172A" }}
            >
              Soap exists because franchise systems deserved better.
            </h2>
            <p
              className="mx-auto mt-4 max-w-[720px] text-[16px] leading-[1.6] md:text-[17px]"
              style={{ color: "#1F1F1F" }}
            >
              Most marketing platforms were built for one of two audiences:
              small businesses with one location, or enterprise companies with
              one brand. Franchise systems are neither. Soap was built for what
              franchise systems actually are.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {whySoapCards.map((card, i) => (
            <ScrollReveal
              key={card.heading}
              delay={150 + i * 100}
              distance={24}
              premium
              className="rounded-xl bg-white"
              style={{ border: "1px solid #E2E8F0", padding: 28 }}
            >
              <card.Icon size={28} style={{ color: "#1570EF" }} />
              <h3
                className="mt-5 text-[18px] font-bold"
                style={{ color: "#0E172A" }}
              >
                {card.heading}
              </h3>
              <p
                className="mt-3 text-[14px] leading-[1.6]"
                style={{ color: "#1F1F1F" }}
              >
                {card.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Section 4: Founder ───────────────────────────────────────────── */

const credentials = [
  "Based in Tampa, Florida",
  "Founder of The Digital Wash",
  "Years of agency experience in franchise and multi-location marketing",
  "Direct contact for all enterprise relationships",
];

export function FounderSection() {
  return (
    <section
      data-bg="light"
      className="relative px-6 py-[84px] md:px-16 md:py-[112px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: NOISE_SVG,
          backgroundRepeat: "repeat",
          mixBlendMode: "soft-light",
          opacity: 0.1,
        }}
      />
      <Container className="relative">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <ScrollReveal className="md:w-[35%]">
            <FounderPhoto />
            <p
              className="mt-4 text-center text-[16px] font-bold"
              style={{ color: "#0E172A" }}
            >
              Wyatt Bensman · Founder
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150} className="md:w-[65%]">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#1570EF" }}
            >
              Founder
            </p>
            <h2
              className="mt-4 text-[34px] font-extrabold tracking-[-0.02em] md:text-[46px]"
              style={{ color: "#0E172A" }}
            >
              Wyatt Bensman.
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              <p
                className="text-[16px] leading-[1.65]"
                style={{ color: "#1F1F1F" }}
              >
                Wyatt founded The Digital Wash to do better marketing work for
                the businesses most agencies overlook. Multi-location service
                businesses. Franchisees who needed real ranking, not just a
                pretty website. Local operators who had been burned by every
                vendor before him.
              </p>
              <p
                className="text-[16px] leading-[1.65]"
                style={{ color: "#1F1F1F" }}
              >
                The work led to franchise systems. Then to corporate-level
                conversations. Then to a recognition that what franchisees
                needed was not another agency, but a platform that handled the
                work at scale while protecting brand consistency and giving
                corporate the visibility they had never had.
              </p>
              <p
                className="text-[16px] leading-[1.65]"
                style={{ color: "#1F1F1F" }}
              >
                Soap is what came next. Wyatt leads product, methodology, and
                operations. Customers get direct access to the founder. No
                account manager layers, no junior team. Founder-led, by design.
              </p>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    size={16}
                    style={{
                      color: "#1570EF",
                      marginTop: 3,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="text-[15px]"
                    style={{ color: "#1F1F1F" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

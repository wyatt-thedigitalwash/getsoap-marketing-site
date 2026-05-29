import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import SiteDepthVisual from "@/components/locations/SiteDepthVisual";
import {
  ServicePagesSection,
  SeoArchitectureSection,
  LeadsSection,
  DeploymentSection,
  FranchisorControlsSection,
} from "@/components/locations/WebsitesSections";

export const metadata: Metadata = {
  title: "Locations | Soap.",
  description:
    "Every franchise location gets a complete section within your corporate site. Dedicated service pages and service area pages built to rank locally.",
};

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function LocationsPage() {
  return (
    <>
      {/* S1: Hero */}
      <section data-bg="white" className="px-6 pt-[148px] pb-[84px] md:px-16 md:pt-[176px] md:pb-[112px]">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-[880px] text-center">
              <h1
                className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[56px]"
                style={{ color: "#092F64" }}
              >
                Every location, fully built out within your site.
              </h1>
              <p
                className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.55] md:text-[19px]"
                style={{ color: "#1F1F1F" }}
              >
                Not separate websites. Not generic landing pages. Every
                franchisee gets a complete location section inside your corporate
                site, with dedicated service pages and service area pages built
                to rank locally for every search their customers make.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="large">
                  Book a demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* S2: One Domain, Many Pages */}
      <section
        data-bg="light"
        className="relative px-6 py-[84px] md:px-16 md:py-[112px]"
        style={{ backgroundColor: "#E9F5FF" }}
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
          <ScrollReveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              {/* Left: eyebrow + heading + description */}
              <div className="md:w-1/2">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "#1A5799" }}
                >
                  One Domain, Many Pages
                </p>
                <h2
                  className="mt-4 text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[46px]"
                  style={{ color: "#092F64" }}
                >
                  Every location, fully built out within your corporate site.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.6] md:text-[17px]" style={{ color: "#1F1F1F" }}>
                  Soap builds every franchisee location as a complete section of your corporate domain, with dedicated pages for every service and every area they cover. One unified domain authority. Hundreds of pages ranking individually for hyper-local search.
                </p>
              </div>

              {/* Right: depth visual */}
              <div className="flex justify-center md:w-1/2">
                <SiteDepthVisual />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* S3: Service Pages */}
      <ServicePagesSection />

      {/* S4: SEO Architecture */}
      <SeoArchitectureSection />

      {/* S6: Built for Leads */}
      <LeadsSection />

      {/* S7: Deployment at Scale */}
      <DeploymentSection />

      {/* S8: Franchisor Controls */}
      <FranchisorControlsSection />

      {/* S9: Final CTA */}
      <section
        data-bg="dark"
        className="px-6 py-16 md:px-16 md:py-24"
        style={{ backgroundColor: "#092F64" }}
      >
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <p
                className="text-[12px] font-bold uppercase tracking-[0.15em]"
                style={{ color: "#468BE6" }}
              >
                Book a Demo
              </p>
              <h2 className="mx-auto mt-4 max-w-[720px] text-[36px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[48px]">
                See what your corporate site would look like with Soap.
              </h2>
              <p
                className="mx-auto mt-4 max-w-[600px] text-[17px] leading-[1.6]"
                style={{ color: "#C9DBEC" }}
              >
                Show us your franchise system. We will mock up a sample location
                section so you can see exactly what Soap would deploy across
                your corporate domain.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="large">
                  Book a demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

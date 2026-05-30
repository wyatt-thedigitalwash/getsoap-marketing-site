import type { Metadata } from "next";
import ResourceLayout from "@/components/resources/ResourceLayout";

export const metadata: Metadata = {
  title:
    "The First 90 Days: How Soap Deploys Across a Franchise Portfolio | Soap",
  description:
    "A week-by-week breakdown of how Soap deploys across a franchise portfolio. Brand onboarding, website deployment, franchisee activation, first audits, and the first monthly performance report.",
};

const h2 = "text-[28px] md:text-[30px] font-extrabold tracking-[-0.015em] mt-14 mb-5" as const;
const h3 = "text-[20px] md:text-[22px] font-bold mt-10 mb-4" as const;
const p = "text-[16px] md:text-[17px] leading-[1.75] mb-5" as const;
const ul = "ml-6 mb-6 list-disc" as const;
const li = "text-[16px] md:text-[17px] leading-[1.75] py-[5px]" as const;
const bq =
  "text-[20px] md:text-[24px] italic font-medium leading-[1.4] pl-6 my-10" as const;

export default function First90DaysPage() {
  return (
    <ResourceLayout
      pill="Deployment"
      title="The First 90 Days: How Soap Deploys Across a Franchise Portfolio"
      publishDate="January 2026"
      readTime="9 min read"
      currentHref="/resources/first-90-days"
    >
      <p className="text-[19px] md:text-[20px] leading-[1.7] mb-8" style={{ color: "#1F1F1F" }}>
        Most franchise marketing platforms hide their deployment timelines
        because the answer is messy. Long onboarding cycles. Vendor
        dependencies. Franchisee resistance. Inconsistent rollouts that drag for
        months. Soap publishes its deployment timeline because the timeline is
        short, the process is sequenced, and the responsibility is clear. Here
        is what the first 90 days actually look like.
      </p>

      <h2 className={h2} style={{ color: "#0E172A" }}>Week 1 to 2: Brand Onboarding</h2>

      <p className={p} style={{ color: "#1F1F1F" }}>
        The first two weeks are about getting Soap configured to match your
        brand. This is corporate-level work, not franchisee work. Your
        franchisees do not need to do anything yet.
      </p>
      <p className={p} style={{ color: "#1F1F1F" }}>
        We collect and configure the foundational brand assets that will govern
        every per-location page Soap deploys. The goal is to ensure that the
        moment any franchisee site goes live, it is fully brand-compliant from
        the first pixel.
      </p>

      <h3 className={h3} style={{ color: "#0E172A" }}>What we collect</h3>
      <ul className={ul}>
        <li className={li} style={{ color: "#1F1F1F" }}>Logo files in all required formats and orientations</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Approved brand colors with exact hex values</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Typography specifications including primary and secondary fonts</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Approved photography library with usage guidelines</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Voice and tone documentation, if it exists</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Service offerings catalog with descriptions</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Service area definitions and geographic boundaries</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Existing website assets that need to be migrated</li>
      </ul>

      <h3 className={h3} style={{ color: "#0E172A" }}>What we configure</h3>
      <ul className={ul}>
        <li className={li} style={{ color: "#1F1F1F" }}>Master design system in the Soap platform</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Brand-locked templates for service pages, area pages, and location homepages</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Approved content library with corporate-vetted copy</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Default page structures that franchisees inherit</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Compliance monitoring rules to flag off-brand changes</li>
        <li className={li} style={{ color: "#1F1F1F" }}>User permissions for corporate teams and franchisee operators</li>
      </ul>

      <p className={p} style={{ color: "#1F1F1F" }}>
        By the end of Week 2, your brand exists inside Soap as a fully
        configured environment. Every location that gets activated from this
        point forward will inherit the brand system automatically.
      </p>

      <blockquote className={bq} style={{ color: "#0E172A", borderLeft: "3px solid #1570EF" }}>
        The first two weeks are corporate-level work. By the end of Week 2,
        your brand exists inside Soap as a fully configured environment.
      </blockquote>

      <h2 className={h2} style={{ color: "#0E172A" }}>Week 3 to 5: Website Architecture and First Locations</h2>

      <p className={p} style={{ color: "#1F1F1F" }}>
        With the brand configured, Soap begins building out the actual location
        sections within your corporate site. The first three weeks of this phase
        focus on architecture and the first wave of franchisee activations.
      </p>

      <h3 className={h3} style={{ color: "#0E172A" }}>Site architecture deployment</h3>

      <p className={p} style={{ color: "#1F1F1F" }}>
        Soap deploys the /locations URL structure within your corporate domain.
        Every franchisee will live as a sub-section under this path. We
        configure the routing, the URL patterns, the internal linking
        architecture, and the schema markup infrastructure that every
        per-location page will inherit.
      </p>
      <p className={p} style={{ color: "#1F1F1F" }}>
        This is done once at the brand level. Adding new franchisees in the
        future does not require re-architecting anything. The structure scales
        with your portfolio.
      </p>

      <h3 className={h3} style={{ color: "#0E172A" }}>First wave of franchisee activations</h3>

      <p className={p} style={{ color: "#1F1F1F" }}>
        We activate the first 5 to 10 franchisees in this window. These are the
        proof-of-concept locations. They are intentionally limited so we can
        verify that the deployment is working as expected before scaling.
      </p>
      <p className={p} style={{ color: "#1F1F1F" }}>For each franchisee, Soap generates:</p>
      <ul className={ul}>
        <li className={li} style={{ color: "#1F1F1F" }}>A complete location homepage at /locations/[city]</li>
        <li className={li} style={{ color: "#1F1F1F" }}>A dedicated service page for every service the franchisee offers (typically 4 to 8 pages per location)</li>
        <li className={li} style={{ color: "#1F1F1F" }}>A dedicated service area page for every neighborhood or sub-market the franchisee serves (typically 4 to 12 pages per location)</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Schema markup deployed on every page automatically</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Internal linking between service pages, area pages, and the location homepage</li>
        <li className={li} style={{ color: "#1F1F1F" }}>A connection to the franchisee&apos;s existing Google Business Profile listing</li>
      </ul>

      <p className={p} style={{ color: "#1F1F1F" }}>
        At the end of Week 5, the first wave of franchisees has fully built-out
        location sections. Sites are live, indexed, and beginning to accumulate
        ranking signals.
      </p>

      <h2 className={h2} style={{ color: "#0E172A" }}>Week 6 to 8: Portfolio-Wide Rollout</h2>

      <p className={p} style={{ color: "#1F1F1F" }}>
        With the architecture validated and the first wave running cleanly, Soap
        accelerates the rollout to the full franchisee portfolio. This is the
        highest-volume phase of deployment.
      </p>

      <h3 className={h3} style={{ color: "#0E172A" }}>Activation cadence</h3>

      <p className={p} style={{ color: "#1F1F1F" }}>
        We typically activate 10 to 20 franchisees per week during this phase.
        The exact pace depends on franchisee responsiveness for information
        collection (service area, service offerings, contact info, photos).
        Franchisees who respond quickly get activated faster.
      </p>
      <p className={p} style={{ color: "#1F1F1F" }}>
        Each franchisee follows the same activation playbook. There is no custom
        work per location. The Soap platform handles the scale.
      </p>

      <h3 className={h3} style={{ color: "#0E172A" }}>First content production cycles begin</h3>

      <p className={p} style={{ color: "#1F1F1F" }}>
        Once a franchisee location is live, Soap begins its content production
        cycle for that location. Depending on the package tier, this includes:
      </p>
      <ul className={ul}>
        <li className={li} style={{ color: "#1F1F1F" }}>Monthly blog posts with location-specific topics</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Weekly Google Business Profile posts</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Monthly site audits with automated issue resolution</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Monthly Google Business Profile audits</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Citation building across local directories</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Review request automation for new customers</li>
      </ul>

      <p className={p} style={{ color: "#1F1F1F" }}>
        Content begins flowing immediately. By the end of Week 8, every
        activated franchisee has at least one full month of content, posts, and
        audits in their history.
      </p>

      <h2 className={h2} style={{ color: "#0E172A" }}>Week 9 to 12: Optimization and First Reporting Cycle</h2>

      <p className={p} style={{ color: "#1F1F1F" }}>
        With the portfolio deployed, the focus shifts from activation to
        optimization. The first 30 days of data become available, and Soap
        begins refining performance at the location level.
      </p>

      <h3 className={h3} style={{ color: "#0E172A" }}>First monthly performance report</h3>

      <p className={p} style={{ color: "#1F1F1F" }}>
        At Week 10, corporate receives the first monthly performance report.
        This is a comprehensive view of the portfolio:
      </p>
      <ul className={ul}>
        <li className={li} style={{ color: "#1F1F1F" }}>Per-location lead volume and source attribution</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Per-location ranking changes for target keywords</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Per-location Google Business Profile performance metrics</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Portfolio-wide rollups by brand and region</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Locations that are over-performing or under-performing relative to portfolio averages</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Action items prioritized by impact</li>
      </ul>

      <h3 className={h3} style={{ color: "#0E172A" }}>Optimization adjustments</h3>

      <p className={p} style={{ color: "#1F1F1F" }}>
        Based on the first reporting cycle, Soap adjusts content priorities,
        identifies locations that need additional support, and surfaces
        opportunities for cross-portfolio learning. A location in Tampa with
        strong storm-damage rankings might inform the content strategy for
        locations in other hurricane-prone markets.
      </p>

      <h3 className={h3} style={{ color: "#0E172A" }}>Franchisee feedback and adoption</h3>

      <p className={p} style={{ color: "#1F1F1F" }}>
        Week 11 and 12 include a structured franchisee feedback cycle. We
        survey franchisees on their experience with the platform, their
        dashboard usage, and any issues that need to be resolved before the
        90-day mark.
      </p>

      <blockquote className={bq} style={{ color: "#0E172A", borderLeft: "3px solid #1570EF" }}>
        By the 90-day mark, your portfolio has a fully deployed marketing
        infrastructure layer with measurable performance data and a clear
        optimization roadmap.
      </blockquote>

      <h2 className={h2} style={{ color: "#0E172A" }}>After Day 90</h2>

      <p className={p} style={{ color: "#1F1F1F" }}>
        Day 90 is not the finish line. It is the point at which your portfolio
        is fully deployed, the data is flowing, and the optimization rhythm is
        established. From here, Soap operates as a continuous platform: monthly
        content, weekly posts, ongoing audits, real-time monitoring, quarterly
        strategic reviews.
      </p>
      <p className={p} style={{ color: "#1F1F1F" }}>
        For multi-brand portfolios, Day 90 is also typically when the second
        brand begins its own Week 1 onboarding. The playbook compresses with
        each subsequent brand. By the time you are deploying your fourth or
        fifth brand, the timeline can shorten meaningfully because the
        operational muscle is already built.
      </p>

      <h2 className={h2} style={{ color: "#0E172A" }}>What Soap Handles vs. What Corporate Handles</h2>

      <p className={p} style={{ color: "#1F1F1F" }}>
        Throughout the 90 days, the responsibility split is clear and
        consistent:
      </p>

      <h3 className={h3} style={{ color: "#0E172A" }}>Soap handles</h3>
      <ul className={ul}>
        <li className={li} style={{ color: "#1F1F1F" }}>All technical implementation and platform configuration</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Website deployment and architecture</li>
        <li className={li} style={{ color: "#1F1F1F" }}>SEO setup, schema markup, and on-page optimization</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Content production at the location level</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Google Business Profile management</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Review monitoring and response drafting</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Reporting and analytics infrastructure</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Franchisee onboarding workflows</li>
      </ul>

      <h3 className={h3} style={{ color: "#0E172A" }}>Corporate handles</h3>
      <ul className={ul}>
        <li className={li} style={{ color: "#1F1F1F" }}>Providing brand assets and documentation in Week 1</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Approving the master design system</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Reviewing the first wave of activated locations for brand compliance</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Communicating the deployment timeline to franchisees</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Approving any custom integrations or non-standard configurations</li>
      </ul>

      <h3 className={h3} style={{ color: "#0E172A" }}>Franchisees handle</h3>
      <ul className={ul}>
        <li className={li} style={{ color: "#1F1F1F" }}>Submitting their location-specific information (service area, hours, contact info)</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Uploading photos through the mobile app or platform</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Reviewing and approving content drafts where required by package tier</li>
        <li className={li} style={{ color: "#1F1F1F" }}>Responding to leads that come through the platform</li>
      </ul>

      <p className={p} style={{ color: "#1F1F1F" }}>
        The split is intentional. Corporate provides direction. Soap provides
        execution. Franchisees provide their local context. Nobody is
        overloaded.
      </p>

      <h2 className={h2} style={{ color: "#0E172A" }}>The Deployment Guarantee</h2>

      <p className={p} style={{ color: "#1F1F1F" }}>
        We commit to specific deployment milestones in writing. If we miss them
        due to factors within our control, we issue platform credits. This is
        not a marketing promise. It is a contractual term in every enterprise
        agreement.
      </p>
      <p className={p} style={{ color: "#1F1F1F" }}>
        Specific guarantees vary by deployment size and contract structure, but
        the principle is consistent: deployment timelines are operational
        commitments, not aspirational targets.
      </p>

      <h2 className={h2} style={{ color: "#0E172A" }}>Why This Matters</h2>

      <p className={p} style={{ color: "#1F1F1F" }}>
        Most franchise marketing platforms cannot publish their deployment
        timelines because the answers would scare buyers. Six-month rollouts.
        Vendor handoffs. Custom work that scales linearly with location count.
        Soap is built differently because Soap is a product, not an agency. The
        platform handles the work, the methodology is owned in-house, and
        deployment is a defined process rather than a custom engagement.
      </p>
      <p className={p} style={{ color: "#1F1F1F" }}>
        When you sign with Soap, you know what the next 90 days will look like.
        When you sign with most platforms, you do not.
      </p>
    </ResourceLayout>
  );
}

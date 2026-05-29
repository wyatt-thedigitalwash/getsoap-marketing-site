import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Soap.",
  description: "Cookie Policy for getsoap.app and the Soap platform, operated by The Digital Wash LLC.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="January 15, 2026" currentPath="/cookies">
      <h2>1. About This Policy</h2>
      <p>
        This Cookie Policy explains how The Digital Wash LLC (&ldquo;Soap,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar tracking technologies on getsoap.app (the &ldquo;Site&rdquo;). This policy should be read alongside our Privacy Policy, which explains how we collect and use personal information.
      </p>

      <h2>2. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your experience. Cookies may be set by the site you are visiting (first-party cookies) or by third parties that provide services to the site (third-party cookies).
      </p>
      <p>
        Similar technologies include web beacons, pixels, local storage, and session storage. When we refer to &ldquo;cookies&rdquo; in this policy, we include these related technologies.
      </p>

      <h2>3. Types of Cookies We Use</h2>

      <h3>3.1 Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the Site to function properly. They enable core features such as page navigation, secure access, and form submissions. The Site cannot function without these cookies, and they cannot be disabled.
      </p>
      <ul>
        <li>Session management and authentication</li>
        <li>Security and fraud prevention</li>
        <li>Load balancing and server routing</li>
      </ul>

      <h3>3.2 Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with the Site by collecting and reporting information about page views, traffic sources, and user behavior. The data collected is aggregated and anonymized where possible.
      </p>
      <ul>
        <li>Google Analytics (page views, session duration, traffic sources)</li>
        <li>Performance monitoring (page load times, error rates)</li>
      </ul>

      <h3>3.3 Functional Cookies</h3>
      <p>
        These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, or form inputs. They may be set by us or by third-party providers whose services we use.
      </p>

      <h3>3.4 Marketing Cookies</h3>
      <p>
        These cookies may be used to deliver relevant advertisements and track campaign performance. We may use these cookies in the future to measure the effectiveness of our marketing efforts.
      </p>
      <p>
        As of the last update of this policy, we do not use marketing cookies on the Site. If we begin using them, we will update this policy and provide appropriate notice and consent mechanisms.
      </p>

      <h2>4. Third-Party Cookies</h2>
      <p>
        Some cookies on the Site are placed by third-party services that we use. These third parties have their own privacy and cookie policies, and we encourage you to review them:
      </p>
      <ul>
        <li>Google Analytics: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
        <li>Vercel (hosting): <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a></li>
      </ul>
      <p>
        We do not control the cookies set by third parties and are not responsible for their data practices.
      </p>

      <h2>5. Your Cookie Choices</h2>
      <p>You can manage or disable cookies through the following methods:</p>
      <ul>
        <li><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through their settings menu. Note that blocking all cookies may affect the functionality of the Site.</li>
        <li><strong>Google Analytics opt-out:</strong> You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
        <li><strong>Do Not Track:</strong> Some browsers send a &ldquo;Do Not Track&rdquo; signal to websites. There is no industry standard for how websites should respond to this signal. We do not currently respond to Do Not Track signals, but we respect your browser&apos;s cookie settings.</li>
      </ul>
      <p>
        If you choose to disable cookies, some features of the Site may not function as intended.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. We will post the updated version on the Site and update the &ldquo;Last Updated&rdquo; date. Material changes will be communicated through prominent notice on the Site.
      </p>

      <h2>7. Contact Us</h2>
      <p>For questions about this Cookie Policy, contact us at:</p>
      <p>
        The Digital Wash LLC<br />
        Email: privacy@thedigitalwash.com<br />
        Address: Tampa, Florida, United States
      </p>
    </LegalLayout>
  );
}

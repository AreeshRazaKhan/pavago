import React from "react";
import "@/styles/blog.css";

export const metadata = {
  title: "Privacy Policy | How Prismolix Protects Your Personal Data",
  description:
    "Your privacy is our priority. Read the Prismolix privacy policy to understand how we collect, use, and secure your data during recruitment. Learn more about your rights.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "Privacy Policy | How Prismolix Protects Your Personal Data",
    description:
      "Your privacy is our priority. Read the Prismolix privacy policy to understand how we collect, use, and secure your data during recruitment. Learn more about your rights.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | How Prismolix Protects Your Personal Data",
    description:
      "Your privacy is our priority. Read the Prismolix privacy policy to understand how we collect, use, and secure your data during recruitment. Learn more about your rights.",
  },
};

const page = () => {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-12.5 px-3 md:px-4 lg:px-5 about-hero-section">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto">
            <h1 className="text-center font-medium!" id="title">
              Privacy Policy
            </h1>

            <p className="text-center fs-22 mt-6" id="subTitle">
              Understanding how Prismolix handles your data to provide a secure
              and efficient recruitment experience.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="blog-post-content">
            <div className="blog-post-content">
              <h2>PRIVACY POLICY</h2>
              <p>
                This Privacy Policy describes how Prismolix (the "Site", "we",
                "us", or "our") collects, uses, and discloses your personal
                information when you visit, use our services, or communicate
                with us (collectively, the "Services"). For purposes of this
                Privacy Policy, "you" and "your" means you as the user of the
                Services, whether you are a client, candidate, or website
                visitor.
              </p>
              <p>
                Please read this Privacy Policy carefully. By using any of our
                Services, you agree to the collection and use of your
                information as described herein. If you do not agree, please
                refrain from using our platform.
              </p>

              <h3>1. Changes to This Privacy Policy</h3>
              <p>
                We may update this policy periodically to reflect changes in our
                operational or legal practices. We will post the revised version
                on this page and update the "Last updated" date accordingly.
              </p>

              <h3>2. How We Collect Your Information</h3>
              <p>
                We collect personal information from various sources to provide
                a seamless recruitment experience:
              </p>
              <ul>
                <li>
                  <strong>Direct Submission:</strong> Basic contact details
                  (name, email, phone), account credentials, and communication
                  history when you reach out for support.
                </li>
                <li>
                  <strong>Automated Collection:</strong> Usage data including
                  your IP address, device type, and interaction patterns on our
                  site, collected through cookies and pixels.
                </li>
                <li>
                  <strong>Third Parties:</strong> Information from payment
                  processors, background check vendors, and service providers
                  who assist in our recruitment lifecycle.
                </li>
              </ul>

              <h3>3. How We Use Your Information</h3>
              <p>We utilize your data to:</p>
              <ul>
                <li>
                  <strong>Provide Services:</strong> Facilitate talent matching,
                  manage your account, and process payments.
                </li>
                <li>
                  <strong>Marketing:</strong> Send tailored updates and
                  promotional materials regarding our offshore talent solutions.
                </li>
                <li>
                  <strong>Security:</strong> Detect and prevent fraudulent or
                  malicious activity to keep our platform secure.
                </li>
                <li>
                  <strong>Communication:</strong> Provide responsive customer
                  support and maintain our business relationship with you.
                </li>
              </ul>

              <h3>4. Cookies and Tracking</h3>
              <p>
                Prismolix uses cookies to enhance user experience and analyze
                site traffic. While most browsers accept cookies by default, you
                can adjust your settings to reject them. Note that blocking
                cookies may affect the functionality of certain platform
                features.
              </p>

              <h3>5. Disclosure of Personal Information</h3>
              <p>We may share your data with:</p>
              <ul>
                <li>
                  Vendors and service providers (IT, analytics, and payroll
                  management).
                </li>
                <li>
                  Business partners for personalized marketing and advertising.
                </li>
                <li>Affiliates within our corporate group.</li>
                <li>
                  Legal authorities when required by law or to protect our
                  proprietary rights.
                </li>
              </ul>

              <h3>6. User-Generated Content</h3>
              <p>
                If you post reviews or testimonials on our site, please be aware
                they become public. We are not responsible for the privacy of
                information you choose to make publicly available in these
                sections.
              </p>

              <h3>7. Children's Data</h3>
              <p>
                Our Services are not intended for children. We do not knowingly
                collect personal information from individuals under the age of
                18.
              </p>

              <h3>8. Security and Retention</h3>
              <p>
                While we implement robust security measures, no system is
                impenetrable. We retain your data only as long as necessary to
                provide Services, resolve disputes, or comply with legal
                obligations.
              </p>

              <h3>9. Your Rights and Choices</h3>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access or request a copy of your data.</li>
                <li>Request deletion or correction of inaccurate info.</li>
                <li>Opt-out of targeted advertising or data "sharing."</li>
                <li>Withdraw consent for data processing at any time.</li>
              </ul>

              <h3>10. International Transfers</h3>
              <p>
                Prismolix operates globally. Your data may be transferred to and
                processed in the United States and other regions. We rely on
                recognized legal mechanisms, such as Standard Contractual
                Clauses, to ensure your data remains protected across borders.
              </p>

              <h3>11. Contact Us</h3>
              <p>
                For questions regarding our privacy practices or to exercise
                your rights, please contact us at:
                <br />
                <br />
                <strong>Prismolix LLC</strong>
                <br />
                Office 401, Plaza 06, Eiffel Tower Commercial,
                <br />
                Bahria Town Phase 8, Rawalpindi, Pakistan
                <br />
                Email:{" "}
                <a href="mailto:info@prismolix.com" className="text-primary">
                  <strong>info@prismolix.com</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

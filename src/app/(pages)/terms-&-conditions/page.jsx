import React from "react";
import "@/styles/blog.css";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-12.5 px-3 md:px-4 lg:px-5 about-hero-section">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto">
            <h1 className="text-center font-medium!" id="title">
              Terms and Conditions
            </h1>

            <p className="text-center fs-22 mt-6" id="subTitle">
              Guidelines and agreements for our offshore recruitment and
              placement services.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="blog-post-content">
            <div className="blog-post-content">
              <h2>AGREEMENT TO OUR LEGAL TERMS</h2>
              <p>
                Welcome to Prismolix. We specialize in global recruitment
                solutions, connecting businesses with top-tier offshore talent.
                Our services offer seamless and efficient hiring processes
                tailored to your specific needs, managing everything from legal
                compliance to cultural alignment.
              </p>
              <p>
                These Legal Terms constitute a binding agreement between you and
                Prismolix concerning your access to and use of our Services. By
                accessing our platform, you agree to comply with these terms. If
                you do not agree, you must discontinue use immediately.
              </p>

              <h3>1. Our Services</h3>
              <p>
                The information provided through our Services is not intended
                for distribution in jurisdictions where such use would violate
                local laws. Prismolix is not specifically tailored for
                industry-specific regulations like HIPAA or GLBA; users are
                responsible for ensuring their use of our talent solutions
                complies with their local and industry requirements.
              </p>

              <h3>2. Intellectual Property Rights</h3>
              <p>
                Prismolix owns all proprietary rights to the Services, including
                source code, databases, website designs, graphics, and
                trademarks (the "Marks"). We grant you a non-exclusive,
                revocable license to access the Services for your internal
                business use only. You may not reproduce, distribute, or sell
                any Content or Marks without our express written consent.
              </p>

              <h3>3. User Representations</h3>
              <p>
                By using the Services, you confirm that: (1) you have the legal
                capacity to agree to these terms; (2) you are not a minor; (3)
                you will not access the Services via automated or non-human
                means; and (4) your use of the Services will not violate any
                applicable law or regulation.
              </p>

              <h3>4. Purchases and Payment</h3>
              <p>
                We accept major payment methods including Visa, Mastercard,
                American Express, and Discover. You agree to provide current,
                complete, and accurate purchase and account information for all
                transactions. Prices are subject to change, and we reserve the
                right to refuse any order placed through the Services.
              </p>

              <h3>5. Subscriptions and Billing</h3>
              <p>
                <strong>Billing and Renewal:</strong> Your subscription will
                automatically renew at the end of each annual term unless
                cancelled.
                <br />
                <strong>Cancellation:</strong> You can cancel your subscription
                at any time by emailing{" "}
                <a href="mailto: info@prismolix.com" className="text-primary">
                  <strong>info@prismolix.com</strong>
                </a>
                . Your cancellation will take effect at the end of the current
                paid term.
              </p>

              <h3>6. Refund Policy</h3>
              <p>
                All sales are final. Prismolix does not offer refunds for
                services rendered or active subscriptions.
              </p>

              <h3>7. Prohibited Activities</h3>
              <p>
                You may not use the Services for any purpose other than that for
                which we make them available. Prohibited activities include:
              </p>
              <ul>
                <li>
                  Systematically retrieving data to create a database or
                  directory.
                </li>
                <li>Circumventing or disabling security-related features.</li>
                <li>
                  Engaging in unauthorized framing of or linking to the
                  Services.
                </li>
                <li>Uploading viruses, Trojan horses, or malicious code.</li>
                <li>
                  Attempting to impersonate another user or Prismolix employee.
                </li>
                <li>
                  Using the Services to compete with Prismolix or for any
                  revenue-generating endeavor.
                </li>
              </ul>

              <h3>8. User-Generated Contributions</h3>
              <p>
                While we do not typically host user posts, any feedback,
                suggestions, or materials you provide ("Contributions") grant us
                a license to use that information in accordance with our Privacy
                Policy. You represent that your Contributions do not infringe on
                the intellectual property rights of any third party.
              </p>

              <h3>9. Guidelines for Reviews</h3>
              <p>
                If you leave a review or rating, it must be based on firsthand
                experience and free from offensive, discriminatory, or illegal
                language. We reserve the right to remove any review at our sole
                discretion.
              </p>

              <h3>10. Services Management</h3>
              <p>
                We reserve the right to monitor the Services for violations,
                take legal action against violators, and manage the Services in
                a manner that protects our rights and property.
              </p>

              <h3>11. Privacy Policy</h3>
              <p>
                Data privacy is a priority. Please review our Privacy Policy at{" "}
                <Link href={"/privacy-policy"} className="text-primary">
                  <strong>prismolix.com/privacy-policy</strong>
                </Link>
                . By using the Services, you consent to the transfer and
                processing of your data in the United States and other regions
                where we operate.
              </p>

              <h3>12. Term and Termination</h3>
              <p>
                These terms remain in effect while you use the Services. We
                reserve the right to deny access or terminate your account at
                our sole discretion, without notice or liability, for any breach
                of these terms.
              </p>

              <h3>13. Modifications and Interruptions</h3>
              <p>
                We may change, modify, or remove content from our platform at
                any time without notice. We are not liable for any downtime,
                interruptions, or errors that may occur during maintenance or
                hardware failures.
              </p>

              <h3>14. Governing Law</h3>
              <p>
                These Legal Terms are governed by the laws of the State of
                Idaho, United States. Any disputes will be handled in the courts
                of Meridian, Idaho.
              </p>

              <h3>15. Dispute Resolution</h3>
              <p>
                <strong>Informal Negotiations:</strong> Parties agree to attempt
                to resolve disputes informally for 30 days before initiating
                arbitration.
                <br />
                <strong>Binding Arbitration:</strong> Any unresolved dispute
                will be settled through binding arbitration under the American
                Arbitration Association (AAA) rules.
              </p>

              <h3>16. Limitation of Liability</h3>
              <p>
                Prismolix, its directors, and employees will not be liable for
                any direct, indirect, or consequential damages (including lost
                profit or data) arising from your use of the Services. Our total
                liability is limited to the amount paid by you in the one month
                preceding the claim.
              </p>

              <h3>17. Indemnification</h3>
              <p>
                You agree to defend and hold Prismolix harmless from any claims,
                damages, or expenses (including attorney's fees) arising from
                your use of the Services or breach of these Legal Terms.
              </p>

              <h3>18. Electronic Communications and Signatures</h3>
              <p>
                By using our Services, you consent to receive electronic
                communications. You agree that all electronic agreements,
                notices, and signatures satisfy all legal requirements for
                written documentation.
              </p>

              <h3>19. Contact Us</h3>
              <p>
                To resolve a complaint or receive further information, please
                contact:
                <br />
                <br />
                <strong>Prismolix LLC</strong>
                <br />
                Office 401, Plaza 06, Eiffel Tower Commercial,
                <br /> Bahria Town Phase 8, Rawalpindi
                <br />
                Email:{" "}
                <a href="mailto: info@prismolix.com" className="text-primary">
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

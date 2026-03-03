import CTA from "@/app/components/cta/CTA";
import FAQ from "@/app/components/faq/FAQ";
import HiringForm from "@/app/components/ui/HiringForm";
import React from "react";

const page = () => {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-12.5 px-3 md:px-4 lg:px-5 about-hero-section">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto">
            <h1 className="text-black! text-center font-inter">
              Prismolix links companies with {""}
              <span className="text-primary">
                elite experts, optimizing recruitment workflows
              </span>{" "}
              and offering{" "}
              <span className="text-primary">complete assistance</span> for
              sustained achievement.
            </h1>

            <HiringForm />
          </div>
        </div>
      </section>

      <section className="py-70 px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 sm:gap-20 lg:gap-25">
            <div className="text-center max-w-220 mx-auto">
              <h2 className="mb-4 sm:mb-6 md:mb-7.5">
                The Prismolix Narrative
              </h2>
              <p className="fs-20 text-[#7a7a7a]!">
                Dissatisfied with the performance and steep expenses of our
                online marketing squad, we opted for global sourcing. Within a
                quarter of our initial recruitment, our acquisition costs
                dropped by 40%. Following this triumph, we decreased operational
                overhead by 22% while boosting all vital metrics. By the
                half-year mark, we grew to seven international colleagues. After
                detailing our progress, we faced a queue of fellow founders
                asking, &apos;Can you assist us in expanding our team similarly?&apos;
              </p>
            </div>

            <div className="text-center max-w-220 mx-auto">
              <h2 className="mb-4 sm:mb-6 md:mb-7.5">Our Outlook</h2>
              <p className="fs-20 text-[#7a7a7a]!">
                We maintain that securing global expertise will serve as the
                primary strategic edge for small and mid-sized founders. The
                subsequent phase of Enterprise will be marked by a firm’s
                capacity to harness economic efficiency and superior performance
                through a worldwide squad, dedicated to driving local business
                results. We anticipate this shift today and are prepared to
                assist you in seizing it.
              </p>
            </div>

            <div className="text-center max-w-220 mx-auto">
              <h2 className="mb-4 sm:mb-6 md:mb-7.5">Our Objective</h2>
              <p className="fs-20 text-[#7a7a7a]!">
                The upcoming surge of employment and industry growth will be led
                by the visionaries, the solopreneurs, the specialists, and the
                skilled experts. We are that community. Yet, what obstructs our
                progress? The lack of resources typically reserved for corporate
                giants. We exist to provide universal access to elite global
                expertise, driving your firm’s expansion, financial
                optimization, and long-term prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <CTA
        heading={"Prepared to Revolutionize Your Enterprise?"}
        para={
          "Your comprehensive recruitment ally to optimize candidate sourcing, hiring, integration, payroll, loyalty, and regulation."
        }
      />
    </>
  );
};

export default page;

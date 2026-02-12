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
              Pavago connects businesses with{" "}
              <span className="text-primary">
                top talent, streamlining hiring processes,
              </span>{" "}
              and providing{" "}
              <span className="text-primary">comprehensive support</span> for
              long-term success.
            </h1>

            <HiringForm />
          </div>
        </div>
      </section>

      <section className="py-70 px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 sm:gap-20 lg:gap-25">
            <div className="text-center max-w-220 mx-auto">
              <h2 className="mb-4 sm:mb-6 md:mb-7.5">Our Story</h2>
              <p className="fs-20 text-[#7a7a7a]!">
                Frustrated with the results and high-cost of our digital
                marketing team, we decided to look offshore. Within 3 months of
                our first hire, our CAC had reduced by 40%. Then, seeing this
                success, we were able to drive down our operational labor costs
                by 22% and increase all critical KPIs. Within 6 months, we had
                expanded to 7 offshore teammates. After sharing our story, we
                developed a wait list of other business owners asking us, "Can
                you help us scale our team the same way?"
              </p>
            </div>

            <div className="text-center max-w-220 mx-auto">
              <h2 className="mb-4 sm:mb-6 md:mb-7.5">Our Vision</h2>
              <p className="fs-20 text-[#7a7a7a]!">
                We believe that sourcing offshore talent is going to be the key
                competitive advantage for small and medium-sized business
                owners. The next evolution of Entrepreneurship will be defined
                by a business’ ability to Leverage Cost-driven Efficiency,
                Improved Execution with a Team of Global Talent, committed to
                influencing the outcomes of the local business. We see this
                future now and we are here to help you capitalize on it too.
              </p>
            </div>

            <div className="text-center max-w-220 mx-auto">
              <h2 className="mb-4 sm:mb-6 md:mb-7.5">Our Mission</h2>
              <p className="fs-20 text-[#7a7a7a]!">
                The next wave of job creation and market expansion will belong
                to the innovators, the micro-preneurs, the consultants and
                trades. We are these people. But, what is standing in our way?
                Access to the resources of the blue chips. We exist to
                democratize access to incredible offshore talent that will
                facilitate your business’s growth, capital efficiency, and
                sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <CTA
        heading={"Ready To Transform Your Business?"}
        para={
          "Your full-service partner to streamline talent acquisition, hiring, onboarding, payroll, retention, and compliance."
        }
      />
    </>
  );
};

export default page;

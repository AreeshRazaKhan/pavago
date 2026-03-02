import CTA from "../components/cta/CTA";
import FAQ from "../components/faq/FAQ";
import Membership from "../components/membership/Membership";
import OurProcess from "../components/our-process/OurProcess";
import OurPricing from "../components/pricing/OurPricing";
import ProcessHighlight from "../components/process-highlight/ProcessHighlight";
import Testimonials from "../components/testimonials/Testimonials";
import HiringForm from "../components/ui/HiringForm";
import PulseBadge from "../components/ui/PulseBadge";

export default function Home() {
  return (
    <>
      <section className="hero-section pt-32 sm:pt-40 lg:pt-45 px-3 md:px-4 lg:px-5 pb-20">
        <div className="container mx-auto ">
          <div className="max-w-225 mx-auto text-center ">
            <PulseBadge paragraph={"Assemble Your Elite Global Team"} />
            <h1 className="mt-6">
              Empowering Growth By Sourcing Top Global Talent For {""}
              <span className="font-semibold text-primary">
                Elite Offshore Teams
              </span>
            </h1>
            <p className="fs-28 mt-6">
              Our experts provide global staffing for firms seeking top-tier
              members. Your strategy aims to find, screen, and supply premium
              international professionals for virtual positions with major
              influence.
            </p>

            <HiringForm />

            <div className="text-center flex flex-col justify-center items-center">
              <p className="fs-12 text-center mt-8 sm:mt-10">
                Partner 150+ Organizations Currently Scaling Using Prismolix's
                Global Staffing Solutions
              </p>

              {/* <div className="mt-12.5 flex items-center justify-center gap-3 sm:gap-5 md:gap-7.5">
                <div className="logo-wrapper">
                  <img
                    src="http://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2e2fc6d5023c45b6aa49_poologylogo.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>

                <div className="logo-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2e2ed71dd6de112829ad_61a6d383cb96d58bea293d9c_Logo%20on%20Login%20Page%20800x277.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>

                <div className="logo-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2f6f7e3fa2373326a6d5_integrative-dental-wellness.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>

                <div className="logo-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2e2f994730a191af16f5_65006e189db2c329b4eb2027_222-p-500.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>

                <div className="logo-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/670d2e2f00c981b49f3d98ff_logo-1-e1654696869257.webp"
                    alt=""
                    className="w-full! h-full! object-contain"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <OurProcess />

      <ProcessHighlight />

      <OurPricing />

      <Membership />

      <Testimonials />

      <CTA
        heading={
          <>
            Transform Your Team with Pavago’s{" "}
            <span className="text-primary">Top 1% Offshore Talent</span>
          </>
        }
        para={
          "Your full-service offshore recruitment partner to streamline talent acquisition, hiring, onboarding, payroll, retention, and compliance."
        }
      />

      <FAQ />
    </>
  );
}

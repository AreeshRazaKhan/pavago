import React from "react";
import CTA from "@/app/components/cta/CTA";
import Testimonials from "@/app/components/testimonials/Testimonials";
import HiringForm from "@/app/components/ui/HiringForm";
import PricingTabs from "@/app/components/ui/PricingTabs";
import "../../../styles/globals.css";

const page = () => {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-12.5 px-3 md:px-4 lg:px-5 about-hero-section">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto">
            <h1 className="text-black! text-center font-inter">
              Quality Quadrupled, Yet The Cost Is Sliced. Your
              <span className="text-primary">
                Risk Free Offshore Recruitment
              </span>{" "}
              Solution
            </h1>

            <HiringForm />
          </div>
        </div>
      </section>

      <section className="py-70 px-3 md:px-4 lg:px-5 our-pricing">
        <div className="container mx-auto">
          <PricingTabs />
        </div>
      </section>

      <Testimonials />

      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-3.5">
            <span className="font-poppins text-primary font-semibold">
              What we can do
            </span>
            <h2 className="font-semibold! max-w-175 m-auto text-center">
              Pavago Can Help You
            </h2>
            <p className="fs-20 text-center">
              Experience the benefits of hiring the top 1% Offshore Talent from
              Pavago
            </p>
          </div>

          <div className="mt-50">
            <div className="flex justify-center gap-y-3 md:gap-y-4 lg:gap-y-5 flex-wrap xl:-mx-5">
              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67123e793b22dfce4de4380c_save-cost.svg"
                      alt=""
                    />
                  </div>
                  <h3>Cost Savings</h3>
                  <p>
                    Save significantly compared to hiring onshore staff, without
                    compromising on quality.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67123e7912e6b71494977dc9_save-time.svg"
                      alt=""
                    />
                  </div>
                  <h3>Seamless Integration</h3>
                  <p>
                    Our professionals work in your time zone and are fluent in
                    English, ensuring they integrate smoothly into your existing
                    team.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67123e79ef8c413a4eb1d6c6_badge.svg"
                      alt=""
                    />
                  </div>
                  <h3>High-Quality Talent</h3>
                  <p>
                    Access top 1% offshore talent experienced in working with
                    US-based companies.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/67123e7968408dfcf12023e4_bolt.svg"
                      alt=""
                    />
                  </div>
                  <h3>Proven Track Record</h3>
                  <p>
                    We find people who have a proven track record of success
                    with US-based companies, delivering outstanding results from
                    day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading={
          "Ready to experience the benefits of Pavago’s top 1% Offshore Talent? Transform your workflow with our cost-effective and high-quality professionals."
        }
        para={
          "Your full-service offshore recruitment partner to streamline talent acquisition, hiring, onboarding, payroll, retention, and compliance."
        }
      />
    </>
  );
};

export default page;

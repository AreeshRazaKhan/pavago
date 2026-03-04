"use client";
import CTA from "@/app/components/cta/CTA";
import FAQ from "@/app/components/faq/FAQ";
import OurPricing from "@/app/components/pricing/OurPricing";
import Testimonials from "@/app/components/testimonials/Testimonials";
import HiringForm from "@/app/components/ui/HiringForm";
import { useModal } from "@/context/ModalContext";
import { Cat } from "lucide-react";
import React from "react";

const page = () => {
  const { openHiringModal } = useModal();

  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-20 px-3 md:px-4 lg:px-5 about-hero-section bg-[#f2ebff]! bg-[url('/images/hero-section-bg.svg')]! bg-top bg-no-repeat">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto">
            <h1 className="font-h2 text-center">
              You Don't Need to Pay $125,000/yr for a Remote Product Designer
            </h1>
            <p className="text-center fs-22 mt-6">
              The average salary of a product designer in the U.S. is
              $125,000/year. Pavago’s offshore recruitment specialists help you
              hire experienced product designers for small businesses at just
              30% of the cost, providing expert design management without the
              heavy price.
            </p>

            <HiringForm />
          </div>
        </div>
      </section>

      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2">
              <h2>Tired of Overpaying for a Product Designer?</h2>
              <p className="fs-20 mt-10">
                Pavago's offshore recruitment services connect you with highly
                skilled product designers who specialize in digital product
                design, user experience, and visual storytelling, offering
                premium talent at a fraction of the local cost.
              </p>
              <button
                onClick={() => openHiringModal(true)}
                className="btn btn-primary font-semibold! cursor-pointer  mt-10"
              >
                Start Hiring
              </button>
            </div>

            <div className="w-full lg:w-2/5">
              <img src="/images/illustration-1.svg" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-2/5">
              <img src="/images/illustration-2.svg" />
            </div>

            <div className="w-full lg:w-1/2">
              <h2>
                Hiring Offshore Product Designers From Pavago Can Help You
              </h2>

              <ul className="flex flex-col gap-4 lg:gap-5 w-full text-[#333]! mt-10 fs-18">
                <li className="flex items-center gap-4">
                  <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                    <img
                      src="/images/tick.svg"
                      className="w-full! h-full! object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span>
                      Hire industry experts without the local overhead costs
                    </span>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                    <img
                      src="/images/tick.svg"
                      className="w-full! h-full! object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span>
                      Hire industry experts without the local overhead costs
                    </span>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                    <img
                      src="/images/tick.svg"
                      className="w-full! h-full! object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span>
                      Hire industry experts without the local overhead costs
                    </span>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div className="img-wrapper min-w-4 w-4 h-4 lg:min-w-6 lg:w-6 lg:h-6">
                    <img
                      src="/images/tick.svg"
                      className="w-full! h-full! object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span>
                      Hire industry experts without the local overhead costs
                    </span>
                  </div>
                </li>
              </ul>
              <button
                onClick={() => openHiringModal(true)}
                className="btn btn-primary font-semibold! cursor-pointer  mt-10"
              >
                Start Hiring
              </button>
            </div>
          </div>
        </div>
      </section>

      <OurPricing />

      <Testimonials />

      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-3.5 max-w-200 mx-auto">
            <h2 className="font-semibold!  m-auto text-center">
              Beyond Offshore Recruitment: Our Ecosystem for Your Long-Term
              Success
            </h2>
            <p className="fs-20 text-center">
              Recruiting through Prismolix means more than just acquiring top
              talent. You’ll benefit from our comprehensive ecosystem of support
              services, ensuring your new remote accountant succeeds and
              integrates seamlessly into your business operations.
            </p>
          </div>

          <div className="mt-50">
            <div className="flex justify-center gap-y-3 md:gap-y-4 lg:gap-y-5 flex-wrap xl:-mx-5">
              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-13.25">
                    <img src="/images/save-cost.svg" alt="" />
                  </div>
                  <h3>Simplified Compensation</h3>
                  <p>
                    Forget about the stresses of payroll. We process all
                    payments, so you can focus on building your business.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-13.25">
                    <img src="/images/save-time.svg" alt="" />
                  </div>
                  <h3>Regulatory Confidence</h3>
                  <p>
                    Remain compliant with all necessary regulations without the
                    worry. We handle all of the legalities for you.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-13.25">
                    <img src="/images/badge.svg" alt="" />
                  </div>
                  <h3>Continuous Upskilling</h3>
                  <p>
                    Your new remote product designer will receive ongoing
                    coaching to stay atop of market shifts and enhance their
                    talents.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-13.25">
                    <img src="/images/bolt.svg" alt="" />
                  </div>
                  <h3>Committed Assistance</h3>
                  <p>
                    Enjoy peace of mind with our committed support staff, ready
                    to help you and your talent at every stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <CTA
        heading={"Ready to Scale Your Vision with Top-Tier Offshore Talent?"}
        para={"Schedule Your Complimentary Consultation Today!"}
      />
    </>
  );
};

export default page;

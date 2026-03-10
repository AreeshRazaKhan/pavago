import React from "react";
import CTA from "@/app/components/cta/CTA";
import Testimonials from "@/app/components/testimonials/Testimonials";
import HiringForm from "@/app/components/ui/HiringForm";
import PricingTabs from "@/app/components/ui/PricingTabs";
import "../../../styles/globals.css";
import HiringModal from "@/app/components/modal/HiringModal";

export const metadata = {
  title:
    "Transparent Offshore Staffing Pricing | Affordable Hiring Plans - Prismolix",
  description:
    "Get premium global talent without the overhead. Explore our transparent, cost-effective hiring models with no hidden fees. Find the perfect plan for your business today.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title:
      "Transparent Offshore Staffing Pricing | Affordable Hiring Plans - Prismolix",
    description:
      "Get premium global talent without the overhead. Explore our transparent, cost-effective hiring models with no hidden fees. Find the perfect plan for your business today.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Transparent Offshore Staffing Pricing | Affordable Hiring Plans - Prismolix",
    description:
      "Get premium global talent without the overhead. Explore our transparent, cost-effective hiring models with no hidden fees. Find the perfect plan for your business today.",
  },
};

const page = () => {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-12.5 px-3 md:px-4 lg:px-5 about-hero-section">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto">
            <h1 className="text-black! text-center font-inter">
              Efficiency Multiplied, Yet Expenses Reduced. Your
              <span className="text-primary"> Secure Global Staffing</span>{" "}
              Strategy
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
              Prismolix Can Assist You
            </h2>
            <p className="fs-20 text-center">
              Realize the Advantages of Recruiting Elite 1% Global Experts from
              Prismolix
            </p>
          </div>

          <div className="mt-50">
            <div className="flex justify-center gap-y-3 md:gap-y-4 lg:gap-y-5 flex-wrap xl:-mx-5">
              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-13.25">
                    <img src="/images/save-cost.svg" alt="" />
                  </div>
                  <h3>Financial Efficiency</h3>
                  <p>
                    Reduce expenses considerably compared to local staffing,
                    without sacrificing excellence.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-13.25">
                    <img src="/images/save-time.svg" alt="" />
                  </div>
                  <h3>Fluid Incorporation</h3>
                  <p>
                    Our experts operate within your schedule and possess
                    native-level English proficiency, guaranteeing they blend
                    naturally into your current squad.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-13.25">
                    <img src="/images/badge.svg" alt="" />
                  </div>
                  <h3>Premier Professionals</h3>
                  <p>
                    Gain access to the elite 1% of global experts with a proven
                    history of collaborating with American organizations.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-0 xl:px-5 ">
                <div className="card p-5 flex flex-col items-center  gap-3 md:gap-4 text-center">
                  <div className="img-wrapper w-13.25">
                    <img src="/images/bolt.svg" alt="" />
                  </div>
                  <h3>Demonstrated Excellence</h3>
                  <p>
                    We identify individuals with a documented history of
                    achievement with American organizations, providing
                    exceptional performance from the start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading={
          "Experience elite global experts. Upgrade your workflow with our high-quality, affordable professionals."
        }
        para={
          "Your comprehensive global staffing ally to optimize candidate sourcing, hiring, integration, payroll, loyalty, and regulation."
        }
      />

      <HiringModal />
    </>
  );
};

export default page;

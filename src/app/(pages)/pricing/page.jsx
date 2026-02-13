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

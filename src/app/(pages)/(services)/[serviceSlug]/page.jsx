import CTA from "@/app/components/cta/CTA";
import FAQ from "@/app/components/faq/FAQ";
import OurPricing from "@/app/components/pricing/OurPricing";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-12.5 px-3 md:px-4 lg:px-5 about-hero-section">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto">
            <h1 className="font-h2 text-center">
              Hire Top-Tier Offshore Product Talent with Pavago
            </h1>
            <p className="text-center fs-22 mt-6">
              Pavago has expert recruiters dedicated to connecting SMBs with
              top-tier offshore digital product professionals. Whether you're
              looking for a skilled remote product manager, graphic designer, or
              marketer, we help you find the right talent to elevate your
              product vision at very fair prices.
            </p>

            <div className="flex justify-center items-center gap-3.5 mt-50">
              <Link href={"/"} className="category-list-btn">
                Product Manager
              </Link>
              <Link href={"/"} className="category-list-btn">
                Product Manager
              </Link>
              <Link href={"/"} className="category-list-btn">
                Product Manager
              </Link>
              <Link href={"/"} className="category-list-btn">
                Product Manager
              </Link>
              <Link href={"/"} className="category-list-btn">
                Product Manager
              </Link>
              <Link href={"/"} className="category-list-btn">
                Product Manager
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading={"Why Choose Pavago For Offshore Digital Product Recruitment?"}
        para={
          "When you partner with Pavago, you tap into a global network of exceptional graphic designers, product marketers, UX/UI experts, animators, and more. With our streamlined recruitment process, we connect you with skilled professionals who are a perfect fit for your project, helping you move forward quickly and efficiently – all at fair, transparent pricing."
        }
      />

      <OurPricing />

      <FAQ />
    </>
  );
};

export default page;

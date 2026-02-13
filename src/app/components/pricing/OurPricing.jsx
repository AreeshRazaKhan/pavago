import React from "react";
import PricingTabs from "../ui/PricingTabs";

const OurPricing = () => {
  return (
    <>
      <section className="our-pricing px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2>Our Pricing (Made Risk Free For You)</h2>
            </div>

            <div className="mt-5 w-full">
              <PricingTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPricing;

import HiringForm from "@/app/components/ui/HiringForm";
import React from "react";

const page = () => {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-12.5 px-3 md:px-4 lg:px-5 about-hero-section bg-[#f2ebff]! bg-[url('/images/hero-section-bg.svg')]! bg-top bg-no-repeat">
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
        <div className="container mx-auto"></div>
      </section>
    </>
  );
};

export default page;

import React from "react";
import PulseBadge from "../ui/PulseBadge";

const Testimonials = () => {
  return (
    <>
      <section className="py-70 px-3 md:px-4 lg:px-5 bg-primary">
        <div className="container mx-auto">
          <div className="text-center flex flex-col gap-3.5">
            <span className="font-poppins text-white font-semibold">
              Testimonials
            </span>

            <PulseBadge paragraph={"Straight Talk From Biz Owners Like You"} />
          </div>

          <div className="mt-50"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

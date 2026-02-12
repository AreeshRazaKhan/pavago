import React from "react";
import HiringForm from "../ui/HiringForm";

const CTA = ({ heading, para }) => {
  return (
    <>
      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="max-w-200 mx-auto text-center">
            <h2 className="font-inter font-semibold!">{heading}</h2>
            <p className="fs-20 mt-4">{para}</p>

            <HiringForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;

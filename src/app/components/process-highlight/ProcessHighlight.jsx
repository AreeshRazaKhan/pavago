import React from "react";
import PulseBadge from "../ui/PulseBadge";

const ProcessHighlight = () => {
  return (
    <>
      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-y-12 justify-between items-center px-8 md:px-10 py-14 md:py-16 lg:p-20 rounded-[20px] process-highlight-inner">
            <div className="w-full lg:w-[45%]">
              <img
                src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/677793f1b5083790da673cd5_chat-graphics.webp"
                alt=""
              />
            </div>

            <div className="w-full lg:w-[45%]">
              <PulseBadge
                margin={"ml-0!"}
                paragraph={"Create Your Elite Global Squad Now"}
              />
              <h2 className="text-white! mt-6 md:mt-8 lg:mt-12">
                You Envision Them. We Secure Them.
              </h2>

              <p className="text-white! fs-18 mt-6 sm:mt-8 lg:mt-12">
                Revolutionize your squad using elite professionals from our
                international circle, custom-selected and pre-screened to meet
                your goals - at 70% below standard staffing prices. Our global
                sourcing blends advanced AI with actual expert intuition to
                assist you growing your staff the best way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessHighlight;

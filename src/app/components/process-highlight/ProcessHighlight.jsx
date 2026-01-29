import React from "react";
import PulseBadge from "../ui/PulseBadge";

const ProcessHighlight = () => {
  return (
    <>
      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-20 rounded-[20px] process-highlight-inner">
            <div className="w-full lg:w-[45%]">
              <img
                src="https://cdn.prod.website-files.com/665e07a05eaec7b470f49845/677793f1b5083790da673cd5_chat-graphics.webp"
                alt=""
              />
            </div>

            <div className="w-full lg:w-[45%]">
              <PulseBadge
                margin={"ml-0!"}
                paragraph={"Build Your Dream Offshore Team Today"}
              />
              <h2 className="text-white! mt-12">
                You Think of Them. We Find Them.
              </h2>

              <p className="text-white! fs-18  mt-12">
                Transform your team with top talent from our global network,
                hand-picked and pre-vetted to fit your needs - at 70% less than
                traditional hiring costs. Our offshore recruitment merges smart
                AI with real human insight to help you scale your team the right
                way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessHighlight;
